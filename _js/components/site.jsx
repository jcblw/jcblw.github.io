
/**
 * @jsx React.DOM
 */

var 
React = require( 'react' ),
Nav = require( './nav' ),
Card = require( './card' );

module.exports = React.createClass({
  render: function() {
    return ( 
      <div className="content">
        <Nav></Nav>
        <Card></Card>
      </div>
    );
  }
});