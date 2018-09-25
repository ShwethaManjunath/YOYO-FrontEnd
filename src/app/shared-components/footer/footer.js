// basic react component starting template
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Footer extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
    
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);