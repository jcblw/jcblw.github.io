
/**
 * @jsx React.DOM
 */

var 
React = require( 'react' ),
Nav = require( './nav.jsx' ),
Card = require( './card.jsx' );

module.exports = React.createClass({
  render: function() {
    return ( 
      <div className="content">
        <Nav pages={this.props.pages} current={this.props.currentPage}></Nav>
        <Card pages={this.props.pages} current={this.props.currentPage} index={this.props.currentIndex}></Card>
      </div>
    );
  }
});
