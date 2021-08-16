import React , {Component} from "react";
import CustomButton from "../../library/CustomButton";
import "./Trending.css"

export default class Trending extends Component {
    render () {
        return (
            <div className="trendTopic">
                <div className="trendTop">
                    <h4>TRENDING TOPIC</h4>
                    <p>Fundraising for coronavirus relief</p>
                </div>
                <div>
                    <div className="topicOne">
                        <div>
                            <img src={`/images/Rectangle (8).svg`} alt="Doctor's Walking"/>
                        </div>
                        <div>
                            <p>
                                As COVID-19 continues to spread, more individuals, communities, 
                                and entire nations are feeling the impact in their daily lives.
                                Beyond the global health crisis, the coronavirus is having a 
                                severe economic impact on individuals, small businesses, and medical organizations.
                            </p>
                            <p className="topicOneTwo">
                                The urgent need for medical supplies, basic necessities, and 
                                quality healthcare is only increasing as more communities 
                                become affected by COVID-19. And with hundreds of thousands 
                                of individuals across the globe in quarantine, there is a 
                                growing need for financial support.
                            </p>
                        </div>
                        
                    </div>
                    <div className="topicTwo">
                        <div>
                            <p>
                                Thankfully, we all have the power to do something and make a 
                                difference. Here at GoFundMe, we're empowering individuals, 
                                organizations, and communities to step up in the face of the 
                                COVID-19 outbreak and help those who need it most.
                            </p>
                            <p className="topicTwoStart">
                                Start a GoFundMe to raise money to help yourself and others 
                                during this difficult time. Read our blog post for more information. 
                                If you’re looking to support others, donate to
                            </p>
                            <div className="topicButton">
                                <CustomButton buttonWidth="135px" buttonHeight="35px" buttonColor="#02A95C">Start a GoFundMe</CustomButton>
                            </div>
                        </div>
                        <div>
                            <img src={`/images/Rectangle (9).svg`} alt="Boy washing hand" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}