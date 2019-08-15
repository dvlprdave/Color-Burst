import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom';
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
    const { background, name, moreUrl } = this.props
    const { copied } = this.state
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className='ColorBox' style={{ background }}>
          <div className={`copy-overlay ${copied && 'show'}`} style={{ background }} />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className='see-more'>MORE</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;