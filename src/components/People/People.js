import React, {Component} from "react";
import Peoplecard from "./Peoplecard";
import './People.css'

export default class People extends Component {
    render () {
        return (
            <div className="peopleOver">
                <p>Over 10,000 people start a GoFundMe every day</p>
                <Peoplecard/>
            </div>
        )
    }
}