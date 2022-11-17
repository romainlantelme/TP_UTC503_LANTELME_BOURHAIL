//
// @author Romain LANTELME <romain.lantelme.auditeur@lecnam.net>
//

//Déclaration de variables
var nomJoueur1 = document.getElementById("Joueur1In").value;
var nomJoueur2 = document.getElementById("Joueur2In").value;

var scoreJoueur1 = document.getElementById("joueur1Score");
var scoreJoueur2 = document.getElementById("joueur2Score");

//Definie un joueur aleatoire pour le premier tour
var joueur = 1 + Math.floor(2 * Math.random());

var joueurCommence;

var score1 = 0;
var score2 = 0;

var clicksJoueur1 = "";
var clicksJoueur2 = "";
var clicksTotal = "";

disableBtns();

//Fonction pour mettre les formes(X ou O) aux boutons selon le joueur qui a clické
function ajoutProp(numero){
    var id = document.getElementById(numero);

    //On grise le bouton sur le quelle l'utilisateur click
    id.disabled = true;

    //Enregistre dans un string toutes les cases cochés
    clicksTotal += numero;

    //Si c'est le tour du joueur 1
    if(joueur == 1){

        //Met dans le fond du bouton l'image O
        id.style.background = "url('./images/O.png') no-repeat";

        //La taille de l'image de fond s'adapte a la taille du bouton
        id.style.backgroundSize = "contain";

        //Enregistre dans un string tout les clicks du joueur 1
        clicksJoueur1 += numero;
        forme = "O";
        setVictoire(clicksJoueur1, forme);
        joueur = 2;
    }else if(joueur == 2){
        id.style.background = "url('./images/X.png') no-repeat";
        id.style.backgroundSize = "contain";
        clicksJoueur2 += numero;
        forme = "X";
        setVictoire(clicksJoueur2, forme);
        joueur = 1;
    }
}

//Fonction qui définie le joueur qui commence a jouer
function jouer(){
    nomJoueur1 = document.getElementById("Joueur1In").value;
    nomJoueur2 = document.getElementById("Joueur2In").value;

    if(joueur == 1){
        alertPerso.alert(nomJoueur1 + " commence a jouer!", "MORPION");
    }else if(joueur == 2){
        alertPerso.alert(nomJoueur2 + " commence a jouer!", "MORPION");
    }

    //Déclare la classe "btn"
    var btn = document.querySelectorAll('.btn');
    
    //Parcour tous les éléments avec la classe "btn"
    btn.forEach(btn => {
        //Enlève le fond du bouton
        btn.style.background = "url()";
        //Grise le bouton
        btn.disabled = false;
    });
    
    document.getElementById("Joueur1In").value = nomJoueur1;
    document.getElementById("Joueur2In").value = nomJoueur2;
    document.getElementById("joueur1Score").value = this.score1;
    document.getElementById("joueur2Score").value = this.score2;
    
    clicksJoueur1 = "";
    clicksJoueur2 = "";
    clicksTotal = "";
}

