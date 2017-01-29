'use strict'

import React, {Component} from 'react'
import SiteStore from '../stores/SiteStore'
import Nav from './nav'
import Card from './card'

class SiteView extends Component {

  constructor () {
    super()
    this.state = SiteStore.getAllPages()
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount () {
    SiteStore.addChangeListener(this._onChange)
  }

  componentWillUnmount () {
    SiteStore.removeChangeListener()
  }

  render () {
    return (
      <div className='content'>
        <Nav pages={this.state.pages} current={this.state.currentPage} />
        <Card pages={this.state.pages} current={this.state.currentPage} index={this.state.currentIndex} />
      </div>
    )
  }

  _onChange () {
    this.setState(SiteStore.getAllPages())
  }
}

export default SiteView
