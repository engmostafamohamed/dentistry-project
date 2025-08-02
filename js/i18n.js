document.addEventListener('DOMContentLoaded', function () {
  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'en',
      debug: false,
      backend: {
        loadPath: 'locales/{{lng}}.json'
      }
    }, function(err, t) {
      // Initialize jquery-i18next
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });
      // Localize initial content
      updateContent();
    });

  function updateContent() {
    $('[data-i18n]').localize();
    // Handle RTL for Arabic
    if (i18next.language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('rtl');
    }
  }

  // Language toggle button
  const langBtn = document.getElementById('languageBtn');
  langBtn.addEventListener('click', function () {
    const newLang = i18next.language === 'en' ? 'ar' : 'en';
    i18next.changeLanguage(newLang, () => {
      updateContent();
    });
  });
});
