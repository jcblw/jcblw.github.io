'use strict'

const React = require('react')
const marrow = require('marrow')
const SiteView = require('./components/site')
const dispatcher = require('./dispatcher')
const hero = require('./hero')
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
      hero.loadAttribute('data-hero')
    },

    onNavigation: function(eventName, current) {
      hero.loadAttribute('data-hero')
      this.options.currentPage = current.page
      this.options.currentIndex = current.index
      this.render();
    },

    render: function() {
      this.view = React.render(
        <SiteView
          pages={this.options.pages}
          currentPage={this.options.currentPage}
          currentIndex={this.options.currentIndex}/>,
        this.container
      )
    }
  }
)
module.exports = new Site()
