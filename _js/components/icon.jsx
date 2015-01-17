
/**
 * @jsx React.DOM
 */

var 
React = require( 'react' ),
site = require( '../site' );

module.exports = React.createClass({
  getInitialState: function() {
    return { };
  },
  render: function() {
    return ( 
      <i className={'icon-' + this.props.icon + ' ' + this.props.className}></i>
    );
  }
});

