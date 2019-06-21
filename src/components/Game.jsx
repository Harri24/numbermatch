import React from 'react';
import Grid from './Grid';
import Counters from './Counters';
import '../Game.css';
import Compare from '../helpers/Compare';
import _ from 'lodash';
import { statement } from '@babel/template';


export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.gridArray = [];
        this.counterArray = [];
        let initialGridArray = this.generateNumbers();
        this.getNextNumber();
        this.state = {
            gridArray: initialGridArray,
            currentNumber: this.getFirstNumber()
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

    // counter() {
    //     console.log('Current Score:',);
    // }

    checkNumber(numberClicked) {
        if (numberClicked === this.state.currentNumber) {
            let gridArray = this.state.gridArray;
           
            gridArray.forEach(x => {
                if (x.Value === numberClicked) {
                    x.Matched = true;
                }
            })

            this.getNextNumber();

            this.setState({
                gridArray: this.state.gridArray
            })
            // this.counter();
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome to Number Match!</h1>
                <Grid callback={(val) => this.saveScore(val)} objectArray={this.state.gridArray} counterNumber={this.state.currentNumber} checkNumber={this.checkNumber}></Grid>
                <aside>
                    <Counters currentCounter={this.state.currentNumber}></Counters>
                </aside>
            </div>
        )
    }
}