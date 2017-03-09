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
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./scroll */ 1);
	
	__webpack_require__(/*! ./navigation */ 16);
	
	__webpack_require__(/*! ./about */ 18);
	
	__webpack_require__(/*! ./work */ 19);
	
	// Rework this some day
	// // Slider Section
	// var slider = function () {
	
	//   // The 400% container holding the slides
	//   var $sliderInner    = $("#ideals .slider-inner");
	//   // the slides
	//   var $controls       = $("#ideals .controls div");
	//   var $activeControl  = $("#ideals .controls div.active");
	
	//   // controls
	//   var $firstControl   = $("#ideals .controls div:nth-of-type(1)");
	//   var $secondControl  = $("#ideals .controls div:nth-of-type(2)");
	//   var $thirdControl   = $("#ideals .controls div:nth-of-type(3)");
	//   var $fourthControl  = $("#ideals .controls div:nth-of-type(4)");
	
	//   $($controls).click(function(){
	//     // If this isn't already active
	//     if (!$(this).hasClass("active-control")) {
	//       // Remove the class from anything that is active
	//       $("div.square").removeClass("active-control");
	//       // And make this active
	//       $(this).addClass("active-control");
	//     }
	//   });
	
	//   $($firstControl).click(function(){
	//       $sliderInner.css({marginLeft: "0"});
	//   });
	//   $($secondControl).click(function(){
	//       $sliderInner.css({marginLeft: "-100%"});
	//   });
	//   $($thirdControl).click(function(){
	//       $sliderInner.css({marginLeft: "-200%"});
	//   });
	//   $($fourthControl).click(function(){
	//       $sliderInner.css({marginLeft: "-300%"});
	//   });
	// };
	
	// slider();
	__webpack_require__(/*! smoothscroll-polyfill */ 20).polyfill();

/***/ },
/* 1 */
/*!****************************!*\
  !*** ./js/scroll/index.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	var _core = __webpack_require__(/*! ../core */ 13);
	
	var core = _interopRequireWildcard(_core);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	!function () {
	
	  var hero = (0, _properjsHobo2.default)('#home');
	  var heroHeight = hero[0].clientHeight;
	  var latestKnownScroll = 0;
	  var ticking = false;
	
	  function onScroll() {
	    latestKnownScroll = window.scrollY;
	    requestTick();
	  }
	
	  function onResize() {
	    heroHeight = hero[0].clientHeight;
	  }
	
	  function requestTick() {
	    if (!ticking) {
	      window.requestAnimationFrame(update);
	    }
	    ticking = true;
	  }
	
	  function update() {
	    ticking = false;
	
	    if (latestKnownScroll >= heroHeight) {
	      core.dom.html.addClass('nav-scrolled');
	    } else {
	      core.dom.html.removeClass('nav-scrolled');
	    }
	  }
	
	  window.addEventListener('scroll', onScroll, false);
	  window.addEventListener('resize', onResize, false);
	}();

/***/ },
/* 2 */
/*!*********************************!*\
  !*** ./~/properjs-hobo/hobo.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 *
	 * @method hobo
	 * @author kitajchuk
	 * @hobo-dist npm run build
	 *
	 * @links
	 * https://developer.mozilla.org/en-US/docs/Web/API/Node
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element
	 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	 * https://github.com/jakearchibald/es6-promise
	 * http://www.html5rocks.com/en/tutorials/es6/promises/
	 *
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.hobo = factory();
	    }
	
	})(function () {
	
	    var Hobo = __webpack_require__( /*! ./lib/Hobo */ 3 ),
	        utils = __webpack_require__( /*! ./lib/utils */ 4 );
	
	
	    // Core Hobo methods:
	    Hobo.prototype.on = __webpack_require__( /*! ./lib/core/on */ 5 );
	    Hobo.prototype.off = __webpack_require__( /*! ./lib/core/off */ 7 );
	    Hobo.prototype.data = __webpack_require__( /*! ./lib/core/data */ 8 );
	    Hobo.prototype.find = __webpack_require__( /*! ./lib/core/find */ 9 );
	    Hobo.prototype.addClass = __webpack_require__( /*! ./lib/core/addClass */ 10 );
	    Hobo.prototype.removeClass = __webpack_require__( /*! ./lib/core/removeClass */ 11 );
	
	
	    // Extended Hobo methods:
	    // @hobo-ext
	
	
	    /**
	     *
	     * @public
	     * @method hobo
	     * @description Wrapper for `Hobo` instances.
	     * @param {string} selector The parameter passed to `querySelectorAll`
	     * @param {element} context The Element used to call `querySelectorAll`
	     *
	     */
	    hobo = function ( selector, context ) {
	        return new Hobo( selector, context );
	    };
	
	
	    // Attach Hobo utilities to `wrapper` method
	    hobo.ajax = __webpack_require__( /*! ./lib/core/ajax */ 12 );
	
	
	    return hobo;
	
	});

