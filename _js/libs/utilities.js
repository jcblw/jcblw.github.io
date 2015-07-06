'use strict'

function makeArray(arr) {
  return Array.prototype.slice.call(arr, 0)
}

export {makeArray}
