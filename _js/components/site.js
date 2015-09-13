'use strict'

import React from 'react'
import Nav from './nav'
import Card from './card'

const SiteView = (props) => {
  return (
    <div className="content">
      <Nav pages={props.pages} current={props.currentPage}></Nav>
      <Card pages={props.pages} current={props.currentPage} index={props.currentIndex}></Card>
    </div>
  )
}

export default SiteView
