var 
React = require( 'react' ),
Marrow = require( 'marrow' ),
bound = require( 'bound' ),
SiteView = require( './components/site');

var Site = Marrow(function Site(){

  bound( this, {
    'nav': 'onNavEvent'
  }, this );

},{
  start: function( options, container ) {

    this.view = React.renderComponent( SiteView( options ), container );
  },
  onNavEvent: function( e ) {
    console.log( arguments );
  }
});

module.exports = new Site();