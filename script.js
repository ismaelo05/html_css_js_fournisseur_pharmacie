
 var bouton = document.querySelector("#b");



var squares = document.querySelectorAll('input[type=radio][name="cat"]');

function loadPage(){
	let selectedSize;
	for (const square of squares){
		if (square.checked) {
			selectedSize = square.value;
			break;
		}
	}
		if (selectedSize){
			//console.log(selectedSize);
			document.location.href="ajouter_med.html";
			//document.location.href=document.location.href.splitOnLast('/')[0]+"/ajouter_med.html";
		} else {
				alert("Veuillez choisir sur l'espace Choix de la catégorie de médicaments que vous voulez");
		}
}

bouton.addEventListener('click', loadPage);
