import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background: blue;
`
export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  background-color: blue;

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
`
export const Palettes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 1.5rem;
  width: 100%;

  ${({ theme }) => theme.md`
  grid-template-columns: repeat(2, 50%);
  `}

  ${({ theme }) => theme.xs`
  grid-template-columns: repeat(1, 100%);
  grid-gap: 1.2rem;
  `}
`