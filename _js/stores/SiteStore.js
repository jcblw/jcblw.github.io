'use strict'

import SiteDispatcher from '../dispatchers/SiteDispatcher'
import SiteConstants from '../constants/SiteConstants'
let _pages = {}
// there should only be one of these
let changeListener = function(){}

function navigate(current) {
  _pages.currentPage = current.page
  _pages.currentIndex = current.index
  changeListener() // fire off change
}

const SiteStore = {
  getAllPages: function() {
    return _pages
  },

  setPages: function(pages) {
    _pages = pages
  },

  addChangeListener: function(fn) {
    changeListener = fn;
  },

  removeChangeListener: function() {
    changeListener = function() {}
  }
}

SiteDispatcher.register(function(action) {
  const {actionType} = action

  if (actionType === SiteConstants.SITE_NAVIGATE) {
    navigate(action.current);
  }
});

export default SiteStore;
