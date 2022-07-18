import './Envelope.css';
import React from 'react';
import InvitationCard from './InvitationCard';

class Envelope extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'close',
        };
    }

    openEnvelop() {
        this.setState({
            status: 'openning-1',
        });
        this.props.openEnvelope();
        setTimeout(() => {
            this.setState({
                status: 'openning-2',
            });
            
            setTimeout(() => {
                this.setState({
                    status: 'openning-3',
                });
                setTimeout(() => {
                    this.setState({
                        status: 'openning-4',
                    })
                }, 500);
            }, 500);
        }, 500);
    }

    render() {
        return <div className="envelope-container">
                <div className="back-envelope">

                </div>
                <div className="front-envelope-container">
                    <div className="front-envelope">
                        <div className="front-envelope-background">
                            
                        </div>
                    </div>
                </div>
                <div className="open-button-container">
                    <div className="open-button heart" onClick={() => this.openEnvelop()}>
                    </div>
                </div>
                <div className={"open-envelope " + this.state.status}>
                    <div className="glue"></div>
                </div>
                
                <div className="button-envelope">

                </div>
                <div className={"card " + this.state.status}>
                    <InvitationCard />
                </div>
            </div>
    }
}

export default Envelope