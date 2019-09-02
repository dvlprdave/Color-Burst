import React from 'react'
import styled from 'styled-components'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const DraggableWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25%;
  width: 20%;
  margin: 0 auto;
  margin-bottom: -3.5px;
  
  /* svg is the DeleteOutlinedIcon */
  &:hover svg{
    color: white;
    transform: scale(1.3)
  }
`

const BoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
  text-transform: uppercase;

  svg {
    transition: all 0.3s ease-in-out;
  }
`

const DraggableColorBox = (props) => {
  return (
    <DraggableWrapper
      style={{ backgroundColor: props.color }}
    >
      <BoxContent>
        <span>{props.name}</span>
        <DeleteOutlinedIcon />
      </BoxContent>
    </DraggableWrapper>
  )
}

export default DraggableColorBox;