/***/ },
/* 3 */
/*!*************************************!*\
  !*** ./~/properjs-hobo/lib/Hobo.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * 
	 * @Hobo
	 * @author: kitajchuk
	 *
	 *
	 */
	var utils = __webpack_require__( /*! ./utils */ 4 ),
	    array = [];
	
	
	/**
	 *
	 * @class Hobo
	 * @classdesc A very small, modular DOM utility for modern web apps.
	 * @param {string} selector The goods - String, Element, Collection.
	 * @param {element} context The Element used to call `querySelectorAll`
	 *
	 */
	var Hobo = function ( selector, context ) {
	    // Hobo version?
	    this._hobo = utils.version;
	
	    // Hobo context
	    this._context = (context && context.nodeType && context.nodeType === 1 ? context : document);
	
	    // Hobo selector / elements
	    // Hobo supports a mixed selector argument
	
	    // Handle Window
	    // Handle Document
	    // Handle DOMElement
	    if ( selector === window || selector === document || (selector.nodeType && selector.nodeType === 1) ) {
	        this._selector = "";
	        selector = [ selector ];
	
	    // Handle String
	    } else if ( typeof selector === "string" ) {
	        // Trim trailing whitespace from the string
	        selector = utils.trimString( selector );
	
	        // Handle string html => Element creation
	        if ( utils.rTag.test( selector ) ) {
	            // Then remove the doctype - `<!DOCTYPE html>`
	            selector = selector.replace( utils.rDocType, "" );
	
	            // Create a dummy `hobo` element
	            // Dump the HTML payload in the `hobo` element
	            // Extract the elements from the `hobo` element
	            var el = document.createElement( "hobo" );
	                el.innerHTML = selector;
	
	            // Format elements as a true Array
	            selector = utils.makeArray( el.children );
	
	            el = null;
	
	        // Handle string selector
	        } else {
	            this._selector = selector;
	            selector = utils.makeArray( this._context.querySelectorAll( selector ) );
	        }
	
	    // Handle Collection: NodeList, HTMLCollection, Array
	    } else if ( selector.length !== undefined ) {
	        this._selector = "";
	        selector = utils.makeArray( selector );
	    }
	
	    // Hobo events?
	    this._events = {};
	
	    // Hobo length?
	    this.length = selector.length;
	
	    // Hobo elements?
	    for ( var i = this.length; i--; ) {
	        this[ i ] = selector[ i ];
	    }
	
	    // Initial mapping of each nodes data.
	    // Transfer {DOMStringMap} => {hoboDataMap}
	    this.forEach( utils.makeData );
	};
	
	
	// Shim Array-like presentation in console
	Hobo.prototype.splice = array.splice;
	
	
	/**
	 *
	 * @instance
	 * @method forEach
	 * @param {function} callback The method called on each iteration
	 * @memberof Hobo
	 * @description Make sure Hobo is iterable like an Array
	 *
	 */
	Hobo.prototype.each = array.forEach;
	Hobo.prototype.forEach = array.forEach;
	
	
	/**
	 *
	 * @instance
	 * @method push
	 * @param {?} element element1, ..., elementN
	 * @memberof Hobo
	 * @description Make sure Hobo is pushable like an Array
	 *
	 */
	Hobo.prototype.push = array.push;
	
	
	/**
	 *
	 * @instance
	 * @method map
	 * @param {function} callback The method called for each element
	 * @memberof Hobo
	 * @description Make sure Hobo is mappable like an Array
	 *
	 */
	Hobo.prototype.map = array.map;
	
	
	// Export the main Hobo Class :D
	module.exports = Hobo;

