setInterval(hide_like_notifs, 100);

function hide_like_notifs() {
  var notifs = $('#fbNotificationsJewel li._33c');
  notifs.each(function(){
    hide_notif_if_like( $(this) );
  });
}

function hide_notif_if_like(notif) {
  var notif_meta = $.parseJSON( notif.attr('data-gt') );
  if ( notif_meta['notif_type'] == 'like' ) {
    notif.hide();
  }
}
