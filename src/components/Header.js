import React from 'react';

class Header extends React.Component {

    qoutes = [
        "Love all, trust a few, do wrong to none.",
        "You call it madness, but I call it love.",
        "We can only learn to love by loving.",
        "A life lived in love will never be dull.",
        "Life is the flower for which love is the honey.",
        "All you need is love." ,
        "True love stories never have endings." ,
        "Love is shown more in deeds than in words." ,
        "Love is not a volunteer thing." ,
        "Love is friendship on fire." ,
        "Love is the ultimate expression of the will to live." ,
        "Love is what makes the ride worthwhile." ,
        "The love we give away is the only love we keep.",
        "Tell me whom you love and I will tell you who you are",
        "Trust your intuition and be guided by love." ,
        "That's all nonviolence is - organized love." ,
        "We love because it's the only true adventure.",
    ];
    constructor (props) {
        super(props);
        this.state = {
            qoute: this.qoutes[0],
            qouteIndex: 0,
        };
        this.randomQoute = this.randomQoute.bind(this);
        
    }
    componentDidMount() {
        if ( this.timer) {
            clearInterval(this.timer);
        }
        this.timer = setInterval(this.randomQoute, 5000);
    }
    randomQoute() {
        let qouteIndex = this.state.qouteIndex + 1;
        if (qouteIndex >= this.qoutes.length) {
            qouteIndex = 0;
        }
        this.setState({
            qoute: this.qoutes[qouteIndex],
            qouteIndex: qouteIndex,
        });
    };
    render() {
        return  <div className="header">
            <div className='beauty logo-name'>Lộc &#10084; Ái</div>
            <div className='qoute'>{this.state.qoute}</div>
            <div className='head-invitation-card' onClick={() => this.props.showCard()}>Thiệp mời</div>
        </div>
    }

}

export default Header;