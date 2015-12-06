$('button').click(function() {
  var $this = $(this),
      $text = $('#text'),
      type = $this.attr('data-type');

  switch (type) {
    case 'color':
      var color = $this.attr('data-color');

      if (color.length > 0) {
        $text.css('color', color);
      }

      break;

    case 'bold':
      if ($text.css('font-weight') == 'bold') {
        $text.css('font-weight', 'normal');
      } else {
        $text.css('font-weight', 'bold');
      }

      break;

    case 'italic':
      if ($text.css('font-weight') == 'italic') {
        $text.css('font-style', 'normal');
      } else {
        $text.css('font-style', 'italic');
      }

      break;

    case 'underline':
      if ($text.css('text-decoration') == 'underline') {
        $text.css('text-decoration', 'none');
      } else {
        $text.css('text-decoration', 'underline');
      }

      break;
  }
});
