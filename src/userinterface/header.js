import React, { useState, useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
// import ShoppingBasket from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import { getData, ServerURL, postData, postDataAndImage } from "../FetchNodeService"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button, Divider, Popper } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useDispatch } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import './TRS.css'
import { LocalMall, ShoppingBasket } from '@material-ui/icons';
import "aos/dist/aos.css"
import Aos from 'aos';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [SubCategory, setSubCategory] = useState([])
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [category, setCategory] = useState([])
  const [refresh, setRefresh] = useState('')

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  useEffect(function(){

    Aos.init({
      easing:     'ease',
      duration:   100,
      delay:      0
      });
},[])

  /////////////////////////////////////////////////////
  const fetchcategory = async () => {
    var list = await getData('categories/fetchallcategories')

    setCategory(list.data)
  }
  useEffect(function () {

    fetchcategory()


  }, [])
  const [categoryid, setCategoryId] = useState('')
  const handleMyMenuOpen = (event) => {
    var i = event.currentTarget.value
    setMyAnchorEl(event.currentTarget);
    setCategoryId(i)
    fetchAllSubcategories(i)

  };

  const fetchAllSubcategories = async (id) => {
    var body = {
      "categoryid": id
    }
    var list = await postData('subcategory/fetchallsubcategoriesbyid', body)
    if (list.length > 0) { setSubCategory(list) }



  }

  const fillcategory = () => {
    return category.map((item) => {

      {
        return (
            <li className="nav-item" value={item.categoryid} style={{ padding: '0.75rem 0.7em', color: '#003764', fontWeight: 800 }}>
              <span onClick={() => handleRender(item.categoriesname.replace(/ /g, "-").toLowerCase())}>
                {item.categoriesname}
              </span>
            </li>
        )
      }
    })
  };




  const handleRender = (data) => {
    // alert(data)
    var name = `/${data}`
    props.history.push({ pathname: name })
  }
  /////////////////////
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            {/* <NotificationsIcon /> */}
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const displaPic = () => {
    return SubCategory.map((item) => {
      return (
        <div onClick={() => handleClick(item)}>
          <li style={{ padding: 3 }}
            onClick={() => handleRender(item.subcategoryname.replace(/ /g, "-").toLowerCase())}>
            {item.subcategoryname}</li>
        </div>
      )

    })


  }


  const [styles, useStyless] = useState({ display: 'flex', listStyle: "none", flexDirection: 'column', color: "#886620", fontSize: 16, width: 200, flexWrap: 'wrap', MozColumnCount: 3, WebkitColumnCount: 3, columnCount: 3, cursor: "pointer", textTransform: 'uppercase' })
  const handleClick2 = (event) => {
    props.history.push({ pathname: "/subcategoryimages" }, { categoryid: categoryid })
  }


  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })


  const handleClick = (item) => {

    props.history.push({ pathname: "" }, { subcategoryid: item.subcategoryid })
  }
  const [scrolled, setScrolled] = useState(false)
  const [myAnchorEl, setMyAnchorEl] = React.useState(null);
  const handleClose = () => {

    // setCategoryId(null)
  }


  const submenu = () => {

    return (

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap" }}

        onMouseLeave={() => setMyAnchorEl(null)}
      >
        <ul
          style={styles}
        // style={{display:'flex',listStyle:"none",flexDirection:'column',height:200,color:"#886620",fontSize:15,width:1000,flexWrap:'wrap',MozColumnCount:3,WebkitColumnCount:3,columnCount:3,cursor:"pointer"}}
        >
          {displaPic()}
        </ul>
      </div>


    )
  }
  return (

    <div>
      {scrolled ?
        <div className={classes.grow}>
          <AppBar position="fixed" color="#fff" data-aos='fade-down'>
            <Toolbar>
              <nav>
                <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', }}>
                  <span className="navbar-brand" style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginInline: 30, padding: 10 }} >
                    <img src="/logo.png" alt="TRS - Tyre Recycling Solutions" width="25%" onClick={() => props.history.push('/home')}/>
                  </span>

                  <div id="trs-menu">
                    <ul className="menu">
                      {fillcategory()}
                    </ul>
                  </div>
                </div>
              </nav>
            </Toolbar>
          </AppBar>
        </div>





        :
        <div className={classes.grow}>

          <nav className="navbar">
            <div className="navbar-container">
              <span className="navbar-brand" style={{ float: 'left' }} >
                <img src="/logo.png" alt="TRS - Tyre Recycling Solutions" width="35%" onClick={() => props.history.push('/home')}/>
              </span>
              <div className="contact-links">
                <span className="btn-primary" role="button" aria-pressed="true">
                  USE Tyrexol
                  <sup>TM</sup> POWDER
                </span>
                &nbsp;&nbsp;
                <span onClick={() => props.history.push('/trs-register')} className="btn-primary">
                  BECOME A RECYCLING PARTNER
                </span>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#trs-menu" aria-controls="trs-menu" aria-expanded="false" aria-label="Toggle navigation">
              </button>
              <div className="navbar-collapse" id="trs-menu">
                <ul className="menu">
                  {fillcategory()}
                </ul>
              </div>
            </div>
          </nav>
        </div>



      }




      {/* <IconButton
         edge="start"
         className={classes.menuButton}
         color="inherit"
         aria-label="open drawer"
       >
         <MenuIcon />
         
       </IconButton> */}



      {/* <Divider style={{padding:0.5,marginTop:5,backgroundColor:'lightgray'}}/> */}
      {/* <Divider style={{padding:0.5, marginTop:3,backgroundColor:'lightgray'}}/> */}

      <React.Fragment>
        <Popper id="simple-menu" style={{ background: "white", boxShadow: "-30px 30x 20px rgba(0,0,0,0.3)" }} open={Boolean(myAnchorEl)} anchorEl={myAnchorEl} transition
          anchorOrigin={{
            vertical: 'bottom',

            horizontal: 'center',
          }}>

          {/* id="simple-menu"
anchorEl={myAnchorEl}
keepMounted

open={Boolean(myAnchorEl)}
// onClose={handleMyMenuClose}
getContentAnchorEl={null}
style={{display:'flex',justifyContent:'center',flexDirection:'row',marginLeft:'auto'}}

anchorOrigin={{
  vertical: 'bottom',
  horizontal: 'center',
}}

// transformOrigin={{
//   vertical: 'top',
//   horizontal: 'center',
// }}
// {...props}
> */}

          {/* {({ TransitionProps }) => (
          <Fade {...TransitionProps}> */}
          {myAnchorEl ? submenu() : <></>}
          {/* </Fade>
        )} */}

        </Popper></React.Fragment>
      {renderMobileMenu}
      {renderMenu}
      {/* {showCart()} */}
    </div>
  );
}
