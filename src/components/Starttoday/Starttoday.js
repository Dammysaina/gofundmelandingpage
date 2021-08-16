import React, {Component} from "react";
import "./Starttoday.css"

export default class Starttoday extends Component {
    render () {
        return (
            <div className="startToday">
                <div className="startFund">
                    <h4>Start fundraising today</h4>
                    <p>More money raised online than anywhere else.<span>Learn about how GoFundMe works.</span></p>
                </div>
                <div className="startImage">
                    <div>
                        <img src={`/images/Rectangle (5).svg`} alt="For yourself"/>
                        <p>For yourself</p>
                    </div>
                    <div>
                        <img src={`/images/Rectangle (6).svg`} alt="For a friend"/>
                        <p>For a friend</p>
                    </div>
                    <div>
                        <img src={`/images/Rectangle (7).svg`} alt="For a charity"/>
                        <p>For a charity</p>
                    </div>
                </div>
            </div>
        )
    }
}