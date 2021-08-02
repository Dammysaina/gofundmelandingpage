import React, {Component} from "react";
import CustomButton from "../../library/CustomButton";
import "./Footer.css";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class Footer extends Component {
    render () {
        return (
            <div className= "footerCard">
                <div className="FooterOne">
                    <p>Ready to start fundraising?</p>
                    <CustomButton className="footerButton" buttonWidth="133px" buttonHeight="35px">Start a GoFundMe</CustomButton>
                </div>
                <div className="footerTwo">
                    <div className="fundraiseFor">
                        <h6>FUNDRAISE FOR</h6>
                        <p>Medical</p>
                        <p>Emergency</p>
                        <p>Memorial</p>
                        <p>Education</p>
                        <p>Nonprofit</p>
                        <p>Coronavirus fundraising</p>
                    </div>
                    <div className="learnMore">
                        <h6>LEARN MORE</h6>
                        <p>How GoFundMe works</p>
                        <p>Why GoFundMe</p>
                        <p>Common questions</p>
                        <p>Success stories</p>
                        <p>Supported countries</p>
                        <p>GoFundMe Charity</p>
                    </div>
                    <div className="resourcesCenter">
                        <h6>RESOURCES</h6>
                        <p>Help center</p>
                        <p>Blog</p>
                        <p>GoFundMe Stories</p>
                        <p>Press Center</p>
                        <p>Careers</p>
                        <p>About</p>
                        <p>More Resources</p>
                    </div>
                </div>
                <div className="footerThree">
                    <p> <FontAwesomeIcon icon={faCopyright} /> 2020-2021 GoFundMe</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Legal</p>
                </div>
            </div>
        )
    }
}
