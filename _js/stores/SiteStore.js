'use strict'

import SiteDispatcher from '../dispatchers/SiteDispatcher'
import SiteConstants from '../constants/SiteConstants'
let _pages = {}
// there should only be one of these
let changeListener = function () { }

function navigate (current) {
  _pages.currentPage = current.page
  _pages.currentIndex = current.index
  changeListener() // fire off change
}

const SiteStore = {
  getAllPages () {
    return _pages
  },

  setPages (pages) {
    _pages = pages
  },

  addChangeListener (fn) {
    changeListener = fn
  },

  removeChangeListener () {
    changeListener = function () {}
  }
}

SiteDispatcher.register((action) => {
  const {actionType} = action

  if (actionType === SiteConstants.SITE_NAVIGATE) {
    navigate(action.current)
  }
})

export default SiteStore
