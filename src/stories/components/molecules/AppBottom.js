import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Code from '../../assets/logo1.jpg'
import Search from '../../assets/search.png'
import Button from '@material-ui/core/Button';

const classes = makeStyles({
    root: {
      height: 216,
      flexGrow: 1,
      maxWidth: 400,
    },
  });
const AppBottom = () => {
    var style = { 
        marginLeft: '12em'
     };
    return (
      <div> 
          <table className="footer">
            <tr>
              <td>
                <img src={Code} style={style} className="app-header" width="200" height="100"/>
              </td>
              <td colSpan="2">               
              </td>             
              <td>  
              <Button size="large" color="primary">Editorial </Button>           
              </td>
              <td>  
              <Button size="large" color="primary">Useful Links </Button>               
              </td>
              <td>  
              <Button size="large" color="primary">Company </Button>               
              </td>
          </tr></table>
      </div>
      
    )
}
export default AppBottom