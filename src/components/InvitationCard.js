import './InvitationCard.css';
import React from 'react';

class InvitationCard extends React.Component {
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
        setTimeout(() => {
            this.setState({
                status: 'openning-2',
            });
            
            setTimeout(() => {
                this.setState({
                    status: 'openning-3',
                });
            }, 500);
        }, 500);
    }

    render() {
        return <div className="invitation-card">
            <div className="envelope-container ">
                <div className="back-envelope">

                </div>
                <div className="front-envelope">
                    <div className="front-envelope-background">
                        
                    </div>
                </div>
                <div className="open-button-container">
                    <div className="open-button" onClick={() => this.openEnvelop()}>
                    </div>
                </div>
                <div className={"open-envelope " + this.state.status}>
                    <div className="glue-container">

                        <div className="glue">

                        </div>
                    </div>
                </div>
                
                <div className="button-envelope">

                </div>
                <div className={"card " + this.state.status}></div>
            </div>
        </div>
    }
}

export default InvitationCard