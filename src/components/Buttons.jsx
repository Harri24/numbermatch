import React from 'react';

export default class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activated: false,
        }
    }

    activate(){
        this.props.callback(this.props.value)
        this.setState({activated: true});
    }

    render(){
        return(
            <button className={`grid-button grid-button-val ${this.state.activated ? 'button-activated' : ''}`} onClick={() => this.activate()}>
                    <div className="grid-buttons-val">
                    {
                        this.props.value
                    }
                    </div>
                </button>
        )
    }
}