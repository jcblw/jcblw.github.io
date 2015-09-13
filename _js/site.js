'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import marrow from 'marrow'
import SiteView from './components/site'
import dispatcher from './dispatcher'
import {loadAttribute} from './hero'

const Site = marrow(
  function Site(){
    dispatcher.on('navigation', this.onNavigation.bind(this))
  },
  {
    start: function(options, container) {
      this.options = options
      this.options.currentIndex = 0
      this.container = container
      this.render()
      loadAttribute('data-hero')
    },

    onNavigation: function(eventName, current) {
      this.options.currentPage = current.page
      this.options.currentIndex = current.index
      this.render();
    },

    render: function() {
      this.view = ReactDOM.render(
        <SiteView
          pages={this.options.pages}
          currentPage={this.options.currentPage}
          currentIndex={this.options.currentIndex}/>,
        this.container
      )
    }
  }
)
const site = new Site()
export default site
