// composant => partie de ce que va voir l'internaute
// Like.jsx 
// chiffre => 0 (stocker dans le state)
// vue (render)
// afficher le chiffre + bouton augmenter le nombre de like
// Maximum maxium 10 like 
// au lieu de cliquer passer la souris sur le bouton et automatiquement 
// ce composant va nous permettre d'interagit avec lui => modifier state => render 
import React, { Component } from 'react';

class Like extends Component {
    state = {
        count: 0
    }
    // les fonctions fléchées ne crée pas de nouveau contexte d'exécution
    add = () => {
        //alert("je viens de cliquer sur le bouton +");
        //console.log(this.state);
        // utiliser une méthode de Component qui va modifier la valeur de count
        // this.setState() // 1 argument 1 objet
        this.setState({
            count: this.state.count + 1
        });
        // dès le state est modifié via la méthode this.setState() => React va automatiquement
        // mettre à jour le render
    }
    // utilisé la méthode .bind() lors de l'appel de la fonction pour éviter d'avoir une perte de contexte du mot clé this
    add2() {
        console.log(this.state);
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        return (
            <div>
                Like
                <span className="m-2 badge badge-success">{this.state.count}</span>
                <button className="btn btn-info m-2" onClick={this.add}>+</button>
                <button className="btn btn-secondary m-2" onClick={this.add2.bind(this)}>-</button>
            </div>
        );
    }
}

export default Like;

// en JS => document.querySelector(".btn").addEventListener("click", () => {
//    document.querySelector(".badge").innerHTML = parseInt(document.querySelector(".badge").innerHTML) + 1
//})
