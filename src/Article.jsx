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