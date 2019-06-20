import React from 'react';
import '../Counters.css'
import Button from './Buttons';

export default class Counters extends React.Component{
    constructor(props) {
        super(props)
        this.counterArray = [];
        this.generateCounters();
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
        for (let i = 0; i < 5; i++) {
            let randomCounter = this.counterArray[Math.floor(Math.random() * this.counterArray.length)];


            set.add(
                <Button value={randomCounter.Value}/>
            )
        }
        return set;
    }

    

    render() {
        return (
            <>
                <div className="counter-container">
                    {this.createTiles()}
                </div>
            </>
        )
    }


}