import React, { Component } from 'react';

class CardList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <table className="table table-bordered">
                <tbody>
                    {this.props.cards.map(this.renderCard)}

                    <tr>
                        <td>
                            <em>No cards to show.</em>
                        </td>
                    </tr>
                </tbody>

            </table>
        );
    }

    renderCard(card) {
        return (
            <tr key={card.id}>
                <td>
                    <a href="/edit" className="btn btn-xs btn-primary"><i className="fa fa-pencil" aria-hidden="true"></i>{card.front}</a>
                </td>
                <td className="cardContent">
                    <h4>
                        {card.back}
                    </h4>

                    <pre><code>{card.back}</code></pre>

                </td>
            </tr>
        );
    }


}

export default CardList;