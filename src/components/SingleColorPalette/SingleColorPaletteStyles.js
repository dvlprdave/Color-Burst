import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { MainColorBox } from '../ColorBox/ColorBoxStyles'


export const PaletteWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`
export const GoBackBox = styled(MainColorBox)`
  background-color: black;
  position: relative;
`
export const GoBackBtn = styled(Link)`
  width: 100px;
  height: 30px;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -15px;
  text-align: center;
  text-decoration: none;
  outline: none;
  background: rgba(255,255,255, 0.3);
  font-size: 1rem;
  line-height: 30px;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`