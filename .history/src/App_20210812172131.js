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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
var finshedBooks = [];
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [ posts, setPostsData ] = React.useState(GridJsonData.PostsData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue == 0){
      setPostsData(GridJsonData.PostsData);
    }else{
      setPostsData(finshedBooks);
    }
  };

  const handleFinished=(card) => {  
    if(card.finished == "false"){  
        card.finished = "true";
        let copy = []
        copy.push(card);
        copy.push(...finshedBooks);
        finshedBooks.length = 0;
        Array.prototype.push.apply(finshedBooks, copy); 

        let filtered = [];
        filtered = GridJsonData.PostsData.filter(el => el != card )
        GridJsonData.PostsData.length = 0;
        Array.prototype.push.apply(GridJsonData.PostsData, filtered);
        setPostsData(filtered);
    }else if(card.finished == "true"){
        let filtered = [];
        filtered = finshedBooks.filter(el => el != card )
        finshedBooks.length = 0;
        Array.prototype.push.apply(finshedBooks, filtered);

        card.finished = "false"
        let copy = []
        copy.push(card);
        copy.push(...GridJsonData.PostsData);
        GridJsonData.PostsData.length = 0;
        Array.prototype.push.apply(GridJsonData.PostsData, copy); 
        setPostsData(filtered);
    }
  }
  return (
    <div className={classes.root}>
       <ThemeProvider theme={BaseTheme}>
          <Container maxWidth="fixed">
            <Grid container  className = {classes.root} align = "center" justify = "center" alignItems = "center"  >
                <Grid item xs = {2} sm = {2} md = {2}>
                </Grid>
                <Grid item xs = {12} sm = {4} md = {6}>
                <AppHeader />
                <header className="app-header-title">My Library</header>
                <Paper position="static" className="paper-style">
                  <Tabs value={value} indicatorColor="primary" onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Currently Reading" {...a11yProps(0)}/>
                    <Tab label="Finished" {...a11yProps(1)} />
                  </Tabs>
                </Paper>
                <TabPanel value={value} index={0}>
                  <div className="app-card-list" id="aper-style">
                    {Object.keys(posts).map(key => <Card key={key} index={key} details={posts[key]} card={posts[key]} handleFinished={handleFinished} />)}
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="app-card-list" id="app-card-list">
                    {Object.keys(finshedBooks).map(key => <Card key={key} index={key} details={posts[key]} card={posts[key]} handleFinished={handleFinished} />)}
                  </div>
                </TabPanel>
                </Grid>
                <Grid item xs = {2} sm = {2} md = {2}>          
                </Grid>
              </Grid>`  
          </Container>
          <AppBottom /> 
    </ThemeProvider>
  </div>
  );
}

export default App;
