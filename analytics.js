(function () {
  'use strict';

  const measurementId = 'G-J0MEBSQHMK';
  const productionHost = 'tools.traumainformedoregon.org';
  const privacySignal = navigator.globalPrivacyControl === true ||
    navigator.doNotTrack === '1' ||
    window.doNotTrack === '1';

  if (window.location.hostname.toLowerCase() !== productionHost || privacySignal) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted'
  });
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_referrer: '',
    cookie_domain: productionHost,
    cookie_prefix: 'tio_tools',
    cookie_expires: 2592000,
    cookie_update: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const loader = document.createElement('script');
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(loader);
})();
