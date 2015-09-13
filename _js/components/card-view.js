'use strict'

import React, {Component} from 'react'
import createFragment from 'react-addons-create-fragment'
import Icon from './icon'

class CardView extends Component {

  constructor() {
    super()
    this.state = {}
  }

  mapRepoData(repo) {
    return {
      title: repo.name,
      desc: `${repo.description}<br /><small>${repo.stargazers_count}stars</small>`,
      icon: 'code',
      link: repo.html_url,
      stars: repo.stargazers_count
    }
  }

  filterRepos(repo) {
    return (!repo.fork && repo.stargazers_count > 1)
  }

  sortByStars(prev, next) {
    return next.stars - prev.stars
  }

  addContentNode(nodeList, content) {
    const description = {}

    if ( content.desc ) {
      description.content = (<div dangerouslySetInnerHTML={{__html: content.desc}} />)
    }

    const nodes = createFragment(description)

    nodeList[content.title] = (
      <section data-hero={content.hero}>
        <h4>
          <a href={content.link} >
            <Icon icon={content.icon}></Icon> {content.title}
          </a>
        </h4>
        {nodes}
      </section>
    )
  }

  render() {
    const page = this.props.page
    const nodeList = {}

    if (page.repos) { // special handling of github data
      page.contents = page.repos
        .filter(this.filterRepos)
        .map(this.mapRepoData)
        .sort(this.sortByStars)
    }

    if (!page.contents) { // when working locally
      page.contents = []
    }

    page.contents
      .forEach(this.addContentNode.bind(this, nodeList))

    const nodes = createFragment(nodeList)

    return (
      <section className={`card-content ${this.props.className}`}>
        <h2>{page.title}</h2>
        {nodes}
      </section>
    )
  }
}

export default CardView
