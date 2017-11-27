import React, { Component } from 'react';

class Memorize extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <div className="btn-group btn-group-lg" role="group" aria-label="card type">
                            <a href="general" className="btn btn-primary">General</a>
                            <a href="code" className="btn btn-default">Code</a>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row memorizePanel">

                    <div className="col-xs-8 col-xs-offset-2">
                        <div className="panel panel-default cardFront">
                            <div className="panel-body">
                                <div className="alignContainer">
                                    <div className="alignMiddle frontText">
                                        <h3 className="text-center">card.front</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-primary cardBack">
                            <div className="panel-body">
                                <div className="alignContainer">
                                    <div className="alignMiddle frontText">

                                        <div className="text-center largerText">

                                            card.back

                                    </div>


                                        <pre><code>card.back</code></pre>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 text-center">
                        <a href="javascript:" className="btn btn-primary btn-lg flipCard">
                            <i className="fa fa-exchange"></i>
                            Flip Card
            </a>
                        &nbsp;
            &nbsp;
            <a href="mark_known" className="btn btn-success btn-lg">
                            <i className="fa fa-check"></i>
                            I Know It
            </a>
                        &nbsp;
            &nbsp;
            <a href="card_type" className="btn btn-primary btn-lg">
                            Next Card
                <i className="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <br />
                        <br />
                        <br />
                        <a href="" className="btn btn-default btn-sm">
                            <i className="fa fa-bookmark"></i>
                            bookmark this card (# card.id )
            </a>

                    </div>
                </div>


            </div>
        );
    }
}

export default Memorize;