/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./~/properjs-hobo/lib/utils.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*!
	 *
	 *
	 * @Hobo-utils
	 * @author: kitajchuk
	 *
	 *
	 */
	var version = "0.3.6",
	
	
	    rData = /^data-/,
	
	
	    rDigit = /\D/g,
	
	
	    rDashAlpha = /-([\da-z])/gi,
	
	
	    rTag = /^</,
	
	
	    rJson = /^\[|\{/,
	
	
	    rDocType = /^<\!DOCTYPE\shtml>/i,
	
	
	    rFront2Back = /^\s+|\s+$/g,
	
	
	    trimString = function ( str ) {
	        return str.replace( rFront2Back, "" );
	    },
	
	
	    camelCase = function ( string ) {
	        return string.replace( rDashAlpha, function ( all, letter ) {
	            return letter.toUpperCase();
	        });
	    },
	
	
	    makeId = function () {
	        return ("hobo" + ( version + Math.random() ).replace( rDigit, "" ));
	    },
	
	
	    makeArray = function ( nodes ) {
	        return [].slice.call( nodes );
	    },
	
	
	    makeData = function ( node ) {
	        if ( !node.hoboDataMap ) {
	            node.hoboDataMap = {};
	        }
	
	        if ( node.dataset ) {
	            _mapDataset( node );
	
	        } else if ( node.attributes ) {
	            _mapAttributes( node );
	        }
	    },
	
	
	    storeData = function ( data, node ) {
	        var id,
	            i;
	
	        for ( i in data ) {
	            if ( data.hasOwnProperty( i ) ) {
	                id = camelCase( i );
	
	                node.hoboDataMap[ id ] = data[ i ];
	            }
	        }
	    },
	
	
	    mergeData = function ( data, node ) {
	        for ( var i in node.hoboDataMap ) {
	            if ( node.hoboDataMap.hasOwnProperty( i ) && !data[ i ] ) {
	                data[ i ] = node.hoboDataMap[ i ];
	            }
	        }
	    },
	
	
	    retrieveData = function ( key, node ) {
	        var ret = null;
	
	        // All data mapped into Hobo will be camel-cased
	        key = camelCase( key );
	
	        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
	            ret = node.hoboDataMap[ key ];
	        }
	
	        return ret;
	    },
	
	
	    removeData = function ( key, node ) {
	        // All data mapped into Hobo will be camel-cased
	        key = camelCase( key );
	
	        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
	            delete node.hoboDataMap[ key ];
	        }
	    },
	
	
	    serializeData = function ( data, prefix ) {
	        var str = [],
	            key,
	            val,
	            i;
	
	        for ( i in data ) {
	            if ( data.hasOwnProperty( i ) ) {
	                key = prefix ? (prefix + "[" + i + "]") : i;
	                val = data[ i ];
	
	                if ( typeof val === "object" ) {
	                    str.push( serializeData( val, key ) );
	
	                } else {
	                    str.push( (encodeURIComponent( key ) + "=" + encodeURIComponent( val )) );
	                }
	            }
	        }
	
	        return str.join( "&" );
	    },
	
	
	    // DOMStringMap camel-cases data- attributes.
	    // NamedNodeMap is a fallback which supports IE 10.
	    // Data mapped through Hobo must camel-case as well.
	
	
	    _getDataValue = function ( data ) {
	        if ( rJson.test( data ) ) {
	            try {
	                data = JSON.parse( data );
	
	            } catch ( error ) {
	                throw error;
	            }
	        }
	
	        return data;
	    },
	
	
	    // Use {NamedNodeMap}
	    _mapAttributes = function ( node ) {
	        var i = node.attributes.length;
	
	        for ( i; i--; ) {
	            if ( rData.test( node.attributes[ i ].name ) ) {
	                var key = camelCase( node.attributes[ i ].name.replace( rData, "" ) );
	
	                node.hoboDataMap[ key ] = _getDataValue( node.attributes[ i ].value );
	            }
	        }
	    },
	
	
	    // Use {DOMStringMap}
	    _mapDataset = function ( node ) {
	        for ( var i in node.dataset ) {
	            if ( node.dataset.hasOwnProperty( i ) ) {
	                node.hoboDataMap[ i ] = _getDataValue( node.dataset[ i ] );
	            }
	        }
	    };
	
	
	module.exports = {
	    version: version,
	    rData: rData,
	    rDigit: rDigit,
	    rTag: rTag,
	    rJson: rJson,
	    rDocType: rDocType,
	    rFront2Back: rFront2Back,
	    trimString: trimString,
	    camelCase: camelCase,
	    makeId: makeId,
	    makeArray: makeArray,
	    makeData: makeData,
	    storeData: storeData,
	    retrieveData: retrieveData,
	    mergeData: mergeData,
	    removeData: removeData,
	    serializeData: serializeData
	};

/***/ },
/* 5 */
/*!****************************************!*\
  !*** ./~/properjs-hobo/lib/core/on.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var matchElement = __webpack_require__( /*! properjs-matchelement */ 6 ),
	    utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @private
	 * @method bind
	 * @description Bind a standard DOM Event.
	 * @param {element} node
	 * @param {string} event
	 * @param {string} selector
	 * @param {function} callback
	 * @this {Hobo}
	 *
	 */
	var bind = function ( node, event, selector, callback ) {
	    // Unique ID for each node event
	    var eventId = (utils.makeId() + "EVENT"),
	
	        // The true event name
	        eventType = event,
	
	        // Normalize event handler with a small wrapper function
	        eventHandler = function ( e ) {
	            // Default context is `this` element
	            var context = (selector ? matchElement( e.target, selector, true ) : this);
	
	            // Handle `mouseenter` and `mouseleave`
	            if ( event === "mouseenter" || event === "mouseleave" ) {
	                var relatedElement = (event === "mouseenter" ? e.fromElement : e.toElement);
	
	                if ( context && ( relatedElement !== context && !context.contains( relatedElement ) ) ) {
	                    callback.call( context, e );
	                }
	
	            // Fire callback if context element
	            } else if ( context ) {
	                callback.call( context, e );
	            }
	        };
	
	    // Support `mouseenter` and `mouseleave`
	    if ( event === "mouseenter" ) {
	        eventType = "mouseover";
	
	    } else if ( event === "mouseleave" ) {
	        eventType = "mouseout";
	    }
	
	    // Each handler/callback pair gets stored in an `events` index
	    this._events[ event ][ eventId ] = {
	        id: eventId,
	        type: eventType,
	        node: node,
	        handler: eventHandler,
	        callback: callback
	    };
	
	    node.addEventListener( eventType, eventHandler, false );
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method on
	 * @description Bind a standard DOM Event. Honor delegation as a primary.
	 * @param {string} events 
	 * @param {string} selector 
	 * @param {function} callback
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( events, selector, callback ) {
	    var self = this;
	
	    // Normalize `selector` and `callback`
	    if ( !callback ) {
	        callback = selector;
	        selector = this._selector;
	    }
	
	    // Iterate over event(s)
	    // Space separated event list is supported
	    // Example: "DOMMouseScroll mousewheel"
	    events.split( " " ).forEach(function ( event ) {
	        // Does this event type have an index yet
	        if ( !self._events[ event ] ) {
	            self._events[ event ] = {};
	        }
	
	        self.forEach(function ( node ) {
	            bind.call( self, node, event, selector, callback );
	        });
	    });
	
	    return this;
	};

/***/ },
/* 6 */
/*!*************************************************!*\
  !*** ./~/properjs-matchelement/matchElement.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Use native element selector matching
	 *
	 * @matchElement
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.matchElement = factory();
	    }
	    
	})(function () {
	
	    /**
	     *
	     * Use native element selector matching
	     * @memberof! <global>
	     * @method matchElement
	     * @param {object} el the element
	     * @param {string} selector the selector to match
	     * @param {boolean} walk should we walk the tree if el is not a match?
	     * @returns element OR null
	     *
	     */
	    var matchElement = function ( el, selector, walk ) {
	        var method = ( el.matches ) ? "matches" : ( el.webkitMatchesSelector ) ? 
	                                      "webkitMatchesSelector" : ( el.mozMatchesSelector ) ? 
	                                      "mozMatchesSelector" : ( el.msMatchesSelector ) ? 
	                                      "msMatchesSelector" : ( el.oMatchesSelector ) ? 
	                                      "oMatchesSelector" : null;
	
	        // Try testing the element against the selector
	        // 0.1 => Method is not undefined
	        // 0.2 => Element passes method call
	        if ( method && el[ method ].call( el, selector ) ) {
	            return el;
	
	        // Keep walking up the DOM if we can - only if `walk` flag is `true`
	        } else if ( walk && el !== document.documentElement && el.parentNode ) {
	            return matchElement( el.parentNode, selector, walk );
	
	        // Otherwise we should not execute an event
	        } else {
	            return null;
	        }
	    };
	
	
	    return matchElement;
	
	});

