import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DisplayallSubcategory from './displayallSubcategory';
import DisplayAllCategories from './DisplayAllCategories';
import AddHomepage from './AddHomepage';


const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ListItems(props) {

const classes = useStyles();

const handleClick=(v)=>{
  props.setComponent(v)
}
    return(
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>


    <ListItem button onClick={()=>handleClick(<AddHomepage setComponent={props.setComponent}/>)}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Home Page" />
    </ListItem>

    <ListItem button onClick={()=>handleClick(<DisplayAllCategories setComponent={props.setComponent}/>)}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItem>

    <ListItem button onClick={()=>handleClick(<DisplayallSubcategory setComponent={props.setComponent}/>)}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Sub Categories" />
    </ListItem>

</div>
)
}