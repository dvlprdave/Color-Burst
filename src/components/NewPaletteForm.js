import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/button'
// color picker
import { ChromePicker } from 'react-color'
import DraggableColorBox from '../DraggableColorBox';


const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
}));

const NewPaletteForm = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [currentColor, setColor] = useState("teal");
  const [colors, setColors] = useState([])
  const [newInputNames, setInputNames] = useState({
    colorName: '',
    paletteName: ''
  })

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    )

    ValidatorForm.addValidationRule("isColorUnique", value =>
      colors.every(({ color }) => color !== currentColor)
    )

    //  FIXME:  ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
    //   props.palettes.every(
    //     ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
    //   )
    // )
  })

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function updateCurrentColor(newColor) {
    setColor(newColor.hex);
  }
  const { colorName, paletteName } = newInputNames

  function addNewColor() {
    const newColor = {
      color: currentColor,
      name: colorName
    }
    //FIXME: 
    setInputNames({ colorName: '' })
    setColors([...colors, newColor])
  }

  function handleChange(event) {
    setInputNames({
      ...newInputNames,
      [event.target.name]: event.target.value
    })
  }

  function savePalette() {
    let newName = paletteName
    const newPalette = {
      paletteName: newName,
      id: newName.toLocaleLowerCase().replace(/ /g, '-'),
      colors: colors
    }
    props.savePalette(newPalette)
    props.history.push('/')
  }

  function removeColor(colorName) {
    setColors(colors.filter(color => color.name !== colorName))
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
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={savePalette}>
            <TextValidator
              label='Palette Name'
              name='paletteName'
              value={paletteName}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['Please Enter Palette Name']}
            />
            <Button
              varient='contained'
              color='secondary'
              type='submit'
            >
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
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
        <Typography variant='h4'>Design your palette</Typography>
        <div>
          <Button
            variant='contained'
            color='secondary'
          >Clear Palette</Button>
          <Button
            variant='contained'
            color='primary'
          >Random Color</Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={colorName}
            name='colorName'
            onChange={handleChange}
            validators={[
              'required',
              'isColorNameUnique',
              'isColorUnique'
            ]}
            errorMessages={[
              'Enter a color name',
              'Color name must be unique',
              'Color is already used'
            ]}
          />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            style={{ backgroundColor: currentColor }}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {colors.map(color => (
          <DraggableColorBox
            key={color.name}
            color={color.color}
            name={color.name}
            handleDelete={() => removeColor(color.name)}
          />
        ))}
      </main>
    </div >
  );
}

export default NewPaletteForm;