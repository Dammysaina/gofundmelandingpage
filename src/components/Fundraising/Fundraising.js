import React, {Component} from "react"; 
import "./Fundraising.css";

export default class Fundraising extends Component {
    render () {
        return (
            <div className="fundRaise">
                <div className="fundraiseOne">
                    <div>
                        <p>Fundraising for the people and causes you care about</p>
                    </div>
                    <div >
                        <img src={`/images/Rectangle.svg`} alt="women smiling" />
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}