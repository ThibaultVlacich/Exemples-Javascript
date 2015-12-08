function play(idPlayer, control) {
  var player = document.querySelector('#' + idPlayer);

  if (player.paused) {
    player.play();
    control.textContent = 'Pause';
  } else {
    player.pause();
    control.textContent = 'Play';
  }
}

function resume(idPlayer) {
  var player = document.querySelector('#' + idPlayer);

  player.currentTime = 0;
  player.pause();
}

function volume(idPlayer, vol) {
  var player = document.querySelector('#' + idPlayer);

  player.volume = vol;   //fonction predefini
}

function update(player) {
  var duration = player.duration; // Durée totale
  var time = player.currentTime; // Temps écoulé
  var fraction = time / duration;
  var percent = Math.ceil(fraction * 100);

  var progress = document.querySelector('#progressBar');

  progress.style.width = percent + '%';   //barre evolue en fonction du temps
  progress.textContent = percent + '%';   //le contenu evolue en fct du tps
  document.querySelector('#progressTime').textContent = formatTime(time); //affichage correct utilisation formatTime
}

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

//on clique!
function clickProgress(idPlayer, control, event) {
  var parent = getPosition(control); // La position absolue de la progressBar (grosse barre)
  var target = getMousePosition(event); // L'endroit du la progressBar où on a cliqué
  var player = document.querySelector('#' + idPlayer);

  var x = target.x - parent.x; //comparaison
  var y = target.y - parent.y;

  var wrapperWidth = document.querySelector('#progressBarControl').offsetWidth; //recupere la taille

  var percent = Math.ceil((x / wrapperWidth) * 100);  //changer affichage
  var duration = player.duration; //utilisé dans la suite

  player.currentTime = (duration * percent) / 100;  //on deplace le son
}
//position souris
function getMousePosition(event) {
  return {
    x: event.pageX,
    y: event.pageY
  };
}
//position element
function getPosition(element) {
  var top = 0,
    left = 0;

  do {
    top += element.offsetTop;
    left += element.offsetLeft;
  } while (element = element.offsetParent); //tant que il y a l'element

  return {
    x: left,
    y: top
  };
}