/***/ },
/* 7 */
/*!*****************************************!*\
  !*** ./~/properjs-hobo/lib/core/off.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @private
	 * @method unbind
	 * @description Unbind a standard DOM Event.
	 * @param {element} node
	 * @param {string} event
	 * @param {function} callback
	 * @this {Hobo}
	 *
	 */
	var unbind = function ( node, event, callback ) {
	    var type,
	        evo,
	        id;
	
	    // Remove a single handler for an event type
	    if ( callback ) {
	        for ( id in this._events[ event ] ) {
	            if ( this._events[ event ].hasOwnProperty( id ) ) {
	                evo = this._events[ event ][ id ];
	
	                // Match the nodes, Match the callback
	                if ( evo.node === node && evo.callback === callback ) {
	                    node.removeEventListener( evo.type, evo.handler, false );
	
	                    delete this._events[ event ][ id ];
	                }
	            }
	        }
	
	    // Remove all handlers for an event type
	    } else {
	        for ( id in this._events[ event ] ) {
	            if ( this._events[ event ].hasOwnProperty( id ) ) {
	                evo = this._events[ event ][ id ];
	
	                // Match the nodes
	                if ( evo.node === node ) {
	                    node.removeEventListener( evo.type, evo.handler, false );
	
	                    delete this._events[ event ][ id ];
	                }
	            }
	        }
	    }
	};
	
	
	/**
	 *
	 * @private
	 * @method teardown
	 * @description Unbind all events for instance.
	 * @param {element} node
	 * @this {Hobo}
	 *
	 */
	var teardown = function ( node ) {
	    var type,
	        evo,
	        id;
	
	    for ( type in this._events ) {
	        if ( this._events.hasOwnProperty( type ) ) {
	            for ( id in this._events[ type ] ) {
	                if ( this._events[ type ].hasOwnProperty( id ) ) {
	                    evo = this._events[ type ][ id ];
	
	                    // Match the nodes
	                    if ( evo.node === node ) {
	                        node.removeEventListener( evo.type, evo.handler, false );
	
	                        delete this._events[ type ][ id ];
	                    }
	                }
	            }
	        }
	    }
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method off
	 * @description Un-Bind a standard DOM Event.
	 * @param {string} events The event type
	 * @param {function} callback The supplied callback
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( events, callback ) {
	    var self = this;
	
	    // Iterate over event(s)
	    // Space separated event list is supported
	    // Example: "DOMMouseScroll mousewheel"
	    // off() can be called with no args, account for this and remove ALL events
	    (events ? events.split( " " ) : [null]).forEach(function ( event ) {
	        self.forEach(function ( node ) {
	            // Explicit `null` check for teardown
	            if ( event === null ) {
	                teardown.call( self, node );
	
	            } else {
	                unbind.call( self, node, event, callback );
	            }
	        });
	    });
	
	    return this;
	};

/***/ },
/* 8 */
/*!******************************************!*\
  !*** ./~/properjs-hobo/lib/core/data.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method data
	 * @description Get / set data values with nodes.
	 * @param {string} key The access key
	 * @param {string} value The value to be stored
	 * @returns {mixed}
	 *
	 */
	module.exports = function ( key, value ) {
	    // Any `non-unique` data keys resolve to the first unique occurrence
	    // Exactly how jQuery handles `.data( ... )` on multi-node collections
	
	    var ret = this,
	        obj = null;
	
	    // Storing data from an Object
	    if ( typeof key === "object" ) {
	        obj = key;
	
	        this.forEach(function ( node ) {
	            utils.storeData( obj, node );
	        });
	
	    // Storing data as a `key:value` pair
	    } else if ( value ) {
	        obj = {};
	        obj[ key ] = value;
	
	        this.forEach(function ( node ) {
	            utils.storeData( obj, node );
	        });
	
	    // Accessing data by `key`
	    } else if ( key ) {
	        this.forEach(function ( node ) {
	            if ( obj !== null ) {
	                return;
	            }
	
	            obj = utils.retrieveData( key, node );
	
	        });
	
	        ret = obj;
	
	    // Accessing all data
	    // Merges all `unique` data for a Hobo set
	    } else {
	        obj = {};
	
	        // Object is mutated here by `mergeData`
	        this.forEach(function ( node ) {
	            utils.mergeData( obj, node );
	        });
	
	        ret = obj;
	    }
	
	    return ret;
	};

