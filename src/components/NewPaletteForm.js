import React, { useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Button from '@material-ui/core/button'
import DraggableColorList from '../DraggableColorList'
import arrayMove from 'array-move'
import PaletteFormNav from './PaletteFormNav'
import ColorPickerForm from './ColorPickerForm'

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    width: '100%'
  },
  button: {
    width: '50%'
  },
}));

const NewPaletteForm = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  // const [currentColor, setColor] = useState("teal")
  const [colors, setColors] = useState(props.palettes[0].colors)
  // const [newColorName, setNewColorName] = useState('')

  const { palettes } = props

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function addNewColor(newColor) {
    setColors([...colors, newColor])
  }

  function clearColors() {
    setColors([])
  }

  function addRandomColor() {
    // Single array with all colors from existing palettes
    const allColors = props.palettes.map(p => p.colors).flat()
    //Get random color from array
    let rand = Math.floor(Math.random() * allColors.length)
    const randomColor = allColors[rand]
    //Add random color to colors array
    setColors([...colors, randomColor])
  }

  function savePalette(newPaletteName) {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLocaleLowerCase().replace(/ /g, '-'),
      colors: colors
    }
    props.savePalette(newPalette)
    props.history.push('/') // Newly created palette is saved to home page
  }

  function removeColor(newColorName) {
    setColors(colors.filter(color => color.name !== newColorName))
  }

  function onSortEnd({ oldIndex, newIndex }) {
    const arrangeColors = arrayMove(colors, oldIndex, newIndex)
    setColors(arrangeColors)
  }

  const defaultProps = {
    maxColors: 20,
  }

  const paletteIsFull = colors.length >= defaultProps.maxColors

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
        savePalette={savePalette}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant='h4' gutterBottom>Design your palette</Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              onClick={clearColors}
            >Clear Palette</Button>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              disabled={paletteIsFull}
              onClick={addRandomColor}
            >Random Color</Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis='xy'
          onSortEnd={onSortEnd}
        />
      </main>
    </div >
  );
}

export default NewPaletteForm;