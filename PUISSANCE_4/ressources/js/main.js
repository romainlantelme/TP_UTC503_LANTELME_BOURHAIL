//
// @author Romain LANTELME <romain.lantelme.auditeur@lecnam.net>
//

const N_ROWS = 6; //Initialisation de la constante 'N_ROWS' à 6
const N_COLUMNS = 7; //Initialisation de la constante 'N_COLUMNS' à 7

let player = 1; //Initialisation de la variable 'player' à 1
let countTurn = 0; //Initialisation de la variable 'countTurn' à 0
let board = new Array(); //Initialisation de la variable 'board'
let scorePlayer1 = document.getElementById("scorePlayer1").innerHTML; //Initialisation de la variable 'scorePlayer1' à la valeur de l'élément `scorePlayer1`
let scorePlayer2 = document.getElementById("scorePlayer2").innerHTML; //Initialisation de la variable 'scorePlayer2' à la valeur de l'élément `scorePlayer2`

init();

//SI 'player' est égal à 1 FAIRE.. SINON FAIRE..
if (player == 1)
  document.getElementById("turnPlayer").innerHTML = "C'est à " + document.getElementById("player1").value + " de jouer !"; //On change la valeur de l'élément `turnPlayer` pour indiqué que c'est au joueur1 de jouer
else
  document.getElementById("turnPlayer").innerHTML = "C'est à " + document.getElementById("player2").value + " de jouer !"; //On change la valeur de l'élément `turnPlayer` pour indiqué que c'est au joueur2 de jouer


//Fonction d'initialisation de l'affichage du plateau de jeu ainsi que d'un tableau à deux dimension
function init() {
  const power_4 = document.getElementById("power_4"); //Initialisation de la constante 'power_4' à la valeur de l'élément qui à pour identifiant `power_4`
  const table = document.createElement("table"); //Initialisation de la constante 'table' qui créé l'élément `table`

  //POUR 'i' ALLANT de 0 à 'N_ROWS' FAIRE..
  for (let i = 0; i < N_ROWS; i++) {
    const tr = table.appendChild(document.createElement("tr")); //Initialisation de la constante 'tr' qui créé l'élément `tr` lié à l'élément `table`
    tr.id = "r" + i; //On affecte un identifiant à l'élément `tr`
    board[i] = new Array(); //On créé un tableau de i valeur

    //POUR 'j' ALLANT de 0 à 'N_COLUMNS' FAIRE..
    for (let j = 0; j < N_COLUMNS; j++) {
      const td = tr.appendChild(document.createElement("td")); //Initialisation de la constante 'td' qui créé l'élément `td` lié à l'élément `tr`
      board[i][j] = 0; //On affecte la valeur 0 à toutes les cases du tableau
      td.id = "r" + i + "c" + j; //On affecte un identifiant à l'élément `td`
      td.addEventListener("click", play_event); //On appelle la fonction 'play_event' lorsque l'événement "click" est effectué sur l'élément `td`
    }
  }
  power_4.appendChild(table); //On lie l'élément `table` à l'élément power_4
}

//Fonction de l'événement à effectuer lorsqu'elle est appelé
function play_event() {
  let col = Number(this.id.charAt(3)); //Initialisation de la variable 'col' correspondant au troisème caractère de l'identifiant de l'élément `td`
  let row = N_ROWS - 1; //Initialisation de la variable 'row' à 5

  //TANT QUE 'row' est supérieur à -1 FAIRE..
  while (row > -1) {

    //SI la case 'row', 'col' est à 0 FAIRE.. SINON FAIRE..
    if (board[row][col] == 0) {
      let td = document.getElementById("r" + row + "c" + col);  //Initialisation de la variable 'td' à la valeur de l'élément qui à pour identifiant `"r" + row + "c" + col`

      //SI 'player' est égal à 1 FAIRE.. SINON FAIRE..
      if (player == 1) {
        td.style.backgroundColor = "rgb(255, 0, 0)"; //On modifie la couleur de l'élément `td` en rouge
        document.getElementById("turnPlayer").innerHTML = "C'est à " + document.getElementById("player2").value + " de jouer !"; //On change la valeur de l'élément `turnPlayer` pour indiqué que c'est au joueur2 de jouer
      } else {
        td.style.backgroundColor = "rgb(255, 255, 0)"; //On modifie la couleur de l'élément `td` en jaune
        document.getElementById("turnPlayer").innerHTML = "C'est à " + document.getElementById("player1").value + " de jouer !"; //On change la valeur de l'élément `turnPlayer` pour indiqué que c'est au joueur1 de jouer
      }

      board[row][col] = player; //On affecte le numéro du joueur à la case du tableau correspondante
      check_win(row, col); //On appelle la fonction 'check_win' pour vérifier si le joueur a gagné
      player = 3 - player; //On modifie la valeur de 'player' pour lui donner la valeur de l'autre joueur (3-1=2 || 3-2=1)
      row = -1; //On donne la valeur -1 à la variable 'row' pour sortir du while
    } else {
      row--; //On retire 1 de la valeur de 'row'

      //SI 'row' est égal à -1 FAIRE..
      if (row == -1)
        alert("La colonne est pleine !\nVeuillez choisir un autre emplacement."); //On envoie un message popup pour indiquer que la colonne est pleine
    }
  }
}

