import React from 'react';
import '../Counters.css';

export default class Counters extends React.Component{
    constructor(props) {
        super(props)
        this.counterArray = [];
        this.generateCounters();
        this.tiles = this.createTiles()
    }

    generateCounters() {
        for (let i = 1; i < 101; i++) {
            this.counterArray.push({"Value": i, "Matched": false});
        }
        return this.counterArray;
    }

    createTiles() {
        let html = [];
        let set = new Set(html)

            let randomCounter = this.counterArray[Math.floor(Math.random() * this.counterArray.length)];


            set.add(
                <div className="counter-buttons" >
                    <div className="counter-buttons-val">
                        {randomCounter.Value}
                    </div>
                </div>
            )
        
        this.props = { value: randomCounter.Value}
        console.log(this.props.value);
        return set;
    }


    // returnStateValue() {
    //     let value = this.props.value;
    //     return value;
    // }

    render() {
        return (
            <>
            
                <div className="counter-container">
                    {this.tiles}
                </div>
            </>
        )
    }


}