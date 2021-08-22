import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//import InputBase from '@material-ui/core/InputBase';
//import SearchIcon from '@material-ui/icons/Search';
import './cssfiles/ToolbarMain.css';
import PagesLinks from './PagesLinks.jsx';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 1% 0 3%'
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "#F2F2F7",
    boxShadow: "none",
    minWidth: '900px',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    zIndex: 5,
    position: 'fixed',
    height: '15%',
  },
  logo: {
    marginLeft: '8.5%',
    marginRight: '15vw',
    color: '#97CBD1',
    pointerEvents: 'none',
  },
  links: {
    //marginRight: '10%',
    zIndex: 3,
    //display: 'flex',
  },
  signButton: {
    marginLeft: 'auto',
    color: 'white',
    marginRight: '2%',
    //justifyContent: 'flex-end',

  },
  searchItem: {
    zIndex: 2,
    //display: 'flex',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
      boxShadow: "none",
    },
    margin: "auto",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 0,
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ToolbarMain() {
  const classes = useStyles();
  const auth = false;
  //const [auth, setAuth] = React.useState(true);
  //const [signIn, signInFunc] = React.useState(null); //АВТОРИЗАЦИЯ?
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //const toSignInPage = (event) => {
  //  signInFunc(event.currentTarget);
  //}

  /*const handleChange = (event) => {
    setAuth(event.target.checked);
  };*/ ////////////////////////////////////////////////auth

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /*const handleCloseAndSignIn = () => {
    setAnchorEl(null);
  };

  const handleCloseAndRegister = () => {
    setAnchorEl(null);
  };*/

  const handleClose = () => {
    setAnchorEl(null);
  };


  /*const closeTheSignOrRegister = (status) => {
    setAnchorEl(null);
    switch (status) {
      case 'signin':
        signInFunc('signin');
        break;
      case 'register':
        signInFunc('register');
        break;
      default:
        signInFunc(null);
        break;
    }
  };*/

  /* const toolLinksBag = ["Главная", "Ключевые функции", "We Walk App", "Что нового?"].map(_link => //массив названий Ссылок
     <ToolLink
       key={_link} link={_link}>
     </ToolLink>
   );*/

  return (
    <div className={classes.toolbar}>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
     </FormGroup>*/} {/*LOGIN LOGOUT */}
      <AppBar position="static" className={classes.toolbar}>
        <Toolbar className="ToolbarHeader">
          <div className='Logo'>
            We Walk
          </div>
          <div className={classes.links}>
            <PagesLinks />
          </div>
          {/*<div className={classes.searchItem}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Поиск…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>*/}
          {auth && (
            <div className={classes.signButton}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={open}
                onClose={handleClose} //!!!!!!!!!!!!!!
                className={classes.signButton}
              >
                
                <Link to="/signin" className='AuthButtons'>
                  <MenuItem onClick={handleClose}>Войти</MenuItem>
                </Link> 
                <Link to="/register" className='AuthButtons'>
                  <MenuItem onClick={handleClose}>Регистрация</MenuItem>
                </Link>
                
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
