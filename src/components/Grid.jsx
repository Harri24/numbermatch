import React from 'react';
import "../Grid.css"
import Buttons from './Buttons'

export default class Grid extends React.Component{
    constructor(props) {
        super(props)
        this.currentNumber = 0;
    }


    createTiles() {
        let html = [];
        for (let i = 0; i < this.props.objectArray.length; i++) {
            let randomObj = this.props.objectArray[i];

            html.push(
                <>
                <Buttons randomObj={randomObj} counterNumber={this.props.counterNumber} objectArray={randomObj} checkNumber={this.props.checkNumber} callback={(val) => this.props.callback(val)}
                />
                </>
            )
        }
        return html;
    }

    render() { 
        return (
            <>
                <div className="grid-container">
                    {this.createTiles()}
                </div>
            </>
            
        )
    }
}