'use strict'

const React = require('react')

module.exports = class Icon extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <i className={`icon-${this.props.icon} ${this.props.className}`}></i>
    )
  }
}
