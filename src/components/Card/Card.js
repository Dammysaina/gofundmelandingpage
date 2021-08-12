import React , {Component} from "react"

export default class Card extends Component {
    render () {
        return (
            <div className="card">
                <img src={`/images/lamb.jpg`} alt=""/>
                    <div className="card-text">
                        <h3>Online Experiences</h3>
                        <h4>Unique activities we can do together, led by world of hosts.</h4>
                    </div>
            </div>
        )
        
    }
}

