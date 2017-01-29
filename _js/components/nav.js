'use strict'

import React, {Component} from 'react'
import createFragment from 'react-addons-create-fragment'
import Icon from './icon'
import Avatar from './avatar'
import {makeArray} from '../libs/utilities'
import SiteActions from '../actions/SiteActions'

class Nav extends Component {

  constructor () {
    super()
    this.state = {
      pressed: null
    }
  }

  handleClick () {
    const args = makeArray(arguments)
    SiteActions.navigate.apply(SiteActions, args)
    this.setState({
      pressed: null
    })
  }

  handlePress (id) {
    this.setState({
      pressed: id
    })
  }

  addNavItem (nodeList, page, id) {
    const pressed = this.state.pressed === id
    const current = this.props.current === id
    const meta = {
      page: id,
      index: page.index
    }
    let icon

    if (page.image) {
      icon = (<Avatar key={page.image} src={page.image} className='circle' />)
    } else {
      icon = (<Icon key={page.icon} icon={page.icon} />)
    }
    nodeList[id] = (
      <div
        key={id}
        className={`nav-item circle avatar avatar-small level-3 ${pressed ? 'is-pressed' : ''} ${current ? ' active' : ''}`}
        onTouchStart={this.handlePress.bind(this, id)}
        onMouseDown={this.handlePress.bind(this, id)}
        onTouchEnd={this.handleClick.bind(this, meta)}
        onMouseUp={this.handleClick.bind(this, meta)}>
        {icon}
      </div>
    )
  }

  render () {
    const nodeList = {}

    for (let page in this.props.pages) {
      this.addNavItem(nodeList, this.props.pages[ page ], page)
    }

    const nodes = createFragment(nodeList)

    return (
      <nav className='nav'>
        {nodes}
      </nav>
    )
  }
}

export default Nav
