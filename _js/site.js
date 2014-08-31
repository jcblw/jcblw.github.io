var 
React = require( 'react' ),
Marrow = require( 'marrow' ),
bound = require( 'bound' ),
SiteView = require( './components/site');

var Site = Marrow(function Site(){

  this.view = SiteView( {} );
  bound( this, {
    'nav': 'onNavEvent'
  }, this );

},{
  start: function( options, container ) {

    React.renderComponent( this.view, container );
  },
  onNavEvent: function( e ) {

    console.log( arguments );
  }
});

module.exports = new Site();