'use strict'

import React from 'react'
import emojify from 'emojify.js'

emojify.setConfig({
  // use githubs CDN
  img_dir: 'https://github.global.ssl.fastly.net/images/icons/emoji/'
})

const Emoji = (props) => {
  const emojifiedText = emojify.replace(props.content)
  return (
    <div className='{props.className}' dangerouslySetInnerHTML={{__html: emojifiedText}} />
  )
}

export default Emoji
