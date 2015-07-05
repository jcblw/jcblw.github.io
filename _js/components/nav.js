'use strict'

const React = require('react/addons')
const Icon = require('./icon')
const Avatar = require('./avatar')
const _ = require('../libs/utilities')
const dispatcher = require('../dispatcher')

module.exports = class Nav extends React.Component {

  constructor() {
    super()
    this.state = {
      pressed : null
    }
  }

  handleClick() {
    const args = _.makeArray(arguments)
    args.unshift('navigation:click')
    dispatcher.emit.apply(dispatcher, args)
    this.setState({
      pressed: null
    })
  }

  handlePress( id ) {
    this.setState({
      pressed: id
    })
  }

  addNavItem(nodeList, page, id) {

    const pressed = (this.state.pressed === id) ? true : false
    const current = (this.props.current === id) ? true : false
    const meta = {
      page: id,
      index: page.index
    }
    let icon

    if (page.image) {
      icon = (<Avatar key={page.image} src={page.image} className="circle"></Avatar>)
    }
    else {
      icon = (<Icon key={page.icon} icon={page.icon}></Icon>)
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

  render() {
    const nodeList = {}

    for (let page in this.props.pages) {
      this.addNavItem(nodeList, this.props.pages[ page ], page)
    }

    const nodes = React.addons.createFragment(nodeList)

    return (
      <nav className="nav">
        {nodes}
      </nav>
    )
  }
}
