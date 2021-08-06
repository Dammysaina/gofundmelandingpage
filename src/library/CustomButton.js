import React from 'react';
import Button from './Button.Styles';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
    return (
        <Button buttonWidth={props.buttonWidth} buttonHeight={props.buttonHeight} buttonColor={props.buttonColor}>
            {props.children} 
        </Button>
    )
};

Button.propTypes = {
    buttonWidth: PropTypes.string,
    buttonHeight: PropTypes.string,
    buttonColor: PropTypes.string
}

export default CustomButton;