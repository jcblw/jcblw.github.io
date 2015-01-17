var 
React = require( 'react' ),
Marrow = require( 'marrow' ),
SiteView = require( './components/site.jsx'),
dispatcher = require( './dispatcher' );

var Site = Marrow(function Site(){

  dispatcher.on( 'navigation', this.onNavigation.bind( this ) );
},{
  start: function( options, container ) {

    this.options = options;
    this.options.currentIndex = 0;
    this.view = React.renderComponent( SiteView( options ), container );
  },
  onNavigation: function( eventName, current ) {

    this.options.currentPage = current.page;
    this.options.currentIndex = current.index;
    this.view.setProps( this.options );
  }
});

module.exports = new Site();
