import React, {Component} from "react"; 
import "./Fundraising.css";
import CustomButton from "../../library/CustomButton"

export default class Fundraising extends Component {
    render () {
        return (
            <div className="fundRaise">
                <div className="fundraiseOne">
                    <div>
                        <div>
                            <h3>Fundraising for the people and causes you care about</h3>
                            <p>Starting is easy. 0% Platform fee for starters *.</p>
                        </div>
                        <div>
                            <CustomButton buttonWidth="133px" buttonHeight="30px" buttonColor="#02A95C">Start a GoFundMe</CustomButton>
                            <p></p>
                        </div>
                    </div>
                    <div >
                        <img src={`/images/Rectangle.svg`} alt="women smiling" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={`/images/Rectangle (1).svg`} alt="black man"/>
                    </div>
                    <div>
                        <h4>Feel the joy of giving</h4>
                        <p>Choose a GoFundMe Cause. Make a donation. See your impact.</p>
                        <CustomButton buttonWidth="133px" buttonHeight="30px" buttonColor="#FDB933">Donate to a cause</CustomButton>
                    </div>
                </div>
            </div>
        )
    }
}