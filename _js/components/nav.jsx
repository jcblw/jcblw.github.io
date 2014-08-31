
/**
 * @jsx React.DOM
 */


var 
React = require( 'react' ),
Icon = require( './icon' ),
Avatar = require( './avatar' ),
site = require( '../site' );

module.exports = React.createClass({
  handleClick: function( e ) {
    console.log( arguments );
    //site.emit( 'nav:click', e );
  },
  addNavItem: function( nodeList, page, id ) {
    var icon;
    if ( page.image ) {
      icon = ( <Avatar src={page.image} className="circle"></Avatar> );
    }
    else {
      icon = ( <Icon icon={page.icon}></Icon> );
    }
    nodeList[ id ] = (
        <div className="nav-item circle avatar avatar-small level-3" onClick={this.handleClick.bind( this, id )}>
          { icon }
        </div>
    );
  },
  render: function() {

    var nodeList = {};

    for ( var page in this.props.pages ) {
      this.addNavItem( nodeList, this.props.pages[ page ], page );
    }

    return ( 
      <nav className="nav">
        { nodeList }
      </nav>
    );
  }
});

require( '../../_less/components/nav.less'); // load styles