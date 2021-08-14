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
                            <p className="cliveFamily">Help pay for AJs hospital treatment and recovery</p>
                            <p className="cliveTragic">AJ has gotten into a hockey accident, and might not be able to move his b…</p>
                            <p className="lastDonate">Last donation 2m ago</p>
                            <div className="progressBar">
                                <p className="progressBarSpan"><span></span></p>
                            </div>
                            <p className="dollarRaised">$769,046 raised of $800,000</p>
                        </div>
                </div>
                <div className="card">
                    <img src={`/images/Rectangle (4).svg`} alt=""/>
                        <div className="card-text">   
                            <h3>BALTIMORE, MD</h3>
                            <p className="cliveFamily">Help Save Baltimore Restaurants &amp; Bars!</p>
                            <p className="cliveTragic">Baltimore City restaurants are dying a slow, inevitable death due to th…</p>
                            <p className="lastDonate">Last donation 2m ago</p>
                            <div className="progressBar">
                                <p className="progressBarSpan"><span></span></p>
                            </div>
                            <p className="dollarRaised">$769,046 raised of $800,000</p>
                        </div>
                </div>
            </div>
            
        )  
        
    }
}

