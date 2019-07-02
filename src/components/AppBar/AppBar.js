import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
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
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function SearchAppBar(props) {
    const classes = useStyles();
    const handleChange = (e) =>{
        props.toggleSwitch(e);
    }
    const getCurrent = () => {
        props.getC();
    }
    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
                Restro
            </Typography>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="Open drawer" onClick={() => getCurrent()}
            >
            <i className="material-icons">place</i>
            </IconButton>
            <Typography></Typography>
            <div className={classes.search} id="search">
                <div className={classes.searchIcon}>
            
                </div>
                <Switch
        
            onChange={() => handleChange('checkedA')}
            value="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
                
            </div>
            </Toolbar>
        </AppBar>
        </div>
  );
}