import React from 'react';
import './InvitationCard.css';

class InvitationCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        };
    }

    render() {
        return <div className="invitation-card">
            <div className="corner-image">
                <div className="image-container">
                    <img src={process.env.PUBLIC_URL + "/images/corner1.png"}  alt="" />
                </div>
            </div> 
            <div className="invitation-card-inner">
                
            </div>
        </div>
    }
}

export default InvitationCard;