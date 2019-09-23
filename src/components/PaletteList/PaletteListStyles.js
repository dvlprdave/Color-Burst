import styled from 'styled-components'
import bg from '../../Images/bg.svg'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background-color: #0f1918;
  background-image: url(${bg});
  overflow: auto;
  /* background by SVGBackgrounds.com  */
`
export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;

  ${({ theme }) => theme.xl`
    width: 80%;
  `}

  ${({ theme }) => theme.md`
    width: 75%;
  `}
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  h1 {
    font-size: 2rem;

    ${({ theme }) => theme.sm`
    font-size: 1.7rem;
  `}

  }
`

export const Palettes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 1.5rem;
  width: 100%;

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-out;
  }

  ${({ theme }) => theme.md`
  grid-template-columns: repeat(2, 50%);
  `}

  ${({ theme }) => theme.xs`
  grid-template-columns: repeat(1, 100%);
  grid-gap: 1.2rem;
  `}
`