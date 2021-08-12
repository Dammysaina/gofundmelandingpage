import React, {Component} from "react"; 
import "./Fundraising.css";
import CustomButton from "../../library/CustomButton"

export default class Fundraising extends Component {
    render () {
        return (
            <div className="fundRaise">
                <div className="fundraiseOne">
                    <div className="fundRaiseWorks">
                        <div className="fundStarters">
                            <h3>Fundraising for the people and causes you care about</h3>
                            <p>Starting is easy. 0% Platform fee for starters *.</p>
                        </div>
                        <div className="goFund">
                            <div className="buttonStart">
                                <CustomButton buttonWidth="133px" buttonHeight="40px" buttonColor="#02A95C">Start a GoFundMe</CustomButton>
                            </div>
                            <div className="buttonWorks">
                                <p><span className="buttonLine">|</span><span className="buttonBox"></span> See how GoFundMe works</p>
                            </div>
                        </div>
                        <div className="transactFund">
                            <p>*Transaction fees, including credit and debit charges, apply.</p>
                        </div>
                    </div>
                    <div className="fundRaiseImage">
                        <img src={`/images/Rectangle.svg`} alt="women smiling" />
                    </div>
                </div>
                <div className="fundraiseTwo">
                    <div className="fundRaiseWorks">
                        <img src={`/images/Rectangle (1).svg`} alt="black man"/>
                    </div>
                    <div className="fundRaiseImage">
                        <h3>Feel the joy of giving</h3>
                        <p>Choose a GoFundMe Cause. Make a donation. See your impact.</p>
                        <CustomButton buttonWidth="140px" buttonHeight="35px" buttonColor="#FDB933">Donate to a cause</CustomButton>
                    </div>
                </div>
            </div>
        )
    }
}