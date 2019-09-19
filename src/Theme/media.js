import { css } from 'styled-components'

const ScreenSizes = {
  xs: 575.98,
  sm: 767.98,
  md: 991.98,
  lg: 1199.98
}

const media = Object.keys(ScreenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
     @media (max-width: ${ScreenSizes[label]}px) {
        ${css(...args)};
     }
  `
  return acc
}, {})

export default media