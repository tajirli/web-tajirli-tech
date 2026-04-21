const STORAGE_KEY = 'elbasma-internal-progress-v1';

const defaultState = {
  completedPercent: 65,
  currentSprint: 'Architecture hardening + admin UX polish',
  blockers: 'No hard blockers now. Monitor API latency on product listing during peak traffic.',
  nextMilestoneDate: '2026-05-05',
  notes: 'Keep JS legacy bridge stable while migrating modules to feature/core/shared layout.',
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed };
  } catch {
    return { ...defaultState };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderSummary(state) {
  const percentEl = document.getElementById('completedPercentValue');
  const sprintEl = document.getElementById('currentSprintValue');
  const dateEl = document.getElementById('nextMilestoneDateValue');

  if (percentEl) percentEl.textContent = `${state.completedPercent}%`;
  if (sprintEl) sprintEl.textContent = state.currentSprint;
  if (dateEl) dateEl.textContent = state.nextMilestoneDate || 'TBD';
}

function bootstrap() {
  const form = document.getElementById('progressForm');
  if (!form) return;

  const state = loadState();
  form.completedPercent.value = state.completedPercent;
  form.currentSprint.value = state.currentSprint;
  form.blockers.value = state.blockers;
  form.nextMilestoneDate.value = state.nextMilestoneDate;
  form.notes.value = state.notes;

  renderSummary(state);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const next = {
      completedPercent: Number(form.completedPercent.value || 0),
      currentSprint: String(form.currentSprint.value || '').trim(),
      blockers: String(form.blockers.value || '').trim(),
      nextMilestoneDate: String(form.nextMilestoneDate.value || '').trim(),
      notes: String(form.notes.value || '').trim(),
    };
    saveState(next);
    renderSummary(next);
    const msg = document.getElementById('saveMessage');
    if (msg) {
      msg.textContent = `Saved locally on ${new Date().toLocaleString()}`;
    }
  });
}

document.addEventListener('DOMContentLoaded', bootstrap);
