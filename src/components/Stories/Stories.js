import React, {useState} from "react";
import { Storiesimage } from "./Storiesimage";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Stories.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"

const Stories = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
        return (
            <div className="sliderImage">
                <FontAwesomeIcon icon={faArrowRight} className="right-arrow"/>
                <FontAwesomeIcon icon={faArrowLeft} className="left-arrow" />
                {/* <FaArrowAltCircleLeft className="left-arrow" />
                <FaArrowAltCircleRight className="right-arrown"/> */}
                {Storiesimage.map ((slide, index) => {
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    return <img src={slide.image} alt='travel image'  className="image"/>; 
                })}
            </div>
    );
    
};

export default Stories;