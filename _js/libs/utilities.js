'use strict'

module.exports = {
  makeArray(arr) {
    return Array.prototype.slice.call(arr, 0)
  }
}
