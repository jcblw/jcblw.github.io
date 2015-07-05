'use strict'

const React = require('react')
const Nav = require('./nav')
const Card = require('./card')

module.exports = class Site extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="content">
        <Nav pages={this.props.pages} current={this.props.currentPage}></Nav>
        <Card pages={this.props.pages} current={this.props.currentPage} index={this.props.currentIndex}></Card>
      </div>
    )
  }
}
