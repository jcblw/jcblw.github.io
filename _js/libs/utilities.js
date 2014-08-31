module.exports = {
  makeArray: function( arrayLike ) {
    return Array.prototype.slice.call( arrayLike, 0 );
  }
};