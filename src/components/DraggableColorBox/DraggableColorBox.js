import React from 'react'
import chroma from 'chroma-js'

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import { SortableElement } from 'react-sortable-hoc'

import { DraggableWrapper, BoxContent } from './DraggableColorBoxStyles'

const DraggableColorBox = SortableElement(props => {
  const { color, name, handleDelete } = props
  const isDarkColor = chroma(color).luminance() <= 0.08

  return (
    <DraggableWrapper
      style={{ backgroundColor: color }}
    >
      <BoxContent text={isDarkColor}>
        <span>{name}</span>
        <DeleteOutlinedIcon onClick={handleDelete} />
      </BoxContent>
    </DraggableWrapper>
  )
})

export default DraggableColorBox;