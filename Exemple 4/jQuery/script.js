$(function() {
  var $player = $('[data-player]');

  $('[data-play]').click(function() {
    if ($player[0].paused) {
      $player.trigger('play');
      $(this).text('Pause');
    } else {
      $player.trigger('pause');
      $(this).text('Play');
    }
  });

  $('[data-stop]').click(function() {
    $player[0].currentTime = 0;
    $player.trigger('pause');
  });

  $('[data-volume]').click(function() {
    $player[0].volume = $(this).attr('data-volume');
  });

  $player.bind('timeupdate', function() {
    var duration = this.duration; // Durée totale
    var time = this.currentTime; // Temps écoulé
    var fraction = time / duration;
    var percent = Math.ceil(fraction * 100);

    var $progress = $('[data-progressbar]').find('div');

    $progress.css('width', percent + '%');
    $progress.text(percent + '%');
    $('[data-progressTime').text(formatTime(time));
  });
});

function formatTime(time) {
  var hours = Math.floor(time / 3600);
  var mins = Math.floor((time % 3600) / 60);
  var secs = Math.floor(time % 60);

  if (secs < 10) {
    secs = "0" + secs;
  }

  if (hours) {
    if (mins < 10) {
      mins = "0" + mins;
    }

    return hours + ":" + mins + ":" + secs; // hh:mm:ss
  } else {
    return mins + ":" + secs; // mm:ss
  }
}
