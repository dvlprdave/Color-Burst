import React from 'react'
import styled from 'styled-components'

import { MiniColorStyles, Main, Delete, Colors, Title, Emoji, StyledDeleteIcon } from './MiniPaletteStyles'

const MiniColor = styled.div`${MiniColorStyles}`

const MiniPalette = ({ paletteName, emoji, colors, handleClick }) => {
  const miniColorBoxes = colors.map(color => (
    <MiniColor
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ))
  return (
    <Main onClick={handleClick}>
      <Delete>
        {/* Inline style used to override default Material transition  */}
        <StyledDeleteIcon style={{ transition: 'all 0.3s ease-in-out' }} />
      </Delete>
      <Colors>{miniColorBoxes}</Colors>
      <Title>{paletteName} <Emoji>{emoji}</Emoji></Title>
    </Main>
  )
}

export default MiniPalette