//Function de vérification du gagnant 
function check_win(i, j) {
  //Vérification horizontale
  let horizontal = 0; //Initialisation de la variable 'horizontal' à 0
  let countHorizontal = 0; //Initialisation de la variable 'countHorizontal' à 0
  
  //TANT QUE 'horizontal' est inférieur à 'N_COLUMNS' FAIRE..
  while (horizontal < N_COLUMNS) {

    //SI 'board[i][horizontal]' est égal à 'player' FAIRE.. SINON SI 'board[i][horizontal]' différent de 'player' ET 'countHorizontal' est égal à 4 FAIRE.. SINON FAIRE..
    if (board[i][horizontal] == player) {
      horizontal++; //On ajoute 1 à la valeur de 'horizontal'
      countHorizontal++; //On ajoute 1 à la valeur de 'countHorizontal'
    } else if (board[i][horizontal] !== player && countHorizontal == 4) {
      horizontal++; //On ajoute 1 à la valeur de 'horizontal'
    } else {
      horizontal++; //On ajoute 1 à la valeur de 'horizontal'
      countHorizontal = 0; //Réinitialisation de 'countHorizontal' à 0
    }
  }

  //Vérification verticale
  let vertical = 0; //Initialisation de la variable 'vertical' à 0
  let countVertical = 0; //Initialisation de la variable 'countVertical' à 0
  
  //TANT QUE 'vertical' est inférieur à 'N_ROWS' FAIRE..
  while (vertical < N_ROWS) {
    //SI 'board[vertical][j]' est égal à 'player' FAIRE.. SINON SI 'board[vertical][j]' différent de 'player' ET 'countVertical' est égal à 4 FAIRE.. SINON FAIRE..
    if (board[vertical][j] == player) {
      vertical++; //On ajoute 1 à la valeur de 'vertical'
      countVertical++; //On ajoute 1 à la valeur de 'countVertical'
    } else if (board[vertical][j] !== player && countVertical == 4) {
      vertical++; //On ajoute 1 à la valeur de 'vertical'
    } else {
      vertical++; //On ajoute 1 à la valeur de 'vertical'
      countVertical = 0; //Réinitialisation de 'countVertical' à 0
    }
  }

  //Vérification diagonale
  let countDiagonal = 0; //Initialisation de la variable 'countDiagonal' à 0
  let diagonal = -Math.min(i, j); //Initialisation de la variable 'diagonal' à -i ou -j (en fonction du plus petit)

  //TANT QUE 'i' + 'diagonal' est inférieur à 'N_ROWS' ET 'j' + 'diagonal' est inférieur à 'N_COLUMNS' ET 'i' + 'diagonal' est supérieur ou égal à 0 ET 'j' + 'diagonal' est supérieur ou égal à 0 FAIRE..
  while (i + diagonal < N_ROWS && j + diagonal < N_COLUMNS && i + diagonal >= 0 && j + diagonal >= 0) {
    //SI 'board[i + diagonal][j + diagonal]' est égal à 'player' FAIRE.. SINON SI 'board[i + diagonal][j + diagonal]' différent de player ET 'countDiagonal est égal à 4 FAIRE.. SINON FAIRE..
    if (board[i + diagonal][j + diagonal] == player) {
      diagonal++; //On ajoute 1 à la valeur de 'diagonal'
      countDiagonal++; //On ajoute 1 à la valeur de 'countDiagonal'
    } else if (board[i + diagonal][j + diagonal] !== player && countDiagonal == 4) {
      diagonal++; //On ajoute 1 à la valeur de 'diagonal'
    } else {
      diagonal++; //On ajoute 1 à la valeur de 'diagonal'
      countDiagonal = 0; //Réinitialisation de 'countDiagonal' à 0
    }
  }

  //Vérification anti-diagonale
  let countAntiDiagonal = 0; //Initialisation de la variable 'countDiagonal' à 0
  let antiDiagonal = -Math.min(i, N_COLUMNS - 1 - j); //Initialisation de la variable 'antiDiagonal' à -'i' pu -'N_COLUMNS'-1-'j' (en fonction du plus petit)

    //TANT QUE 'i' + 'antiDiagonal' est inférieur à 'N_ROWS' ET 'j' + 'antiDiagonal' est inférieur à 'N_COLUMNS' ET 'i' + 'antiDiagonal' est supérieur ou égal à 0 ET 'j' + 'antiDiagonal' est supérieur ou égal à 0 FAIRE..
  while (i + antiDiagonal < N_ROWS && j - antiDiagonal < N_COLUMNS && i + antiDiagonal >= 0 && j - antiDiagonal >= 0) {
    //SI 'board[i + antiDiagonal][j - antiDiagonal]' est égal à 'player' FAIRE.. SINON SI 'board[i + antiDiagonal][j - antiDiagonal]' différent de 'player' ET 'countAntiDiagonal' est égal à 4 FAIRE.. SINON FAIRE..
    if (board[i + antiDiagonal][j - antiDiagonal] == player) {
      antiDiagonal++; //On ajoute 1 à la valeur de 'antiDiagonal'
      countAntiDiagonal++; //On ajoute 1 à la valeur de 'countAntiDiagonal'
    } else if (board[i + antiDiagonal][j - antiDiagonal] !== player && countAntiDiagonal == 4) {
      antiDiagonal++; //On ajoute 1 à la valeur de 'antiDiagonal'
    } else {
      antiDiagonal++; //On ajoute 1 à la valeur de 'antiDiagonal'
      countAntiDiagonal = 0; //Réinitialisation de 'countAntiDiagonal' à 0
    }
  }

  //Si 'countHorizontal' est supérieur ou égal à 4 OU `countVertical` est supérieur ou égal à 4 OU `countDiagonal` est supérieur ou égal à 4 OU `coutAntiDiagonal` est supérieur ou égal à 4 faire..
  if (countHorizontal >= 4 || countVertical >= 4 || countDiagonal >= 4 || countAntiDiagonal >= 4) {
    let winner; //Initialisation de la variable 'winner'

    //SI 'player' est égal à 1 faire.. SINON FAIRE..
    if (player == 1) {
      scorePlayer1++; //On ajouter 1 à la valeur de 'scorePlayer1'
      winner = document.getElementById("player1").value; //On récupére le nom de l'élément `player1` pour l'affecter à la variable 'winner'
    }
    else {
      scorePlayer2++; //On ajouter 1 à la valeur de 'scorePlayer2'
      winner = document.getElementById("player2").value; //On récupére le nom de l'élément `player2` pour l'affecter à la variable 'winner'
    }

    //On utilise un timer pour laisser le temps de changer la couleur de la dernière case coché avant d'effectuer le reste
    setTimeout(() => {
        alert(`${winner} A GAGNÉ LA PARTIE !`); //On affiche un popup indiquant aux joueurs qui a gagné
        document.getElementById("scorePlayer1").innerHTML = scorePlayer1; //On modifie la valeur de l'élément 'scorePlayer1' pour actualiser le score
        document.getElementById("scorePlayer2").innerHTML = scorePlayer2; //On modifie la valeur de l'élément 'scorePlayer2' pour actualiser le score
        reset(); //On appelle la fonction 'reset()'
      }, 50); 
  }

  countTurn++; //On ajoute 1 à la valeur de 'countTurn'

  //SI 'countTurn' est égal à 'N_ROWS' x N_COLUMNS FAIRE..
  if (countTurn == N_ROWS * N_COLUMNS) {

    //On utilise un timer pour laisser le temps de changer la couleur de la dernière case coché avant d'effectuer le reste
    setTimeout(() => {
      alert(`ÉGALITÉ !`); //On affiche un popup indiquant aux joueurs qu'il y a égalité
      reset(); //On appelle la fonction 'reset()'
    }, 50);
  }
}

//Fonction de réinitialisation du plateau
function reset() {
  countTurn = 0; //Réinitialisation de 'countTurn' à 0

  //POUR 'i' ALLANT de 0 à 'N_ROWS' FAIRE..
  for (let i = 0; i < N_ROWS; i++) {

    //POUR 'j' ALLANT de 0 à 'N_COLUMNS' FAIRE..
    for (let j = 0; j < N_COLUMNS; j++) {
      let td = document.getElementById("r" + i + "c" + j); //Réinitialisation des identifiants de base des éléments `td`
      td.style.backgroundColor = "rgb(190, 190, 190)"; //Réinitialisation de la couleur de base des éléments `td`
      board[i][j] = 0; //Réinitialisation des cases du tableau à 0
    }
  }
}