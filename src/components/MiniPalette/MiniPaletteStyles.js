import styled, { css } from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'

export const MiniColorStyles = css`
  display: inline-block;
  position: relative;
  height: 25%;
  width: 20%;
  margin: 0 auto;
  margin-bottom: -3.5px;
`

export const Main = styled.div`
  position: relative;
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  padding: 0.5rem;
  cursor: pointer;

   &:hover svg {
     opacity: 1;
   }
`


export const Colors = styled.div`
  width: 100%;
  height: 150px;
  background-color: #dae1e4;
  border-radius: 5px;
  overflow: hidden;
`

export const Title = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
`

export const Emoji = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;
`

export const StyledDeleteIcon = styled(DeleteIcon)`
  color: white;
  background-color: #eb3d30;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 10px;
  z-index: 100;
  opacity: 0;
`