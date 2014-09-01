
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
  getCardViewPosition: function( index, current ) {
    if ( index < current ) {
      return 'card-before';
    }
    if ( index > current ) {
      return 'card-after';
    }
    return 'card-active';
  },
  addCardView: function( nodeList, page, id ) {
    var 
    isCurrent = ( id === this.props.current ),
    position = this.getCardViewPosition( page.index, this.props.index ); 

    nodeList[ id ] = ( <CardView page={page} current={isCurrent} className={position}></CardView> );
  },
  render: function() {
    var 
    nodeList = {},
    index = 0;

    for ( var page in this.props.pages ) {
      this.props.pages[ page ].index = index;
      this.addCardView( nodeList, this.props.pages[ page ], page );
      index += 1;
    }

    return ( 
      <article className="card card-main round-borders level-4">
        {nodeList}
      </article>
    );
  }
});

require( '../../_less/components/card.less'); // load styles