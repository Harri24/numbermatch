import React from 'react';

export default class Buttons extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <button className="counter-buttons">
                    <div className="counter-buttons-val">
                    {
                        this.props.value
                    }
                    </div>
                </button>
        )
    }
}