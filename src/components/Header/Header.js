import React, {Component} from "react";
import "./Header.css";
// import { Link } from 'react-router-dom';
import CustomButton from '../../library/CustomButton';

export default class Header extends Component {
    render () {
        return (
            <div>
                <div className="greyRectangle">

                </div>
                <div className>            
                    <p>Search</p>
                    <p>For Individuals</p>
                    <p>For nonprofits</p>
                </div>
                <div>
                    <p>How it works</p>
                    <p>Sign in</p>
                <CustomButton buttonWidth="133px" buttonHeight="35px">Start a GoFundMe</CustomButton>
                </div>
            </div>
        )
    }
}