//Fonction pour définir le gagnant
function setVictoire(gagnant, forme){
    var nomJoueur;
    var nomJoueur1 = document.getElementById("Joueur1In").value;
    var nomJoueur2 = document.getElementById("Joueur2In").value;

    //Si le joueur à clicker sur "b1", "b2" et "b3"
    if(gagnant.indexOf("b1") != -1 && gagnant.indexOf("b2") != -1 && gagnant.indexOf("b3") != -1){
        //Si la forme du joueur est O alors les fond des 3 boutons seront de la forme O de couleur vert
        if(forme == "O"){
            b1.style.background = "url('./images/OVert.png') no-repeat";
            b1.style.backgroundSize = "contain";
            b2.style.background = "url('./images/OVert.png') no-repeat";
            b2.style.backgroundSize = "contain";
            b3.style.background = "url('./images/OVert.png') no-repeat";
            b3.style.backgroundSize = "contain";
            nomJoueur = nomJoueur1;
        }else{
            b1.style.background = "url('./images/XVert.png') no-repeat";
            b1.style.backgroundSize = "contain";
            b2.style.background = "url('./images/XVert.png') no-repeat";
            b2.style.backgroundSize = "contain";
            b3.style.background = "url('./images/XVert.png') no-repeat";
            b3.style.backgroundSize = "contain";
            nomJoueur = nomJoueur2;
        }
        var audio = new Audio('./images/victoire.mp3');
        audio.play();
        //Message avec le gagnant
        alertPerso.alert(nomJoueur + " A GAGNÉ", "VICTOIRE!");
        score(nomJoueur);
        disableBtns();
    }else if(gagnant.indexOf("b4") != -1 && gagnant.indexOf("b5") != -1 && gagnant.indexOf("b6") != -1){
        if(forme == "O"){
            b4.style.background = "url('./images/OVert.png') no-repeat";
            b4.style.backgroundSize = "contain";
            b5.style.background = "url('./images/OVert.png') no-repeat";
            b5.style.backgroundSize = "contain";
            b6.style.background = "url('./images/OVert.png') no-repeat";
            b6.style.backgroundSize = "contain";
            nomJoueur = nomJoueur1;
        }else if(forme == "X"){
            b4.style.background = "url('./images/XVert.png') no-repeat";
            b4.style.backgroundSize = "contain";
            b5.style.background = "url('./images/XVert.png') no-repeat";
            b5.style.backgroundSize = "contain";
            b6.style.background = "url('./images/XVert.png') no-repeat";
            b6.style.backgroundSize = "contain";
            nomJoueur = nomJoueur2;
        }
        var audio = new Audio('./images/victoire.mp3');
        audio.play();
        alertPerso.alert(nomJoueur + " A GAGNÉ", "VICTOIRE!");
        score(nomJoueur);
        disableBtns();
    }else if(gagnant.indexOf("b7") != -1 && gagnant.indexOf("b8") != -1 && gagnant.indexOf("b9") != -1){
        if(forme == "O"){
            b7.style.background = "url('./images/OVert.png') no-repeat";
            b7.style.backgroundSize = "contain";
            b8.style.background = "url('./images/OVert.png') no-repeat";
            b8.style.backgroundSize = "contain";
            b9.style.background = "url('./images/OVert.png') no-repeat";
            b9.style.backgroundSize = "contain";
            nomJoueur = nomJoueur1;
        }else{
            b7.style.background = "url('./images/XVert.png') no-repeat";
            b7.style.backgroundSize = "contain";
            b8.style.background = "url('./images/XVert.png') no-repeat";
            b8.style.backgroundSize = "contain";
            b9.style.background = "url('./images/XVert.png') no-repeat";
            b9.style.backgroundSize = "contain";
            nomJoueur = nomJoueur2;
        }
        var audio = new Audio('./images/victoire.mp3');
        audio.play();
        alertPerso.alert(nomJoueur + " A GAGNÉ", "VICTOIRE!");
        score(nomJoueur);
        disableBtns();
    }else if(gagnant.indexOf("b1") != -1 && gagnant.indexOf("b4") != -1 && gagnant.indexOf("b7") != -1){
        if(forme == "O"){
            b1.style.background = "url('./images/OVert.png') no-repeat";
            b1.style.backgroundSize = "contain";
            b4.style.background = "url('./images/OVert.png') no-repeat";
            b4.style.backgroundSize = "contain";
            b7.style.background = "url('./images/OVert.png') no-repeat";
            b7.style.backgroundSize = "contain";
            nomJoueur = nomJoueur1;
        }else{
            b1.style.background = "url('./images/XVert.png') no-repeat";
            b1.style.backgroundSize = "contain";
            b4.style.background = "url('./images/XVert.png') no-repeat";
            b4.style.backgroundSize = "contain";
            b7.style.background = "url('./images/XVert.png') no-repeat";
            b7.style.backgroundSize = "contain";
            nomJoueur = nomJoueur2;
        }
        var audio = new Audio('./images/victoire.mp3');
        audio.play();
        alertPerso.alert(nomJoueur + " A GAGNÉ", "VICTOIRE!");
        score(nomJoueur);
        disableBtns();
    }else if(gagnant.indexOf("b2") != -1 && gagnant.indexOf("b5") != -1 && gagnant.indexOf("b8") != -1){
        if(forme == "O"){
            b2.style.background = "url('./images/OVert.png') no-repeat";
            b2.style.backgroundSize = "contain";
            b5.style.background = "url('./images/OVert.png') no-repeat";
            b5.style.backgroundSize = "contain";
            b8.style.background = "url('./images/OVert.png') no-repeat";
            b8.style.backgroundSize = "contain";
            nomJoueur = nomJoueur1;
        }else{
            b2.style.background = "url('./images/XVert.png') no-repeat";
            b2.style.backgroundSize = "contain";
            b5.style.background = "url('./images/XVert.png') no-repeat";
            b5.style.backgroundSize = "contain";
            b8.style.background = "url('./images/XVert.png') no-repeat";
            b8.style.backgroundSize = "contain";
            nomJoueur = nomJoueur2;
        }
        var audio = new Audio('./images/victoire.mp3');
        audio.play();
        alertPerso.alert(nomJoueur + " A GAGNÉ", "VICTOIRE!");
        score(nomJoueur);
        disableBtns();
    }else if(gagnant.indexOf("b3") != -1 && gagnant.indexOf("b6") != -1 && gagnant.indexOf("b9") != -1){
        if(forme == "O"){
            b3.style.background = "url('./images/OVert.png') no-repeat";
            b3.style.backgroundSize = "contain";
            b6.style.background = "url('./images/OVert.png') no-repeat";
            b6.style.backgroundSize = "contain";
            b9.style.background = "url('./images/OVert.png') no-repeat";
            b9.style.backgroundSize = "contain";
            nomJoueur = nomJoueur1;
        }else{
            b3.style.background = "url('./images/XVert.png') no-repeat";
            b3.style.backgroundSize = "contain";
            b6.style.background = "url('./images/XVert.png') no-repeat";
            b6.style.backgroundSize = "contain";
            b9.style.background = "url('./images/XVert.png') no-repeat";
            b9.style.backgroundSize = "contain";
            nomJoueur = nomJoueur2;
        }
        var audio = new Audio('./images/victoire.mp3');
        audio.play();
        alertPerso.alert(nomJoueur + " A GAGNÉ", "VICTOIRE!");
        score(nomJoueur);
        disableBtns();
    }else if(gagnant.indexOf("b1") != -1 && gagnant.indexOf("b5") != -1 && gagnant.indexOf("b9") != -1){
        if(forme == "O"){
            b1.style.background = "url('./images/OVert.png') no-repeat";
            b1.style.backgroundSize = "contain";
            b5.style.background = "url('./images/OVert.png') no-repeat";
            b5.style.backgroundSize = "contain";
            b9.style.background = "url('./images/OVert.png') no-repeat";
            b9.style.backgroundSize = "contain";
            nomJoueur = nomJoueur1;
        }else{
            b1.style.background = "url('./images/XVert.png') no-repeat";
            b1.style.backgroundSize = "contain";
            b5.style.background = "url('./images/XVert.png') no-repeat";
            b5.style.backgroundSize = "contain";
            b9.style.background = "url('./images/XVert.png') no-repeat";
            b9.style.backgroundSize = "contain";
            nomJoueur = nomJoueur2;
        }
        var audio = new Audio('./images/victoire.mp3');
        audio.play();
        alertPerso.alert(nomJoueur + " A GAGNÉ", "VICTOIRE!");
        score(nomJoueur);
        disableBtns();
    }else if(gagnant.indexOf("b3") != -1 && gagnant.indexOf("b5") != -1 && gagnant.indexOf("b7") != -1){
        if(forme == "O"){
            b3.style.background = "url('./images/OVert.png') no-repeat";
            b3.style.backgroundSize = "contain";
            b5.style.background = "url('./images/OVert.png') no-repeat";
            b5.style.backgroundSize = "contain";
            b7.style.background = "url('./images/OVert.png') no-repeat";
            b7.style.backgroundSize = "contain";
            nomJoueur = nomJoueur1;
        }else{
            b3.style.background = "url('./images/XVert.png') no-repeat";
            b3.style.backgroundSize = "contain";
            b5.style.background = "url('./images/XVert.png') no-repeat";
            b5.style.backgroundSize = "contain";
            b7.style.background = "url('./images/XVert.png') no-repeat";
            b7.style.backgroundSize = "contain";
            nomJoueur = nomJoueur2;
        }
        var audio = new Audio('./images/victoire.mp3');
        audio.play();
        alertPerso.alert(nomJoueur + " A GAGNÉ", "VICTOIRE!");
        score(nomJoueur);
        disableBtns();
    }else if(clicksTotal.indexOf("b1") != -1 && clicksTotal.indexOf("b2") != -1 && clicksTotal.indexOf("b3") != -1 && clicksTotal.indexOf("b4") != -1 && clicksTotal.indexOf("b5") != -1 && clicksTotal.indexOf("b6") != -1 && clicksTotal.indexOf("b7") != -1 && clicksTotal.indexOf("b8") != -1 && clicksTotal.indexOf("b9") != -1){
        var audio = new Audio('./images/victoire.mp3');
        audio.play();
        alertPerso.alert("Vous êtes en égalité", "ÉGALITÉ!");
        score("egalite");
    }
    document.getElementById("joueur1Score").value = this.score1;
    document.getElementById("joueur2Score").value = this.score2;
}

