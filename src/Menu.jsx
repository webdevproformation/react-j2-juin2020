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