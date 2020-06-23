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
import React, { Component } from 'react';

class Footer extends Component {
    state = {
        contenu: ["Mentions légales", "Copyright"]
    }
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-primary">
                <ul className="navbar-nav">
                    {this.state.contenu.map(
                        (item, index) => <li className="nav-item m-2" key={index}>{item}</li>
                    )}
                    {/** lorsque l'on crée une boucle avec map() React demande que l'on ajoute l'attribut key pour chaque élément répété = pour pouvoir les distinguer dans le Virtual DOM */}
                    {/** pouvez réaliser cette modification dans le Menu ? */}
                </ul>
            </nav>
        );
    }
}


export default Footer;
