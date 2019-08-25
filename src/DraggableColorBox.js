import React from 'react'
import styled from 'styled-components';

const DraggableWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25%;
  width: 20%;
  margin: 0 auto;
  margin-bottom: -3.5px;
`

const DraggableColorBox = (props) => {
  return <DraggableWrapper style={{ backgroundColor: props.color }}>{props.color}</DraggableWrapper>
}

export default DraggableColorBox;