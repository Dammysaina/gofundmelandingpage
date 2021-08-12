import React , {Component} from "react";
import "./Card.css"

export default class Card extends Component {
    render () {
        return (
            <div className="pictureCard">
                <div className="card">
                    <img src={`/images/Rectangle (2).svg`} alt=""/>
                        <div className="card-text">
                            <h3>Massapequa, NY</h3>
                            <p>Clive Family</p>
                            <p>Tragically Barbara and Dave Clive passed away in the past week with…</p>
                        </div>
                </div>
                <div className="card">
                    <img src={`/images/Rectangle (3).svg`} alt=""/>
                        <div className="card-text">
                            <h3>Massapequa, NY</h3>
                            <p>Clive Family</p>
                            <p>Tragically Barbara and Dave Clive passed away in the past week with…</p>
                        </div>
                </div>
                <div className="card">
                    <img src={`/images/Rectangle (4).svg`} alt=""/>
                        <div className="card-text">
                            <h3>Massapequa, NY</h3>
                            <p>Clive Family</p>
                            <p>Tragically Barbara and Dave Clive passed away in the past week with…</p>
                        </div>
                </div>
            </div>
            
        )
        
    }
}

