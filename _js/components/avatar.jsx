
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
      <img className={ 'avatar ' + this.props.className } src={ this.props.src } />
    );
  }
});

