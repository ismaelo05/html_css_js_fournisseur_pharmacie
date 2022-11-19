
 var bouton = document.querySelector("#b");

var ajouter_med = document.querySelector("#sub");


var squares = document.querySelectorAll('input[type=radio][name="cat"]');

function loadPage(){
	if (squares === 'cat1'){/home/ismael/Pharmacie/
		alert(squares.value)
		this.content = 'Médicaments génériques';
		window.open("ajouter_med.html");
	} else if (squares === 'cat2'){
		this.content = 'Médicaments à base de plantes';
		window.open("ajouter_med.html");
	} else if (squares === 'cat3'){
		this.content = 'Médicaments homéopathiques';
		window.open("ajouter_med.html");
	} else if (squares === 'cat4'){
		this.content = 'Médicaments stupéfiants';
		window.open("ajouter_med.html");
	} else if (squares === 'cat5'){
		this.content = 'Médicaments dérivés du sang';
		window.open("ajouter_med.html");
	} else if (squares === 'cat6'){
		this.content = 'Contraceptifs';
		window.open("ajouter_med.html");
	} else{
		alert("Veuillez choisir sur l'espace Choix de la catégorie de médicaments que vous voulez");
	}
}


bouton.addEventListerner('click', loadPage());
