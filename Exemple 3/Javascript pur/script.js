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

// Variables d'état des différents champs
var nicknameOK = false,
    emailOK = false,
    passwordOK = false;

// Vérifie la validité du champ nickname au moment de la saisie
document.getElementById('nickname').onkeyup = function() {
  if (this.value.length > 3) {
    this.className = 'good';
    nicknameOK = true;
  } else {
    this.className = 'error';
    nicknameOK = false;
  }

  if (nicknameOK && emailOK && passwordOK) {
    document.getElementById('submit').disabled = false;
  } else {
    document.getElementById('submit').disabled = true;
  }
};

// Vérifie la validité du champ email au moment de la saisie
document.getElementById('email').onkeyup = function() {
  if (validateEmail(this.value)) {
    this.className = 'good';
    emailOK = true;
  } else {
    this.className = 'error';
    emailOK = false;
  }

  if (nicknameOK && emailOK && passwordOK) {
    document.getElementById('submit').disabled = false;
  } else {
    document.getElementById('submit').disabled = true;
  }
};

// Vérifie la validité du champ password au moment de la saisie
document.getElementById('password').onkeyup = function() {
  if (this.value.length > 3 && this.value == document.getElementById('password_confirm').value) {
    this.className = 'good';
    document.getElementById('password_confirm').className = 'good';
    passwordOK = true;
  } else {
    this.className = 'error';
    document.getElementById('password_confirm').className = 'error';
    passwordOK = false;
  }

  if (nicknameOK && emailOK && passwordOK) {
    document.getElementById('submit').disabled = false;
  } else {
    document.getElementById('submit').disabled = true;
  }
};

// Vérifie la validité du champ confirmation password au moment de la saisie
document.getElementById('password_confirm').onkeyup = function() {
  if (this.value.length > 3 && this.value == document.getElementById('password').value) {
    this.className = 'good';
    document.getElementById('password').className = 'good';
    passwordOK = true;
  } else {
    this.className = 'error';
    document.getElementById('password').className = 'error';
    passwordOK = false;
  }

  if (nicknameOK && emailOK && passwordOK) {
    document.getElementById('submit').disabled = false;
  } else {
    document.getElementById('submit').disabled = true;
  }
};

// On désactive le bouton de validation du formulaire au chargement de la page
window.onload = function() {
  document.getElementById('submit').disabled = true;
};
