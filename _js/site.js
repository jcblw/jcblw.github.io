var 
React = require( 'react' ),
Marrow = require( 'marrow' ),
bound = require( 'bound' ),
SiteView = require( './components/site'),
dispatcher = require( './dispatcher' );

var Site = Marrow(function Site(){

  dispatcher.on( 'navigation', this.onNavigation.bind( this ) );
},{
  start: function( options, container ) {

    this.options = options;
    this.view = React.renderComponent( SiteView( options ), container );
  },
  onNavigation: function( eventName, page ) {

    this.options.currentPage = page;
    this.view.setProps( this.options );
  }
});

module.exports = new Site();