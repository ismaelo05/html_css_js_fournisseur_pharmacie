var ajouter_med = document.querySelector("#sub");

var champ1 = document.querySelectorAll("#ns");
var champ2 = document.querySelectorAll("#nc");
var champ3 = document.querySelectorAll("#quant");
var champ4 = document.querySelectorAll("#pu");

function recuperer_champs(){
  if (Number.isInteger(champ3) === True || Number.isInteger(champ4) === True) {
     alert(champ3+' or '+champ4' doit ètre un nombre entier');
  } else {
    document.getElementById('cat').innerHTML = "mon texte"
    document.getElementById('ns').innerHTML = champ1
    document.getElementById('nc').innerHTML = champ2
    document.getElementById('quant').innerHTML = champ3
    document.getElementById('pu').innerHTML = champ4
    document.getElementById('pht').innerHTML = champ4 * champ3
    document.getElementById('ptc').innerHTML = (champ4 * champ3 * 0.2) + (champ4 * champ3)
    document.location.href="facture.html";
  }

}

ajouter_med.addEventListener('click', recuperer_champs);
