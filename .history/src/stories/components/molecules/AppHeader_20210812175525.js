import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Code from '../../assets/logo1.jpg'
import Search from '../../assets/search.png'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      height: 216,
      flexGrow: 1,
      maxWidth: 400,
    },
  });
const AppHeader = () => {
    var style = { 
        width: '100%'
    };
    const classes = useStyles(); 
    return (
      <div> 
          <table style={style}>
            <tr>
              <td>
                <img src={Code} className={useStyles.root} width="200" height="100"/>
              </td>
              <td>
                <img src={Search} width="30" height="30"/>
              </td>
              <td>
                 <Button size="large" color="primary">Explore</Button>
              </td>
              <td>
                 <Button size="large" color="primary">My Library</Button> 
              </td>
              <td>
                 <Button size="large" color="primary">Highlights</Button>  
              </td>
              <td>              
              </td>
              <td>
              <Button variant="contained" size="large" color="primary">
                  Upgrade to Premium
                </Button>
              </td>
            </tr>
          </table>
      </div>      
    )
}
export default AppHeader