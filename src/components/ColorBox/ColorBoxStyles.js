import styled, { css } from 'styled-components'

export const CopyBtn = styled.button`
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
  opacity: 0;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  ${({ text }) => text && css`
    color: black;
  `}
`

export const MainColorBox = styled.div`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  margin-bottom: -3.5px;
  display: inline-block;
  position: relative;

  &:hover ${CopyBtn} {
    opacity: 1;
    transition: 0.5s;
  }

  ${({ theme }) => theme.lg`
    width: 25%;
    height: 20%
  `}

  ${({ theme }) => theme.md`
    width: 50%;
    height: 10%
  `}

  ${({ theme }) => theme.xs`
    width: 100%;
    height: 5%;
  `}
`

export const CopyOverlay = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 0;
  transition: transform 0.6s ease-in-out;
  transform: scale(0.1);

  ${({ show }) => show && css`
    opacity: 1;
    z-index: 10;
    transform: scale(50);
    position: fixed;
    top: 0px;
    left: 0px;
  `}
`

export const CopyMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 4rem;
  color: white;
  opacity: 0;
  transform: scale(0.1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  ${({ show }) => show && css`
    opacity: 1;
    transform: scale(1);
    z-index: 25;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.3s;
  `}

  h1 {
    width: 100%;
    margin-bottom: 0;
    padding: 1rem;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 1px 2px black;
    background: rgba(255,255,255, 0.20);

    ${({ theme }) => theme.xs`
    font-size: 5rem;
  `}
  }

  p {
    font-size: 2rem;
    font-weight: 100;
    ${({ text }) => text && css`
      color: black;
    `}
  }
`

export const BoxContent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
  font-size: 12px;
  color: black;
  letter-spacing: 1px;
  text-transform: uppercase;

  span {
    ${({ text }) => text && css`
      color: white;
    `}
  }
`

export const SeeMoreBtn = styled.span`
  width: 60px;
  height: 30px;
  color: white;
  background: rgba(255,255,255, 0.3);
  border: none;
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: center;
  line-height: 30px;
  text-transform: uppercase;

  ${({ text }) => text && css`
    color: black;
  `}
`