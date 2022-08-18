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
                        <div className="invite_name">
                            <div className="invitation normal">Trân trọng kính mời: </div>
                            <div className="guest-name hw">{this.props.invitation.name}</div>
                        </div>
                    </div>
                </div>
                <div className="flip-card-back">
                    <Envelope openEnvelope={() => this.openEnvelope()} invitation={this.props.invitation}/>
                </div>
            </div>
        </div>
        
    }
}

export default FlipCard;