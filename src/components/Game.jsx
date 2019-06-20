import React from 'react';
import Grid from './Grid';
import Counters from './Counters'
import '../Game.css';

export default class Game extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <h1>Welcome to Number Match!</h1>
                <Grid></Grid>
                <aside>
                    <Counters></Counters>
                </aside>
            </div>
        )
    }
}