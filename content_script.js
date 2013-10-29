var REGEXP_LANG_TABLE = {
  en: /^[^:]* likes? your \w+[:.]/g,
  ja: /^[^:]*について「いいね！」と(言|い)っています[:。]/g
};

setInterval(function () {
  $('li._33c').each(function () {
    var lang = $('html').attr('lang') || 'en';
    var regexp = REGEXP_LANG_TABLE[lang];
    if ( $(this).text().match(regexp) ) {
      $(this).hide();
    }
  });
}, 500);
