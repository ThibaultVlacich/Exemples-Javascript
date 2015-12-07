$('button').click(function() {
  // On affiche une petite icône de chargement
  $('#loading').show();

  // Au click sur le bouton, on lance une requête AJAX sur l'API de Google
  $.getJSON(
    'https://www.googleapis.com/youtube/v3/search', {
      'key': 'AIzaSyDCn0wX5y2fyuXIrsxbsgUbirLOPvhRM3s',
      'part': 'snippet',
      'q': 'star wars the force awakens',
      'type': 'video',
      'maxResults': 5
    },
    function(data) { // On récupère les données obtenues pas la requête AJAX
      // On vide l'ul #results
      $('#results').empty();

      // On parcoure tous les résultats obtenus (boucle foreach)
      $.each(data.items, function(index, value) {
        var id = value.id.videoId, // ID de la vidéo
          snippet = value.snippet, // Snippet de la vidéo
          title = snippet.title, // Titre de la vidéo
          thumbnail = snippet.thumbnails.medium.url; // Miniature de la vidéo

        // On créé un nouvel élément <li>
        var $resultLI = $('<li>');

        // On y ajoute la miniature
        $resultLI.append('<img src="' + thumbnail + '">');

        // On y ajoute le titre
        $resultLI.append('<h2>' + title + '</h2>');

        // On bind une redirection vers la vidéo au click
        $resultLI.click(function() {
          window.open('https://youtu.be/' + id);
        });

        // On ajoute ce <li> à la liste <ul>
        $('#results').append($resultLI);
      });

      // On masque l'icône de chargement
      $('#loading').hide();
    }
  );
});
