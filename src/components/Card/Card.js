import React , {Component} from "react";
import "./Card.css"

export default class Card extends Component {
    render () {
        return (
            <div className="pictureCard">
                <div className="card">
                    <img src={`/images/Rectangle (2).svg`} alt=""/>
                        <div className="card-text">
                            <h3>MASSAPEQUA, NY</h3>
                            <p className="cliveFamily">Clive Family</p>
                            <p className="cliveTragic">Tragically Barbara and Dave Clive passed away in the past week with…</p>
                            <p className="lastDonate">Last donation 2m ago</p>
                            <div className="progressBar">
                                <p className="progressBarSpan"><span></span></p>
                            </div>
                            <p className="dollarRaised">$769,046 raised of $800,000</p>
                        </div>
                </div>
                <div className="card">
                    <img src={`/images/Rectangle (3).svg`} alt=""/>
                        <div className="card-text">
                            <h3>PROVIDENCE, RI</h3>
                            <p>Clive Family</p>
                            <p>Tragically Barbara and Dave Clive passed away in the past week with…</p>
                            <p>Last donation 2m ago</p>
                        </div>
                </div>
                <div className="card">
                    <img src={`/images/Rectangle (4).svg`} alt=""/>
                        <div className="card-text">
                            <h3>BALTIMORE, MD</h3>
                            <p>Clive Family</p>
                            <p>Tragically Barbara and Dave Clive passed away in the past week with…</p>
                            <p>Last donation 2m ago</p>
                        </div>
                </div>
            </div>
            
        )
        
    }
}

