import React, { Component } from 'react';

class Dislike extends Component {
    state = {
        rating: 0
    }
    add = () => {
        if (this.state.rating < 30) {
            this.setState({
                rating: this.state.rating + 2
            });
        }
    }

    decrease() {
        if (this.state.rating > -20) {
            this.setState({
                rating: this.state.rating - 5
            });
        }
    }

    render() {
        return (
            <div>
                Dislike
                <span className="m-2 badge badge-danger">{this.state.rating}</span>
                <button className="btn btn-success m-2 " onClick={this.add}>augmenter</button>
                <button className="btn btn-warning m-2 " onClick={this.decrease.bind(this)}>diminuer</button>
            </div>
        );
    }
}

export default Dislike;