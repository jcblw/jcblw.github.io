
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
  mapRepoData: function( repo ) {
    return {
      title: repo.name,
      desc: repo.description + '<br /><small>' + repo.stargazers_count + 'stars',
      icon: 'code',
      link: repo.html_url,
      stars: repo.stargazers_count
    };
  },
  filterRepos: function( repo ) {
    return ( !repo.fork && repo.stargazers_count !== 0 ) ;
  },
  sortByStars: function( prev, next ) {
    return next.stars - prev.stars;
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

    if ( page.repos ) { // special handling of github data
      page.contents = page.repos.filter( this.filterRepos ).map( this.mapRepoData ).sort( this.sortByStars );
    }

    if ( !page.contents ) { // when working locally
      page.contents = [];
    }

    page.contents.forEach( this.addContentNode.bind( this, nodeList ) );

    return ( 
      <section className={ "card-content " + this.props.className }>
        <h2>{page.title}</h2>
        { nodeList }
      </section>
    );
  }
});

require( '../../_less/components/card.less'); // load styles