/***/ },
/* 9 */
/*!******************************************!*\
  !*** ./~/properjs-hobo/lib/core/find.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 3 ),
	    utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method find
	 * @description Query into a Hobo instance for new nodes.
	 * @param {string} selector The selector to query for
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var ret = this;
	
	    // If we are `finding` within a multi-node collection...
	    // Here its probably faster to grab the nodes within each Node
	    // and then just let the context be the document for the new instance. 
	    if ( this.length > 1 ) {
	        ret = [];
	
	        this.forEach(function ( node ) {
	            ret = ret.concat( utils.makeArray( node.querySelectorAll( selector ) ) );
	        });
	
	        ret = new Hobo( ret, null );
	
	    // Single node collection
	    // Empty node collection
	    } else {
	        ret = new Hobo( (this.length ? selector : []), (this.length ? this[ 0 ] : null) );
	    }
	
	    return ret;
	};

/***/ },
/* 10 */
/*!**********************************************!*\
  !*** ./~/properjs-hobo/lib/core/addClass.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method addClass
	 * @description Add one or more classNames to the nodes.
	 * @param {string} classes The space-separated classNames
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( classes ) {
	    this.forEach(function ( element ) {
	        var newClass = classes.split( " " ),
	            elsClass = element.className.split( " " );
	
	        newClass.forEach(function ( klass ) {
	            if ( elsClass.indexOf( klass ) === -1 ) {
	                elsClass.push( klass );
	            }
	        });
	
	        element.className = utils.trimString( elsClass.join( " " ) );
	    });
	
	    return this;
	};

/***/ },
/* 11 */
/*!*************************************************!*\
  !*** ./~/properjs-hobo/lib/core/removeClass.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method removeClass
	 * @description Remove one or more classNames from the nodes.
	 * @param {string} classes The space-separated classNames
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( classes ) {
	    this.forEach(function ( element ) {
	        // Explicit check for `undefined`
	        // Using `!classes` would be bad in this case
	        // Calling `removeClass( "" )` should not wipe the entire className
	        if ( classes === undefined ) {
	            element.className = "";
	
	        } else {
	            var oldClass = classes.split( " " ),
	                elsClass = element.className.split( " " );
	
	            oldClass.forEach(function ( klass ) {
	                if ( elsClass.indexOf( klass ) !== -1 ) {
	                    elsClass.splice( elsClass.indexOf( klass ), 1 );
	                }
	            });
	
	            element.className = utils.trimString( elsClass.join( " " ) );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 12 */
/*!******************************************!*\
  !*** ./~/properjs-hobo/lib/core/ajax.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @static
	 * @memberof Hobo
	 * @method ajax
	 * @description Perform standar XHR with a native Promise.
	 *              dataType can be `html`, `json`, `jsonp`.
	 * @param {object} config The ajax config object
	 *                        url       => string, default: window.location.href
	 *                        data      => object, default: null
	 *                        dataType  => string, default: "html"
	 *                        method    => string, default: "GET"
	 *                        jsonp     => string, default: "callback"
	 *                        headers   => object, default: null
	 * @returns {Promise}
	 *
	 */
	module.exports = function ( config ) {
	    var params = (config.data || null),
	        dataType = (config.dataType || "html"),
	        method = (config.method || "GET").toUpperCase(),
	        url = (config.url || window.location.href),
	        headers = (config.headers || null);
	
	    // Handle params
	    // Params will be one of the following:
	    // Serialized querystring
	    // Instanceof FormData
	    // Null
	    if ( params && !(FormData && params instanceof FormData) ) {
	        params = utils.serializeData( config.data );
	    }
	
	    // Handle params in GET URL
	    if ( method === "GET" && params ) {
	        url += ("?" + params);
	    }
	
	    return new Promise(function ( resolve, reject ) {
	        var handleResponse = function ( response ) {
	            if ( dataType === "json" ) {
	                try {
	                    response = JSON.parse( response );
	
	                } catch ( error ) {
	                    reject( ("Rejecting on JSON.parse error : " + error) );
	                }
	            }
	
	            resolve( response );
	        };
	
	        // JSONP
	        if ( dataType === "jsonp" ) {
	            var jsonpCallbackValue = (utils.makeId() + "JSONP"),
	                jsonpCallbackKey = (config.jsonp || "callback"),
	                jsonpScript = document.createElement( "script" );
	
	            jsonpScript.src = (url + (/\?/.test( url ) ? "&" : "?") + jsonpCallbackKey + "=" + jsonpCallbackValue);
	
	            window[ jsonpCallbackValue ] = function ( response ) {
	                document.getElementsByTagName( "head" )[ 0 ].removeChild( jsonpScript );
	                jsonpScript = null;
	                delete window[ jsonpCallbackValue ];
	
	                handleResponse( response );
	            };
	
	            document.getElementsByTagName( "head" )[ 0 ].appendChild( jsonpScript );
	
	        // XHR
	        } else {
	            var xhr = new XMLHttpRequest();
	
	            xhr.open( method, url, true );
	
	            if ( headers ) {
	                for ( var header in headers ) {
	                    if ( headers.hasOwnProperty( header ) ) {
	                        xhr.setRequestHeader( header, headers[ header ] );
	                    }
	                }
	            }
	
	            xhr.onreadystatechange = function ( e ) {
	                if ( this.readyState === 4 ) {
	                    // Two-Hundo's are A-Okay with Hobo
	                    if ( /^20/.test( this.status ) ) {
	                        handleResponse( this.responseText );
	
	                    } else {
	                        reject( ("Rejecting on server status code : " + this.status) );
	                    }
	                }
	            };
	
	            xhr.send( params );
	        }
	    });
	};

