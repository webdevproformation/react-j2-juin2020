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
                        (item, index) => <li className="nav-item m-2" key={index}>{item}</li>
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


// Créer un nouveau composant Article
// dans son state  vous allez avoir les valeurs suivates
/**
 * state :{
 *  titre : "Article 1",
 *  url : "https://via.placeholder.com/400x200",
 *  contenu : "Lorem ipsum"
 * }
 *
 */
/*
    Dans son render
    <article>
        <h2>titre du state</h2>
        <img src="avec la valeur url du state" alt="">
        <p> avec la valeur contenu du state </p>
    </article>
*/
//afficher ce composant avant la composant Footer 
// Bootstrap dispose du module Card  
// système de grille de bootstrap pour générer la largeur de l'article


