import React, {Component} from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import CustomButton from '../../library/CustomButton';

export default class Header extends Component {
    render () {
        return (
            <div>
                <div>
                <Link to ="/">
                <p>Create Centers</p>
                </Link>
                </div>
                <div>
                <CustomButton buttonWidth="133px" buttonHeight="35px">CANCEL</CustomButton>
                </div>
            </div>
        )
    }
}