/**
 * Jeu du nombre mystère
 * @author  Shannon Joliat
 * @version 1.0
 * @since   2023-02-08 (date de création)
 */

'use strict';
// TODO afficher les messages d'erreur en HTML et pas avec alert
// TODO panneau de config pour modifer MIN et MAX
/**
 * Fonction qui retourne un nombre aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let min = 1;
let max = 100;

let nbEssais = 0;
let nbMystere = tireNombre(min, max);
console.log(nbMystere);
let reponse = '';
let message = 'Entrez un nombre entre 1 et 100';

do {
    //Récupère le nombre entré par l'utilisateur
    reponse = Number(prompt(message));
    //Si le nombre entré est > que le nombre mystère alors affiche 'C'est moins'
    if (reponse > nbMystere) {
        alert('C est moins');
    }
    //Sinon si le nombre entré est < que le nombre mystère alors affiche 'C'est plus'
    else if (reponse < nbMystere) {
        alert('C est plus');
    }
    //Incrémente le nombre d'essais
    nbEssais++;
} while (nbMystere !== reponse);

alert(`Vous avez trouvé le nombre mystère après ${nbEssais} essais`);

