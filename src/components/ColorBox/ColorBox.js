import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
// import './ColorBox.css'

import { MainColorBox, CopyOverlay, CopyMessage, BoxContent, CopyBtn, SeeMoreBtn } from './ColorBoxStyles'

class ColorBox extends Component {
  state = {
    copied: false
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1300);
    })
  }

  render() {
    const { background, name, moreUrl, showLink } = this.props
    const { copied } = this.state
    // Dynamic text color based on lumincance 
    const isDarkColor = chroma(background).luminance() <= 0.08
    const isLightColor = chroma(background).luminance() >= 0.7
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <MainColorBox style={{ background }}>
          <CopyOverlay show={copied} style={{ background }} />
          <CopyMessage show={copied}>
            <h1>Copied!</h1>
            <p text={isLightColor}>{background}</p>
          </CopyMessage>
          <div className='copy-container'>
            <BoxContent>
              <span text={isDarkColor}>{name}</span>
            </BoxContent>
            <CopyBtn text={isLightColor}>Copy</CopyBtn>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <SeeMoreBtn text={isLightColor}>MORE</SeeMoreBtn>
            </Link>
          )}
        </MainColorBox>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;