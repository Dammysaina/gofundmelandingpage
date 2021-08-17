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
                        <p className="introCharity">Introducing GoFundMe Charity <sup>TM</sup></p>
                        <p className="introPower">Our powerful fundraising software with no subscription fees for charities of all sizes
                            <span>Unrestricted access to data and robust tools to reach more donors.</span>
                            <span>Customize your brand experience from start to finish</span> 
                        </p>
                    </div>
                    <div>
                        <CustomButton buttonWidth="140px" buttonHeight="35px" buttonColor="#03866D">Learn More</CustomButton>
                    </div>
                </div>
            </div>
        )
    }
}