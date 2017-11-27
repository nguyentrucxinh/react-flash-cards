import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div>
                <div className="well editPanel">
                    <h2>Add a Card</h2>
                    <form action="add_card" method="post" className="cardForm">
                        <div className="form-group">
                            <label for="general" className="toggleButton btn btn-default btn-lg">General &nbsp;
                    <input type="radio" name="type" value="1" id="general" />
                            </label>
                            <label for="code" className="toggleButton btn btn-default btn-lg">Code &nbsp;
                    <input type="radio" name="type" value="2" id="code" />
                            </label>
                        </div>
                        <div className="form-group fieldFront">
                            <label for="front">Front of Card</label>
                            <input type="text" name="front" id="front" className="form-control" />
                        </div>
                        <div className="form-group fieldBack">
                            <label for="back">Back of Card</label>
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

                <table className="table table-bordered">

                    <tr>
                        <td>
                            <a href="/edit" className="btn btn-xs btn-primary"><i className="fa fa-pencil" aria-hidden="true"></i>test</a>
                        </td>
                        <td className="cardContent">
                            <h4>

                            </h4>

                            <pre><code>card.back|escape</code></pre>

                        </td>
                    </tr>

                    <tr>
                        <td>
                            <em>No cards to show.</em>
                        </td>
                    </tr>

                </table>
            </div>
        );
    }
}

export default Cards;