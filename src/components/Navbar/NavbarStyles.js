import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6vh;  
`

export const Logo = styled.div`
  margin-right: 15px;
  padding: 0 13px;
  font-size: 22px;
  background-color: #eceff1;
  font-family: Roboto;
  height: 100%;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
  }
`

export const SliderWrapper = styled.div`
  width: 340px;
  margin: 0 10px;
  display: inline-block;

  ${({ theme }) => theme.sm`
    width: 150px;
  `}

  .rc-slider-track {
    background-color: transparent;
  }
  .rc-slider-rail {
    height: 8px;
  }
  .rc-slider-handle,
  .rc-slider-handle:active,
  .rc-slider-handle:focus,
  .rc-slider-handle:hover {
    background-color: green;
    outline: none;
    border: 2px solid green;
    box-shadow: none;
    width: 13px;
    height: 13px;
    margin-left: -7px;
    margin-top: -3px;
  }
`

export const SelectContainer = styled.div`
  margin: 0 1rem 0 auto;
`