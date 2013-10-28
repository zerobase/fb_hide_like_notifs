var REGEXP_LANG_TABLE = {
  en: /^[^:]* likes? your \w+:/g,
  ja: /^[^:]*について「いいね！」と(言|い)っています:/g
};

var lang = $('html').attr('lang') || 'en';
var regexp = REGEXP_LANG_TABLE[lang];

setInterval(function () {
  $('li._33c').each(function () {
    if ( $(this).text().match(regexp) ) {
      $(this).hide();
    }
  });
}, 500);
