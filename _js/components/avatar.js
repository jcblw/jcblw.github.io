'use strict'

const React = require('react')

module.exports = class Avatar extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <img className={'avatar ' + this.props.className} src={this.props.src} />
    )
  }
}
