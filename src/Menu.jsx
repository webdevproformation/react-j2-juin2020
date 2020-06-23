import React, { Component } from 'react';

class Menu extends Component {
    state = {
        contenu: ["Accueil", "Présentation", "Blog"]
    }
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-light">
                <ul className="navbar-nav">
                    {this.state.contenu.map(
                        item => <li className="nav-item m-2">{item}</li>
                    )}
                    {/** .map() => boucle for */}
                </ul>
            </nav>
        );
    }
}

export default Menu;

// étape 1 créer mon composant
// pour l'instant vide 

// déclarer dans App.js qui est lui aussi dans src

// Dans le projet jour2
// créer un nouveau composant Footer
// dans sa propriété state lui donner les valeurs suivantes

/**
 * state = {
 *  contenu : [ "Mentions légales" , "Copyright"]
 * }
 */

 // afficher la liste de tous les éléments contenu dans la variable 
 // this.state.contenu dans une barre de menu qui sera afficher après le composant Compteur 
 // utiliser bootstrap pour mettre en forme cette deuxième barre de menu

