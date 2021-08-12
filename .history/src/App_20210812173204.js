import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/core/styles";
import BaseTheme from '../src/stories/theme/theme';
import HomeTemplate from './stories/template/HomeTemplate';

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
         <HomeTemplate />
       </ThemeProvider>
  </div>
  );
}

export default App;
