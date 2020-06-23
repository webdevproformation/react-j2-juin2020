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
        if (this.state.count < 10) {
            this.setState({
                count: this.state.count + 1
            });
        }


        // dès le state est modifié via la méthode this.setState() => React va automatiquement
        // mettre à jour le render
    }
    // utilisé la méthode .bind() lors de l'appel de la fonction pour éviter d'avoir une perte de contexte du mot clé this
    add2() {
        console.log(this.state);
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        }

    }
    render() {
        return (
            <div>
                Like
                <span className="m-2 badge badge-success">{this.state.count}</span>
                <button className="btn btn-info m-2" onClick={this.add}>+</button>
                <button className="btn btn-secondary m-2" onClick={this.add2.bind(this)}>-</button>
                <button className="btn btn-danger m-2" onMouseOver={this.add}>+</button>
            </div>
        );
    }
}

export default Like;

// en JS => document.querySelector(".btn").addEventListener("click", () => {
//    document.querySelector(".badge").innerHTML = parseInt(document.querySelector(".badge").innerHTML) + 1
//})

/*
Créer un nouveau composant Dislike

dans son state valeur rating

state = {
    rating : 0
}

Dans le render

    le chiffre du rating
    bouton pour augmenter le rating
    bouton pour diminuer le rating (utiliser bootstrap pour le styliser)


    si vous cliquer augmenter => augmenter la valeur de rating de + 2 (maximum rating peut valeur 30)
    si vous cliquer diminuer => diminuer la valeur de rating de -5 (minimum rating peut valeur -20)

*/
