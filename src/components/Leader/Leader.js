import React, {Component} from "react";
import CustomButton from "../../library/CustomButton";
import './Leader.css'

export default class Leader extends Component {
    render () {
        return (
            <div className="leaderFind">
                <div className="leadFund">
                    <p>The leader in online fundraising</p>
                </div>
                <div className="leaderTop">
                    <div className="leaderDonor">
                        <div className="donorProtect">
                            <h5>Donor protection guarantee</h5>
                            <p>GoFundMe has the first and only donor guarantee in the industry.</p>
                        </div>
                        <div className="donorProtect">
                            <h5>Simple setup</h5>
                            <p>You can personalize and share your GoFundMe in just a few minutes.</p>
                        </div>
                        <div className="donorProtect">
                            <h5>Secure</h5>
                            <p>Our Trust &amp; Safety team works around the clock to protect against fraud.</p>
                        </div>
                    </div>
                </div>
                <div className="leaderButton">
                    <CustomButton  buttonWidth="133px" buttonHeight="30px" buttonColor="#02A95C">Start a GoFundMe</CustomButton>
                </div>
            </div>
        )
    }
}