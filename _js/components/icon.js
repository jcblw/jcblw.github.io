'use strict'

import React, {Component} from 'react'

class Icon extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <i className={`icon-${this.props.icon} ${this.props.className}`}></i>
    )
  }
}

export default Icon
