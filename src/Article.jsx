import React, { Component } from 'react';
import "./Article.css";
class Article extends Component {
    state = {
        titre: "Article 1",
        url: "https://via.placeholder.com/400x200",
        contenu: "Lorem Ipsum"
    }
    render() {
        return (
            <article className="card ma-card" style={{ width: "400px", margin: "20px 0" }}>
                <div className="card-header">
                    <h2>{this.state.titre}</h2>
                    <img src={this.state.url} alt="" className="img-fluid" />
                </div>
                {/** attention pour les balises orphelines img / br / hr vous devez mettre le symbole / avant le chevron fermant */}
                <p className="p-2">{this.state.contenu}</p>
            </article>
        );
    }
}
export default Article;

// composant => partie de ce que va voir l'internaute
// Like.jsx 
// chiffre => 0 (stocker dans le state)
// vue (render)
// afficher le chiffre + bouton augmenter le nombre de like
// Maximum maxium 10 like 
// au lieu de cliquer passer la souris sur le bouton et automatiquement 
// ce composant va nous permettre d'interagit avec lui => modifier state => render 