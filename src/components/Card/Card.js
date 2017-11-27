import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/index.js'
import CardList from './CardList';

const mapStateToProps = (state) => {
    return state;
};

class Card extends Component {

    componentWillMount() {
        this.props.findAllAxios();
    }

    render() {
        return (
            <div>
                <div className="well editPanel">
                    <h2>Add a Card</h2>
                    <form onSubmit={this.create} className="cardForm">
                        <div className="form-group">
                            <label htmlFor="general" className="toggleButton btn btn-default btn-lg">General &nbsp;
                                <input name="type" type="radio" id="general" defaultChecked />
                            </label>
                            <label htmlFor="code" className="toggleButton btn btn-default btn-lg">Code &nbsp;
                                <input name="type" type="radio" id="code" />
                            </label>
                        </div>
                        <div className="form-group fieldFront">
                            <label htmlFor="front">Front of Card</label>
                            <input type="text" id="front" className="form-control" />
                        </div>
                        <div className="form-group fieldBack">
                            <label htmlFor="back">Back of Card</label>
                            <textarea
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
                    <h2>{this.props.cards.length} Card(s)</h2>
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

                <CardList cards={this.props.cards} />
            </div>
        );
    }

    test() {
        console.log(this.props);
    }

    create() {
        console.log("create()");

        // axios.post(API_URL, {
        //     type: false,
        //     front: this.back.value,
        //     back: this.front.value,
        //     known: false
        // })
        //     .then(response => {
        //         console.log(response);
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }
}

export default connect(mapStateToProps, actionCreators)(Card);