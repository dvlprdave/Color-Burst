import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/button'
import { ChromePicker } from 'react-color'

const useStyles = makeStyles({
  picker: {
    width: '100% !important',
    marginTop: '2rem'
  },
  addColor: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '2rem'
  },
  colorNameInput: {
    width: '100%',
    height: '70px'
  }
})

function ColorPickerForm({ colors, paletteIsFull, addNewColor }) {
  const classes = useStyles()
  const [currentColor, setColor] = useState("teal")
  const [newColorName, setNewColorName] = useState('')

  useEffect(() => {
    // Validates unique color name
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    )
    // Validates unique color
    ValidatorForm.addValidationRule("isColorUnique", value =>
      colors.every(({ color }) => color !== currentColor)
    )
  })

  function updateCurrentColor(newColor) {
    setColor(newColor.hex);
  }

  function handleChange(event) {
    setNewColorName(event.target.value)
  }

  function handleSubmit() {
    const newColor = {
      color: currentColor,
      name: newColorName
    }
    addNewColor(newColor)
    setNewColorName('')
  }

  return (
    <div>
      <ChromePicker
        className={classes.picker}
        color={currentColor}
        onChangeComplete={updateCurrentColor}
      />
      <ValidatorForm
        onSubmit={handleSubmit}
        instantValidate={false}      // Validation only appears when attempting to re-submit
      >
        <TextValidator
          className={classes.colorNameInput}
          value={newColorName}
          placeholder='Color Name'
          name='colorName'
          onChange={handleChange}
          variant='filled'
          margin='normal'
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
          className={classes.addColor}
          variant='contained'
          type='submit'
          color='primary'
          disabled={paletteIsFull}
          style={{
            backgroundColor: paletteIsFull
              ? 'grey'
              : currentColor
          }}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  )
}

export default ColorPickerForm