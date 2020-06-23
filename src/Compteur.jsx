// créer un nouveau fichier dans src 
// Compteur.jsx
import React, { Component } from 'react';
// imrc

// mettre plus d'éléments dans notre composant Compteur

class Compteur extends Component { // cc
    state = {
        count: 0
    };

    augmenter = () => {
        // clone du state
        const newState = { ...this.state };
        // copie de la class dans la variable newState = { count: 0 };

        newState.count++; // { count : 1 }
        // setState => réaliser la mis jour de la valeur de la propriété de class state.count
        this.setState({
            count: newState.count
        });
        // this.state.count = this.state.count + 1;
    }
    diminuer = () => {
        const newState = { ...this.state };
        newState.count--;
        this.setState({
            count: newState.count
        });
    }

    render() {
        return (
            <div>
                <span> {this.state.count} </span>
                <button className="btn btn-success m-2" onClick={this.augmenter}> Augmenter</button>
                <button className="btn btn-warning" onClick={this.diminuer}> Diminuer</button>
            </div>
        );
    }
}

export default Compteur;

// dans le projet jour1
// Rappel.jsx
// Suite.jsx 

// créer un nouveau projet => jour2
// télécharger et installé bootstrap => npm i bootstrap

// créer un composant Compteur
// associé au composant App.js
// dans le composant Compteur 
// Valeur 0
// deux boutons Augmenter / Diminuer 
// associer clique sur un des boutons modifié la variable state du composant

// la class Compteur elle hérite de la class Component 
// Compteur => Composant React 
// React => npm // yarn
// npm i bootstrap => npmjs.com => https://www.npmjs.com/package/bootstrap
// yarn add bootstrap => https://classic.yarnpkg.com/fr/ 

// npm => installé par défaut avec Nodejs 
// yarn => npm i -g yarn

// (dans le projet jour2) Pouvez vous créer un nouveau composant
// Menu 
// state = {
//    contenu  : ["Accueil", "Présentation", "Blog" ];
// } 

// dans le render 
// liste avec tous les éléments stockés dans la variable this.state.contenu
// boucle .map()

// bootstrap => module bootstrap NavBar qui permet de mettre en forme le menu  

// créer un nouveau fichier dans src/Menu.jsx
// associer ce nouveau composant au composant App.js
// réaliser le composant 

