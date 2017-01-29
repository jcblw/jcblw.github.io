'use strict'

import React from 'react'

const Icon = (props) => {
  return (
    <i className={`icon-${props.icon} ${props.className}`} />
  )
}

export default Icon
