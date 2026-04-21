(function () {
  var STORAGE_KEY = 'elbasma-docs-theme';

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage failures.
    }
  }

  function resolveInitialTheme() {
    var stored = getStoredTheme();
    if (stored === 'light' || stored === 'dark') return stored;
    return 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }

  function updateButton(button, theme) {
    if (!button) return;
    var next = theme === 'light' ? 'dark' : 'light';
    button.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    button.textContent = next === 'dark' ? 'Dark mode' : 'White mode';
  }

  function initToggle() {
    var button = document.getElementById('themeToggle');
    if (!button) return;

    var currentTheme = document.documentElement.getAttribute('data-theme') || resolveInitialTheme();
    updateButton(button, currentTheme);

    button.addEventListener('click', function () {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(currentTheme);
      setStoredTheme(currentTheme);
      updateButton(button, currentTheme);
    });
  }

  // Apply theme as early as possible.
  applyTheme(resolveInitialTheme());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
})();
