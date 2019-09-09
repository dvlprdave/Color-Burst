import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Button from '@material-ui/core/button'
import { ChromePicker } from 'react-color'

function ColorPickerForm({ colors, paletteIsFull, addNewColor }) {

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
        color={currentColor}
        onChangeComplete={updateCurrentColor}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          // value={colorName}
          value={newColorName}
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