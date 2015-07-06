'use strict'

import React, {Component} from 'react'

class Avatar extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <img className={'avatar ' + this.props.className} src={this.props.src} />
    )
  }
}

export default Avatar
