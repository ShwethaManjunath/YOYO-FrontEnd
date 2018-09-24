// basic react component starting template
import React, { Component } from 'react';
import * as classes from './dashboard.scss';

class DashBoard extends Component {
    render() {
        return (
            <div className={classes.Body}>Home Component</div>
        );
    }
}

export default DashBoard;