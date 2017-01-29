'use strict'

import React, {Component} from 'react'
import {loadImage} from '../libs/utilities'

class Hero extends Component {

  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    if (this.state.backgroundImage) {
      return
    }
    loadImage(this.props.src, (err, img) => {
      if (err) {
        return
      }
      this.setState({
        backgroundImage: `url(${img.src} )`,
        minHeight: `${img.naturalHeight / 2}px`
      })
    })
  }

  render () {
    return (
      <section className='hero-image' style={this.state} />
    )
  }
}

export default Hero
