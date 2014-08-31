
/**
 * @jsx React.DOM
 */

var 
React = require( 'react' ),
Icon = require( './icon'),
site = require( '../site' );

module.exports = React.createClass({
  getInitialState: function() {
    return { };
  },
  addContentNode: function( nodeList, content ) {
    var description = {};

    if ( content.desc ) {
      description.content = ( <div dangerouslySetInnerHTML={{__html: content.desc}} /> );
    }

    nodeList[ content.title ] = (
      <section>
        <h4>
          <a href={content.link} >
            <Icon icon={content.icon}></Icon> {content.title}
          </a>
        </h4>
        { description }
      </section>
    );
  },
  render: function() {
    var 
    page = this.props.page,
    nodeList = {};

    page.contents.forEach( this.addContentNode.bind( this, nodeList ) );

    return ( 
      <section className="card-content">
        <h3>{page.title}</h3>
        { nodeList }
      </section>
    );
  }
});

require( '../../_less/components/card.less'); // load styles