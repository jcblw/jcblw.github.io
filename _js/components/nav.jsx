
/**
 * @jsx React.DOM
 */


var 
React = require( 'react' ),
Icon = require( './icon' ),
Avatar = require( './avatar' ),
_ = require( '../libs/utilities' ),
dispatcher = require( '../dispatcher' );

module.exports = React.createClass({
  getInitialState: function() {
    return { 
      pressed : null
    };
  },
  handleClick: function( ) {    
    var args = _.makeArray( arguments );
    args.unshift( 'navigation:click' );
    dispatcher.emit.apply( dispatcher, args );
    this.setState( {
      pressed: null 
    } );
  },
  handlePress: function( id ) {
    this.setState( { 
      pressed: id 
    } );
  },
  addNavItem: function( nodeList, page, id ) {
    var 
    icon,
    pressed = ( this.state.pressed === id ) ? true : false,
    current = ( this.props.current === id ) ? true : false,
    meta = {
      page: id,
      index: page.index
    };
    
    if ( page.image ) {
      icon = ( <Avatar src={page.image} className="circle"></Avatar> );
    }
    else {
      icon = ( <Icon icon={page.icon}></Icon> );
    }
    nodeList[ id ] = (
        <div className={
            "nav-item circle avatar avatar-small level-3 " +
            ( pressed ? 'is-pressed' : '' ) +
            ( current ? ' active' : '' ) 
          }
          onTouchStart={this.handlePress.bind( this, id )}
          onMouseDown={this.handlePress.bind( this, id )} 
          onTouchEnd={this.handleClick.bind( this, meta )} 
          onMouseUp={this.handleClick.bind( this, meta )}>
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