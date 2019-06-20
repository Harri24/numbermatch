import React from 'react';
import Grid from './Grid';
import Counters from './Counters';
import Compare from  '../helpers/Compare.js';
import '../Game.css';

export default class Game extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                {
                    Compare()
                }
                <h1>Welcome to Number Match!</h1>
                <Grid></Grid>
                <aside>
                    <Counters></Counters>
                </aside>
            </div>
        )
    }
}