'use strict'

const _ = require('./libs/utilities')

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

module.exports.loadAttribute = function (attr) {
  const heros = document.querySelectorAll(`[${attr}]`);
  _.makeArray(heros)
    .forEach(loadAndAppend(attr));
}
