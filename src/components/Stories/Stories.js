/* eslint-disable jsx-a11y/img-redundant-alt */
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

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 :current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }  


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
        return (
            <section className="sliderImage">
                <div className="storiesText">
                    <h4>GOFUNDME FUNDRAISING STORIES</h4>
                    <p className="meetChris">Meet Chris &amp; Norma</p>
                    <p className="lifeStories">"My life has changed forever because of Norma and what happened. 
                        It gave me hope again. Changing someone's life will change your own forever."</p>
                    <p className="lifeStories Chris">Chris raised $70k to help his neighbor Norma stay in her home.</p>
                </div>
                
                <div>
                <FontAwesomeIcon icon={faArrowRight} className="right-arrow" onClick={nextSlide}/>
                <FontAwesomeIcon icon={faArrowLeft} className="left-arrow" onClick={prevSlide} />
                {/* <FaArrowAltCircleLeft className="left-arrow" />
                <FaArrowAltCircleRight className="right-arrown"/> */}
                {Storiesimage.map ((slide, index) => {
                    return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <img src={slide.image} alt='travel image'  className="image"/>
                        
                    )}
                    </div> 
                    )
                })}
                </div>
                
                
            </section>
    );
    
};

export default Stories;