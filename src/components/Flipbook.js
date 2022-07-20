import React from 'react';
import './Flipbook.css';
import InvitationCard from './InvitationCard';

function FlipPart(props) {
    const {part, end, content} = props;
    return <div className={"flip-part flip-" + part + (end ? " last" : "")}>
        {(!end ? <FlipPart part={part + 1} end={part + 1 >= 12} content={content}></FlipPart> : '') }
        <div className="flip-part-inner">
            <div className='flip-part-content'>
                {content}
            </div>
            
        </div>
    </div>
}

class FlipBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state: '',
        };
    }
    flipThisBook() {
        if(!this.state.state || this.state.state === 'flip-revert') {
            this.setState({state: 'flip'});
        } else {
            this.setState({state: 'flip-revert'});
        }
    }
    render() {
        const content= <InvitationCard />;
        return <div className='flipbook-container'>
            <div className={"flipbook " + this.state.state}>
                <FlipPart part={1} end={false} content={content}></FlipPart>
                <div className="flipbook-page">
                    
                    <InvitationCard />
                </div>
                <div className="next-page-button-container">
                    <div className="heart next-page-button" onClick={() => this.flipThisBook()}>
                    </div>
                </div>
            </div>
        </div> 
    }
}

export default FlipBook;