/***/ },
/* 13 */
/*!**************************!*\
  !*** ./js/core/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.util = exports.dom = undefined;
	
	var _dom = __webpack_require__(/*! ./dom */ 14);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _util = __webpack_require__(/*! ./util */ 15);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.dom = _dom2.default;
	exports.util = util;

/***/ },
/* 14 */
/*!************************!*\
  !*** ./js/core/dom.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dom = {
	  document: (0, _properjsHobo2.default)(document),
	  html: (0, _properjsHobo2.default)(document.documentElement),
	  body: (0, _properjsHobo2.default)(document.body),
	  header: (0, _properjsHobo2.default)("#header"),
	  nav: (0, _properjsHobo2.default)(".primary-nav")
	};
	
	exports.default = dom;

/***/ },
/* 15 */
/*!*************************!*\
  !*** ./js/core/util.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isElementLoadable = function isElementLoadable(el) {
	  if (el) {
	    var bounds = el.getBoundingClientRect();
	
	    return bounds.top < window.innerHeight * 2;
	  }
	};
	
	var isElementInViewport = function isElementInViewport(el) {
	  if (el) {
	    var bounds = el.getBoundingClientRect();
	
	    return bounds.top < window.innerHeight / 1.5 && bounds.bottom > 0;
	  }
	};
	
	var throttle = function throttle(func, wait, options) {
	  var timeout, context, args, result;
	  var previous = 0;
	  var now = Date.now || function () {
	    return new Date().getTime();
	  };
	  if (!options) options = {};
	
	  var later = function later() {
	    previous = options.leading === false ? 0 : now();
	    timeout = null;
	    result = func.apply(context, args);
	    if (!timeout) context = args = null;
	  };
	
	  var throttled = function throttled() {
	    var now = Date.now || function () {
	      return new Date().getTime();
	    };
	    if (!previous && options.leading === false) previous = now;
	    var remaining = wait - (now - previous);
	    context = this;
	    args = arguments;
	    if (remaining <= 0 || remaining > wait) {
	      if (timeout) {
	        clearTimeout(timeout);
	        timeout = null;
	      }
	      previous = now;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    } else if (!timeout && options.trailing !== false) {
	      timeout = setTimeout(later, remaining);
	    }
	    return result;
	  };
	
	  throttled.cancel = function () {
	    clearTimeout(timeout);
	    previous = 0;
	    timeout = context = args = null;
	  };
	
	  return throttled;
	};
	
	var toggleClick = function toggleClick(elementToggle) {
	  // element toggle must be instantiated
	  // by new Toggle
	  elementToggle.toggle();
	};
	
	var scrollToElement = function scrollToElement(element) {
	  (0, _properjsHobo2.default)(element)[0].scrollIntoView({ behavior: 'smooth' });
	};
	
	exports.default = {
	  isElementLoadable: isElementLoadable,
	  isElementInViewport: isElementInViewport,
	  throttle: throttle,
	  toggleClick: toggleClick,
	  scrollToElement: scrollToElement
	};

/***/ },
/* 16 */
/*!********************************!*\
  !*** ./js/navigation/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	var _Toggle = __webpack_require__(/*! ../Toggle */ 17);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _core = __webpack_require__(/*! ../core */ 13);
	
	var core = _interopRequireWildcard(_core);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var scrollToElement = core.util.default.scrollToElement;
	
	
	(function () {
	
	  var nav = new _Toggle2.default((0, _properjsHobo2.default)(".nav"), "is-menu-open");
	  var toggle = (0, _properjsHobo2.default)(".toggle-nav");
	  var arrow = (0, _properjsHobo2.default)(".nav__item--arrow");
	  var home = (0, _properjsHobo2.default)(".nav__link--home");
	  var about = (0, _properjsHobo2.default)(".nav__link--about");
	  var contact = (0, _properjsHobo2.default)(".nav__link--contact");
	  var work = (0, _properjsHobo2.default)(".nav__link--work");
	
	  var navItemClick = function navItemClick(scrollElement) {
	    return function (event) {
	      event.preventDefault();
	      nav.toggle();
	      scrollToElement(scrollElement);
	    };
	  };
	
	  toggle[0].addEventListener("click", function (event) {
	    event.preventDefault();
	    nav.toggle();
	  }, false);
	  arrow[0].addEventListener("click", function (event) {
	    event.preventDefault();
	    nav.toggle();
	  }, false);
	  home[0].addEventListener("click", navItemClick('#home'), false);
	  about[0].addEventListener("click", navItemClick('#about'), false);
	  contact[0].addEventListener("click", navItemClick('#contact'), false);
	  work[0].addEventListener("click", navItemClick('#work'), false);
	})();

