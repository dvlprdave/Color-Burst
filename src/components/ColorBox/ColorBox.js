import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom';
import chroma from 'chroma-js'
import './ColorBox.css'

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
        <div className='ColorBox' style={{ background }}>
          <div className={`copy-overlay ${copied && 'show'}`} style={{ background }} />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied!</h1>
            <p className={isLightColor && 'dark-text'}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDarkColor && 'light-text'}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={`see-more ${isLightColor && "dark-text"}`}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;