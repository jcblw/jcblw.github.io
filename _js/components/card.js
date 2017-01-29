'use strict'

import React, {Component} from 'react'
import createFragment from 'react-addons-create-fragment'
import CardView from './card-view'

class Card extends Component {

  constructor () {
    super()
    this.state = {}
  }

  getCardViewPosition (index, current) {
    if (index < current) {
      return 'card-before'
    }
    if (index > current) {
      return 'card-after'
    }
    return 'card-active'
  }

  addCardView (nodeList, page, id) {
    const isCurrent = (id === this.props.current)
    const position = this.getCardViewPosition(page.index, this.props.index)

    nodeList[id] = (<CardView key={id} page={page} current={isCurrent} className={position} />)
  }

  render () {
    const nodeList = {}
    let index = 0

    for (let page in this.props.pages) {
      this.props.pages[page].index = index
      this.addCardView(nodeList, this.props.pages[page], page)
      index += 1
    }

    const nodes = createFragment(nodeList)

    return (
      <article className='card card-main round-borders'>
        {nodes}
      </article>
    )
  }
}

export default Card