/***/ },
/* 17 */
/*!**********************!*\
  !*** ./js/Toggle.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(/*! ./core */ 13);
	
	var core = _interopRequireWildcard(_core);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Toggle = function () {
	  function Toggle($node, $className) {
	    _classCallCheck(this, Toggle);
	
	    this.$node = $node;
	    this.isOpen = false;
	    this.$className = $className;
	
	    // this.$node.detach();
	  }
	
	  _createClass(Toggle, [{
	    key: "open",
	    value: function open() {
	      this.isOpen = true;
	
	      core.dom.html.addClass("" + this.$className);
	      // core.dom.body.append( $this.$node );
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      this.isOpen = false;
	
	      core.dom.html.removeClass("" + this.$className);
	      // this.$node.detach();
	    }
	  }, {
	    key: "toggle",
	    value: function toggle() {
	      if (this.isOpen) {
	        this.close();
	      } else {
	        this.open();
	      }
	    }
	  }]);
	
	  return Toggle;
	}();
	
	exports.default = Toggle;

/***/ },
/* 18 */
/*!***************************!*\
  !*** ./js/about/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	var _Toggle = __webpack_require__(/*! ../Toggle */ 17);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _core = __webpack_require__(/*! ../core */ 13);
	
	var core = _interopRequireWildcard(_core);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var scrollToElement = core.util.default.scrollToElement;
	
	
	(function () {
	  var about = new _Toggle2.default((0, _properjsHobo2.default)(".about"), "is-about-open");
	  var aboutNavToggle = (0, _properjsHobo2.default)(".nav__link--about");
	  var helloButton = (0, _properjsHobo2.default)('.btn--about');
	  var aboutClose = (0, _properjsHobo2.default)('#about .toggle');
	  var work = (0, _properjsHobo2.default)('.btn--work');
	
	  aboutNavToggle[0].addEventListener("click", function (event) {
	    event.preventDefault();
	    about.toggle();
	  }, false);
	  helloButton[0].addEventListener("click", function (event) {
	    event.preventDefault();
	    about.toggle();
	  }, false);
	  aboutClose[0].addEventListener("click", function (event) {
	    event.preventDefault();
	    about.toggle();
	  }, false);
	  work[0].addEventListener("click", function (event) {
	    event.preventDefault();
	    about.toggle();
	    scrollToElement('#work');
	  }, false);
	})();

/***/ },
/* 19 */
/*!**************************!*\
  !*** ./js/work/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	var _core = __webpack_require__(/*! ../core */ 13);
	
	var core = _interopRequireWildcard(_core);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	
	  var $overlay = (0, _properjsHobo2.default)('<div class="overlay"></div>');
	  var $image = (0, _properjsHobo2.default)('<img class="overlay__image" src="" />');
	
	  $overlay[0].append($image[0]);
	  core.dom.body[0].append($overlay[0]);
	
	  (0, _properjsHobo2.default)(".work__item").on('click', function (e) {
	    e.preventDefault();
	    var src = (0, _properjsHobo2.default)(this)[0].dataset.url;
	    $image[0].src = src;
	    core.dom.html.addClass("is-overlay-open");
	  });
	
	  $overlay.on('click', function (e) {
	    core.dom.html.removeClass("is-overlay-open");
	  });
	})();

