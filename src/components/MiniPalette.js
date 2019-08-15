import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

   &:hover {
    cursor: pointer;
   }
`

const Colors = styled.div`
  background-color: grey;
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

const MiniPalette = ({ paletteName, emoji }) => {
  // const { paletteName, emoji } = props
  return (
    <Main>
      <Colors></Colors>
      <Title>{paletteName} <Emoji>{emoji}</Emoji></Title>
    </Main>
  )
}

export default MiniPalette