import React from 'react';
import './App.css';
import Card from './stories/components/organisms/Card'
import AppHeader from './stories/components/molecules/AppHeader'
import AppBottom from './stories/components/molecules/AppBottom';
import * as GridJsonData from './../src/GridJsonData';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { ThemeProvider } from "@material-ui/core/styles";
import BaseTheme from '../src/stories/theme/theme';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
function App() {
  const classes = useStyles(); 
  return (
    <div className={classes.root}>
       <ThemeProvider theme={BaseTheme}>
         
       </ThemeProvider>
  </div>
  );
}

export default App;
