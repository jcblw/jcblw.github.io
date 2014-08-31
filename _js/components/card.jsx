
/**
 * @jsx React.DOM
 */

var 
React = require( 'react' ),
CardView = require( './card-view'),
site = require( '../site' );

module.exports = React.createClass({
  getInitialState: function() {
    return { };
  },
  addCardView: function( nodeList, page, id ) {
    var isCurrent = ( id === this.props.currentPage );
    nodeList[ id ] = ( <CardView page={page} current={isCurrent}></CardView> );
  },
  render: function() {
    var nodeList = {};

    for ( var page in this.props.pages ) {
      this.addCardView( nodeList, this.props.pages[ page ], page );
    }

    return ( 
      <article className="card card-main round-borders level-4">
        <h1 className="medium-text">Expanding the nature of the web.</h1>
        {nodeList}
      </article>
    );
  }
});

require( '../../_less/components/card.less'); // load styles