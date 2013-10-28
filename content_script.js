setInterval(function () {
  $('li._33c, li.pvs.notification').each(function () {
    var inner_text = $(this).text();
    if ( $(this).text().match(/likes?/g) ) {
      $(this).hide();
    }
  });
}, 500);
