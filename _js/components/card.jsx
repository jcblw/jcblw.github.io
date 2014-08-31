
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
      <article>
        <div className="card card-main round-borders level-4">
          <section className="card-content">
            <h1 className="medium-text">Expanding the nature of the web.</h1>
            <h3>About Me</h3>
            <section>
              <h4><i className="icon-power"></i>Just a snippet</h4>
              <p>I make things. I am developer based out of the Inland Empire. The web is my passion and I continue to push the bar with web technologies. I am currently the co-organizer of riverside.js. Proud to be a linux user!</p>
            </section>
            <section>
              <h4><i className="icon-power"></i>Just a snippet</h4>
              <p>I make things. I am developer based out of the Inland Empire. The web is my passion and I continue to push the bar with web technologies. I am currently the co-organizer of riverside.js. Proud to be a linux user!</p>
            </section>
          </section>
        </div>
      </article>
    );
  }
});

require( '../../_less/components/card.less'); // load styles