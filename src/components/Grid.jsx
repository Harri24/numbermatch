import React from 'react';
import "../Grid.css"
import Buttons from './Buttons'

export default class Grid extends React.Component{
    constructor(props) {
        super(props)
        this.objectArray = [];
        this.generateNumbers();
    }

    generateNumbers() {
        for (let i = 1; i < 101; i++) {
            this.objectArray.push({"Value": i, "Matched": false});
        }
        console.log(this.objectArray);
        return this.objectArray;
    }

    createTiles() {
        let html = [];
        for (let i = 0; i < this.objectArray.length; i++) {
            let randomObj = this.objectArray[Math.floor(Math.random() * this.objectArray.length)];


            html.push(
                <Buttons value={randomObj.Value} callback={(val) => this.storeValue(val)}/>
                // <button className="grid-button">
                //     <div className="grid-button-val">
                //     {
                //         randomObj.Value
                //     }
                //     </div>
                // </button>
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