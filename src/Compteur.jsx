// créer un nouveau fichier dans src 
// Compteur.jsx
import React, { Component } from 'react';
// imrc

// mettre plus d'éléments dans notre composant Compteur

class Compteur extends Component { // cc
    state = {
        count: 0
    };

    augmenter() {
        console.log("augmenter !!");
    }

    render() {
        return (
            <div>
                <span> {this.state.count} </span>
                <button className="btn btn-success m-2" onClick={this.augmenter}> Augmenter</button>
                <button className="btn btn-warning"> Diminuer</button>
            </div>
        );
    }
}

export default Compteur;

// dans le projet jour1
// Rappel.jsx
// Suite.jsx 