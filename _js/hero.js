'use strict'

import {makeArray} from './libs/utilities'

function loadImage( url, callback ) {
  const image = new Image()
  function onLoaded() {
    callback(null, image)
  }
  image.onload = onLoaded
  image.onerror = callback
  image.src = url
}

function loadAndAppend(attr) {
  return function(el) {
    const url = el.getAttribute(attr)
    loadImage(url, function(err, img) {
      if (err) {
        return console.error(err)
      }
      el.style.backgroundImage = `url(${img.src} )`
      el.style.minHeight = `${img.naturalHeight / 2}px`
      el.classList.add('hero-image')
    })
  }
}

function loadAttribute(attr) {
  const heros = document.querySelectorAll(`[${attr}]`);
  makeArray(heros).forEach(loadAndAppend(attr));
}

export {loadAttribute, loadAndAppend, loadImage}
