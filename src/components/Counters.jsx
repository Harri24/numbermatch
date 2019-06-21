import React from 'react';
import '../Counters.css';

export default class Counters extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="counter-container">
                <div className="counter-buttons" >
                    <div className="counter-buttons-val">
                        {this.props.currentCounter}
                    </div>
                </div>
            </div>
        )
    }


}