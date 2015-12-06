/**
 * Permet de valider si un string est une adresse email valide
 *
 * @param   email string  La chaine de caractère à vérifier
 *
 * @return  bool
 */
function validateEmail(email) {
   var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

   return re.test(email);
}

$('input').on('change keyup', function() {
  var $this = $(this),
      $nickname = $('#nickname'),
      $email = $('#email'),
      $password = $('#password'),
      $password_confirm = $('#password_confirm'),
      $submit_button = $('#submit');

  if (
    ($this.is($nickname) && $this.val().length > 3) ||
    ($this.is($email) && validateEmail($this.val()))
  ) {
    $this.addClass('good');
    $this.removeClass('error');
  } else if ($this.is($password) || $this.is($password_confirm)) {
    if ($password.val() == $password_confirm.val()) {
      $password.addClass('good').removeClass('error');
      $password_confirm.addClass('good').removeClass('error');
    } else {
      $password.addClass('error').removeClass('good');
      $password_confirm.addClass('error').removeClass('good');
    }
  } else {
    $this.addClass('error');
    $this.removeClass('good');
  }

  if (
    $nickname.val().length > 3 &&
    validateEmail($email.val()) &&
    $password.val() == $password_confirm.val()
  ) {
    $submit_button.prop('disabled', false);
  } else {
    $submit_button.prop('disabled', true);
  }
});

// On désactive le bouton de validation du formulaire au chargement de la page
$(function() {
  $('#submit').prop('disabled', true);
});
