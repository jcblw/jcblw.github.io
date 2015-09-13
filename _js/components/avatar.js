'use strict'

import React from 'react'

const Avatar = (props) => {
  return (
    <img className={'avatar ' + props.className} src={props.src} />
  )
}

export default Avatar
