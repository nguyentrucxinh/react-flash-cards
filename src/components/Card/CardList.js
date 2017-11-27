import React, { Component } from 'react';

class CardList extends Component {

    render() {
        return (
            <table className="table table-bordered">
                <tbody>
                    {this.props.cards.map(this.renderCard)}

                    {this.props.cards.length === 0 &&
                        <tr>
                            <td>
                                <em>No cards to show.</em>
                            </td>
                        </tr>
                    }
                </tbody>

            </table>
        );
    }

    renderCard(card) {
        return (
            <tr key={card.id}>
                <td>
                    <a href="/edit" className="btn btn-xs btn-primary"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
                </td>
                <td className="cardContent">
                    <h4>
                        {card.front}
                    </h4>

                    <pre><code>{card.back}</code></pre>

                </td>
            </tr>
        );
    }


}

export default CardList;