//Fonction pour griser tous les boutons
function disableBtns(){
    var btn = document.querySelectorAll('.btn');
    
    btn.forEach(btn => {
        btn.disabled = true;
    });
}

//Fonction pour augmenter le score du gagnant
function score(nomJoueur){
    if(nomJoueur == nomJoueur1)
        ++score1;
    else if(nomJoueur == nomJoueur2)
        ++score2;
    else

    document.getElementById("joueur1Score").value = score1;
    document.getElementById("joueur2Score").value = score2;
    document.getElementById("Joueur1In").value = nomJoueur1;
    document.getElementById("Joueur2In").value = nomJoueur2;
}

//Fonction pour remmetre a 0 le score
function reset(){
    score1 = 0;
    score2 = 0;

    document.getElementById("joueur1Score").value = score1;
    document.getElementById("joueur2Score").value = score2;

    jouer();
}

//Fonction pour utiliser l'alert personalisé --> (Ce bout de code a été inspiré sur un code trouvé sur internet)
function AlertPerso(){
    this.alert = function(message,title){
        document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

        let dialogoverlay = document.getElementById('dialogoverlay');
        let dialogbox = document.getElementById('dialogbox');
        
        let winH = window.innerHeight;
        dialogoverlay.style.height = winH+"px";
        
        dialogbox.style.top = "100px";

        dialogoverlay.style.display = "block";
        dialogbox.style.display = "block";
        
        document.getElementById('dialogboxhead').style.display = 'block';

        if(typeof title === 'undefined') {
        document.getElementById('dialogboxhead').style.display = 'none';
        } else {
        document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
        }
        document.getElementById('dialogboxbody').innerHTML = message;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="alertPerso.ok()">OK</button>';
    }

    this.ok = function(){
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}
  
let alertPerso = new AlertPerso();