import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './widget.css';

let headerText = 'Header goes here';
let statOneText = 'Stat One: yay!';
let statTwoText = 'Stat Two: yay!';

class Widget extends Component {
  render() {
    return (
      <div style={{ "width":"40%", "margin":"2%" }}>
        <Card className={styles.card}>
           <CardContent>
             <Typography variant="headline" component="h2">
              {headerText}
             </Typography>
             <Typography component="p">
              {statOneText}
             </Typography>
             <Typography component="p">
              {statTwoText}
             </Typography>
           </CardContent>
         </Card>
      </div>
    );
  }
}

export default Widget;
