import './FlipCard.css';
import React from 'react';
import Envelope from './Envelope';

class FlipCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flip: false,
            status: 'closed'
        };
        this.invitation = {
            guestNameAndRelation: 'Anh và gia đình',
            myTitle: 'chúng em',
            guestTitle: 'anh',
            name: 'Anh Phương Linh'
        };
    }

    flipThisCard() {
        this.setState({
            flip: !this.state.flip,
        });
    }

    openEnvelope() {
        this.setState({
            status: 'openning',
        });
    }

    render() {
        return <div className={"flip-card" + (this.state.flip ? ' flip' : '') + ' ' + this.state.status}>
            <div className="flip-card-inner">
                <div className="flip-card-front" onClick={() => this.flipThisCard()}>
                    <div className='envelope'>
                        <div className="name-border">
                            <div className="text-container">
                                <img src={process.env.PUBLIC_URL + "/front-border.png"} alt="border" />
                                <div className="name name-1 beauty">Xuân Lộc</div>
                                <div className="name name-2 beauty"><span>Quỳ</span><span style={{marginLeft: '-0.5rem'}}>nh Ái</span> </div>
                            </div>
                        </div>
                        <div className="invite_name">
                            <div className="invitation normal">Trân trọng kính mời: </div>
                            <div className="guest-name hw">{this.invitation.name}</div>
                        </div>
                    </div>
                </div>
                <div className="flip-card-back">
                    <Envelope openEnvelope={() => this.openEnvelope()} invitation={this.invitation}/>
                </div>
            </div>
        </div>
        
    }
}

export default FlipCard;