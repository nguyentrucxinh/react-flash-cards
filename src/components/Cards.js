import React, { Component } from 'react';
import axios from "axios";

import CardList from './CardList';

class Cards extends Component {

    constructor() {
        super();

        this.state = {
            cards: []
        };

        this.findAll();
    }

    render() {
        return (
            <div>
                <div className="well editPanel">
                    <h2>Add a Card</h2>
                    <form action="add_card" method="post" className="cardForm">
                        <div className="form-group">
                            <label htmlFor="general" className="toggleButton btn btn-default btn-lg">General &nbsp;
                    <input type="radio" name="type" value="1" id="general" />
                            </label>
                            <label htmlFor="code" className="toggleButton btn btn-default btn-lg">Code &nbsp;
                    <input type="radio" name="type" value="2" id="code" />
                            </label>
                        </div>
                        <div className="form-group fieldFront">
                            <label htmlFor="front">Front of Card</label>
                            <input type="text" name="front" id="front" className="form-control" />
                        </div>
                        <div className="form-group fieldBack">
                            <label htmlFor="back">Back of Card</label>
                            <textarea name="back"
                                className="form-control"
                                id="back"
                                placeholder="back of card"
                                rows="12"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="saveButton btn btn-lg btn-primary">Save</button>
                        </div>
                    </form>
                </div>

                <div className="page-header">
                    <h2>cards|length Card</h2>
                </div>
                <div className="btn-group btn-group-md" role="group" aria-label="filters">
                    <a href="" className="btn btn-primary">All</a>
                    <a href="" className="btn btn-default">General</a>
                    <a href="" className="btn btn-default">Code</a>
                    <a href="" className="btn btn-default">Known</a>
                    <a href="" className="btn btn-default">Unknown</a>
                </div>

                <br />
                <br />

                <CardList cards={this.state.cards} />
            </div>
        );
    }

    findAll() {
        console.log("findAll()");

        let self = this;

        axios.get("http://api-dot-foodmenulist.appspot.com/api/user/cards")
            .then(response => {
                console.log(response);
                console.log(response.data);
                self.setState({
                    cards: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default Cards;