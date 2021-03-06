import styled, { css } from 'styled-components'
// import { chroma } from 'chroma-js';

export const DraggableWrapper = styled.div`
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

  ${({ theme }) => theme.lg`
    width: 25%;
    height: 20%;
  `}

  ${({ theme }) => theme.md`
    width: 50%;
    height: 10%;
  `}

  ${({ theme }) => theme.sm`
    width: 100%;
    height: 5%;
  `}
`

export const BoxContent = styled.div`
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

  ${({ text }) => text && css`
      color: white;
  `}

  svg {
    transition: all 0.3s ease-in-out;
  }
`
  // color: ${props => chroma(props.color).luminance() <= 0.8
  //   ? 'rgba(255, 255, 255, 0.8)'
  //   : 'rgba(0, 0, 0, 0.6)'};