/***/ },
/* 20 */
/*!******************************************************!*\
  !*** ./~/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
	 * smoothscroll polyfill - v0.3.4
	 * https://iamdustan.github.io/smoothscroll
	 * 2016 (c) Dustan Kasten, Jeremias Menichelli - MIT License
	 */
	
	(function(w, d, undefined) {
	  'use strict';
	
	  /*
	   * aliases
	   * w: window global object
	   * d: document
	   * undefined: undefined
	   */
	
	  // polyfill
	  function polyfill() {
	    // return when scrollBehavior interface is supported
	    if ('scrollBehavior' in d.documentElement.style) {
	      return;
	    }
	
	    /*
	     * globals
	     */
	    var Element = w.HTMLElement || w.Element;
	    var SCROLL_TIME = 468;
	
	    /*
	     * object gathering original scroll methods
	     */
	    var original = {
	      scroll: w.scroll || w.scrollTo,
	      scrollBy: w.scrollBy,
	      scrollIntoView: Element.prototype.scrollIntoView
	    };
	
	    /*
	     * define timing method
	     */
	    var now = w.performance && w.performance.now
	      ? w.performance.now.bind(w.performance) : Date.now;
	
	    /**
	     * changes scroll position inside an element
	     * @method scrollElement
	     * @param {Number} x
	     * @param {Number} y
	     */
	    function scrollElement(x, y) {
	      this.scrollLeft = x;
	      this.scrollTop = y;
	    }
	
	    /**
	     * returns result of applying ease math function to a number
	     * @method ease
	     * @param {Number} k
	     * @returns {Number}
	     */
	    function ease(k) {
	      return 0.5 * (1 - Math.cos(Math.PI * k));
	    }
	
	    /**
	     * indicates if a smooth behavior should be applied
	     * @method shouldBailOut
	     * @param {Number|Object} x
	     * @returns {Boolean}
	     */
	    function shouldBailOut(x) {
	      if (typeof x !== 'object'
	            || x === null
	            || x.behavior === undefined
	            || x.behavior === 'auto'
	            || x.behavior === 'instant') {
	        // first arg not an object/null
	        // or behavior is auto, instant or undefined
	        return true;
	      }
	
	      if (typeof x === 'object'
	            && x.behavior === 'smooth') {
	        // first argument is an object and behavior is smooth
	        return false;
	      }
	
	      // throw error when behavior is not supported
	      throw new TypeError('behavior not valid');
	    }
	
	    /**
	     * finds scrollable parent of an element
	     * @method findScrollableParent
	     * @param {Node} el
	     * @returns {Node} el
	     */
	    function findScrollableParent(el) {
	      var isBody;
	      var hasScrollableSpace;
	      var hasVisibleOverflow;
	
	      do {
	        el = el.parentNode;
	
	        // set condition variables
	        isBody = el === d.body;
	        hasScrollableSpace =
	          el.clientHeight < el.scrollHeight ||
	          el.clientWidth < el.scrollWidth;
	        hasVisibleOverflow =
	          w.getComputedStyle(el, null).overflow === 'visible';
	      } while (!isBody && !(hasScrollableSpace && !hasVisibleOverflow));
	
	      isBody = hasScrollableSpace = hasVisibleOverflow = null;
	
	      return el;
	    }
	
	    /**
	     * self invoked function that, given a context, steps through scrolling
	     * @method step
	     * @param {Object} context
	     */
	    function step(context) {
	      // call method again on next available frame
	      context.frame = w.requestAnimationFrame(step.bind(w, context));
	
	      var time = now();
	      var value;
	      var currentX;
	      var currentY;
	      var elapsed = (time - context.startTime) / SCROLL_TIME;
	
	      // avoid elapsed times higher than one
	      elapsed = elapsed > 1 ? 1 : elapsed;
	
	      // apply easing to elapsed time
	      value = ease(elapsed);
	
	      currentX = context.startX + (context.x - context.startX) * value;
	      currentY = context.startY + (context.y - context.startY) * value;
	
	      context.method.call(context.scrollable, currentX, currentY);
	
	      // return when end points have been reached
	      if (currentX === context.x && currentY === context.y) {
	        w.cancelAnimationFrame(context.frame);
	        return;
	      }
	    }
	
	    /**
	     * scrolls window with a smooth behavior
	     * @method smoothScroll
	     * @param {Object|Node} el
	     * @param {Number} x
	     * @param {Number} y
	     */
	    function smoothScroll(el, x, y) {
	      var scrollable;
	      var startX;
	      var startY;
	      var method;
	      var startTime = now();
	      var frame;
	
	      // define scroll context
	      if (el === d.body) {
	        scrollable = w;
	        startX = w.scrollX || w.pageXOffset;
	        startY = w.scrollY || w.pageYOffset;
	        method = original.scroll;
	      } else {
	        scrollable = el;
	        startX = el.scrollLeft;
	        startY = el.scrollTop;
	        method = scrollElement;
	      }
	
	      // cancel frame when a scroll event's happening
	      if (frame) {
	        w.cancelAnimationFrame(frame);
	      }
	
	      // scroll looping over a frame
	      step({
	        scrollable: scrollable,
	        method: method,
	        startTime: startTime,
	        startX: startX,
	        startY: startY,
	        x: x,
	        y: y,
	        frame: frame
	      });
	    }
	
	    /*
	     * ORIGINAL METHODS OVERRIDES
	     */
	
	    // w.scroll and w.scrollTo
	    w.scroll = w.scrollTo = function() {
	      // avoid smooth behavior if not required
	      if (shouldBailOut(arguments[0])) {
	        original.scroll.call(
	          w,
	          arguments[0].left || arguments[0],
	          arguments[0].top || arguments[1]
	        );
	        return;
	      }
	
	      // LET THE SMOOTHNESS BEGIN!
	      smoothScroll.call(
	        w,
	        d.body,
	        ~~arguments[0].left,
	        ~~arguments[0].top
	      );
	    };
	
	    // w.scrollBy
	    w.scrollBy = function() {
	      // avoid smooth behavior if not required
	      if (shouldBailOut(arguments[0])) {
	        original.scrollBy.call(
	          w,
	          arguments[0].left || arguments[0],
	          arguments[0].top || arguments[1]
	        );
	        return;
	      }
	
	      // LET THE SMOOTHNESS BEGIN!
	      smoothScroll.call(
	        w,
	        d.body,
	        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
	        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
	      );
	    };
	
	    // Element.prototype.scrollIntoView
	    Element.prototype.scrollIntoView = function() {
	      // avoid smooth behavior if not required
	      if (shouldBailOut(arguments[0])) {
	        original.scrollIntoView.call(this, arguments[0] || true);
	        return;
	      }
	
	      // LET THE SMOOTHNESS BEGIN!
	      var scrollableParent = findScrollableParent(this);
	      var parentRects = scrollableParent.getBoundingClientRect();
	      var clientRects = this.getBoundingClientRect();
	
	      if (scrollableParent !== d.body) {
	        // reveal element inside parent
	        smoothScroll.call(
	          this,
	          scrollableParent,
	          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
	          scrollableParent.scrollTop + clientRects.top - parentRects.top
	        );
	        // reveal parent in viewport
	        w.scrollBy({
	          left: parentRects.left,
	          top: parentRects.top,
	          behavior: 'smooth'
	        });
	      } else {
	        // reveal element in viewport
	        w.scrollBy({
	          left: clientRects.left,
	          top: clientRects.top,
	          behavior: 'smooth'
	        });
	      }
	    };
	  }
	
	  if (true) {
	    // commonjs
	    module.exports = { polyfill: polyfill };
	  } else {
	    // global
	    polyfill();
	  }
	})(window, document);


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map