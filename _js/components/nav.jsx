
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
    site.emit( 'nav:click', e );
  },
  getInitialState: function() {
    return { };
  },
  render: function() {
    return ( 
      <nav className="nav">
        <div className="nav-item circle avatar avatar-small level-3" onClick={this.handleClick}>
          <Avatar src="https://pbs.twimg.com/profile_images/505874091409014784/2oqUWNv4.jpeg" className="circle"></Avatar>
        </div>
        <div className="nav-item circle level-3">
          <Icon icon="lab"></Icon>
        </div>
        <div className="nav-item circle level-3">
          <Icon icon="megaphone"></Icon>
        </div>
        <div className="nav-item circle level-3">
          <Icon icon="at" className=""></Icon>
        </div>
      </nav>
    );
  }
});

require( '../../_less/components/nav.less'); // load styles