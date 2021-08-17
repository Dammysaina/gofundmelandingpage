import React, {Component} from "react";
import CustomButton from "../../library/CustomButton";
import "./Charity.css"

export default class Charity extends Component {
    render () {
        return (
            <div className="newCharity">
                <div className="newImage">
                    <img src={`/images/Rectangle (10).svg`} alt="laptop" />
                </div>
                <div>
                    <div className="newGoFundMe">
                        <h5>New</h5>
                        <h6 className="introCharity">Introducing GoFundMe Charity <sup>TM</sup></h6>
                        <div className="introText">
                            <p className="introPower">Our powerful fundraising software with no subscription fees for charities of all sizes</p>
                            <p>Unrestricted access to data and robust tools to reach more donors.</p>
                            <p>Customize your brand experience from start to finish</p> 
                        </div>
                    </div>
                    <div>
                        <CustomButton buttonWidth="140px" buttonHeight="40px" buttonColor="#03866D">Learn more</CustomButton>
                    </div>
                </div>
            </div>
        )
    }
}