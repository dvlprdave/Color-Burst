import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  position: relative;
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  padding: 0.5rem;

   &:hover {
    cursor: pointer;
   }
`

const Colors = styled.div`
  width: 100%;
  height: 150px;
  background-color: #dae1e4;
  border-radius: 5px;
  overflow: hidden;
`

const Title = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
`

const Emoji = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;
`

const Minicolor = styled.div`
  display: inline-block;
  position: relative;
  height: 25%;
  width: 20%;
  margin: 0 auto;
  margin-bottom: -3.5px;
`

const MiniPalette = ({ paletteName, emoji, colors }) => {
  const miniColorBoxes = colors.map(color => (
    <Minicolor
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ))
  return (
    <Main>
      <Colors>{miniColorBoxes}</Colors>
      <Title>{paletteName} <Emoji>{emoji}</Emoji></Title>
    </Main>
  )
}

export default MiniPalette