import React, {Component} from "react"; 
import Card from "../Card/Card";
import "./Fundraiser.css";

export default class Fundraiser extends Component {
    render () {
        return (
            <div className="topFundraisers">
                <div className="topRaisers">
                    <p>Top Fundraisers</p>
                </div>
                <div>
                    <Card />
                </div>
            </div>
        )
    }
}