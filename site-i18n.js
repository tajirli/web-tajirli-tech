(function () {
  var STORAGE_KEY = 'tajirli-site-language-v1';
  var SUPPORTED = ['en', 'fr', 'ar'];

  var translations = {
    en: {
      common: {
        'brand.name': 'Tajirli Tech Hub',
        'brand.aria': 'Tajirli home',
        'lang.label': 'Language',
        'lang.aria': 'Language selector',
        'lang.en': 'English',
        'lang.fr': 'French',
        'lang.ar': 'Arabic'
      },
      pages: {
        home: {
          'meta.title': 'Tajirli Tech Platform Hub',
          'meta.description': 'A clear and usable entry point for Tajirli web, app, architecture docs, and runbooks.',
          'skip.main': 'Skip to main content',
          'nav.mainDocs': 'Main Docs',
          'nav.appDocs': 'App Docs',
          'nav.architecture': 'Architecture',
          'nav.runbook': 'Runbook',
          'cta.startHere': 'Start Here',
          'hero.eyebrow': 'Unified Product Workspace',
          'hero.title': 'Find the right document in seconds, not minutes.',
          'hero.lead': 'A structured entry point for website and mobile teams. Built around usability: clear choices, reduced cognitive load, and predictable navigation.',
          'hero.openMain': 'Open Main Docs',
          'hero.openApp': 'Open App Docs',
          'quick.title': 'Quick Start',
          'quick.step1': 'Pick your track: website or app.',
          'quick.step2': 'Open architecture before editing modules.',
          'quick.step3': 'Use runbook for release and deployment checks.',
          'quick.status': 'Pages ready: root index and fallback 404 are active.',
          'destinations.title': 'Choose Your Destination',
          'destinations.lead': 'Each route is task-focused so teams can move faster with less friction.',
          'card.website.kicker': 'Website',
          'card.website.title': 'Frontend Architecture',
          'card.website.desc': 'Modules, API map, and migration priorities for the web experience.',
          'card.website.link': 'Open Architecture',
          'card.mobile.kicker': 'Mobile',
          'card.mobile.title': 'App Engineering Docs',
          'card.mobile.desc': 'Core runtime, state boundaries, and operational checks for the app.',
          'card.mobile.link': 'Open App Docs',
          'card.ops.kicker': 'Operations',
          'card.ops.title': 'Runbook and Delivery',
          'card.ops.desc': 'Release controls, smoke-check flow, and deployment guardrails.',
          'card.ops.link': 'Open Runbook',
          'card.plan.kicker': 'Planning',
          'card.plan.title': 'Progress Tracker',
          'card.plan.desc': 'Centralize blockers, sprint focus, and milestone readiness snapshots.',
          'card.plan.link': 'Open Tracker',
          'workflow.title': 'Follow This Website Hierarchy',
          'workflow.lead': 'Designed to reduce confusion and guide new team members from intent to action.',
          'workflow.step1.title': 'Start from Home',
          'workflow.step1.desc': 'Use this page to decide your path by domain and responsibility.',
          'workflow.step2.title': 'Open Domain Docs',
          'workflow.step2.desc': 'Navigate to architecture, modules, and runbook documents for your track.',
          'workflow.step3.title': 'Execute and Track',
          'workflow.step3.desc': 'Use runbook for implementation and progress tracker for reporting.',
          'roles.title': 'Choose by Role',
          'roles.lead': 'Direct entry points for engineering, product, and operations teams.',
          'roles.engineer.title': 'Engineer',
          'roles.engineer.desc': 'Architecture-first path for implementation and technical decisions.',
          'roles.engineer.link': 'Go to Architecture',
          'roles.product.title': 'Product and PM',
          'roles.product.desc': 'Understand module boundaries, progress, and release readiness.',
          'roles.product.link': 'Go to Progress Tracker',
          'roles.ops.title': 'Operations',
          'roles.ops.desc': 'Run release checklists, deployment controls, and incident-safe steps.',
          'roles.ops.link': 'Go to Runbook',
          'why.title': 'Why this layout is easier',
          'why.b1': 'Clear hierarchy: first action appears above the fold.',
          'why.b2': 'Recognition over recall: labels map to real team tasks.',
          'why.b3': 'Reduced noise: one decision per card.',
          'why.b4': 'Consistent patterns across desktop and mobile.',
          'hosting.title': 'Hosting Status',
          'hosting.text': 'GitHub Pages can serve this project directly because root routing files are now present.',
          'hosting.c1': 'Root index: ready',
          'hosting.c2': '404 fallback: ready',
          'hosting.c3': 'Docs path: public',
          'footer.note': 'Tajirli Tech workspace hub. Designed for rapid, low-friction onboarding and execution.'
        },
        '404': {
          'meta.title': 'Page Not Found | Tajirli Tech',
          'meta.description': 'Tajirli Tech fallback page with quick recovery links.',
          'notfound.code': '404',
          'notfound.title': 'We could not find that page.',
          'notfound.lead': 'You will be redirected to the homepage in a moment. If you prefer, choose one of the quick links below.',
          'notfound.home': 'Back to Homepage',
          'notfound.docs': 'Open Main Docs',
          'notfound.app': 'Open App Docs',
          'notfound.helpTitle': 'Helpful Links',
          'notfound.arch': 'Architecture',
          'notfound.runbook': 'Runbook',
          'notfound.progress': 'Progress Tracker'
        }
      }
    },
    fr: {
      common: {
        'brand.name': 'Hub Tajirli Tech',
        'brand.aria': 'Accueil Tajirli',
        'lang.label': 'Langue',
        'lang.aria': 'Selection de langue',
        'lang.en': 'Anglais',
        'lang.fr': 'Francais',
        'lang.ar': 'Arabe'
      },
      pages: {
        home: {
          'meta.title': 'Plateforme Tajirli Tech',
          'meta.description': 'Point d entree clair et utilisable pour le web, l app, l architecture et les runbooks Tajirli.',
          'skip.main': 'Aller au contenu principal',
          'nav.mainDocs': 'Docs principales',
          'nav.appDocs': 'Docs app',
          'nav.architecture': 'Architecture',
          'nav.runbook': 'Runbook',
          'cta.startHere': 'Commencer ici',
          'hero.eyebrow': 'Espace produit unifie',
          'hero.title': 'Trouvez le bon document en quelques secondes.',
          'hero.lead': 'Un point d entree structure pour les equipes web et mobile. Concu pour la lisibilite: choix clairs, charge cognitive reduite et navigation previsible.',
          'hero.openMain': 'Ouvrir les docs principales',
          'hero.openApp': 'Ouvrir les docs app',
          'quick.title': 'Demarrage rapide',
          'quick.step1': 'Choisissez votre parcours: web ou app.',
          'quick.step2': 'Consultez l architecture avant de modifier les modules.',
          'quick.step3': 'Utilisez le runbook pour les verifications de release.',
          'quick.status': 'Pages pretes: index racine et fallback 404 actifs.',
          'destinations.title': 'Choisissez votre destination',
          'destinations.lead': 'Chaque route est orientee tache pour accelerer le travail.',
          'card.website.kicker': 'Web',
          'card.website.title': 'Architecture front-end',
          'card.website.desc': 'Modules, APIs et priorites de migration pour le web.',
          'card.website.link': 'Ouvrir architecture',
          'card.mobile.kicker': 'Mobile',
          'card.mobile.title': 'Docs engineering app',
          'card.mobile.desc': 'Runtime, limites d etat et controles operationnels de l app.',
          'card.mobile.link': 'Ouvrir docs app',
          'card.ops.kicker': 'Operations',
          'card.ops.title': 'Runbook et livraison',
          'card.ops.desc': 'Controles de release, smoke checks et garde-fous de deploiement.',
          'card.ops.link': 'Ouvrir runbook',
          'card.plan.kicker': 'Planification',
          'card.plan.title': 'Suivi de progression',
          'card.plan.desc': 'Centralisez blocages, sprint focus et etat des jalons.',
          'card.plan.link': 'Ouvrir suivi',
          'workflow.title': 'Hierarchie web recommandee',
          'workflow.lead': 'Concue pour reduire la confusion et guider de l intention vers l action.',
          'workflow.step1.title': 'Commencer par l accueil',
          'workflow.step1.desc': 'Utilisez cette page pour choisir votre parcours par domaine.',
          'workflow.step2.title': 'Ouvrir les docs du domaine',
          'workflow.step2.desc': 'Naviguez vers architecture, modules et runbook.',
          'workflow.step3.title': 'Executer et suivre',
          'workflow.step3.desc': 'Utilisez le runbook pour agir et le tracker pour reporter.',
          'roles.title': 'Choisir par role',
          'roles.lead': 'Points d entree directs pour engineering, produit et operations.',
          'roles.engineer.title': 'Ingenieur',
          'roles.engineer.desc': 'Parcours architecture-first pour implementation et decisions techniques.',
          'roles.engineer.link': 'Aller a architecture',
          'roles.product.title': 'Produit et PM',
          'roles.product.desc': 'Comprendre frontieres de modules, progression et readiness.',
          'roles.product.link': 'Aller au suivi',
          'roles.ops.title': 'Operations',
          'roles.ops.desc': 'Executer checklists release et etapes de deploiement securisees.',
          'roles.ops.link': 'Aller au runbook',
          'why.title': 'Pourquoi cette interface est plus simple',
          'why.b1': 'Hierarchie claire: l action principale est visible immediatement.',
          'why.b2': 'Reconnaissance avant memoire: les labels suivent les taches reelles.',
          'why.b3': 'Moins de bruit: une decision claire par carte.',
          'why.b4': 'Comportement coherent sur desktop et mobile.',
          'hosting.title': 'Etat de l hebergement',
          'hosting.text': 'GitHub Pages peut servir ce projet directement car les fichiers racine sont presents.',
          'hosting.c1': 'Index racine: pret',
          'hosting.c2': 'Fallback 404: pret',
          'hosting.c3': 'Chemin docs: public',
          'footer.note': 'Hub Tajirli Tech. Concu pour un onboarding rapide et une execution sans friction.'
        },
        '404': {
          'meta.title': 'Page introuvable | Tajirli Tech',
          'meta.description': 'Page de secours Tajirli avec liens de reprise.',
          'notfound.code': '404',
          'notfound.title': 'Cette page est introuvable.',
          'notfound.lead': 'Redirection vers l accueil dans un instant. Sinon, utilisez les liens ci-dessous.',
          'notfound.home': 'Retour accueil',
          'notfound.docs': 'Ouvrir docs principales',
          'notfound.app': 'Ouvrir docs app',
          'notfound.helpTitle': 'Liens utiles',
          'notfound.arch': 'Architecture',
          'notfound.runbook': 'Runbook',
          'notfound.progress': 'Suivi de progression'
        }
      }
    },
    ar: {
      common: {
        'brand.name': 'مركز تجيرلي تك',
        'brand.aria': 'الصفحة الرئيسية تجيرلي',
        'lang.label': 'اللغة',
        'lang.aria': 'اختيار اللغة',
        'lang.en': 'الانجليزية',
        'lang.fr': 'الفرنسية',
        'lang.ar': 'العربية'
      },
      pages: {
        home: {
          'meta.title': 'منصة تجيرلي تك',
          'meta.description': 'نقطة دخول واضحة وسهلة لاستخدام وثائق الويب والتطبيق والهندسة في تجيرلي.',
          'skip.main': 'انتقل الى المحتوى الرئيسي',
          'nav.mainDocs': 'الوثائق الرئيسية',
          'nav.appDocs': 'وثائق التطبيق',
          'nav.architecture': 'الهندسة',
          'nav.runbook': 'دليل التشغيل',
          'cta.startHere': 'ابدأ من هنا',
          'hero.eyebrow': 'مساحة عمل موحدة للمنتج',
          'hero.title': 'اعثر على الوثيقة الصحيحة خلال ثوان.',
          'hero.lead': 'واجهة منظمة لفرق الويب والموبايل. مبنية على الوضوح وتقليل العبء الذهني ومسار تنقل متوقع.',
          'hero.openMain': 'افتح الوثائق الرئيسية',
          'hero.openApp': 'افتح وثائق التطبيق',
          'quick.title': 'بداية سريعة',
          'quick.step1': 'اختر المسار المناسب: الويب او التطبيق.',
          'quick.step2': 'افتح صفحة الهندسة قبل تعديل اي وحدة.',
          'quick.step3': 'استخدم دليل التشغيل قبل النشر والتنفيذ.',
          'quick.status': 'الاستضافة جاهزة: ملف index في الجذر وصفحة 404 مفعلة.',
          'destinations.title': 'اختر وجهتك',
          'destinations.lead': 'كل مسار مبني على المهمة لتقليل التشويش وتسريع العمل.',
          'card.website.kicker': 'الويب',
          'card.website.title': 'هندسة الواجهة الامامية',
          'card.website.desc': 'الوحدات وواجهات API واولويات الترحيل الخاصة بمسار الويب.',
          'card.website.link': 'افتح الهندسة',
          'card.mobile.kicker': 'الموبايل',
          'card.mobile.title': 'وثائق هندسة التطبيق',
          'card.mobile.desc': 'تشغيل التطبيق وحدود الحالة والفحوص التشغيلية.',
          'card.mobile.link': 'افتح وثائق التطبيق',
          'card.ops.kicker': 'العمليات',
          'card.ops.title': 'دليل التشغيل والتسليم',
          'card.ops.desc': 'ضوابط الاصدار وفحوص السلامة وخطوات النشر.',
          'card.ops.link': 'افتح دليل التشغيل',
          'card.plan.kicker': 'التخطيط',
          'card.plan.title': 'متابعة التقدم',
          'card.plan.desc': 'تابع العوائق وتركيز السبرنت وحالة الجاهزية.',
          'card.plan.link': 'افتح المتابعة',
          'workflow.title': 'الهيكل المقترح للموقع',
          'workflow.lead': 'مصمم لتقليل الحيرة وتوجيه الفريق من النية الى التنفيذ.',
          'workflow.step1.title': 'ابدأ من الصفحة الرئيسية',
          'workflow.step1.desc': 'حدد المسار حسب المجال والمسؤولية.',
          'workflow.step2.title': 'افتح وثائق المجال',
          'workflow.step2.desc': 'انتقل الى الهندسة والوحدات ودليل التشغيل.',
          'workflow.step3.title': 'نفذ وتابع',
          'workflow.step3.desc': 'استخدم دليل التشغيل للتنفيذ وصفحة التقدم للتقارير.',
          'roles.title': 'اختر حسب الدور',
          'roles.lead': 'مسارات مباشرة لفرق الهندسة والمنتج والعمليات.',
          'roles.engineer.title': 'المهندس',
          'roles.engineer.desc': 'مسار هندسي يبدأ من المعمارية لاتخاذ قرارات تقنية صحيحة.',
          'roles.engineer.link': 'اذهب الى الهندسة',
          'roles.product.title': 'المنتج وادارة المشروع',
          'roles.product.desc': 'تابع حدود الوحدات والتقدم وجاهزية الاصدار.',
          'roles.product.link': 'اذهب الى المتابعة',
          'roles.ops.title': 'العمليات',
          'roles.ops.desc': 'نفذ قوائم التحقق وخطوات نشر آمنة وقابلة للتكرار.',
          'roles.ops.link': 'اذهب الى دليل التشغيل',
          'why.title': 'لماذا هذا التصميم اسهل',
          'why.b1': 'تسلسل واضح: الاجراء الرئيسي ظاهر من اول الشاشة.',
          'why.b2': 'التركيز على التعرف بدل التذكر عبر تسميات واقعية.',
          'why.b3': 'تقليل الضوضاء: قرار واضح لكل بطاقة.',
          'why.b4': 'تجربة متسقة على الكمبيوتر والجوال.',
          'hosting.title': 'حالة الاستضافة',
          'hosting.text': 'يمكن لـ GitHub Pages نشر المشروع مباشرة لان ملفات التوجيه في الجذر موجودة.',
          'hosting.c1': 'index في الجذر: جاهز',
          'hosting.c2': 'صفحة 404: جاهزة',
          'hosting.c3': 'مسار docs: عام',
          'footer.note': 'مركز تجيرلي تك. تصميم يدعم انطلاق سريع وتنفيذ واضح.'
        },
        '404': {
          'meta.title': 'الصفحة غير موجودة | تجيرلي تك',
          'meta.description': 'صفحة بديلة مع روابط مفيدة للعودة السريعة.',
          'notfound.code': '404',
          'notfound.title': 'لم نتمكن من العثور على هذه الصفحة.',
          'notfound.lead': 'سيتم تحويلك الى الصفحة الرئيسية بعد لحظات. يمكنك ايضا استخدام الروابط السريعة.',
          'notfound.home': 'العودة الى الرئيسية',
          'notfound.docs': 'فتح الوثائق الرئيسية',
          'notfound.app': 'فتح وثائق التطبيق',
          'notfound.helpTitle': 'روابط مفيدة',
          'notfound.arch': 'الهندسة',
          'notfound.runbook': 'دليل التشغيل',
          'notfound.progress': 'متابعة التقدم'
        }
      }
    }
  };

  function getStoredLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setStoredLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage failures.
    }
  }

  function getInitialLanguage() {
    var stored = getStoredLanguage();
    if (SUPPORTED.indexOf(stored) >= 0) return stored;

    var browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(browser) >= 0) return browser;
    return 'en';
  }

  function getPageName() {
    return document.body && document.body.dataset && document.body.dataset.page
      ? document.body.dataset.page
      : 'home';
  }

  function getTranslation(lang, key) {
    var page = getPageName();
    var source = translations[lang] || translations.en;
    var pageMap = source.pages && source.pages[page] ? source.pages[page] : {};
    var commonMap = source.common || {};

    if (Object.prototype.hasOwnProperty.call(pageMap, key)) return pageMap[key];
    if (Object.prototype.hasOwnProperty.call(commonMap, key)) return commonMap[key];

    var fallbackPageMap = translations.en.pages && translations.en.pages[page] ? translations.en.pages[page] : {};
    if (Object.prototype.hasOwnProperty.call(fallbackPageMap, key)) return fallbackPageMap[key];
    if (Object.prototype.hasOwnProperty.call(translations.en.common, key)) return translations.en.common[key];

    return '';
  }

  function applyLanguage(lang) {
    var safeLang = SUPPORTED.indexOf(lang) >= 0 ? lang : 'en';
    var isArabic = safeLang === 'ar';

    document.documentElement.lang = safeLang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', isArabic);

    var title = getTranslation(safeLang, 'meta.title');
    if (title) document.title = title;

    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      var desc = getTranslation(safeLang, 'meta.description');
      if (desc) meta.setAttribute('content', desc);
    }

    var textNodes = document.querySelectorAll('[data-i18n]');
    textNodes.forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      var value = getTranslation(safeLang, key);
      if (value) node.textContent = value;
    });

    var attrNodes = document.querySelectorAll('[data-i18n-attr]');
    attrNodes.forEach(function (node) {
      var spec = node.getAttribute('data-i18n-attr') || '';
      var pairs = spec.split(';').map(function (part) {
        return part.trim();
      }).filter(Boolean);

      pairs.forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var attrName = parts[0].trim();
        var key = parts[1].trim();
        var value = getTranslation(safeLang, key);
        if (value) node.setAttribute(attrName, value);
      });
    });

    var select = document.getElementById('languageSelect');
    if (select && select.value !== safeLang) {
      select.value = safeLang;
    }

    setStoredLanguage(safeLang);
  }

  function bindLanguageSelect() {
    var select = document.getElementById('languageSelect');
    if (!select) return;

    select.addEventListener('change', function () {
      applyLanguage(select.value);
    });
  }

  var initial = getInitialLanguage();
  applyLanguage(initial);
  bindLanguageSelect();
})();
