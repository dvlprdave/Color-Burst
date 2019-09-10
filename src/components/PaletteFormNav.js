import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/button'
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    marginRight: '1rem',
  },
  button: {
    margin: '0 0.5rem'
  }
}))

function PaletteFormNav({ open, handleDrawerOpen, savePalette, palettes }) {
  const classes = useStyles();
  const [formShowing, setFormShowing] = useState(false)

  function showForm() {
    setFormShowing(true)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to='/'>
            <Button className={classes.button} variant='contained' color='secondary'>
              Go Back
            </Button>
          </Link>
          <Button className={classes.button} variant="contained" color="primary" onClick={showForm}>
            Open form dialog
          </Button>
        </div>
      </AppBar>
      {formShowing && <PaletteMetaForm palettes={palettes} savePalette={savePalette} />}
    </div>
  )
}

export default PaletteFormNav