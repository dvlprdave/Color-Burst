import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Button from '@material-ui/core/button'

import PaletteMetaForm from '../PaletteMetaForm'
import useStyles from './PaletteFormNavStyles'


function PaletteFormNav({ open, handleDrawerOpen, savePalette, palettes }) {
  const classes = useStyles();
  const [formShowing, setFormShowing] = useState(false)

  function showForm() {
    setFormShowing(true)
  }

  function hideForm() {
    setFormShowing(false)
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
            <AddToPhotosIcon />
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
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && <PaletteMetaForm
        palettes={palettes}
        savePalette={savePalette}
        hideForm={hideForm}
      />}
    </div>
  )
}

export default PaletteFormNav