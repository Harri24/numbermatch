import React from 'react';
import Grid from './Grid';
import Counters from './Counters';
import '../Game.css';
import Compare from '../helpers/Compare';
import _ from 'lodash';


export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.gridArray = [];
        this.counterArray = [];
        this.generateNumbers();
        this.currentNumber = null;
        this.getNextNumber();

    }

    getNextNumber() {
        this.currentNumber = this.counterArray.shift().Value;
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
        this.gridArray = _.sortBy(objectArray, ['DisplayOrder']);
        this.counterArray = _.sortBy(objectArray, ['ClickedOrder']);
    }

    saveScore(value){
        this.setState({score: value})
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome to Number Match!</h1>
                <Grid callback={(val) => this.saveScore(val)} objectArray={this.gridArray} counterNumber={this.currentNumber}></Grid>
                <aside>
                    <Counters currentCounter={this.currentNumber}></Counters>
                </aside>
            </div>
        )
    }
}