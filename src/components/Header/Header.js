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
                    <div className="customButton">
                        <CustomButton  buttonWidth="133px" buttonHeight="30px" buttonColor="#02A95C">Start a GoFundMe</CustomButton>
                    </div>
                   
                </div>
                </div>
            </div>
        )
    }
}