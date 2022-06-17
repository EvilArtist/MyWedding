import React from 'react';
class SlideImage extends React.Component {
    render() {
        return (
            <img src={this.props.imageURL}/>
        );
    }
}

export default SlideImage;