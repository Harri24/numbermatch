import React from 'react';
import Grid from './Grid';
import Counters from './Counters';
import '../Game.css';
import Compare from '../helpers/Compare';

export default class Game extends React.Component{
    constructor(props) {
        super(props);

    }

    saveScore(value){
        this.setState({score: value})
    }

    render() {
        return (
            <div className="container">
                {/* {
                    Compare.matchValue(Buttons.currentNumber)
                } */}
                <h1>Welcome to Number Match!</h1>
                <Grid callback={(val) => this.saveScore(val)}></Grid>
                <aside>
                    <Counters></Counters>
                </aside>
            </div>
        )
    }
}

//Counters value={this.props.value} callback={(val) => this.props.callback(val)}