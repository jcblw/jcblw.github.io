'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import SiteView from './components/site'
import SiteStore from './stores/SiteStore'

const start = (pages, container) => {

  SiteStore.setPages(pages)

  ReactDOM.render(
    <SiteView/>,
    container
  )
}
export default start
