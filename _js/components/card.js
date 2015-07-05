'use strict'

const React = require('react/addons')
const CardView = require('./card-view')

module.exports = class Card extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  getCardViewPosition(index, current) {
    if ( index < current ) {
      return 'card-before'
    }
    if ( index > current ) {
      return 'card-after'
    }
    return 'card-active'
  }

  addCardView(nodeList, page, id) {

    const isCurrent = (id === this.props.current)
    const position = this.getCardViewPosition(page.index, this.props.index)

    nodeList[id] = (<CardView key={id} page={page} current={isCurrent} className={position}></CardView>)
  }

  render() {

    const nodeList = {}
    let index = 0

    for (let page in this.props.pages) {
      this.props.pages[page].index = index;
      this.addCardView(nodeList, this.props.pages[page], page)
      index += 1
    }

    const nodes = React.addons.createFragment(nodeList)

    return (
      <article className="card card-main round-borders">
        {nodes}
      </article>
    )
  }

}
