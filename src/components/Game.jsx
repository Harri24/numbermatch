import React from 'react';
import Grid from './Grid';
import Counters from './Counters';
import '../Game.css';
import _ from 'lodash';


export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.gridArray = [];
        this.counterArray = [];
        let initialGridArray = this.generateNumbers();
        this.getNextNumber();
        this.state = {
            gridArray: initialGridArray,
            currentNumber: this.getFirstNumber(),
            score: 0
        }
        this.checkNumber = this.checkNumber.bind(this);
    }

    getFirstNumber() {
        return this.counterArray.shift().Value;
    }

    getNextNumber() {
        this.setState({
            currentNumber: this.counterArray.shift().Value
        })
    }

    generateNumbers() {
        let objectArray = [];
        for (let i = 1; i < 101; i++) {
            objectArray.push({
                Value: i,
                Matched: false,
                DisplayOrder: Math.random(),
                ClickedOrder: Math.random()
            });
        }
        let gridArray = _.sortBy(objectArray, ['DisplayOrder']);
        this.counterArray = _.sortBy(objectArray, ['ClickedOrder']);
        return gridArray;
    }

    saveScore(value){
        this.setState({score: value})
    }

    counter() {
        let currentCount = this.state.gridArray.filter(x => x.Matched).length;
        this.setState({score: currentCount});
    }

    checkNumber(numberClicked) {
        if (numberClicked === this.state.currentNumber) {
            let gridArray = this.state.gridArray;
           
            gridArray.forEach(x => {
                if (x.Value === numberClicked) {
                    x.Matched = true;
                }
            })
            this.counter();
            this.getNextNumber();
            this.setState({
                gridArray: this.state.gridArray
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome to Number Match!</h1>
                <h2>Current score: {this.state.score}</h2>
                <Grid callback={(val) => this.saveScore(val)} objectArray={this.state.gridArray} counterNumber={this.state.currentNumber} checkNumber={this.checkNumber}></Grid>
                <aside>
                    <Counters currentCounter={this.state.currentNumber}></Counters>
                </aside>
            </div>
        )
    }
}