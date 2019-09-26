import React, { useState } from 'react'
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Button from '@material-ui/core/button'

import arrayMove from 'array-move'
import PaletteFormNav from '../PaletteFormNav/PaletteFormNav'
import ColorPickerForm from '../ColorPickerForm'
import seedcolors from '../../seedColors'
import DraggableColorList from '../DraggableColorList'

import useStyles from './NewPaletteFormStyles'


const NewPaletteForm = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(seedcolors[0].colors)

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
    let rand
    let randomColor = allColors[rand]
    let isDuplicateColor = true
    while (isDuplicateColor) {  // Prevent duplicate colors
      let rand = Math.floor(Math.random() * allColors.length)
      randomColor = allColors[rand]
      isDuplicateColor = colors.some(
        // eslint-disable-next-line
        color => color.name === randomColor.name
      )
    }
    //Add random color to colors array
    setColors([...colors, randomColor])
  }

  function savePalette(newPalette) {
    newPalette.id = newPalette.paletteName.toLocaleLowerCase().replace(/ /g, '-')
    newPalette.colors = colors
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
          distance={20}
        // React sortable made a note of click events being swallowed on mousedown. 
        // Distance is used to prevent said bug and nothing more. 
        />
      </main>
    </div >
  );
}

export default NewPaletteForm;