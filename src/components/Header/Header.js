import React, {Component} from "react";
import "./Header.css";
// import { Link } from 'react-router-dom';
import CustomButton from '../../library/CustomButton';

export default class Header extends Component {
    render () {
        return (
            <div className="headerCard">
                <div className="greyRectangle">

                </div>
                <div className="headerSide">
                <div className="headerSideOne">            
                    <p>Search</p>
                    <p>For Individuals</p>
                    <p>For nonprofits</p>
                </div>
                <div className="headerSideTwo">
                    <p>How it works</p>
                    <p>Sign in</p>
                    <CustomButton className="customButton" buttonWidth="133px" buttonHeight="30px">Start a GoFundMe</CustomButton>
                </div>
                </div>
            </div>
        )
    }
}