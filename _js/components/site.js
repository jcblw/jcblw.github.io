'use strict'

import React, {Component} from 'react'
import Nav from './nav'
import Card from './card'

class SiteView extends Component {
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

export default SiteView
