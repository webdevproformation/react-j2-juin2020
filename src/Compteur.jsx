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