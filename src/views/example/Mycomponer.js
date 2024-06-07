import React from 'react';

class Mycomponer extends React.Component {
    state = {
        name: "vo tu",
        age: 5
    };
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <>
                <button className='a'></button>
                <input value={this.state.name} type="text" onChange={(event) => this.handleOnchangeName(event)} />
                <div>
                    {this.state.name}
                </div>
                <div className='s'>hello word </div>
            </>
        )
    }
}
export default Mycomponer;