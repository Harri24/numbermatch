import React from 'react';
import '../Counters.css'
import Buttons from './Buttons';

export default class Counters extends React.Component{
    constructor(props) {
        super(props)
        this.counterArray = [];
        this.generateCounters();
        this.state = {};
        this.tiles = this.createTiles()
    }

    generateCounters() {
        for (let i = 1; i < 101; i++) {
            this.counterArray.push({"Value": i, "Matched": false});
        }
        return this.counterArray;
    }

    storeValue(val){
        this.setState({currentValue: val})
    }

    createTiles() {
        let html = [];
        let set = new Set(html)
        for (let i = 0; i < 1; i++) {
            let randomCounter = this.counterArray[Math.floor(Math.random() * this.counterArray.length)];


            set.add(
                // <div value={randomCounter.Value} callback={(val) => this.storeValue(val)}/>
                <div className="counter-buttons">
                    <div className="counter-buttons-val">
                        {randomCounter.Value}
                    </div>
                </div>
            )
        }
        return set;
    }

    

    render() {
        return (
            <>
            {this.state.currentValue}
                <div className="counter-container">
                    {this.tiles}
                </div>
            </>
        )
    }


}