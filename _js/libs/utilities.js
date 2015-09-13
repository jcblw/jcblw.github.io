'use strict'

function makeArray(arr) {
  return Array.prototype.slice.call(arr, 0)
}

function loadImage( url, callback ) {
  const image = new Image()
  function onLoaded() {
    callback(null, image)
  }
  image.onload = onLoaded
  image.onerror = callback
  image.src = url
}

export {makeArray, loadImage}
