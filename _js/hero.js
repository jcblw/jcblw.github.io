
function loadImage( url, callback ) {

  var
  image = new Image();

  function onLoaded() {
    callback( null, this );
  }

  image.onload = onLoaded;
  image.onerror = callback;

  image.src = url;
}

function makeArray( arr ) {
  return Array.prototype.slice.call( arr, 0 );
}

function loadAndAppend( attr ) {
  return function( el ) {
    var url = el.getAttribute( attr );
    
    loadImage( url, function( err, img ) {
      if ( err ) return console.error( err );
      el.style.backgroundImage = 'url(' + img.src + ')';
      el.style.minHeight = ( img.naturalHeight / 2 ) + 'px';
      el.classList.add( 'hero-image' );
    } );
  }
}

module.exports.loadAttribute = function ( attr ) {

  var
  heros = document.querySelectorAll( '[' + attr + ']' );
  makeArray( heros ).forEach( loadAndAppend( attr ) );
}
