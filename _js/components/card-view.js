'use strict'

import React, {Component} from 'react'
import createFragment from 'react-addons-create-fragment'
import Icon from './icon'
import Hero from './hero'
import Emoji from './emoji'

class CardView extends Component {

  constructor () {
    super()
    this.state = {}
  }

  mapRepoData (repo) {
    return {
      title: repo.name,
      desc: `${repo.description}<br /><small><strong>${repo.stargazers_count}</strong> stars</small>`,
      icon: 'code',
      link: repo.html_url,
      stars: repo.stargazers_count
    }
  }

  filterRepos (repo) {
    return (!repo.fork && repo.stargazers_count > 1)
  }

  sortByStars (prev, next) {
    return next.stars - prev.stars
  }

  addContentNode (nodeList, content) {
    const description = {}

    if (content.desc) {
      description.content = (<Emoji className='emojifiedText' content={content.desc} />)
    }

    const nodes = createFragment(description)

    if (!content.hero) {
      nodeList[content.title] = (
        <section>
          <h4>
            <a href={content.link} >
              <Icon icon={content.icon} /> {content.title}
            </a>
          </h4>
          {nodes}
        </section>
      )
    } else {
      nodeList[content.title] = (
        <Hero src={content.hero} />
      )
    }
  }

  render () {
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
