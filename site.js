var site =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var 
	site = __webpack_require__( 1 );

	module.exports = site;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var 
	React = __webpack_require__( 2 ),
	Marrow = __webpack_require__( 5 ),
	bound = __webpack_require__( 4 ),
	SiteView = __webpack_require__( 6),
	dispatcher = __webpack_require__( 3 );

	var Site = Marrow(function Site(){

	  dispatcher.on( 'navigation', this.onNavigation.bind( this ) );
	},{
	  start: function( options, container ) {

	    this.options = options;
	    this.options.currentIndex = 0;
	    this.view = React.renderComponent( SiteView( options ), container );
	  },
	  onNavigation: function( eventName, current ) {

	    this.options.currentPage = current.page;
	    this.options.currentIndex = current.index;
	    this.view.setProps( this.options );
	  }
	});

	module.exports = new Site();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var 
	Marrow = __webpack_require__( 5 ),
	bound = __webpack_require__( 4 );

	var Dispatcher = Marrow( function Dispatcher() { } );
	module.exports = new Dispatcher();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = _bound.bind( null, 'addEventListener', false );

	function noop () {}
	// here to store refs to bound functions
	var _fns = {};

	var bindEvent = 
	module.exports.bindEvent = function ( fn, eventName, handler, context, removeCache ) {
	    var handlerString = handler.toString();
	    if ( typeof handler !== 'function' ) {
	        return;
	    }
	    /* 
	      this is to cache the function so it can be unbound from the event
	      because fn.bind( ) create a new function, which mean fn === fn.bind() is false
	    */ 
	    if ( !_fns[ eventName ] ) {
	        _fns[eventName] = {};
	    }
	    if ( !_fns[ eventName ][ handlerString ] ) {
	        _fns[ eventName ][ handlerString ] = handler.bind( context );
	    }
	    handler = _fns[ eventName ][ handlerString ];

	    fn( eventName, handler );
	    // clear cache on unbind
	    if ( removeCache ) {
	        delete _fns[ eventName ][ handlerString ];
	    }
	}

	var getMethod =
	module.exports.getMethod = function ( handleName, context ) {
	    if ( typeof context !== 'object' ) {
	        return;
	    }
	    return ( context || window )[ handleName ];
	};

	var eachEvent = 
	module.exports.eachEvent = function ( fn, eventObj, context, removeCache ) {
	    var event,
	        eventHandle,
	        bindTo;
	    for ( var _event in eventObj ) {
	        event = eventObj[ _event ];
	        if ( Array.isArray( event ) ) {
	            if ( typeof event[ 0 ] === 'object' ) {
	                bindTo = event[ 0 ];
	                if ( typeof event[ 1 ]  === 'string' ) {
	                    eventHandle = getMethod( event[ 1 ], bindTo );
	                } else {
	                    eventHandle = event[ 1 ];
	                }
	            } else {
	                eventHandle = event[ 1 ];
	            }
	        } else if ( typeof event === 'string' ) {
	            eventHandle = getMethod( event, context );
	        } else {
	            eventHandle = event;
	        }
	        bindEvent( fn, _event, eventHandle, bindTo || context, removeCache );
	    }
	};

	module.exports.bind = 
	module.exports.on =
	module.exports.addEventListener = _bound.bind( null, 'addEventListener', false );

	module.exports.unbind =
	module.exports.off =
	module.exports.removeListener = _bound.bind( null, 'removeListener', true );

	function _bound ( method, removeCache, emitter, eventObj, context  ) {
	    var eventMethod;
	    if ( typeof emitter === 'function' ) {
	        eventMethod = emitter;
	    } else {
	        eventMethod = ( emitter[ method ] ? emitter[method].bind( emitter ) : noop );
	    }
	    eachEvent( eventMethod, eventObj, context, removeCache );
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Marrow = __webpack_require__(7).Marrow,
		build = __webpack_require__(8),
		events = __webpack_require__(9),
		task = __webpack_require__(10);

		// stiching everything together
		Marrow.prototype = Marrow.prototype.merge( 
			Marrow.prototype,
			events.prototype,
			build.prototype,
			task.prototype
		);

	module.exports = Marrow;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @jsx React.DOM
	 */

	var 
	React = __webpack_require__( 2 ),
	Nav = __webpack_require__( 11 ),
	Card = __webpack_require__( 12 );

	module.exports = React.createClass({displayName: 'exports',
	  render: function() {
	    return ( 
	      React.DOM.div({className: "content"}, 
	        Nav({pages: this.props.pages, current: this.props.currentPage}), 
	        Card({pages: this.props.pages, current: this.props.currentPage, index: this.props.currentIndex})
	      )
	    );
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	(function(exports){

		// Marrow Constructor
		// the first argument in the component which is just a function
		// that acts as the initial constructor function for the component.
		// the second argument is a callback function that you can pass in
		// another callback function where the first argument is the `this`
		// prototype of Marrow. returns the first prameter with an extended
		// prototype

		var Marrow = function ( component, extend ) { 
			if ( !( this instanceof Marrow ) ) {
				return new Marrow( component, extend );
			}
			
			if ( typeof extend === 'function' ) {
				extend( this );
			}

			if ( typeof extend === 'object' ) {
				this.merge( this, extend );
			}

			var Construct = function Construct( ){
					this._init();
					return component.apply( this, arguments );
				};		

			// preserve constructor
			this.constructor = component;

			// extend component 
			Construct.prototype = component.prototype;
			Construct._name = component.name;
			this.merge( Construct.prototype, this );		

			return Construct;
		};

		// data store object
		Marrow.DS = {};

		Marrow.prototype._init = function ( ) {
			this._store( );
			if ( 'tasker' in this ) {
				this.tasker( 'initialize', this );
			}
			if ( 'emit' in this ) {
				this.emit('initialize');
			}
		};

		Marrow.prototype._store = function ( ) {
			if( !( Marrow.DS[this.constructor.name] ) ){
				Marrow.DS[this.constructor.name] = [];
			}
			var store = Marrow.DS[this.constructor.name];
			store.push( this );			
			this.ts = +new Date() + store.length;
		};

		// Marrow::merge will merge two objects together the merge is
		// not recursive and is only applied to the first level of the 
		// objects. The first parameter is the object to merg into and
		// the rest of the parameters are the objects to merge into
		// the first obj.

		Marrow.prototype.merge = function ( ) {
			var obj = arguments[ 0 ];
			if ( typeof obj === 'object' ) {
				for ( var i = 0; i <= arguments.length - 1; i += 1 ) {
					var _obj =  arguments[ i ];
					if ( typeof _obj === 'object' ) {
						for ( var _key in _obj ) {
							obj[ _key ] = _obj[ _key ];
						}
					}
				}
				return obj;
			}
		};

		// Marrow::getState returns the state of the component

		Marrow.prototype.getState = function () {
			return this.__state;
		};

		// Marrow::setState first parameter gets set as value of the 
		// __state which is return in getState. Need to be a Number
		// if not it will be evaluated as NaN

		Marrow.prototype.setState = function( value ){
			this.__state = +value; // + with evaluate this value a interger
		};

		exports.Marrow = Marrow;

	}(this));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	(function(Marrow){

		Marrow.prototype = Marrow.prototype || {}; 

		// Marrow::_extend creates a method in the prototype of the
		// object, the first parameter is type (String), which defines the name
		// of the method and allows binding to events on the method.
		// Second argument is state which is the state that gets set 
		// when the method is called, this needs to be a number. The 
		// third argument is the stored value that allows a kinda mapping
		// to the function that is going to be called, this also is a String.	
		// eg. ::to("die", function(){ele.remove()})
		// now you can bind to ::on("die")

		Marrow.prototype.__extend = function(type, state, store){
			var self = this;
			this[ type ] = function(){
				if( typeof this[ store ] === "function" ){
					self[ store ].apply( this, arguments );
				}

				if( typeof state === "number" ){
					self.__state = state;
				}

				var arr = [].concat(type, Array.prototype.slice.call(arguments));

				self.emit.apply( this, arr );
			};
		};

		// Marrow::to creates a method that will auto fire off an event 
		// with the same name.  The first parameter is type 
		// which is the name of the method and the name of the event
		// to bind to, this is a String. The second argument is a function
		// that you would want to excute when the newly created method is
		// called. The third state parameter is state which is a Number...
		// the number of the state you want you component to go into once the
		// method is called 

		Marrow.prototype.to = function( type, fn, state ){
			if(
				typeof type === "string" &&
				typeof fn === "function"
			){
				var store = "__" + type; // a `private` variable name
				this[ store ] = fn;
				this.__extend( type, state, store );
			}

		};

	}( 'function' === typeof Marrow ? Marrow : this ));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	(function(Marrow){

		Marrow.prototype = Marrow.prototype || {}; 

		var 
		// some local utilities
		delimiter = /\:/g,
		// simple function that splits apart event string into array
		// input a string get out an array
		parseEventString = function(str){
			if(typeof str === "string"){
				return str.split(delimiter);
			}
			return null;
		};

		// Marrow::__events creates the _events object ~ can probably
		// be phased out

		Marrow.prototype.__events = function(){
			this._events = {};
		};

		// Marrow::on is a way to bind to a event emitted by the object
		// The first parameter is a String that defined what event type
		// that you want to attach to. The second parameter is a function
		// that will be queued and executed once the evnt fires

		Marrow.prototype.on = function( event, callback ){

			// subscribing to another objects events
			if( typeof event === 'object' ){
				this._objBind( event, callback, arguments[2]);
				return null;		
			}

			if( typeof event === 'function' ){
				this._contructorBind( event, callback, arguments[2] );
				return null;		
			}

			if(
				typeof callback === "function" &&
				typeof event === "string"
			){

				var 
				events = parseEventString(event),
				// only support two layer events
				e = ( events.length > 1 ) ? events[ 0 ] + ":" + events[ 1 ]  : events[ 0 ];


				if( !this._events ){
					this.__events(); // create events object
				}

				if( typeof this._events[ e ] !== "object" ){
					this._events[ e ] = [];
				}

				if( typeof this._events[ e ].length === "number" ){
					this._events[ e ].push( callback );
				}
				
			}

			return this;
		};

		// Marrow::once is a way to bind to an event once. see on for more
		// details on event binding

		Marrow.prototype.once = function ( event, callback ) {
			var 
			_this = this,
			handle = function ( ) {
				callback.apply( _this, arguments );
				_this.off( event, handle );
				_this.off( event, callback );
			};
			this.on( event, handle );
		};

		// Marrow::off is a way to remove a binding to an event that would
		// be attached with the on method. The first parameter is a String
		// with the name of the event you want to unbind from this is optional,
		// when omited all events will be unbound from object. The second parameter
		// is a funcion that is a referance to a function that was bound to an event
		// this will only remove that one binding. The second argument is also
		// optional and when omitted will then unbind and bindings to the specified
		// event in the first parameter

		Marrow.prototype.off = function( event, fn ){

			if( typeof event === 'object' ){
				event = this._objUnbind( event, fn, arguments[2] );
				return null;
			}


			if(
				typeof this._events === "object" &&
				typeof event === "string" &&
				typeof this._events[ event ] === "object" && 
				this._events[ event ].length
			){

				var events = this._events[ event ];


				if( typeof fn === "function" ){

					for( var i = 0; i < events.length; i += 1 ){

						if( '' + events[i] === '' + fn ){ 
							this._events[ event ][ i ] = null; // remove specific fn
						}

					}

				}else{
					this._events[ event ] = []; // remove all events in group
				}

			} else {
				if( 
					typeof event === 'undefined' &&
					typeof fn === 'undefined' 
				) {
					this._events = {}; // remove all
				}
			}

		};

		// Marrow::emit is a way to fire off events to all the binding functions
		// The first parameter in emit is the event type as a String this is 
		// a referance used to bind the events to functions. Emit will also take
		// any other parameters passed into the emits method and will pass them to
		// the and event binds... only omiting the first parameter, the event type.
		// eg. obj.on("payload", function(payload){ /*Do stuff with payload*/});
		// obj.emit("payload", payload);

		Marrow.prototype.emit = function( event ){

			if(
				typeof this._events === "object" &&
				typeof event === "string"
			){

				var 
				events = parseEventString(event),
				e,
				arg = [].slice.call( arguments ); // copying argument so we can pass
				// though a chunk of them

				if( !this._events ){
					this.__events(); // create events object
				}

				for( var i = 0; i < events.length; i += 1 ){

					e = ( i ) ? events[ 0 ] + ":" + events[ i ] : events[ i ];	

					if(
						typeof this._events[ e ] === "object" && 
						this._events[ e ].length
					){

						for( var q = 0; q < this._events[ e ].length; q += 1 ){
							var payload = ( !( i ) && events.length > 1 ) ?
								arg : 
								arg.slice( 1 ); 

							if( this._events[ e ][ q ] ){
								this._events[ e ][ q ].apply( this, payload );
							} 
						}

					}

				}

				// if an all event binding is made emit event to it
		
			}

		};

		// Marrow._objBind binds to another object on event

		Marrow.prototype._objBind = function ( obj, event, fn ) {
			if ( 
				!obj && 
				typeof obj.on !== 'function' &&
				typeof event !== 'string' &&
				typeof fn !== 'function'
			) {
				// bad
				return null;
			} 
			obj.on( event, fn );
			
		};

		// Marrow._objBind removes binding

		Marrow.prototype._objUnbind = function ( obj, event, fn ) {
			if ( 
				!obj && 
				typeof obj.off !== 'function' &&
				typeof event !== 'string'
			) {
				// bad
				return null;
			} 
			obj.off( event, fn );
		};

		// Marrow._instanceBind binds events to an instance using task

		Marrow.prototype._contructorBind = function ( instance, event, fn ) {
			if (
				typeof instance !== 'function' ||
				typeof event !== 'string' ||
				typeof fn !== 'function' ||
				!( 'registerTask' in this )
			){
				// bad
				return null;
			}

			var constructor = instance._name;

			this.registerTask( '_contructorBind', 
				function ( _this ) {
					if ( _this && typeof _this.on === 'function' ) {
						_this.on( event, fn );
					}
				}, {
					instance : constructor,
					// this is when we want to bind to the instance
					event : 'initialize'
				}
			);

			//need a method to look up already created
			//instances especially for un binding events
		};

	}( 'function' === typeof Marrow ? Marrow : this ));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	( function ( Marrow ) {

		Marrow.prototype = Marrow.prototype || {}; 
		Marrow.DS = Marrow.DS || {}; 

		// builds out a task name
		Marrow.prototype._taskName = function ( task, options ) {
			var name = task;

			if ( options.event ) {
				name += ':_' + ( options.event || 'all' );
			}

			if ( options.instance ) {
				name += ':' + ( options.instance || '' );
			}
			// taskName:_position:instance

			return name;

		};

		// registers a task
		Marrow.prototype.registerTask = function ( task, fn, options ) {
			// needs better type testing

			if ( !Marrow.DS._tasks ) {
				Marrow.DS._tasks = {};
			}

			var 
			_task = {};

		
			_task.fn = fn;
			_task.options = options;

			Marrow.DS._tasks[ this._taskName( task, options ) ] = _task;

		};

		// checks for task registered under a certain name
		Marrow.prototype.tasker = function ( events, instance ) {

			if ( 
				typeof events !== 'string' ||
				typeof instance !== 'object' || 
				typeof instance.constructor !== 'function'
			) {
				if( 'console' in parent ) {
					// lets give a clue
					console.error( 'Could not run Marrow::tasker with the' +
						' arguments >' + events.toString() + 
						', ' + instance.toString()   
					);
				}
				return false;
			}

			var tasks = Marrow.DS._tasks,
				name = instance.constructor.name;

			for( var key in tasks ) {
				var value = tasks[ key ];
				if ( new RegExp( ':_' + events + ':' + name ).test( key ) ) {
					value.fn( instance );
				}
			}

			return true;
		};



	 } ( 'function' === typeof Marrow ? Marrow : this ));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @jsx React.DOM
	 */


	var 
	React = __webpack_require__( 2 ),
	Icon = __webpack_require__( 14 ),
	Avatar = __webpack_require__( 15 ),
	_ = __webpack_require__( 16 ),
	dispatcher = __webpack_require__( 3 );

	module.exports = React.createClass({displayName: 'exports',
	  getInitialState: function() {
	    return { 
	      pressed : null
	    };
	  },
	  handleClick: function( ) {    
	    var args = _.makeArray( arguments );
	    args.unshift( 'navigation:click' );
	    dispatcher.emit.apply( dispatcher, args );
	    this.setState( {
	      pressed: null 
	    } );
	  },
	  handlePress: function( id ) {
	    this.setState( { 
	      pressed: id 
	    } );
	  },
	  addNavItem: function( nodeList, page, id ) {
	    var 
	    icon,
	    pressed = ( this.state.pressed === id ) ? true : false,
	    current = ( this.props.current === id ) ? true : false,
	    meta = {
	      page: id,
	      index: page.index
	    };
	    
	    if ( page.image ) {
	      icon = ( Avatar({src: page.image, className: "circle"}) );
	    }
	    else {
	      icon = ( Icon({icon: page.icon}) );
	    }
	    nodeList[ id ] = (
	        React.DOM.div({className: 
	            "nav-item circle avatar avatar-small level-3 " +
	            ( pressed ? 'is-pressed' : '' ) +
	            ( current ? ' active' : ''), 
	          
	          onTouchStart: this.handlePress.bind( this, id), 
	          onMouseDown: this.handlePress.bind( this, id), 
	          onTouchEnd: this.handleClick.bind( this, meta), 
	          onMouseUp: this.handleClick.bind( this, meta)}, 
	          icon 
	        )
	    );
	  },
	  render: function() {

	    var nodeList = {};

	    for ( var page in this.props.pages ) {
	      this.addNavItem( nodeList, this.props.pages[ page ], page );
	    }

	    return ( 
	      React.DOM.nav({className: "nav"}, 
	        nodeList 
	      )
	    );
	  }
	});

	__webpack_require__( 19); // load styles

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @jsx React.DOM
	 */

	var 
	React = __webpack_require__( 2 ),
	CardView = __webpack_require__( 13),
	site = __webpack_require__( 1 );

	module.exports = React.createClass({displayName: 'exports',
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

	    nodeList[ id ] = ( CardView({page: page, current: isCurrent, className: position}) );
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
	      React.DOM.article({className: "card card-main round-borders level-4"}, 
	        nodeList
	      )
	    );
	  }
	});

	__webpack_require__( 17); // load styles

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @jsx React.DOM
	 */

	var 
	React = __webpack_require__( 2 ),
	Icon = __webpack_require__( 14),
	site = __webpack_require__( 1 );

	module.exports = React.createClass({displayName: 'exports',
	  getInitialState: function() {
	    return { };
	  },
	  mapRepoData: function( repo ) {
	    return {
	      title: repo.name,
	      desc: repo.description,
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
	      description.content = ( React.DOM.div({dangerouslySetInnerHTML: {__html: content.desc}}) );
	    }

	    nodeList[ content.title ] = (
	      React.DOM.section(null, 
	        React.DOM.h4(null, 
	          React.DOM.a({href: content.link}, 
	            Icon({icon: content.icon}), " ", content.title
	          )
	        ), 
	        description 
	      )
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
	      React.DOM.section({className:  "card-content " + this.props.className}, 
	        React.DOM.h2(null, page.title), 
	        nodeList 
	      )
	    );
	  }
	});

	__webpack_require__( 17); // load styles

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @jsx React.DOM
	 */

	var 
	React = __webpack_require__( 2 ),
	site = __webpack_require__( 1 );

	module.exports = React.createClass({displayName: 'exports',
	  getInitialState: function() {
	    return { };
	  },
	  render: function() {
	    return ( 
	      React.DOM.i({className: 'icon-' + this.props.icon + ' ' + this.props.className})
	    );
	  }
	});

	__webpack_require__( 17); // load styles

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @jsx React.DOM
	 */

	var 
	React = __webpack_require__( 2 ),
	site = __webpack_require__( 1 );

	module.exports = React.createClass({displayName: 'exports',
	  getInitialState: function() {
	    return { };
	  },
	  render: function() {
	    return ( 
	      React.DOM.img({className:  'avatar ' + this.props.className, src:  this.props.src})
	    );
	  }
	});

	__webpack_require__( 17); // load styles

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  makeArray: function( arrayLike ) {
	    return Array.prototype.slice.call( arrayLike, 0 );
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var update = __webpack_require__(21)(
		__webpack_require__(18)
	);
	// Hot Module Replacement
	if(false) {
		module.hot.accept("!!/home/jacob/Projects/Apps/jcblw.github.io/node_modules/css-loader/index.js!/home/jacob/Projects/Apps/jcblw.github.io/node_modules/less-loader/index.js!/home/jacob/Projects/Apps/jcblw.github.io/_less/components/card.less", function() {
			update(require("!!/home/jacob/Projects/Apps/jcblw.github.io/node_modules/css-loader/index.js!/home/jacob/Projects/Apps/jcblw.github.io/node_modules/less-loader/index.js!/home/jacob/Projects/Apps/jcblw.github.io/_less/components/card.less"));
		});
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		".card {\n  margin: 8px 0 0;\n  box-sizing: border-box;\n  padding: 20px;\n  background: #ffffff;\n  max-height: 90%;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.card > section {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  padding: 20px;\n  background: #ffffff;\n  right: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  -webkit-transition: all 0.5s ease-in-out 0.08s;\n  -moz-transition: all 0.5s ease-in-out 0.08s;\n  -ms-transition: all 0.5s ease-in-out 0.08s;\n  -o-transition: all 0.5s ease-in-out 0.08s;\n  transition: all 0.5s ease-in-out 0.08s;\n}\n.card > section.card-after {\n  -webkit-transform: translate(100%, 0);\n  -moz-transform: translate(100%, 0);\n  -ms-transform: translate(100%, 0);\n  -o-transform: translate(100%, 0);\n  transform: translate(100%, 0);\n}\n.card > section.card-active {\n  -webkit-transform: translate(0, 0);\n  -moz-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.card > section.card-before {\n  -webkit-transform: translate(-100%, 0);\n  -moz-transform: translate(-100%, 0);\n  -ms-transform: translate(-100%, 0);\n  -o-transform: translate(-100%, 0);\n  transform: translate(-100%, 0);\n}\n.card > section > section {\n  border-bottom: 1px solid #edf7f5;\n}\n.card > section h2 {\n  margin-top: 0;\n}\n.card > section ul {\n  list-style-type: none;\n  margin: 5px;\n  background: #edf7f5;\n  border-radius: 3px;\n  padding: 20px;\n}\n.card > section li {\n  line-height: 2em;\n  color: #888888;\n  border-bottom: 1px solid #a6d8ce;\n}\n.card > section li:last-of-type {\n  border-bottom: none;\n}\n@media screen and (min-width: 600px) {\n  .card {\n    margin: 8px;\n  }\n}\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var update = __webpack_require__(21)(
		__webpack_require__(20)
	);
	// Hot Module Replacement
	if(false) {
		module.hot.accept("!!/home/jacob/Projects/Apps/jcblw.github.io/node_modules/css-loader/index.js!/home/jacob/Projects/Apps/jcblw.github.io/node_modules/less-loader/index.js!/home/jacob/Projects/Apps/jcblw.github.io/_less/components/nav.less", function() {
			update(require("!!/home/jacob/Projects/Apps/jcblw.github.io/node_modules/css-loader/index.js!/home/jacob/Projects/Apps/jcblw.github.io/node_modules/less-loader/index.js!/home/jacob/Projects/Apps/jcblw.github.io/_less/components/nav.less"));
		});
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		".nav::after {\n  content: \"\";\n  clear: both;\n  display: block;\n}\n.nav > div {\n  display: table;\n  width: 44px;\n  height: 44px;\n  margin: 8px;\n  box-sizing: border-box;\n  background: #a6d8ce;\n  text-align: center;\n  float: left;\n  -webkit-transition: all 0.08s ease-out;\n  -moz-transition: all 0.08s ease-out;\n  -ms-transition: all 0.08s ease-out;\n  -o-transition: all 0.08s ease-out;\n  transition: all 0.08s ease-out;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.nav > div.is-pressed {\n  -webkit-transform: scale(0.9);\n  -moz-transform: scale(0.9);\n  -ms-transform: scale(0.9);\n  -o-transform: scale(0.9);\n  transform: scale(0.9);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(0, 0, 0, 0.5), 0 0px 5px rgba(0, 0, 0, 0.1);\n}\n.nav > div.active {\n  -webkit-transform: scale(1.15);\n  -moz-transform: scale(1.15);\n  -ms-transform: scale(1.15);\n  -o-transform: scale(1.15);\n  transform: scale(1.15);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 0 1px 5px rgba(0, 0, 0, 0.2), 0 0px 20px rgba(0, 0, 0, 0.05);\n}\n.nav > div i {\n  display: table-cell;\n  vertical-align: middle;\n}\n.nav > div img {\n  display: block;\n  max-width: 44px;\n}\n@media screen and (min-width: 600px) {\n  .nav > div {\n    width: 64px;\n    height: 64px;\n  }\n  .nav > div img {\n    max-width: 64px;\n  }\n}\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function addStyle(cssCode) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
		var styleElement = document.createElement("style"),
			head = document.head || document.getElementsByTagName("head")[0];
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = cssCode;
		} else {
			styleElement.appendChild(document.createTextNode(cssCode));
		}
		if(false) {
			return function(cssCode) {
				if(typeof cssCode === "string") {
					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = cssCode;
					} else {
						styleElement.childNodes[0].nodeValue = cssCode;
					}
				} else {
					dispose();
				}
			};
		} else {
			// For the useable API, provide a function to remove the stylesheet.
			return dispose;
		}

		function dispose() {
			head.removeChild(styleElement);
		}
	};


/***/ }
/******/ ])