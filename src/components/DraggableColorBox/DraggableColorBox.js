import React from 'react'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import { SortableElement } from 'react-sortable-hoc'

import { DraggableWrapper, BoxContent } from './DraggableColorBoxStyles'

const DraggableColorBox = SortableElement((props) => {
  const { color, name, handleDelete } = props
  return (
    <DraggableWrapper
      style={{ backgroundColor: color }}
    >
      <BoxContent>
        <span>{name}</span>
        <DeleteOutlinedIcon onClick={handleDelete} />
      </BoxContent>
    </DraggableWrapper>
  )
})

export default DraggableColorBox;