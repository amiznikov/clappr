(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Clappr"] = factory();
	else
		root["Clappr"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(125);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(71);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(70);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _log = __webpack_require__(32);

var _log2 = _interopRequireDefault(_log);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var slice = Array.prototype.slice;

var eventSplitter = /\s+/;

var eventsApi = function eventsApi(obj, action, name, rest) {
  if (!name) return true;

  // Handle event maps.
  if ((typeof name === 'undefined' ? 'undefined' : (0, _typeof3.default)(name)) === 'object') {
    for (var key in name) {
      obj[action].apply(obj, [key, name[key]].concat(rest));
    }return false;
  }

  // Handle space separated event names.
  if (eventSplitter.test(name)) {
    var names = name.split(eventSplitter);
    for (var i = 0, l = names.length; i < l; i++) {
      obj[action].apply(obj, [names[i]].concat(rest));
    }return false;
  }

  return true;
};

var triggerEvents = function triggerEvents(events, args, klass, name) {
  var ev = void 0,
      i = -1;
  var l = events.length,
      a1 = args[0],
      a2 = args[1],
      a3 = args[2];
  run();

  function run() {
    try {
      switch (args.length) {
        /* eslint-disable curly */
        case 0:
          while (++i < l) {
            (ev = events[i]).callback.call(ev.ctx);
          }return;
        case 1:
          while (++i < l) {
            (ev = events[i]).callback.call(ev.ctx, a1);
          }return;
        case 2:
          while (++i < l) {
            (ev = events[i]).callback.call(ev.ctx, a1, a2);
          }return;
        case 3:
          while (++i < l) {
            (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
          }return;
        default:
          while (++i < l) {
            (ev = events[i]).callback.apply(ev.ctx, args);
          }return;
      }
    } catch (exception) {
      _log2.default.error.apply(_log2.default, [klass, 'error on event', name, 'trigger', '-', exception]);
      run();
    }
  }
};

/**
 * @class Events
 * @constructor
 * @module base
 */

var Events = function () {
  function Events() {
    (0, _classCallCheck3.default)(this, Events);
  }

  /**
   * listen to an event indefinitely, if you want to stop you need to call `off`
   * @method on
   * @param {String} name
   * @param {Function} callback
   * @param {Object} context
   */
  Events.prototype.on = function on(name, callback, context) {
    if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
    this._events || (this._events = {});
    var events = this._events[name] || (this._events[name] = []);
    events.push({ callback: callback, context: context, ctx: context || this });
    return this;
  };

  /**
   * listen to an event only once
   * @method once
   * @param {String} name
   * @param {Function} callback
   * @param {Object} context
   */


  Events.prototype.once = function once(name, callback, context) {
    var _this = this;

    var _once = void 0;
    if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
    var off = function off() {
      return _this.off(name, _once);
    };
    _once = function once() {
      off(name, _once);
      callback.apply(this, arguments);
    };
    return this.on(name, _once, context);
  };

  /**
   * stop listening to an event
   * @method off
   * @param {String} name
   * @param {Function} callback
   * @param {Object} context
   */


  Events.prototype.off = function off(name, callback, context) {
    var retain = void 0,
        ev = void 0,
        events = void 0,
        names = void 0,
        i = void 0,
        l = void 0,
        j = void 0,
        k = void 0;
    if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
    if (!name && !callback && !context) {
      this._events = void 0;
      return this;
    }
    names = name ? [name] : (0, _keys2.default)(this._events);
    // jshint maxdepth:5
    for (i = 0, l = names.length; i < l; i++) {
      name = names[i];
      events = this._events[name];
      if (events) {
        this._events[name] = retain = [];
        if (callback || context) {
          for (j = 0, k = events.length; j < k; j++) {
            ev = events[j];
            if (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) retain.push(ev);
          }
        }
        if (!retain.length) delete this._events[name];
      }
    }
    return this;
  };

  /**
   * triggers an event given its `name`
   * @method trigger
   * @param {String} name
   */


  Events.prototype.trigger = function trigger(name) {
    var klass = this.name || this.constructor.name;
    _log2.default.debug.apply(_log2.default, [klass].concat(Array.prototype.slice.call(arguments)));
    if (!this._events) return this;
    var args = slice.call(arguments, 1);
    if (!eventsApi(this, 'trigger', name, args)) return this;
    var events = this._events[name];
    var allEvents = this._events.all;
    if (events) triggerEvents(events, args, klass, name);
    if (allEvents) triggerEvents(allEvents, arguments, klass, name);
    return this;
  };

  /**
   * stop listening an event for a given object
   * @method stopListening
   * @param {Object} obj
   * @param {String} name
   * @param {Function} callback
   */


  Events.prototype.stopListening = function stopListening(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;
    var remove = !name && !callback;
    if (!callback && (typeof name === 'undefined' ? 'undefined' : (0, _typeof3.default)(name)) === 'object') callback = this;
    if (obj) (listeningTo = {})[obj._listenId] = obj;
    for (var id in listeningTo) {
      obj = listeningTo[id];
      obj.off(name, callback, this);
      if (remove || (0, _keys2.default)(obj._events).length === 0) delete this._listeningTo[id];
    }
    return this;
  };

  Events.register = function register(eventName) {
    Events.Custom || (Events.Custom = {});
    var property = typeof eventName === 'string' && eventName.toUpperCase().trim();

    if (property && !Events.Custom[property]) {
      Events.Custom[property] = property.toLowerCase().split('_').map(function (value, index) {
        return index === 0 ? value : value = value[0].toUpperCase() + value.slice(1);
      }).join('');
    } else _log2.default.error('Events', 'Error when register event: ' + eventName);
  };

  Events.listAvailableCustomEvents = function listAvailableCustomEvents() {
    Events.Custom || (Events.Custom = {});
    return (0, _keys2.default)(Events.Custom).filter(function (property) {
      return typeof Events.Custom[property] === 'string';
    });
  };

  return Events;
}();

/**
 * listen to an event indefinitely for a given `obj`
 * @method listenTo
 * @param {Object} obj
 * @param {String} name
 * @param {Function} callback
 * @param {Object} context
 * @example
 * ```javascript
 * this.listenTo(this.core.playback, Events.PLAYBACK_PAUSE, this.callback)
 * ```
 */
/**
 * listen to an event once for a given `obj`
 * @method listenToOnce
 * @param {Object} obj
 * @param {String} name
 * @param {Function} callback
 * @param {Object} context
 * @example
 * ```javascript
 * this.listenToOnce(this.core.playback, Events.PLAYBACK_PAUSE, this.callback)
 * ```
 */


exports.default = Events;
var listenMethods = { listenTo: 'on', listenToOnce: 'once' };

(0, _keys2.default)(listenMethods).forEach(function (method) {
  Events.prototype[method] = function (obj, name, callback) {
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var id = obj._listenId || (obj._listenId = (0, _utils.uniqueId)('l'));
    listeningTo[id] = obj;
    if (!callback && (typeof name === 'undefined' ? 'undefined' : (0, _typeof3.default)(name)) === 'object') callback = this;
    obj[listenMethods[method]](name, callback, this);
    return this;
  };
});

// PLAYER EVENTS
/**
 * Fired when the player is ready on startup
 *
 * @event PLAYER_READY
 */
Events.PLAYER_READY = 'ready';
/**
 * Fired when player resizes
 *
 * @event PLAYER_RESIZE
 * @param {Object} currentSize an object with the current size
 */
Events.PLAYER_RESIZE = 'resize';
/**
 * Fired when player changes its fullscreen state
 *
 * @event PLAYER_FULLSCREEN
 * @param {Boolean} whether or not the player is on fullscreen mode
 */
Events.PLAYER_FULLSCREEN = 'fullscreen';
/**
 * Fired when player starts to play
 *
 * @event PLAYER_PLAY
 */
Events.PLAYER_PLAY = 'play';
/**
 * Fired when player pauses
 *
 * @event PLAYER_PAUSE
 */
Events.PLAYER_PAUSE = 'pause';
/**
 * Fired when player stops
 *
 * @event PLAYER_STOP
 */
Events.PLAYER_STOP = 'stop';
/**
 * Fired when player ends the video
 *
 * @event PLAYER_ENDED
 */
Events.PLAYER_ENDED = 'ended';
/**
 * Fired when player seeks the video
 *
 * @event PLAYER_SEEK
 * @param {Number} time the current time in seconds
 */
Events.PLAYER_SEEK = 'seek';
/**
 * Fired when player receives an error
 *
 * @event PLAYER_ERROR
 * @param {Object} error the error
 */
Events.PLAYER_ERROR = 'playererror';
/**
 * Fired when there is an error
 *
 * @event ERROR
 * @param {Object} error
 * the error with the following format `{code, description, level, raw, origin, scope}`
 * @param {String} [options.code]
 * error's code: code to identify error in the following format: origin:code
 * @param {String} [options.description]
 * error's description: description of the error
 * @param {String} [options.level]
 * error's level: FATAL or WARN.
 * @param {String} [options.origin]
 * error's origin. Example: hls, html5, etc
 * @param {String} [options.scope]
 * error's scope. Example: playback, container, etc
 * @param {String} [options.raw]
 * raw error: the initial error received
 */
Events.ERROR = 'error';
/**
 * Fired when the time is updated on player
 *
 * @event PLAYER_TIMEUPDATE
 * @param {Object} progress Data
 * progress object
 * @param {Number} [progress.current]
 * current time (in seconds)
 * @param {Number} [progress.total]
 * total time (in seconds)
 */
Events.PLAYER_TIMEUPDATE = 'timeupdate';
/**
 * Fired when player updates its volume
 *
 * @event PLAYER_VOLUMEUPDATE
 * @param {Number} volume the current volume
 */
Events.PLAYER_VOLUMEUPDATE = 'volumeupdate';

/**
 * Fired when subtitle is available
 *
 * @event PLAYER_SUBTITLE_AVAILABLE
 */
Events.PLAYER_SUBTITLE_AVAILABLE = 'subtitleavailable';

// Playback Events
/**
 * Fired when the playback is downloading the media
 *
 * @event PLAYBACK_PROGRESS
 * @param progress {Object}
 * Data progress object
 * @param [progress.start] {Number}
 * start position of buffered content at current position
 * @param [progress.current] {Number}
 * end position of buffered content at current position
 * @param [progress.total] {Number}
 * total content to be downloaded
 * @param buffered {Array}
 * array of buffered segments ({start, end}). [Only for supported playbacks]
 */
Events.PLAYBACK_PROGRESS = 'playback:progress';
/**
 * Fired when the time is updated on playback
 *
 * @event PLAYBACK_TIMEUPDATE
 * @param {Object} progress Data
 * progress object
 * @param {Number} [progress.current]
 * current time (in seconds)
 * @param {Number} [progress.total]
 * total time (in seconds)
 */
Events.PLAYBACK_TIMEUPDATE = 'playback:timeupdate';
/**
 * Fired when playback is ready
 *
 * @event PLAYBACK_READY
 */
Events.PLAYBACK_READY = 'playback:ready';
/**
 * Fired when the playback starts having to buffer because
 * playback can currently not be smooth.
 *
 * This corresponds to the playback `buffering` property being
 * `true`.
 *
 * @event PLAYBACK_BUFFERING
 */
Events.PLAYBACK_BUFFERING = 'playback:buffering';
/**
 * Fired when the playback has enough in the buffer to be
 * able to play smoothly, after previously being unable to
 * do this.
 *
 * This corresponds to the playback `buffering` property being
 * `false`.
 *
 * @event PLAYBACK_BUFFERFULL
 */
Events.PLAYBACK_BUFFERFULL = 'playback:bufferfull';
/**
 * Fired when playback changes any settings (volume, seek and etc)
 *
 * @event PLAYBACK_SETTINGSUPDATE
 */
Events.PLAYBACK_SETTINGSUPDATE = 'playback:settingsupdate';
/**
 * Fired when playback loaded its metadata
 *
 * @event PLAYBACK_LOADEDMETADATA
 * @param {Object} metadata Data
 * settings object
 * @param {Number} [metadata.duration]
 * the playback duration
 * @param {Object} [metadata.data]
 * extra meta data
 */
Events.PLAYBACK_LOADEDMETADATA = 'playback:loadedmetadata';
/**
 * Fired when playback updates its video quality
 *
 * @event PLAYBACK_HIGHDEFINITIONUPDATE
 * @param {Boolean} isHD
 * true when is on HD, false otherwise
 */
Events.PLAYBACK_HIGHDEFINITIONUPDATE = 'playback:highdefinitionupdate';
/**
 * Fired when playback updates its bitrate
 *
 * @event PLAYBACK_BITRATE
 * @param {Object} bitrate Data
 * bitrate object
 * @param {Number} [bitrate.bandwidth]
 * bitrate bandwidth when it's available
 * @param {Number} [bitrate.width]
 * playback width (ex: 720, 640, 1080)
 * @param {Number} [bitrate.height]
 * playback height (ex: 240, 480, 720)
 * @param {Number} [bitrate.level]
 * playback level when it's available, it could be just a map for width (0 => 240, 1 => 480, 2 => 720)
 */
Events.PLAYBACK_BITRATE = 'playback:bitrate';
/**
 * Fired when the playback has its levels
 *
 * @event PLAYBACK_LEVELS_AVAILABLE
 * @param {Array} levels
 * the ordered levels, each one with the following format `{id: 1, label: '500kbps'}` ps: id should be a number >= 0
 * @param {Number} initial
 * the initial level otherwise -1 (AUTO)
 */
Events.PLAYBACK_LEVELS_AVAILABLE = 'playback:levels:available';
/**
 * Fired when the playback starts to switch level
 *
 * @event PLAYBACK_LEVEL_SWITCH_START
 *
 */
Events.PLAYBACK_LEVEL_SWITCH_START = 'playback:levels:switch:start';
/**
 * Fired when the playback ends the level switch
 *
 * @event PLAYBACK_LEVEL_SWITCH_END
 *
 */
Events.PLAYBACK_LEVEL_SWITCH_END = 'playback:levels:switch:end';

/**
 * Fired when playback internal state changes
 *
 * @event PLAYBACK_PLAYBACKSTATE
 * @param {Object} state Data
 * state object
 * @param {String} [state.type]
 * the playback type
 */
Events.PLAYBACK_PLAYBACKSTATE = 'playback:playbackstate';
/**
 * Fired when DVR becomes enabled/disabled.
 *
 * @event PLAYBACK_DVR
 * @param {boolean} state true if dvr enabled
 */
Events.PLAYBACK_DVR = 'playback:dvr';
// TODO doc
Events.PLAYBACK_MEDIACONTROL_DISABLE = 'playback:mediacontrol:disable';
// TODO doc
Events.PLAYBACK_MEDIACONTROL_ENABLE = 'playback:mediacontrol:enable';
/**
 * Fired when the media for a playback ends.
 *
 * @event PLAYBACK_ENDED
 * @param {String} name the name of the playback
 */
Events.PLAYBACK_ENDED = 'playback:ended';
/**
 * Fired when user requests `play()`
 *
 * @event PLAYBACK_PLAY_INTENT
 */
Events.PLAYBACK_PLAY_INTENT = 'playback:play:intent';
/**
 * Fired when user requests `play()`, but firstly we gotta request preroll. it's advisable if user use iframeAPI
 *
 * @event PLAYBACK_PREROLL_REQUEST
 */
Events.PLAYBACK_PREROLL_REQUEST = 'playback:preroll:request';
/**
 * Fired when the media for a playback starts playing.
 * This is not necessarily when the user requests `play()`
 * The media may have to buffer first.
 * I.e. `isPlaying()` might return `true` before this event is fired,
 * because `isPlaying()` represents the intended state.
 *
 * @event PLAYBACK_PLAY
 */
Events.PLAYBACK_PLAY = 'playback:play';
/**
 * Fired when the media for a playback pauses.
 *
 * @event PLAYBACK_PAUSE
 */
Events.PLAYBACK_PAUSE = 'playback:pause';
/**
 * Fired when the media for a playback is seeking.
 *
 * @event PLAYBACK_SEEK
 */
Events.PLAYBACK_SEEK = 'playback:seek';
/**
 * Fired when the media for a playback is seeked.
 *
 * @event PLAYBACK_SEEKED
 */
Events.PLAYBACK_SEEKED = 'playback:seeked';
/**
 * Fired when the media for a playback is stopped.
 *
 * @event PLAYBACK_STOP
 */
Events.PLAYBACK_STOP = 'playback:stop';
/**
 * Fired if an error occurs in the playback.
 *
 * @event PLAYBACK_ERROR
 * @param {Object} error An object containing the error details
 * @param {String} name Playback name
 */
Events.PLAYBACK_ERROR = 'playback:error';
// TODO doc
Events.PLAYBACK_STATS_ADD = 'playback:stats:add';
// TODO doc
Events.PLAYBACK_FRAGMENT_LOADED = 'playback:fragment:loaded';
// TODO doc
Events.PLAYBACK_LEVEL_SWITCH = 'playback:level:switch';
/**
 * Fired when subtitle is available on playback for display
 *
 * @event PLAYBACK_SUBTITLE_AVAILABLE
 */
Events.PLAYBACK_SUBTITLE_AVAILABLE = 'playback:subtitle:available';
/**
 * Fired when playback subtitle track has changed
 *
 * @event CONTAINER_SUBTITLE_CHANGED
 * @param {Object} track Data
 * track object
 * @param {Number} [track.id]
 * selected track id
 */
Events.PLAYBACK_SUBTITLE_CHANGED = 'playback:subtitle:changed';

// Core Events
/**
 * Fired when the containers are created
 *
 * @event CORE_CONTAINERS_CREATED
 */
Events.CORE_CONTAINERS_CREATED = 'core:containers:created';
/**
 * Fired when the options were changed for the core
 *
 * @event CORE_OPTIONS_CHANGE
 */
Events.CORE_OPTIONS_CHANGE = 'core:options:change';
/**
 * Fired after creating containers, when the core is ready
 *
 * @event CORE_READY
 */
Events.CORE_READY = 'core:ready';
/**
 * Fired when the fullscreen state change
 *
 * @event CORE_FULLSCREEN
 * @param {Boolean} whether or not the player is on fullscreen mode
 */
Events.CORE_FULLSCREEN = 'core:fullscreen';
/**
 * Fired when the screen orientation has changed.
 * This event is trigger only for mobile devices.
 *
 * @event CORE_SCREEN_ORIENTATION_CHANGED
 * @param {Object} screen An object with screen orientation
 * screen object
 * @param {Object} [screen.event]
 * window resize event object
 * @param {String} [screen.orientation]
 * screen orientation (ie: 'landscape' or 'portrait')
 */
Events.CORE_SCREEN_ORIENTATION_CHANGED = 'core:screen:orientation:changed';

// Container Events
/**
 * Fired when the container internal state changes
 *
 * @event CONTAINER_PLAYBACKSTATE
 * @param {Object} state Data
 * state object
 * @param {String} [state.type]
 * the playback type
 */
Events.CONTAINER_PLAYBACKSTATE = 'container:playbackstate';
Events.CONTAINER_PLAYBACKDVRSTATECHANGED = 'container:dvr';
/**
 * Fired when the container updates its bitrate
 *
 * @event CONTAINER_BITRATE
 * @param {Object} bitrate Data
 * bitrate object
 * @param {Number} [bitrate.bandwidth]
 * bitrate bandwidth when it's available
 * @param {Number} [bitrate.width]
 * playback width (ex: 720, 640, 1080)
 * @param {Number} [bitrate.height]
 * playback height (ex: 240, 480, 720)
 * @param {Number} [bitrate.level]
 * playback level when it's available, it could be just a map for width (0 => 240, 1 => 480, 2 => 720)
 */
Events.CONTAINER_BITRATE = 'container:bitrate';
Events.CONTAINER_STATS_REPORT = 'container:stats:report';
Events.CONTAINER_DESTROYED = 'container:destroyed';
/**
 * Fired when the container is ready
 *
 * @event CONTAINER_READY
 */
Events.CONTAINER_READY = 'container:ready';
Events.CONTAINER_ERROR = 'container:error';
/**
 * Fired when the container loaded its metadata
 *
 * @event CONTAINER_LOADEDMETADATA
 * @param {Object} metadata Data
 * settings object
 * @param {Number} [metadata.duration]
 * the playback duration
 * @param {Object} [metadata.data]
 * extra meta data
 */
Events.CONTAINER_LOADEDMETADATA = 'container:loadedmetadata';

/**
 * Fired when subtitle is available on container for display
 *
 * @event CONTAINER_SUBTITLE_AVAILABLE
 */
Events.CONTAINER_SUBTITLE_AVAILABLE = 'container:subtitle:available';
/**
 * Fired when subtitle track has changed
 *
 * @event CONTAINER_SUBTITLE_CHANGED
 * @param {Object} track Data
 * track object
 * @param {Number} [track.id]
 * selected track id
 */
Events.CONTAINER_SUBTITLE_CHANGED = 'container:subtitle:changed';

/**
 * Fired when the time is updated on container
 *
 * @event CONTAINER_TIMEUPDATE
 * @param {Object} progress Data
 * progress object
 * @param {Number} [progress.current]
 * current time (in seconds)
 * @param {Number} [progress.total]
 * total time (in seconds)
 */
Events.CONTAINER_TIMEUPDATE = 'container:timeupdate';
/**
 * Fired when the container is downloading the media
 *
 * @event CONTAINER_PROGRESS
 * @param {Object} progress Data
 * progress object
 * @param {Number} [progress.start]
 * initial downloaded content
 * @param {Number} [progress.current]
 * current dowloaded content
 * @param {Number} [progress.total]
 * total content to be downloaded
 */
Events.CONTAINER_PROGRESS = 'container:progress';
Events.CONTAINER_PLAY = 'container:play';
Events.CONTAINER_STOP = 'container:stop';
Events.CONTAINER_PAUSE = 'container:pause';
Events.CONTAINER_ENDED = 'container:ended';
Events.CONTAINER_CLICK = 'container:click';
Events.CONTAINER_DBLCLICK = 'container:dblclick';
Events.CONTAINER_CONTEXTMENU = 'container:contextmenu';
Events.CONTAINER_MOUSE_ENTER = 'container:mouseenter';
Events.CONTAINER_MOUSE_LEAVE = 'container:mouseleave';
/**
 * Fired when the container seeks the video
 *
 * @event CONTAINER_SEEK
 * @param {Number} time the current time in seconds
 */
Events.CONTAINER_SEEK = 'container:seek';
/**
 * Fired when the container was finished the seek video
 *
 * @event CONTAINER_SEEKED
 * @param {Number} time the current time in seconds
 */
Events.CONTAINER_SEEKED = 'container:seeked';
Events.CONTAINER_VOLUME = 'container:volume';
Events.CONTAINER_FULLSCREEN = 'container:fullscreen';
/**
 * Fired when container is buffering
 *
 * @event CONTAINER_STATE_BUFFERING
 */
Events.CONTAINER_STATE_BUFFERING = 'container:state:buffering';
/**
 * Fired when the container filled the buffer
 *
 * @event CONTAINER_STATE_BUFFERFULL
 */
Events.CONTAINER_STATE_BUFFERFULL = 'container:state:bufferfull';
/**
 * Fired when the container changes any settings (volume, seek and etc)
 *
 * @event CONTAINER_SETTINGSUPDATE
 */
Events.CONTAINER_SETTINGSUPDATE = 'container:settingsupdate';
/**
 * Fired when container updates its video quality
 *
 * @event CONTAINER_HIGHDEFINITIONUPDATE
 * @param {Boolean} isHD
 * true when is on HD, false otherwise
 */
Events.CONTAINER_HIGHDEFINITIONUPDATE = 'container:highdefinitionupdate';

/**
 * Fired when the media control shows
 *
 * @event CONTAINER_MEDIACONTROL_SHOW
 */
Events.CONTAINER_MEDIACONTROL_SHOW = 'container:mediacontrol:show';
/**
 * Fired when the media control hides
 *
 * @event CONTAINER_MEDIACONTROL_HIDE
 */
Events.CONTAINER_MEDIACONTROL_HIDE = 'container:mediacontrol:hide';

Events.CONTAINER_MEDIACONTROL_DISABLE = 'container:mediacontrol:disable';
Events.CONTAINER_MEDIACONTROL_ENABLE = 'container:mediacontrol:enable';
Events.CONTAINER_STATS_ADD = 'container:stats:add';
/**
 * Fired when the options were changed for the container
 *
 * @event CONTAINER_OPTIONS_CHANGE
 */
Events.CONTAINER_OPTIONS_CHANGE = 'container:options:change';

// MediaControl Events
Events.MEDIACONTROL_RENDERED = 'mediacontrol:rendered';
/**
 * Fired when the player enters/exit on fullscreen
 *
 * @event MEDIACONTROL_FULLSCREEN
 */
Events.MEDIACONTROL_FULLSCREEN = 'mediacontrol:fullscreen';
/**
 * Fired when the media control shows
 *
 * @event MEDIACONTROL_SHOW
 */
Events.MEDIACONTROL_SHOW = 'mediacontrol:show';
/**
 * Fired when the media control hides
 *
 * @event MEDIACONTROL_HIDE
 */
Events.MEDIACONTROL_HIDE = 'mediacontrol:hide';
/**
 * Fired when mouse enters on the seekbar
 *
 * @event MEDIACONTROL_MOUSEMOVE_SEEKBAR
 * @param {Object} event
 * the javascript event
 */
Events.MEDIACONTROL_MOUSEMOVE_SEEKBAR = 'mediacontrol:mousemove:seekbar';
/**
 * Fired when mouse leaves the seekbar
 *
 * @event MEDIACONTROL_MOUSELEAVE_SEEKBAR
 * @param {Object} event
 * the javascript event
 */
Events.MEDIACONTROL_MOUSELEAVE_SEEKBAR = 'mediacontrol:mouseleave:seekbar';
/**
 * Fired when the media is being played
 *
 * @event MEDIACONTROL_PLAYING
 */
Events.MEDIACONTROL_PLAYING = 'mediacontrol:playing';
/**
 * Fired when the media is not being played
 *
 * @event MEDIACONTROL_NOTPLAYING
 */
Events.MEDIACONTROL_NOTPLAYING = 'mediacontrol:notplaying';
/**
 * Fired when the container was changed
 *
 * @event MEDIACONTROL_CONTAINERCHANGED
 */
Events.MEDIACONTROL_CONTAINERCHANGED = 'mediacontrol:containerchanged';
/**
 * Fired when the options were changed for the mediacontrol
 *
 * @event MEDIACONTROL_OPTIONS_CHANGE
 */
Events.MEDIACONTROL_OPTIONS_CHANGE = 'mediacontrol:options:change';
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DomRecycler = exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.QueryString = exports.Config = exports.Fullscreen = undefined;

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty = __webpack_require__(70);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(131);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

exports.assign = assign;
exports.extend = extend;
exports.formatTime = formatTime;
exports.seekStringToSeconds = seekStringToSeconds;
exports.uniqueId = uniqueId;
exports.isNumber = isNumber;
exports.currentScriptUrl = currentScriptUrl;
exports.getBrowserLanguage = getBrowserLanguage;
exports.now = now;
exports.removeArrayItem = removeArrayItem;

__webpack_require__(134);

var _browser = __webpack_require__(31);

var _browser2 = _interopRequireDefault(_browser);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assign(obj, source) {
  if (source) {
    for (var prop in source) {
      var propDescriptor = (0, _getOwnPropertyDescriptor2.default)(source, prop);
      propDescriptor ? (0, _defineProperty2.default)(obj, prop, propDescriptor) : obj[prop] = source[prop];
    }
  }
  return obj;
} // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
/*jshint -W079 */

function extend(parent, properties) {
  var Surrogate = function (_parent) {
    (0, _inherits3.default)(Surrogate, _parent);

    function Surrogate() {
      (0, _classCallCheck3.default)(this, Surrogate);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = (0, _possibleConstructorReturn3.default)(this, _parent.call.apply(_parent, [this].concat(args)));

      if (properties.initialize) properties.initialize.apply(_this, args);

      return _this;
    }

    return Surrogate;
  }(parent);

  assign(Surrogate.prototype, properties);
  return Surrogate;
}

function formatTime(time, paddedHours) {
  if (!isFinite(time)) return '--:--';

  time = time * 1000;
  time = parseInt(time / 1000);
  var seconds = time % 60;
  time = parseInt(time / 60);
  var minutes = time % 60;
  time = parseInt(time / 60);
  var hours = time % 24;
  var days = parseInt(time / 24);
  var out = '';
  if (days && days > 0) {
    out += days + ':';
    if (hours < 1) out += '00:';
  }
  if (hours && hours > 0 || paddedHours) out += ('0' + hours).slice(-2) + ':';
  out += ('0' + minutes).slice(-2) + ':';
  out += ('0' + seconds).slice(-2);
  return out.trim();
}

var Fullscreen = exports.Fullscreen = {
  isFullscreen: function isFullscreen() {
    return !!(document.webkitFullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement);
  },
  requestFullscreen: function requestFullscreen(el) {
    if (el.requestFullscreen) el.requestFullscreen();else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();else if (el.mozRequestFullScreen) el.mozRequestFullScreen();else if (el.msRequestFullscreen) el.msRequestFullscreen();else if (el.querySelector && el.querySelector('video') && el.querySelector('video').webkitEnterFullScreen) el.querySelector('video').webkitEnterFullScreen();else if (el.webkitEnterFullScreen) el.webkitEnterFullScreen();
  },
  cancelFullscreen: function cancelFullscreen() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

    if (el.exitFullscreen) el.exitFullscreen();else if (el.webkitCancelFullScreen) el.webkitCancelFullScreen();else if (el.webkitExitFullscreen) el.webkitExitFullscreen();else if (el.mozCancelFullScreen) el.mozCancelFullScreen();else if (el.msExitFullscreen) el.msExitFullscreen();
  },
  fullscreenEnabled: function fullscreenEnabled() {
    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
  }
};

var Config = exports.Config = function () {
  function Config() {
    (0, _classCallCheck3.default)(this, Config);
  }

  Config._defaultConfig = function _defaultConfig() {
    return {
      volume: {
        value: 100,
        parse: parseInt
      }
    };
  };

  Config._defaultValueFor = function _defaultValueFor(key) {
    try {
      return this._defaultConfig()[key].parse(this._defaultConfig()[key].value);
    } catch (e) {
      return undefined;
    }
  };

  Config._createKeyspace = function _createKeyspace(key) {
    return 'clappr.' + document.domain + '.' + key;
  };

  Config.restore = function restore(key) {
    if (_browser2.default.hasLocalstorage && localStorage[this._createKeyspace(key)]) return this._defaultConfig()[key].parse(localStorage[this._createKeyspace(key)]);

    return this._defaultValueFor(key);
  };

  Config.persist = function persist(key, value) {
    if (_browser2.default.hasLocalstorage) {
      try {
        localStorage[this._createKeyspace(key)] = value;
        return true;
      } catch (e) {
        return false;
      }
    }
  };

  return Config;
}();

var QueryString = exports.QueryString = function () {
  function QueryString() {
    (0, _classCallCheck3.default)(this, QueryString);
  }

  QueryString.parse = function parse(paramsString) {
    var match = void 0;
    var pl = /\+/g,
        // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
        decode = function decode(s) {
      return decodeURIComponent(s.replace(pl, ' '));
    },
        params = {};
    while (match = search.exec(paramsString)) {
      // eslint-disable-line no-cond-assign
      params[decode(match[1]).toLowerCase()] = decode(match[2]);
    }
    return params;
  };

  (0, _createClass3.default)(QueryString, null, [{
    key: 'params',
    get: function get() {
      var query = window.location.search.substring(1);
      if (query !== this.query) {
        this._urlParams = this.parse(query);
        this.query = query;
      }
      return this._urlParams;
    }
  }, {
    key: 'hashParams',
    get: function get() {
      var hash = window.location.hash.substring(1);
      if (hash !== this.hash) {
        this._hashParams = this.parse(hash);
        this.hash = hash;
      }
      return this._hashParams;
    }
  }]);
  return QueryString;
}();

function seekStringToSeconds() {
  var paramName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 't';

  var seconds = 0;
  var seekString = QueryString.params[paramName] || QueryString.hashParams[paramName] || '';
  var parts = seekString.match(/[0-9]+[hms]+/g) || [];
  if (parts.length > 0) {
    var factor = { 'h': 3600, 'm': 60, 's': 1 };
    parts.forEach(function (el) {
      if (el) {
        var suffix = el[el.length - 1];
        var time = parseInt(el.slice(0, el.length - 1), 10);
        seconds += time * factor[suffix];
      }
    });
  } else if (seekString) {
    seconds = parseInt(seekString, 10);
  }

  return seconds;
}

var idsCounter = {};

function uniqueId(prefix) {
  idsCounter[prefix] || (idsCounter[prefix] = 0);
  var id = ++idsCounter[prefix];
  return prefix + id;
}

function isNumber(value) {
  return value - parseFloat(value) + 1 >= 0;
}

function currentScriptUrl() {
  var scripts = document.getElementsByTagName('script');
  return scripts.length ? scripts[scripts.length - 1].src : '';
}

var requestAnimationFrame = exports.requestAnimationFrame = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
  window.setTimeout(fn, 1000 / 60);
}).bind(window);

var cancelAnimationFrame = exports.cancelAnimationFrame = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout).bind(window);

function getBrowserLanguage() {
  return window.navigator && window.navigator.language;
}

function now() {
  if (window.performance && window.performance.now) return performance.now();

  return Date.now();
}

// remove the item from the array if it exists in the array
function removeArrayItem(arr, item) {
  var i = arr.indexOf(item);
  if (i >= 0) arr.splice(i, 1);
}

// Simple Zepto element factory with video recycle feature.
var videoStack = [];

var DomRecycler = exports.DomRecycler = function () {
  function DomRecycler() {
    (0, _classCallCheck3.default)(this, DomRecycler);
  }

  DomRecycler.configure = function configure(options) {
    this.options = _clapprZepto2.default.extend(this.options, options);
  };

  DomRecycler.create = function create(name) {
    if (this.options.recycleVideo && name === 'video' && videoStack.length > 0) return videoStack.shift();

    return (0, _clapprZepto2.default)('<' + name + '>');
  };

  DomRecycler.garbage = function garbage($el) {
    // Expect Zepto collection with single element (does not iterate!)
    if (!this.options.recycleVideo || $el[0].tagName.toUpperCase() !== 'VIDEO') return;
    $el.children().remove();
    videoStack.push($el);
  };

  return DomRecycler;
}();

DomRecycler.options = { recycleVideo: false };

exports.default = {
  Config: Config,
  Fullscreen: Fullscreen,
  QueryString: QueryString,
  DomRecycler: DomRecycler,
  extend: extend,
  formatTime: formatTime,
  seekStringToSeconds: seekStringToSeconds,
  uniqueId: uniqueId,
  currentScriptUrl: currentScriptUrl,
  isNumber: isNumber,
  requestAnimationFrame: requestAnimationFrame,
  cancelAnimationFrame: cancelAnimationFrame,
  getBrowserLanguage: getBrowserLanguage,
  now: now,
  removeArrayItem: removeArrayItem
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* Zepto v1.2.0 - zepto ajax callbacks deferred event ie selector - zeptojs.com/license */


var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,
    document = window.document,
    elementDisplay = {}, classCache = {},
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,
    capitalRE = /([A-Z])/g,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    simpleSelectorRE = /^[\w-]*$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div'),
    propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
    isArray = Array.isArray ||
      function(object){ return object instanceof Array }

  zepto.matches = function(element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false
    var matchesSelector = element.matches || element.webkitMatchesSelector ||
                          element.mozMatchesSelector || element.oMatchesSelector ||
                          element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  }

  function likeArray(obj) {
    var length = !!obj && 'length' in obj && obj.length,
      type = $.type(obj)

    return 'function' != type && !isWindow(obj) && (
      'array' == type || length === 0 ||
        (typeof length == 'number' && length > 0 && (length - 1) in obj)
    )
  }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  function Z(dom, selector) {
    var i, len = dom ? dom.length : 0
    for (i = 0; i < len; i++) this[i] = dom[i]
    this.length = len
    this.selector = selector || ''
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overridden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    var dom, nodes, container

    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
      if (!(name in containers)) name = '*'

      container = containers[name]
      container.innerHTML = '' + html
      dom = $.each(slice.call(container.childNodes), function(){
        container.removeChild(this)
      })
    }

    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }

    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. This method can be overridden in plugins.
  zepto.Z = function(dom, selector) {
    return new Z(dom, selector)
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overridden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overridden in plugins.
  zepto.init = function(selector, context) {
    var dom
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // Optimize for string selectors
    else if (typeof selector == 'string') {
      selector = selector.trim()
      // If it's a html fragment, create nodes from it
      // Note: In both Chrome 21 and Firefox 15, DOM error 12
      // is thrown if the fragment doesn't begin with <
      if (selector[0] == '<' && fragmentRE.test(selector))
        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // If it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, just return it
    else if (zepto.isZ(selector)) return selector
    else {
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes.
      else if (isObject(selector))
        dom = [selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // create a new Zepto collection from the nodes found
    return zepto.Z(dom, selector)
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overridden in plugins.
  zepto.qsa = function(element, selector){
    var found,
        maybeID = selector[0] == '#',
        maybeClass = !maybeID && selector[0] == '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
        isSimple = simpleSelectorRE.test(nameOnly)
    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById
      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :
      slice.call(
        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
          element.getElementsByTagName(selector) : // Or a tag
          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      )
  }

  function filtered(nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = document.documentElement.contains ?
    function(parent, node) {
      return parent !== node && parent.contains(node)
    } :
    function(parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent) return true
      return false
    }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className || '',
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          +value + "" == value ? +value :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.isNumeric = function(val) {
    var num = Number(val), type = typeof val
    return val != null && type != 'boolean' &&
      (type != 'string' || val.length) &&
      !isNaN(num) && isFinite(num) || false
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) {
    return str == null ? "" : String.prototype.trim.call(str)
  }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }
  $.noop = function() {}

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    constructor: zepto.Z,
    length: 0,

    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    splice: emptyArray.splice,
    indexOf: emptyArray.indexOf,
    concat: function(){
      var i, value, args = []
      for (i = 0; i < arguments.length; i++) {
        value = arguments[i]
        args[i] = zepto.isZ(value) ? value.toArray() : value
      }
      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)
    },

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (!selector) result = $()
      else if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var nodes = [], collection = typeof selector == 'object' && $(selector)
      this.each(function(_, node){
        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
          node = node !== context && !isDocument(node) && node.parentNode
        if (node && nodes.indexOf(node) < 0) nodes.push(node)
      })
      return $(nodes)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = '')
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return 0 in arguments ?
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        }) :
        (0 in this ? this[0].innerHTML : null)
    },
    text: function(text){
      return 0 in arguments ?
        this.each(function(idx){
          var newText = funcArg(this, text, idx, this.textContent)
          this.textContent = newText == null ? '' : ''+newText
        }) :
        (0 in this ? this.pluck('textContent').join("") : null)
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && !(1 in arguments)) ?
        (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
        setAttribute(this, attribute)
      }, this)})
    },
    prop: function(name, value){
      name = propMap[name] || name
      return (1 in arguments) ?
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        }) :
        (this[0] && this[0][name])
    },
    removeProp: function(name){
      name = propMap[name] || name
      return this.each(function(){ delete this[name] })
    },
    data: function(name, value){
      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

      var data = (1 in arguments) ?
        this.attr(attrName, value) :
        this.attr(attrName)

      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      if (0 in arguments) {
        if (value == null) value = ""
        return this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        })
      } else {
        return this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
           this[0].value)
      }
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (!this.length) return null
      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))
        return {top: 0, left: 0}
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2) {
        var element = this[0]
        if (typeof property == 'string') {
          if (!element) return
          return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)
        } else if (isArray(property)) {
          if (!element) return
          var props = {}
          var computedStyle = getComputedStyle(element, '')
          $.each(property, function(_, prop){
            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
          })
          return props
        }
      }

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      if (!name) return false
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      if (!name) return this
      return this.each(function(idx){
        if (!('className' in this)) return
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (!('className' in this)) return
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      if (!name) return this
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(value){
      if (!this.length) return
      var hasScrollTop = 'scrollTop' in this[0]
      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
      return this.each(hasScrollTop ?
        function(){ this.scrollTop = value } :
        function(){ this.scrollTo(this.scrollX, value) })
    },
    scrollLeft: function(value){
      if (!this.length) return
      var hasScrollLeft = 'scrollLeft' in this[0]
      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
      return this.each(hasScrollLeft ?
        function(){ this.scrollLeft = value } :
        function(){ this.scrollTo(value, this.scrollY) })
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    var dimensionProperty =
      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

    $.fn[dimension] = function(value){
      var offset, el = this[0]
      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var i = 0, len = node.childNodes.length; i < len; i++)
      traverseNode(node.childNodes[i], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            var arr = []
            argType = type(arg)
            if (argType == "array") {
              arg.forEach(function(el) {
                if (el.nodeType !== undefined) return arr.push(el)
                else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())
                arr = arr.concat(zepto.fragment(el))
              })
              return arr
            }
            return argType == "object" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        var parentInDocument = $.contains(document.documentElement, parent)

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          parent.insertBefore(node, target)
          if (parentInDocument) traverseNode(node, function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src){
              var target = el.ownerDocument ? el.ownerDocument.defaultView : window
              target['eval'].call(target, el.innerHTML)
            }
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

window.Zepto = Zepto
window.$ === undefined && (window.$ = Zepto)

;(function($){
  var jsonpID = +new Date(),
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/,
      originAnchor = document.createElement('a')

  originAnchor.href = window.location.href

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.isDefaultPrevented()
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings, deferred) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    if (deferred) deferred.resolveWith(context, [data, status, xhr])
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings, deferred) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    if (deferred) deferred.rejectWith(context, [xhr, type, error])
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  function ajaxDataFilter(data, type, settings) {
    if (settings.dataFilter == empty) return data
    var context = settings.context
    return settings.dataFilter.call(context, data, type)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options, deferred){
    if (!('type' in options)) return $.ajax(options)

    var _callbackName = options.jsonpCallback,
      callbackName = ($.isFunction(_callbackName) ?
        _callbackName() : _callbackName) || ('Zepto' + (jsonpID++)),
      script = document.createElement('script'),
      originalCallback = window[callbackName],
      responseData,
      abort = function(errorType) {
        $(script).triggerHandler('error', errorType || 'abort')
      },
      xhr = { abort: abort }, abortTimeout

    if (deferred) deferred.promise(xhr)

    $(script).on('load error', function(e, errorType){
      clearTimeout(abortTimeout)
      $(script).off().remove()

      if (e.type == 'error' || !responseData) {
        ajaxError(null, errorType || 'error', xhr, options, deferred)
      } else {
        ajaxSuccess(responseData[0], xhr, options, deferred)
      }

      window[callbackName] = originalCallback
      if (responseData && $.isFunction(originalCallback))
        originalCallback(responseData[0])

      originalCallback = responseData = undefined
    })

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return xhr
    }

    window[callbackName] = function(){
      responseData = arguments
    }

    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
    document.head.appendChild(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    // IIS returns Javascript as "application/x-javascript"
    accepts: {
      script: 'text/javascript, application/javascript, application/x-javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true,
    //Used to handle the raw response data of XMLHttpRequest.
    //This is a pre-filtering function to sanitize the response.
    //The sanitized response should be returned
    dataFilter: empty
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    if (query == '') return url
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType))
      options.url = appendQuery(options.url, options.data), options.data = undefined
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {}),
        deferred = $.Deferred && $.Deferred(),
        urlAnchor, hashIndex
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) {
      urlAnchor = document.createElement('a')
      urlAnchor.href = settings.url
      // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
      urlAnchor.href = urlAnchor.href
      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
    }

    if (!settings.url) settings.url = window.location.toString()
    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)
    serializeData(settings)

    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
    if (hasPlaceholder) dataType = 'jsonp'

    if (settings.cache === false || (
         (!options || options.cache !== true) &&
         ('script' == dataType || 'jsonp' == dataType)
        ))
      settings.url = appendQuery(settings.url, '_=' + Date.now())

    if ('jsonp' == dataType) {
      if (!hasPlaceholder)
        settings.url = appendQuery(settings.url,
          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
      return $.ajaxJSONP(settings, deferred)
    }

    var mime = settings.accepts[dataType],
        headers = { },
        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(),
        nativeSetHeader = xhr.setRequestHeader,
        abortTimeout

    if (deferred) deferred.promise(xhr)

    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
    setHeader('Accept', mime || '*/*')
    if (mime = settings.mimeType || mime) {
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
    xhr.setRequestHeader = setHeader

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))

          if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob')
            result = xhr.response
          else {
            result = xhr.responseText

            try {
              // http://perfectionkills.com/global-eval-what-are-the-options/
              // sanitize response accordingly if data filter callback provided
              result = ajaxDataFilter(result, dataType, settings)
              if (dataType == 'script')    (1,eval)(result)
              else if (dataType == 'xml')  result = xhr.responseXML
              else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
            } catch (e) { error = e }

            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred)
          }

          ajaxSuccess(result, xhr, settings, deferred)
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
        }
      }
    }

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      ajaxError(null, 'abort', xhr, settings, deferred)
      return xhr
    }

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings, deferred)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    if ($.isFunction(data)) dataType = success, success = data, data = undefined
    if (!$.isFunction(success)) dataType = success, success = undefined
    return {
      url: url
    , data: data
    , success: success
    , dataType: dataType
    }
  }

  $.get = function(/* url, data, success, dataType */){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(/* url, data, success, dataType */){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(/* url, data, success */){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope :
        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(key, value) {
      if ($.isFunction(value)) value = value()
      if (value == null) value = ""
      this.push(escape(key) + '=' + escape(value))
    }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)

;(function($){
  // Create a collection of callbacks to be fired in a sequence, with configurable behaviour
  // Option flags:
  //   - once: Callbacks fired at most one time.
  //   - memory: Remember the most recent context and arguments
  //   - stopOnFalse: Cease iterating over callback list
  //   - unique: Permit adding at most one instance of the same callback
  $.Callbacks = function(options) {
    options = $.extend({}, options)

    var memory, // Last fire value (for non-forgettable lists)
        fired,  // Flag to know if list was already fired
        firing, // Flag to know if list is currently firing
        firingStart, // First callback to fire (used internally by add and fireWith)
        firingLength, // End of the loop when firing
        firingIndex, // Index of currently firing callback (modified by remove if needed)
        list = [], // Actual callback list
        stack = !options.once && [], // Stack of fire calls for repeatable lists
        fire = function(data) {
          memory = options.memory && data
          fired = true
          firingIndex = firingStart || 0
          firingStart = 0
          firingLength = list.length
          firing = true
          for ( ; list && firingIndex < firingLength ; ++firingIndex ) {
            if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
              memory = false
              break
            }
          }
          firing = false
          if (list) {
            if (stack) stack.length && fire(stack.shift())
            else if (memory) list.length = 0
            else Callbacks.disable()
          }
        },

        Callbacks = {
          add: function() {
            if (list) {
              var start = list.length,
                  add = function(args) {
                    $.each(args, function(_, arg){
                      if (typeof arg === "function") {
                        if (!options.unique || !Callbacks.has(arg)) list.push(arg)
                      }
                      else if (arg && arg.length && typeof arg !== 'string') add(arg)
                    })
                  }
              add(arguments)
              if (firing) firingLength = list.length
              else if (memory) {
                firingStart = start
                fire(memory)
              }
            }
            return this
          },
          remove: function() {
            if (list) {
              $.each(arguments, function(_, arg){
                var index
                while ((index = $.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1)
                  // Handle firing indexes
                  if (firing) {
                    if (index <= firingLength) --firingLength
                    if (index <= firingIndex) --firingIndex
                  }
                }
              })
            }
            return this
          },
          has: function(fn) {
            return !!(list && (fn ? $.inArray(fn, list) > -1 : list.length))
          },
          empty: function() {
            firingLength = list.length = 0
            return this
          },
          disable: function() {
            list = stack = memory = undefined
            return this
          },
          disabled: function() {
            return !list
          },
          lock: function() {
            stack = undefined
            if (!memory) Callbacks.disable()
            return this
          },
          locked: function() {
            return !stack
          },
          fireWith: function(context, args) {
            if (list && (!fired || stack)) {
              args = args || []
              args = [context, args.slice ? args.slice() : args]
              if (firing) stack.push(args)
              else fire(args)
            }
            return this
          },
          fire: function() {
            return Callbacks.fireWith(this, arguments)
          },
          fired: function() {
            return !!fired
          }
        }

    return Callbacks
  }
})(Zepto)

;(function($){
  var slice = Array.prototype.slice

  function Deferred(func) {
    var tuples = [
          // action, add listener, listener list, final state
          [ "resolve", "done", $.Callbacks({once:1, memory:1}), "resolved" ],
          [ "reject", "fail", $.Callbacks({once:1, memory:1}), "rejected" ],
          [ "notify", "progress", $.Callbacks({memory:1}) ]
        ],
        state = "pending",
        promise = {
          state: function() {
            return state
          },
          always: function() {
            deferred.done(arguments).fail(arguments)
            return this
          },
          then: function(/* fnDone [, fnFailed [, fnProgress]] */) {
            var fns = arguments
            return Deferred(function(defer){
              $.each(tuples, function(i, tuple){
                var fn = $.isFunction(fns[i]) && fns[i]
                deferred[tuple[1]](function(){
                  var returned = fn && fn.apply(this, arguments)
                  if (returned && $.isFunction(returned.promise)) {
                    returned.promise()
                      .done(defer.resolve)
                      .fail(defer.reject)
                      .progress(defer.notify)
                  } else {
                    var context = this === promise ? defer.promise() : this,
                        values = fn ? [returned] : arguments
                    defer[tuple[0] + "With"](context, values)
                  }
                })
              })
              fns = null
            }).promise()
          },

          promise: function(obj) {
            return obj != null ? $.extend( obj, promise ) : promise
          }
        },
        deferred = {}

    $.each(tuples, function(i, tuple){
      var list = tuple[2],
          stateString = tuple[3]

      promise[tuple[1]] = list.add

      if (stateString) {
        list.add(function(){
          state = stateString
        }, tuples[i^1][2].disable, tuples[2][2].lock)
      }

      deferred[tuple[0]] = function(){
        deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments)
        return this
      }
      deferred[tuple[0] + "With"] = list.fireWith
    })

    promise.promise(deferred)
    if (func) func.call(deferred, deferred)
    return deferred
  }

  $.when = function(sub) {
    var resolveValues = slice.call(arguments),
        len = resolveValues.length,
        i = 0,
        remain = len !== 1 || (sub && $.isFunction(sub.promise)) ? len : 0,
        deferred = remain === 1 ? sub : Deferred(),
        progressValues, progressContexts, resolveContexts,
        updateFn = function(i, ctx, val){
          return function(value){
            ctx[i] = this
            val[i] = arguments.length > 1 ? slice.call(arguments) : value
            if (val === progressValues) {
              deferred.notifyWith(ctx, val)
            } else if (!(--remain)) {
              deferred.resolveWith(ctx, val)
            }
          }
        }

    if (len > 1) {
      progressValues = new Array(len)
      progressContexts = new Array(len)
      resolveContexts = new Array(len)
      for ( ; i < len; ++i ) {
        if (resolveValues[i] && $.isFunction(resolveValues[i].promise)) {
          resolveValues[i].promise()
            .done(updateFn(i, resolveContexts, resolveValues))
            .fail(deferred.reject)
            .progress(updateFn(i, progressContexts, progressValues))
        } else {
          --remain
        }
      }
    }
    if (!remain) deferred.resolveWith(resolveContexts, resolveValues)
    return deferred.promise()
  }

  $.Deferred = Deferred
})(Zepto)

;(function($){
  var _zid = 1, undefined,
      slice = Array.prototype.slice,
      isFunction = $.isFunction,
      isString = function(obj){ return typeof obj == 'string' },
      handlers = {},
      specialEvents={},
      focusinSupported = 'onfocusin' in window,
      focus = { focus: 'focusin', blur: 'focusout' },
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (!focusinSupported && (handler.e in focus)) ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || (focusinSupported && focus[type]) || type
  }

  function add(element, events, fn, data, selector, delegator, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    events.split(/\s/).forEach(function(event){
      if (event == 'ready') return $(document).ready(fn)
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = delegator
      var callback  = delegator || fn
      handler.proxy = function(e){
        e = compatible(e)
        if (e.isImmediatePropagationStopped()) return
        e.data = data
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      if ('addEventListener' in element)
        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    ;(events || '').split(/\s/).forEach(function(event){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
      if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    var args = (2 in arguments) && slice.call(arguments, 2)
    if (isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn)
        return $.proxy.apply(null, args)
      } else {
        return $.proxy(fn[context], fn)
      }
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, data, callback){
    return this.on(event, data, callback)
  }
  $.fn.unbind = function(event, callback){
    return this.off(event, callback)
  }
  $.fn.one = function(event, selector, data, callback){
    return this.on(event, selector, data, callback, 1)
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }

  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event)

      $.each(eventMethods, function(name, predicate) {
        var sourceMethod = source[name]
        event[name] = function(){
          this[predicate] = returnTrue
          return sourceMethod && sourceMethod.apply(source, arguments)
        }
        event[predicate] = returnFalse
      })

      event.timeStamp || (event.timeStamp = Date.now())

      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
          'returnValue' in source ? source.returnValue === false :
          source.getPreventDefault && source.getPreventDefault())
        event.isDefaultPrevented = returnTrue
    }
    return event
  }

  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    return compatible(proxy, event)
  }

  $.fn.delegate = function(selector, event, callback){
    return this.on(event, selector, callback)
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.off(event, selector, callback)
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, data, callback, one){
    var autoRemove, delegator, $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.on(type, selector, data, fn, one)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = data, data = selector, selector = undefined
    if (callback === undefined || data === false)
      callback = data, data = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(_, element){
      if (one) autoRemove = function(e){
        remove(element, e.type, callback)
        return callback.apply(this, arguments)
      }

      if (selector) delegator = function(e){
        var evt, match = $(e.target).closest(selector, element).get(0)
        if (match && match !== element) {
          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
        }
      }

      add(element, event, callback, data, selector, delegator || autoRemove)
    })
  }
  $.fn.off = function(event, selector, callback){
    var $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.off(type, selector, fn)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = selector, selector = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.trigger = function(event, args){
    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
    event._args = args
    return this.each(function(){
      // handle focus(), blur() by calling them directly
      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
      // items in the collection might not be DOM elements
      else if ('dispatchEvent' in this) this.dispatchEvent(event)
      else $(this).triggerHandler(event, args)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, args){
    var e, result
    this.each(function(i, element){
      e = createProxy(isString(event) ? $.Event(event) : event)
      e._args = args
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return (0 in arguments) ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  $.Event = function(type, props) {
    if (!isString(type)) props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true)
    return compatible(event)
  }

})(Zepto)

;(function(){
  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined)
  } catch(e) {
    var nativeGetComputedStyle = getComputedStyle
    window.getComputedStyle = function(element, pseudoElement){
      try {
        return nativeGetComputedStyle(element, pseudoElement)
      } catch(e) {
        return null
      }
    }
  }
})()

;(function($){
  var zepto = $.zepto, oldQsa = zepto.qsa, oldMatches = zepto.matches

  function visible(elem){
    elem = $(elem)
    return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
  }

  // Implements a subset from:
  // http://api.jquery.com/category/selectors/jquery-selector-extensions/
  //
  // Each filter function receives the current index, all nodes in the
  // considered set, and a value if there were parentheses. The value
  // of `this` is the node currently being considered. The function returns the
  // resulting node(s), null, or undefined.
  //
  // Complex selectors are not supported:
  //   li:has(label:contains("foo")) + li:has(label:contains("bar"))
  //   ul.inner:first > li
  var filters = $.expr[':'] = {
    visible:  function(){ if (visible(this)) return this },
    hidden:   function(){ if (!visible(this)) return this },
    selected: function(){ if (this.selected) return this },
    checked:  function(){ if (this.checked) return this },
    parent:   function(){ return this.parentNode },
    first:    function(idx){ if (idx === 0) return this },
    last:     function(idx, nodes){ if (idx === nodes.length - 1) return this },
    eq:       function(idx, _, value){ if (idx === value) return this },
    contains: function(idx, _, text){ if ($(this).text().indexOf(text) > -1) return this },
    has:      function(idx, _, sel){ if (zepto.qsa(this, sel).length) return this }
  }

  var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
      childRe  = /^\s*>/,
      classTag = 'Zepto' + (+new Date())

  function process(sel, fn) {
    // quote the hash in `a[href^=#]` expression
    sel = sel.replace(/=#\]/g, '="#"]')
    var filter, arg, match = filterRe.exec(sel)
    if (match && match[2] in filters) {
      filter = filters[match[2]], arg = match[3]
      sel = match[1]
      if (arg) {
        var num = Number(arg)
        if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '')
        else arg = num
      }
    }
    return fn(sel, filter, arg)
  }

  zepto.qsa = function(node, selector) {
    return process(selector, function(sel, filter, arg){
      try {
        var taggedParent
        if (!sel && filter) sel = '*'
        else if (childRe.test(sel))
          // support "> *" child queries by tagging the parent node with a
          // unique class and prepending that classname onto the selector
          taggedParent = $(node).addClass(classTag), sel = '.'+classTag+' '+sel

        var nodes = oldQsa(node, sel)
      } catch(e) {
        console.error('error performing selector: %o', selector)
        throw e
      } finally {
        if (taggedParent) taggedParent.removeClass(classTag)
      }
      return !filter ? nodes :
        zepto.uniq($.map(nodes, function(n, i){ return filter.call(n, i, nodes, arg) }))
    })
  }

  zepto.matches = function(node, selector){
    return process(selector, function(sel, filter, arg){
      return (!sel || oldMatches(node, sel)) &&
        (!filter || filter.call(node, null, arg) === node)
    })
  }
})(Zepto)
module.exports = Zepto


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(148);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-var */
// Simple JavaScript Templating
// Paul Miller (http://paulmillr.com)
// http://underscorejs.org
// (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors

// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
var settings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
};var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
  '\'': '\'',
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\t': 't',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

// List of HTML entities for escaping.
var htmlEntities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#x27;'
};

var entityRe = new RegExp('[&<>"\']', 'g');

var escapeExpr = function escapeExpr(string) {
  if (string === null) return '';
  return ('' + string).replace(entityRe, function (match) {
    return htmlEntities[match];
  });
};

var counter = 0;

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
var tmpl = function tmpl(text, data) {
  var render;

  // Combine delimiters into one regular expression via alternation.
  var matcher = new RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

  // Compile the template source, escaping string literals appropriately.
  var index = 0;
  var source = '__p+=\'';
  text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escaper, function (match) {
      return '\\' + escapes[match];
    });

    if (escape) source += '\'+\n((__t=(' + escape + '))==null?\'\':escapeExpr(__t))+\n\'';

    if (interpolate) source += '\'+\n((__t=(' + interpolate + '))==null?\'\':__t)+\n\'';

    if (evaluate) source += '\';\n' + evaluate + '\n__p+=\'';

    index = offset + match.length;
    return match;
  });
  source += '\';\n';

  // If a variable is not specified, place data values in local scope.
  if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

  source = 'var __t,__p=\'\',__j=Array.prototype.join,' + 'print=function(){__p+=__j.call(arguments,\'\');};\n' + source + 'return __p;\n//# sourceURL=/microtemplates/source[' + counter++ + ']';

  try {
    /*jshint -W054 */
    // TODO: find a way to avoid eval
    render = new Function(settings.variable || 'obj', 'escapeExpr', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  if (data) return render(data, escapeExpr);
  var template = function template(data) {
    return render.call(this, data, escapeExpr);
  };

  // Provide the compiled function source as a convenience for precompilation.
  template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

  return template;
};
tmpl.settings = settings;

exports.default = tmpl;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(50)('wks');
var uid = __webpack_require__(36);
var Symbol = __webpack_require__(16).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _ui_object = __webpack_require__(26);

var _ui_object2 = _interopRequireDefault(_ui_object);

var _error_mixin = __webpack_require__(18);

var _error_mixin2 = _interopRequireDefault(_error_mixin);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An abstraction to represent a generic playback, it's like an interface to be implemented by subclasses.
 * @class Playback
 * @constructor
 * @extends UIObject
 * @module base
 */
var Playback = function (_UIObject) {
  (0, _inherits3.default)(Playback, _UIObject);
  (0, _createClass3.default)(Playback, [{
    key: 'isAudioOnly',

    /**
    * Determine if the playback does not contain video/has video but video should be ignored.
    * @property isAudioOnly
    * @type Boolean
    */
    get: function get() {
      return false;
    }
  }, {
    key: 'isAdaptive',
    get: function get() {
      return false;
    }

    /**
     * Determine if the playback has ended.
     * @property ended
     * @type Boolean
     */

  }, {
    key: 'ended',
    get: function get() {
      return false;
    }

    /**
     * The internationalization plugin.
     * @property i18n
     * @type {Strings}
     */

  }, {
    key: 'i18n',
    get: function get() {
      return this._i18n;
    }

    /**
     * Determine if the playback is having to buffer in order for
     * playback to be smooth.
     * (i.e if a live stream is playing smoothly, this will be false)
     * @property buffering
     * @type Boolean
     */

  }, {
    key: 'buffering',
    get: function get() {
      return false;
    }

    /**
     * @method constructor
     * @param {Object} options the options object
     * @param {Strings} i18n the internationalization component
     */

  }]);

  function Playback(options, i18n, playerError) {
    (0, _classCallCheck3.default)(this, Playback);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIObject.call(this, options));

    _this.settings = {};
    _this._i18n = i18n;
    _this.playerError = playerError;
    return _this;
  }

  /**
   * Gives user consent to playback (mobile devices).
   * @method consent
   */


  Playback.prototype.consent = function consent() {};

  /**
   * plays the playback.
   * @method play
   */


  Playback.prototype.play = function play() {};

  /**
   * pauses the playback.
   * @method pause
   */


  Playback.prototype.pause = function pause() {};

  /**
   * stops the playback.
   * @method stop
   */


  Playback.prototype.stop = function stop() {};

  /**
   * seeks the playback to a given `time` in seconds
   * @method seek
   * @param {Number} time should be a number between 0 and the video duration
   */


  Playback.prototype.seek = function seek(time) {}; // eslint-disable-line no-unused-vars

  /**
   * seeks the playback to a given `percentage` in percentage
   * @method seekPercentage
   * @param {Number} time should be a number between 0 and 100
   */


  Playback.prototype.seekPercentage = function seekPercentage(percentage) {}; // eslint-disable-line no-unused-vars


  /**
   * The time that "0" now represents relative to when playback started.
   * For a stream with a sliding window this will increase as content is
   * removed from the beginning.
   * @method getStartTimeOffset
   * @return {Number} time (in seconds) that time "0" represents.
   */


  Playback.prototype.getStartTimeOffset = function getStartTimeOffset() {
    return 0;
  };

  /**
   * gets the duration in seconds
   * @method getDuration
   * @return {Number} duration (in seconds) of the current source
   */


  Playback.prototype.getDuration = function getDuration() {
    return 0;
  };

  /**
   * checks if the playback is playing.
   * @method isPlaying
   * @return {Boolean} `true` if the current playback is playing, otherwise `false`
   */


  Playback.prototype.isPlaying = function isPlaying() {
    return false;
  };

  /**
   * checks if the playback is ready.
   * @property isReady
   * @type {Boolean} `true` if the current playback is ready, otherwise `false`
   */


  // eslint-disable-line no-unused-vars

  /**
   * gets the playback type (`'vod', 'live', 'aod'`)
   * @method getPlaybackType
   * @return {String} you should write the playback type otherwise it'll assume `'no_op'`
   * @example
   * ```javascript
   * html5VideoPlayback.getPlaybackType() //vod
   * html5AudioPlayback.getPlaybackType() //aod
   * html5VideoPlayback.getPlaybackType() //live
   * flashHlsPlayback.getPlaybackType() //live
   * ```
   */
  Playback.prototype.getPlaybackType = function getPlaybackType() {
    return Playback.NO_OP;
  };

  /**
   * checks if the playback is in HD.
   * @method isHighDefinitionInUse
   * @return {Boolean} `true` if the playback is playing in HD, otherwise `false`
   */


  Playback.prototype.isHighDefinitionInUse = function isHighDefinitionInUse() {
    return false;
  };

  /**
   * sets the volume for the playback
   * @method volume
   * @param {Number} value a number between 0 (`muted`) to 100 (`max`)
   */


  Playback.prototype.volume = function volume(value) {}; // eslint-disable-line no-unused-vars

  /**
   * enables to configure the playback after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   */


  Playback.prototype.configure = function configure(options) {
    this._options = _clapprZepto2.default.extend(this._options, options);
  };

  /**
   * destroys the playback, removing it from DOM
   * @method destroy
   */


  Playback.prototype.destroy = function destroy() {
    this.remove();
  };

  (0, _createClass3.default)(Playback, [{
    key: 'isReady',
    get: function get() {
      return false;
    }

    /**
     * checks if the playback has closed caption tracks.
     * @property hasClosedCaptionsTracks
     * @type {Boolean}
     */

  }, {
    key: 'hasClosedCaptionsTracks',
    get: function get() {
      return this.closedCaptionsTracks.length > 0;
    }

    /**
     * gets the playback available closed caption tracks.
     * @property closedCaptionsTracks
     * @type {Array} an array of objects with at least 'id' and 'name' properties
     */

  }, {
    key: 'closedCaptionsTracks',
    get: function get() {
      return [];
    }

    /**
     * gets the selected closed caption track index. (-1 is disabled)
     * @property closedCaptionsTrackId
     * @type {Number}
     */

  }, {
    key: 'closedCaptionsTrackId',
    get: function get() {
      return -1;
    }

    /**
     * sets the selected closed caption track index. (-1 is disabled)
     * @property closedCaptionsTrackId
     * @type {Number}
     */
    ,
    set: function set(trackId) {}
  }]);
  return Playback;
}(_ui_object2.default);

exports.default = Playback;


(0, _assign2.default)(Playback.prototype, _error_mixin2.default);

Playback.extend = function (properties) {
  return (0, _utils.extend)(Playback, properties);
};

/**
 * checks if the playback can play a given `source`
 * If a mimeType is provided then this will be used instead of inferring the mimetype
 * from the source extension.
 * @method canPlay
 * @static
 * @param {String} source the given source ex: `http://example.com/play.mp4`
 * @param {String} [mimeType] the given mime type, ex: `'application/vnd.apple.mpegurl'`
 * @return {Boolean} `true` if the playback is playable, otherwise `false`
 */
Playback.canPlay = function (source, mimeType) {
  // eslint-disable-line no-unused-vars
  return false;
};

/**
 * a playback type for video on demand
 *
 * @property VOD
 * @static
 * @type String
 */
Playback.VOD = 'vod';
/**
 * a playback type for audio on demand
 *
 * @property AOD
 * @static
 * @type String
 */
Playback.AOD = 'aod';
/**
 * a playback type for live video
 *
 * @property LIVE
 * @static
 * @type String
 */
Playback.LIVE = 'live';
/**
 * a default playback type
 *
 * @property NO_OP
 * @static
 * @type String
 */
Playback.NO_OP = 'no_op';
/**
 * the plugin type
 *
 * @property type
 * @static
 * @type String
 */
Playback.type = 'playback';
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class BaseObject
 * @constructor
 * @extends Events
 * @module base
 */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var BaseObject = function (_Events) {
  (0, _inherits3.default)(BaseObject, _Events);
  (0, _createClass3.default)(BaseObject, [{
    key: 'options',

    /**
     * returns the object options
     * @property options
     * @type Object
     */
    get: function get() {
      return this._options;
    }

    /**
     * @method constructor
     * @param {Object} options
     */

  }]);

  function BaseObject() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, BaseObject);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Events.call(this, options));

    _this._options = options;
    _this.uniqueId = (0, _utils.uniqueId)('o');
    return _this;
  }
  /**
  * a unique id prefixed with `'o'`, `o1, o232`
  *
  * @property uniqueId
  * @type String
  */


  return BaseObject;
}(_events2.default);

exports.default = BaseObject;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var core = __webpack_require__(6);
var ctx = __webpack_require__(44);
var hide = __webpack_require__(22);
var has = __webpack_require__(20);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var IE8_DOM_DEFINE = __webpack_require__(60);
var toPrimitive = __webpack_require__(45);
var dP = Object.defineProperty;

exports.f = __webpack_require__(19) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _log = __webpack_require__(32);

var _log2 = _interopRequireDefault(_log);

var _error = __webpack_require__(27);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMixin = {
  /**
   * creates an error.
   * @method createError
   * @param {Object} error should be an object with code, description, level and raw error.
   * @return {Object} Object with formatted error data including origin and scope
   */
  createError: function createError(error) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { useCodePrefix: true };

    var scope = this.constructor && this.constructor.type || '';
    var origin = this.name || scope;
    var i18n = this.i18n || this.core && this.core.i18n || this.container && this.container.i18n;

    var prefixedCode = origin + ':' + (error && error.code || 'unknown');
    var defaultError = {
      description: '',
      level: _error2.default.Levels.FATAL,
      origin: origin,
      scope: scope,
      raw: {}
    };

    var errorData = (0, _assign2.default)({}, defaultError, error, {
      code: options.useCodePrefix ? prefixedCode : error.code
    });

    if (i18n && errorData.level == _error2.default.Levels.FATAL && !errorData.UI) {
      var defaultUI = {
        title: i18n.t('default_error_title'),
        message: i18n.t('default_error_message')
      };
      errorData.UI = defaultUI;
    }

    if (this.playerError) this.playerError.createError(errorData);else _log2.default.warn(origin, 'PlayerError is not defined. Error: ', errorData);

    return errorData;
  }
};

exports.default = ErrorMixin;
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(25)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(63);
var defined = __webpack_require__(47);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var createDesc = __webpack_require__(28);
module.exports = __webpack_require__(19) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _utils = __webpack_require__(5);

var _base_object = __webpack_require__(14);

var _base_object2 = _interopRequireDefault(_base_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var delegateEventSplitter = /^(\S+)\s*(.*)$/;

/**
 * A base class to create ui object.
 * @class UIObject
 * @constructor
 * @extends BaseObject
 * @module base
 */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var UIObject = function (_BaseObject) {
  (0, _inherits3.default)(UIObject, _BaseObject);
  (0, _createClass3.default)(UIObject, [{
    key: 'tagName',

    /**
     * a unique id prefixed with `'c'`, `c1, c232`
     *
     * @property cid
     * @type String
     */
    /**
     * the dom element itself
     *
     * @property el
     * @type HTMLElement
     */
    /**
     * the dom element wrapped by `$`
     *
     * @property $el
     * @type HTMLElement
     */

    /**
     * gets the tag name for the ui component
     * @method tagName
     * @default div
     * @return {String} tag's name
     */
    get: function get() {
      return 'div';
    }
    /**
     * a literal object mapping element's events to methods
     * @property events
     * @type Object
     * @example
     *
     *```javascript
     *
     * class MyButton extends UIObject {
     *   constructor(options) {
     *     super(options)
     *     this.myId = 0
     *   }
     *   get events() { return { 'click': 'myClick' } }
     *   myClick(){ this.myId = 42 }
     * }
     *
     * // when you click on MyButton the method `myClick` will be called
     *```
     */

  }, {
    key: 'events',
    get: function get() {
      return {};
    }
    /**
     * a literal object mapping attributes and values to the element
     * element's attribute name and the value the attribute value
     * @property attributes
     * @type Object
     * @example
     *
     *```javascript
     *
     * class MyButton extends UIObject {
     *    constructor(options) { super(options) }
     *    get attributes() { return { class: 'my-button'} }
     * }
     *
     * // MyButton.el.className will be 'my-button'
     * ```
     */

  }, {
    key: 'attributes',
    get: function get() {
      return {};
    }

    /**
     * it builds an ui component by:
     *  * creating an id for the component `cid`
     *  * making sure the element is created `$el`
     *  * delegating all `events` to the element
     * @method constructor
     * @param {Object} options the options object
     */

  }]);

  function UIObject(options) {
    (0, _classCallCheck3.default)(this, UIObject);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, options));

    _this.cid = (0, _utils.uniqueId)('c');
    _this._ensureElement();
    _this.delegateEvents();
    return _this;
  }

  /**
   * selects within the component.
   * @method $
   * @param {String} selector a selector to find within the component.
   * @return {HTMLElement} an element, if it exists.
   * @example
   * ```javascript
   * fullScreenBarUIComponent.$('.button-full') //will return only `.button-full` within the component
   * ```
   */


  UIObject.prototype.$ = function $(selector) {
    return this.$el.find(selector);
  };

  /**
   * render the component, usually attach it to a real existent `element`
   * @method render
   * @return {UIObject} itself
   */


  UIObject.prototype.render = function render() {
    return this;
  };

  /**
   * removes the ui component from DOM
   * @method remove
   * @return {UIObject} itself
   */


  UIObject.prototype.remove = function remove() {
    this.$el.remove();
    this.stopListening();
    this.undelegateEvents();
    return this;
  };

  /**
   * set element to `el` and `$el`
   * @method setElement
   * @param {HTMLElement} element
   * @param {Boolean} delegate whether is delegate or not
   * @return {UIObject} itself
   */


  UIObject.prototype.setElement = function setElement(element, delegate) {
    if (this.$el) this.undelegateEvents();
    this.$el = _clapprZepto2.default.zepto.isZ(element) ? element : (0, _clapprZepto2.default)(element);
    this.el = this.$el[0];
    if (delegate !== false) this.delegateEvents();
    return this;
  };

  /**
   * delegates all the original `events` on `element` to its callbacks
   * @method delegateEvents
   * @param {Object} events
   * @return {UIObject} itself
   */


  UIObject.prototype.delegateEvents = function delegateEvents(events) {
    if (!(events || (events = this.events))) return this;
    this.undelegateEvents();
    for (var key in events) {
      var method = events[key];
      if (method && method.constructor !== Function) method = this[events[key]];
      if (!method) continue;

      var match = key.match(delegateEventSplitter);
      var eventName = match[1],
          selector = match[2];
      eventName += '.delegateEvents' + this.cid;
      if (selector === '') this.$el.on(eventName, method.bind(this));else this.$el.on(eventName, selector, method.bind(this));
    }
    return this;
  };

  /**
   * undelegats all the `events`
   * @method undelegateEvents
   * @return {UIObject} itself
   */


  UIObject.prototype.undelegateEvents = function undelegateEvents() {
    this.$el.off('.delegateEvents' + this.cid);
    return this;
  };

  /**
   * ensures the creation of this ui component
   * @method _ensureElement
   * @private
   */


  UIObject.prototype._ensureElement = function _ensureElement() {
    if (!this.el) {
      var attrs = _clapprZepto2.default.extend({}, this.attributes);
      if (this.id) attrs.id = this.id;
      if (this.className) attrs['class'] = this.className;
      var $el = _utils.DomRecycler.create(this.tagName).attr(attrs);
      this.setElement($el, false);
    } else {
      this.setElement(this.el, false);
    }
  };

  return UIObject;
}(_base_object2.default);

exports.default = UIObject;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = __webpack_require__(75);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _error2.default;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(62);
var enumBugKeys = __webpack_require__(51);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = __webpack_require__(135);

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _browser2.default;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = __webpack_require__(138);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _log2.default;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _ui_object = __webpack_require__(26);

var _ui_object2 = _interopRequireDefault(_ui_object);

var _error_mixin = __webpack_require__(18);

var _error_mixin2 = _interopRequireDefault(_error_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UICorePlugin = function (_UIObject) {
  (0, _inherits3.default)(UICorePlugin, _UIObject);
  (0, _createClass3.default)(UICorePlugin, [{
    key: 'playerError',
    get: function get() {
      return this.core.playerError;
    }
  }]);

  function UICorePlugin(core) {
    (0, _classCallCheck3.default)(this, UICorePlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIObject.call(this, core.options));

    _this.core = core;
    _this.enabled = true;
    _this.bindEvents();
    _this.render();
    return _this;
  }

  UICorePlugin.prototype.bindEvents = function bindEvents() {};

  UICorePlugin.prototype.getExternalInterface = function getExternalInterface() {
    return {};
  };

  UICorePlugin.prototype.enable = function enable() {
    if (!this.enabled) {
      this.bindEvents();
      this.$el.show();
      this.enabled = true;
    }
  };

  UICorePlugin.prototype.disable = function disable() {
    this.stopListening();
    this.$el.hide();
    this.enabled = false;
  };

  UICorePlugin.prototype.destroy = function destroy() {
    this.remove();
  };

  UICorePlugin.prototype.render = function render() {
    return this;
  };

  return UICorePlugin;
}(_ui_object2.default);

exports.default = UICorePlugin;


(0, _assign2.default)(UICorePlugin.prototype, _error_mixin2.default);

UICorePlugin.extend = function (properties) {
  return (0, _utils.extend)(UICorePlugin, properties);
};

UICorePlugin.type = 'core';
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _base_object = __webpack_require__(14);

var _base_object2 = _interopRequireDefault(_base_object);

var _error_mixin = __webpack_require__(18);

var _error_mixin2 = _interopRequireDefault(_error_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CorePlugin = function (_BaseObject) {
  (0, _inherits3.default)(CorePlugin, _BaseObject);
  (0, _createClass3.default)(CorePlugin, [{
    key: 'playerError',
    get: function get() {
      return this.core.playerError;
    }
  }]);

  function CorePlugin(core) {
    (0, _classCallCheck3.default)(this, CorePlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, core.options));

    _this.core = core;
    _this.enabled = true;
    _this.bindEvents();
    return _this;
  }

  CorePlugin.prototype.bindEvents = function bindEvents() {};

  CorePlugin.prototype.enable = function enable() {
    if (!this.enabled) {
      this.bindEvents();
      this.enabled = true;
    }
  };

  CorePlugin.prototype.disable = function disable() {
    if (this.enabled) {
      this.stopListening();
      this.enabled = false;
    }
  };

  CorePlugin.prototype.getExternalInterface = function getExternalInterface() {
    return {};
  };

  CorePlugin.prototype.destroy = function destroy() {
    this.stopListening();
  };

  return CorePlugin;
}(_base_object2.default);

exports.default = CorePlugin;


(0, _assign2.default)(CorePlugin.prototype, _error_mixin2.default);

CorePlugin.extend = function (properties) {
  return (0, _utils.extend)(CorePlugin, properties);
};

CorePlugin.type = 'core';
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(47);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(102);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(113);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var PlayerInfo = function PlayerInfo() {
  (0, _classCallCheck3.default)(this, PlayerInfo);

  this.options = {};
  this.playbackPlugins = [];
  this.currentSize = { width: 0, height: 0 };
};

PlayerInfo._players = {};

PlayerInfo.getInstance = function (playerId) {
  return PlayerInfo._players[playerId] || (PlayerInfo._players[playerId] = new PlayerInfo());
};

exports.default = PlayerInfo;
module.exports = exports["default"];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _html5_video = __webpack_require__(163);

var _html5_video2 = _interopRequireDefault(_html5_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html5_video2.default;
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _ui_object = __webpack_require__(26);

var _ui_object2 = _interopRequireDefault(_ui_object);

var _error_mixin = __webpack_require__(18);

var _error_mixin2 = _interopRequireDefault(_error_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base class for an ui container plugin
 * @class UIContainerPlugin
 * @constructor
 * @extends UIObject
 * @module base
 */
var UIContainerPlugin = function (_UIObject) {
  (0, _inherits3.default)(UIContainerPlugin, _UIObject);
  (0, _createClass3.default)(UIContainerPlugin, [{
    key: 'playerError',
    get: function get() {
      return this.container.playerError;
    }
  }]);

  function UIContainerPlugin(container) {
    (0, _classCallCheck3.default)(this, UIContainerPlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIObject.call(this, container.options));

    _this.container = container;
    _this.enabled = true;
    _this.bindEvents();
    return _this;
  }

  UIContainerPlugin.prototype.enable = function enable() {
    if (!this.enabled) {
      this.bindEvents();
      this.$el.show();
      this.enabled = true;
    }
  };

  UIContainerPlugin.prototype.disable = function disable() {
    this.stopListening();
    this.$el.hide();
    this.enabled = false;
  };

  UIContainerPlugin.prototype.bindEvents = function bindEvents() {};

  UIContainerPlugin.prototype.destroy = function destroy() {
    this.remove();
  };

  return UIContainerPlugin;
}(_ui_object2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = UIContainerPlugin;


(0, _assign2.default)(UIContainerPlugin.prototype, _error_mixin2.default);

UIContainerPlugin.extend = function (properties) {
  return (0, _utils.extend)(UIContainerPlugin, properties);
};

UIContainerPlugin.type = 'container';
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _base_object = __webpack_require__(14);

var _base_object2 = _interopRequireDefault(_base_object);

var _utils = __webpack_require__(5);

var _error_mixin = __webpack_require__(18);

var _error_mixin2 = _interopRequireDefault(_error_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base class for a container plugin
 * @class ContainerPlugin
 * @constructor
 * @extends UIObject
 * @module base
 */
var ContainerPlugin = function (_BaseObject) {
  (0, _inherits3.default)(ContainerPlugin, _BaseObject);
  (0, _createClass3.default)(ContainerPlugin, [{
    key: 'playerError',
    get: function get() {
      return this.container.playerError;
    }
  }]);

  function ContainerPlugin(container) {
    (0, _classCallCheck3.default)(this, ContainerPlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, container.options));

    _this.container = container;
    _this.enabled = true;
    _this.bindEvents();
    return _this;
  }

  ContainerPlugin.prototype.enable = function enable() {
    if (!this.enabled) {
      this.bindEvents();
      this.enabled = true;
    }
  };

  ContainerPlugin.prototype.disable = function disable() {
    if (this.enabled) {
      this.stopListening();
      this.enabled = false;
    }
  };

  ContainerPlugin.prototype.bindEvents = function bindEvents() {};

  ContainerPlugin.prototype.destroy = function destroy() {
    this.stopListening();
  };

  return ContainerPlugin;
}(_base_object2.default);

exports.default = ContainerPlugin;


(0, _assign2.default)(ContainerPlugin.prototype, _error_mixin2.default);

ContainerPlugin.extend = function (properties) {
  return (0, _utils.extend)(ContainerPlugin, properties);
};

ContainerPlugin.type = 'container';
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(96);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(24);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(50)('keys');
var uid = __webpack_require__(36);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(16);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(35) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(23);
var dPs = __webpack_require__(106);
var enumBugKeys = __webpack_require__(51);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(61)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(107).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(17).f;
var has = __webpack_require__(20);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(35);
var wksExt = __webpack_require__(56);
var defineProperty = __webpack_require__(17).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(37);
var createDesc = __webpack_require__(28);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(45);
var has = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(60);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(19) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(79);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(19) && !__webpack_require__(25)(function () {
  return Object.defineProperty(__webpack_require__(61)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
var document = __webpack_require__(16).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(20);
var toIObject = __webpack_require__(21);
var arrayIndexOf = __webpack_require__(98)(false);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(48);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(15);
var core = __webpack_require__(6);
var fails = __webpack_require__(25);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(104)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(67)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(35);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(68);
var hide = __webpack_require__(22);
var Iterators = __webpack_require__(30);
var $iterCreate = __webpack_require__(105);
var setToStringTag = __webpack_require__(55);
var getPrototypeOf = __webpack_require__(108);
var ITERATOR = __webpack_require__(11)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(62);
var hiddenKeys = __webpack_require__(51).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kibo = __webpack_require__(139);

var _kibo2 = _interopRequireDefault(_kibo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { Kibo: _kibo2.default };
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(142);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _container = __webpack_require__(145);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _container2.default;
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _base_object = __webpack_require__(14);

var _base_object2 = _interopRequireDefault(_base_object);

var _log = __webpack_require__(32);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The PlayerError is responsible to receive and propagate errors.
 * @class PlayerError
 * @constructor
 * @extends BaseObject
 * @module components
 */
var PlayerError = function (_BaseObject) {
  (0, _inherits3.default)(PlayerError, _BaseObject);
  (0, _createClass3.default)(PlayerError, [{
    key: 'name',
    get: function get() {
      return 'error';
    }

    /**
     * @property Levels
     * @type {Object} object with error levels
     */

  }], [{
    key: 'Levels',
    get: function get() {
      return {
        FATAL: 'FATAL',
        WARN: 'WARN',
        INFO: 'INFO'
      };
    }
  }]);

  function PlayerError() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var core = arguments[1];
    (0, _classCallCheck3.default)(this, PlayerError);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, options));

    _this.core = core;
    return _this;
  }

  /**
   * creates and trigger an error.
   * @method createError
   * @param {Object} err should be an object with code, description, level, origin, scope and raw error.
   */


  PlayerError.prototype.createError = function createError(err) {
    if (!this.core) {
      _log2.default.warn(this.name, 'Core is not set. Error: ', err);
      return;
    }
    this.core.trigger(_events2.default.ERROR, err);
  };

  return PlayerError;
}(_base_object2.default);

exports.default = PlayerError;
module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var events = new _events2.default(); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * The mediator is a singleton for handling global events.
 */

var Mediator = function Mediator() {
  (0, _classCallCheck3.default)(this, Mediator);
};

exports.default = Mediator;


Mediator.on = function (name, callback, context) {
  events.on(name, callback, context);
  return;
};

Mediator.once = function (name, callback, context) {
  events.once(name, callback, context);
  return;
};

Mediator.off = function (name, callback, context) {
  events.off(name, callback, context);
  return;
};

Mediator.trigger = function (name) {
  for (var _len = arguments.length, opts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }

  events.trigger.apply(events, [name].concat(opts));
  return;
};

Mediator.stopListening = function (obj, name, callback) {
  events.stopListening(obj, name, callback);
  return;
};
module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var Styler = {
  getStyleFor: function getStyleFor(style) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { baseUrl: '' };

    return (0, _clapprZepto2.default)('<style class="clappr-style"></style>').html((0, _template2.default)(style.toString())(options));
  }
};

exports.default = Styler;
module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loader = __webpack_require__(154);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loader2.default;
module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _html5_audio = __webpack_require__(167);

var _html5_audio2 = _interopRequireDefault(_html5_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html5_audio2.default;
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hls = __webpack_require__(168);

var _hls2 = _interopRequireDefault(_hls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _hls2.default;
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _html_img = __webpack_require__(172);

var _html_img2 = _interopRequireDefault(_html_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html_img2.default;
module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _no_op = __webpack_require__(175);

var _no_op2 = _interopRequireDefault(_no_op);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _no_op2.default;
module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spinner_three_bounce = __webpack_require__(179);

var _spinner_three_bounce2 = _interopRequireDefault(_spinner_three_bounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _spinner_three_bounce2.default;
module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _watermark = __webpack_require__(185);

var _watermark2 = _interopRequireDefault(_watermark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _watermark2.default;
module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _poster = __webpack_require__(189);

var _poster2 = _interopRequireDefault(_poster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _poster2.default;
module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path fill=\"#010101\" d=\"M1.425.35L14.575 8l-13.15 7.65V.35z\"></path></svg>"

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _click_to_pause = __webpack_require__(195);

var _click_to_pause2 = _interopRequireDefault(_click_to_pause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _click_to_pause2.default;
module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvr_controls = __webpack_require__(196);

var _dvr_controls2 = _interopRequireDefault(_dvr_controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dvr_controls2.default;
module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _favicon = __webpack_require__(206);

var _favicon2 = _interopRequireDefault(_favicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _favicon2.default;
module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _player = __webpack_require__(93);

var _player2 = _interopRequireDefault(_player);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(12);

var _playback2 = _interopRequireDefault(_playback);

var _container_plugin = __webpack_require__(43);

var _container_plugin2 = _interopRequireDefault(_container_plugin);

var _core_plugin = __webpack_require__(34);

var _core_plugin2 = _interopRequireDefault(_core_plugin);

var _ui_core_plugin = __webpack_require__(33);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _ui_container_plugin = __webpack_require__(42);

var _ui_container_plugin2 = _interopRequireDefault(_ui_container_plugin);

var _base_object = __webpack_require__(14);

var _base_object2 = _interopRequireDefault(_base_object);

var _ui_object = __webpack_require__(26);

var _ui_object2 = _interopRequireDefault(_ui_object);

var _browser = __webpack_require__(31);

var _browser2 = _interopRequireDefault(_browser);

var _container = __webpack_require__(74);

var _container2 = _interopRequireDefault(_container);

var _core = __webpack_require__(73);

var _core2 = _interopRequireDefault(_core);

var _error = __webpack_require__(27);

var _error2 = _interopRequireDefault(_error);

var _loader = __webpack_require__(78);

var _loader2 = _interopRequireDefault(_loader);

var _mediator = __webpack_require__(76);

var _mediator2 = _interopRequireDefault(_mediator);

var _player_info = __webpack_require__(40);

var _player_info2 = _interopRequireDefault(_player_info);

var _hls = __webpack_require__(82);

var _hls2 = _interopRequireDefault(_hls);

var _html5_audio = __webpack_require__(81);

var _html5_audio2 = _interopRequireDefault(_html5_audio);

var _html5_video = __webpack_require__(41);

var _html5_video2 = _interopRequireDefault(_html5_video);

var _html_img = __webpack_require__(83);

var _html_img2 = _interopRequireDefault(_html_img);

var _no_op = __webpack_require__(84);

var _no_op2 = _interopRequireDefault(_no_op);

var _click_to_pause = __webpack_require__(89);

var _click_to_pause2 = _interopRequireDefault(_click_to_pause);

var _dvr_controls = __webpack_require__(90);

var _dvr_controls2 = _interopRequireDefault(_dvr_controls);

var _favicon = __webpack_require__(91);

var _favicon2 = _interopRequireDefault(_favicon);

var _log = __webpack_require__(32);

var _log2 = _interopRequireDefault(_log);

var _poster = __webpack_require__(87);

var _poster2 = _interopRequireDefault(_poster);

var _spinner_three_bounce = __webpack_require__(85);

var _spinner_three_bounce2 = _interopRequireDefault(_spinner_three_bounce);

var _watermark = __webpack_require__(86);

var _watermark2 = _interopRequireDefault(_watermark);

var _styler = __webpack_require__(77);

var _styler2 = _interopRequireDefault(_styler);

var _vendor = __webpack_require__(72);

var _vendor2 = _interopRequireDefault(_vendor);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = "0.2.95"; // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = {
  Player: _player2.default,
  Mediator: _mediator2.default,
  Events: _events2.default,
  Browser: _browser2.default,
  PlayerInfo: _player_info2.default,
  // MediaControl,
  ContainerPlugin: _container_plugin2.default,
  UIContainerPlugin: _ui_container_plugin2.default,
  CorePlugin: _core_plugin2.default,
  UICorePlugin: _ui_core_plugin2.default,
  Playback: _playback2.default,
  Container: _container2.default,
  Core: _core2.default,
  PlayerError: _error2.default,
  Loader: _loader2.default,
  BaseObject: _base_object2.default,
  UIObject: _ui_object2.default,
  Utils: _utils2.default,
  HLS: _hls2.default,
  HTML5Audio: _html5_audio2.default,
  HTML5Video: _html5_video2.default,
  HTMLImg: _html_img2.default,
  NoOp: _no_op2.default,
  ClickToPausePlugin: _click_to_pause2.default,
  DVRControls: _dvr_controls2.default,
  Favicon: _favicon2.default,
  Log: _log2.default,
  Poster: _poster2.default,
  SpinnerThreeBouncePlugin: _spinner_three_bounce2.default,
  WaterMarkPlugin: _watermark2.default,
  Styler: _styler2.default,
  Vendor: _vendor2.default,
  version: version,
  template: _template2.default,
  $: _clapprZepto2.default
};
module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _base_object = __webpack_require__(14);

var _base_object2 = _interopRequireDefault(_base_object);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _browser = __webpack_require__(31);

var _browser2 = _interopRequireDefault(_browser);

var _core_factory = __webpack_require__(140);

var _core_factory2 = _interopRequireDefault(_core_factory);

var _loader = __webpack_require__(78);

var _loader2 = _interopRequireDefault(_loader);

var _player_info = __webpack_require__(40);

var _player_info2 = _interopRequireDefault(_player_info);

var _error_mixin = __webpack_require__(18);

var _error_mixin2 = _interopRequireDefault(_error_mixin);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = (0, _utils.currentScriptUrl)().replace(/\/[^/]+$/, '');

/**
 * @class Player
 * @constructor
 * @extends BaseObject
 * @module components
 * @example
 * ### Using the Player
 *
 * Add the following script on your HTML:
 * ```html
 * <head>
 *   <script type="text/javascript" src="http://cdn.clappr.io/latest/clappr.min.js"></script>
 * </head>
 * ```
 * Now, create the player:
 * ```html
 * <body>
 *   <div id="player"></div>
 *   <script>
 *     var player = new Clappr.Player({source: "http://your.video/here.mp4", parentId: "#player"});
 *   </script>
 * </body>
 * ```
 */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var Player = function (_BaseObject) {
  (0, _inherits3.default)(Player, _BaseObject);
  (0, _createClass3.default)(Player, [{
    key: 'loader',
    set: function set(loader) {
      this._loader = loader;
    },
    get: function get() {
      if (!this._loader) this._loader = new _loader2.default(this.options.plugins || {}, this.options.playerId);

      return this._loader;
    }

    /**
     * Determine if the playback has ended.
     * @property ended
     * @type Boolean
     */

  }, {
    key: 'ended',
    get: function get() {
      return this.core.mediaControl.container.ended;
    }

    /**
     * Determine if the playback is having to buffer in order for
     * playback to be smooth.
     * (i.e if a live stream is playing smoothly, this will be false)
     * @property buffering
     * @type Boolean
     */

  }, {
    key: 'buffering',
    get: function get() {
      return this.core.mediaControl.container.buffering;
    }

    /*
     * determine if the player is ready.
     * @property isReady
     * @type {Boolean} `true` if the player is ready. ie PLAYER_READY event has fired
     */

  }, {
    key: 'isReady',
    get: function get() {
      return !!this._ready;
    }

    /**
     * An events map that allows the user to add custom callbacks in player's options.
     * @property eventsMapping
     * @type {Object}
     */

  }, {
    key: 'eventsMapping',
    get: function get() {
      return {
        onReady: _events2.default.PLAYER_READY,
        onResize: _events2.default.PLAYER_RESIZE,
        onPlay: _events2.default.PLAYER_PLAY,
        onPause: _events2.default.PLAYER_PAUSE,
        onStop: _events2.default.PLAYER_STOP,
        onEnded: _events2.default.PLAYER_ENDED,
        onSeek: _events2.default.PLAYER_SEEK,
        onError: _events2.default.PLAYER_ERROR,
        onTimeUpdate: _events2.default.PLAYER_TIMEUPDATE,
        onVolumeUpdate: _events2.default.PLAYER_VOLUMEUPDATE,
        onSubtitleAvailable: _events2.default.PLAYER_SUBTITLE_AVAILABLE
      };
    }

    /**
     * @typedef {Object} PlaybackConfig
     * @prop {boolean} disableContextMenu
     * disables the context menu (right click) on the video element if a HTML5Video playback is used.
     * @prop {boolean} preload
     * video will be preloaded according to `preload` attribute options **default**: `'metadata'`
     * @prop {boolean} controls
     * enabled/disables displaying controls
     * @prop {boolean} crossOrigin
     * enables cross-origin capability for media-resources
     * @prop {boolean} playInline
     * enables in-line video elements
     * @prop {boolean} audioOnly
     * enforce audio-only playback (when possible)
     * @prop {Object} externalTracks
     * pass externaly loaded track to playback
     * @prop {Number} [maxBufferLength]
     * The default behavior for the **HLS playback** is to keep buffering indefinitely, even on VoD.
     * This replicates the behavior for progressive download, which continues buffering when pausing the video, thus making the video available for playback even on slow networks.
     * To change this behavior use `maxBufferLength` where **value is in seconds**.
     * @prop {Number} [maxBackBufferLength]
     * After how much distance of the playhead data should be pruned from the buffer (influences memory consumption
     * of adaptive media-engines like Hls.js or Shaka)
     * @prop {Number} [minBufferLength]
     * After how much data in the buffer at least we attempt to consume it (influences QoS-related behavior
     * of adaptive media-engines like Hls.js or Shaka). If this is too low, and the available bandwidth is varying a lot
     * and too close to the streamed bitrate, we may continuously hit under-runs.
     * @prop {Number} [initialBandwidthEstimate]
     * define an initial bandwidth "guess" (or previously stored/established value) for underlying adaptive-bitreate engines
     * of adaptive playback implementations, like Hls.js or Shaka
     * @prop {Number} [maxAdaptiveBitrate]
     * Limits the streamed bitrate (for adaptive media-engines in underlying playback implementations)
     * @prop {Object} [maxAdaptiveVideoDimensions]
     * Limits the video dimensions in adaptive media-engines. Should be a literal object with `height` and `width`.
     * @prop {Boolean}[enableAutomaticABR] **default**: `true`
     * Allows to enable/disable automatic bitrate switching in adaptive media-engines
     * @prop {String} [preferredTextLanguage] **default**: `'pt-BR'`
     * Allows to set a preferred text language, that may be enabled by the media-engine if available.
     * @prop {String} [preferredAudioLanguage] **default**: `'pt-BR'`
     * Allows to set a preferred audio language, that may be enabled by the media-engine if available.
     */

    /**
     * ## Player's constructor
     *
     * You might pass the options object to build the player.
     * ```javascript
     * var options = {source: "http://example.com/video.mp4", param1: "val1"};
     * var player = new Clappr.Player(options);
     * ```
     *
     * @method constructor
     * @param {Object} options Data
     * options to build a player instance
     * @param {Number} [options.width]
     * player's width **default**: `640`
     * @param {Number} [options.height]
     * player's height **default**: `360`
     * @param {String} [options.parentId]
     * the id of the element on the page that the player should be inserted into
     * @param {Object} [options.parent]
     * a reference to a dom element that the player should be inserted into
     * @param {String} [options.source]
     * The media source URL, or {source: <<source URL>>, mimeType: <<source mime type>>}
     * @param {Object} [options.sources]
     * An array of media source URL's, or an array of {source: <<source URL>>, mimeType: <<source mime type>>}
     * @param {Boolean} [options.autoPlay]
     * automatically play after page load **default**: `false`
     * @param {Boolean} [options.loop]
     * automatically replay after it ends **default**: `false`
     * @param {Boolean} [options.chromeless]
     * player acts in chromeless mode **default**: `false`
     * @param {Boolean} [options.allowUserInteraction]
     * whether or not the player should handle click events when in chromeless mode **default**: `false` on desktops browsers, `true` on mobile.
     * @param {Boolean} [options.disableKeyboardShortcuts]
     * disable keyboard shortcuts. **default**: `false`. `true` if `allowUserInteraction` is `false`.
     * @param {Boolean} [options.mute]
     * start the video muted **default**: `false`
     * @param {String} [options.mimeType]
     * add `mimeType: "application/vnd.apple.mpegurl"` if you need to use a url without extension.
     * @param {Boolean} [options.actualLiveTime]
     * show duration and seek time relative to actual time.
     * @param {String} [options.actualLiveServerTime]
     * specify server time as a string, format: "2015/11/26 06:01:03". This option is meant to be used with actualLiveTime.
     * @param {Boolean} [options.persistConfig]
     * persist player's settings (volume) through the same domain **default**: `true`
     * @param {String} [options.preload] @deprecated
     * video will be preloaded according to `preload` attribute options **default**: `'metadata'`
     * @param {Number} [options.maxBufferLength] @deprecated
     * the default behavior for the **HLS playback** is to keep buffering indefinitely, even on VoD.
     * This replicates the behavior for progressive download, which continues buffering when pausing the video, thus making the video available for playback even on slow networks.
     * To change this behavior use `maxBufferLength` where **value is in seconds**.
     * @param {String} [options.gaAccount]
     * enable Google Analytics events dispatch **(play/pause/stop/buffering/etc)** by adding your `gaAccount`
     * @param {String} [options.gaTrackerName]
     * besides `gaAccount` you can optionally, pass your favorite trackerName as `gaTrackerName`
     * @param {Object} [options.mediacontrol]
     * customize control bar colors, example: `mediacontrol: {seekbar: "#E113D3", buttons: "#66B2FF"}`
     * @param {Boolean} [options.hideMediaControl]
     * control media control auto hide **default**: `true`
     * @param {Boolean} [options.hideVolumeBar]
     * when embedded with width less than 320, volume bar will hide. You can force this behavior for all sizes by adding `true` **default**: `false`
     * @param {String} [options.watermark]
     * put `watermark: 'http://url/img.png'` on your embed parameters to automatically add watermark on your video.
     * You can customize corner position by defining position parameter. Positions can be `bottom-left`, `bottom-right`, `top-left` and `top-right`.
     * @param {String} [options.watermarkLink]
     * `watermarkLink: 'http://example.net/'` - define URL to open when the watermark is clicked. If not provided watermark will not be clickable.
     * @param {Boolean} [options.disableVideoTagContextMenu] @deprecated
     * disables the context menu (right click) on the video element if a HTML5Video playback is used.
     * @param {Boolean} [options.autoSeekFromUrl]
     * Automatically seek to the seconds provided in the url (e.g example.com?t=100) **default**: `true`
     * @param {Boolean} [options.exitFullscreenOnEnd]
     * Automatically exit full screen when the media finishes. **default**: `true`
     * @param {String} [options.poster]
     * define a poster by adding its address `poster: 'http://url/img.png'`. It will appear after video embed, disappear on play and go back when user stops the video.
     * @param {String} [options.playbackNotSupportedMessage]
     * define a custom message to be displayed when a playback is not supported.
     * @param {Object} [options.events]
     * Specify listeners which will be registered with their corresponding player events.
     * E.g. onReady -> "PLAYER_READY", onTimeUpdate -> "PLAYER_TIMEUPDATE"
     * @param {PlaybackConfig} [options.playback]
     * Generic `Playback` component related configuration
     * @param {Boolean} [options.disableErrorScreen]
     * disables the error screen plugin.
     */

  }]);

  function Player(options) {
    (0, _classCallCheck3.default)(this, Player);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, options));

    var defaultOptions = { playerId: (0, _utils.uniqueId)(''), persistConfig: true, width: 640, height: 360, baseUrl: baseUrl, allowUserInteraction: _browser2.default.isMobile };
    _this._options = _clapprZepto2.default.extend(defaultOptions, options);
    _this.options.sources = _this._normalizeSources(options);
    if (!_this.options.chromeless) {
      // "allowUserInteraction" cannot be false if not in chromeless mode.
      _this.options.allowUserInteraction = true;
    }
    if (!_this.options.allowUserInteraction) {
      // if user iteraction is not allowed ensure keyboard shortcuts are disabled
      _this.options.disableKeyboardShortcuts = true;
    }
    _this._registerOptionEventListeners(_this.options.events);
    _this._coreFactory = new _core_factory2.default(_this);
    _this.playerInfo = _player_info2.default.getInstance(_this.options.playerId);
    _this.playerInfo.currentSize = { width: options.width, height: options.height };
    _this.playerInfo.options = _this.options;
    if (_this.options.parentId) _this.setParentId(_this.options.parentId);else if (_this.options.parent) _this.attachTo(_this.options.parent);

    return _this;
  }

  /**
   * Specify a `parentId` to the player.
   * @method setParentId
   * @param {String} parentId the element parent id.
   * @return {Player} itself
   */


  Player.prototype.setParentId = function setParentId(parentId) {
    var el = document.querySelector(parentId);
    if (el) this.attachTo(el);

    return this;
  };

  /**
   * You can use this method to attach the player to a given element. You don't need to do this when you specify it during the player instantiation passing the `parentId` param.
   * @method attachTo
   * @param {Object} element a given element.
   * @return {Player} itself
   */


  Player.prototype.attachTo = function attachTo(element) {
    this.options.parentElement = element;
    this.core = this._coreFactory.create();
    this._addEventListeners();
    return this;
  };

  Player.prototype._addEventListeners = function _addEventListeners() {
    if (!this.core.isReady) this.listenToOnce(this.core, _events2.default.CORE_READY, this._onReady);else this._onReady();

    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_CONTAINERCHANGED, this._containerChanged);
    this.listenTo(this.core, _events2.default.CORE_FULLSCREEN, this._onFullscreenChange);
    return this;
  };

  Player.prototype._addContainerEventListeners = function _addContainerEventListeners() {
    var container = this.core.mediaControl.container;
    if (container) {
      this.listenTo(container, _events2.default.CONTAINER_PLAY, this._onPlay);
      this.listenTo(container, _events2.default.CONTAINER_PAUSE, this._onPause);
      this.listenTo(container, _events2.default.CONTAINER_STOP, this._onStop);
      this.listenTo(container, _events2.default.CONTAINER_ENDED, this._onEnded);
      this.listenTo(container, _events2.default.CONTAINER_SEEK, this._onSeek);
      this.listenTo(container, _events2.default.CONTAINER_ERROR, this._onError);
      this.listenTo(container, _events2.default.CONTAINER_TIMEUPDATE, this._onTimeUpdate);
      this.listenTo(container, _events2.default.CONTAINER_VOLUME, this._onVolumeUpdate);
      this.listenTo(container, _events2.default.CONTAINER_SUBTITLE_AVAILABLE, this._onSubtitleAvailable);
    }
    return this;
  };

  Player.prototype._registerOptionEventListeners = function _registerOptionEventListeners() {
    var _this2 = this;

    var newEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _keys2.default)(events).forEach(function (userEvent) {
      var eventType = _this2.eventsMapping[userEvent];
      eventType && _this2.off(eventType);
    });

    (0, _keys2.default)(newEvents).forEach(function (userEvent) {
      var eventType = _this2.eventsMapping[userEvent];
      if (eventType) {
        var eventFunction = newEvents[userEvent];
        eventFunction = typeof eventFunction === 'function' && eventFunction;
        eventFunction && _this2.on(eventType, eventFunction);
      }
    });
    return this;
  };

  Player.prototype._containerChanged = function _containerChanged() {
    this.stopListening();
    this._addEventListeners();
  };

  Player.prototype._onReady = function _onReady() {
    this._ready = true;
    this._addContainerEventListeners();
    this.trigger(_events2.default.PLAYER_READY);
  };

  Player.prototype._onFullscreenChange = function _onFullscreenChange(fullscreen) {
    this.trigger(_events2.default.PLAYER_FULLSCREEN, fullscreen);
  };

  Player.prototype._onVolumeUpdate = function _onVolumeUpdate(volume) {
    this.trigger(_events2.default.PLAYER_VOLUMEUPDATE, volume);
  };

  Player.prototype._onSubtitleAvailable = function _onSubtitleAvailable() {
    this.trigger(_events2.default.PLAYER_SUBTITLE_AVAILABLE);
  };

  Player.prototype._onPlay = function _onPlay() {
    this.trigger(_events2.default.PLAYER_PLAY);
  };

  Player.prototype._onPause = function _onPause() {
    this.trigger(_events2.default.PLAYER_PAUSE);
  };

  Player.prototype._onStop = function _onStop() {
    this.trigger(_events2.default.PLAYER_STOP, this.getCurrentTime());
  };

  Player.prototype._onEnded = function _onEnded() {
    this.trigger(_events2.default.PLAYER_ENDED);
  };

  Player.prototype._onSeek = function _onSeek(time) {
    this.trigger(_events2.default.PLAYER_SEEK, time);
  };

  Player.prototype._onTimeUpdate = function _onTimeUpdate(timeProgress) {
    this.trigger(_events2.default.PLAYER_TIMEUPDATE, timeProgress);
  };

  Player.prototype._onError = function _onError(error) {
    this.trigger(_events2.default.PLAYER_ERROR, error);
  };

  Player.prototype._normalizeSources = function _normalizeSources(options) {
    var sources = options.sources || (options.source !== undefined ? [options.source] : []);
    return sources.length === 0 ? [{ source: '', mimeType: '' }] : sources;
  };

  /**
   * resizes the current player canvas.
   * @method resize
   * @param {Object} size should be a literal object with `height` and `width`.
   * @return {Player} itself
   * @example
   * ```javascript
   * player.resize({height: 360, width: 640})
   * ```
   */


  Player.prototype.resize = function resize(size) {
    this.core.resize(size);
    return this;
  };

  /**
   * loads a new source.
   * @method load
   * @param {Array|String} sources source or sources of video.
   * An array item can be a string or {source: <<source URL>>, mimeType: <<source mime type>>}
   * @param {String} mimeType a mime type, example: `'application/vnd.apple.mpegurl'`
   * @param {Boolean} [autoPlay=false] whether playing should be started immediately
   * @return {Player} itself
   */


  Player.prototype.load = function load(sources, mimeType, autoPlay) {
    if (autoPlay !== undefined) this.configure({ autoPlay: !!autoPlay });

    this.core.load(sources, mimeType);
    return this;
  };

  /**
   * destroys the current player and removes it from the DOM.
   * @method destroy
   * @return {Player} itself
   */


  Player.prototype.destroy = function destroy() {
    this.stopListening();
    this.core.destroy();
    return this;
  };

  /**
   * Gives user consent to playback. Required by mobile device after a click event before Player.load().
   * @method consent
   * @return {Player} itself
   */


  Player.prototype.consent = function consent() {
    this.core.getCurrentPlayback().consent();
    return this;
  };

  /**
   * plays the current video (`source`).
   * @method play
   * @return {Player} itself
   */


  Player.prototype.play = function play() {
    this.core.mediaControl.container.play();
    return this;
  };

  /**
   * pauses the current video (`source`).
   * @method pause
   * @return {Player} itself
   */


  Player.prototype.pause = function pause() {
    this.core.mediaControl.container.pause();
    return this;
  };

  /**
   * stops the current video (`source`).
   * @method stop
   * @return {Player} itself
   */


  Player.prototype.stop = function stop() {
    this.core.mediaControl.container.stop();
    return this;
  };

  /**
   * seeks the current video (`source`). For example, `player.seek(120)` will seek to second 120 (2minutes) of the current video.
   * @method seek
   * @param {Number} time should be a number between 0 and the video duration.
   * @return {Player} itself
   */


  Player.prototype.seek = function seek(time) {
    this.core.mediaControl.container.seek(time);
    return this;
  };

  /**
   * seeks the current video (`source`). For example, `player.seek(50)` will seek to the middle of the current video.
   * @method seekPercentage
   * @param {Number} time should be a number between 0 and 100.
   * @return {Player} itself
   */


  Player.prototype.seekPercentage = function seekPercentage(percentage) {
    this.core.mediaControl.container.seekPercentage(percentage);
    return this;
  };

  /**
   * Set the volume for the current video (`source`).
   * @method setVolume
   * @param {Number} volume should be a number between 0 and 100, 0 being mute and 100 the max volume.
   * @return {Player} itself
   */


  Player.prototype.setVolume = function setVolume(volume) {
    if (this.core && this.core.mediaControl) this.core.mediaControl.setVolume(volume);

    return this;
  };

  /**
   * Get the volume for the current video
   * @method getVolume
   * @return {Number} volume should be a number between 0 and 100, 0 being mute and 100 the max volume.
   */


  Player.prototype.getVolume = function getVolume() {
    return this.core && this.core.mediaControl ? this.core.mediaControl.volume : 0;
  };

  /**
   * mutes the current video (`source`).
   * @method mute
   * @return {Player} itself
   */


  Player.prototype.mute = function mute() {
    this._mutedVolume = this.getVolume();
    this.setVolume(0);
    return this;
  };

  /**
   * unmutes the current video (`source`).
   * @method unmute
   * @return {Player} itself
   */


  Player.prototype.unmute = function unmute() {
    this.setVolume(typeof this._mutedVolume === 'number' ? this._mutedVolume : 100);
    this._mutedVolume = null;
    return this;
  };

  /**
   * checks if the player is playing.
   * @method isPlaying
   * @return {Boolean} `true` if the current source is playing, otherwise `false`
   */


  Player.prototype.isPlaying = function isPlaying() {
    return this.core.mediaControl.container.isPlaying();
  };

  /**
   * returns `true` if DVR is enable otherwise `false`.
   * @method isDvrEnabled
   * @return {Boolean}
   */


  Player.prototype.isDvrEnabled = function isDvrEnabled() {
    return this.core.mediaControl.container.isDvrEnabled();
  };

  /**
   * returns `true` if DVR is in use otherwise `false`.
   * @method isDvrInUse
   * @return {Boolean}
   */


  Player.prototype.isDvrInUse = function isDvrInUse() {
    return this.core.mediaControl.container.isDvrInUse();
  };

  /**
   * enables to configure a player after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   * @return {Player} itself
   */


  Player.prototype.configure = function configure() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this._registerOptionEventListeners(options.events, this.options.events);
    this.core.configure(options);
    return this;
  };

  /**
   * get a plugin by its name.
   * @method getPlugin
   * @param {String} name of the plugin.
   * @return {Object} the plugin instance
   * @example
   * ```javascript
   * var poster = player.getPlugin('poster');
   * poster.hidePlayButton();
   * ```
   */


  Player.prototype.getPlugin = function getPlugin(name) {
    var plugins = this.core.plugins.concat(this.core.mediaControl.container.plugins);
    return plugins.filter(function (plugin) {
      return plugin.name === name;
    })[0];
  };

  /**
   * the current time in seconds.
   * @method getCurrentTime
   * @return {Number} current time (in seconds) of the current source
   */


  Player.prototype.getCurrentTime = function getCurrentTime() {
    return this.core.mediaControl.container.getCurrentTime();
  };

  /**
   * The time that "0" now represents relative to when playback started.
   * For a stream with a sliding window this will increase as content is
   * removed from the beginning.
   * @method getStartTimeOffset
   * @return {Number} time (in seconds) that time "0" represents.
   */


  Player.prototype.getStartTimeOffset = function getStartTimeOffset() {
    return this.core.mediaControl.container.getStartTimeOffset();
  };

  /**
   * the duration time in seconds.
   * @method getDuration
   * @return {Number} duration time (in seconds) of the current source
   */


  Player.prototype.getDuration = function getDuration() {
    return this.core.mediaControl.container.getDuration();
  };

  return Player;
}(_base_object2.default);

exports.default = Player;


(0, _assign2.default)(Player.prototype, _error_mixin2.default);
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(15);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(97) });


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(37);
var toObject = __webpack_require__(38);
var IObject = __webpack_require__(63);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(25)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21);
var toLength = __webpack_require__(64);
var toAbsoluteIndex = __webpack_require__(99);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
module.exports = __webpack_require__(6).Object.keys;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(38);
var $keys = __webpack_require__(29);

__webpack_require__(65)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(109);
module.exports = __webpack_require__(56).f('iterator');


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);
var defined = __webpack_require__(47);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(54);
var descriptor = __webpack_require__(28);
var setToStringTag = __webpack_require__(55);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(22)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var anObject = __webpack_require__(23);
var getKeys = __webpack_require__(29);

module.exports = __webpack_require__(19) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(16).document;
module.exports = document && document.documentElement;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(20);
var toObject = __webpack_require__(38);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
var global = __webpack_require__(16);
var hide = __webpack_require__(22);
var Iterators = __webpack_require__(30);
var TO_STRING_TAG = __webpack_require__(11)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(111);
var step = __webpack_require__(112);
var Iterators = __webpack_require__(30);
var toIObject = __webpack_require__(21);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(67)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
__webpack_require__(120);
__webpack_require__(121);
__webpack_require__(122);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(16);
var has = __webpack_require__(20);
var DESCRIPTORS = __webpack_require__(19);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(68);
var META = __webpack_require__(116).KEY;
var $fails = __webpack_require__(25);
var shared = __webpack_require__(50);
var setToStringTag = __webpack_require__(55);
var uid = __webpack_require__(36);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(56);
var wksDefine = __webpack_require__(57);
var enumKeys = __webpack_require__(117);
var isArray = __webpack_require__(118);
var anObject = __webpack_require__(23);
var isObject = __webpack_require__(24);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(45);
var createDesc = __webpack_require__(28);
var _create = __webpack_require__(54);
var gOPNExt = __webpack_require__(119);
var $GOPD = __webpack_require__(58);
var $DP = __webpack_require__(17);
var $keys = __webpack_require__(29);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(37).f = $propertyIsEnumerable;
  __webpack_require__(52).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(35)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(22)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(36)('meta');
var isObject = __webpack_require__(24);
var has = __webpack_require__(20);
var setDesc = __webpack_require__(17).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(25)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(37);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(46);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(21);
var gOPN = __webpack_require__(69).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {



/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57)('asyncIterator');


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57)('observable');


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(19), 'Object', { defineProperty: __webpack_require__(17).f });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
module.exports = __webpack_require__(6).Object.setPrototypeOf;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(15);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(128).set });


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(24);
var anObject = __webpack_require__(23);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(44)(Function.call, __webpack_require__(58).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
var $Object = __webpack_require__(6).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(54) });


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(133);
var $Object = __webpack_require__(6).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(21);
var $getOwnPropertyDescriptor = __webpack_require__(58).f;

__webpack_require__(65)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * Array.prototype.find
 *
 * Original source : https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * See also : https://tc39.github.io/ecma262/#sec-array.prototype.find
 */
if (!Array.prototype.find) {
  // eslint-disable-next-line
  Object.defineProperty(Array.prototype, 'find', {
    // Note: ES6 arrow function syntax is not used on purpose to avoid this to be undefined
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) throw new TypeError('"this" is null or not defined');

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) return kValue;

        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDevice = exports.getViewportSize = exports.getOsData = exports.getBrowserData = exports.getBrowserInfo = undefined;

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _browser_data = __webpack_require__(136);

var _browser_data2 = _interopRequireDefault(_browser_data);

var _os_data = __webpack_require__(137);

var _os_data2 = _interopRequireDefault(_os_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Browser = {};

var hasLocalstorage = function hasLocalstorage() {
  try {
    localStorage.setItem('clappr', 'clappr');
    localStorage.removeItem('clappr');
    return true;
  } catch (e) {
    return false;
  }
};

var hasFlash = function hasFlash() {
  try {
    var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    return !!fo;
  } catch (e) {
    return !!(navigator.mimeTypes && navigator.mimeTypes['application/x-shockwave-flash'] !== undefined && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin);
  }
};

var getBrowserInfo = exports.getBrowserInfo = function getBrowserInfo(ua) {
  var parts = ua.match(/\b(playstation 4|nx|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
      extra = void 0;
  if (/trident/i.test(parts[1])) {
    extra = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return {
      name: 'IE',
      version: parseInt(extra[1] || '')
    };
  } else if (parts[1] === 'Chrome') {
    extra = ua.match(/\bOPR\/(\d+)/);
    if (extra != null) return { name: 'Opera', version: parseInt(extra[1]) };

    extra = ua.match(/\bEdge\/(\d+)/);
    if (extra != null) return { name: 'Edge', version: parseInt(extra[1]) };
  } else if (/android/i.test(ua) && (extra = ua.match(/version\/(\d+)/i))) {
    parts.splice(1, 1, 'Android WebView');
    parts.splice(2, 1, extra[1]);
  }
  parts = parts[2] ? [parts[1], parts[2]] : [navigator.appName, navigator.appVersion, '-?'];

  return {
    name: parts[0],
    version: parseInt(parts[1])
  };
};

//  Get browser data
var getBrowserData = exports.getBrowserData = function getBrowserData() {
  var browserObject = {};
  var userAgent = Browser.userAgent.toLowerCase();

  // Check browser type
  for (var i in _browser_data2.default) {
    var browserRegExp = new RegExp(_browser_data2.default[i].identifier.toLowerCase());
    var browserRegExpResult = browserRegExp.exec(userAgent);

    if (browserRegExpResult != null && browserRegExpResult[1]) {
      browserObject.name = _browser_data2.default[i].name;
      browserObject.group = _browser_data2.default[i].group;

      // Check version
      if (_browser_data2.default[i].versionIdentifier) {
        var versionRegExp = new RegExp(_browser_data2.default[i].versionIdentifier.toLowerCase());
        var versionRegExpResult = versionRegExp.exec(userAgent);

        if (versionRegExpResult != null && versionRegExpResult[1]) setBrowserVersion(versionRegExpResult[1], browserObject);
      } else {
        setBrowserVersion(browserRegExpResult[1], browserObject);
      }
      break;
    }
  }
  return browserObject;
};

// Set browser version
var setBrowserVersion = function setBrowserVersion(version, browserObject) {
  var splitVersion = version.split('.', 2);
  browserObject.fullVersion = version;

  // Major version
  if (splitVersion[0]) browserObject.majorVersion = parseInt(splitVersion[0]);

  // Minor version
  if (splitVersion[1]) browserObject.minorVersion = parseInt(splitVersion[1]);
};

//  Get OS data
var getOsData = exports.getOsData = function getOsData() {
  var osObject = {};
  var userAgent = Browser.userAgent.toLowerCase();

  // Check browser type
  for (var i in _os_data2.default) {
    var osRegExp = new RegExp(_os_data2.default[i].identifier.toLowerCase());
    var osRegExpResult = osRegExp.exec(userAgent);

    if (osRegExpResult != null) {
      osObject.name = _os_data2.default[i].name;
      osObject.group = _os_data2.default[i].group;

      // Version defined
      if (_os_data2.default[i].version) {
        setOsVersion(_os_data2.default[i].version, _os_data2.default[i].versionSeparator ? _os_data2.default[i].versionSeparator : '.', osObject);

        // Version detected
      } else if (osRegExpResult[1]) {
        setOsVersion(osRegExpResult[1], _os_data2.default[i].versionSeparator ? _os_data2.default[i].versionSeparator : '.', osObject);

        // Version identifier
      } else if (_os_data2.default[i].versionIdentifier) {
        var versionRegExp = new RegExp(_os_data2.default[i].versionIdentifier.toLowerCase());
        var versionRegExpResult = versionRegExp.exec(userAgent);

        if (versionRegExpResult != null && versionRegExpResult[1]) setOsVersion(versionRegExpResult[1], _os_data2.default[i].versionSeparator ? _os_data2.default[i].versionSeparator : '.', osObject);
      }
      break;
    }
  }
  return osObject;
};

// Set OS version
var setOsVersion = function setOsVersion(version, separator, osObject) {
  var finalSeparator = separator.substr(0, 1) == '[' ? new RegExp(separator, 'g') : separator;
  var splitVersion = version.split(finalSeparator, 2);

  if (separator != '.') version = version.replace(new RegExp(separator, 'g'), '.');

  osObject.fullVersion = version;

  // Major version
  if (splitVersion && splitVersion[0]) osObject.majorVersion = parseInt(splitVersion[0]);

  // Minor version
  if (splitVersion && splitVersion[1]) osObject.minorVersion = parseInt(splitVersion[1]);
};

// Set viewport size
var getViewportSize = exports.getViewportSize = function getViewportSize() {
  var viewportObject = {};

  viewportObject.width = (0, _clapprZepto2.default)(window).width();
  viewportObject.height = (0, _clapprZepto2.default)(window).height();

  return viewportObject;
};

// Set viewport orientation
var setViewportOrientation = function setViewportOrientation() {
  switch (window.orientation) {
    case -90:
    case 90:
      Browser.viewport.orientation = 'landscape';
      break;
    default:
      Browser.viewport.orientation = 'portrait';
      break;
  }
};

var getDevice = exports.getDevice = function getDevice(ua) {
  var platformRegExp = /\((iP(?:hone|ad|od))?(?:[^;]*; ){0,2}([^)]+(?=\)))/;
  var matches = platformRegExp.exec(ua);
  var device = matches && (matches[1] || matches[2]) || '';
  return device;
};

var browserInfo = getBrowserInfo(navigator.userAgent);

Browser.isEdge = /edge/i.test(navigator.userAgent);
Browser.isChrome = /chrome|CriOS/i.test(navigator.userAgent) && !Browser.isEdge;
Browser.isSafari = /safari/i.test(navigator.userAgent) && !Browser.isChrome && !Browser.isEdge;
Browser.isFirefox = /firefox/i.test(navigator.userAgent);
Browser.isLegacyIE = !!window.ActiveXObject;
Browser.isIE = Browser.isLegacyIE || /trident.*rv:1\d/i.test(navigator.userAgent);
Browser.isIE11 = /trident.*rv:11/i.test(navigator.userAgent);
Browser.isChromecast = Browser.isChrome && /CrKey/i.test(navigator.userAgent);
Browser.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Mobile Safari|Opera Mini/i.test(navigator.userAgent);
Browser.isiOS = /iPad|iPhone|iPod/i.test(navigator.userAgent);
Browser.isAndroid = /Android/i.test(navigator.userAgent);
Browser.isWindowsPhone = /Windows Phone/i.test(navigator.userAgent);
Browser.isWin8App = /MSAppHost/i.test(navigator.userAgent);
Browser.isWiiU = /WiiU/i.test(navigator.userAgent);
Browser.isPS4 = /PlayStation 4/i.test(navigator.userAgent);
Browser.hasLocalstorage = hasLocalstorage();
Browser.hasFlash = hasFlash();

/**
* @deprecated
* This parameter currently exists for retrocompatibility reasons.
* Use Browser.data.name instead.
*/
Browser.name = browserInfo.name;

/**
* @deprecated
* This parameter currently exists for retrocompatibility reasons.
* Use Browser.data.fullVersion instead.
*/
Browser.version = browserInfo.version;

Browser.userAgent = navigator.userAgent;
Browser.data = getBrowserData();
Browser.os = getOsData();
Browser.viewport = getViewportSize();
Browser.device = getDevice(Browser.userAgent);
typeof window.orientation !== 'undefined' && setViewportOrientation();

exports.default = Browser;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-useless-escape */
// The order of the following arrays is important, be careful if you change it.

var BROWSER_DATA = [{
  name: 'Chromium',
  group: 'Chrome',
  identifier: 'Chromium/([0-9\.]*)'
}, {
  name: 'Chrome Mobile',
  group: 'Chrome',
  identifier: 'Chrome/([0-9\.]*) Mobile',
  versionIdentifier: 'Chrome/([0-9\.]*)'
}, {
  name: 'Chrome',
  group: 'Chrome',
  identifier: 'Chrome/([0-9\.]*)'
}, {
  name: 'Chrome for iOS',
  group: 'Chrome',
  identifier: 'CriOS/([0-9\.]*)'
}, {
  name: 'Android Browser',
  group: 'Chrome',
  identifier: 'CrMo/([0-9\.]*)'
}, {
  name: 'Firefox',
  group: 'Firefox',
  identifier: 'Firefox/([0-9\.]*)'
}, {
  name: 'Opera Mini',
  group: 'Opera',
  identifier: 'Opera Mini/([0-9\.]*)'
}, {
  name: 'Opera',
  group: 'Opera',
  identifier: 'Opera ([0-9\.]*)'
}, {
  name: 'Opera',
  group: 'Opera',
  identifier: 'Opera/([0-9\.]*)',
  versionIdentifier: 'Version/([0-9\.]*)'
}, {
  name: 'IEMobile',
  group: 'Explorer',
  identifier: 'IEMobile/([0-9\.]*)'
}, {
  name: 'Internet Explorer',
  group: 'Explorer',
  identifier: 'MSIE ([a-zA-Z0-9\.]*)'
}, {
  name: 'Internet Explorer',
  group: 'Explorer',
  identifier: 'Trident/([0-9\.]*)',
  versionIdentifier: 'rv:([0-9\.]*)'
}, {
  name: 'Spartan',
  group: 'Spartan',
  identifier: 'Edge/([0-9\.]*)',
  versionIdentifier: 'Edge/([0-9\.]*)'
}, {
  name: 'Safari',
  group: 'Safari',
  identifier: 'Safari/([0-9\.]*)',
  versionIdentifier: 'Version/([0-9\.]*)'
}];

exports.default = BROWSER_DATA;
module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-useless-escape */
// The order of the following arrays is important, be careful if you change it.

var OS_DATA = [{
  name: 'Windows 2000',
  group: 'Windows',
  identifier: 'Windows NT 5.0',
  version: '5.0'
}, {
  name: 'Windows XP',
  group: 'Windows',
  identifier: 'Windows NT 5.1',
  version: '5.1'
}, {
  name: 'Windows Vista',
  group: 'Windows',
  identifier: 'Windows NT 6.0',
  version: '6.0'
}, {
  name: 'Windows 7',
  group: 'Windows',
  identifier: 'Windows NT 6.1',
  version: '7.0'
}, {
  name: 'Windows 8',
  group: 'Windows',
  identifier: 'Windows NT 6.2',
  version: '8.0'
}, {
  name: 'Windows 8.1',
  group: 'Windows',
  identifier: 'Windows NT 6.3',
  version: '8.1'
}, {
  name: 'Windows 10',
  group: 'Windows',
  identifier: 'Windows NT 10.0',
  version: '10.0'
}, {
  name: 'Windows Phone',
  group: 'Windows Phone',
  identifier: 'Windows Phone ([0-9\.]*)'
}, {
  name: 'Windows Phone',
  group: 'Windows Phone',
  identifier: 'Windows Phone OS ([0-9\.]*)'
}, {
  name: 'Windows',
  group: 'Windows',
  identifier: 'Windows'
}, {
  name: 'Chrome OS',
  group: 'Chrome OS',
  identifier: 'CrOS'
}, {
  name: 'Android',
  group: 'Android',
  identifier: 'Android',
  versionIdentifier: 'Android ([a-zA-Z0-9\.-]*)'
}, {
  name: 'iPad',
  group: 'iOS',
  identifier: 'iPad',
  versionIdentifier: 'OS ([0-9_]*)',
  versionSeparator: '[_|\.]'
}, {
  name: 'iPod',
  group: 'iOS',
  identifier: 'iPod',
  versionIdentifier: 'OS ([0-9_]*)',
  versionSeparator: '[_|\.]'
}, {
  name: 'iPhone',
  group: 'iOS',
  identifier: 'iPhone OS',
  versionIdentifier: 'OS ([0-9_]*)',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X High Sierra',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])13([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Sierra',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])12([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X El Capitan',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])11([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Yosemite',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])10([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Mavericks',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])9([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Mountain Lion',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])8([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Lion',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])7([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Snow Leopard',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])6([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Leopard',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])5([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Tiger',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])4([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Panther',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])3([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Jaguar',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])2([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Puma',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])1([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Cheetah',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])0([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS',
  group: 'Mac OS',
  identifier: 'Mac OS'
}, {
  name: 'Ubuntu',
  group: 'Linux',
  identifier: 'Ubuntu',
  versionIdentifier: 'Ubuntu/([0-9\.]*)'
}, {
  name: 'Debian',
  group: 'Linux',
  identifier: 'Debian'
}, {
  name: 'Gentoo',
  group: 'Linux',
  identifier: 'Gentoo'
}, {
  name: 'Linux',
  group: 'Linux',
  identifier: 'Linux'
}, {
  name: 'BlackBerry',
  group: 'BlackBerry',
  identifier: 'BlackBerry'
}];

exports.default = OS_DATA;
module.exports = exports['default'];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _vendor = __webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BOLD = 'font-weight: bold; font-size: 13px;';
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var INFO = 'color: #006600;' + BOLD;
var DEBUG = 'color: #0000ff;' + BOLD;
var WARN = 'color: #ff8000;' + BOLD;
var ERROR = 'color: #ff0000;' + BOLD;

var LEVEL_DEBUG = 0;
var LEVEL_INFO = 1;
var LEVEL_WARN = 2;
var LEVEL_ERROR = 3;
var LEVEL_DISABLED = LEVEL_ERROR;

var COLORS = [DEBUG, INFO, WARN, ERROR, ERROR];
var DESCRIPTIONS = ['debug', 'info', 'warn', 'error', 'disabled'];

var Log = function () {
  function Log() {
    var _this = this;

    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LEVEL_INFO;
    var offLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LEVEL_DISABLED;
    (0, _classCallCheck3.default)(this, Log);

    this.kibo = new _vendor.Kibo();
    this.kibo.down(['ctrl shift d'], function () {
      return _this.onOff();
    });
    this.BLACKLIST = ['timeupdate', 'playback:timeupdate', 'playback:progress', 'container:hover', 'container:timeupdate', 'container:progress'];
    this.level = level;
    this.offLevel = offLevel;
  }

  Log.prototype.debug = function debug(klass) {
    this.log(klass, LEVEL_DEBUG, Array.prototype.slice.call(arguments, 1));
  };

  Log.prototype.info = function info(klass) {
    this.log(klass, LEVEL_INFO, Array.prototype.slice.call(arguments, 1));
  };

  Log.prototype.warn = function warn(klass) {
    this.log(klass, LEVEL_WARN, Array.prototype.slice.call(arguments, 1));
  };

  Log.prototype.error = function error(klass) {
    this.log(klass, LEVEL_ERROR, Array.prototype.slice.call(arguments, 1));
  };

  Log.prototype.onOff = function onOff() {
    if (this.level === this.offLevel) {
      this.level = this.previousLevel;
    } else {
      this.previousLevel = this.level;
      this.level = this.offLevel;
    }
    // handle instances where console.log is unavailable
    if (window.console && window.console.log) window.console.log('%c[Clappr.Log] set log level to ' + DESCRIPTIONS[this.level], WARN);
  };

  Log.prototype.level = function level(newLevel) {
    this.level = newLevel;
  };

  Log.prototype.log = function log(klass, level, message) {
    if (this.BLACKLIST.indexOf(message[0]) >= 0) return;
    if (level < this.level) return;

    if (!message) {
      message = klass;
      klass = null;
    }
    var color = COLORS[level];
    var klassDescription = '';
    if (klass) klassDescription = '[' + klass + ']';

    if (window.console && window.console.log) window.console.log.apply(console, ['%c[' + DESCRIPTIONS[level] + ']' + klassDescription, color].concat(message));
  };

  return Log;
}();

exports.default = Log;


Log.LEVEL_DEBUG = LEVEL_DEBUG;
Log.LEVEL_INFO = LEVEL_INFO;
Log.LEVEL_WARN = LEVEL_WARN;
Log.LEVEL_ERROR = LEVEL_ERROR;

Log.getInstance = function () {
  if (this._instance === undefined) {
    this._instance = new this();
    this._instance.previousLevel = this._instance.level;
    this._instance.level = this._instance.offLevel;
  }
  return this._instance;
};

Log.setLevel = function (level) {
  this.getInstance().level = level;
};

Log.debug = function () {
  this.getInstance().debug.apply(this.getInstance(), arguments);
};
Log.info = function () {
  this.getInstance().info.apply(this.getInstance(), arguments);
};
Log.warn = function () {
  this.getInstance().warn.apply(this.getInstance(), arguments);
};
Log.error = function () {
  this.getInstance().error.apply(this.getInstance(), arguments);
};
module.exports = exports['default'];

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
// Kibo is released under the MIT License. Copyright (c) 2013 marquete.
// see https://github.com/marquete/kibo

var Kibo = function Kibo(element) {
  this.element = element || window.document;
  this.initialize();
};

Kibo.KEY_NAMES_BY_CODE = {
  8: 'backspace', 9: 'tab', 13: 'enter',
  16: 'shift', 17: 'ctrl', 18: 'alt',
  20: 'caps_lock',
  27: 'esc',
  32: 'space',
  37: 'left', 38: 'up', 39: 'right', 40: 'down',
  48: '0', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9',
  65: 'a', 66: 'b', 67: 'c', 68: 'd', 69: 'e', 70: 'f', 71: 'g', 72: 'h', 73: 'i', 74: 'j',
  75: 'k', 76: 'l', 77: 'm', 78: 'n', 79: 'o', 80: 'p', 81: 'q', 82: 'r', 83: 's', 84: 't',
  85: 'u', 86: 'v', 87: 'w', 88: 'x', 89: 'y', 90: 'z', 112: 'f1', 113: 'f2', 114: 'f3',
  115: 'f4', 116: 'f5', 117: 'f6', 118: 'f7', 119: 'f8', 120: 'f9', 121: 'f10', 122: 'f11', 123: 'f12'
};

Kibo.KEY_CODES_BY_NAME = {};
(function () {
  for (var key in Kibo.KEY_NAMES_BY_CODE) {
    if (Object.prototype.hasOwnProperty.call(Kibo.KEY_NAMES_BY_CODE, key)) {
      Kibo.KEY_CODES_BY_NAME[Kibo.KEY_NAMES_BY_CODE[key]] = +key;
    }
  }
})();

Kibo.MODIFIERS = ['shift', 'ctrl', 'alt'];

Kibo.registerEvent = function () {
  if (document.addEventListener) {
    return function (element, eventName, func) {
      element.addEventListener(eventName, func, false);
    };
  } else if (document.attachEvent) {
    return function (element, eventName, func) {
      element.attachEvent('on' + eventName, func);
    };
  }
}();

Kibo.unregisterEvent = function () {
  if (document.removeEventListener) {
    return function (element, eventName, func) {
      element.removeEventListener(eventName, func, false);
    };
  } else if (document.detachEvent) {
    return function (element, eventName, func) {
      element.detachEvent('on' + eventName, func);
    };
  }
}();

Kibo.stringContains = function (string, substring) {
  return string.indexOf(substring) !== -1;
};

Kibo.neatString = function (string) {
  return string.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
};

Kibo.capitalize = function (string) {
  return string.toLowerCase().replace(/^./, function (match) {
    return match.toUpperCase();
  });
};

Kibo.isString = function (what) {
  return Kibo.stringContains(Object.prototype.toString.call(what), 'String');
};

Kibo.arrayIncludes = function () {
  if (Array.prototype.indexOf) {
    return function (haystack, needle) {
      return haystack.indexOf(needle) !== -1;
    };
  } else {
    return function (haystack, needle) {
      for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
          return true;
        }
      }
      return false;
    };
  }
}();

Kibo.extractModifiers = function (keyCombination) {
  var modifiers, i;
  modifiers = [];
  for (i = 0; i < Kibo.MODIFIERS.length; i++) {
    if (Kibo.stringContains(keyCombination, Kibo.MODIFIERS[i])) {
      modifiers.push(Kibo.MODIFIERS[i]);
    }
  }
  return modifiers;
};

Kibo.extractKey = function (keyCombination) {
  var keys, i;
  keys = Kibo.neatString(keyCombination).split(' ');
  for (i = 0; i < keys.length; i++) {
    if (!Kibo.arrayIncludes(Kibo.MODIFIERS, keys[i])) {
      return keys[i];
    }
  }
};

Kibo.modifiersAndKey = function (keyCombination) {
  var result, key;

  if (Kibo.stringContains(keyCombination, 'any')) {
    return Kibo.neatString(keyCombination).split(' ').slice(0, 2).join(' ');
  }

  result = Kibo.extractModifiers(keyCombination);

  key = Kibo.extractKey(keyCombination);
  if (key && !Kibo.arrayIncludes(Kibo.MODIFIERS, key)) {
    result.push(key);
  }

  return result.join(' ');
};

Kibo.keyName = function (keyCode) {
  return Kibo.KEY_NAMES_BY_CODE[keyCode + ''];
};

Kibo.keyCode = function (keyName) {
  return +Kibo.KEY_CODES_BY_NAME[keyName];
};

Kibo.prototype.initialize = function () {
  var i,
      that = this;

  this.lastKeyCode = -1;
  this.lastModifiers = {};
  for (i = 0; i < Kibo.MODIFIERS.length; i++) {
    this.lastModifiers[Kibo.MODIFIERS[i]] = false;
  }

  this.keysDown = { any: [] };
  this.keysUp = { any: [] };
  this.downHandler = this.handler('down');
  this.upHandler = this.handler('up');

  Kibo.registerEvent(this.element, 'keydown', this.downHandler);
  Kibo.registerEvent(this.element, 'keyup', this.upHandler);
  Kibo.registerEvent(window, 'unload', function unloader() {
    Kibo.unregisterEvent(that.element, 'keydown', that.downHandler);
    Kibo.unregisterEvent(that.element, 'keyup', that.upHandler);
    Kibo.unregisterEvent(window, 'unload', unloader);
  });
};

Kibo.prototype.handler = function (upOrDown) {
  var that = this;
  return function (e) {
    var i, registeredKeys, lastModifiersAndKey;

    e = e || window.event;

    that.lastKeyCode = e.keyCode;
    for (i = 0; i < Kibo.MODIFIERS.length; i++) {
      that.lastModifiers[Kibo.MODIFIERS[i]] = e[Kibo.MODIFIERS[i] + 'Key'];
    }
    if (Kibo.arrayIncludes(Kibo.MODIFIERS, Kibo.keyName(that.lastKeyCode))) {
      that.lastModifiers[Kibo.keyName(that.lastKeyCode)] = true;
    }

    registeredKeys = that['keys' + Kibo.capitalize(upOrDown)];

    for (i = 0; i < registeredKeys.any.length; i++) {
      if (registeredKeys.any[i](e) === false && e.preventDefault) {
        e.preventDefault();
      }
    }

    lastModifiersAndKey = that.lastModifiersAndKey();
    if (registeredKeys[lastModifiersAndKey]) {
      for (i = 0; i < registeredKeys[lastModifiersAndKey].length; i++) {
        if (registeredKeys[lastModifiersAndKey][i](e) === false && e.preventDefault) {
          e.preventDefault();
        }
      }
    }
  };
};

Kibo.prototype.registerKeys = function (upOrDown, newKeys, func) {
  var i,
      keys,
      registeredKeys = this['keys' + Kibo.capitalize(upOrDown)];

  if (Kibo.isString(newKeys)) {
    newKeys = [newKeys];
  }

  for (i = 0; i < newKeys.length; i++) {
    keys = newKeys[i];
    keys = Kibo.modifiersAndKey(keys + '');

    if (registeredKeys[keys]) {
      registeredKeys[keys].push(func);
    } else {
      registeredKeys[keys] = [func];
    }
  }

  return this;
};

// jshint maxdepth:5
Kibo.prototype.unregisterKeys = function (upOrDown, newKeys, func) {
  var i,
      j,
      keys,
      registeredKeys = this['keys' + Kibo.capitalize(upOrDown)];

  if (Kibo.isString(newKeys)) {
    newKeys = [newKeys];
  }

  for (i = 0; i < newKeys.length; i++) {
    keys = newKeys[i];
    keys = Kibo.modifiersAndKey(keys + '');

    if (func === null) {
      delete registeredKeys[keys];
    } else {
      if (registeredKeys[keys]) {
        for (j = 0; j < registeredKeys[keys].length; j++) {
          if (String(registeredKeys[keys][j]) === String(func)) {
            registeredKeys[keys].splice(j, 1);
            break;
          }
        }
      }
    }
  }

  return this;
};

Kibo.prototype.off = function (keys) {
  return this.unregisterKeys('down', keys, null);
};

Kibo.prototype.delegate = function (upOrDown, keys, func) {
  return func !== null || func !== undefined ? this.registerKeys(upOrDown, keys, func) : this.unregisterKeys(upOrDown, keys, func);
};

Kibo.prototype.down = function (keys, func) {
  return this.delegate('down', keys, func);
};

Kibo.prototype.up = function (keys, func) {
  return this.delegate('up', keys, func);
};

Kibo.prototype.lastKey = function (modifier) {
  if (!modifier) {
    return Kibo.keyName(this.lastKeyCode);
  }

  return this.lastModifiers[modifier];
};

Kibo.prototype.lastModifiersAndKey = function () {
  var result, i;

  result = [];
  for (i = 0; i < Kibo.MODIFIERS.length; i++) {
    if (this.lastKey(Kibo.MODIFIERS[i])) {
      result.push(Kibo.MODIFIERS[i]);
    }
  }

  if (!Kibo.arrayIncludes(result, this.lastKey())) {
    result.push(this.lastKey());
  }

  return result.join(' ');
};

exports.default = Kibo;
module.exports = exports['default'];

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core_factory = __webpack_require__(141);

var _core_factory2 = _interopRequireDefault(_core_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core_factory2.default;
module.exports = exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _base_object = __webpack_require__(14);

var _base_object2 = _interopRequireDefault(_base_object);

var _core = __webpack_require__(73);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Core Factory is responsible for instantiate the core and it's plugins.
 * @class CoreFactory
 * @constructor
 * @extends BaseObject
 * @module components
 */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var CoreFactory = function (_BaseObject) {
  (0, _inherits3.default)(CoreFactory, _BaseObject);
  (0, _createClass3.default)(CoreFactory, [{
    key: 'loader',
    get: function get() {
      return this.player.loader;
    }

    /**
     * it builds the core factory
     * @method constructor
     * @param {Player} player the player object
     */

  }]);

  function CoreFactory(player) {
    (0, _classCallCheck3.default)(this, CoreFactory);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this));

    _this.player = player;
    _this._options = player.options;
    return _this;
  }

  /**
   * creates a core and its plugins
   * @method create
   * @return {Core} created core
   */


  CoreFactory.prototype.create = function create() {
    this.options.loader = this.loader;
    this.core = new _core2.default(this.options);
    this.addCorePlugins();
    this.core.createContainers(this.options);
    return this.core;
  };

  /**
   * given the core plugins (`loader.corePlugins`) it builds each one
   * @method addCorePlugins
   * @return {Core} the core with all plugins
   */


  CoreFactory.prototype.addCorePlugins = function addCorePlugins() {
    var _this2 = this;

    this.loader.corePlugins.forEach(function (Plugin) {
      var plugin = new Plugin(_this2.core);
      _this2.core.addPlugin(plugin);
      _this2.setupExternalInterface(plugin);
    });
    return this.core;
  };

  CoreFactory.prototype.setupExternalInterface = function setupExternalInterface(plugin) {
    var externalFunctions = plugin.getExternalInterface();
    for (var key in externalFunctions) {
      this.player[key] = externalFunctions[key].bind(plugin);
    }
  };

  return CoreFactory;
}(_base_object2.default);

exports.default = CoreFactory;
module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _ui_object = __webpack_require__(26);

var _ui_object2 = _interopRequireDefault(_ui_object);

var _browser = __webpack_require__(31);

var _browser2 = _interopRequireDefault(_browser);

var _container_factory = __webpack_require__(143);

var _container_factory2 = _interopRequireDefault(_container_factory);

var _mediator = __webpack_require__(76);

var _mediator2 = _interopRequireDefault(_mediator);

var _player_info = __webpack_require__(40);

var _player_info2 = _interopRequireDefault(_player_info);

var _error = __webpack_require__(27);

var _error2 = _interopRequireDefault(_error);

var _error_mixin = __webpack_require__(18);

var _error_mixin2 = _interopRequireDefault(_error_mixin);

var _styler = __webpack_require__(77);

var _styler2 = _interopRequireDefault(_styler);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

__webpack_require__(149);

var _fonts = __webpack_require__(151);

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = void 0;

/**
 * The Core is responsible to manage Containers, the mediator, MediaControl
 * and the player state.
 * @class Core
 * @constructor
 * @extends UIObject
 * @module components
 */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var Core = function (_UIObject) {
  (0, _inherits3.default)(Core, _UIObject);
  (0, _createClass3.default)(Core, [{
    key: 'events',
    get: function get() {
      return {
        'webkitfullscreenchange': 'handleFullscreenChange',
        'mousemove': 'showMediaControl',
        'mouseleave': 'hideMediaControl'
      };
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'data-player': '',
        tabindex: 9999
      };
    }

    /**
     * checks if the core is ready.
     * @property isReady
     * @type {Boolean} `true` if the core is ready, otherwise `false`
     */

  }, {
    key: 'isReady',
    get: function get() {
      return !!this.ready;
    }

    /**
     * The internationalization plugin.
     * @property i18n
     * @type {Strings}
     */

  }, {
    key: 'i18n',
    get: function get() {
      return this.getPlugin('strings') || { t: function t(key) {
          return key;
        } };
    }
  }]);

  function Core(options) {
    (0, _classCallCheck3.default)(this, Core);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIObject.call(this, options));

    _this.playerError = new _error2.default(options, _this);
    _this.configureDomRecycler();
    _this.playerInfo = _player_info2.default.getInstance(options.playerId);
    _this.firstResize = true;
    _this.plugins = [];
    _this.containers = [];
    _this.setupMediaControl(null);
    //FIXME fullscreen api sucks
    _this._boundFullscreenHandler = function () {
      return _this.handleFullscreenChange();
    };
    (0, _clapprZepto2.default)(document).bind('fullscreenchange', _this._boundFullscreenHandler);
    (0, _clapprZepto2.default)(document).bind('MSFullscreenChange', _this._boundFullscreenHandler);
    (0, _clapprZepto2.default)(document).bind('mozfullscreenchange', _this._boundFullscreenHandler);
    _browser2.default.isMobile && (0, _clapprZepto2.default)(window).bind('resize', function (o) {
      _this.handleWindowResize(o);
    });
    return _this;
  }

  Core.prototype.configureDomRecycler = function configureDomRecycler() {
    var recycleVideo = this.options && this.options.playback && this.options.playback.recycleVideo ? true : false;
    _utils.DomRecycler.configure({
      recycleVideo: recycleVideo
    });
  };

  Core.prototype.createContainers = function createContainers(options) {
    var _this2 = this;

    this.defer = _clapprZepto2.default.Deferred();
    this.defer.promise(this);
    this.containerFactory = new _container_factory2.default(options, options.loader, this.i18n, this.playerError);
    this.containerFactory.createContainers().then(function (containers) {
      return _this2.setupContainers(containers);
    }).then(function (containers) {
      return _this2.resolveOnContainersReady(containers);
    });
  };

  Core.prototype.updateSize = function updateSize() {
    if (_utils.Fullscreen.isFullscreen()) this.setFullscreen();else this.setPlayerSize();
  };

  Core.prototype.setFullscreen = function setFullscreen() {
    if (!_browser2.default.isiOS) {
      this.$el.addClass('fullscreen');
      this.$el.removeAttr('style');
      this.playerInfo.previousSize = { width: this.options.width, height: this.options.height };
      this.playerInfo.currentSize = { width: (0, _clapprZepto2.default)(window).width(), height: (0, _clapprZepto2.default)(window).height() };
    }
  };

  Core.prototype.setPlayerSize = function setPlayerSize() {
    this.$el.removeClass('fullscreen');
    this.playerInfo.currentSize = this.playerInfo.previousSize;
    this.playerInfo.previousSize = { width: (0, _clapprZepto2.default)(window).width(), height: (0, _clapprZepto2.default)(window).height() };
    this.resize(this.playerInfo.currentSize);
  };

  Core.prototype.resize = function resize(options) {
    if (!(0, _utils.isNumber)(options.height) && !(0, _utils.isNumber)(options.width)) {
      this.el.style.height = '' + options.height;
      this.el.style.width = '' + options.width;
    } else {
      this.el.style.height = options.height + 'px';
      this.el.style.width = options.width + 'px';
    }
    this.playerInfo.previousSize = { width: this.options.width, height: this.options.height };
    this.options.width = options.width;
    this.options.height = options.height;
    this.playerInfo.currentSize = options;
    this.triggerResize(this.playerInfo.currentSize);
  };

  Core.prototype.enableResizeObserver = function enableResizeObserver() {
    var _this3 = this;

    var checkSizeCallback = function checkSizeCallback() {
      if (_this3.playerInfo.computedSize.width !== _this3.el.clientWidth || _this3.playerInfo.computedSize.height !== _this3.el.clientHeight) {
        _this3.playerInfo.computedSize = { width: _this3.el.clientWidth, height: _this3.el.clientHeight };
        _this3.triggerResize(_this3.playerInfo.computedSize);
      }
    };
    this.resizeObserverInterval = setInterval(checkSizeCallback, 500);
  };

  Core.prototype.triggerResize = function triggerResize(newSize) {
    var thereWasChange = this.firstResize || this.oldHeight !== newSize.height || this.oldWidth !== newSize.width;
    if (thereWasChange) {
      _mediator2.default.trigger(this.options.playerId + ':' + _events2.default.PLAYER_RESIZE, newSize);
      this.oldHeight = newSize.height;
      this.oldWidth = newSize.width;
      this.firstResize = false;
    }
  };

  Core.prototype.disableResizeObserver = function disableResizeObserver() {
    if (this.resizeObserverInterval) clearInterval(this.resizeObserverInterval);
  };

  Core.prototype.resolveOnContainersReady = function resolveOnContainersReady(containers) {
    var _this4 = this;

    _clapprZepto2.default.when.apply(_clapprZepto2.default, containers).done(function () {
      _this4.defer.resolve(_this4);
      _this4.ready = true;
      _this4.trigger(_events2.default.CORE_READY);
    });
  };

  Core.prototype.addPlugin = function addPlugin(plugin) {
    this.plugins.push(plugin);
  };

  Core.prototype.hasPlugin = function hasPlugin(name) {
    return !!this.getPlugin(name);
  };

  Core.prototype.getPlugin = function getPlugin(name) {
    return this.plugins.filter(function (plugin) {
      return plugin.name === name;
    })[0];
  };

  Core.prototype.load = function load(sources, mimeType) {
    var _this5 = this;

    this.options.mimeType = mimeType;
    sources = sources && sources.constructor === Array ? sources : [sources];
    this.options.sources = sources;
    this.containers.forEach(function (container) {
      return container.destroy();
    });
    this.mediaControl.container = null;
    this.containerFactory.options = _clapprZepto2.default.extend(this.options, { sources: sources });
    this.containerFactory.createContainers().then(function (containers) {
      return _this5.setupContainers(containers);
    }).then(function (containers) {
      return _this5.resolveOnContainersReady(containers);
    });
  };

  Core.prototype.destroy = function destroy() {
    this.disableResizeObserver();
    this.containers.forEach(function (container) {
      return container.destroy();
    });
    this.plugins.forEach(function (plugin) {
      return plugin.destroy();
    });
    this.$el.remove();
    this.mediaControl.destroy();
    (0, _clapprZepto2.default)(document).unbind('fullscreenchange', this._boundFullscreenHandler);
    (0, _clapprZepto2.default)(document).unbind('MSFullscreenChange', this._boundFullscreenHandler);
    (0, _clapprZepto2.default)(document).unbind('mozfullscreenchange', this._boundFullscreenHandler);
    this.stopListening();
  };

  Core.prototype.handleFullscreenChange = function handleFullscreenChange() {
    this.trigger(_events2.default.CORE_FULLSCREEN, _utils.Fullscreen.isFullscreen());
    this.updateSize();
    this.mediaControl.show();
  };

  Core.prototype.handleWindowResize = function handleWindowResize(event) {
    var orientation = (0, _clapprZepto2.default)(window).width() > (0, _clapprZepto2.default)(window).height() ? 'landscape' : 'portrait';
    if (this._screenOrientation === orientation) return;
    this._screenOrientation = orientation;

    this.trigger(_events2.default.CORE_SCREEN_ORIENTATION_CHANGED, {
      event: event,
      orientation: this._screenOrientation
    });
  };

  Core.prototype.setMediaControlContainer = function setMediaControlContainer(container) {
    this.mediaControl.setContainer(container);
    this.mediaControl.render();
  };

  Core.prototype.disableMediaControl = function disableMediaControl() {
    this.mediaControl.disable();
    this.$el.removeClass('nocursor');
  };

  Core.prototype.enableMediaControl = function enableMediaControl() {
    this.mediaControl.enable();
  };

  Core.prototype.removeContainer = function removeContainer(container) {
    this.stopListening(container);
    this.containers = this.containers.filter(function (c) {
      return c !== container;
    });
  };

  Core.prototype.setupContainer = function setupContainer(container) {
    this.listenTo(container, _events2.default.CONTAINER_DESTROYED, this.removeContainer);
    this.containers.push(container);
  };

  Core.prototype.setupContainers = function setupContainers(containers) {
    containers.forEach(this.setupContainer.bind(this));
    this.trigger(_events2.default.CORE_CONTAINERS_CREATED);
    this.renderContainers();
    this.setupMediaControl(this.getCurrentContainer());
    this.render();
    this.appendToParent();
    return this.containers;
  };

  Core.prototype.renderContainers = function renderContainers() {
    var _this6 = this;

    this.containers.forEach(function (container) {
      return _this6.el.appendChild(container.render().el);
    });
  };

  Core.prototype.createContainer = function createContainer(source, options) {
    var container = this.containerFactory.createContainer(source, options);
    this.setupContainer(container);
    this.el.appendChild(container.render().el);
    return container;
  };

  Core.prototype.setupMediaControl = function setupMediaControl(container) {
    if (this.mediaControl) {
      this.mediaControl.setContainer(container);
    } else {
      this.mediaControl = this.createMediaControl(_clapprZepto2.default.extend({ container: container, focusElement: this.el }, this.options));
      this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_FULLSCREEN, this.toggleFullscreen);
      this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_SHOW, this.onMediaControlShow.bind(this, true));
      this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_HIDE, this.onMediaControlShow.bind(this, false));
    }
  };

  Core.prototype.createMediaControl = function createMediaControl(options) {
    if (options.mediacontrol && options.mediacontrol.external) return new options.mediacontrol.external(options).render();
    // else
    //   return new MediaControl(options).render()
  };

  Core.prototype.getCurrentContainer = function getCurrentContainer() {
    if (!this.mediaControl || !this.mediaControl.container) return this.containers[0];

    return this.mediaControl.container;
  };

  Core.prototype.getCurrentPlayback = function getCurrentPlayback() {
    var container = this.getCurrentContainer();
    return container && container.playback;
  };

  Core.prototype.getPlaybackType = function getPlaybackType() {
    var container = this.getCurrentContainer();
    return container && container.getPlaybackType();
  };

  Core.prototype.toggleFullscreen = function toggleFullscreen() {
    if (!_utils.Fullscreen.isFullscreen()) {
      _utils.Fullscreen.requestFullscreen(this.el);
      if (!_browser2.default.isiOS) this.$el.addClass('fullscreen');
    } else {
      _utils.Fullscreen.cancelFullscreen();
      if (!_browser2.default.isiOS) this.$el.removeClass('fullscreen nocursor');
    }
    this.mediaControl.show();
  };

  Core.prototype.showMediaControl = function showMediaControl(event) {
    this.mediaControl.show(event);
  };

  Core.prototype.hideMediaControl = function hideMediaControl() {
    this.mediaControl.hide(this.options.hideMediaControlDelay);
  };

  Core.prototype.onMediaControlShow = function onMediaControlShow(showing) {
    this.getCurrentContainer().trigger(showing ? _events2.default.CONTAINER_MEDIACONTROL_SHOW : _events2.default.CONTAINER_MEDIACONTROL_HIDE);

    if (showing) this.$el.removeClass('nocursor');else if (_utils.Fullscreen.isFullscreen()) this.$el.addClass('nocursor');
  };

  /**
   * enables to configure the container after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   */


  Core.prototype.configure = function configure(options) {
    var _this7 = this;

    this._options = _clapprZepto2.default.extend(this._options, options);
    this.configureDomRecycler();
    var sources = options.source || options.sources;

    if (sources) this.load(sources, options.mimeType || this.options.mimeType);

    this.trigger(_events2.default.CORE_OPTIONS_CHANGE);
    this.containers.forEach(function (container) {
      container.configure(_this7.options);
    });
    this.mediaControl.configure(this.options);
  };

  Core.prototype.appendToParent = function appendToParent() {
    var hasCoreParent = this.$el.parent() && this.$el.parent().length;
    !hasCoreParent && this.$el.appendTo(this.options.parentElement);
  };

  Core.prototype.render = function render() {
    this.$el.append(this.mediaControl.render().el);

    if (!style) style = _styler2.default.getStyleFor(_fonts2.default, { baseUrl: this.options.baseUrl });

    (0, _clapprZepto2.default)('head').append(style);

    this.options.width = this.options.width || this.$el.width();
    this.options.height = this.options.height || this.$el.height();
    var size = { width: this.options.width, height: this.options.height };
    this.playerInfo.previousSize = this.playerInfo.currentSize = this.playerInfo.computedSize = size;
    this.updateSize();

    this.previousSize = { width: this.$el.width(), height: this.$el.height() };

    this.enableResizeObserver();

    return this;
  };

  return Core;
}(_ui_object2.default);

exports.default = Core;


(0, _assign2.default)(Core.prototype, _error_mixin2.default);
module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _container_factory = __webpack_require__(144);

var _container_factory2 = _interopRequireDefault(_container_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _container_factory2.default;
module.exports = exports['default'];

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _base_object = __webpack_require__(14);

var _base_object2 = _interopRequireDefault(_base_object);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _container = __webpack_require__(74);

var _container2 = _interopRequireDefault(_container);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * The ContainerFactory is responsible for manage playback bootstrap and create containers.
 */

var ContainerFactory = function (_BaseObject) {
  (0, _inherits3.default)(ContainerFactory, _BaseObject);
  (0, _createClass3.default)(ContainerFactory, [{
    key: 'options',
    get: function get() {
      return this._options;
    },
    set: function set(options) {
      this._options = options;
    }
  }]);

  function ContainerFactory(options, loader, i18n, playerError) {
    (0, _classCallCheck3.default)(this, ContainerFactory);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, options));

    _this._i18n = i18n;
    _this.loader = loader;
    _this.playerError = playerError;
    return _this;
  }

  ContainerFactory.prototype.createContainers = function createContainers() {
    var _this2 = this;

    return _clapprZepto2.default.Deferred(function (promise) {
      promise.resolve(_this2.options.sources.map(function (source) {
        return _this2.createContainer(source);
      }));
    });
  };

  ContainerFactory.prototype.findPlaybackPlugin = function findPlaybackPlugin(source, mimeType) {
    return this.loader.playbackPlugins.filter(function (p) {
      return p.canPlay(source, mimeType);
    })[0];
  };

  ContainerFactory.prototype.createContainer = function createContainer(source) {
    var resolvedSource = null,
        mimeType = this.options.mimeType;
    if ((typeof source === 'undefined' ? 'undefined' : (0, _typeof3.default)(source)) === 'object') {
      resolvedSource = source.source.toString();
      if (source.mimeType) mimeType = source.mimeType;
    } else {
      resolvedSource = source.toString();
    }

    if (resolvedSource.match(/^\/\//)) resolvedSource = window.location.protocol + resolvedSource;

    var options = _clapprZepto2.default.extend({}, this.options, {
      src: resolvedSource,
      mimeType: mimeType
    });
    var playbackPlugin = this.findPlaybackPlugin(resolvedSource, mimeType);
    var playback = new playbackPlugin(options, this._i18n, this.playerError);

    options = _clapprZepto2.default.extend({}, options, { playback: playback });

    var container = new _container2.default(options, this._i18n, this.playerError);
    var defer = _clapprZepto2.default.Deferred();
    defer.promise(container);
    this.addContainerPlugins(container);
    this.listenToOnce(container, _events2.default.CONTAINER_READY, function () {
      return defer.resolve(container);
    });
    return container;
  };

  ContainerFactory.prototype.addContainerPlugins = function addContainerPlugins(container) {
    this.loader.containerPlugins.forEach(function (Plugin) {
      container.addPlugin(new Plugin(container));
    });
  };

  return ContainerFactory;
}(_base_object2.default);

exports.default = ContainerFactory;
module.exports = exports['default'];

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _ui_object = __webpack_require__(26);

var _ui_object2 = _interopRequireDefault(_ui_object);

var _error_mixin = __webpack_require__(18);

var _error_mixin2 = _interopRequireDefault(_error_mixin);

__webpack_require__(146);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An abstraction to represent a container for a given playback
 * TODO: describe its responsabilities
 * @class Container
 * @constructor
 * @extends UIObject
 * @module base
 */
var Container = function (_UIObject) {
  (0, _inherits3.default)(Container, _UIObject);
  (0, _createClass3.default)(Container, [{
    key: 'name',

    /**
     * container's name
     * @method name
     * @default Container
     * @return {String} container's name
     */
    get: function get() {
      return 'Container';
    }
  }, {
    key: 'attributes',
    get: function get() {
      return { class: 'container', 'data-container': '' };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click': 'clicked',
        'dblclick': 'dblClicked',
        'doubleTap': 'dblClicked',
        'contextmenu': 'onContextMenu',
        'mouseenter': 'mouseEnter',
        'mouseleave': 'mouseLeave'
      };
    }

    /**
     * Determine if the playback has ended.
     * @property ended
     * @type Boolean
     */

  }, {
    key: 'ended',
    get: function get() {
      return this.playback.ended;
    }

    /**
     * Determine if the playback is having to buffer in order for
     * playback to be smooth.
     * (i.e if a live stream is playing smoothly, this will be false)
     * @property buffering
     * @type Boolean
     */

  }, {
    key: 'buffering',
    get: function get() {
      return this.playback.buffering;
    }

    /**
     * The internationalization plugin.
     * @property i18n
     * @type {Strings}
     */

  }, {
    key: 'i18n',
    get: function get() {
      return this._i18n;
    }

    /**
     * checks if has closed caption tracks.
     * @property hasClosedCaptionsTracks
     * @type {Boolean}
     */

  }, {
    key: 'hasClosedCaptionsTracks',
    get: function get() {
      return this.playback.hasClosedCaptionsTracks;
    }

    /**
     * gets the available closed caption tracks.
     * @property closedCaptionsTracks
     * @type {Array} an array of objects with at least 'id' and 'name' properties
     */

  }, {
    key: 'closedCaptionsTracks',
    get: function get() {
      return this.playback.closedCaptionsTracks;
    }

    /**
     * gets the selected closed caption track index. (-1 is disabled)
     * @property closedCaptionsTrackId
     * @type {Number}
     */

  }, {
    key: 'closedCaptionsTrackId',
    get: function get() {
      return this.playback.closedCaptionsTrackId;
    }

    /**
     * sets the selected closed caption track index. (-1 is disabled)
     * @property closedCaptionsTrackId
     * @type {Number}
     */
    ,
    set: function set(trackId) {
      this.playback.closedCaptionsTrackId = trackId;
    }

    /**
     * it builds a container
     * @method constructor
     * @param {Object} options the options object
     * @param {Strings} i18n the internationalization component
     */

  }]);

  function Container(options, i18n, playerError) {
    (0, _classCallCheck3.default)(this, Container);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIObject.call(this, options));

    _this._i18n = i18n;
    _this.currentTime = 0;
    _this.volume = 100;
    _this.playback = options.playback;
    _this.playerError = playerError;
    _this.settings = _clapprZepto2.default.extend({}, _this.playback.settings);
    _this.isReady = false;
    _this.mediaControlDisabled = false;
    _this.plugins = [_this.playback];
    _this.bindEvents();
    return _this;
  }

  /**
   * binds playback events to the methods of the container.
   * it listens to playback's events and triggers them as container events.
   *
   * | Playback |
   * |----------|
   * | progress |
   * | timeupdate |
   * | ready |
   * | buffering |
   * | bufferfull |
   * | settingsupdate |
   * | loadedmetadata |
   * | highdefinitionupdate |
   * | bitrate |
   * | playbackstate |
   * | dvr |
   * | mediacontrol_disable |
   * | mediacontrol_enable |
   * | ended |
   * | play |
   * | pause |
   * | error |
   *
   * ps: the events usually translate from PLABACK_x to CONTAINER_x, you can check all the events at `Event` class.
   *
   * @method bindEvents
   */


  Container.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.playback, _events2.default.PLAYBACK_PROGRESS, this.progress);
    this.listenTo(this.playback, _events2.default.PLAYBACK_TIMEUPDATE, this.timeUpdated);
    this.listenTo(this.playback, _events2.default.PLAYBACK_READY, this.ready);
    this.listenTo(this.playback, _events2.default.PLAYBACK_BUFFERING, this.onBuffering);
    this.listenTo(this.playback, _events2.default.PLAYBACK_BUFFERFULL, this.bufferfull);
    this.listenTo(this.playback, _events2.default.PLAYBACK_SETTINGSUPDATE, this.settingsUpdate);
    this.listenTo(this.playback, _events2.default.PLAYBACK_LOADEDMETADATA, this.loadedMetadata);
    this.listenTo(this.playback, _events2.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate);
    this.listenTo(this.playback, _events2.default.PLAYBACK_BITRATE, this.updateBitrate);
    this.listenTo(this.playback, _events2.default.PLAYBACK_PLAYBACKSTATE, this.playbackStateChanged);
    this.listenTo(this.playback, _events2.default.PLAYBACK_DVR, this.playbackDvrStateChanged);
    this.listenTo(this.playback, _events2.default.PLAYBACK_MEDIACONTROL_DISABLE, this.disableMediaControl);
    this.listenTo(this.playback, _events2.default.PLAYBACK_MEDIACONTROL_ENABLE, this.enableMediaControl);
    this.listenTo(this.playback, _events2.default.PLAYBACK_SEEKED, this.onSeeked);
    this.listenTo(this.playback, _events2.default.PLAYBACK_ENDED, this.onEnded);
    this.listenTo(this.playback, _events2.default.PLAYBACK_PLAY, this.playing);
    this.listenTo(this.playback, _events2.default.PLAYBACK_PAUSE, this.paused);
    this.listenTo(this.playback, _events2.default.PLAYBACK_STOP, this.stopped);
    this.listenTo(this.playback, _events2.default.PLAYBACK_ERROR, this.error);
    this.listenTo(this.playback, _events2.default.PLAYBACK_SUBTITLE_AVAILABLE, this.subtitleAvailable);
    this.listenTo(this.playback, _events2.default.PLAYBACK_SUBTITLE_CHANGED, this.subtitleChanged);
  };

  Container.prototype.subtitleAvailable = function subtitleAvailable() {
    this.trigger(_events2.default.CONTAINER_SUBTITLE_AVAILABLE);
  };

  Container.prototype.subtitleChanged = function subtitleChanged(track) {
    this.trigger(_events2.default.CONTAINER_SUBTITLE_CHANGED, track);
  };

  Container.prototype.playbackStateChanged = function playbackStateChanged(state) {
    this.trigger(_events2.default.CONTAINER_PLAYBACKSTATE, state);
  };

  Container.prototype.playbackDvrStateChanged = function playbackDvrStateChanged(dvrInUse) {
    this.settings = this.playback.settings;
    this.dvrInUse = dvrInUse;
    this.trigger(_events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, dvrInUse);
  };

  Container.prototype.updateBitrate = function updateBitrate(newBitrate) {
    this.trigger(_events2.default.CONTAINER_BITRATE, newBitrate);
  };

  Container.prototype.statsReport = function statsReport(metrics) {
    this.trigger(_events2.default.CONTAINER_STATS_REPORT, metrics);
  };

  Container.prototype.getPlaybackType = function getPlaybackType() {
    return this.playback.getPlaybackType();
  };

  /**
   * returns `true` if DVR is enable otherwise `false`.
   * @method isDvrEnabled
   * @return {Boolean}
   */


  Container.prototype.isDvrEnabled = function isDvrEnabled() {
    return !!this.playback.dvrEnabled;
  };

  /**
   * returns `true` if DVR is in use otherwise `false`.
   * @method isDvrInUse
   * @return {Boolean}
   */


  Container.prototype.isDvrInUse = function isDvrInUse() {
    return !!this.dvrInUse;
  };

  /**
   * destroys the container
   * @method destroy
   */


  Container.prototype.destroy = function destroy() {
    this.trigger(_events2.default.CONTAINER_DESTROYED, this, this.name);
    this.stopListening();
    this.plugins.forEach(function (plugin) {
      return plugin.destroy();
    });
    this.$el.remove();
  };

  Container.prototype.setStyle = function setStyle(style) {
    this.$el.css(style);
  };

  Container.prototype.animate = function animate(style, duration) {
    return this.$el.animate(style, duration).promise();
  };

  Container.prototype.ready = function ready() {
    this.isReady = true;
    this.trigger(_events2.default.CONTAINER_READY, this.name);
  };

  Container.prototype.isPlaying = function isPlaying() {
    return this.playback.isPlaying();
  };

  Container.prototype.getStartTimeOffset = function getStartTimeOffset() {
    return this.playback.getStartTimeOffset();
  };

  Container.prototype.getCurrentTime = function getCurrentTime() {
    return this.currentTime;
  };

  Container.prototype.getDuration = function getDuration() {
    return this.playback.getDuration();
  };

  Container.prototype.error = function error(_error) {
    if (!this.isReady) this.ready();

    this.trigger(_events2.default.CONTAINER_ERROR, _error, this.name);
  };

  Container.prototype.loadedMetadata = function loadedMetadata(metadata) {
    this.trigger(_events2.default.CONTAINER_LOADEDMETADATA, metadata);
  };

  Container.prototype.timeUpdated = function timeUpdated(timeProgress) {
    this.currentTime = timeProgress.current;
    this.trigger(_events2.default.CONTAINER_TIMEUPDATE, timeProgress, this.name);
  };

  Container.prototype.progress = function progress() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.trigger.apply(this, [_events2.default.CONTAINER_PROGRESS].concat(args, [this.name]));
  };

  Container.prototype.playing = function playing() {
    this.trigger(_events2.default.CONTAINER_PLAY, this.name);
  };

  Container.prototype.paused = function paused() {
    this.trigger(_events2.default.CONTAINER_PAUSE, this.name);
  };

  /**
   * plays the playback
   * @method play
   */


  Container.prototype.play = function play() {
    this.playback.play();
  };

  /**
   * stops the playback
   * @method stop
   */


  Container.prototype.stop = function stop() {
    this.playback.stop();
    this.currentTime = 0;
  };

  /**
   * pauses the playback
   * @method pause
   */


  Container.prototype.pause = function pause() {
    this.playback.pause();
  };

  Container.prototype.onEnded = function onEnded() {
    this.trigger(_events2.default.CONTAINER_ENDED, this, this.name);
    this.currentTime = 0;
  };

  Container.prototype.stopped = function stopped() {
    this.trigger(_events2.default.CONTAINER_STOP);
  };

  Container.prototype.clicked = function clicked() {
    if (!this.options.chromeless || this.options.allowUserInteraction) this.trigger(_events2.default.CONTAINER_CLICK, this, this.name);
  };

  Container.prototype.dblClicked = function dblClicked() {
    if (!this.options.chromeless || this.options.allowUserInteraction) this.trigger(_events2.default.CONTAINER_DBLCLICK, this, this.name);
  };

  Container.prototype.onContextMenu = function onContextMenu(event) {
    if (!this.options.chromeless || this.options.allowUserInteraction) this.trigger(_events2.default.CONTAINER_CONTEXTMENU, event, this.name);
  };

  Container.prototype.seek = function seek(time) {
    this.trigger(_events2.default.CONTAINER_SEEK, time, this.name);
    this.playback.seek(time);
  };

  Container.prototype.onSeeked = function onSeeked() {
    this.trigger(_events2.default.CONTAINER_SEEKED, this.name);
  };

  Container.prototype.seekPercentage = function seekPercentage(percentage) {
    var duration = this.getDuration();
    if (percentage >= 0 && percentage <= 100) {
      var time = duration * (percentage / 100);
      this.seek(time);
    }
  };

  Container.prototype.setVolume = function setVolume(value) {
    this.volume = parseInt(value, 10);
    this.trigger(_events2.default.CONTAINER_VOLUME, value, this.name);
    this.playback.volume(value);
  };

  Container.prototype.fullscreen = function fullscreen() {
    this.trigger(_events2.default.CONTAINER_FULLSCREEN, this.name);
  };

  Container.prototype.onBuffering = function onBuffering() {
    this.trigger(_events2.default.CONTAINER_STATE_BUFFERING, this.name);
  };

  Container.prototype.bufferfull = function bufferfull() {
    this.trigger(_events2.default.CONTAINER_STATE_BUFFERFULL, this.name);
  };

  /**
   * adds plugin to the container
   * @method addPlugin
   * @param {Object} plugin
   */


  Container.prototype.addPlugin = function addPlugin(plugin) {
    this.plugins.push(plugin);
  };

  /**
   * checks if a plugin, given its name, exist
   * @method hasPlugin
   * @param {String} name
   * @return {Boolean}
   */


  Container.prototype.hasPlugin = function hasPlugin(name) {
    return !!this.getPlugin(name);
  };

  /**
   * get the plugin given its name
   * @method getPlugin
   * @param {String} name
   */


  Container.prototype.getPlugin = function getPlugin(name) {
    return this.plugins.filter(function (plugin) {
      return plugin.name === name;
    })[0];
  };

  Container.prototype.mouseEnter = function mouseEnter() {
    if (!this.options.chromeless || this.options.allowUserInteraction) this.trigger(_events2.default.CONTAINER_MOUSE_ENTER);
  };

  Container.prototype.mouseLeave = function mouseLeave() {
    if (!this.options.chromeless || this.options.allowUserInteraction) this.trigger(_events2.default.CONTAINER_MOUSE_LEAVE);
  };

  Container.prototype.settingsUpdate = function settingsUpdate() {
    this.settings = this.playback.settings;
    this.trigger(_events2.default.CONTAINER_SETTINGSUPDATE);
  };

  Container.prototype.highDefinitionUpdate = function highDefinitionUpdate(isHD) {
    this.trigger(_events2.default.CONTAINER_HIGHDEFINITIONUPDATE, isHD);
  };

  Container.prototype.isHighDefinitionInUse = function isHighDefinitionInUse() {
    return this.playback.isHighDefinitionInUse();
  };

  Container.prototype.disableMediaControl = function disableMediaControl() {
    if (!this.mediaControlDisabled) {
      this.mediaControlDisabled = true;
      this.trigger(_events2.default.CONTAINER_MEDIACONTROL_DISABLE);
    }
  };

  Container.prototype.enableMediaControl = function enableMediaControl() {
    if (this.mediaControlDisabled) {
      this.mediaControlDisabled = false;
      this.trigger(_events2.default.CONTAINER_MEDIACONTROL_ENABLE);
    }
  };

  Container.prototype.updateStyle = function updateStyle() {
    if (!this.options.chromeless || this.options.allowUserInteraction) this.$el.removeClass('chromeless');else this.$el.addClass('chromeless');
  };

  /**
   * enables to configure the container after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   */


  Container.prototype.configure = function configure(options) {
    this._options = _clapprZepto2.default.extend(this._options, options);
    this.updateStyle();
    this.playback.configure(this.options);
    this.trigger(_events2.default.CONTAINER_OPTIONS_CHANGE);
  };

  Container.prototype.render = function render() {
    this.$el.append(this.playback.render().el);
    this.updateStyle();
    return this;
  };

  return Container;
}(_ui_object2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * Container is responsible for the video rendering and state
 */

exports.default = Container;


(0, _assign2.default)(Container.prototype, _error_mixin2.default);
module.exports = exports['default'];

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(147);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./style.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".container[data-container] {\n  position: absolute;\n  background-color: black;\n  height: 100%;\n  width: 100%; }\n  .container[data-container] .chromeless {\n    cursor: default; }\n\n[data-player]:not(.nocursor) .container[data-container]:not(.chromeless).pointer-enabled {\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),
/* 148 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(150);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./style.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "[data-player] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate3d(0, 0, 0);\n  position: relative;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-style: normal;\n  font-weight: normal;\n  text-align: center;\n  overflow: hidden;\n  font-size: 100%;\n  font-family: \"Roboto\", \"Open Sans\", Arial, sans-serif;\n  text-shadow: 0 0 0;\n  box-sizing: border-box; }\n  [data-player] div, [data-player] span, [data-player] applet, [data-player] object, [data-player] iframe,\n  [data-player] h1, [data-player] h2, [data-player] h3, [data-player] h4, [data-player] h5, [data-player] h6, [data-player] p, [data-player] blockquote, [data-player] pre,\n  [data-player] a, [data-player] abbr, [data-player] acronym, [data-player] address, [data-player] big, [data-player] cite, [data-player] code,\n  [data-player] del, [data-player] dfn, [data-player] em, [data-player] img, [data-player] ins, [data-player] kbd, [data-player] q, [data-player] s, [data-player] samp,\n  [data-player] small, [data-player] strike, [data-player] strong, [data-player] sub, [data-player] sup, [data-player] tt, [data-player] var,\n  [data-player] b, [data-player] u, [data-player] i, [data-player] center,\n  [data-player] dl, [data-player] dt, [data-player] dd, [data-player] ol, [data-player] ul, [data-player] li,\n  [data-player] fieldset, [data-player] form, [data-player] label, [data-player] legend,\n  [data-player] table, [data-player] caption, [data-player] tbody, [data-player] tfoot, [data-player] thead, [data-player] tr, [data-player] th, [data-player] td,\n  [data-player] article, [data-player] aside, [data-player] canvas, [data-player] details, [data-player] embed,\n  [data-player] figure, [data-player] figcaption, [data-player] footer, [data-player] header, [data-player] hgroup,\n  [data-player] menu, [data-player] nav, [data-player] output, [data-player] ruby, [data-player] section, [data-player] summary,\n  [data-player] time, [data-player] mark, [data-player] audio, [data-player] video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline; }\n  [data-player] table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n  [data-player] caption, [data-player] th, [data-player] td {\n    text-align: left;\n    font-weight: normal;\n    vertical-align: middle; }\n  [data-player] q, [data-player] blockquote {\n    quotes: none; }\n    [data-player] q:before, [data-player] q:after, [data-player] blockquote:before, [data-player] blockquote:after {\n      content: \"\";\n      content: none; }\n  [data-player] a img {\n    border: none; }\n  [data-player]:focus {\n    outline: 0; }\n  [data-player] * {\n    max-width: none;\n    box-sizing: inherit;\n    float: none; }\n  [data-player] div {\n    display: block; }\n  [data-player].fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    top: 0;\n    left: 0; }\n  [data-player].nocursor {\n    cursor: none; }\n\n.clappr-style {\n  display: none !important; }\n", ""]);

// exports


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(152);
exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + escape(__webpack_require__(153)) + ") format(\"truetype\");\n}\n", ""]);

// exports


/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = "<%=baseUrl%>/38861cba61c66739c1452c3a71e39852.ttf";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(71);

var _create2 = _interopRequireDefault(_create);

var _toConsumableArray2 = __webpack_require__(59);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _base_object = __webpack_require__(14);

var _base_object2 = _interopRequireDefault(_base_object);

var _player_info = __webpack_require__(40);

var _player_info2 = _interopRequireDefault(_player_info);

var _html5_video = __webpack_require__(41);

var _html5_video2 = _interopRequireDefault(_html5_video);

var _html5_audio = __webpack_require__(81);

var _html5_audio2 = _interopRequireDefault(_html5_audio);

var _hls = __webpack_require__(82);

var _hls2 = _interopRequireDefault(_hls);

var _html_img = __webpack_require__(83);

var _html_img2 = _interopRequireDefault(_html_img);

var _no_op = __webpack_require__(84);

var _no_op2 = _interopRequireDefault(_no_op);

var _spinner_three_bounce = __webpack_require__(85);

var _spinner_three_bounce2 = _interopRequireDefault(_spinner_three_bounce);

var _stats = __webpack_require__(183);

var _stats2 = _interopRequireDefault(_stats);

var _watermark = __webpack_require__(86);

var _watermark2 = _interopRequireDefault(_watermark);

var _poster = __webpack_require__(87);

var _poster2 = _interopRequireDefault(_poster);

var _google_analytics = __webpack_require__(193);

var _google_analytics2 = _interopRequireDefault(_google_analytics);

var _click_to_pause = __webpack_require__(89);

var _click_to_pause2 = _interopRequireDefault(_click_to_pause);

var _dvr_controls = __webpack_require__(90);

var _dvr_controls2 = _interopRequireDefault(_dvr_controls);

var _closed_captions = __webpack_require__(200);

var _closed_captions2 = _interopRequireDefault(_closed_captions);

var _favicon = __webpack_require__(91);

var _favicon2 = _interopRequireDefault(_favicon);

var _seek_time = __webpack_require__(208);

var _seek_time2 = _interopRequireDefault(_seek_time);

var _sources = __webpack_require__(213);

var _sources2 = _interopRequireDefault(_sources);

var _end_video = __webpack_require__(214);

var _end_video2 = _interopRequireDefault(_end_video);

var _strings = __webpack_require__(215);

var _strings2 = _interopRequireDefault(_strings);

var _error_screen = __webpack_require__(216);

var _error_screen2 = _interopRequireDefault(_error_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * It keeps a list of the default plugins (playback, container, core) and it merges external plugins with its internals.
 * @class Loader
 * @constructor
 * @extends BaseObject
 * @module components
 */


/* Core Plugins */


/* Container Plugins */
var Loader = function (_BaseObject) {
  (0, _inherits3.default)(Loader, _BaseObject);

  /**
   * builds the loader
   * @method constructor
   * @param {Object} externalPlugins the external plugins
   * @param {Number} playerId you can embed multiple instances of clappr, therefore this is the unique id of each one.
   */
  function Loader() {
    var externalPlugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var playerId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var useOnlyPlainHtml5Plugins = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    (0, _classCallCheck3.default)(this, Loader);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this));

    _this.playerId = playerId;
    _this.playbackPlugins = [];

    if (!useOnlyPlainHtml5Plugins) {
      _this.playbackPlugins = [].concat((0, _toConsumableArray3.default)(_this.playbackPlugins), [_hls2.default]);
    }

    _this.playbackPlugins = [].concat((0, _toConsumableArray3.default)(_this.playbackPlugins), [_html5_video2.default, _html5_audio2.default]);

    _this.playbackPlugins = [].concat((0, _toConsumableArray3.default)(_this.playbackPlugins), [_html_img2.default, _no_op2.default]);

    _this.containerPlugins = [_spinner_three_bounce2.default, _watermark2.default, _poster2.default, _stats2.default, _google_analytics2.default, _click_to_pause2.default];
    _this.corePlugins = [_dvr_controls2.default, _closed_captions2.default, _favicon2.default, _seek_time2.default, _sources2.default, _end_video2.default, _strings2.default, _error_screen2.default];

    if (!Array.isArray(externalPlugins)) _this.validateExternalPluginsType(externalPlugins);

    _this.addExternalPlugins(externalPlugins);
    return _this;
  }

  /**
   * groups by type the external plugins that were passed through `options.plugins` it they're on a flat array
   * @method addExternalPlugins
   * @private
   * @param {Object} an config object or an array of plugins
   * @return {Object} plugins the config object with the plugins separated by type
   */


  Loader.prototype.groupPluginsByType = function groupPluginsByType(plugins) {
    if (Array.isArray(plugins)) {
      plugins = plugins.reduce(function (memo, plugin) {
        memo[plugin.type] || (memo[plugin.type] = []);
        memo[plugin.type].push(plugin);
        return memo;
      }, {});
    }
    return plugins;
  };

  Loader.prototype.removeDups = function removeDups(list) {
    var groupUp = function groupUp(plugins, plugin) {
      plugins[plugin.prototype.name] && delete plugins[plugin.prototype.name];
      plugins[plugin.prototype.name] = plugin;
      return plugins;
    };
    var pluginsMap = list.reduceRight(groupUp, (0, _create2.default)(null));

    var plugins = [];
    for (var key in pluginsMap) {
      plugins.unshift(pluginsMap[key]);
    }return plugins;
  };

  /**
   * adds all the external plugins that were passed through `options.plugins`
   * @method addExternalPlugins
   * @private
   * @param {Object} plugins the config object with all plugins
   */


  Loader.prototype.addExternalPlugins = function addExternalPlugins(plugins) {
    plugins = this.groupPluginsByType(plugins);
    if (plugins.playback) this.playbackPlugins = this.removeDups(plugins.playback.concat(this.playbackPlugins));

    if (plugins.container) this.containerPlugins = this.removeDups(plugins.container.concat(this.containerPlugins));

    if (plugins.core) this.corePlugins = this.removeDups(plugins.core.concat(this.corePlugins));

    _player_info2.default.getInstance(this.playerId).playbackPlugins = this.playbackPlugins;
  };

  /**
   * validate if the external plugins that were passed through `options.plugins` are associated to the correct type
   * @method validateExternalPluginsType
   * @private
   * @param {Object} plugins the config object with all plugins
   */


  Loader.prototype.validateExternalPluginsType = function validateExternalPluginsType(plugins) {
    var plugintypes = ['playback', 'container', 'core'];
    plugintypes.forEach(function (type) {
      (plugins[type] || []).forEach(function (el) {
        var errorMessage = 'external ' + el.type + ' plugin on ' + type + ' array';
        if (el.type !== type) throw new ReferenceError(errorMessage);
      });
    });
  };

  return Loader;
}(_base_object2.default);

/* Playback Plugins */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = Loader;
module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(156);
module.exports = __webpack_require__(6).Array.from;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(44);
var $export = __webpack_require__(15);
var toObject = __webpack_require__(38);
var call = __webpack_require__(157);
var isArrayIter = __webpack_require__(158);
var toLength = __webpack_require__(64);
var createProperty = __webpack_require__(159);
var getIterFn = __webpack_require__(160);

$export($export.S + $export.F * !__webpack_require__(162)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(23);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(30);
var ITERATOR = __webpack_require__(11)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(17);
var createDesc = __webpack_require__(28);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(161);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(30);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(46);
var TAG = __webpack_require__(11)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(11)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(79);

var _from2 = _interopRequireDefault(_from);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__(59);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

var _utils = __webpack_require__(5);

var _playback = __webpack_require__(12);

var _playback2 = _interopRequireDefault(_playback);

var _browser = __webpack_require__(31);

var _browser2 = _interopRequireDefault(_browser);

var _error = __webpack_require__(27);

var _error2 = _interopRequireDefault(_error);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _tracks = __webpack_require__(164);

var _tracks2 = _interopRequireDefault(_tracks);

__webpack_require__(165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIMETYPES = {
  'mp4': ['avc1.42E01E', 'avc1.58A01E', 'avc1.4D401E', 'avc1.64001E', 'mp4v.20.8', 'mp4v.20.240', 'mp4a.40.2'].map(function (codec) {
    return 'video/mp4; codecs="' + codec + ', mp4a.40.2"';
  }),
  'ogg': ['video/ogg; codecs="theora, vorbis"', 'video/ogg; codecs="dirac"', 'video/ogg; codecs="theora, speex"'],
  '3gpp': ['video/3gpp; codecs="mp4v.20.8, samr"'],
  'webm': ['video/webm; codecs="vp8, vorbis"'],
  'mkv': ['video/x-matroska; codecs="theora, vorbis"'],
  'm3u8': ['application/x-mpegurl']
}; // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

MIMETYPES['ogv'] = MIMETYPES['ogg'];
MIMETYPES['3gp'] = MIMETYPES['3gpp'];

var AUDIO_MIMETYPES = {
  'wav': ['audio/wav'],
  'mp3': ['audio/mp3', 'audio/mpeg;codecs="mp3"'],
  'aac': ['audio/mp4;codecs="mp4a.40.5"'],
  'oga': ['audio/ogg']
};

var KNOWN_AUDIO_MIMETYPES = (0, _keys2.default)(AUDIO_MIMETYPES).reduce(function (acc, k) {
  return [].concat((0, _toConsumableArray3.default)(acc), (0, _toConsumableArray3.default)(AUDIO_MIMETYPES[k]));
}, []);

var UNKNOWN_ERROR = { code: 'unknown', message: 'unknown'

  // TODO: rename this Playback to HTML5Playback (breaking change, only after 0.3.0)
};
var HTML5Video = function (_Playback) {
  (0, _inherits3.default)(HTML5Video, _Playback);
  (0, _createClass3.default)(HTML5Video, [{
    key: 'name',
    get: function get() {
      return 'html5_video';
    }
  }, {
    key: 'tagName',
    get: function get() {
      return this.isAudioOnly ? 'audio' : 'video';
    }
  }, {
    key: 'isAudioOnly',
    get: function get() {
      var resourceUrl = this.options.src;
      var mimeTypes = HTML5Video._mimeTypesForUrl(resourceUrl, AUDIO_MIMETYPES, this.options.mimeType);
      return this.options.playback && this.options.playback.audioOnly || this.options.audioOnly || KNOWN_AUDIO_MIMETYPES.indexOf(mimeTypes[0]) >= 0;
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'data-html5-video': ''
      };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'canplay': '_onCanPlay',
        'canplaythrough': '_handleBufferingEvents',
        'durationchange': '_onDurationChange',
        'ended': '_onEnded',
        'error': '_onError',
        'loadeddata': '_onLoadedData',
        'loadedmetadata': '_onLoadedMetadata',
        'pause': '_onPause',
        'playing': '_onPlaying',
        'progress': '_onProgress',
        'seeking': '_onSeeking',
        'seeked': '_onSeeked',
        'stalled': '_handleBufferingEvents',
        'timeupdate': '_onTimeUpdate',
        'waiting': '_onWaiting'
      };
    }

    /**
     * Determine if the playback has ended.
     * @property ended
     * @type Boolean
     */

  }, {
    key: 'ended',
    get: function get() {
      return this.el.ended;
    }

    /**
     * Determine if the playback is having to buffer in order for
     * playback to be smooth.
     * This is related to the PLAYBACK_BUFFERING and PLAYBACK_BUFFERFULL events
     * @property buffering
     * @type Boolean
     */

  }, {
    key: 'buffering',
    get: function get() {
      return this._isBuffering;
    }
  }]);

  function HTML5Video() {
    (0, _classCallCheck3.default)(this, HTML5Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Playback.call.apply(_Playback, [this].concat(args)));

    _this._destroyed = false;
    _this._loadStarted = false;
    _this._isBuffering = false;
    _this._playheadMoving = false;
    _this._playheadMovingTimer = null;
    _this._stopped = false;
    _this._ccTrackId = -1;
    _this._setupSrc(_this.options.src);
    // backwards compatibility (TODO: remove on 0.3.0)
    _this.options.playback || (_this.options.playback = _this.options || {});
    _this.options.playback.disableContextMenu = _this.options.playback.disableContextMenu || _this.options.disableVideoTagContextMenu;

    var playbackConfig = _this.options.playback;
    var preload = playbackConfig.preload || (_browser2.default.isSafari ? 'auto' : _this.options.preload);

    var posterUrl = void 0; // FIXME: poster plugin should always convert poster to object with expected properties ?
    if (_this.options.poster) {
      if (typeof _this.options.poster === 'string') posterUrl = _this.options.poster;else if (typeof _this.options.poster.url === 'string') posterUrl = _this.options.poster.url;
    }

    _clapprZepto2.default.extend(_this.el, {
      muted: _this.options.mute,
      defaultMuted: _this.options.mute,
      loop: _this.options.loop,
      poster: posterUrl,
      preload: preload || 'metadata',
      controls: (playbackConfig.controls || _this.options.useVideoTagDefaultControls) && 'controls',
      crossOrigin: playbackConfig.crossOrigin,
      'x-webkit-playsinline': playbackConfig.playInline
    });

    playbackConfig.playInline && _this.$el.attr({ playsinline: 'playsinline' });
    playbackConfig.crossOrigin && _this.$el.attr({ crossorigin: playbackConfig.crossOrigin });

    // TODO should settings be private?
    _this.settings = { default: ['seekbar'] };
    _this.settings.left = ['playpause', 'position', 'duration'];
    _this.settings.right = ['fullscreen', 'volume', 'hd-indicator'];

    playbackConfig.externalTracks && _this._setupExternalTracks(playbackConfig.externalTracks);

    // https://github.com/clappr/clappr/issues/1076
    _this.options.autoPlay && process.nextTick(function () {
      return !_this._destroyed && _this.play();
    });
    return _this;
  }

  HTML5Video.prototype._setupExternalTracks = function _setupExternalTracks(tracks) {
    this._externalTracks = tracks.map(function (track) {
      return {
        kind: track.kind || 'subtitles', // Default is 'subtitles'
        label: track.label,
        lang: track.lang,
        src: track.src
      };
    });
  };

  /**
   * Sets the source url on the <video> element, and also the 'src' property.
   * @method setupSrc
   * @private
   * @param {String} srcUrl The source URL.
   */


  HTML5Video.prototype._setupSrc = function _setupSrc(srcUrl) {
    if (this.el.src === srcUrl) return;

    this._ccIsSetup = false;
    this.el.src = srcUrl;
    this._src = this.el.src;
  };

  HTML5Video.prototype._onLoadedMetadata = function _onLoadedMetadata(e) {
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_LOADEDMETADATA, { duration: e.target.duration, data: e });
    this._updateSettings();
    var autoSeekFromUrl = typeof this._options.autoSeekFromUrl === 'undefined' || this._options.autoSeekFromUrl;
    if (this.getPlaybackType() !== _playback2.default.LIVE && autoSeekFromUrl) this._checkInitialSeek();
  };

  HTML5Video.prototype._onDurationChange = function _onDurationChange() {
    this._updateSettings();
    this._onTimeUpdate();
    // onProgress uses the duration
    this._onProgress();
  };

  HTML5Video.prototype._updateSettings = function _updateSettings() {
    // we can't figure out if hls resource is VoD or not until it is being loaded or duration has changed.
    // that's why we check it again and update media control accordingly.
    if (this.getPlaybackType() === _playback2.default.VOD || this.getPlaybackType() === _playback2.default.AOD) this.settings.left = ['playpause', 'position', 'duration'];else this.settings.left = ['playstop'];

    this.settings.seekEnabled = this.isSeekEnabled();
    this.trigger(_events2.default.PLAYBACK_SETTINGSUPDATE);
  };

  HTML5Video.prototype.isSeekEnabled = function isSeekEnabled() {
    return isFinite(this.getDuration());
  };

  HTML5Video.prototype.getPlaybackType = function getPlaybackType() {
    var onDemandType = this.tagName === 'audio' ? _playback2.default.AOD : _playback2.default.VOD;
    return [0, undefined, Infinity].indexOf(this.el.duration) >= 0 ? _playback2.default.LIVE : onDemandType;
  };

  HTML5Video.prototype.isHighDefinitionInUse = function isHighDefinitionInUse() {
    return false;
  };

  // On mobile device, HTML5 video element "retains" user action consent if
  // load() method is called. See Player.consent().


  HTML5Video.prototype.consent = function consent() {
    !this.isPlaying() && this.el.load();
  };

  HTML5Video.prototype.play = function play() {
    try {
      // && JSON.stringify(this.options.plugins).indexOf('VastAds') > -1
      if (window.google && window.google.ima && this.options.plugins && this.options.VastAds.preroll && this.options.VastAds.preroll.data.length > 0) {
        this.trigger(_events2.default.PLAYBACK_PREROLL_REQUEST);
        return;
      }
    } catch (e) {}

    this.trigger(_events2.default.PLAYBACK_PLAY_INTENT);
    this._stopped = false;
    this._setupSrc(this._src);
    this._handleBufferingEvents();
    var promise = this.el.play();
    // For more details, see https://developers.google.com/web/updates/2016/03/play-returns-promise
    if (promise && promise.catch) promise.catch(function () {});
  };

  HTML5Video.prototype.pause = function pause() {
    this.el.pause();
  };

  HTML5Video.prototype.stop = function stop() {
    this.pause();
    this._stopped = true;
    // src will be added again in play()
    this.el.removeAttribute('src');
    this._stopPlayheadMovingChecks();
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_STOP);
  };

  HTML5Video.prototype.volume = function volume(value) {
    if (value === 0) {
      this.$el.attr({ muted: 'true' });
      this.el.muted = true;
    } else {
      this.$el.attr({ muted: null });
      this.el.muted = false;
    }
    this.el.volume = value / 100;
  };

  /**
   * @deprecated
   * @private
   */


  HTML5Video.prototype.mute = function mute() {
    this.el.muted = true;
  };

  /**
   * @deprecated
   * @private
   */


  HTML5Video.prototype.unmute = function unmute() {
    this.el.muted = false;
  };

  HTML5Video.prototype.isMuted = function isMuted() {
    return !!this.el.volume;
  };

  HTML5Video.prototype.isPlaying = function isPlaying() {
    return !this.el.paused && !this.el.ended;
  };

  HTML5Video.prototype._startPlayheadMovingChecks = function _startPlayheadMovingChecks() {
    if (this._playheadMovingTimer !== null) return;

    this._playheadMovingTimeOnCheck = null;
    this._determineIfPlayheadMoving();
    this._playheadMovingTimer = setInterval(this._determineIfPlayheadMoving.bind(this), 500);
  };

  HTML5Video.prototype._stopPlayheadMovingChecks = function _stopPlayheadMovingChecks() {
    if (this._playheadMovingTimer === null) return;

    clearInterval(this._playheadMovingTimer);
    this._playheadMovingTimer = null;
    this._playheadMoving = false;
  };

  HTML5Video.prototype._determineIfPlayheadMoving = function _determineIfPlayheadMoving() {
    var before = this._playheadMovingTimeOnCheck;
    var now = this.el.currentTime;
    this._playheadMoving = before !== now;
    this._playheadMovingTimeOnCheck = now;
    this._handleBufferingEvents();
  };

  // this seems to happen when the user is having to wait
  // for something to happen AFTER A USER INTERACTION
  // e.g the player might be buffering, but when `play()` is called
  // only at this point will this be called.
  // Or the user may seek somewhere but the new area requires buffering,
  // so it will fire then as well.
  // On devices where playing is blocked until requested with a user action,
  // buffering may start, but never finish until the user initiates a play,
  // but this only happens when play is actually requested


  HTML5Video.prototype._onWaiting = function _onWaiting() {
    this._loadStarted = true;
    this._handleBufferingEvents();
  };

  // called after the first frame has loaded
  // note this doesn't fire on ios before the user has requested play
  // ideally the "loadstart" event would be used instead, but this fires
  // before a user has requested play on iOS, and also this is always fired
  // even if the preload setting is "none". In both these cases this causes
  // infinite buffering until the user does something which isn't great.


  HTML5Video.prototype._onLoadedData = function _onLoadedData() {
    this._loadStarted = true;
    this._handleBufferingEvents();
  };

  // note this doesn't fire on ios before user has requested play


  HTML5Video.prototype._onCanPlay = function _onCanPlay() {
    this._handleBufferingEvents();
  };

  HTML5Video.prototype._onPlaying = function _onPlaying() {
    this._checkForClosedCaptions();
    this._startPlayheadMovingChecks();
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_PLAY);
  };

  HTML5Video.prototype._onPause = function _onPause() {
    this._stopPlayheadMovingChecks();
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_PAUSE);
  };

  HTML5Video.prototype._onSeeking = function _onSeeking() {
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_SEEK);
  };

  HTML5Video.prototype._onSeeked = function _onSeeked() {
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_SEEKED);
  };

  HTML5Video.prototype._onEnded = function _onEnded() {
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_ENDED, this.name);
  };

  // The playback should be classed as buffering if the following are true:
  // - the ready state is less then HAVE_FUTURE_DATA or the playhead isn't moving and it should be
  // - the media hasn't "ended",
  // - the media hasn't been stopped
  // - loading has started


  HTML5Video.prototype._handleBufferingEvents = function _handleBufferingEvents() {
    var playheadShouldBeMoving = !this.el.ended && !this.el.paused;
    var buffering = this._loadStarted && !this.el.ended && !this._stopped && (playheadShouldBeMoving && !this._playheadMoving || this.el.readyState < this.el.HAVE_FUTURE_DATA);
    if (this._isBuffering !== buffering) {
      this._isBuffering = buffering;
      if (buffering) this.trigger(_events2.default.PLAYBACK_BUFFERING, this.name);else this.trigger(_events2.default.PLAYBACK_BUFFERFULL, this.name);
    }
  };

  HTML5Video.prototype._onError = function _onError() {
    var _ref = this.el.error || UNKNOWN_ERROR,
        code = _ref.code,
        message = _ref.message;

    var formattedError = this.createError({
      code: code,
      description: message,
      raw: this.el.error,
      level: code === UNKNOWN_ERROR.code ? _error2.default.Levels.WARN : _error2.default.Levels.FATAL
    });

    this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
  };

  HTML5Video.prototype.destroy = function destroy() {
    this._destroyed = true;
    this.handleTextTrackChange && this.el.textTracks.removeEventListener('change', this.handleTextTrackChange);
    _Playback.prototype.destroy.call(this);
    this.el.removeAttribute('src');
    this._src = null;
    _utils.DomRecycler.garbage(this.$el);
  };

  HTML5Video.prototype.seek = function seek(time) {
    this.el.currentTime = time;
  };

  HTML5Video.prototype.seekPercentage = function seekPercentage(percentage) {
    var time = this.el.duration * (percentage / 100);
    this.seek(time);
  };

  HTML5Video.prototype._checkInitialSeek = function _checkInitialSeek() {
    var seekTime = (0, _utils.seekStringToSeconds)();
    if (seekTime !== 0) this.seek(seekTime);
  };

  HTML5Video.prototype.getCurrentTime = function getCurrentTime() {
    return this.el.currentTime;
  };

  HTML5Video.prototype.getDuration = function getDuration() {
    return this.el.duration;
  };

  HTML5Video.prototype._onTimeUpdate = function _onTimeUpdate() {
    if (this.getPlaybackType() === _playback2.default.LIVE) this.trigger(_events2.default.PLAYBACK_TIMEUPDATE, { current: 1, total: 1 }, this.name);else this.trigger(_events2.default.PLAYBACK_TIMEUPDATE, { current: this.el.currentTime, total: this.el.duration }, this.name);
  };

  HTML5Video.prototype._onProgress = function _onProgress() {
    if (!this.el.buffered.length) return;

    var buffered = [];
    var bufferedPos = 0;
    for (var i = 0; i < this.el.buffered.length; i++) {
      buffered = [].concat((0, _toConsumableArray3.default)(buffered), [{ start: this.el.buffered.start(i), end: this.el.buffered.end(i) }]);
      if (this.el.currentTime >= buffered[i].start && this.el.currentTime <= buffered[i].end) bufferedPos = i;
    }
    var progress = {
      start: buffered[bufferedPos].start,
      current: buffered[bufferedPos].end,
      total: this.el.duration
    };
    this.trigger(_events2.default.PLAYBACK_PROGRESS, progress, buffered);
  };

  HTML5Video.prototype._typeFor = function _typeFor(src) {
    var mimeTypes = HTML5Video._mimeTypesForUrl(src, MIMETYPES, this.options.mimeType);
    if (mimeTypes.length === 0) mimeTypes = HTML5Video._mimeTypesForUrl(src, AUDIO_MIMETYPES, this.options.mimeType);

    var mimeType = mimeTypes[0] || '';
    return mimeType.split(';')[0];
  };

  HTML5Video.prototype._ready = function _ready() {
    if (this._isReadyState) return;

    this._isReadyState = true;
    this.trigger(_events2.default.PLAYBACK_READY, this.name);
  };

  HTML5Video.prototype._checkForClosedCaptions = function _checkForClosedCaptions() {
    // Check if CC available only if current playback is HTML5Video
    if (this.isHTML5Video && !this._ccIsSetup) {
      if (this.hasClosedCaptionsTracks) {
        this.trigger(_events2.default.PLAYBACK_SUBTITLE_AVAILABLE);
        var trackId = this.closedCaptionsTrackId;
        this.closedCaptionsTrackId = trackId;
        this.handleTextTrackChange = this._handleTextTrackChange.bind(this);
        this.el.textTracks.addEventListener('change', this.handleTextTrackChange);
      }
      this._ccIsSetup = true;
    }
  };

  HTML5Video.prototype._handleTextTrackChange = function _handleTextTrackChange() {
    var tracks = this.closedCaptionsTracks;
    var track = tracks.find(function (track) {
      return track.track.mode === 'showing';
    }) || { id: -1 };

    if (this._ccTrackId !== track.id) {
      this._ccTrackId = track.id;
      this.trigger(_events2.default.PLAYBACK_SUBTITLE_CHANGED, {
        id: track.id
      });
    }
  };

  HTML5Video.prototype.render = function render() {
    if (this.options.playback.disableContextMenu) {
      this.$el.on('contextmenu', function () {
        return false;
      });
    }

    if (this._externalTracks && this._externalTracks.length > 0) {
      this.$el.html(this.template({
        tracks: this._externalTracks
      }));
    }

    this._ready();
    return this;
  };

  (0, _createClass3.default)(HTML5Video, [{
    key: 'isReady',
    get: function get() {
      return this._isReadyState;
    }
  }, {
    key: 'isHTML5Video',
    get: function get() {
      return this.name === HTML5Video.prototype.name;
    }
  }, {
    key: 'closedCaptionsTracks',
    get: function get() {
      var id = 0;
      var trackId = function trackId() {
        return id++;
      };
      var textTracks = this.el.textTracks ? (0, _from2.default)(this.el.textTracks) : [];

      return textTracks.filter(function (track) {
        return track.kind === 'subtitles' || track.kind === 'captions';
      }).map(function (track) {
        return { id: trackId(), name: track.label, track: track };
      });
    }
  }, {
    key: 'closedCaptionsTrackId',
    get: function get() {
      return this._ccTrackId;
    },
    set: function set(trackId) {
      if (!(0, _utils.isNumber)(trackId)) return;

      var tracks = this.closedCaptionsTracks;
      var showingTrack = void 0;

      // Note: -1 is for hide all tracks
      if (trackId !== -1) {
        showingTrack = tracks.find(function (track) {
          return track.id === trackId;
        });
        if (!showingTrack) return; // Track id not found

        if (showingTrack.track.mode === 'showing') return; // Track already showing
      }

      // Since it is possible to display multiple tracks,
      // ensure that all tracks are hidden.
      tracks.filter(function (track) {
        return track.track.mode !== 'hidden';
      }).forEach(function (track) {
        return track.track.mode = 'hidden';
      });

      showingTrack && (showingTrack.track.mode = 'showing');

      this._ccTrackId = trackId;
      this.trigger(_events2.default.PLAYBACK_SUBTITLE_CHANGED, {
        id: trackId
      });
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_tracks2.default);
    }
  }]);
  return HTML5Video;
}(_playback2.default);

exports.default = HTML5Video;


HTML5Video._mimeTypesForUrl = function (resourceUrl, mimeTypesByExtension, mimeType) {
  var extension = (resourceUrl.split('?')[0].match(/.*\.(.*)$/) || [])[1];
  var mimeTypes = mimeType || extension && mimeTypesByExtension[extension.toLowerCase()] || [];
  return mimeTypes.constructor === Array ? mimeTypes : [mimeTypes];
};

HTML5Video._canPlay = function (type, mimeTypesByExtension, resourceUrl, mimeType) {
  var mimeTypes = HTML5Video._mimeTypesForUrl(resourceUrl, mimeTypesByExtension, mimeType);
  var media = document.createElement(type);
  return !!mimeTypes.filter(function (mediaType) {
    return !!media.canPlayType(mediaType).replace(/no/, '');
  })[0];
};

HTML5Video.canPlay = function (resourceUrl, mimeType) {
  return HTML5Video._canPlay('audio', AUDIO_MIMETYPES, resourceUrl, mimeType) || HTML5Video._canPlay('video', MIMETYPES, resourceUrl, mimeType);
};
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)))

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = "<% for (var i = 0; i < tracks.length; i++) { %>\n  <track data-html5-video-track=\"<%= i %>\" kind=\"<%= tracks[i].kind %>\" label=\"<%= tracks[i].label %>\" srclang=\"<%= tracks[i].lang %>\" src=\"<%= tracks[i].src %>\" />\n<% }; %>\n";

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(166);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./style.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "[data-html5-video] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: block; }\n", ""]);

// exports


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(12);

var _playback2 = _interopRequireDefault(_playback);

var _html5_video = __webpack_require__(41);

var _html5_video2 = _interopRequireDefault(_html5_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: remove this playback and change HTML5Video to HTML5Playback (breaking change, only after 0.3.0)
var HTML5Audio = function (_HTML5Video) {
  (0, _inherits3.default)(HTML5Audio, _HTML5Video);

  function HTML5Audio() {
    (0, _classCallCheck3.default)(this, HTML5Audio);
    return (0, _possibleConstructorReturn3.default)(this, _HTML5Video.apply(this, arguments));
  }

  HTML5Audio.prototype.updateSettings = function updateSettings() {
    this.settings.left = ['playpause', 'position', 'duration'];
    this.settings.seekEnabled = this.isSeekEnabled();
    this.trigger(_events2.default.PLAYBACK_SETTINGSUPDATE);
  };

  HTML5Audio.prototype.getPlaybackType = function getPlaybackType() {
    return _playback2.default.AOD;
  };

  (0, _createClass3.default)(HTML5Audio, [{
    key: 'name',
    get: function get() {
      return 'html5_audio';
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'audio';
    }
  }, {
    key: 'isAudioOnly',
    get: function get() {
      return true;
    }
  }]);
  return HTML5Audio;
}(_html5_video2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = HTML5Audio;


HTML5Audio.canPlay = function (resourceUrl, mimeType) {
  var mimetypes = {
    'wav': ['audio/wav'],
    'mp3': ['audio/mp3', 'audio/mpeg;codecs="mp3"'],
    'aac': ['audio/mp4;codecs="mp4a.40.5"'],
    'oga': ['audio/ogg']
  };
  return _html5_video2.default._canPlay('audio', mimetypes, resourceUrl, mimeType);
};
module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(59);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__(169);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _html5_video = __webpack_require__(41);

var _html5_video2 = _interopRequireDefault(_html5_video);

var _hlsLightMin = __webpack_require__(171);

var _hlsLightMin2 = _interopRequireDefault(_hlsLightMin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(12);

var _playback2 = _interopRequireDefault(_playback);

var _utils = __webpack_require__(5);

var _log = __webpack_require__(32);

var _log2 = _interopRequireDefault(_log);

var _error = __webpack_require__(27);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUTO = -1; // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var HLS = function (_HTML5VideoPlayback) {
  (0, _inherits3.default)(HLS, _HTML5VideoPlayback);
  (0, _createClass3.default)(HLS, [{
    key: 'name',
    get: function get() {
      return 'hls';
    }
  }, {
    key: 'levels',
    get: function get() {
      return this._levels || [];
    }
  }, {
    key: 'currentLevel',
    get: function get() {
      if (this._currentLevel === null || this._currentLevel === undefined) return AUTO;else return this._currentLevel; //0 is a valid level ID
    },
    set: function set(id) {
      this._currentLevel = id;
      this.trigger(_events2.default.PLAYBACK_LEVEL_SWITCH_START);
      this._hls.currentLevel = this._currentLevel;
    }
  }, {
    key: 'isReady',
    get: function get() {
      return this._isReadyState;
    }
  }, {
    key: '_startTime',
    get: function get() {
      if (this._playbackType === _playback2.default.LIVE && this._playlistType !== 'EVENT') return this._extrapolatedStartTime;

      return this._playableRegionStartTime;
    }
  }, {
    key: '_now',
    get: function get() {
      return (0, _utils.now)();
    }

    // the time in the video element which should represent the start of the sliding window
    // extrapolated to increase in real time (instead of jumping as the early segments are removed)

  }, {
    key: '_extrapolatedStartTime',
    get: function get() {
      if (!this._localStartTimeCorrelation) return this._playableRegionStartTime;

      var corr = this._localStartTimeCorrelation;
      var timePassed = this._now - corr.local;
      var extrapolatedWindowStartTime = (corr.remote + timePassed) / 1000;
      // cap at the end of the extrapolated window duration
      return Math.min(extrapolatedWindowStartTime, this._playableRegionStartTime + this._extrapolatedWindowDuration);
    }

    // the time in the video element which should represent the end of the content
    // extrapolated to increase in real time (instead of jumping as segments are added)

  }, {
    key: '_extrapolatedEndTime',
    get: function get() {
      var actualEndTime = this._playableRegionStartTime + this._playableRegionDuration;
      if (!this._localEndTimeCorrelation) return actualEndTime;

      var corr = this._localEndTimeCorrelation;
      var timePassed = this._now - corr.local;
      var extrapolatedEndTime = (corr.remote + timePassed) / 1000;
      return Math.max(actualEndTime - this._extrapolatedWindowDuration, Math.min(extrapolatedEndTime, actualEndTime));
    }
  }, {
    key: '_duration',
    get: function get() {
      return this._extrapolatedEndTime - this._startTime;
    }

    // Returns the duration (seconds) of the window that the extrapolated start time is allowed
    // to move in before being capped.
    // The extrapolated start time should never reach the cap at the end of the window as the
    // window should slide as chunks are removed from the start.
    // This also applies to the extrapolated end time in the same way.
    //
    // If chunks aren't being removed for some reason that the start time will reach and remain fixed at
    // playableRegionStartTime + extrapolatedWindowDuration
    //
    //                                <-- window duration -->
    // I.e   playableRegionStartTime |-----------------------|
    //                               | -->   .       .       .
    //                               .   --> | -->   .       .
    //                               .       .   --> | -->   .
    //                               .       .       .   --> |
    //                               .       .       .       .
    //                                 extrapolatedStartTime

  }, {
    key: '_extrapolatedWindowDuration',
    get: function get() {
      if (this._segmentTargetDuration === null) return 0;

      return this._extrapolatedWindowNumSegments * this._segmentTargetDuration;
    }
  }], [{
    key: 'HLSJS',
    get: function get() {
      return _hlsLightMin2.default;
    }
  }]);

  function HLS() {
    (0, _classCallCheck3.default)(this, HLS);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // backwards compatibility (TODO: remove on 0.3.0)
    var _this = (0, _possibleConstructorReturn3.default)(this, _HTML5VideoPlayback.call.apply(_HTML5VideoPlayback, [this].concat(args)));

    _this.options.playback || (_this.options.playback = _this.options);
    _this._minDvrSize = typeof _this.options.hlsMinimumDvrSize === 'undefined' ? 60 : _this.options.hlsMinimumDvrSize;
    // The size of the start time extrapolation window measured as a multiple of segments.
    // Should be 2 or higher, or 0 to disable. Should only need to be increased above 2 if more than one segment is
    // removed from the start of the playlist at a time. E.g if the playlist is cached for 10 seconds and new chunks are
    // added/removed every 5.
    _this._extrapolatedWindowNumSegments = !_this.options.playback || typeof _this.options.playback.extrapolatedWindowNumSegments === 'undefined' ? 2 : _this.options.playback.extrapolatedWindowNumSegments;

    _this._playbackType = _playback2.default.VOD;
    _this._lastTimeUpdate = { current: 0, total: 0 };
    _this._lastDuration = null;
    // for hls streams which have dvr with a sliding window,
    // the content at the start of the playlist is removed as new
    // content is appended at the end.
    // this means the actual playable start time will increase as the
    // start content is deleted
    // For streams with dvr where the entire recording is kept from the
    // beginning this should stay as 0
    _this._playableRegionStartTime = 0;
    // {local, remote} remote is the time in the video element that should represent 0
    //                 local is the system time when the 'remote' measurment took place
    _this._localStartTimeCorrelation = null;
    // {local, remote} remote is the time in the video element that should represents the end
    //                 local is the system time when the 'remote' measurment took place
    _this._localEndTimeCorrelation = null;
    // if content is removed from the beginning then this empty area should
    // be ignored. "playableRegionDuration" excludes the empty area
    _this._playableRegionDuration = 0;
    // #EXT-X-PROGRAM-DATE-TIME
    _this._programDateTime = 0;
    // true when the actual duration is longer than hlsjs's live sync point
    // when this is false playableRegionDuration will be the actual duration
    // when this is true playableRegionDuration will exclude the time after the sync point
    _this._durationExcludesAfterLiveSyncPoint = false;
    // #EXT-X-TARGETDURATION
    _this._segmentTargetDuration = null;
    // #EXT-X-PLAYLIST-TYPE
    _this._playlistType = null;
    _this._recoverAttemptsRemaining = _this.options.hlsRecoverAttempts || 16;
    return _this;
  }

  HLS.prototype._setup = function _setup() {
    var _this2 = this;

    this._ccIsSetup = false;
    this._ccTracksUpdated = false;
    this._hls = new _hlsLightMin2.default((0, _utils.assign)({}, this.options.playback.hlsjsConfig));
    this._hls.on(_hlsLightMin2.default.Events.MEDIA_ATTACHED, function () {
      return _this2._hls.loadSource(_this2.options.src);
    });
    this._hls.on(_hlsLightMin2.default.Events.LEVEL_LOADED, function (evt, data) {
      return _this2._updatePlaybackType(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.LEVEL_UPDATED, function (evt, data) {
      return _this2._onLevelUpdated(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.LEVEL_SWITCHING, function (evt, data) {
      return _this2._onLevelSwitch(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.FRAG_LOADED, function (evt, data) {
      return _this2._onFragmentLoaded(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.ERROR, function (evt, data) {
      return _this2._onHLSJSError(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.SUBTITLE_TRACK_LOADED, function (evt, data) {
      return _this2._onSubtitleLoaded(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.SUBTITLE_TRACKS_UPDATED, function () {
      return _this2._ccTracksUpdated = true;
    });
    this._hls.attachMedia(this.el);
  };

  HLS.prototype.render = function render() {
    this._ready();
    return _HTML5VideoPlayback.prototype.render.call(this);
  };

  HLS.prototype._ready = function _ready() {
    this._isReadyState = true;
    this.trigger(_events2.default.PLAYBACK_READY, this.name);
  };

  HLS.prototype._recover = function _recover(evt, data, error) {
    if (!this._recoveredDecodingError) {
      this._recoveredDecodingError = true;
      this._hls.recoverMediaError();
    } else if (!this._recoveredAudioCodecError) {
      this._recoveredAudioCodecError = true;
      this._hls.swapAudioCodec();
      this._hls.recoverMediaError();
    } else {
      _log2.default.error('hlsjs: failed to recover', { evt: evt, data: data });
      error.level = _error2.default.Levels.FATAL;
      var formattedError = this.createError(error);
      this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
      this.stop();
    }
  };

  // override


  HLS.prototype._setupSrc = function _setupSrc(srcUrl) {// eslint-disable-line no-unused-vars
    // this playback manages the src on the video element itself
  };

  HLS.prototype._startTimeUpdateTimer = function _startTimeUpdateTimer() {
    var _this3 = this;

    this._timeUpdateTimer = setInterval(function () {
      _this3._onDurationChange();
      _this3._onTimeUpdate();
    }, 100);
  };

  HLS.prototype._stopTimeUpdateTimer = function _stopTimeUpdateTimer() {
    clearInterval(this._timeUpdateTimer);
  };

  HLS.prototype.getProgramDateTime = function getProgramDateTime() {
    return this._programDateTime;
  };
  // the duration on the video element itself should not be used
  // as this does not necesarily represent the duration of the stream
  // https://github.com/clappr/clappr/issues/668#issuecomment-157036678


  HLS.prototype.getDuration = function getDuration() {
    return this._duration;
  };

  HLS.prototype.getCurrentTime = function getCurrentTime() {
    // e.g. can be < 0 if user pauses near the start
    // eventually they will then be kicked to the end by hlsjs if they run out of buffer
    // before the official start time
    return Math.max(0, this.el.currentTime - this._startTime);
  };

  // the time that "0" now represents relative to when playback started
  // for a stream with a sliding window this will increase as content is
  // removed from the beginning


  HLS.prototype.getStartTimeOffset = function getStartTimeOffset() {
    return this._startTime;
  };

  HLS.prototype.seekPercentage = function seekPercentage(percentage) {
    var seekTo = this._duration;
    if (percentage > 0) seekTo = this._duration * (percentage / 100);

    this.seek(seekTo);
  };

  HLS.prototype.seek = function seek(time) {
    if (time < 0) {
      _log2.default.warn('Attempt to seek to a negative time. Resetting to live point. Use seekToLivePoint() to seek to the live point.');
      time = this.getDuration();
    }
    // assume live if time within 3 seconds of end of stream
    this.dvrEnabled && this._updateDvr(time < this.getDuration() - 3);
    time += this._startTime;
    _HTML5VideoPlayback.prototype.seek.call(this, time);
  };

  HLS.prototype.seekToLivePoint = function seekToLivePoint() {
    this.seek(this.getDuration());
  };

  HLS.prototype._updateDvr = function _updateDvr(status) {
    this.trigger(_events2.default.PLAYBACK_DVR, status);
    this.trigger(_events2.default.PLAYBACK_STATS_ADD, { 'dvr': status });
  };

  HLS.prototype._updateSettings = function _updateSettings() {
    if (this._playbackType === _playback2.default.VOD) this.settings.left = ['playpause', 'position', 'duration'];else if (this.dvrEnabled) this.settings.left = ['playpause'];else this.settings.left = ['playstop'];

    this.settings.seekEnabled = this.isSeekEnabled();
    this.trigger(_events2.default.PLAYBACK_SETTINGSUPDATE);
  };

  HLS.prototype._onHLSJSError = function _onHLSJSError(evt, data) {
    var error = {
      code: data.type + '_' + data.details,
      description: this.name + ' error: type: ' + data.type + ', details: ' + data.details,
      raw: data
    };
    var formattedError = void 0;
    if (data.response) error.description += ', response: ' + (0, _stringify2.default)(data.response);
    // only report/handle errors if they are fatal
    // hlsjs should automatically handle non fatal errors
    if (data.fatal) {
      if (this._recoverAttemptsRemaining > 0) {
        this._recoverAttemptsRemaining -= 1;
        switch (data.type) {
          case _hlsLightMin2.default.ErrorTypes.NETWORK_ERROR:
            switch (data.details) {
              // The following network errors cannot be recovered with HLS.startLoad()
              // For more details, see https://github.com/video-dev/hls.js/blob/master/doc/design.md#error-detection-and-handling
              // For "level load" fatal errors, see https://github.com/video-dev/hls.js/issues/1138
              case _hlsLightMin2.default.ErrorDetails.MANIFEST_LOAD_ERROR:
              case _hlsLightMin2.default.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
              case _hlsLightMin2.default.ErrorDetails.MANIFEST_PARSING_ERROR:
              case _hlsLightMin2.default.ErrorDetails.LEVEL_LOAD_ERROR:
              case _hlsLightMin2.default.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                _log2.default.error('hlsjs: unrecoverable network fatal error.', { evt: evt, data: data });
                formattedError = this.createError(error);
                this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
                this.stop();
                break;
              default:
                _log2.default.warn('hlsjs: trying to recover from network error.', { evt: evt, data: data });
                error.level = _error2.default.Levels.WARN;
                this.createError(error);
                this._hls.startLoad();
                break;
            }
            break;
          case _hlsLightMin2.default.ErrorTypes.MEDIA_ERROR:
            _log2.default.warn('hlsjs: trying to recover from media error.', { evt: evt, data: data });
            error.level = _error2.default.Levels.WARN;
            this.createError(error);
            this._recover(evt, data, error);
            break;
          default:
            _log2.default.error('hlsjs: could not recover from error.', { evt: evt, data: data });
            formattedError = this.createError(error);
            this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
            this.stop();
            break;
        }
      } else {
        _log2.default.error('hlsjs: could not recover from error after maximum number of attempts.', { evt: evt, data: data });
        formattedError = this.createError(error);
        this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
        this.stop();
      }
    } else {
      error.level = _error2.default.Levels.WARN;
      this.createError(error);
      _log2.default.warn('hlsjs: non-fatal error occurred', { evt: evt, data: data });
    }
  };

  HLS.prototype._onTimeUpdate = function _onTimeUpdate() {
    var update = { current: this.getCurrentTime(), total: this.getDuration(), firstFragDateTime: this.getProgramDateTime() };
    var isSame = this._lastTimeUpdate && update.current === this._lastTimeUpdate.current && update.total === this._lastTimeUpdate.total;
    if (isSame) return;

    this._lastTimeUpdate = update;
    this.trigger(_events2.default.PLAYBACK_TIMEUPDATE, update, this.name);
  };

  HLS.prototype._onDurationChange = function _onDurationChange() {
    var duration = this.getDuration();
    if (this._lastDuration === duration) return;

    this._lastDuration = duration;
    _HTML5VideoPlayback.prototype._onDurationChange.call(this);
  };

  HLS.prototype._onProgress = function _onProgress() {
    if (!this.el.buffered.length) return;

    var buffered = [];
    var bufferedPos = 0;
    for (var i = 0; i < this.el.buffered.length; i++) {
      buffered = [].concat((0, _toConsumableArray3.default)(buffered), [{
        // for a stream with sliding window dvr something that is buffered my slide off the start of the timeline
        start: Math.max(0, this.el.buffered.start(i) - this._playableRegionStartTime),
        end: Math.max(0, this.el.buffered.end(i) - this._playableRegionStartTime)
      }]);
      if (this.el.currentTime >= buffered[i].start && this.el.currentTime <= buffered[i].end) bufferedPos = i;
    }
    var progress = {
      start: buffered[bufferedPos].start,
      current: buffered[bufferedPos].end,
      total: this.getDuration()
    };
    this.trigger(_events2.default.PLAYBACK_PROGRESS, progress, buffered);
  };

  HLS.prototype.play = function play() {
    try {
      // && JSON.stringify(this.options.plugins).indexOf('VastAds') > -1
      if (window.google && window.google.ima && this.options.plugins && this.options.VastAds.preroll && this.options.VastAds.preroll.data.length > 0) {
        this.trigger(_events2.default.PLAYBACK_PREROLL_REQUEST);
        return;
      }
    } catch (e) {}

    if (!this._hls) this._setup();

    _HTML5VideoPlayback.prototype.play.call(this);
    this._startTimeUpdateTimer();
  };

  HLS.prototype.pause = function pause() {
    if (!this._hls) return;

    _HTML5VideoPlayback.prototype.pause.call(this);
    if (this.dvrEnabled) this._updateDvr(true);
  };

  HLS.prototype.stop = function stop() {
    if (this._hls) {
      _HTML5VideoPlayback.prototype.stop.call(this);
      this._hls.destroy();
      delete this._hls;
    }
  };

  HLS.prototype.destroy = function destroy() {
    this._stopTimeUpdateTimer();
    if (this._hls) {
      this._hls.destroy();
      delete this._hls;
    }
    _HTML5VideoPlayback.prototype.destroy.call(this);
  };

  HLS.prototype._updatePlaybackType = function _updatePlaybackType(evt, data) {
    this._playbackType = data.details.live ? _playback2.default.LIVE : _playback2.default.VOD;
    this._onLevelUpdated(evt, data);

    // Live stream subtitle tracks detection hack (may not immediately available)
    if (this._ccTracksUpdated && this._playbackType === _playback2.default.LIVE && this.hasClosedCaptionsTracks) this._onSubtitleLoaded();
  };

  HLS.prototype._fillLevels = function _fillLevels() {
    this._levels = this._hls.levels.map(function (level, index) {
      return { id: index, level: level, label: level.bitrate / 1000 + 'Kbps' };
    });
    this.trigger(_events2.default.PLAYBACK_LEVELS_AVAILABLE, this._levels);
  };

  HLS.prototype._onLevelUpdated = function _onLevelUpdated(evt, data) {
    this._segmentTargetDuration = data.details.targetduration;
    this._playlistType = data.details.type || null;

    var startTimeChanged = false;
    var durationChanged = false;
    var fragments = data.details.fragments;
    var previousPlayableRegionStartTime = this._playableRegionStartTime;
    var previousPlayableRegionDuration = this._playableRegionDuration;

    if (fragments.length === 0) return;

    // #EXT-X-PROGRAM-DATE-TIME
    if (fragments[0].rawProgramDateTime) this._programDateTime = fragments[0].rawProgramDateTime;

    if (this._playableRegionStartTime !== fragments[0].start) {
      startTimeChanged = true;
      this._playableRegionStartTime = fragments[0].start;
    }

    if (startTimeChanged) {
      if (!this._localStartTimeCorrelation) {
        // set the correlation to map to middle of the extrapolation window
        this._localStartTimeCorrelation = {
          local: this._now,
          remote: (fragments[0].start + this._extrapolatedWindowDuration / 2) * 1000
        };
      } else {
        // check if the correlation still works
        var corr = this._localStartTimeCorrelation;
        var timePassed = this._now - corr.local;
        // this should point to a time within the extrapolation window
        var startTime = (corr.remote + timePassed) / 1000;
        if (startTime < fragments[0].start) {
          // our start time is now earlier than the first chunk
          // (maybe the chunk was removed early)
          // reset correlation so that it sits at the beginning of the first available chunk
          this._localStartTimeCorrelation = {
            local: this._now,
            remote: fragments[0].start * 1000
          };
        } else if (startTime > previousPlayableRegionStartTime + this._extrapolatedWindowDuration) {
          // start time was past the end of the old extrapolation window (so would have been capped)
          // see if now that time would be inside the window, and if it would be set the correlation
          // so that it resumes from the time it was at at the end of the old window
          // update the correlation so that the time starts counting again from the value it's on now
          this._localStartTimeCorrelation = {
            local: this._now,
            remote: Math.max(fragments[0].start, previousPlayableRegionStartTime + this._extrapolatedWindowDuration) * 1000
          };
        }
      }
    }

    var newDuration = data.details.totalduration;
    // if it's a live stream then shorten the duration to remove access
    // to the area after hlsjs's live sync point
    // seeks to areas after this point sometimes have issues
    if (this._playbackType === _playback2.default.LIVE) {
      var fragmentTargetDuration = data.details.targetduration;
      var hlsjsConfig = this.options.playback.hlsjsConfig || {};
      var liveSyncDurationCount = hlsjsConfig.liveSyncDurationCount || _hlsLightMin2.default.DefaultConfig.liveSyncDurationCount;
      var hiddenAreaDuration = fragmentTargetDuration * liveSyncDurationCount;
      if (hiddenAreaDuration <= newDuration) {
        newDuration -= hiddenAreaDuration;
        this._durationExcludesAfterLiveSyncPoint = true;
      } else {
        this._durationExcludesAfterLiveSyncPoint = false;
      }
    }

    if (newDuration !== this._playableRegionDuration) {
      durationChanged = true;
      this._playableRegionDuration = newDuration;
    }

    // Note the end time is not the playableRegionDuration
    // The end time will always increase even if content is removed from the beginning
    var endTime = fragments[0].start + newDuration;
    var previousEndTime = previousPlayableRegionStartTime + previousPlayableRegionDuration;
    var endTimeChanged = endTime !== previousEndTime;
    if (endTimeChanged) {
      if (!this._localEndTimeCorrelation) {
        // set the correlation to map to the end
        this._localEndTimeCorrelation = {
          local: this._now,
          remote: endTime * 1000
        };
      } else {
        // check if the correlation still works
        var _corr = this._localEndTimeCorrelation;
        var _timePassed = this._now - _corr.local;
        // this should point to a time within the extrapolation window from the end
        var extrapolatedEndTime = (_corr.remote + _timePassed) / 1000;
        if (extrapolatedEndTime > endTime) {
          this._localEndTimeCorrelation = {
            local: this._now,
            remote: endTime * 1000
          };
        } else if (extrapolatedEndTime < endTime - this._extrapolatedWindowDuration) {
          // our extrapolated end time is now earlier than the extrapolation window from the actual end time
          // (maybe a chunk became available early)
          // reset correlation so that it sits at the beginning of the extrapolation window from the end time
          this._localEndTimeCorrelation = {
            local: this._now,
            remote: (endTime - this._extrapolatedWindowDuration) * 1000
          };
        } else if (extrapolatedEndTime > previousEndTime) {
          // end time was past the old end time (so would have been capped)
          // set the correlation so that it resumes from the time it was at at the end of the old window
          this._localEndTimeCorrelation = {
            local: this._now,
            remote: previousEndTime * 1000
          };
        }
      }
    }

    // now that the values have been updated call any methods that use on them so they get the updated values
    // immediately
    durationChanged && this._onDurationChange();
    startTimeChanged && this._onProgress();
  };

  HLS.prototype._onFragmentLoaded = function _onFragmentLoaded(evt, data) {
    this.trigger(_events2.default.PLAYBACK_FRAGMENT_LOADED, data);
  };

  HLS.prototype._onSubtitleLoaded = function _onSubtitleLoaded() {
    // This event may be triggered multiple times
    // Setup CC only once (disable CC by default)
    if (!this._ccIsSetup) {
      this.trigger(_events2.default.PLAYBACK_SUBTITLE_AVAILABLE);
      var trackId = this._playbackType === _playback2.default.LIVE ? -1 : this.closedCaptionsTrackId;
      this.closedCaptionsTrackId = trackId;
      this._ccIsSetup = true;
    }
  };

  HLS.prototype._onLevelSwitch = function _onLevelSwitch(evt, data) {
    if (!this.levels.length) this._fillLevels();

    this.trigger(_events2.default.PLAYBACK_LEVEL_SWITCH_END);
    this.trigger(_events2.default.PLAYBACK_LEVEL_SWITCH, data);
    var currentLevel = this._hls.levels[data.level];
    if (currentLevel) {
      // TODO should highDefinition be private and maybe have a read only accessor if it's used somewhere
      this.highDefinition = currentLevel.height >= 720 || currentLevel.bitrate / 1000 >= 2000;
      this.trigger(_events2.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinition);
      this.trigger(_events2.default.PLAYBACK_BITRATE, {
        height: currentLevel.height,
        width: currentLevel.width,
        bandwidth: currentLevel.bitrate,
        bitrate: currentLevel.bitrate,
        level: data.level
      });
    }
  };

  HLS.prototype.getPlaybackType = function getPlaybackType() {
    return this._playbackType;
  };

  HLS.prototype.isSeekEnabled = function isSeekEnabled() {
    return this._playbackType === _playback2.default.VOD || this.dvrEnabled;
  };

  (0, _createClass3.default)(HLS, [{
    key: 'dvrEnabled',
    get: function get() {
      // enabled when:
      // - the duration does not include content after hlsjs's live sync point
      // - the playable region duration is longer than the configured duration to enable dvr after
      // - the playback type is LIVE.
      return this._durationExcludesAfterLiveSyncPoint && this._duration >= this._minDvrSize && this.getPlaybackType() === _playback2.default.LIVE;
    }
  }]);
  return HLS;
}(_html5_video2.default);

exports.default = HLS;


HLS.canPlay = function (resource, mimeType) {
  var resourceParts = resource.split('?')[0].match(/.*\.(.*)$/) || [];
  var isHls = resourceParts.length > 1 && resourceParts[1].toLowerCase() === 'm3u8' || mimeType === 'application/x-mpegURL' || mimeType === 'application/vnd.apple.mpegurl';

  return !!(_hlsLightMin2.default.isSupported() && isHls);
};
module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(170), __esModule: true };

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Hls=e():t.Hls=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var a=r[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=21)}([function(t,e,r){"use strict";function i(){}function a(t,e){return e="["+t+"] > "+e}function n(t){var e=self.console[t];return e?function(){for(var r=arguments.length,i=Array(r),n=0;n<r;n++)i[n]=arguments[n];i[0]&&(i[0]=a(t,i[0])),e.apply(self.console,i)}:i}function o(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];r.forEach(function(e){d[e]=t[e]?t[e].bind(t):n(e)})}r.d(e,"a",function(){return u}),r.d(e,"b",function(){return f});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l={trace:i,debug:i,log:i,warn:i,info:i,error:i},d=l,u=function(t){if(!0===t||"object"===(void 0===t?"undefined":s(t))){o(t,"debug","log","info","warn","error");try{d.log()}catch(t){d=l}}else d=l},f=d},function(t,e,r){"use strict";var i={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition"};e.a=i},function(t,e,r){"use strict";r.d(e,"b",function(){return i}),r.d(e,"a",function(){return a});var i={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",KEY_SYSTEM_ERROR:"keySystemError",MUX_ERROR:"muxError",OTHER_ERROR:"otherError"},a={KEY_SYSTEM_NO_KEYS:"keySystemNoKeys",KEY_SYSTEM_NO_ACCESS:"keySystemNoAccess",KEY_SYSTEM_NO_SESSION:"keySystemNoSession",KEY_SYSTEM_LICENSE_REQUEST_FAILED:"keySystemLicenseRequestFailed",MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",MANIFEST_INCOMPATIBLE_CODECS_ERROR:"manifestIncompatibleCodecsError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",AUDIO_TRACK_LOAD_ERROR:"audioTrackLoadError",AUDIO_TRACK_LOAD_TIMEOUT:"audioTrackLoadTimeOut",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",REMUX_ALLOC_ERROR:"remuxAllocError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_ADD_CODEC_ERROR:"bufferAddCodecError",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError",BUFFER_SEEK_OVER_HOLE:"bufferSeekOverHole",BUFFER_NUDGE_ON_STALL:"bufferNudgeOnStall",INTERNAL_EXCEPTION:"internalException"}},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(0),n=r(2),o=r(1),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=new Set(["hlsEventGeneric","hlsHandlerDestroying","hlsHandlerDestroyed"]),d=function(){function t(e){i(this,t),this.hls=e,this.onEvent=this.onEvent.bind(this);for(var r=arguments.length,a=Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];this.handledEvents=a,this.useGenericHandler=!0,this.registerListeners()}return t.prototype.destroy=function(){this.onHandlerDestroying(),this.unregisterListeners(),this.onHandlerDestroyed()},t.prototype.onHandlerDestroying=function(){},t.prototype.onHandlerDestroyed=function(){},t.prototype.isEventHandler=function(){return"object"===s(this.handledEvents)&&this.handledEvents.length&&"function"==typeof this.onEvent},t.prototype.registerListeners=function(){this.isEventHandler()&&this.handledEvents.forEach(function(t){if(l.has(t))throw new Error("Forbidden event-name: "+t);this.hls.on(t,this.onEvent)},this)},t.prototype.unregisterListeners=function(){this.isEventHandler()&&this.handledEvents.forEach(function(t){this.hls.off(t,this.onEvent)},this)},t.prototype.onEvent=function(t,e){this.onEventGeneric(t,e)},t.prototype.onEventGeneric=function(t,e){var r=function(t,e){var r="on"+t.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+t+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,e)};try{r.call(this,t,e).call()}catch(e){a.b.error("An internal error happened while handling event "+t+'. Error message: "'+e.message+'". Here is a stacktrace:',e),this.hls.trigger(o.a.ERROR,{type:n.b.OTHER_ERROR,details:n.a.INTERNAL_EXCEPTION,fatal:!1,event:t,err:e})}},t}();e.a=d},function(t,e){t.exports=void 0},function(t,e,r){!function(e){var r=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,i=/^([^\/;?#]*)(.*)$/,a=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,o={buildAbsoluteURL:function(t,e,r){if(r=r||{},t=t.trim(),!(e=e.trim())){if(!r.alwaysNormalize)return t;var a=o.parseURL(t);if(!a)throw new Error("Error trying to parse base URL.");return a.path=o.normalizePath(a.path),o.buildURLFromParts(a)}var n=o.parseURL(e);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):e;var s=o.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=i.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var d={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(d.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var u=s.path,f=u.substring(0,u.lastIndexOf("/")+1)+n.path;d.path=o.normalizePath(f)}else d.path=s.path,n.params||(d.params=s.params,n.query||(d.query=s.query));return null===d.path&&(d.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(d)},parseURL:function(t){var e=r.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(a,"");t.length!==(t=t.replace(n,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}};t.exports=o}()},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(){i(this,t)}return t.isHeader=function(t,e){return e+10<=t.length&&73===t[e]&&68===t[e+1]&&51===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},t.isFooter=function(t,e){return e+10<=t.length&&51===t[e]&&68===t[e+1]&&73===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},t.getID3Data=function(e,r){for(var i=r,a=0;t.isHeader(e,r);){a+=10;a+=t._readSize(e,r+6),t.isFooter(e,r+10)&&(a+=10),r+=a}if(a>0)return e.subarray(i,i+a)},t._readSize=function(t,e){var r=0;return r=(127&t[e])<<21,r|=(127&t[e+1])<<14,r|=(127&t[e+2])<<7,r|=127&t[e+3]},t.getTimeStamp=function(e){for(var r=t.getID3Frames(e),i=0;i<r.length;i++){var a=r[i];if(t.isTimeStampFrame(a))return t._readTimeStamp(a)}},t.isTimeStampFrame=function(t){return t&&"PRIV"===t.key&&"com.apple.streaming.transportStreamTimestamp"===t.info},t._getFrameData=function(e){var r=String.fromCharCode(e[0],e[1],e[2],e[3]),i=t._readSize(e,4);return{type:r,size:i,data:e.subarray(10,10+i)}},t.getID3Frames=function(e){for(var r=0,i=[];t.isHeader(e,r);){var a=t._readSize(e,r+6);r+=10;for(var n=r+a;r+8<n;){var o=t._getFrameData(e.subarray(r)),s=t._decodeFrame(o);s&&i.push(s),r+=o.size+10}t.isFooter(e,r)&&(r+=10)}return i},t._decodeFrame=function(e){return"PRIV"===e.type?t._decodePrivFrame(e):"T"===e.type[0]?t._decodeTextFrame(e):"W"===e.type[0]?t._decodeURLFrame(e):void 0},t._readTimeStamp=function(t){if(8===t.data.byteLength){var e=new Uint8Array(t.data),r=1&e[3],i=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},t._decodePrivFrame=function(e){if(!(e.size<2)){var r=t._utf8ArrayToStr(e.data,!0),i=new Uint8Array(e.data.subarray(r.length+1));return{key:e.type,info:r,data:i.buffer}}},t._decodeTextFrame=function(e){if(!(e.size<2)){if("TXXX"===e.type){var r=1,i=t._utf8ArrayToStr(e.data.subarray(r));r+=i.length+1;var a=t._utf8ArrayToStr(e.data.subarray(r));return{key:e.type,info:i,data:a}}var n=t._utf8ArrayToStr(e.data.subarray(1));return{key:e.type,data:n}}},t._decodeURLFrame=function(e){if("WXXX"===e.type){if(e.size<2)return;var r=1,i=t._utf8ArrayToStr(e.data.subarray(r));r+=i.length+1;var a=t._utf8ArrayToStr(e.data.subarray(r));return{key:e.type,info:i,data:a}}var n=t._utf8ArrayToStr(e.data);return{key:e.type,data:n}},t._utf8ArrayToStr=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.length,i=void 0,a=void 0,n=void 0,o="",s=0;s<r;){if(0===(i=t[s++])&&e)return o;if(0!==i&&3!==i)switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o+=String.fromCharCode(i);break;case 12:case 13:a=t[s++],o+=String.fromCharCode((31&i)<<6|63&a);break;case 14:a=t[s++],n=t[s++],o+=String.fromCharCode((15&i)<<12|(63&a)<<6|(63&n)<<0)}}return o},t}();a._utf8ArrayToStr;e.a=a},function(t,e){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(t){return"function"==typeof t}function a(t){return"number"==typeof t}function n(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(t){if(!a(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},r.prototype.emit=function(t){var e,r,a,s,l,d;if(this._events||(this._events={}),"error"===t&&(!this._events.error||n(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var u=new Error('Uncaught, unspecified "error" event. ('+e+")");throw u.context=e,u}if(r=this._events[t],o(r))return!1;if(i(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),r.apply(this,s)}else if(n(r))for(s=Array.prototype.slice.call(arguments,1),d=r.slice(),a=d.length,l=0;l<a;l++)d[l].apply(this,s);return!0},r.prototype.addListener=function(t,e){var a;if(!i(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,i(e.listener)?e.listener:e),this._events[t]?n(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,n(this._events[t])&&!this._events[t].warned&&(a=o(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&a>0&&this._events[t].length>a&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(t,e){function r(){this.removeListener(t,r),a||(a=!0,e.apply(this,arguments))}if(!i(e))throw TypeError("listener must be a function");var a=!1;return r.listener=e,this.on(t,r),this},r.prototype.removeListener=function(t,e){var r,a,o,s;if(!i(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(r=this._events[t],o=r.length,a=-1,r===e||i(r.listener)&&r.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(n(r)){for(s=o;s-- >0;)if(r[s]===e||r[s].listener&&r[s].listener===e){a=s;break}if(a<0)return this;1===r.length?(r.length=0,delete this._events[t]):r.splice(a,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},r.prototype.removeAllListeners=function(t){var e,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[t],i(r))this.removeListener(t,r);else if(r)for(;r.length;)this.removeListener(t,r[r.length-1]);return delete this._events[t],this},r.prototype.listeners=function(t){return this._events&&this._events[t]?i(this._events[t])?[this._events[t]]:this._events[t].slice():[]},r.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(i(e))return 1;if(e)return e.length}return 0},r.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e,r){"use strict";function i(){if("undefined"!=typeof window)return window.MediaSource||window.WebKitMediaSource}e.a=i},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(2),d=r(0),u=r(10),f=r(22),c=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),h={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},p={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"},v=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.MANIFEST_LOADING,o.a.LEVEL_LOADING,o.a.AUDIO_TRACK_LOADING,o.a.SUBTITLE_TRACK_LOADING));return n.loaders={},n}return n(e,t),e.canHaveQualityLevels=function(t){return t!==h.AUDIO_TRACK&&t!==h.SUBTITLE_TRACK},e.mapContextToLevelType=function(t){switch(t.type){case h.AUDIO_TRACK:return p.AUDIO;case h.SUBTITLE_TRACK:return p.SUBTITLE;default:return p.MAIN}},e.getResponseUrl=function(t,e){var r=t.url;return void 0!==r&&0!==r.indexOf("data:")||(r=e.url),r},e.prototype.createInternalLoader=function(t){var e=this.hls.config,r=e.pLoader,i=e.loader,a=r||i,n=new a(e);return t.loader=n,this.loaders[t.type]=n,n},e.prototype.getInternalLoader=function(t){return this.loaders[t.type]},e.prototype.resetInternalLoader=function(t){this.loaders[t]&&delete this.loaders[t]},e.prototype.destroyInternalLoaders=function(){for(var t in this.loaders){var e=this.loaders[t];e&&e.destroy(),this.resetInternalLoader(t)}},e.prototype.destroy=function(){this.destroyInternalLoaders(),t.prototype.destroy.call(this)},e.prototype.onManifestLoading=function(t){this.load(t.url,{type:h.MANIFEST})},e.prototype.onLevelLoading=function(t){this.load(t.url,{type:h.LEVEL,level:t.level,id:t.id})},e.prototype.onAudioTrackLoading=function(t){this.load(t.url,{type:h.AUDIO_TRACK,id:t.id})},e.prototype.onSubtitleTrackLoading=function(t){this.load(t.url,{type:h.SUBTITLE_TRACK,id:t.id})},e.prototype.load=function(t,e){var r=this.hls.config,i=this.getInternalLoader(e);if(i){var a=i.context;if(a&&a.url===t)return d.b.trace("playlist request ongoing"),!1;d.b.warn("aborting previous loader for type: "+e.type),i.abort()}var n=void 0,o=void 0,s=void 0,l=void 0;switch(e.type){case h.MANIFEST:n=r.manifestLoadingMaxRetry,o=r.manifestLoadingTimeOut,s=r.manifestLoadingRetryDelay,l=r.manifestLoadingMaxRetryTimeout;break;case h.LEVEL:n=0,o=r.levelLoadingTimeOut;break;default:n=r.levelLoadingMaxRetry,o=r.levelLoadingTimeOut,s=r.levelLoadingRetryDelay,l=r.levelLoadingMaxRetryTimeout,d.b.log("Playlist loader for "+e.type+" "+(e.level||e.id))}i=this.createInternalLoader(e),e.url=t,e.responseType=e.responseType||"";var u=void 0,f=void 0;return u={timeout:o,maxRetry:n,retryDelay:s,maxRetryDelay:l},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},i.load(e,u,f),!0},e.prototype.loadsuccess=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(r.isSidxRequest)return this._handleSidxRequest(t,r),void this._handlePlaylistLoaded(t,e,r,i);this.resetInternalLoader(r.type);var a=t.data;if(e.tload=performance.now(),0!==a.indexOf("#EXTM3U"))return void this._handleManifestParsingError(t,r,"no EXTM3U delimiter",i);a.indexOf("#EXTINF:")>0||a.indexOf("#EXT-X-TARGETDURATION:")>0?this._handleTrackOrLevelPlaylist(t,e,r,i):this._handleMasterPlaylist(t,e,r,i)},e.prototype.loaderror=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this._handleNetworkError(e,r)},e.prototype.loadtimeout=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this._handleNetworkError(e,r,!0)},e.prototype._handleMasterPlaylist=function(t,r,i,a){var n=this.hls,s=t.data,l=e.getResponseUrl(t,i),u=f.a.parseMasterPlaylist(s,l);if(!u.length)return void this._handleManifestParsingError(t,i,"no level found in manifest",a);var c=u.map(function(t){return{id:t.attrs.AUDIO,codec:t.audioCodec}}),h=f.a.parseMasterPlaylistMedia(s,l,"AUDIO",c),p=f.a.parseMasterPlaylistMedia(s,l,"SUBTITLES");if(h.length){var v=!1;h.forEach(function(t){t.url||(v=!0)}),!1===v&&u[0].audioCodec&&!u[0].attrs.AUDIO&&(d.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),h.unshift({type:"main",name:"main"}))}n.trigger(o.a.MANIFEST_LOADED,{levels:u,audioTracks:h,subtitles:p,url:l,stats:r,networkDetails:a})},e.prototype._handleTrackOrLevelPlaylist=function(t,r,i,a){var n=this.hls,s=i.id,l=i.level,d=i.type,u=e.getResponseUrl(t,i),c=isNaN(l)?isNaN(s)?0:s:l,p=e.mapContextToLevelType(i),v=f.a.parseLevelPlaylist(t.data,u,c,p);if(v.tload=r.tload,d===h.MANIFEST){var g={url:u,details:v};n.trigger(o.a.MANIFEST_LOADED,{levels:[g],audioTracks:[],url:u,stats:r,networkDetails:a})}if(r.tparsed=performance.now(),v.needSidxRanges){var m=v.initSegment.url;return void this.load(m,{isSidxRequest:!0,type:d,level:l,levelDetails:v,id:s,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer"})}i.levelDetails=v,this._handlePlaylistLoaded(t,r,i,a)},e.prototype._handleSidxRequest=function(t,e){var r=u.a.parseSegmentIndex(new Uint8Array(t.data));r.references.forEach(function(t,r){var i=t.info,a=e.levelDetails.fragments[r];0===a.byteRange.length&&(a.rawByteRange=String(1+i.end-i.start)+"@"+String(i.start))}),e.levelDetails.initSegment.rawByteRange=String(r.moovEndOffset)+"@0"},e.prototype._handleManifestParsingError=function(t,e,r,i){this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:l.a.MANIFEST_PARSING_ERROR,fatal:!0,url:t.url,reason:r,networkDetails:i})},e.prototype._handleNetworkError=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=void 0,a=void 0,n=this.getInternalLoader(t);switch(t.type){case h.MANIFEST:i=r?l.a.MANIFEST_LOAD_TIMEOUT:l.a.MANIFEST_LOAD_ERROR,a=!0;break;case h.LEVEL:i=r?l.a.LEVEL_LOAD_TIMEOUT:l.a.LEVEL_LOAD_ERROR,a=!1;break;case h.AUDIO_TRACK:i=r?l.a.AUDIO_TRACK_LOAD_TIMEOUT:l.a.AUDIO_TRACK_LOAD_ERROR,a=!1;break;default:a=!1}n&&(n.abort(),this.resetInternalLoader(t.type)),this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:i,fatal:a,url:n.url,loader:n,context:t,networkDetails:e})},e.prototype._handlePlaylistLoaded=function(t,r,i,a){var n=i.type,s=i.level,l=i.id,d=i.levelDetails;if(!d.targetduration)return void this._handleManifestParsingError(t,i,"invalid target duration",a);if(e.canHaveQualityLevels(i.type))this.hls.trigger(o.a.LEVEL_LOADED,{details:d,level:s||0,id:l||0,stats:r,networkDetails:a});else switch(n){case h.AUDIO_TRACK:this.hls.trigger(o.a.AUDIO_TRACK_LOADED,{details:d,id:l,stats:r,networkDetails:a});break;case h.SUBTITLE_TRACK:this.hls.trigger(o.a.SUBTITLE_TRACK_LOADED,{details:d,id:l,stats:r,networkDetails:a})}},c(e,null,[{key:"ContextType",get:function(){return h}},{key:"LevelType",get:function(){return p}}]),e}(s.a);e.a=v},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(0),n=r(1),o=Math.pow(2,32)-1,s=function(){function t(e,r){i(this,t),this.observer=e,this.remuxer=r}return t.prototype.resetTimeStamp=function(t){this.initPTS=t},t.prototype.resetInitSegment=function(e,r,i,a){if(e&&e.byteLength){var o=this.initData=t.parseInitSegment(e);null==r&&(r="mp4a.40.5"),null==i&&(i="avc1.42e01e");var s={};o.audio&&o.video?s.audiovideo={container:"video/mp4",codec:r+","+i,initSegment:a?e:null}:(o.audio&&(s.audio={container:"audio/mp4",codec:r,initSegment:a?e:null}),o.video&&(s.video={container:"video/mp4",codec:i,initSegment:a?e:null})),this.observer.trigger(n.a.FRAG_PARSING_INIT_SEGMENT,{tracks:s})}else r&&(this.audioCodec=r),i&&(this.videoCodec=i)},t.probe=function(e){return t.findBox({data:e,start:0,end:Math.min(e.length,16384)},["moof"]).length>0},t.bin2str=function(t){return String.fromCharCode.apply(null,t)},t.readUint16=function(t,e){t.data&&(e+=t.start,t=t.data);var r=t[e]<<8|t[e+1];return r<0?65536+r:r},t.readUint32=function(t,e){t.data&&(e+=t.start,t=t.data);var r=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3];return r<0?4294967296+r:r},t.writeUint32=function(t,e,r){t.data&&(e+=t.start,t=t.data),t[e]=r>>24,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=255&r},t.findBox=function(e,r){var i=[],a=void 0,n=void 0,o=void 0,s=void 0,l=void 0,d=void 0,u=void 0;if(e.data?(d=e.start,s=e.end,e=e.data):(d=0,s=e.byteLength),!r.length)return null;for(a=d;a<s;)n=t.readUint32(e,a),o=t.bin2str(e.subarray(a+4,a+8)),u=n>1?a+n:s,o===r[0]&&(1===r.length?i.push({data:e,start:a+8,end:u}):(l=t.findBox({data:e,start:a+8,end:u},r.slice(1)),l.length&&(i=i.concat(l)))),a=u;return i},t.parseSegmentIndex=function(e){var r=t.findBox(e,["moov"])[0],i=r?r.end:null,a=0,n=t.findBox(e,["sidx"]),o=void 0;if(!n||!n[0])return null;o=[],n=n[0];var s=n.data[0];a=0===s?8:16;var l=t.readUint32(n,a);a+=4;a+=0===s?8:16,a+=2;var d=n.end+0,u=t.readUint16(n,a);a+=2;for(var f=0;f<u;f++){var c=a,h=t.readUint32(n,c);c+=4;var p=2147483647&h;if(1===(2147483648&h)>>>31)return void console.warn("SIDX has hierarchical references (not supported)");var v=t.readUint32(n,c);c+=4,o.push({referenceSize:p,subsegmentDuration:v,info:{duration:v/l,start:d,end:d+p-1}}),d+=p,c+=4,a=c}return{earliestPresentationTime:0,timescale:l,version:s,referencesCount:u,references:o,moovEndOffset:i}},t.parseInitSegment=function(e){var r=[];return t.findBox(e,["moov","trak"]).forEach(function(e){var i=t.findBox(e,["tkhd"])[0];if(i){var n=i.data[i.start],o=0===n?12:20,s=t.readUint32(i,o),l=t.findBox(e,["mdia","mdhd"])[0];if(l){n=l.data[l.start],o=0===n?12:20;var d=t.readUint32(l,o),u=t.findBox(e,["mdia","hdlr"])[0];if(u){var f=t.bin2str(u.data.subarray(u.start+8,u.start+12)),c={soun:"audio",vide:"video"}[f];if(c){var h=t.findBox(e,["mdia","minf","stbl","stsd"]);if(h.length){h=h[0];var p=t.bin2str(h.data.subarray(h.start+12,h.start+16));a.b.log("MP4Demuxer:"+c+":"+p+" found")}r[s]={timescale:d,type:c},r[c]={timescale:d,id:s}}}}}}),r},t.getStartDTS=function(e,r){var i=void 0,a=void 0,n=void 0;return i=t.findBox(r,["moof","traf"]),a=[].concat.apply([],i.map(function(r){return t.findBox(r,["tfhd"]).map(function(i){var a=void 0,n=void 0;return a=t.readUint32(i,4),n=e[a].timescale||9e4,t.findBox(r,["tfdt"]).map(function(e){var r=void 0,i=void 0;return r=e.data[e.start],i=t.readUint32(e,4),1===r&&(i*=Math.pow(2,32),i+=t.readUint32(e,8)),i})[0]/n})})),n=Math.min.apply(null,a),isFinite(n)?n:0},t.offsetStartDTS=function(e,r,i){t.findBox(r,["moof","traf"]).map(function(r){return t.findBox(r,["tfhd"]).map(function(a){var n=t.readUint32(a,4),s=e[n].timescale||9e4;t.findBox(r,["tfdt"]).map(function(e){var r=e.data[e.start],a=t.readUint32(e,4);if(0===r)t.writeUint32(e,4,a-i*s);else{a*=Math.pow(2,32),a+=t.readUint32(e,8),a-=i*s,a=Math.max(a,0);var n=Math.floor(a/(o+1)),l=Math.floor(a%(o+1));t.writeUint32(e,4,n),t.writeUint32(e,8,l)}})})})},t.prototype.append=function(e,r,i,a){var o=this.initData;o||(this.resetInitSegment(e,this.audioCodec,this.videoCodec,!1),o=this.initData);var s=void 0,l=this.initPTS;if(void 0===l){var d=t.getStartDTS(o,e);this.initPTS=l=d-r,this.observer.trigger(n.a.INIT_PTS_FOUND,{initPTS:l})}t.offsetStartDTS(o,e,l),s=t.getStartDTS(o,e),this.remuxer.remux(o.audio,o.video,null,null,s,i,a,e)},t.prototype.destroy=function(){},t}();e.a=s},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(5),n=r.n(a),o=r(12),s=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),l=function(){function t(){var e;i(this,t),this._url=null,this._byteRange=null,this._decryptdata=null,this.tagList=[],this._elementaryStreams=(e={},e[t.ElementaryStreamTypes.AUDIO]=!1,e[t.ElementaryStreamTypes.VIDEO]=!1,e)}return t.prototype.addElementaryStream=function(t){this._elementaryStreams[t]=!0},t.prototype.hasElementaryStream=function(t){return!0===this._elementaryStreams[t]},t.prototype.createInitializationVector=function(t){for(var e=new Uint8Array(16),r=12;r<16;r++)e[r]=t>>8*(15-r)&255;return e},t.prototype.fragmentDecryptdataFromLevelkey=function(t,e){var r=t;return t&&t.method&&t.uri&&!t.iv&&(r=new o.a,r.method=t.method,r.baseuri=t.baseuri,r.reluri=t.reluri,r.iv=this.createInitializationVector(e)),r},s(t,[{key:"url",get:function(){return!this._url&&this.relurl&&(this._url=n.a.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(t){this._url=t}},{key:"programDateTime",get:function(){return!this._programDateTime&&this.rawProgramDateTime&&(this._programDateTime=new Date(Date.parse(this.rawProgramDateTime))),this._programDateTime}},{key:"byteRange",get:function(){if(!this._byteRange&&!this.rawByteRange)return[];if(this._byteRange)return this._byteRange;var t=[];if(this.rawByteRange){var e=this.rawByteRange.split("@",2);if(1===e.length){var r=this.lastByteRangeEndOffset;t[0]=r||0}else t[0]=parseInt(e[1]);t[1]=parseInt(e[0])+t[0],this._byteRange=t}return t}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"decryptdata",get:function(){return this._decryptdata||(this._decryptdata=this.fragmentDecryptdataFromLevelkey(this.levelkey,this.sn)),this._decryptdata}}],[{key:"ElementaryStreamTypes",get:function(){return{AUDIO:"audio",VIDEO:"video"}}}]),t}();e.a=l},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(5),n=r.n(a),o=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),s=function(){function t(){i(this,t),this.method=null,this.key=null,this.iv=null,this._uri=null}return o(t,[{key:"uri",get:function(){return!this._uri&&this.reluri&&(this._uri=n.a.buildAbsoluteURL(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri}}]),t}();e.a=s},function(t,e,r){"use strict";function i(t,e){var r=n[e];return!!r&&!0===r[t.slice(0,4)]}function a(t,e){return MediaSource.isTypeSupported((e||"video")+'/mp4;codecs="'+t+'"')}r.d(e,"b",function(){return i}),r.d(e,"a",function(){return a});var n={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0}}},function(t,e,r){"use strict";var i={search:function(t,e){for(var r=0,i=t.length-1,a=null,n=null;r<=i;){a=(r+i)/2|0,n=t[a];var o=e(n);if(o>0)r=a+1;else{if(!(o<0))return n;i=a-1}}return null}};e.a=i},function(t,e,r){"use strict";var i={isBuffered:function(t,e){try{if(t)for(var r=t.buffered,i=0;i<r.length;i++)if(e>=r.start(i)&&e<=r.end(i))return!0}catch(t){}return!1},bufferInfo:function(t,e,r){try{if(t){var i=t.buffered,a=[],n=void 0;for(n=0;n<i.length;n++)a.push({start:i.start(n),end:i.end(n)});return this.bufferedInfo(a,e,r)}}catch(t){}return{len:0,start:e,end:e,nextStart:void 0}},bufferedInfo:function(t,e,r){var i=[],a=void 0,n=void 0,o=void 0,s=void 0,l=void 0;for(t.sort(function(t,e){var r=t.start-e.start;return r||e.end-t.end}),l=0;l<t.length;l++){var d=i.length;if(d){var u=i[d-1].end;t[l].start-u<r?t[l].end>u&&(i[d-1].end=t[l].end):i.push(t[l])}else i.push(t[l])}for(l=0,a=0,n=o=e;l<i.length;l++){var f=i[l].start,c=i[l].end;if(e+r>=f&&e<c)n=f,o=c,a=o-e;else if(e+r<f){s=f;break}}return{len:a,start:n,end:o,nextStart:s}}};e.a=i},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(1),n=r(2),o=r(17),s=r(31),l=r(10),d=r(32),u=r(35),f=r(36),c=r(39),h=function(){function t(e,r,a,n){i(this,t),this.observer=e,this.typeSupported=r,this.config=a,this.vendor=n}return t.prototype.destroy=function(){var t=this.demuxer;t&&t.destroy()},t.prototype.push=function(t,e,r,i,n,s,l,d,u,f,c,h){if(t.byteLength>0&&null!=e&&null!=e.key&&"AES-128"===e.method){var p=this.decrypter;null==p&&(p=this.decrypter=new o.a(this.observer,this.config));var v=this,g=void 0;try{g=performance.now()}catch(t){g=Date.now()}p.decrypt(t,e.key.buffer,e.iv.buffer,function(t){var o=void 0;try{o=performance.now()}catch(t){o=Date.now()}v.observer.trigger(a.a.FRAG_DECRYPTED,{stats:{tstart:g,tdecrypt:o}}),v.pushDecrypted(new Uint8Array(t),e,new Uint8Array(r),i,n,s,l,d,u,f,c,h)})}else this.pushDecrypted(new Uint8Array(t),e,new Uint8Array(r),i,n,s,l,d,u,f,c,h)},t.prototype.pushDecrypted=function(t,e,r,i,o,h,p,v,g,m,y,b){var E=this.demuxer;if(!E||(p||v)&&!this.probe(t)){for(var T=this.observer,S=this.typeSupported,A=this.config,R=[{demux:d.a,remux:f.a},{demux:l.a,remux:c.a},{demux:s.a,remux:f.a},{demux:u.a,remux:f.a}],_=0,L=R.length;_<L;_++){var w=R[_],D=w.demux.probe;if(D(t)){var O=this.remuxer=new w.remux(T,A,S,this.vendor);E=new w.demux(T,O,A,S),this.probe=D;break}}if(!E)return void T.trigger(a.a.ERROR,{type:n.b.MEDIA_ERROR,details:n.a.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});this.demuxer=E}var I=this.remuxer;(p||v)&&(E.resetInitSegment(r,i,o,m),I.resetInitSegment()),p&&(E.resetTimeStamp(b),I.resetTimeStamp(b)),"function"==typeof E.setDecryptData&&E.setDecryptData(e),E.append(t,h,g,y)},t}();e.a=h},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(28),n=r(29),o=r(30),s=r(2),l=r(0),d=function(){function t(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=a.removePKCS7Padding,o=void 0===n||n;if(i(this,t),this.logEnabled=!0,this.observer=e,this.config=r,this.removePKCS7Padding=o,o)try{var s=crypto||self.crypto;this.subtle=s.subtle||s.webkitSubtle}catch(t){}this.disableWebCrypto=!this.subtle}return t.prototype.isSync=function(){return this.disableWebCrypto&&this.config.enableSoftwareAES},t.prototype.decrypt=function(t,e,r,i){var s=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(l.b.log("JS AES decrypt"),this.logEnabled=!1);var d=this.decryptor;d||(this.decryptor=d=new o.a),d.expandKey(e),i(d.decrypt(t,0,r,this.removePKCS7Padding))}else{this.logEnabled&&(l.b.log("WebCrypto AES decrypt"),this.logEnabled=!1);var u=this.subtle;this.key!==e&&(this.key=e,this.fastAesKey=new n.a(u,e)),this.fastAesKey.expandKey().then(function(n){new a.a(u,r).decrypt(t,n).catch(function(a){s.onWebCryptoError(a,t,e,r,i)}).then(function(t){i(t)})}).catch(function(a){s.onWebCryptoError(a,t,e,r,i)})}},t.prototype.onWebCryptoError=function(t,e,r,i,a){this.config.enableSoftwareAES?(l.b.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(e,r,i,a)):(l.b.error("decrypting error : "+t.message),this.observer.trigger(Event.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.FRAG_DECRYPT_ERROR,fatal:!0,reason:t.message}))},t.prototype.destroy=function(){var t=this.decryptor;t&&(t.destroy(),this.decryptor=void 0)},t}();e.a=d},function(t,e,r){"use strict";function i(t,e,r,i){var a=void 0,n=void 0,o=void 0,s=void 0,l=void 0,d=navigator.userAgent.toLowerCase(),u=i,f=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];return a=1+((192&e[r+2])>>>6),(n=(60&e[r+2])>>>2)>f.length-1?void t.trigger(Event.ERROR,{type:p.b.MEDIA_ERROR,details:p.a.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+n}):(s=(1&e[r+2])<<2,s|=(192&e[r+3])>>>6,h.b.log("manifest codec:"+i+",ADTS data:type:"+a+",sampleingIndex:"+n+"["+f[n]+"Hz],channelConfig:"+s),/firefox/i.test(d)?n>=6?(a=5,l=new Array(4),o=n-3):(a=2,l=new Array(2),o=n):-1!==d.indexOf("android")?(a=2,l=new Array(2),o=n):(a=5,l=new Array(4),i&&(-1!==i.indexOf("mp4a.40.29")||-1!==i.indexOf("mp4a.40.5"))||!i&&n>=6?o=n-3:((i&&-1!==i.indexOf("mp4a.40.2")&&(n>=6&&1===s||/vivaldi/i.test(d))||!i&&1===s)&&(a=2,l=new Array(2)),o=n)),l[0]=a<<3,l[0]|=(14&n)>>1,l[1]|=(1&n)<<7,l[1]|=s<<3,5===a&&(l[1]|=(14&o)>>1,l[2]=(1&o)<<7,l[2]|=8,l[3]=0),{config:l,samplerate:f[n],channelCount:s,codec:"mp4a.40."+a,manifestCodec:u})}function a(t,e){return 255===t[e]&&240==(246&t[e+1])}function n(t,e){return 1&t[e+1]?7:9}function o(t,e){return(3&t[e+3])<<11|t[e+4]<<3|(224&t[e+5])>>>5}function s(t,e){return!!(e+1<t.length&&a(t,e))}function l(t,e){if(e+1<t.length&&a(t,e)){var r=n(t,e),i=r;e+5<t.length&&(i=o(t,e));var s=e+i;if(s===t.length||s+1<t.length&&a(t,s))return!0}return!1}function d(t,e,r,a,n){if(!t.samplerate){var o=i(e,r,a,n);t.config=o.config,t.samplerate=o.samplerate,t.channelCount=o.channelCount,t.codec=o.codec,t.manifestCodec=o.manifestCodec,h.b.log("parsed codec:"+t.codec+",rate:"+o.samplerate+",nb channel:"+o.channelCount)}}function u(t){return 9216e4/t}function f(t,e,r,i,a){var s=void 0,l=void 0,d=void 0,u=t.length;if(s=n(t,e),l=o(t,e),(l-=s)>0&&e+s+l<=u)return d=r+i*a,{headerLength:s,frameLength:l,stamp:d}}function c(t,e,r,i,a){var n=u(t.samplerate),o=f(e,r,i,a,n);if(o){var s=o.stamp,l=o.headerLength,d=o.frameLength,c={unit:e.subarray(r+l,r+l+d),pts:s,dts:s};return t.samples.push(c),t.len+=d,{sample:c,length:d+l}}}e.d=s,e.e=l,e.c=d,e.b=u,e.a=c;var h=r(0),p=r(2)},function(t,e,r){"use strict";var i={BitratesMap:[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],SamplingRateMap:[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],SamplesCoefficients:[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],BytesInSlot:[0,1,1,4],appendFrame:function(t,e,r,i,a){if(!(r+24>e.length)){var n=this.parseHeader(e,r);if(n&&r+n.frameLength<=e.length){var o=9e4*n.samplesPerFrame/n.sampleRate,s=i+a*o,l={unit:e.subarray(r,r+n.frameLength),pts:s,dts:s};return t.config=[],t.channelCount=n.channelCount,t.samplerate=n.sampleRate,t.samples.push(l),t.len+=n.frameLength,{sample:l,length:n.frameLength}}}},parseHeader:function(t,e){var r=t[e+1]>>3&3,a=t[e+1]>>1&3,n=t[e+2]>>4&15,o=t[e+2]>>2&3,s=t[e+2]>>1&1;if(1!==r&&0!==n&&15!==n&&3!==o){var l=3===r?3-a:3===a?3:4,d=1e3*i.BitratesMap[14*l+n-1],u=3===r?0:2===r?1:2,f=i.SamplingRateMap[3*u+o],c=t[e+3]>>6==3?1:2,h=i.SamplesCoefficients[r][a],p=i.BytesInSlot[a],v=8*h*p;return{sampleRate:f,channelCount:c,frameLength:parseInt(h*d/f+s,10)*p,samplesPerFrame:v}}},isHeaderPattern:function(t,e){return 255===t[e]&&224==(224&t[e+1])&&0!=(6&t[e+1])},isHeader:function(t,e){return!!(e+1<t.length&&this.isHeaderPattern(t,e))},probe:function(t,e){if(e+1<t.length&&this.isHeaderPattern(t,e)){var r=this.parseHeader(t,e),i=4;r&&r.frameLength&&(i=r.frameLength);var a=e+i;if(a===t.length||a+1<t.length&&this.isHeaderPattern(t,a))return!0}return!1}};e.a=i},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.d(e,"a",function(){return l}),r.d(e,"b",function(){return d});var o=r(3),s=r(1),l={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"},d=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,s.a.BUFFER_APPENDED,s.a.FRAG_BUFFERED,s.a.FRAG_LOADED));return n.bufferPadding=.2,n.fragments=Object.create(null),n.timeRanges=Object.create(null),n.config=r.config,n}return n(e,t),e.prototype.destroy=function(){this.fragments=null,this.timeRanges=null,this.config=null,o.a.prototype.destroy.call(this),t.prototype.destroy.call(this)},e.prototype.getBufferedFrag=function(t,e){var r=this.fragments,i=Object.keys(r).filter(function(i){var a=r[i];if(a.body.type!==e)return!1;if(!a.buffered)return!1;var n=a.body;return n.startPTS<=t&&t<=n.endPTS});if(0===i.length)return null;var a=i.pop();return r[a].body},e.prototype.detectEvictedFragments=function(t,e){var r=this,i=void 0,a=void 0;Object.keys(this.fragments).forEach(function(n){var o=r.fragments[n];if(!0===o.buffered){var s=o.range[t];if(s){i=s.time;for(var l=0;l<i.length;l++)if(a=i[l],!1===r.isTimeBuffered(a.startPTS,a.endPTS,e)){r.removeFragment(o.body);break}}}})},e.prototype.detectPartialFragments=function(t){var e=this,r=this.getFragmentKey(t),i=this.fragments[r];i&&(i.buffered=!0,Object.keys(this.timeRanges).forEach(function(r){if(!0===t.hasElementaryStream(r)){var a=e.timeRanges[r];i.range[r]=e.getBufferedTimes(t.startPTS,t.endPTS,a)}}))},e.prototype.getBufferedTimes=function(t,e,r){for(var i=[],a=void 0,n=void 0,o=!1,s=0;s<r.length;s++){if(a=r.start(s)-this.bufferPadding,n=r.end(s)+this.bufferPadding,t>=a&&e<=n){i.push({startPTS:Math.max(t,r.start(s)),endPTS:Math.min(e,r.end(s))});break}if(t<n&&e>a)i.push({startPTS:Math.max(t,r.start(s)),endPTS:Math.min(e,r.end(s))}),o=!0;else if(e<=a)break}return{time:i,partial:o}},e.prototype.getFragmentKey=function(t){return t.type+"_"+t.level+"_"+t.sn},e.prototype.getPartialFragment=function(t){var e=this,r=void 0,i=void 0,a=void 0,n=null,o=0;return Object.keys(this.fragments).forEach(function(s){var l=e.fragments[s];e.isPartial(l)&&(i=l.body.startPTS-e.bufferPadding,a=l.body.endPTS+e.bufferPadding,t>=i&&t<=a&&(r=Math.min(t-i,a-t),o<=r&&(n=l.body,o=r)))}),n},e.prototype.getState=function(t){var e=this.getFragmentKey(t),r=this.fragments[e],i=l.NOT_LOADED;return void 0!==r&&(i=r.buffered?!0===this.isPartial(r)?l.PARTIAL:l.OK:l.APPENDING),i},e.prototype.isPartial=function(t){return!0===t.buffered&&(void 0!==t.range.video&&!0===t.range.video.partial||void 0!==t.range.audio&&!0===t.range.audio.partial)},e.prototype.isTimeBuffered=function(t,e,r){for(var i=void 0,a=void 0,n=0;n<r.length;n++){if(i=r.start(n)-this.bufferPadding,a=r.end(n)+this.bufferPadding,t>=i&&e<=a)return!0;if(e<=i)return!1}return!1},e.prototype.onFragLoaded=function(t){var e=t.frag;if(!isNaN(e.sn)){var r=this.getFragmentKey(e),i={body:e,range:Object.create(null),buffered:!1};this.fragments[r]=i}},e.prototype.onBufferAppended=function(t){var e=this;this.timeRanges=t.timeRanges,Object.keys(this.timeRanges).forEach(function(t){var r=e.timeRanges[t];e.detectEvictedFragments(t,r)})},e.prototype.onFragBuffered=function(t){this.detectPartialFragments(t.frag)},e.prototype.hasFragment=function(t){var e=this.getFragmentKey(t);return void 0!==this.fragments[e]},e.prototype.removeFragment=function(t){var e=this.getFragmentKey(t);delete this.fragments[e]},e.prototype.removeAllFragments=function(){this.fragments=Object.create(null)},e}(o.a)},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=r(5),n=r.n(a),o=r(2),s=r(9),l=r(24),d=r(25),u=r(26),f=r(46),c=r(47),h=r(49),p=r(0),v=r(50),g=r(20),m=r(1),y=r(7),b=r.n(y),E=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}();r(59);var T=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t);var a=t.DefaultConfig;if((r.liveSyncDurationCount||r.liveMaxLatencyDurationCount)&&(r.liveSyncDuration||r.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for(var n in a)n in r||(r[n]=a[n]);if(void 0!==r.liveMaxLatencyDurationCount&&r.liveMaxLatencyDurationCount<=r.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==r.liveMaxLatencyDuration&&(r.liveMaxLatencyDuration<=r.liveSyncDuration||void 0===r.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');Object(p.a)(r.debug),this.config=r,this._autoLevelCapping=-1;var o=this.observer=new b.a;o.trigger=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];o.emit.apply(o,[t,t].concat(r))},o.off=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];o.removeListener.apply(o,[t].concat(r))},this.on=o.on.bind(o),this.off=o.off.bind(o),this.trigger=o.trigger.bind(o);var h=this.abrController=new r.abrController(this),v=new r.bufferController(this),m=new r.capLevelController(this),y=new r.fpsController(this),E=new s.a(this),T=new l.a(this),S=new d.a(this),A=new c.a(this),R=this.levelController=new f.a(this),_=new g.b(this),L=this.streamController=new u.a(this,_),w=[R,L],D=r.audioStreamController;D&&w.push(new D(this,_)),this.networkControllers=w;var O=[E,T,S,h,v,m,y,A,_];if(D=r.audioTrackController){var I=new D(this);this.audioTrackController=I,O.push(I)}if(D=r.subtitleTrackController){var x=new D(this);this.subtitleTrackController=x,O.push(x)}if(D=r.emeController){var k=new D(this);this.emeController=k,O.push(k)}[r.subtitleStreamController,r.timelineController].forEach(function(t){t&&O.push(new t(e))}),this.coreComponents=O}return t.isSupported=function(){return Object(h.a)()},E(t,null,[{key:"version",get:function(){return"0.9.1"}},{key:"Events",get:function(){return m.a}},{key:"ErrorTypes",get:function(){return o.b}},{key:"ErrorDetails",get:function(){return o.a}},{key:"DefaultConfig",get:function(){return t.defaultConfig?t.defaultConfig:v.a},set:function(e){t.defaultConfig=e}}]),t.prototype.destroy=function(){p.b.log("destroy"),this.trigger(m.a.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach(function(t){t.destroy()}),this.url=null,this.observer.removeAllListeners(),this._autoLevelCapping=-1},t.prototype.attachMedia=function(t){p.b.log("attachMedia"),this.media=t,this.trigger(m.a.MEDIA_ATTACHING,{media:t})},t.prototype.detachMedia=function(){p.b.log("detachMedia"),this.trigger(m.a.MEDIA_DETACHING),this.media=null},t.prototype.loadSource=function(t){t=n.a.buildAbsoluteURL(window.location.href,t,{alwaysNormalize:!0}),p.b.log("loadSource:"+t),this.url=t,this.trigger(m.a.MANIFEST_LOADING,{url:t})},t.prototype.startLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;p.b.log("startLoad("+t+")"),this.networkControllers.forEach(function(e){e.startLoad(t)})},t.prototype.stopLoad=function(){p.b.log("stopLoad"),this.networkControllers.forEach(function(t){t.stopLoad()})},t.prototype.swapAudioCodec=function(){p.b.log("swapAudioCodec"),this.streamController.swapAudioCodec()},t.prototype.recoverMediaError=function(){p.b.log("recoverMediaError");var t=this.media;this.detachMedia(),this.attachMedia(t)},E(t,[{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(t){p.b.log("set currentLevel:"+t),this.loadLevel=t,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(t){p.b.log("set nextLevel:"+t),this.levelController.manualLevel=t,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(t){p.b.log("set loadLevel:"+t),this.levelController.manualLevel=t}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(t){this.levelController.nextLoadLevel=t}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(t){p.b.log("set firstLevel:"+t),this.levelController.firstLevel=t}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(t){p.b.log("set startLevel:"+t);var e=this;-1!==t&&(t=Math.max(t,e.minAutoLevel)),e.levelController.startLevel=t}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(t){p.b.log("set autoLevelCapping:"+t),this._autoLevelCapping=t}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){for(var t=this,e=t.levels,r=t.config.minAutoBitrate,i=e?e.length:0,a=0;a<i;a++){if((e[a].realBitrate?Math.max(e[a].realBitrate,e[a].bitrate):e[a].bitrate)>r)return a}return 0}},{key:"maxAutoLevel",get:function(){var t=this,e=t.levels,r=t.autoLevelCapping;return-1===r&&e&&e.length?e.length-1:r}},{key:"nextAutoLevel",get:function(){var t=this;return Math.min(Math.max(t.abrController.nextAutoLevel,t.minAutoLevel),t.maxAutoLevel)},set:function(t){var e=this;e.abrController.nextAutoLevel=Math.max(e.minAutoLevel,t)}},{key:"audioTracks",get:function(){var t=this.audioTrackController;return t?t.audioTracks:[]}},{key:"audioTrack",get:function(){var t=this.audioTrackController;return t?t.audioTrack:-1},set:function(t){var e=this.audioTrackController;e&&(e.audioTrack=t)}},{key:"liveSyncPosition",get:function(){return this.streamController.liveSyncPosition}},{key:"subtitleTracks",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTrack:-1},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleTrack=t)}},{key:"subtitleDisplay",get:function(){var t=this.subtitleTrackController;return!!t&&t.subtitleDisplay},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleDisplay=t)}}]),t}();e.default=T},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(5),n=r.n(a),o=r(11),s=r(12),l=r(23),d=r(0),u=r(13),f=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,c=/#EXT-X-MEDIA:(.*)/g,h=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/|(?!#)(\S+)/.source,/|#EXT-X-BYTERANGE:*(.+)/.source,/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/|#.*/.source].join(""),"g"),p=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,v=function(){function t(){i(this,t)}return t.findGroup=function(t,e){if(!t)return null;for(var r=null,i=0;i<t.length;i++){var a=t[i];a.id===e&&(r=a)}return r},t.convertAVC1ToAVCOTI=function(t){var e=void 0,r=t.split(".");return r.length>2?(e=r.shift()+".",e+=parseInt(r.shift()).toString(16),e+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):e=t,e},t.resolve=function(t,e){return n.a.buildAbsoluteURL(e,t,{alwaysNormalize:!0})},t.parseMasterPlaylist=function(e,r){var i=[],a=void 0;for(f.lastIndex=0;null!=(a=f.exec(e));){var n={},o=n.attrs=new l.a(a[1]);n.url=t.resolve(a[2],r);var s=o.decimalResolution("RESOLUTION");s&&(n.width=s.width,n.height=s.height),n.bitrate=o.decimalInteger("AVERAGE-BANDWIDTH")||o.decimalInteger("BANDWIDTH"),n.name=o.NAME,function(t,e){["video","audio"].forEach(function(r){var i=t.filter(function(t){return Object(u.b)(t,r)});if(i.length){var a=i.filter(function(t){return 0===t.lastIndexOf("avc1",0)||0===t.lastIndexOf("mp4a",0)});e[r+"Codec"]=a.length>0?a[0]:i[0],t=t.filter(function(t){return-1===i.indexOf(t)})}}),e.unknownCodecs=t}([].concat((o.CODECS||"").split(/[ ,]+/)),n),n.videoCodec&&-1!==n.videoCodec.indexOf("avc1")&&(n.videoCodec=t.convertAVC1ToAVCOTI(n.videoCodec)),i.push(n)}return i},t.parseMasterPlaylistMedia=function(e,r,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=void 0,o=[],s=0;for(c.lastIndex=0;null!==(n=c.exec(e));){var d={},u=new l.a(n[1]);if(u.TYPE===i){if(d.groupId=u["GROUP-ID"],d.name=u.NAME,d.type=i,d.default="YES"===u.DEFAULT,d.autoselect="YES"===u.AUTOSELECT,d.forced="YES"===u.FORCED,u.URI&&(d.url=t.resolve(u.URI,r)),d.lang=u.LANGUAGE,d.name||(d.name=d.lang),a.length){var f=t.findGroup(a,d.groupId);d.audioCodec=f?f.codec:a[0].codec}d.id=s++,o.push(d)}}return o},t.parseLevelPlaylist=function(t,e,r,i){var a=0,n=0,u={type:null,version:null,url:e,fragments:[],live:!0,startSN:0},f=new s.a,c=0,v=null,g=new o.a,m=void 0,y=void 0;for(h.lastIndex=0;null!==(m=h.exec(t));){var b=m[1];if(b){g.duration=parseFloat(b);var E=(" "+m[2]).slice(1);g.title=E||null,g.tagList.push(E?["INF",b,E]:["INF",b])}else if(m[3]){if(!isNaN(g.duration)){var T=a++;g.type=i,g.start=n,g.levelkey=f,g.sn=T,g.level=r,g.cc=c,g.baseurl=e,g.relurl=(" "+m[3]).slice(1),u.programDateTime&&(v?g.rawProgramDateTime?g.pdt=Date.parse(g.rawProgramDateTime):g.pdt=v.pdt+1e3*v.duration:g.pdt=Date.parse(u.programDateTime),g.endPdt=g.pdt+1e3*g.duration),u.fragments.push(g),v=g,n+=g.duration,g=new o.a}}else if(m[4]){if(g.rawByteRange=(" "+m[4]).slice(1),v){var S=v.byteRangeEndOffset;S&&(g.lastByteRangeEndOffset=S)}}else if(m[5])g.rawProgramDateTime=(" "+m[5]).slice(1),g.tagList.push(["PROGRAM-DATE-TIME",g.rawProgramDateTime]),void 0===u.programDateTime&&(u.programDateTime=new Date(new Date(Date.parse(m[5]))-1e3*n));else{for(m=m[0].match(p),y=1;y<m.length&&void 0===m[y];y++);var A=(" "+m[y+1]).slice(1),R=(" "+m[y+2]).slice(1);switch(m[y]){case"#":g.tagList.push(R?[A,R]:[A]);break;case"PLAYLIST-TYPE":u.type=A.toUpperCase();break;case"MEDIA-SEQUENCE":a=u.startSN=parseInt(A);break;case"TARGETDURATION":u.targetduration=parseFloat(A);break;case"VERSION":u.version=parseInt(A);break;case"EXTM3U":break;case"ENDLIST":u.live=!1;break;case"DIS":c++,g.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":c=parseInt(A);break;case"KEY":var _=A,L=new l.a(_),w=L.enumeratedString("METHOD"),D=L.URI,O=L.hexadecimalInteger("IV");w&&(f=new s.a,D&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(w)>=0&&(f.method=w,f.baseuri=e,f.reluri=D,f.key=null,f.iv=O));break;case"START":var I=A,x=new l.a(I),k=x.decimalFloatingPoint("TIME-OFFSET");isNaN(k)||(u.startTimeOffset=k);break;case"MAP":var P=new l.a(A);g.relurl=P.URI,g.rawByteRange=P.BYTERANGE,g.baseurl=e,g.level=r,g.type=i,g.sn="initSegment",u.initSegment=g,g=new o.a;break;default:d.b.warn("line parsed but not handled: "+m)}}}return g=v,g&&!g.relurl&&(u.fragments.pop(),n-=g.duration),u.totalduration=n,u.averagetargetduration=n/u.fragments.length,u.endSN=a-1,u.startCC=u.fragments[0]?u.fragments[0].cc:0,u.endCC=c,!u.initSegment&&u.fragments.length&&u.fragments.every(function(t){return t.relurl.endsWith(".mp4")})&&(d.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),g=new o.a,g.relurl=u.fragments[0].relurl,g.baseurl=e,g.level=r,g.type=i,g.sn="initSegment",u.initSegment=g,u.needSidxRanges=!0),u},t}();e.a=v},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=/^(\d+)x(\d+)$/,n=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,o=function(){function t(e){i(this,t),"string"==typeof e&&(e=t.parseAttrList(e));for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r])}return t.prototype.decimalInteger=function(t){var e=parseInt(this[t],10);return e>Number.MAX_SAFE_INTEGER?1/0:e},t.prototype.hexadecimalInteger=function(t){if(this[t]){var e=(this[t]||"0x").slice(2);e=(1&e.length?"0":"")+e;for(var r=new Uint8Array(e.length/2),i=0;i<e.length/2;i++)r[i]=parseInt(e.slice(2*i,2*i+2),16);return r}return null},t.prototype.hexadecimalIntegerAsNumber=function(t){var e=parseInt(this[t],16);return e>Number.MAX_SAFE_INTEGER?1/0:e},t.prototype.decimalFloatingPoint=function(t){return parseFloat(this[t])},t.prototype.enumeratedString=function(t){return this[t]},t.prototype.decimalResolution=function(t){var e=a.exec(this[t]);if(null!==e)return{width:parseInt(e[1],10),height:parseInt(e[2],10)}},t.parseAttrList=function(t){var e=void 0,r={};for(n.lastIndex=0;null!==(e=n.exec(t));){var i=e[2];0===i.indexOf('"')&&i.lastIndexOf('"')===i.length-1&&(i=i.slice(1,-1)),r[e[1]]=i}return r},t}();e.a=o},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(2),d=r(0),u=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.FRAG_LOADING));return n.loaders={},n}return n(e,t),e.prototype.destroy=function(){var e=this.loaders;for(var r in e){var i=e[r];i&&i.destroy()}this.loaders={},t.prototype.destroy.call(this)},e.prototype.onFragLoading=function(t){var e=t.frag,r=e.type,i=this.loaders,a=this.hls.config,n=a.fLoader,o=a.loader;e.loaded=0;var s=i[r];s&&(d.b.warn("abort previous fragment loader for type: "+r),s.abort()),s=i[r]=e.loader=a.fLoader?new n(a):new o(a);var l=void 0,u=void 0,f=void 0;l={url:e.url,frag:e,responseType:"arraybuffer",progressData:!1};var c=e.byteRangeStartOffset,h=e.byteRangeEndOffset;isNaN(c)||isNaN(h)||(l.rangeStart=c,l.rangeEnd=h),u={timeout:a.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:a.fragLoadingMaxRetryTimeout},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},s.load(l,u,f)},e.prototype.loadsuccess=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=t.data,n=r.frag;n.loader=void 0,this.loaders[n.type]=void 0,this.hls.trigger(o.a.FRAG_LOADED,{payload:a,frag:n,stats:e,networkDetails:i})},e.prototype.loaderror=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=e.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:l.a.FRAG_LOAD_ERROR,fatal:!1,frag:e.frag,response:t,networkDetails:r})},e.prototype.loadtimeout=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=e.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:l.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e.frag,networkDetails:r})},e.prototype.loadprogress=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=e.frag;a.loaded=t.loaded,this.hls.trigger(o.a.FRAG_LOAD_PROGRESS,{frag:a,stats:t,networkDetails:i})},e}(s.a);e.a=u},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(2),d=r(0),u=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.KEY_LOADING));return n.loaders={},n.decryptkey=null,n.decrypturl=null,n}return n(e,t),e.prototype.destroy=function(){for(var t in this.loaders){var e=this.loaders[t];e&&e.destroy()}this.loaders={},s.a.prototype.destroy.call(this)},e.prototype.onKeyLoading=function(t){var e=t.frag,r=e.type,i=this.loaders[r],a=e.decryptdata,n=a.uri;if(n!==this.decrypturl||null===this.decryptkey){var s=this.hls.config;i&&(d.b.warn("abort previous key loader for type:"+r),i.abort()),e.loader=this.loaders[r]=new s.loader(s),this.decrypturl=n,this.decryptkey=null;var l=void 0,u=void 0,f=void 0;l={url:n,frag:e,responseType:"arraybuffer"},u={timeout:s.fragLoadingTimeOut,maxRetry:s.fragLoadingMaxRetry,retryDelay:s.fragLoadingRetryDelay,maxRetryDelay:s.fragLoadingMaxRetryTimeout},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},e.loader.load(l,u,f)}else this.decryptkey&&(a.key=this.decryptkey,this.hls.trigger(o.a.KEY_LOADED,{frag:e}))},e.prototype.loadsuccess=function(t,e,r){var i=r.frag;this.decryptkey=i.decryptdata.key=new Uint8Array(t.data),i.loader=void 0,this.loaders[i.type]=void 0,this.hls.trigger(o.a.KEY_LOADED,{frag:i})},e.prototype.loaderror=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:l.a.KEY_LOAD_ERROR,fatal:!1,frag:r,response:t})},e.prototype.loadtimeout=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(o.a.ERROR,{type:l.b.NETWORK_ERROR,details:l.a.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},e}(s.a);e.a=u},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(14),s=r(15),l=r(27),d=r(1),u=r(20),f=r(11),c=r(9),h=r(42),p=r(43),v=r(2),g=r(0),m=r(44),y=r(45),b=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),E={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_LEVEL:"WAITING_LEVEL",PARSING:"PARSING",PARSED:"PARSED",BUFFER_FLUSHING:"BUFFER_FLUSHING",ENDED:"ENDED",ERROR:"ERROR"},T=function(t){function e(r,n){i(this,e);var o=a(this,t.call(this,r,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.MANIFEST_LOADING,d.a.MANIFEST_PARSED,d.a.LEVEL_LOADED,d.a.KEY_LOADED,d.a.FRAG_LOADED,d.a.FRAG_LOAD_EMERGENCY_ABORTED,d.a.FRAG_PARSING_INIT_SEGMENT,d.a.FRAG_PARSING_DATA,d.a.FRAG_PARSED,d.a.ERROR,d.a.AUDIO_TRACK_SWITCHING,d.a.AUDIO_TRACK_SWITCHED,d.a.BUFFER_CREATED,d.a.BUFFER_APPENDED,d.a.BUFFER_FLUSHED));return o.fragmentTracker=n,o.config=r.config,o.audioCodecSwap=!1,o._state=E.STOPPED,o}return n(e,t),e.prototype.onHandlerDestroying=function(){this.stopLoad()},e.prototype.onHandlerDestroyed=function(){this.state=E.STOPPED,this.fragmentTracker=null},e.prototype.startLoad=function(t){if(this.levels){var e=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(i=0,this.bitrateTest=!0),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}e>0&&-1===t&&(g.b.log("override startPosition with lastCurrentTime @"+e.toFixed(3)),t=e),this.state=E.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=t,this.tick()}else this.forceStartLoad=!0,this.state=E.STOPPED},e.prototype.stopLoad=function(){var t=this.fragCurrent;t&&(t.loader&&t.loader.abort(),this.fragmentTracker.removeFragment(t),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.clearInterval(),this.state=E.STOPPED,this.forceStartLoad=!1},e.prototype.doTick=function(){switch(this.state){case E.BUFFER_FLUSHING:this.fragLoadError=0;break;case E.IDLE:this._doTickIdle();break;case E.WAITING_LEVEL:var t=this.levels[this.level];t&&t.details&&(this.state=E.IDLE);break;case E.FRAG_LOADING_WAITING_RETRY:var e=performance.now(),r=this.retryDate;(!r||e>=r||this.media&&this.media.seeking)&&(g.b.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=E.IDLE);break;case E.ERROR:case E.STOPPED:case E.FRAG_LOADING:case E.PARSING:case E.PARSED:case E.ENDED:}this._checkBuffer(),this._checkFragmentChanged()},e.prototype._doTickIdle=function(){var t=this.hls,e=t.config,r=this.media;if(void 0!==this.levelLastLoaded&&(r||!this.startFragRequested&&e.startFragPrefetch)){var i=void 0;i=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var a=t.nextLoadLevel,n=this.levels[a];if(n){var o=n.bitrate,l=void 0;l=o?Math.max(8*e.maxBufferSize/o,e.maxBufferLength):e.maxBufferLength,l=Math.min(l,e.maxMaxBufferLength);var u=s.a.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,i,e.maxBufferHole),f=u.len;if(!(f>=l)){g.b.trace("buffer length of "+f.toFixed(3)+" is below max of "+l.toFixed(3)+". checking for more payload ..."),this.level=t.nextLoadLevel=a;var c=n.details;if(void 0===c||!0===c.live&&this.levelLastLoaded!==a)return void(this.state=E.WAITING_LEVEL);var h=this.fragPrevious;if(!c.live&&h&&!h.backtracked&&h.sn===c.endSN&&!u.nextStart){if(Math.min(r.duration,h.start+h.duration)-Math.max(u.end,h.start)<=Math.max(.2,h.duration)){var p={};return this.altAudio&&(p.type="video"),this.hls.trigger(d.a.BUFFER_EOS,p),void(this.state=E.ENDED)}}this._fetchPayloadOrEos(i,u,c)}}}},e.prototype._fetchPayloadOrEos=function(t,e,r){var i=this.fragPrevious,a=this.level,n=r.fragments,o=n.length;if(0!==o){var s=n[0].start,l=n[o-1].start+n[o-1].duration,d=e.end,u=void 0;if(r.initSegment&&!r.initSegment.data)u=r.initSegment;else if(r.live){var f=this.config.initialLiveManifestSize;if(o<f)return void g.b.warn("Can not start playback of a level, reason: not enough fragments "+o+" < "+f);if(null===(u=this._ensureFragmentAtLivePoint(r,d,s,l,i,n,o)))return}else d<s&&(u=n[0]);u||(u=this._findFragment(s,i,o,n,d,l,r)),u&&this._loadFragmentOrKey(u,a,r,t,d)}},e.prototype._ensureFragmentAtLivePoint=function(t,e,r,i,a,n,s){var l=this.hls.config,d=this.media,u=void 0,f=void 0!==l.liveMaxLatencyDuration?l.liveMaxLatencyDuration:l.liveMaxLatencyDurationCount*t.targetduration;if(e<Math.max(r-l.maxFragLookUpTolerance,i-f)){var c=this.liveSyncPosition=this.computeLivePosition(r,t);g.b.log("buffer end: "+e.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+c.toFixed(3)),e=c,d&&d.readyState&&d.duration>c&&(d.currentTime=c),this.nextLoadPosition=c}if(t.PTSKnown&&e>i&&d&&d.readyState)return null;if(this.startFragRequested&&!t.PTSKnown){if(a)if(t.programDateTime)u=this._findFragmentByPDT(n,a.endPdt+1);else{var h=a.sn+1;if(h>=t.startSN&&h<=t.endSN){var p=n[h-t.startSN];a.cc===p.cc&&(u=p,g.b.log("live playlist, switching playlist, load frag with next SN: "+u.sn))}u||(u=o.a.search(n,function(t){return a.cc-t.cc}))&&g.b.log("live playlist, switching playlist, load frag with same CC: "+u.sn)}u||(u=n[Math.min(s-1,Math.round(s/2))],g.b.log("live playlist, switching playlist, unknown, load middle frag : "+u.sn))}return u},e.prototype._findFragmentByPDT=function(t,e){if(!t||void 0===e)return null;if(e<t[0].pdt)return null;if(e>=t[t.length-1].endPdt)return null;for(var r=0;r<t.length;++r){var i=t[r];if(e<i.endPdt)return i}return null},e.prototype._findFragmentBySN=function(t,e,r,i){var a=this.hls.config,n=void 0,s=a.maxFragLookUpTolerance,l=t?e[t.sn-e[0].sn+1]:void 0,d=function(t){var e=Math.min(s,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-e<=r?1:t.start-e>r&&t.start?-1:0};return r<i&&(r>i-s&&(s=0),n=l&&!d(l)?l:o.a.search(e,d)),n},e.prototype._findFragment=function(t,e,r,i,a,n,o){var s=this.hls.config,l=void 0,d=void 0;if(d=a<n?o.programDateTime?this._findFragmentByPDT(i,1e3*a+(o.programDateTime?Date.parse(o.programDateTime):0)-1e3*t):this._findFragmentBySN(e,i,a,n):i[r-1]){l=d;var u=l.sn-o.startSN,f=e&&l.level===e.level,c=i[u-1],h=i[u+1];if(e&&l.sn===e.sn)if(f&&!l.backtracked)if(l.sn<o.endSN){var p=e.deltaPTS;p&&p>s.maxBufferHole&&e.dropped&&u?(l=c,g.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")):(l=h,g.b.log("SN just loaded, load next one: "+l.sn))}else l=null;else l.backtracked&&(h&&h.backtracked?(g.b.warn("Already backtracked from fragment "+h.sn+", will not backtrack to fragment "+l.sn+". Loading fragment "+h.sn),l=h):(g.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),l.dropped=0,c?(l=c,l.backtracked=!0):u&&(l=null)))}return l},e.prototype._loadFragmentOrKey=function(t,e,r,i,a){if(t.decryptdata&&null!=t.decryptdata.uri&&null==t.decryptdata.key)g.b.log("Loading key for "+t.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+e),this.state=E.KEY_LOADING,this.hls.trigger(d.a.KEY_LOADING,{frag:t});else{g.b.log("Loading "+t.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+e+", currentTime:"+i.toFixed(3)+",bufferEnd:"+a.toFixed(3));var n=this.fragmentTracker.getState(t);this.fragCurrent=t,this.startFragRequested=!0,isNaN(t.sn)||t.bitrateTest||(this.nextLoadPosition=t.start+t.duration),t.backtracked||n===u.a.NOT_LOADED?(t.autoLevel=this.hls.autoLevelEnabled,t.bitrateTest=this.bitrateTest,this.hls.trigger(d.a.FRAG_LOADING,{frag:t}),this.demuxer||(this.demuxer=new l.a(this.hls,"main")),this.state=E.FRAG_LOADING):n===u.a.APPENDING&&this._reduceMaxBufferLength(t.duration)&&this.fragmentTracker.removeFragment(t)}},e.prototype.getBufferedFrag=function(t){return this.fragmentTracker.getBufferedFrag(t,c.a.LevelType.MAIN)},e.prototype.followingBufferedFrag=function(t){return t?this.getBufferedFrag(t.endPTS+.5):null},e.prototype._checkFragmentChanged=function(){var t=void 0,e=void 0,r=this.media;if(r&&r.readyState&&!1===r.seeking&&(e=r.currentTime,e>r.playbackRate*this.lastCurrentTime&&(this.lastCurrentTime=e),s.a.isBuffered(r,e)?t=this.getBufferedFrag(e):s.a.isBuffered(r,e+.1)&&(t=this.getBufferedFrag(e+.1)),t)){var i=t;if(i!==this.fragPlaying){this.hls.trigger(d.a.FRAG_CHANGED,{frag:i});var a=i.level;this.fragPlaying&&this.fragPlaying.level===a||this.hls.trigger(d.a.LEVEL_SWITCHED,{level:a}),this.fragPlaying=i}}},e.prototype.immediateLevelSwitch=function(){if(g.b.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var t=this.media,e=void 0;t?(e=t.paused,t.pause()):e=!0,this.previouslyPaused=e}var r=this.fragCurrent;r&&r.loader&&r.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},e.prototype.immediateLevelSwitchEnd=function(){var t=this.media;t&&t.buffered.length&&(this.immediateSwitch=!1,s.a.isBuffered(t,t.currentTime)&&(t.currentTime-=1e-4),this.previouslyPaused||t.play())},e.prototype.nextLevelSwitch=function(){var t=this.media;if(t&&t.readyState){var e=void 0,r=void 0,i=void 0;if(r=this.getBufferedFrag(t.currentTime),r&&r.startPTS>1&&this.flushMainBuffer(0,r.startPTS-1),t.paused)e=0;else{var a=this.hls.nextLoadLevel,n=this.levels[a],o=this.fragLastKbps;e=o&&this.fragCurrent?this.fragCurrent.duration*n.bitrate/(1e3*o)+1:0}if((i=this.getBufferedFrag(t.currentTime+e))&&(i=this.followingBufferedFrag(i))){var s=this.fragCurrent;s&&s.loader&&s.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(i.maxStartPTS,Number.POSITIVE_INFINITY)}}},e.prototype.flushMainBuffer=function(t,e){this.state=E.BUFFER_FLUSHING;var r={startOffset:t,endOffset:e};this.altAudio&&(r.type="video"),this.hls.trigger(d.a.BUFFER_FLUSHING,r)},e.prototype.onMediaAttached=function(t){var e=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),e.addEventListener("seeking",this.onvseeking),e.addEventListener("seeked",this.onvseeked),e.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition)},e.prototype.onMediaDetaching=function(){var t=this.media;t&&t.ended&&(g.b.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var e=this.levels;e&&e.forEach(function(t){t.details&&t.details.fragments.forEach(function(t){t.backtracked=void 0})}),t&&(t.removeEventListener("seeking",this.onvseeking),t.removeEventListener("seeked",this.onvseeked),t.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()},e.prototype.onMediaSeeking=function(){var t=this.media,e=t?t.currentTime:void 0,r=this.config;isNaN(e)||g.b.log("media seeking to "+e.toFixed(3));var i=this.mediaBuffer?this.mediaBuffer:t,a=s.a.bufferInfo(i,e,this.config.maxBufferHole);if(this.state===E.FRAG_LOADING){var n=this.fragCurrent;if(0===a.len&&n){var o=r.maxFragLookUpTolerance,l=n.start-o,d=n.start+n.duration+o;e<l||e>d?(n.loader&&(g.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),n.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=E.IDLE):g.b.log("seeking outside of buffer but within currently loaded fragment range")}}else this.state===E.ENDED&&(0===a.len&&(this.fragPrevious=0),this.state=E.IDLE);t&&(this.lastCurrentTime=e),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=e),this.tick()},e.prototype.onMediaSeeked=function(){var t=this.media,e=t?t.currentTime:void 0;isNaN(e)||g.b.log("media seeked to "+e.toFixed(3)),this.tick()},e.prototype.onMediaEnded=function(){g.b.log("media ended"),this.startPosition=this.lastCurrentTime=0},e.prototype.onManifestLoading=function(){g.b.log("trigger BUFFER_RESET"),this.hls.trigger(d.a.BUFFER_RESET),this.fragmentTracker.removeAllFragments(),this.stalled=!1,this.startPosition=this.lastCurrentTime=0},e.prototype.onManifestParsed=function(t){var e=!1,r=!1,i=void 0;t.levels.forEach(function(t){(i=t.audioCodec)&&(-1!==i.indexOf("mp4a.40.2")&&(e=!0),-1!==i.indexOf("mp4a.40.5")&&(r=!0))}),this.audioCodecSwitch=e&&r,this.audioCodecSwitch&&g.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1;var a=this.config;(a.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(a.startPosition)},e.prototype.onLevelLoaded=function(t){var e=t.details,r=t.level,i=this.levels[this.levelLastLoaded],a=this.levels[r],n=e.totalduration,o=0;if(g.b.log("level "+r+" loaded ["+e.startSN+","+e.endSN+"],duration:"+n),e.live){var s=a.details;s&&e.fragments.length>0?(h.a(s,e),o=e.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(o,s),e.PTSKnown&&!isNaN(o)?g.b.log("live playlist sliding:"+o.toFixed(3)):(g.b.log("live playlist - outdated PTS, unknown sliding"),Object(m.a)(this.fragPrevious,i,e))):(g.b.log("live playlist - first load, unknown sliding"),e.PTSKnown=!1,Object(m.a)(this.fragPrevious,i,e))}else e.PTSKnown=!1;if(a.details=e,this.levelLastLoaded=r,this.hls.trigger(d.a.LEVEL_UPDATED,{details:e,level:r}),!1===this.startFragRequested){if(-1===this.startPosition||-1===this.lastCurrentTime){var l=e.startTimeOffset;isNaN(l)?e.live?(this.startPosition=this.computeLivePosition(o,e),g.b.log("configure startPosition to "+this.startPosition)):this.startPosition=0:(l<0&&(g.b.log("negative start time offset "+l+", count from end of last fragment"),l=o+n+l),g.b.log("start time offset found in playlist, adjust startPosition to "+l),this.startPosition=l),this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===E.WAITING_LEVEL&&(this.state=E.IDLE),this.tick()},e.prototype.onKeyLoaded=function(){this.state===E.KEY_LOADING&&(this.state=E.IDLE,this.tick())},e.prototype.onFragLoaded=function(t){var e=this.fragCurrent,r=t.frag;if(this.state===E.FRAG_LOADING&&e&&"main"===r.type&&r.level===e.level&&r.sn===e.sn){var i=t.stats,a=this.levels[e.level],n=a.details;if(g.b.log("Loaded  "+e.sn+" of ["+n.startSN+" ,"+n.endSN+"],level "+e.level),this.bitrateTest=!1,this.stats=i,!0===r.bitrateTest&&this.hls.nextLoadLevel)this.state=E.IDLE,this.startFragRequested=!1,i.tparsed=i.tbuffered=performance.now(),this.hls.trigger(d.a.FRAG_BUFFERED,{stats:i,frag:e,id:"main"}),this.tick();else if("initSegment"===r.sn)this.state=E.IDLE,i.tparsed=i.tbuffered=performance.now(),n.initSegment.data=t.payload,this.hls.trigger(d.a.FRAG_BUFFERED,{stats:i,frag:e,id:"main"}),this.tick();else{this.state=E.PARSING;var o=n.totalduration,s=e.level,u=e.sn,f=this.config.defaultAudioCodec||a.audioCodec;this.audioCodecSwap&&(g.b.log("swapping playlist audio codec"),void 0===f&&(f=this.lastAudioCodec),f&&(f=-1!==f.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),this.pendingBuffering=!0,this.appended=!1,g.b.log("Parsing "+u+" of ["+n.startSN+" ,"+n.endSN+"],level "+s+", cc "+e.cc);var c=this.demuxer;c||(c=this.demuxer=new l.a(this.hls,"main"));var h=this.media,p=h&&h.seeking,v=!p&&(n.PTSKnown||!n.live),m=n.initSegment?n.initSegment.data:[];c.push(t.payload,m,f,a.videoCodec,e,o,v,void 0)}}this.fragLoadError=0},e.prototype.onFragParsingInitSegment=function(t){var e=this.fragCurrent,r=t.frag;if(e&&"main"===t.id&&r.sn===e.sn&&r.level===e.level&&this.state===E.PARSING){var i=t.tracks,a=void 0,n=void 0;if(i.audio&&this.altAudio&&delete i.audio,n=i.audio){var o=this.levels[this.level].audioCodec,s=navigator.userAgent.toLowerCase();o&&this.audioCodecSwap&&(g.b.log("swapping playlist audio codec"),o=-1!==o.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==n.metadata.channelCount&&-1===s.indexOf("firefox")&&(o="mp4a.40.5"),-1!==s.indexOf("android")&&"audio/mpeg"!==n.container&&(o="mp4a.40.2",g.b.log("Android: force audio codec to "+o)),n.levelCodec=o,n.id=t.id}n=i.video,n&&(n.levelCodec=this.levels[this.level].videoCodec,n.id=t.id),this.hls.trigger(d.a.BUFFER_CODECS,i);for(a in i){n=i[a],g.b.log("main track:"+a+",container:"+n.container+",codecs[level/parsed]=["+n.levelCodec+"/"+n.codec+"]");var l=n.initSegment;l&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(d.a.BUFFER_APPENDING,{type:a,data:l,parent:"main",content:"initSegment"}))}this.tick()}},e.prototype.onFragParsingData=function(t){var e=this,r=this.fragCurrent,i=t.frag;if(r&&"main"===t.id&&i.sn===r.sn&&i.level===r.level&&("audio"!==t.type||!this.altAudio)&&this.state===E.PARSING){var a=this.levels[this.level],n=r;if(isNaN(t.endPTS)&&(t.endPTS=t.startPTS+r.duration,t.endDTS=t.startDTS+r.duration),!0===t.hasAudio&&n.addElementaryStream(f.a.ElementaryStreamTypes.AUDIO),!0===t.hasVideo&&n.addElementaryStream(f.a.ElementaryStreamTypes.VIDEO),g.b.log("Parsed "+t.type+",PTS:["+t.startPTS.toFixed(3)+","+t.endPTS.toFixed(3)+"],DTS:["+t.startDTS.toFixed(3)+"/"+t.endDTS.toFixed(3)+"],nb:"+t.nb+",dropped:"+(t.dropped||0)),"video"===t.type)if(n.dropped=t.dropped,n.dropped)if(n.backtracked)g.b.warn("Already backtracked on this fragment, appending with the gap");else{var o=a.details;if(!o||n.sn!==o.startSN)return g.b.warn("missing video frame(s), backtracking fragment"),this.fragmentTracker.removeFragment(n),n.backtracked=!0,this.nextLoadPosition=t.startPTS,this.state=E.IDLE,this.fragPrevious=n,void this.tick();g.b.warn("missing video frame(s) on first frag, appending with gap")}else n.backtracked=!1;var s=h.b(a.details,n,t.startPTS,t.endPTS,t.startDTS,t.endDTS),l=this.hls;l.trigger(d.a.LEVEL_PTS_UPDATED,{details:a.details,level:this.level,drift:s,type:t.type,start:t.startPTS,end:t.endPTS}),[t.data1,t.data2].forEach(function(r){r&&r.length&&e.state===E.PARSING&&(e.appended=!0,e.pendingBuffering=!0,l.trigger(d.a.BUFFER_APPENDING,{type:t.type,data:r,parent:"main",content:"data"}))}),this.tick()}},e.prototype.onFragParsed=function(t){var e=this.fragCurrent,r=t.frag;e&&"main"===t.id&&r.sn===e.sn&&r.level===e.level&&this.state===E.PARSING&&(this.stats.tparsed=performance.now(),this.state=E.PARSED,this._checkAppendedParsed())},e.prototype.onAudioTrackSwitching=function(t){var e=!!t.url,r=t.id;if(!e){if(this.mediaBuffer!==this.media){g.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var i=this.fragCurrent;i.loader&&(g.b.log("switching to main audio track, cancel main fragment load"),i.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=E.IDLE}var a=this.hls;a.trigger(d.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),a.trigger(d.a.AUDIO_TRACK_SWITCHED,{id:r}),this.altAudio=!1}},e.prototype.onAudioTrackSwitched=function(t){var e=t.id,r=!!this.hls.audioTracks[e].url;if(r){var i=this.videoBuffer;i&&this.mediaBuffer!==i&&(g.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=r,this.tick()},e.prototype.onBufferCreated=function(t){var e=t.tracks,r=void 0,i=void 0,a=!1;for(var n in e){var o=e[n];"main"===o.id?(i=n,r=o,"video"===n&&(this.videoBuffer=e[n].buffer)):a=!0}a&&r?(g.b.log("alternate track found, use "+i+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media},e.prototype.onBufferAppended=function(t){if("main"===t.parent){var e=this.state;e!==E.PARSING&&e!==E.PARSED||(this.pendingBuffering=t.pending>0,this._checkAppendedParsed())}},e.prototype._checkAppendedParsed=function(){if(!(this.state!==E.PARSED||this.appended&&this.pendingBuffering)){var t=this.fragCurrent;if(t){var e=this.mediaBuffer?this.mediaBuffer:this.media;g.b.log("main buffered : "+p.a.toString(e.buffered)),this.fragPrevious=t;var r=this.stats;r.tbuffered=performance.now(),this.fragLastKbps=Math.round(8*r.total/(r.tbuffered-r.tfirst)),this.hls.trigger(d.a.FRAG_BUFFERED,{stats:r,frag:t,id:"main"}),this.state=E.IDLE}this.tick()}},e.prototype.onError=function(t){var e=t.frag||this.fragCurrent;if(!e||"main"===e.type){var r=!!this.media&&s.a.isBuffered(this.media,this.media.currentTime)&&s.a.isBuffered(this.media,this.media.currentTime+.5);switch(t.details){case v.a.FRAG_LOAD_ERROR:case v.a.FRAG_LOAD_TIMEOUT:case v.a.KEY_LOAD_ERROR:case v.a.KEY_LOAD_TIMEOUT:if(!t.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){var i=Math.min(Math.pow(2,this.fragLoadError)*this.config.fragLoadingRetryDelay,this.config.fragLoadingMaxRetryTimeout);g.b.warn("mediaController: frag loading failed, retry in "+i+" ms"),this.retryDate=performance.now()+i,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.fragLoadError++,this.state=E.FRAG_LOADING_WAITING_RETRY}else g.b.error("mediaController: "+t.details+" reaches max retry, redispatch as fatal ..."),t.fatal=!0,this.state=E.ERROR;break;case v.a.LEVEL_LOAD_ERROR:case v.a.LEVEL_LOAD_TIMEOUT:this.state!==E.ERROR&&(t.fatal?(this.state=E.ERROR,g.b.warn("streamController: "+t.details+",switch to "+this.state+" state ...")):t.levelRetry||this.state!==E.WAITING_LEVEL||(this.state=E.IDLE));break;case v.a.BUFFER_FULL_ERROR:"main"!==t.parent||this.state!==E.PARSING&&this.state!==E.PARSED||(r?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=E.IDLE):(g.b.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)))}}},e.prototype._reduceMaxBufferLength=function(t){var e=this.config;return e.maxMaxBufferLength>=t&&(e.maxMaxBufferLength/=2,g.b.warn("main:reduce max buffer length to "+e.maxMaxBufferLength+"s"),!0)},e.prototype._checkBuffer=function(){var t=this.media,e=this.config;if(t&&t.readyState){var r=t.currentTime,i=this.mediaBuffer?this.mediaBuffer:t,a=i.buffered;if(!this.loadedmetadata&&a.length){this.loadedmetadata=!0;var n=t.seeking?r:this.startPosition;r!==n&&(g.b.log("target start position not buffered, seek to buffered.start(0) "+n+" from current time"+r+" "),t.currentTime=n)}else if(this.immediateSwitch)this.immediateLevelSwitchEnd();else{var o=s.a.bufferInfo(t,r,e.maxBufferHole),l=!(t.paused&&t.readyState>1||t.ended||0===t.buffered.length),u=r!==this.lastCurrentTime;if(u)this.stallReported&&(g.b.warn("playback not stuck anymore @"+r+", after "+Math.round(performance.now()-this.stalled)+"ms"),this.stallReported=!1),this.stalled=void 0,this.nudgeRetry=0;else if(l){var f=performance.now(),c=this.hls;if(this.stalled){var h=f-this.stalled,p=o.len,m=this.nudgeRetry||0,y=this.fragmentTracker.getPartialFragment(r);if(null!==y)for(var b=0,E=0;E<t.buffered.length;E++){var T=t.buffered.start(E);if(r>=b&&r<T)return t.currentTime=Math.max(T,t.currentTime+.1),g.b.warn("skipping hole, adjusting currentTime from "+r+" to "+t.currentTime),this.stalled=void 0,void c.trigger(d.a.ERROR,{type:v.b.MEDIA_ERROR,details:v.a.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+r+" to "+t.currentTime,frag:y});b=t.buffered.end(E)}if(p>.5&&h>1e3*e.highBufferWatchdogPeriod)if(this.stallReported||(this.stallReported=!0,g.b.warn("playback stalling in high buffer @"+r),c.trigger(d.a.ERROR,{type:v.b.MEDIA_ERROR,details:v.a.BUFFER_STALLED_ERROR,fatal:!1,buffer:p})),this.stalled=void 0,this.nudgeRetry=++m,m<e.nudgeMaxRetry){var S=t.currentTime,A=S+m*e.nudgeOffset;g.b.log("adjust currentTime from "+S+" to "+A),t.currentTime=A,c.trigger(d.a.ERROR,{type:v.b.MEDIA_ERROR,details:v.a.BUFFER_NUDGE_ON_STALL,fatal:!1})}else g.b.error("still stuck in high buffer @"+r+" after "+e.nudgeMaxRetry+", raise fatal error"),c.trigger(d.a.ERROR,{type:v.b.MEDIA_ERROR,details:v.a.BUFFER_STALLED_ERROR,fatal:!0})}else this.stalled=f,this.stallReported=!1}}}},e.prototype.onFragLoadEmergencyAborted=function(){this.state=E.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()},e.prototype.onBufferFlushed=function(){var t=this.mediaBuffer?this.mediaBuffer:this.media;this.fragmentTracker.detectEvictedFragments(f.a.ElementaryStreamTypes.VIDEO,t.buffered),this.state=E.IDLE,this.fragPrevious=null},e.prototype.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},e.prototype.computeLivePosition=function(t,e){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*e.targetduration;return t+Math.max(0,e.totalduration-r)},b(e,[{key:"state",set:function(t){if(this.state!==t){var e=this.state;this._state=t,g.b.log("main stream:"+e+"->"+t),this.hls.trigger(d.a.STREAM_STATE_TRANSITION,{previousState:e,nextState:t})}},get:function(){return this._state}},{key:"currentLevel",get:function(){var t=this.media;if(t){var e=this.getBufferedFrag(t.currentTime);if(e)return e.level}return-1}},{key:"nextBufferedFrag",get:function(){var t=this.media;return t?this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)):null}},{key:"nextLevel",get:function(){var t=this.nextBufferedFrag;return t?t.level:-1}},{key:"liveSyncPosition",get:function(){return this._liveSyncPosition},set:function(t){this._liveSyncPosition=t}}]),e}(y.a);e.a=T},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(1),n=r(16),o=r(0),s=r(2),l=r(7),d=r.n(l),u=r(40),f=r.n(u),c=r(8),h=Object(c.a)(),p=function(){function t(e,r){i(this,t),this.hls=e,this.id=r;var l=this.observer=new d.a,u=e.config;l.trigger=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];l.emit.apply(l,[t,t].concat(r))},l.off=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];l.removeListener.apply(l,[t].concat(r))};var c=function(t,r){r=r||{},r.frag=this.frag,r.id=this.id,e.trigger(t,r)}.bind(this);l.on(a.a.FRAG_DECRYPTED,c),l.on(a.a.FRAG_PARSING_INIT_SEGMENT,c),l.on(a.a.FRAG_PARSING_DATA,c),l.on(a.a.FRAG_PARSED,c),l.on(a.a.ERROR,c),l.on(a.a.FRAG_PARSING_METADATA,c),l.on(a.a.FRAG_PARSING_USERDATA,c),l.on(a.a.INIT_PTS_FOUND,c);var p={mp4:h.isTypeSupported("video/mp4"),mpeg:h.isTypeSupported("audio/mpeg"),mp3:h.isTypeSupported('audio/mp4; codecs="mp3"')},v=navigator.vendor;if(u.enableWorker&&"undefined"!=typeof Worker){o.b.log("demuxing in webworker");var g=void 0;try{g=this.w=f()(41),this.onwmsg=this.onWorkerMessage.bind(this),g.addEventListener("message",this.onwmsg),g.onerror=function(t){e.trigger(a.a.ERROR,{type:s.b.OTHER_ERROR,details:s.a.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:t.message+" ("+t.filename+":"+t.lineno+")"}})},g.postMessage({cmd:"init",typeSupported:p,vendor:v,id:r,config:JSON.stringify(u)})}catch(t){o.b.error("error while initializing DemuxerWorker, fallback on DemuxerInline"),g&&URL.revokeObjectURL(g.objectURL),this.demuxer=new n.a(l,p,u,v),this.w=void 0}}else this.demuxer=new n.a(l,p,u,v)}return t.prototype.destroy=function(){var t=this.w;if(t)t.removeEventListener("message",this.onwmsg),t.terminate(),this.w=null;else{var e=this.demuxer;e&&(e.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)},t.prototype.push=function(t,e,r,i,a,n,s,l){var d=this.w,u=isNaN(a.startDTS)?a.start:a.startDTS,f=a.decryptdata,c=this.frag,h=!(c&&a.cc===c.cc),p=!(c&&a.level===c.level),v=c&&a.sn===c.sn+1,g=!p&&v;if(h&&o.b.log(this.id+":discontinuity detected"),p&&o.b.log(this.id+":switch detected"),this.frag=a,d)d.postMessage({cmd:"demux",data:t,decryptdata:f,initSegment:e,audioCodec:r,videoCodec:i,timeOffset:u,discontinuity:h,trackSwitch:p,contiguous:g,duration:n,accurateTimeOffset:s,defaultInitPTS:l},t instanceof ArrayBuffer?[t]:[]);else{var m=this.demuxer;m&&m.push(t,f,e,r,i,u,h,p,g,n,s,l)}},t.prototype.onWorkerMessage=function(t){var e=t.data,r=this.hls;switch(e.event){case"init":URL.revokeObjectURL(this.w.objectURL);break;case a.a.FRAG_PARSING_DATA:e.data.data1=new Uint8Array(e.data1),e.data2&&(e.data.data2=new Uint8Array(e.data2));default:e.data=e.data||{},e.data.frag=this.frag,e.data.id=this.id,r.trigger(e.event,e.data)}},t}();e.a=p},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(e,r){i(this,t),this.subtle=e,this.aesIV=r}return t.prototype.decrypt=function(t,e){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},e,t)},t}();e.a=a},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(e,r){i(this,t),this.subtle=e,this.key=r}return t.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},t}();e.a=a},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){var e=t.byteLength,r=e&&new DataView(t).getUint8(e-1);return r?t.slice(0,e-r):t}var n=function(){function t(){i(this,t),this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}return t.prototype.uint8ArrayToUint32Array_=function(t){for(var e=new DataView(t),r=new Uint32Array(4),i=0;i<4;i++)r[i]=e.getUint32(4*i);return r},t.prototype.initTable=function(){var t=this.sBox,e=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],o=r[3],s=this.invSubMix,l=s[0],d=s[1],u=s[2],f=s[3],c=new Uint32Array(256),h=0,p=0,v=0;for(v=0;v<256;v++)c[v]=v<128?v<<1:v<<1^283;for(v=0;v<256;v++){var g=p^p<<1^p<<2^p<<3^p<<4;g=g>>>8^255&g^99,t[h]=g,e[g]=h;var m=c[h],y=c[m],b=c[y],E=257*c[g]^16843008*g;i[h]=E<<24|E>>>8,a[h]=E<<16|E>>>16,n[h]=E<<8|E>>>24,o[h]=E,E=16843009*b^65537*y^257*m^16843008*h,l[g]=E<<24|E>>>8,d[g]=E<<16|E>>>16,u[g]=E<<8|E>>>24,f[g]=E,h?(h=m^c[c[c[b^m]]],p^=c[c[p]]):h=p=1}},t.prototype.expandKey=function(t){for(var e=this.uint8ArrayToUint32Array_(t),r=!0,i=0;i<e.length&&r;)r=e[i]===this.key[i],i++;if(!r){this.key=e;var a=this.keySize=e.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n=this.ksRows=4*(a+6+1),o=void 0,s=void 0,l=this.keySchedule=new Uint32Array(n),d=this.invKeySchedule=new Uint32Array(n),u=this.sBox,f=this.rcon,c=this.invSubMix,h=c[0],p=c[1],v=c[2],g=c[3],m=void 0,y=void 0;for(o=0;o<n;o++)o<a?m=l[o]=e[o]:(y=m,o%a==0?(y=y<<8|y>>>24,y=u[y>>>24]<<24|u[y>>>16&255]<<16|u[y>>>8&255]<<8|u[255&y],y^=f[o/a|0]<<24):a>6&&o%a==4&&(y=u[y>>>24]<<24|u[y>>>16&255]<<16|u[y>>>8&255]<<8|u[255&y]),l[o]=m=(l[o-a]^y)>>>0);for(s=0;s<n;s++)o=n-s,y=3&s?l[o]:l[o-4],d[s]=s<4||o<=4?y:h[u[y>>>24]]^p[u[y>>>16&255]]^v[u[y>>>8&255]]^g[u[255&y]],d[s]=d[s]>>>0}},t.prototype.networkToHostOrderSwap=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},t.prototype.decrypt=function(t,e,r,i){for(var n=this.keySize+6,o=this.invKeySchedule,s=this.invSBox,l=this.invSubMix,d=l[0],u=l[1],f=l[2],c=l[3],h=this.uint8ArrayToUint32Array_(r),p=h[0],v=h[1],g=h[2],m=h[3],y=new Int32Array(t),b=new Int32Array(y.length),E=void 0,T=void 0,S=void 0,A=void 0,R=void 0,_=void 0,L=void 0,w=void 0,D=void 0,O=void 0,I=void 0,x=void 0,k=void 0,P=void 0,C=this.networkToHostOrderSwap;e<y.length;){for(D=C(y[e]),O=C(y[e+1]),I=C(y[e+2]),x=C(y[e+3]),R=D^o[0],_=x^o[1],L=I^o[2],w=O^o[3],k=4,P=1;P<n;P++)E=d[R>>>24]^u[_>>16&255]^f[L>>8&255]^c[255&w]^o[k],T=d[_>>>24]^u[L>>16&255]^f[w>>8&255]^c[255&R]^o[k+1],S=d[L>>>24]^u[w>>16&255]^f[R>>8&255]^c[255&_]^o[k+2],A=d[w>>>24]^u[R>>16&255]^f[_>>8&255]^c[255&L]^o[k+3],R=E,_=T,L=S,w=A,k+=4;E=s[R>>>24]<<24^s[_>>16&255]<<16^s[L>>8&255]<<8^s[255&w]^o[k],T=s[_>>>24]<<24^s[L>>16&255]<<16^s[w>>8&255]<<8^s[255&R]^o[k+1],S=s[L>>>24]<<24^s[w>>16&255]<<16^s[R>>8&255]<<8^s[255&_]^o[k+2],A=s[w>>>24]<<24^s[R>>16&255]<<16^s[_>>8&255]<<8^s[255&L]^o[k+3],k+=3,b[e]=C(E^p),b[e+1]=C(A^v),b[e+2]=C(S^g),b[e+3]=C(T^m),p=D,v=O,g=I,m=x,e+=4}return i?a(b.buffer):b.buffer},t.prototype.destroy=function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0},t}();e.a=n},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(18),n=r(0),o=r(6),s=function(){function t(e,r,a){i(this,t),this.observer=e,this.config=a,this.remuxer=r}return t.prototype.resetInitSegment=function(t,e,r,i){this._audioTrack={container:"audio/adts",type:"audio",id:0,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:e,duration:i,inputTimeScale:9e4}},t.prototype.resetTimeStamp=function(){},t.probe=function(t){if(!t)return!1;for(var e=o.a.getID3Data(t,0)||[],r=e.length,i=t.length;r<i;r++)if(a.e(t,r))return n.b.log("ADTS sync word found !"),!0;return!1},t.prototype.append=function(t,e,r,i){for(var s=this._audioTrack,l=o.a.getID3Data(t,0)||[],d=o.a.getTimeStamp(l),u=d?90*d:9e4*e,f=0,c=u,h=t.length,p=l.length,v=[{pts:c,dts:c,data:l}];p<h-1;)if(a.d(t,p)&&p+5<h){a.c(s,this.observer,t,p,s.manifestCodec);var g=a.a(s,t,p,u,f);if(!g){n.b.log("Unable to parse AAC frame");break}p+=g.length,c=g.sample.pts,f++}else o.a.isHeader(t,p)?(l=o.a.getID3Data(t,p),v.push({pts:c,dts:c,data:l}),p+=l.length):p++;this.remuxer.remux(s,{samples:[]},{samples:v,inputTimeScale:9e4},{samples:[]},e,r,i)},t.prototype.destroy=function(){},t}();e.a=s},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(18),n=r(19),o=r(1),s=r(33),l=r(34),d=r(0),u=r(2),f={video:0,audio:1,id3:2,text:3},c=function(){function t(e,r,a,n){i(this,t),this.observer=e,this.config=a,this.typeSupported=n,this.remuxer=r,this.sampleAes=null}return t.prototype.setDecryptData=function(t){null!=t&&null!=t.key&&"SAMPLE-AES"===t.method?this.sampleAes=new l.a(this.observer,this.config,t,this.discardEPB):this.sampleAes=null},t.probe=function(e){var r=t._syncOffset(e);return!(r<0)&&(r&&d.b.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),!0)},t._syncOffset=function(t){for(var e=Math.min(1e3,t.length-564),r=0;r<e;){if(71===t[r]&&71===t[r+188]&&71===t[r+376])return r;r++}return-1},t.createTrack=function(t,e){return{container:"video"===t||"audio"===t?"video/mp2t":void 0,type:t,id:f[t],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0,dropped:"video"===t?0:void 0,isAAC:"audio"===t||void 0,duration:"audio"===t?e:void 0}},t.prototype.resetInitSegment=function(e,r,i,a){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=t.createTrack("video",a),this._audioTrack=t.createTrack("audio",a),this._id3Track=t.createTrack("id3",a),this._txtTrack=t.createTrack("text",a),this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=r,this.videoCodec=i,this._duration=a},t.prototype.resetTimeStamp=function(){},t.prototype.append=function(e,r,i,a){var n=void 0,s=e.length,l=void 0,f=void 0,c=void 0,h=void 0,p=!1;this.contiguous=i;var v=this.pmtParsed,g=this._avcTrack,m=this._audioTrack,y=this._id3Track,b=g.pid,E=m.pid,T=y.pid,S=this._pmtId,A=g.pesData,R=m.pesData,_=y.pesData,L=this._parsePAT,w=this._parsePMT,D=this._parsePES,O=this._parseAVCPES.bind(this),I=this._parseAACPES.bind(this),x=this._parseMPEGPES.bind(this),k=this._parseID3PES.bind(this),P=t._syncOffset(e);for(s-=(s+P)%188,n=P;n<s;n+=188)if(71===e[n]){if(l=!!(64&e[n+1]),f=((31&e[n+1])<<8)+e[n+2],(48&e[n+3])>>4>1){if((c=n+5+e[n+4])===n+188)continue}else c=n+4;switch(f){case b:l&&(A&&(h=D(A))&&void 0!==h.pts&&O(h,!1),A={data:[],size:0}),A&&(A.data.push(e.subarray(c,n+188)),A.size+=n+188-c);break;case E:l&&(R&&(h=D(R))&&void 0!==h.pts&&(m.isAAC?I(h):x(h)),R={data:[],size:0}),R&&(R.data.push(e.subarray(c,n+188)),R.size+=n+188-c);break;case T:l&&(_&&(h=D(_))&&void 0!==h.pts&&k(h),_={data:[],size:0}),_&&(_.data.push(e.subarray(c,n+188)),_.size+=n+188-c);break;case 0:l&&(c+=e[c]+1),S=this._pmtId=L(e,c);break;case S:l&&(c+=e[c]+1);var C=w(e,c,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,null!=this.sampleAes);b=C.avc,b>0&&(g.pid=b),E=C.audio,E>0&&(m.pid=E,m.isAAC=C.isAAC),T=C.id3,T>0&&(y.pid=T),p&&!v&&(d.b.log("reparse from beginning"),p=!1,n=P-188),v=this.pmtParsed=!0;break;case 17:case 8191:break;default:p=!0}}else this.observer.trigger(o.a.ERROR,{type:u.b.MEDIA_ERROR,details:u.a.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});A&&(h=D(A))&&void 0!==h.pts?(O(h,!0),g.pesData=null):g.pesData=A,R&&(h=D(R))&&void 0!==h.pts?(m.isAAC?I(h):x(h),m.pesData=null):(R&&R.size&&d.b.log("last AAC PES packet truncated,might overlap between fragments"),m.pesData=R),_&&(h=D(_))&&void 0!==h.pts?(k(h),y.pesData=null):y.pesData=_,null==this.sampleAes?this.remuxer.remux(m,g,y,this._txtTrack,r,i,a):this.decryptAndRemux(m,g,y,this._txtTrack,r,i,a)},t.prototype.decryptAndRemux=function(t,e,r,i,a,n,o){if(t.samples&&t.isAAC){var s=this;this.sampleAes.decryptAacSamples(t.samples,0,function(){s.decryptAndRemuxAvc(t,e,r,i,a,n,o)})}else this.decryptAndRemuxAvc(t,e,r,i,a,n,o)},t.prototype.decryptAndRemuxAvc=function(t,e,r,i,a,n,o){if(e.samples){var s=this;this.sampleAes.decryptAvcSamples(e.samples,0,0,function(){s.remuxer.remux(t,e,r,i,a,n,o)})}else this.remuxer.remux(t,e,r,i,a,n,o)},t.prototype.destroy=function(){this._initPTS=this._initDTS=void 0,this._duration=0},t.prototype._parsePAT=function(t,e){return(31&t[e+10])<<8|t[e+11]},t.prototype._parsePMT=function(t,e,r,i){var a=void 0,n=void 0,o=void 0,s=void 0,l={audio:-1,avc:-1,id3:-1,isAAC:!0};for(a=(15&t[e+1])<<8|t[e+2],n=e+3+a-4,o=(15&t[e+10])<<8|t[e+11],e+=12+o;e<n;){switch(s=(31&t[e+1])<<8|t[e+2],t[e]){case 207:if(!i){d.b.log("unkown stream type:"+t[e]);break}case 15:-1===l.audio&&(l.audio=s);break;case 21:-1===l.id3&&(l.id3=s);break;case 219:if(!i){d.b.log("unkown stream type:"+t[e]);break}case 27:-1===l.avc&&(l.avc=s);break;case 3:case 4:r?-1===l.audio&&(l.audio=s,l.isAAC=!1):d.b.log("MPEG audio found, not supported in this browser for now");break;case 36:d.b.warn("HEVC stream type found, not supported for now");break;default:d.b.log("unkown stream type:"+t[e])}e+=5+((15&t[e+3])<<8|t[e+4])}return l},t.prototype._parsePES=function(t){var e=0,r=void 0,i=void 0,a=void 0,n=void 0,o=void 0,s=void 0,l=void 0,u=void 0,f=t.data;if(!t||0===t.size)return null;for(;f[0].length<19&&f.length>1;){var c=new Uint8Array(f[0].length+f[1].length);c.set(f[0]),c.set(f[1],f[0].length),f[0]=c,f.splice(1,1)}if(r=f[0],1===(r[0]<<16)+(r[1]<<8)+r[2]){if((a=(r[4]<<8)+r[5])&&a>t.size-6)return null;i=r[7],192&i&&(s=536870912*(14&r[9])+4194304*(255&r[10])+16384*(254&r[11])+128*(255&r[12])+(254&r[13])/2,s>4294967295&&(s-=8589934592),64&i?(l=536870912*(14&r[14])+4194304*(255&r[15])+16384*(254&r[16])+128*(255&r[17])+(254&r[18])/2,l>4294967295&&(l-=8589934592),s-l>54e5&&(d.b.warn(Math.round((s-l)/9e4)+"s delta between PTS and DTS, align them"),s=l)):l=s),n=r[8],u=n+9,t.size-=u,o=new Uint8Array(t.size);for(var h=0,p=f.length;h<p;h++){r=f[h];var v=r.byteLength;if(u){if(u>v){u-=v;continue}r=r.subarray(u),v-=u,u=0}o.set(r,e),e+=v}return a&&(a-=n+3),{data:o,pts:s,dts:l,len:a}}return null},t.prototype.pushAccesUnit=function(t,e){if(t.units.length&&t.frame){var r=e.samples,i=r.length;!this.config.forceKeyFrameOnDiscontinuity||!0===t.key||e.sps&&(i||this.contiguous)?(t.id=i,r.push(t)):e.dropped++}t.debug.length&&d.b.log(t.pts+"/"+t.dts+":"+t.debug)},t.prototype._parseAVCPES=function(t,e){var r=this,i=this._avcTrack,a=this._parseAVCNALu(t.data),n=void 0,o=this.avcSample,l=void 0,d=!1,u=void 0,f=this.pushAccesUnit.bind(this),c=function(t,e,r,i){return{key:t,pts:e,dts:r,units:[],debug:i}};t.data=null,o&&a.length&&!i.audFound&&(f(o,i),o=this.avcSample=c(!1,t.pts,t.dts,"")),a.forEach(function(e){switch(e.type){case 1:l=!0,o||(o=r.avcSample=c(!0,t.pts,t.dts,"")),o.frame=!0;var a=e.data;if(d&&a.length>4){var h=new s.a(a).readSliceType();2!==h&&4!==h&&7!==h&&9!==h||(o.key=!0)}break;case 5:l=!0,o||(o=r.avcSample=c(!0,t.pts,t.dts,"")),o.key=!0,o.frame=!0;break;case 6:l=!0,n=new s.a(r.discardEPB(e.data)),n.readUByte();for(var p=0,v=0,g=!1,m=0;!g&&n.bytesAvailable>1;){p=0;do{m=n.readUByte(),p+=m}while(255===m);v=0;do{m=n.readUByte(),v+=m}while(255===m);if(4===p&&0!==n.bytesAvailable){g=!0;if(181===n.readUByte()){if(49===n.readUShort()){if(1195456820===n.readUInt()){if(3===n.readUByte()){var y=n.readUByte(),b=n.readUByte(),E=31&y,T=[y,b];for(u=0;u<E;u++)T.push(n.readUByte()),T.push(n.readUByte()),T.push(n.readUByte());r._insertSampleInOrder(r._txtTrack.samples,{type:3,pts:t.pts,bytes:T})}}}}}else if(v<n.bytesAvailable)for(u=0;u<v;u++)n.readUByte()}break;case 7:if(l=!0,d=!0,!i.sps){n=new s.a(e.data);var S=n.readSPS();i.width=S.width,i.height=S.height,i.pixelRatio=S.pixelRatio,i.sps=[e.data],i.duration=r._duration;var A=e.data.subarray(1,4),R="avc1.";for(u=0;u<3;u++){var _=A[u].toString(16);_.length<2&&(_="0"+_),R+=_}i.codec=R}break;case 8:l=!0,i.pps||(i.pps=[e.data]);break;case 9:l=!1,i.audFound=!0,o&&f(o,i),o=r.avcSample=c(!1,t.pts,t.dts,"");break;case 12:l=!1;break;default:l=!1,o&&(o.debug+="unknown NAL "+e.type+" ")}if(o&&l){o.units.push(e)}}),e&&o&&(f(o,i),this.avcSample=null)},t.prototype._insertSampleInOrder=function(t,e){var r=t.length;if(r>0){if(e.pts>=t[r-1].pts)t.push(e);else for(var i=r-1;i>=0;i--)if(e.pts<t[i].pts){t.splice(i,0,e);break}}else t.push(e)},t.prototype._getLastNalUnit=function(){var t=this.avcSample,e=void 0;if(!t||0===t.units.length){var r=this._avcTrack,i=r.samples;t=i[i.length-1]}if(t){var a=t.units;e=a[a.length-1]}return e},t.prototype._parseAVCNALu=function(t){var e=0,r=t.byteLength,i=void 0,a=void 0,n=this._avcTrack,o=n.naluState||0,s=o,l=[],d=void 0,u=void 0,f=-1,c=void 0;for(-1===o&&(f=0,c=31&t[0],o=0,e=1);e<r;)if(i=t[e++],o)if(1!==o)if(i)if(1===i){if(f>=0)d={data:t.subarray(f,e-o-1),type:c},l.push(d);else{var h=this._getLastNalUnit();if(h&&(s&&e<=4-s&&h.state&&(h.data=h.data.subarray(0,h.data.byteLength-s)),(a=e-o-1)>0)){var p=new Uint8Array(h.data.byteLength+a);p.set(h.data,0),p.set(t.subarray(0,a),h.data.byteLength),h.data=p}}e<r?(u=31&t[e],f=e,c=u,o=0):o=-1}else o=0;else o=3;else o=i?0:2;else o=i?0:1;if(f>=0&&o>=0&&(d={data:t.subarray(f,r),type:c,state:o},l.push(d)),0===l.length){var v=this._getLastNalUnit();if(v){var g=new Uint8Array(v.data.byteLength+t.byteLength);g.set(v.data,0),g.set(t,v.data.byteLength),v.data=g}}return n.naluState=o,l},t.prototype.discardEPB=function(t){for(var e=t.byteLength,r=[],i=1,a=void 0,n=void 0;i<e-2;)0===t[i]&&0===t[i+1]&&3===t[i+2]?(r.push(i+2),i+=2):i++;if(0===r.length)return t;a=e-r.length,n=new Uint8Array(a);var o=0;for(i=0;i<a;o++,i++)o===r[0]&&(o++,r.shift()),n[i]=t[o];return n},t.prototype._parseAACPES=function(t){var e=this._audioTrack,r=t.data,i=t.pts,n=this.aacOverFlow,s=this.aacLastPTS,l=void 0,f=void 0,c=void 0,h=void 0,p=void 0;if(n){var v=new Uint8Array(n.byteLength+r.byteLength);v.set(n,0),v.set(r,n.byteLength),r=v}for(c=0,p=r.length;c<p-1&&!a.d(r,c);c++);if(c){var g=void 0,m=void 0;if(c<p-1?(g="AAC PES did not start with ADTS header,offset:"+c,m=!1):(g="no ADTS header found in AAC PES",m=!0),d.b.warn("parsing error:"+g),this.observer.trigger(o.a.ERROR,{type:u.b.MEDIA_ERROR,details:u.a.FRAG_PARSING_ERROR,fatal:m,reason:g}),m)return}if(a.c(e,this.observer,r,c,this.audioCodec),f=0,l=a.b(e.samplerate),n&&s){var y=s+l;Math.abs(y-i)>1&&(d.b.log("AAC: align PTS for overlapping frames by "+Math.round((y-i)/90)),i=y)}for(;c<p;)if(a.d(r,c)&&c+5<p){var b=a.a(e,r,c,i,f);if(!b)break;c+=b.length,h=b.sample.pts,f++}else c++;n=c<p?r.subarray(c,p):null,this.aacOverFlow=n,this.aacLastPTS=h},t.prototype._parseMPEGPES=function(t){for(var e=t.data,r=e.length,i=0,a=0,o=t.pts;a<r;)if(n.a.isHeader(e,a)){var s=n.a.appendFrame(this._audioTrack,e,a,o,i);if(!s)break;a+=s.length,i++}else a++},t.prototype._parseID3PES=function(t){this._id3Track.samples.push(t)},t}();e.a=c},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(0),n=function(){function t(e){i(this,t),this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}return t.prototype.loadWord=function(){var t=this.data,e=this.bytesAvailable,r=t.byteLength-e,i=new Uint8Array(4),a=Math.min(4,e);if(0===a)throw new Error("no bytes available");i.set(t.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a},t.prototype.skipBits=function(t){var e=void 0;this.bitsAvailable>t?(this.word<<=t,this.bitsAvailable-=t):(t-=this.bitsAvailable,e=t>>3,t-=e>>3,this.bytesAvailable-=e,this.loadWord(),this.word<<=t,this.bitsAvailable-=t)},t.prototype.readBits=function(t){var e=Math.min(this.bitsAvailable,t),r=this.word>>>32-e;return t>32&&a.b.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=e,this.bitsAvailable>0?this.word<<=e:this.bytesAvailable>0&&this.loadWord(),e=t-e,e>0&&this.bitsAvailable?r<<e|this.readBits(e):r},t.prototype.skipLZ=function(){var t=void 0;for(t=0;t<this.bitsAvailable;++t)if(0!=(this.word&2147483648>>>t))return this.word<<=t,this.bitsAvailable-=t,t;return this.loadWord(),t+this.skipLZ()},t.prototype.skipUEG=function(){this.skipBits(1+this.skipLZ())},t.prototype.skipEG=function(){this.skipBits(1+this.skipLZ())},t.prototype.readUEG=function(){var t=this.skipLZ();return this.readBits(t+1)-1},t.prototype.readEG=function(){var t=this.readUEG();return 1&t?1+t>>>1:-1*(t>>>1)},t.prototype.readBoolean=function(){return 1===this.readBits(1)},t.prototype.readUByte=function(){return this.readBits(8)},t.prototype.readUShort=function(){return this.readBits(16)},t.prototype.readUInt=function(){return this.readBits(32)},t.prototype.skipScalingList=function(t){var e=8,r=8,i=void 0,a=void 0;for(i=0;i<t;i++)0!==r&&(a=this.readEG(),r=(e+a+256)%256),e=0===r?e:r},t.prototype.readSPS=function(){var t=0,e=0,r=0,i=0,a=void 0,n=void 0,o=void 0,s=void 0,l=void 0,d=void 0,u=void 0,f=this.readUByte.bind(this),c=this.readBits.bind(this),h=this.readUEG.bind(this),p=this.readBoolean.bind(this),v=this.skipBits.bind(this),g=this.skipEG.bind(this),m=this.skipUEG.bind(this),y=this.skipScalingList.bind(this);if(f(),a=f(),c(5),v(3),f(),m(),100===a||110===a||122===a||244===a||44===a||83===a||86===a||118===a||128===a){var b=h();if(3===b&&v(1),m(),m(),v(1),p())for(d=3!==b?8:12,u=0;u<d;u++)p()&&y(u<6?16:64)}m();var E=h();if(0===E)h();else if(1===E)for(v(1),g(),g(),n=h(),u=0;u<n;u++)g();m(),v(1),o=h(),s=h(),l=c(1),0===l&&v(1),v(1),p()&&(t=h(),e=h(),r=h(),i=h());var T=[1,1];if(p()&&p()){switch(f()){case 1:T=[1,1];break;case 2:T=[12,11];break;case 3:T=[10,11];break;case 4:T=[16,11];break;case 5:T=[40,33];break;case 6:T=[24,11];break;case 7:T=[20,11];break;case 8:T=[32,11];break;case 9:T=[80,33];break;case 10:T=[18,11];break;case 11:T=[15,11];break;case 12:T=[64,33];break;case 13:T=[160,99];break;case 14:T=[4,3];break;case 15:T=[3,2];break;case 16:T=[2,1];break;case 255:T=[f()<<8|f(),f()<<8|f()]}}return{width:Math.ceil(16*(o+1)-2*t-2*e),height:(2-l)*(s+1)*16-(l?2:4)*(r+i),pixelRatio:T}},t.prototype.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},t}();e.a=n},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(17),n=function(){function t(e,r,n,o){i(this,t),this.decryptdata=n,this.discardEPB=o,this.decrypter=new a.a(e,r,{removePKCS7Padding:!1})}return t.prototype.decryptBuffer=function(t,e){this.decrypter.decrypt(t,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,e)},t.prototype.decryptAacSample=function(t,e,r,i){var a=t[e].unit,n=a.subarray(16,a.length-a.length%16),o=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),s=this;this.decryptBuffer(o,function(n){n=new Uint8Array(n),a.set(n,16),i||s.decryptAacSamples(t,e+1,r)})},t.prototype.decryptAacSamples=function(t,e,r){for(;;e++){if(e>=t.length)return void r();if(!(t[e].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(t,e,r,i),!i)return}}},t.prototype.getAvcEncryptedData=function(t){for(var e=16*Math.floor((t.length-48)/160)+16,r=new Int8Array(e),i=0,a=32;a<=t.length-16;a+=160,i+=16)r.set(t.subarray(a,a+16),i);return r},t.prototype.getAvcDecryptedUnit=function(t,e){e=new Uint8Array(e);for(var r=0,i=32;i<=t.length-16;i+=160,r+=16)t.set(e.subarray(r,r+16),i);return t},t.prototype.decryptAvcSample=function(t,e,r,i,a,n){var o=this.discardEPB(a.data),s=this.getAvcEncryptedData(o),l=this;this.decryptBuffer(s.buffer,function(s){a.data=l.getAvcDecryptedUnit(o,s),n||l.decryptAvcSamples(t,e,r+1,i)})},t.prototype.decryptAvcSamples=function(t,e,r,i){for(;;e++,r=0){if(e>=t.length)return void i();for(var a=t[e].units;!(r>=a.length);r++){var n=a[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var o=this.decrypter.isSync();if(this.decryptAvcSample(t,e,r,i,n,o),!o)return}}}},t}();e.a=n},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(6),n=r(0),o=r(19),s=function(){function t(e,r,a){i(this,t),this.observer=e,this.config=a,this.remuxer=r}return t.prototype.resetInitSegment=function(t,e,r,i){this._audioTrack={container:"audio/mpeg",type:"audio",id:-1,sequenceNumber:0,isAAC:!1,samples:[],len:0,manifestCodec:e,duration:i,inputTimeScale:9e4}},t.prototype.resetTimeStamp=function(){},t.probe=function(t){var e=void 0,r=void 0,i=a.a.getID3Data(t,0);if(i&&void 0!==a.a.getTimeStamp(i))for(e=i.length,r=Math.min(t.length-1,e+100);e<r;e++)if(o.a.probe(t,e))return n.b.log("MPEG Audio sync word found !"),!0;return!1},t.prototype.append=function(t,e,r,i){for(var n=a.a.getID3Data(t,0),s=a.a.getTimeStamp(n),l=s?90*s:9e4*e,d=n.length,u=t.length,f=0,c=0,h=this._audioTrack,p=[{pts:l,dts:l,data:n}];d<u;)if(o.a.isHeader(t,d)){var v=o.a.appendFrame(h,t,d,l,f);if(!v)break;d+=v.length,c=v.sample.pts,f++}else a.a.isHeader(t,d)?(n=a.a.getID3Data(t,d),p.push({pts:c,dts:c,data:n}),d+=n.length):d++;this.remuxer.remux(h,{samples:[]},{samples:p,inputTimeScale:9e4},{samples:[]},e,r,i)},t.prototype.destroy=function(){},t}();e.a=s},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(37),n=r(1),o=r(0),s=r(38),l=r(2),d=function(){function t(e,r,a,n){i(this,t),this.observer=e,this.config=r,this.typeSupported=a;var o=navigator.userAgent;this.isSafari=n&&n.indexOf("Apple")>-1&&o&&!o.match("CriOS"),this.ISGenerated=!1}return t.prototype.destroy=function(){},t.prototype.resetTimeStamp=function(t){this._initPTS=this._initDTS=t},t.prototype.resetInitSegment=function(){this.ISGenerated=!1},t.prototype.remux=function(t,e,r,i,a,s,l){if(this.ISGenerated||this.generateIS(t,e,a),this.ISGenerated){var d=t.samples.length,u=e.samples.length,f=a,c=a;if(d&&u){var h=(t.samples[0].dts-e.samples[0].dts)/e.inputTimeScale;f+=Math.max(0,h),c+=Math.max(0,-h)}if(d){t.timescale||(o.b.warn("regenerate InitSegment as audio detected"),this.generateIS(t,e,a));var p=this.remuxAudio(t,f,s,l);if(u){var v=void 0;p&&(v=p.endPTS-p.startPTS),e.timescale||(o.b.warn("regenerate InitSegment as video detected"),this.generateIS(t,e,a)),this.remuxVideo(e,c,s,v,l)}}else if(u){var g=this.remuxVideo(e,c,s,0,l);g&&t.codec&&this.remuxEmptyAudio(t,f,s,g)}}r.samples.length&&this.remuxID3(r,a),i.samples.length&&this.remuxText(i,a),this.observer.trigger(n.a.FRAG_PARSED)},t.prototype.generateIS=function(t,e,r){var i=this.observer,a=t.samples,d=e.samples,u=this.typeSupported,f="audio/mp4",c={},h={tracks:c},p=void 0===this._initPTS,v=void 0,g=void 0;if(p&&(v=g=1/0),t.config&&a.length&&(t.timescale=t.samplerate,o.b.log("audio sampling rate : "+t.samplerate),t.isAAC||(u.mpeg?(f="audio/mpeg",t.codec=""):u.mp3&&(t.codec="mp3")),c.audio={container:f,codec:t.codec,initSegment:!t.isAAC&&u.mpeg?new Uint8Array:s.a.initSegment([t]),metadata:{channelCount:t.channelCount}},p&&(v=g=a[0].pts-t.inputTimeScale*r)),e.sps&&e.pps&&d.length){var m=e.inputTimeScale;e.timescale=m,c.video={container:"video/mp4",codec:e.codec,initSegment:s.a.initSegment([e]),metadata:{width:e.width,height:e.height}},p&&(v=Math.min(v,d[0].pts-m*r),g=Math.min(g,d[0].dts-m*r),this.observer.trigger(n.a.INIT_PTS_FOUND,{initPTS:v}))}Object.keys(c).length?(i.trigger(n.a.FRAG_PARSING_INIT_SEGMENT,h),this.ISGenerated=!0,p&&(this._initPTS=v,this._initDTS=g)):i.trigger(n.a.ERROR,{type:l.b.MEDIA_ERROR,details:l.a.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})},t.prototype.remuxVideo=function(t,e,r,i,a){var d=8,u=t.timescale,f=void 0,c=void 0,h=void 0,p=void 0,v=void 0,g=void 0,m=void 0,y=t.samples,b=[],E=y.length,T=this._PTSNormalize,S=this._initDTS,A=this.nextAvcDts,R=this.isSafari;if(0!==E){R&&(r|=y.length&&A&&(a&&Math.abs(e-A/u)<.1||Math.abs(y[0].pts-A-S)<u/5)),r||(A=e*u),y.forEach(function(t){t.pts=T(t.pts-S,A),t.dts=T(t.dts-S,A)}),y.sort(function(t,e){var r=t.dts-e.dts,i=t.pts-e.pts;return r||i||t.id-e.id});var _=y.reduce(function(t,e){return Math.max(Math.min(t,e.pts-e.dts),-18e3)},0);if(_<0){o.b.warn("PTS < DTS detected in video samples, shifting DTS by "+Math.round(_/90)+" ms to overcome this issue");for(var L=0;L<y.length;L++)y[L].dts+=_}var w=y[0];v=Math.max(w.dts,0),p=Math.max(w.pts,0);var D=Math.round((v-A)/90);r&&D&&(D>1?o.b.log("AVC:"+D+" ms hole between fragments detected,filling it"):D<-1&&o.b.log("AVC:"+-D+" ms overlapping between fragments detected"),v=A,y[0].dts=v,p=Math.max(p-D,A),y[0].pts=p,o.b.log("Video/PTS/DTS adjusted: "+Math.round(p/90)+"/"+Math.round(v/90)+",delta:"+D+" ms")),v,w=y[y.length-1],m=Math.max(w.dts,0),g=Math.max(w.pts,0,m),R&&(f=Math.round((m-v)/(y.length-1)));for(var O=0,I=0,x=0;x<E;x++){for(var k=y[x],P=k.units,C=P.length,F=0,M=0;M<C;M++)F+=P[M].data.length;I+=F,O+=C,k.length=F,k.dts=R?v+x*f:Math.max(k.dts,v),k.pts=Math.max(k.pts,k.dts)}var N=I+4*O+8;try{c=new Uint8Array(N)}catch(t){return void this.observer.trigger(n.a.ERROR,{type:l.b.MUX_ERROR,details:l.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:N,reason:"fail allocating video mdat "+N})}var U=new DataView(c.buffer);U.setUint32(0,N),c.set(s.a.types.mdat,4);for(var B=0;B<E;B++){for(var G=y[B],j=G.units,K=0,H=void 0,V=0,W=j.length;V<W;V++){var Y=j[V],z=Y.data,X=Y.data.byteLength;U.setUint32(d,X),d+=4,c.set(z,d),d+=X,K+=4+X}if(R)H=Math.max(0,f*Math.round((G.pts-G.dts)/f));else{if(B<E-1)f=y[B+1].dts-G.dts;else{var q=this.config,Q=G.dts-y[B>0?B-1:B].dts;if(q.stretchShortVideoTrack){var Z=q.maxBufferHole,J=Math.floor(Z*u),$=(i?p+i*u:this.nextAudioPts)-G.pts;$>J?(f=$-Q,f<0&&(f=Q),o.b.log("It is approximately "+$/90+" ms to the next segment; using duration "+f/90+" ms for the last video frame.")):f=Q}else f=Q}H=Math.round(G.pts-G.dts)}b.push({size:K,duration:f,cts:H,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:G.key?2:1,isNonSync:G.key?0:1}})}this.nextAvcDts=m+f;var tt=t.dropped;if(t.len=0,t.nbNalu=0,t.dropped=0,b.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var et=b[0].flags;et.dependsOn=2,et.isNonSync=0}t.samples=b,h=s.a.moof(t.sequenceNumber++,v,t),t.samples=[];var rt={data1:h,data2:c,startPTS:p/u,endPTS:(g+f)/u,startDTS:v/u,endDTS:this.nextAvcDts/u,type:"video",hasAudio:!1,hasVideo:!0,nb:b.length,dropped:tt};return this.observer.trigger(n.a.FRAG_PARSING_DATA,rt),rt}},t.prototype.remuxAudio=function(t,e,r,i){var d=t.inputTimeScale,u=t.timescale,f=d/u,c=t.isAAC?1024:1152,h=c*f,p=this._PTSNormalize,v=this._initDTS,g=!t.isAAC&&this.typeSupported.mpeg,m=void 0,y=void 0,b=void 0,E=void 0,T=void 0,S=void 0,A=void 0,R=t.samples,_=[],L=this.nextAudioPts;if(r|=R.length&&L&&(i&&Math.abs(e-L/d)<.1||Math.abs(R[0].pts-L-v)<20*h),R.forEach(function(t){t.pts=t.dts=p(t.pts-v,e*d)}),R=R.filter(function(t){return t.pts>=0}),0!==R.length){if(r||(L=i?e*d:R[0].pts),t.isAAC)for(var w=this.config.maxAudioFramesDrift,D=0,O=L;D<R.length;){var I,x=R[D],k=x.pts;I=k-O;var P=Math.abs(1e3*I/d);if(I<=-w*h)o.b.warn("Dropping 1 audio frame @ "+(O/d).toFixed(3)+"s due to "+Math.round(P)+" ms overlap."),R.splice(D,1),t.len-=x.unit.length;else if(I>=w*h&&P<1e4&&O){var C=Math.round(I/h);o.b.warn("Injecting "+C+" audio frame @ "+(O/d).toFixed(3)+"s due to "+Math.round(1e3*I/d)+" ms gap.");for(var F=0;F<C;F++){var M=Math.max(O,0);b=a.a.getSilentFrame(t.manifestCodec||t.codec,t.channelCount),b||(o.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),b=x.unit.subarray()),R.splice(D,0,{unit:b,pts:M,dts:M}),t.len+=b.length,O+=h,D++}x.pts=x.dts=O,O+=h,D++}else Math.abs(I),x.pts=x.dts=O,O+=h,D++}for(var N=0,U=R.length;N<U;N++){var B=R[N],G=B.unit,j=B.pts;if(void 0!==A)y.duration=Math.round((j-A)/f);else{var K=Math.round(1e3*(j-L)/d),H=0;if(r&&t.isAAC&&K){if(K>0&&K<1e4)H=Math.round((j-L)/h),o.b.log(K+" ms hole between AAC samples detected,filling it"),H>0&&(b=a.a.getSilentFrame(t.manifestCodec||t.codec,t.channelCount),b||(b=G.subarray()),t.len+=H*b.length);else if(K<-12){o.b.log("drop overlapping AAC sample, expected/parsed/delta:"+(L/d).toFixed(3)+"s/"+(j/d).toFixed(3)+"s/"+-K+"ms"),t.len-=G.byteLength;continue}j=L}if(S=j,!(t.len>0))return;var V=g?t.len:t.len+8;m=g?0:8;try{E=new Uint8Array(V)}catch(t){return void this.observer.trigger(n.a.ERROR,{type:l.b.MUX_ERROR,details:l.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:V,reason:"fail allocating audio mdat "+V})}if(!g){new DataView(E.buffer).setUint32(0,V),E.set(s.a.types.mdat,4)}for(var W=0;W<H;W++)b=a.a.getSilentFrame(t.manifestCodec||t.codec,t.channelCount),b||(o.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),b=G.subarray()),E.set(b,m),m+=b.byteLength,y={size:b.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},_.push(y)}E.set(G,m);var Y=G.byteLength;m+=Y,y={size:Y,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},_.push(y),A=j}var z=0,X=_.length;if(X>=2&&(z=_[X-2].duration,y.duration=z),X){this.nextAudioPts=L=A+f*z,t.len=0,t.samples=_,T=g?new Uint8Array:s.a.moof(t.sequenceNumber++,S/f,t),t.samples=[];var q=S/d,Q=L/d,Z={data1:T,data2:E,startPTS:q,endPTS:Q,startDTS:q,endDTS:Q,type:"audio",hasAudio:!0,hasVideo:!1,nb:X};return this.observer.trigger(n.a.FRAG_PARSING_DATA,Z),Z}return null}},t.prototype.remuxEmptyAudio=function(t,e,r,i){var n=t.inputTimeScale,s=t.samplerate?t.samplerate:n,l=n/s,d=this.nextAudioPts,u=(void 0!==d?d:i.startDTS*n)+this._initDTS,f=i.endDTS*n+this._initDTS,c=1024*l,h=Math.ceil((f-u)/c),p=a.a.getSilentFrame(t.manifestCodec||t.codec,t.channelCount);if(o.b.warn("remux empty Audio"),!p)return void o.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");for(var v=[],g=0;g<h;g++){var m=u+g*c;v.push({unit:p,pts:m,dts:m}),t.len+=p.length}t.samples=v,this.remuxAudio(t,e,r)},t.prototype.remuxID3=function(t,e){var r=t.samples.length,i=void 0,a=t.inputTimeScale,o=this._initPTS,s=this._initDTS;if(r){for(var l=0;l<r;l++)i=t.samples[l],i.pts=(i.pts-o)/a,i.dts=(i.dts-s)/a;this.observer.trigger(n.a.FRAG_PARSING_METADATA,{samples:t.samples})}t.samples=[],e=e},t.prototype.remuxText=function(t,e){t.samples.sort(function(t,e){return t.pts-e.pts});var r=t.samples.length,i=void 0,a=t.inputTimeScale,o=this._initPTS;if(r){for(var s=0;s<r;s++)i=t.samples[s],i.pts=(i.pts-o)/a;this.observer.trigger(n.a.FRAG_PARSING_USERDATA,{samples:t.samples})}t.samples=[],e=e},t.prototype._PTSNormalize=function(t,e){var r=void 0;if(void 0===e)return t;for(r=e<t?-8589934592:8589934592;Math.abs(t-e)>4294967296;)t+=r;return t},t}();e.a=d},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(){i(this,t)}return t.getSilentFrame=function(t,e){switch(t){case"mp4a.40.2":if(1===e)return new Uint8Array([0,200,0,128,35,128]);if(2===e)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===e)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null},t}();e.a=a},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=Math.pow(2,32)-1,n=function(){function t(){i(this,t)}return t.init=function(){t.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var e=void 0;for(e in t.types)t.types.hasOwnProperty(e)&&(t.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);t.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);t.STTS=t.STSC=t.STCO=n,t.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),t.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),t.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),t.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var o=new Uint8Array([105,115,111,109]),s=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);t.FTYP=t.box(t.types.ftyp,o,l,o,s),t.DINF=t.box(t.types.dinf,t.box(t.types.dref,a))},t.box=function(t){for(var e=Array.prototype.slice.call(arguments,1),r=8,i=e.length,a=i,n=void 0;i--;)r+=e[i].byteLength;for(n=new Uint8Array(r),n[0]=r>>24&255,n[1]=r>>16&255,n[2]=r>>8&255,n[3]=255&r,n.set(t,4),i=0,r=8;i<a;i++)n.set(e[i],r),r+=e[i].byteLength;return n},t.hdlr=function(e){return t.box(t.types.hdlr,t.HDLR_TYPES[e])},t.mdat=function(e){return t.box(t.types.mdat,e)},t.mdhd=function(e,r){r*=e;var i=Math.floor(r/(a+1)),n=Math.floor(r%(a+1));return t.box(t.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))},t.mdia=function(e){return t.box(t.types.mdia,t.mdhd(e.timescale,e.duration),t.hdlr(e.type),t.minf(e))},t.mfhd=function(e){return t.box(t.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))},t.minf=function(e){return"audio"===e.type?t.box(t.types.minf,t.box(t.types.smhd,t.SMHD),t.DINF,t.stbl(e)):t.box(t.types.minf,t.box(t.types.vmhd,t.VMHD),t.DINF,t.stbl(e))},t.moof=function(e,r,i){return t.box(t.types.moof,t.mfhd(e),t.traf(i,r))},t.moov=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trak(e[r]);return t.box.apply(null,[t.types.moov,t.mvhd(e[0].timescale,e[0].duration)].concat(i).concat(t.mvex(e)))},t.mvex=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trex(e[r]);return t.box.apply(null,[t.types.mvex].concat(i))},t.mvhd=function(e,r){r*=e;var i=Math.floor(r/(a+1)),n=Math.floor(r%(a+1)),o=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t.box(t.types.mvhd,o)},t.sdtp=function(e){var r=e.samples||[],i=new Uint8Array(4+r.length),a=void 0,n=void 0;for(n=0;n<r.length;n++)a=r[n].flags,i[n+4]=a.dependsOn<<4|a.isDependedOn<<2|a.hasRedundancy;return t.box(t.types.sdtp,i)},t.stbl=function(e){return t.box(t.types.stbl,t.stsd(e),t.box(t.types.stts,t.STTS),t.box(t.types.stsc,t.STSC),t.box(t.types.stsz,t.STSZ),t.box(t.types.stco,t.STCO))},t.avc1=function(e){var r=[],i=[],a=void 0,n=void 0,o=void 0;for(a=0;a<e.sps.length;a++)n=e.sps[a],o=n.byteLength,r.push(o>>>8&255),r.push(255&o),r=r.concat(Array.prototype.slice.call(n));for(a=0;a<e.pps.length;a++)n=e.pps[a],o=n.byteLength,i.push(o>>>8&255),i.push(255&o),i=i.concat(Array.prototype.slice.call(n));var s=t.box(t.types.avcC,new Uint8Array([1,r[3],r[4],r[5],255,224|e.sps.length].concat(r).concat([e.pps.length]).concat(i))),l=e.width,d=e.height,u=e.pixelRatio[0],f=e.pixelRatio[1];return t.box(t.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,d>>8&255,255&d,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),s,t.box(t.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),t.box(t.types.pasp,new Uint8Array([u>>24,u>>16&255,u>>8&255,255&u,f>>24,f>>16&255,f>>8&255,255&f])))},t.esds=function(t){var e=t.config.length;return new Uint8Array([0,0,0,0,3,23+e,0,1,0,4,15+e,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([e]).concat(t.config).concat([6,1,2]))},t.mp4a=function(e){var r=e.samplerate;return t.box(t.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),t.box(t.types.esds,t.esds(e)))},t.mp3=function(e){var r=e.samplerate;return t.box(t.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},t.stsd=function(e){return"audio"===e.type?e.isAAC||"mp3"!==e.codec?t.box(t.types.stsd,t.STSD,t.mp4a(e)):t.box(t.types.stsd,t.STSD,t.mp3(e)):t.box(t.types.stsd,t.STSD,t.avc1(e))},t.tkhd=function(e){var r=e.id,i=e.duration*e.timescale,n=e.width,o=e.height,s=Math.floor(i/(a+1)),l=Math.floor(i%(a+1));return t.box(t.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,l>>24,l>>16&255,l>>8&255,255&l,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,n>>8&255,255&n,0,0,o>>8&255,255&o,0,0]))},t.traf=function(e,r){var i=t.sdtp(e),n=e.id,o=Math.floor(r/(a+1)),s=Math.floor(r%(a+1));return t.box(t.types.traf,t.box(t.types.tfhd,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),t.box(t.types.tfdt,new Uint8Array([1,0,0,0,o>>24,o>>16&255,o>>8&255,255&o,s>>24,s>>16&255,s>>8&255,255&s])),t.trun(e,i.length+16+20+8+16+8+8),i)},t.trak=function(e){return e.duration=e.duration||4294967295,t.box(t.types.trak,t.tkhd(e),t.mdia(e))},t.trex=function(e){var r=e.id;return t.box(t.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},t.trun=function(e,r){var i=e.samples||[],a=i.length,n=12+16*a,o=new Uint8Array(n),s=void 0,l=void 0,d=void 0,u=void 0,f=void 0,c=void 0;for(r+=8+n,o.set([0,0,15,1,a>>>24&255,a>>>16&255,a>>>8&255,255&a,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),s=0;s<a;s++)l=i[s],d=l.duration,u=l.size,f=l.flags,c=l.cts,o.set([d>>>24&255,d>>>16&255,d>>>8&255,255&d,u>>>24&255,u>>>16&255,u>>>8&255,255&u,f.isLeading<<2|f.dependsOn,f.isDependedOn<<6|f.hasRedundancy<<4|f.paddingValue<<1|f.isNonSync,61440&f.degradPrio,15&f.degradPrio,c>>>24&255,c>>>16&255,c>>>8&255,255&c],12+16*s);return t.box(t.types.trun,o)},t.initSegment=function(e){t.types||t.init();var r=t.moov(e),i=void 0;return i=new Uint8Array(t.FTYP.byteLength+r.byteLength),i.set(t.FTYP),i.set(r,t.FTYP.byteLength),i},t}();e.a=n},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(1),n=function(){function t(e){i(this,t),this.observer=e}return t.prototype.destroy=function(){},t.prototype.resetTimeStamp=function(){},t.prototype.resetInitSegment=function(){},t.prototype.remux=function(t,e,r,i,n,o,s,l){var d=this.observer,u="";t&&(u+="audio"),e&&(u+="video"),d.trigger(a.a.FRAG_PARSING_DATA,{data1:l,startPTS:n,startDTS:n,type:u,hasAudio:!!t,hasVideo:!!e,nb:1,dropped:0}),d.trigger(a.a.FRAG_PARSED)},t}();e.a=n},function(t,e,r){function i(t){function e(i){if(r[i])return r[i].exports;var a=r[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t};var i=e(e.s=ENTRY_MODULE);return i.default||i}function a(t){return(t+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function n(t,e,i){var n={};n[i]=[];var o=e.toString(),s=o.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);if(!s)return n;for(var u,f=s[1],c=new RegExp("(\\\\n|\\W)"+a(f)+d,"g");u=c.exec(o);)"dll-reference"!==u[3]&&n[i].push(u[3]);for(c=new RegExp("\\("+a(f)+'\\("(dll-reference\\s('+l+'))"\\)\\)'+d,"g");u=c.exec(o);)t[u[2]]||(n[i].push(u[1]),t[u[2]]=r(u[1]).m),n[u[2]]=n[u[2]]||[],n[u[2]].push(u[4]);return n}function o(t){return Object.keys(t).reduce(function(e,r){return e||t[r].length>0},!1)}function s(t,e){for(var r={main:[e]},i={main:[]},a={main:{}};o(r);)for(var s=Object.keys(r),l=0;l<s.length;l++){var d=s[l],u=r[d],f=u.pop();if(a[d]=a[d]||{},!a[d][f]&&t[d][f]){a[d][f]=!0,i[d]=i[d]||[],i[d].push(f);for(var c=n(t,t[d][f],d),h=Object.keys(c),p=0;p<h.length;p++)r[h[p]]=r[h[p]]||[],r[h[p]]=r[h[p]].concat(c[h[p]])}}return i}var l="[\\.|\\-|\\+|\\w|/|@]+",d="\\((/\\*.*?\\*/)?s?.*?("+l+").*?\\)";t.exports=function(t,e){e=e||{};var a={main:r.m},n=e.all?{main:Object.keys(a)}:s(a,t),o="";Object.keys(n).filter(function(t){return"main"!==t}).forEach(function(t){for(var e=0;n[t][e];)e++;n[t].push(e),a[t][e]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",o=o+"var "+t+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+n[t].map(function(e){return JSON.stringify(e)+": "+a[t][e].toString()}).join(",")+"});\n"}),o=o+"("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+n.main.map(function(t){return JSON.stringify(t)+": "+a.main[t].toString()}).join(",")+"})(self);";var l=new window.Blob([o],{type:"text/javascript"});if(e.bare)return l;var d=window.URL||window.webkitURL||window.mozURL||window.msURL,u=d.createObjectURL(l),f=new window.Worker(u);return f.objectURL=u,f}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(16),a=r(1),n=r(0),o=r(7),s=r.n(o),l=function(t){var e=new s.a;e.trigger=function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];e.emit.apply(e,[t,t].concat(i))},e.off=function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];e.removeListener.apply(e,[t].concat(i))};var r=function(e,r){t.postMessage({event:e,data:r})};t.addEventListener("message",function(a){var o=a.data;switch(o.cmd){case"init":var s=JSON.parse(o.config);t.demuxer=new i.a(e,o.typeSupported,s,o.vendor);try{Object(n.a)(!0===s.debug)}catch(t){console.warn("demuxerWorker: unable to enable logs")}r("init",null);break;case"demux":t.demuxer.push(o.data,o.decryptdata,o.initSegment,o.audioCodec,o.videoCodec,o.timeOffset,o.discontinuity,o.trackSwitch,o.contiguous,o.duration,o.accurateTimeOffset,o.defaultInitPTS)}}),e.on(a.a.FRAG_DECRYPTED,r),e.on(a.a.FRAG_PARSING_INIT_SEGMENT,r),e.on(a.a.FRAG_PARSED,r),e.on(a.a.ERROR,r),e.on(a.a.FRAG_PARSING_METADATA,r),e.on(a.a.FRAG_PARSING_USERDATA,r),e.on(a.a.INIT_PTS_FOUND,r),e.on(a.a.FRAG_PARSING_DATA,function(e,r){var i=[],a={event:e,data:r};r.data1&&(a.data1=r.data1.buffer,i.push(r.data1.buffer),delete r.data1),r.data2&&(a.data2=r.data2.buffer,i.push(r.data2.buffer),delete r.data2),t.postMessage(a,i)})};e.default=l},function(t,e,r){"use strict";function i(t,e,r){var i=t[e],a=t[r],n=a.startPTS;isNaN(n)?a.start=r>e?i.start+i.duration:Math.max(i.start-a.duration,0):r>e?(i.duration=n-i.start,i.duration<0&&o.b.warn("negative duration computed for frag "+i.sn+",level "+i.level+", there should be some duration drift between playlist and fragment!")):(a.duration=i.start-n,a.duration<0&&o.b.warn("negative duration computed for frag "+a.sn+",level "+a.level+", there should be some duration drift between playlist and fragment!"))}function a(t,e,r,a,n,o){var s=r;if(!isNaN(e.startPTS)){var l=Math.abs(e.startPTS-r);isNaN(e.deltaPTS)?e.deltaPTS=l:e.deltaPTS=Math.max(l,e.deltaPTS),s=Math.max(r,e.startPTS),r=Math.min(r,e.startPTS),a=Math.max(a,e.endPTS),n=Math.min(n,e.startDTS),o=Math.max(o,e.endDTS)}var d=r-e.start;e.start=e.startPTS=r,e.maxStartPTS=s,e.endPTS=a,e.startDTS=n,e.endDTS=o,e.duration=a-r;var u=e.sn;if(!t||u<t.startSN||u>t.endSN)return 0;var f=void 0,c=void 0,h=void 0;for(f=u-t.startSN,c=t.fragments,c[f]=e,h=f;h>0;h--)i(c,h,h-1);for(h=f;h<c.length-1;h++)i(c,h,h+1);return t.PTSKnown=!0,d}function n(t,e){var r=Math.max(t.startSN,e.startSN)-e.startSN,i=Math.min(t.endSN,e.endSN)-e.startSN,n=e.startSN-t.startSN,s=t.fragments,l=e.fragments,d=0,u=void 0;if(e.initSegment&&t.initSegment&&(e.initSegment=t.initSegment),i<r)return void(e.PTSKnown=!1);for(var f=r;f<=i;f++){var c=s[n+f],h=l[f];h&&c&&(d=c.cc-h.cc,isNaN(c.startPTS)||(h.start=h.startPTS=c.startPTS,h.endPTS=c.endPTS,h.duration=c.duration,h.backtracked=c.backtracked,h.dropped=c.dropped,u=h))}if(d)for(o.b.log("discontinuity sliding from playlist, take drift into account"),f=0;f<l.length;f++)l[f].cc+=d;if(u)a(e,u,u.startPTS,u.endPTS,u.startDTS,u.endDTS);else if(n>=0&&n<s.length){var p=s[n].start;for(f=0;f<l.length;f++)l[f].start+=p}e.PTSKnown=t.PTSKnown}e.b=a,e.a=n;var o=r(0)},function(t,e,r){"use strict";var i={toString:function(t){for(var e="",r=t.length,i=0;i<r;i++)e+="["+t.start(i).toFixed(3)+","+t.end(i).toFixed(3)+"]";return e}};e.a=i},function(t,e,r){"use strict";function i(t,e){for(var r=null,i=0;i<t.length;i+=1){var a=t[i];if(a&&a.cc===e){r=a;break}}return r}function a(t,e,r){var i=!1;return e&&e.details&&r&&(r.endCC>r.startCC||t&&t.cc<r.startCC)&&(i=!0),i}function n(t,e){var r=t.fragments,a=e.fragments;if(!a.length||!r.length)return void l.b.log("No fragments to align");var n=i(r,a[0].cc);return!n||n&&!n.startPTS?void l.b.log("No frag in previous level to align on"):n}function o(t,e){e.fragments.forEach(function(e){if(e){var r=e.start+t;e.start=e.startPTS=r,e.endPTS=r+e.duration}}),e.PTSKnown=!0}function s(t,e,r){if(a(t,e,r)){var i=n(e.details,r);i&&(l.b.log("Adjusting PTS using last level due to CC increase within current level"),o(i.start,r))}if(!1===r.PTSKnown&&e&&e.details&&e.details.fragments&&e.details.fragments.length){var s=e.details.programDateTime,d=r.programDateTime,u=(d-s)/1e3+e.details.fragments[0].start;isNaN(u)||(l.b.log("adjusting PTS using programDateTime delta, sliding:"+u.toFixed(3)),o(u,r))}}e.a=s;var l=(r(14),r(0))},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(3),s=function(t){function e(r){i(this,e);for(var n=arguments.length,o=Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];var l=a(this,t.call.apply(t,[this,r].concat(o)));return l._tickInterval=null,l._tickCallCount=0,l}return n(e,t),e.prototype.destroy=function(){this.clearInterval(),t.prototype.destroy.call(this)},e.prototype.hasInterval=function(){return null!==this._tickInterval},e.prototype.setInterval=function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return!this._tickInterval&&(this._tickInterval=setInterval(this.tick.bind(this,!1),t),!0)}),e.prototype.clearInterval=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){return!!this._tickInterval&&(clearInterval(this._tickInterval),this._tickInterval=null,!0)}),e.prototype.tick=function(){1===++this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&setTimeout(this.tick.bind(this),0),this._tickCallCount=0)},e.prototype.doTick=function(){throw new Error("TaskLoop is abstract and `doLoop` must be implemented")},e}(o.a);e.a=s},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(0),d=r(2),u=r(13),f=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),c=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.MANIFEST_LOADED,o.a.LEVEL_LOADED,o.a.FRAG_LOADED,o.a.ERROR));return n.canload=!1,n.currentLevelIndex=null,n.manualLevelIndex=-1,n.timer=null,n}return n(e,t),e.prototype.onHandlerDestroying=function(){this.cleanTimer(),this.manualLevelIndex=-1},e.prototype.cleanTimer=function(){null!==this.timer&&(clearTimeout(this.timer),this.timer=null)},e.prototype.startLoad=function(){var t=this._levels;this.canload=!0,this.levelRetryCount=0,t&&t.forEach(function(t){t.loadError=0;var e=t.details;e&&e.live&&(t.details=void 0)}),null!==this.timer&&this.loadLevel()},e.prototype.stopLoad=function(){this.canload=!1},e.prototype.onManifestLoaded=function(t){var e=[],r=void 0,i={},a=null,n=!1,s=!1,f=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),c=[];if(t.levels.forEach(function(t){t.loadError=0,t.fragmentError=!1,n=n||!!t.videoCodec,s=s||!!t.audioCodec||!(!t.attrs||!t.attrs.AUDIO),!0===f&&t.audioCodec&&-1!==t.audioCodec.indexOf("mp4a.40.34")&&(t.audioCodec=void 0),a=i[t.bitrate],void 0===a?(t.url=[t.url],t.urlId=0,i[t.bitrate]=t,e.push(t)):a.url.push(t.url)}),!0===n&&!0===s&&(e=e.filter(function(t){return!!t.videoCodec})),e=e.filter(function(t){var e=t.audioCodec,r=t.videoCodec;return(!e||Object(u.a)(e))&&(!r||Object(u.a)(r))}),t.audioTracks&&(c=t.audioTracks.filter(function(t){return!t.audioCodec||Object(u.a)(t.audioCodec,"audio")})),e.length>0){r=e[0].bitrate,e.sort(function(t,e){return t.bitrate-e.bitrate}),this._levels=e;for(var h=0;h<e.length;h++)if(e[h].bitrate===r){this._firstLevel=h,l.b.log("manifest loaded,"+e.length+" level(s) found, first bitrate:"+r);break}this.hls.trigger(o.a.MANIFEST_PARSED,{levels:e,audioTracks:c,firstLevel:this._firstLevel,stats:t.stats,audio:s,video:n,altAudio:c.length>0})}else this.hls.trigger(o.a.ERROR,{type:d.b.MEDIA_ERROR,details:d.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:this.hls.url,reason:"no level with compatible codecs found in manifest"})},e.prototype.setLevelInternal=function(t){var e=this._levels,r=this.hls;if(t>=0&&t<e.length){if(this.cleanTimer(),this.currentLevelIndex!==t){l.b.log("switching to level "+t),this.currentLevelIndex=t;var i=e[t];i.level=t,r.trigger(o.a.LEVEL_SWITCHING,i)}var a=e[t],n=a.details;if(!n||!0===n.live){var s=a.urlId;r.trigger(o.a.LEVEL_LOADING,{url:a.url[s],level:t,id:s})}}else r.trigger(o.a.ERROR,{type:d.b.OTHER_ERROR,details:d.a.LEVEL_SWITCH_ERROR,level:t,fatal:!1,reason:"invalid level idx"})},e.prototype.onError=function(t){if(!0===t.fatal)return void(t.type===d.b.NETWORK_ERROR&&this.cleanTimer());var e=!1,r=!1,i=void 0;switch(t.details){case d.a.FRAG_LOAD_ERROR:case d.a.FRAG_LOAD_TIMEOUT:case d.a.KEY_LOAD_ERROR:case d.a.KEY_LOAD_TIMEOUT:i=t.frag.level,r=!0;break;case d.a.LEVEL_LOAD_ERROR:case d.a.LEVEL_LOAD_TIMEOUT:i=t.context.level,e=!0;break;case d.a.REMUX_ALLOC_ERROR:i=t.level,e=!0}void 0!==i&&this.recoverLevel(t,i,e,r)},e.prototype.recoverLevel=function(t,e,r,i){var a=this,n=this.hls.config,o=t.details,s=this._levels[e],d=void 0,u=void 0,f=void 0;if(s.loadError++,s.fragmentError=i,!0===r){if(!(this.levelRetryCount+1<=n.levelLoadingMaxRetry))return l.b.error("level controller, cannot recover from "+o+" error"),this.currentLevelIndex=null,this.cleanTimer(),void(t.fatal=!0);u=Math.min(Math.pow(2,this.levelRetryCount)*n.levelLoadingRetryDelay,n.levelLoadingMaxRetryTimeout),this.timer=setTimeout(function(){return a.loadLevel()},u),t.levelRetry=!0,this.levelRetryCount++,l.b.warn("level controller, "+o+", retry in "+u+" ms, current retry count is "+this.levelRetryCount)}!0!==r&&!0!==i||(d=s.url.length,d>1&&s.loadError<d?(l.b.warn("level controller, "+o+" for level "+e+": switching to redundant stream id "+s.urlId),s.urlId=(s.urlId+1)%d,s.details=void 0):-1===this.manualLevelIndex?(f=0===e?this._levels.length-1:e-1,l.b.warn("level controller, "+o+": switch to "+f),this.hls.nextAutoLevel=this.currentLevelIndex=f):!0===i&&(l.b.warn("level controller, "+o+": reload a fragment"),this.currentLevelIndex=null))},e.prototype.onFragLoaded=function(t){var e=t.frag;if(void 0!==e&&"main"===e.type){var r=this._levels[e.level];void 0!==r&&(r.fragmentError=!1,r.loadError=0,this.levelRetryCount=0)}},e.prototype.onLevelLoaded=function(t){var e=this,r=t.level;if(r===this.currentLevelIndex){var i=this._levels[r];!1===i.fragmentError&&(i.loadError=0,this.levelRetryCount=0);var a=t.details;if(a.live){var n=1e3*(a.averagetargetduration?a.averagetargetduration:a.targetduration),o=n,s=i.details;s&&a.endSN===s.endSN&&(o/=2,l.b.log("same live playlist, reload twice faster")),o-=performance.now()-t.stats.trequest,o=Math.max(n/2,Math.round(o)),l.b.log("live playlist, reload in "+Math.round(o)+" ms"),this.timer=setTimeout(function(){return e.loadLevel()},o)}else this.cleanTimer()}},e.prototype.loadLevel=function(){var t=void 0,e=void 0;null!==this.currentLevelIndex&&!0===this.canload&&void 0!==(t=this._levels[this.currentLevelIndex])&&t.url.length>0&&(e=t.urlId,this.hls.trigger(o.a.LEVEL_LOADING,{url:t.url[e],level:this.currentLevelIndex,id:e}))},f(e,[{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(t){var e=this._levels;e&&(t=Math.min(t,e.length-1),this.currentLevelIndex===t&&void 0!==e[t].details||this.setLevelInternal(t))}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(t){this.manualLevelIndex=t,void 0===this._startLevel&&(this._startLevel=t),-1!==t&&(this.level=t)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(t){this._firstLevel=t}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var t=this.hls.config.startLevel;return void 0!==t?t:this._firstLevel}return this._startLevel},set:function(t){this._startLevel=t}},{key:"nextLoadLevel",get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(t){this.level=t,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=t)}}]),e}(s.a);e.a=c},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(6),d=r(48),u=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.MEDIA_ATTACHED,o.a.MEDIA_DETACHING,o.a.FRAG_PARSING_METADATA));return n.id3Track=void 0,n.media=void 0,n}return n(e,t),e.prototype.destroy=function(){s.a.prototype.destroy.call(this)},e.prototype.onMediaAttached=function(t){this.media=t.media,this.media},e.prototype.onMediaDetaching=function(){Object(d.a)(this.id3Track),this.id3Track=void 0,this.media=void 0},e.prototype.getID3Track=function(t){for(var e=0;e<t.length;e++){var r=t[e];if("metadata"===r.kind&&"id3"===r.label)return Object(d.b)(r,this.media),r}return this.media.addTextTrack("metadata","id3")},e.prototype.onFragParsingMetadata=function(t){var e=t.frag,r=t.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var i=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,a=0;a<r.length;a++){var n=l.a.getID3Frames(r[a].data);if(n){var o=r[a].pts,s=a<r.length-1?r[a+1].pts:e.endPTS;o===s&&(s+=1e-4);for(var d=0;d<n.length;d++){var u=n[d];if(!l.a.isTimeStampFrame(u)){var f=new i(o,s,"");f.value=u,this.id3Track.addCue(f)}}}}},e}(s.a);e.a=u},function(t,e,r){"use strict";function i(t,e){var r=null;try{r=new window.Event("addtrack")}catch(t){r=document.createEvent("Event"),r.initEvent("addtrack",!1,!1)}r.track=t,e.dispatchEvent(r)}function a(t){if(t&&t.cues)for(;t.cues.length>0;)t.removeCue(t.cues[0])}e.b=i,e.a=a},function(t,e,r){"use strict";function i(){var t=Object(a.a)(),e=window.SourceBuffer||window.WebKitSourceBuffer,r=t&&"function"==typeof t.isTypeSupported&&t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),i=!e||e.prototype&&"function"==typeof e.prototype.appendBuffer&&"function"==typeof e.prototype.remove;return!!r&&!!i}e.a=i;var a=r(8)},function(t,e,r){"use strict";r.d(e,"a",function(){return g});var i=r(51),a=r(54),n=r(55),o=r(56),s=r(57),l=r(4),d=(r.n(l),r(4)),u=(r.n(d),r(4)),f=(r.n(u),r(4)),c=(r.n(f),r(4)),h=(r.n(c),r(4)),p=(r.n(h),r(4)),v=(r.n(p),r(58)),g={autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,liveDurationInfinity:!1,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:s.a,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,abrController:i.a,bufferController:a.a,capLevelController:n.a,fpsController:o.a,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,requestMediaKeySystemAccessFunc:v.a}},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(15),d=r(2),u=r(0),f=r(52),c=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),h=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.FRAG_LOADING,o.a.FRAG_LOADED,o.a.FRAG_BUFFERED,o.a.ERROR));return n.lastLoadedFragLevel=0,n._nextAutoLevel=-1,n.hls=r,n.timer=null,n._bwEstimator=null,n.onCheck=n._abandonRulesCheck.bind(n),n}return n(e,t),e.prototype.destroy=function(){this.clearTimer(),s.a.prototype.destroy.call(this)},e.prototype.onFragLoading=function(t){var e=t.frag;if("main"===e.type){if(this.timer||(this.timer=setInterval(this.onCheck,100)),!this._bwEstimator){var r=this.hls,i=t.frag.level,a=r.levels[i].details.live,n=r.config,o=void 0,s=void 0;a?(o=n.abrEwmaFastLive,s=n.abrEwmaSlowLive):(o=n.abrEwmaFastVoD,s=n.abrEwmaSlowVoD),this._bwEstimator=new f.a(r,s,o,n.abrEwmaDefaultEstimate)}this.fragCurrent=e}},e.prototype._abandonRulesCheck=function(){var t=this.hls,e=t.media,r=this.fragCurrent,i=r.loader,a=t.minAutoLevel;if(!i||i.stats&&i.stats.aborted)return u.b.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);var n=i.stats;if(e&&n&&(!e.paused&&0!==e.playbackRate||!e.readyState)&&r.autoLevel&&r.level){var s=performance.now()-n.trequest,d=Math.abs(e.playbackRate);if(s>500*r.duration/d){var f=t.levels,c=Math.max(1,n.bw?n.bw/8:1e3*n.loaded/s),h=f[r.level],p=h.realBitrate?Math.max(h.realBitrate,h.bitrate):h.bitrate,v=n.total?n.total:Math.max(n.loaded,Math.round(r.duration*p/8)),g=e.currentTime,m=(v-n.loaded)/c,y=(l.a.bufferInfo(e,g,t.config.maxBufferHole).end-g)/d;if(y<2*r.duration/d&&m>y){var b=void 0,E=void 0;for(E=r.level-1;E>a;E--){var T=f[E].realBitrate?Math.max(f[E].realBitrate,f[E].bitrate):f[E].bitrate;if((b=r.duration*T/(6.4*c))<y)break}b<m&&(u.b.warn("loading too slow, abort fragment loading and switch to level "+E+":fragLoadedDelay["+E+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+b.toFixed(1)+"<"+m.toFixed(1)+":"+y.toFixed(1)),t.nextLoadLevel=E,this._bwEstimator.sample(s,n.loaded),i.abort(),this.clearTimer(),t.trigger(o.a.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:n}))}}}},e.prototype.onFragLoaded=function(t){var e=t.frag;if("main"===e.type&&!isNaN(e.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=e.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var r=this.hls.levels[e.level],i=(r.loaded?r.loaded.bytes:0)+t.stats.loaded,a=(r.loaded?r.loaded.duration:0)+t.frag.duration;r.loaded={bytes:i,duration:a},r.realBitrate=Math.round(8*i/a)}if(t.frag.bitrateTest){var n=t.stats;n.tparsed=n.tbuffered=n.tload,this.onFragBuffered(t)}}},e.prototype.onFragBuffered=function(t){var e=t.stats,r=t.frag;if(!(!0===e.aborted||"main"!==r.type||isNaN(r.sn)||r.bitrateTest&&e.tload!==e.tbuffered)){var i=e.tparsed-e.trequest;u.b.log("latency/loading/parsing/append/kbps:"+Math.round(e.tfirst-e.trequest)+"/"+Math.round(e.tload-e.tfirst)+"/"+Math.round(e.tparsed-e.tload)+"/"+Math.round(e.tbuffered-e.tparsed)+"/"+Math.round(8*e.loaded/(e.tbuffered-e.trequest))),this._bwEstimator.sample(i,e.loaded),e.bwEstimate=this._bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=i/1e3:this.bitrateTestDelay=0}},e.prototype.onError=function(t){switch(t.details){case d.a.FRAG_LOAD_ERROR:case d.a.FRAG_LOAD_TIMEOUT:this.clearTimer()}},e.prototype.clearTimer=function(){clearInterval(this.timer),this.timer=null},e.prototype._findBestLevel=function(t,e,r,i,a,n,o,s,l){for(var d=a;d>=i;d--){var f=l[d],c=f.details,h=c?c.totalduration/c.fragments.length:e,p=!!c&&c.live,v=void 0;v=d<=t?o*r:s*r;var g=l[d].realBitrate?Math.max(l[d].realBitrate,l[d].bitrate):l[d].bitrate,m=g*h/v;if(u.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+d+"/"+Math.round(v)+"/"+g+"/"+h+"/"+n+"/"+m),v>g&&(!m||p&&!this.bitrateTestDelay||m<n))return d}return-1},c(e,[{key:"nextAutoLevel",get:function(){var t=this._nextAutoLevel,e=this._bwEstimator;if(!(-1===t||e&&e.canEstimate()))return t;var r=this._nextABRAutoLevel;return-1!==t&&(r=Math.min(t,r)),r},set:function(t){this._nextAutoLevel=t}},{key:"_nextABRAutoLevel",get:function(){var t=this.hls,e=t.maxAutoLevel,r=t.levels,i=t.config,a=t.minAutoLevel,n=t.media,o=this.lastLoadedFragLevel,s=this.fragCurrent?this.fragCurrent.duration:0,d=n?n.currentTime:0,f=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,c=this._bwEstimator?this._bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,h=(l.a.bufferInfo(n,d,i.maxBufferHole).end-d)/f,p=this._findBestLevel(o,s,c,a,e,h,i.abrBandWidthFactor,i.abrBandWidthUpFactor,r);if(p>=0)return p;u.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var v=s?Math.min(s,i.maxStarvationDelay):i.maxStarvationDelay,g=i.abrBandWidthFactor,m=i.abrBandWidthUpFactor;if(0===h){var y=this.bitrateTestDelay;if(y){v=(s?Math.min(s,i.maxLoadingDelay):i.maxLoadingDelay)-y,u.b.trace("bitrate test took "+Math.round(1e3*y)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*v)+" ms"),g=m=1}}return p=this._findBestLevel(o,s,c,a,e,h+v,g,m,r),Math.max(p,0)}}]),e}(s.a);e.a=h},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(53),n=function(){function t(e,r,n,o){i(this,t),this.hls=e,this.defaultEstimate_=o,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new a.a(r),this.fast_=new a.a(n)}return t.prototype.sample=function(t,e){t=Math.max(t,this.minDelayMs_);var r=8e3*e/t,i=t/1e3;this.fast_.sample(i,r),this.slow_.sample(i,r)},t.prototype.canEstimate=function(){var t=this.fast_;return t&&t.getTotalWeight()>=this.minWeight_},t.prototype.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},t.prototype.destroy=function(){},t}();e.a=n},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(e){i(this,t),this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=0,this.totalWeight_=0}return t.prototype.sample=function(t,e){var r=Math.pow(this.alpha_,t);this.estimate_=e*(1-r)+r*this.estimate_,this.totalWeight_+=t},t.prototype.getTotalWeight=function(){return this.totalWeight_},t.prototype.getEstimate=function(){if(this.alpha_){var t=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/t}return this.estimate_},t}();e.a=a},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(0),d=r(2),u=r(8),f=Object(u.a)(),c=function(t){function e(r){i(this,e);var n=a(this,t.call(this,r,o.a.MEDIA_ATTACHING,o.a.MEDIA_DETACHING,o.a.MANIFEST_PARSED,o.a.BUFFER_RESET,o.a.BUFFER_APPENDING,o.a.BUFFER_CODECS,o.a.BUFFER_EOS,o.a.BUFFER_FLUSHING,o.a.LEVEL_PTS_UPDATED,o.a.LEVEL_UPDATED));return n._msDuration=null,n._levelDuration=null,n._live=null,n._objectUrl=null,n.onsbue=n.onSBUpdateEnd.bind(n),n.onsbe=n.onSBUpdateError.bind(n),n.pendingTracks={},n.tracks={},n}return n(e,t),e.prototype.destroy=function(){s.a.prototype.destroy.call(this)},e.prototype.onLevelPtsUpdated=function(t){var e=t.type,r=this.tracks.audio;if("audio"===e&&r&&"audio/mpeg"===r.container){var i=this.sourceBuffer.audio;if(Math.abs(i.timestampOffset-t.start)>.1){var a=i.updating;try{i.abort()}catch(t){a=!0,l.b.warn("can not abort audio buffer: "+t)}a?this.audioTimestampOffset=t.start:(l.b.warn("change mpeg audio timestamp offset from "+i.timestampOffset+" to "+t.start),i.timestampOffset=t.start)}}},e.prototype.onManifestParsed=function(t){var e=t.audio,r=t.video||t.levels.length&&t.audio,i=0;t.altAudio&&(e||r)&&(i=(e?1:0)+(r?1:0),l.b.log(i+" sourceBuffer(s) expected")),this.sourceBufferNb=i},e.prototype.onMediaAttaching=function(t){var e=this.media=t.media;if(e){var r=this.mediaSource=new f;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),r.addEventListener("sourceopen",this.onmso),r.addEventListener("sourceended",this.onmse),r.addEventListener("sourceclose",this.onmsc),e.src=URL.createObjectURL(r),this._objectUrl=e.src}},e.prototype.onMediaDetaching=function(){l.b.log("media source detaching");var t=this.mediaSource;if(t){if("open"===t.readyState)try{t.endOfStream()}catch(t){l.b.warn("onMediaDetaching:"+t.message+" while calling endOfStream")}t.removeEventListener("sourceopen",this.onmso),t.removeEventListener("sourceended",this.onmse),t.removeEventListener("sourceclose",this.onmsc),this.media&&(URL.revokeObjectURL(this._objectUrl),this.media.src===this._objectUrl?(this.media.removeAttribute("src"),this.media.load()):l.b.warn("media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(o.a.MEDIA_DETACHED)},e.prototype.onMediaSourceOpen=function(){l.b.log("media source opened"),this.hls.trigger(o.a.MEDIA_ATTACHED,{media:this.media});var t=this.mediaSource;t&&t.removeEventListener("sourceopen",this.onmso),this.checkPendingTracks()},e.prototype.checkPendingTracks=function(){var t=this.pendingTracks,e=Object.keys(t).length;e&&(this.sourceBufferNb<=e||0===this.sourceBufferNb)&&(this.createSourceBuffers(t),this.pendingTracks={},this.doAppending())},e.prototype.onMediaSourceClose=function(){l.b.log("media source closed")},e.prototype.onMediaSourceEnded=function(){l.b.log("media source ended")},e.prototype.onSBUpdateEnd=function(){if(this.audioTimestampOffset){var t=this.sourceBuffer.audio;l.b.warn("change mpeg audio timestamp offset from "+t.timestampOffset+" to "+this.audioTimestampOffset),t.timestampOffset=this.audioTimestampOffset,delete this.audioTimestampOffset}this._needsFlush&&this.doFlush(),this._needsEos&&this.checkEos(),this.appending=!1;var e=this.parent,r=this.segments.reduce(function(t,r){return r.parent===e?t+1:t},0),i={},a=this.sourceBuffer;for(var n in a)i[n]=a[n].buffered;this.hls.trigger(o.a.BUFFER_APPENDED,{parent:e,pending:r,timeRanges:i}),this._needsFlush||this.doAppending(),this.updateMediaElementDuration()},e.prototype.onSBUpdateError=function(t){l.b.error("sourceBuffer error:",t),this.hls.trigger(o.a.ERROR,{type:d.b.MEDIA_ERROR,details:d.a.BUFFER_APPENDING_ERROR,fatal:!1})},e.prototype.onBufferReset=function(){var t=this.sourceBuffer;for(var e in t){var r=t[e];try{this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this.onsbue),r.removeEventListener("error",this.onsbe)}catch(t){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0},e.prototype.onBufferCodecs=function(t){if(0===Object.keys(this.sourceBuffer).length){for(var e in t)this.pendingTracks[e]=t[e];var r=this.mediaSource;r&&"open"===r.readyState&&this.checkPendingTracks()}},e.prototype.createSourceBuffers=function(t){var e=this.sourceBuffer,r=this.mediaSource;for(var i in t)if(!e[i]){var a=t[i],n=a.levelCodec||a.codec,s=a.container+";codecs="+n;l.b.log("creating sourceBuffer("+s+")");try{var u=e[i]=r.addSourceBuffer(s);u.addEventListener("updateend",this.onsbue),u.addEventListener("error",this.onsbe),this.tracks[i]={codec:n,container:a.container},a.buffer=u}catch(t){l.b.error("error while trying to add sourceBuffer:"+t.message),this.hls.trigger(o.a.ERROR,{type:d.b.MEDIA_ERROR,details:d.a.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:t,mimeType:s})}}this.hls.trigger(o.a.BUFFER_CREATED,{tracks:t})},e.prototype.onBufferAppending=function(t){this._needsFlush||(this.segments?this.segments.push(t):this.segments=[t],this.doAppending())},e.prototype.onBufferAppendFail=function(t){l.b.error("sourceBuffer error:",t.event),this.hls.trigger(o.a.ERROR,{type:d.b.MEDIA_ERROR,details:d.a.BUFFER_APPENDING_ERROR,fatal:!1})},e.prototype.onBufferEos=function(t){var e=this.sourceBuffer,r=t.type;for(var i in e)r&&i!==r||e[i].ended||(e[i].ended=!0,l.b.log(i+" sourceBuffer now EOS"));this.checkEos()},e.prototype.checkEos=function(){var t=this.sourceBuffer,e=this.mediaSource;if(!e||"open"!==e.readyState)return void(this._needsEos=!1);for(var r in t){var i=t[r];if(!i.ended)return;if(i.updating)return void(this._needsEos=!0)}l.b.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");try{e.endOfStream()}catch(t){l.b.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1},e.prototype.onBufferFlushing=function(t){this.flushRange.push({start:t.startOffset,end:t.endOffset,type:t.type}),this.flushBufferCounter=0,this.doFlush()},e.prototype.onLevelUpdated=function(t){var e=t.details;e.fragments.length>0&&(this._levelDuration=e.totalduration+e.fragments[0].start,this._live=e.live,this.updateMediaElementDuration())},e.prototype.updateMediaElementDuration=function(){var t=this.hls.config,e=void 0;if(null!==this._levelDuration&&this.media&&this.mediaSource&&this.sourceBuffer&&0!==this.media.readyState&&"open"===this.mediaSource.readyState){for(var r in this.sourceBuffer)if(!0===this.sourceBuffer[r].updating)return;e=this.media.duration,null===this._msDuration&&(this._msDuration=this.mediaSource.duration),!0===this._live&&!0===t.liveDurationInfinity?(l.b.log("Media Source duration is set to Infinity"),this._msDuration=this.mediaSource.duration=1/0):(this._levelDuration>this._msDuration&&this._levelDuration>e||e===1/0||isNaN(e))&&(l.b.log("Updating Media Source duration to "+this._levelDuration.toFixed(3)),this._msDuration=this.mediaSource.duration=this._levelDuration)}},e.prototype.doFlush=function(){for(;this.flushRange.length;){var t=this.flushRange[0];if(!this.flushBuffer(t.start,t.end,t.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var e=0,r=this.sourceBuffer;try{for(var i in r)e+=r[i].buffered.length}catch(t){l.b.error("error while accessing sourceBuffer.buffered")}this.appended=e,this.hls.trigger(o.a.BUFFER_FLUSHED)}},e.prototype.doAppending=function(){var t=this.hls,e=this.sourceBuffer,r=this.segments;if(Object.keys(e).length){if(this.media.error)return this.segments=[],void l.b.error("trying to append although a media error occured, flush segment and abort");if(this.appending)return;if(r&&r.length){var i=r.shift();try{var a=i.type,n=e[a];n?n.updating?r.unshift(i):(n.ended=!1,this.parent=i.parent,n.appendBuffer(i.data),this.appendError=0,this.appended++,this.appending=!0):this.onSBUpdateEnd()}catch(e){l.b.error("error while trying to append buffer:"+e.message),r.unshift(i);var s={type:d.b.MEDIA_ERROR,parent:i.parent};22!==e.code?(this.appendError?this.appendError++:this.appendError=1,s.details=d.a.BUFFER_APPEND_ERROR,this.appendError>t.config.appendErrorMaxRetry?(l.b.log("fail "+t.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),r=[],s.fatal=!0,t.trigger(o.a.ERROR,s)):(s.fatal=!1,t.trigger(o.a.ERROR,s))):(this.segments=[],s.details=d.a.BUFFER_FULL_ERROR,s.fatal=!1,t.trigger(o.a.ERROR,s))}}}},e.prototype.flushBuffer=function(t,e,r){var i=void 0,a=void 0,n=void 0,o=void 0,s=void 0,d=void 0,u=this.sourceBuffer;if(Object.keys(u).length){if(l.b.log("flushBuffer,pos/start/end: "+this.media.currentTime.toFixed(3)+"/"+t+"/"+e),this.flushBufferCounter<this.appended){for(var f in u)if(!r||f===r){if(i=u[f],i.ended=!1,i.updating)return l.b.warn("cannot flush, sb updating in progress"),!1;try{for(a=0;a<i.buffered.length;a++)if(n=i.buffered.start(a),o=i.buffered.end(a),-1!==navigator.userAgent.toLowerCase().indexOf("firefox")&&e===Number.POSITIVE_INFINITY?(s=t,d=e):(s=Math.max(n,t),d=Math.min(o,e)),Math.min(d,o)-s>.5)return this.flushBufferCounter++,l.b.log("flush "+f+" ["+s+","+d+"], of ["+n+","+o+"], pos:"+this.media.currentTime),i.remove(s,d),!1}catch(t){l.b.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")}}}else l.b.warn("abort flushing too many retries");l.b.log("buffer flushed")}return!0},e}(s.a);e.a=c},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),d=function(t){function e(r){return i(this,e),a(this,t.call(this,r,o.a.FPS_DROP_LEVEL_CAPPING,o.a.MEDIA_ATTACHING,o.a.MANIFEST_PARSED))}return n(e,t),e.prototype.destroy=function(){this.hls.config.capLevelToPlayerSize&&(this.media=this.restrictedLevels=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer)))},e.prototype.onFpsDropLevelCapping=function(t){e.isLevelAllowed(t.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(t.droppedLevel)},e.prototype.onMediaAttaching=function(t){this.media=t.media instanceof HTMLVideoElement?t.media:null},e.prototype.onManifestParsed=function(t){var e=this.hls;this.restrictedLevels=[],e.config.capLevelToPlayerSize&&(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.levels=t.levels,e.firstLevel=this.getMaxLevel(t.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},e.prototype.detectPlayerSize=function(){if(this.media){var t=this.levels?this.levels.length:0;if(t){var e=this.hls;e.autoLevelCapping=this.getMaxLevel(t-1),e.autoLevelCapping>this.autoLevelCapping&&e.streamController.nextLevelSwitch(),this.autoLevelCapping=e.autoLevelCapping}}},e.prototype.getMaxLevel=function(t){var r=this;if(!this.levels)return-1;var i=this.levels.filter(function(i,a){return e.isLevelAllowed(a,r.restrictedLevels)&&a<=t});return e.getMaxLevelByMediaSize(i,this.mediaWidth,this.mediaHeight)},e.isLevelAllowed=function(t){return-1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).indexOf(t)},e.getMaxLevelByMediaSize=function(t,e,r){if(!t||t&&!t.length)return-1;for(var i=t.length-1,a=0;a<t.length;a+=1){var n=t[a];if((n.width>=e||n.height>=r)&&function(t,e){return!e||(t.width!==e.width||t.height!==e.height)}(n,t[a+1])){i=a;break}}return i},l(e,[{key:"mediaWidth",get:function(){var t=void 0,r=this.media;return r&&(t=r.width||r.clientWidth||r.offsetWidth,t*=e.contentScaleFactor),t}},{key:"mediaHeight",get:function(){var t=void 0,r=this.media;return r&&(t=r.height||r.clientHeight||r.offsetHeight,t*=e.contentScaleFactor),t}}],[{key:"contentScaleFactor",get:function(){var t=1;try{t=window.devicePixelRatio}catch(t){}return t}}]),e}(s.a);e.a=d},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=r(1),s=r(3),l=r(0),d=function(t){function e(r){return i(this,e),a(this,t.call(this,r,o.a.MEDIA_ATTACHING))}return n(e,t),e.prototype.destroy=function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1},e.prototype.onMediaAttaching=function(t){var e=this.hls.config;if(e.capLevelOnFPSDrop){"function"==typeof(this.video=t.media instanceof HTMLVideoElement?t.media:null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),e.fpsDroppedMonitoringPeriod)}},e.prototype.checkFPS=function(t,e,r){var i=performance.now();if(e){if(this.lastTime){var a=i-this.lastTime,n=r-this.lastDroppedFrames,s=e-this.lastDecodedFrames,d=1e3*n/a,u=this.hls;if(u.trigger(o.a.FPS_DROP,{currentDropped:n,currentDecoded:s,totalDroppedFrames:r}),d>0&&n>u.config.fpsDroppedMonitoringThreshold*s){var f=u.currentLevel;l.b.warn("drop FPS ratio greater than max allowed value for currentLevel: "+f),f>0&&(-1===u.autoLevelCapping||u.autoLevelCapping>=f)&&(f-=1,u.trigger(o.a.FPS_DROP_LEVEL_CAPPING,{level:f,droppedLevel:u.currentLevel}),u.autoLevelCapping=f,u.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=e}},e.prototype.checkFPSInterval=function(){var t=this.video;if(t)if(this.isVideoPlaybackQualityAvailable){var e=t.getVideoPlaybackQuality();this.checkFPS(t,e.totalVideoFrames,e.droppedVideoFrames)}else this.checkFPS(t,t.webkitDecodedFrameCount,t.webkitDroppedFrameCount)},e}(s.a);e.a=d},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=r(0),n=function(){function t(e){i(this,t),e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}return t.prototype.destroy=function(){this.abort(),this.loader=null},t.prototype.abort=function(){var t=this.loader;t&&4!==t.readyState&&(this.stats.aborted=!0,t.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null},t.prototype.load=function(t,e,r){this.context=t,this.config=e,this.callbacks=r,this.stats={trequest:performance.now(),retry:0},this.retryDelay=e.retryDelay,this.loadInternal()},t.prototype.loadInternal=function(){var t=void 0,e=this.context;t=this.loader=new XMLHttpRequest;var r=this.stats;r.tfirst=0,r.loaded=0;var i=this.xhrSetup;try{if(i)try{i(t,e.url)}catch(r){t.open("GET",e.url,!0),i(t,e.url)}t.readyState||t.open("GET",e.url,!0)}catch(r){return void this.callbacks.onError({code:t.status,text:r.message},e,t)}e.rangeEnd&&t.setRequestHeader("Range","bytes="+e.rangeStart+"-"+(e.rangeEnd-1)),t.onreadystatechange=this.readystatechange.bind(this),t.onprogress=this.loadprogress.bind(this),t.responseType=e.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),t.send()},t.prototype.readystatechange=function(t){var e=t.currentTarget,r=e.readyState,i=this.stats,n=this.context,o=this.config;if(!i.aborted&&r>=2)if(window.clearTimeout(this.requestTimeout),0===i.tfirst&&(i.tfirst=Math.max(performance.now(),i.trequest)),4===r){var s=e.status;if(s>=200&&s<300){i.tload=Math.max(i.tfirst,performance.now());var l=void 0,d=void 0;"arraybuffer"===n.responseType?(l=e.response,d=l.byteLength):(l=e.responseText,d=l.length),i.loaded=i.total=d;var u={url:e.responseURL,data:l};this.callbacks.onSuccess(u,i,n,e)}else i.retry>=o.maxRetry||s>=400&&s<499?(a.b.error(s+" while loading "+n.url),this.callbacks.onError({code:s,text:e.statusText},n,e)):(a.b.warn(s+" while loading "+n.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,o.maxRetryDelay),i.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),o.timeout)},t.prototype.loadtimeout=function(){a.b.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context,null)},t.prototype.loadprogress=function(t){var e=t.currentTarget,r=this.stats;r.loaded=t.loaded,t.lengthComputable&&(r.total=t.total);var i=this.callbacks.onProgress;i&&i(r,this.context,null,e)},t}();e.a=n},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var i=function(){return window.navigator&&window.navigator.requestMediaKeySystemAccess?window.navigator.requestMediaKeySystemAccess.bind(window.navigator):null}()},function(t,e){/*! http://mths.be/endswith v0.2.0 by @mathias */
String.prototype.endsWith||function(){"use strict";var t=function(){try{var t={},e=Object.defineProperty,r=e(t,t,t)&&e}catch(t){}return r}(),e={}.toString,r=function(t){if(null==this)throw TypeError();var r=String(this);if(t&&"[object RegExp]"==e.call(t))throw TypeError();var i=r.length,a=String(t),n=a.length,o=i;if(arguments.length>1){var s=arguments[1];void 0!==s&&(o=s?Number(s):0)!=o&&(o=0)}var l=Math.min(Math.max(o,0),i),d=l-n;if(d<0)return!1;for(var u=-1;++u<n;)if(r.charCodeAt(d+u)!=a.charCodeAt(u))return!1;return!0};t?t(String.prototype,"endsWith",{value:r,configurable:!0,writable:!0}):String.prototype.endsWith=r}()}]).default});
//# sourceMappingURL=hls.light.min.js.map

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _playback = __webpack_require__(12);

var _playback2 = _interopRequireDefault(_playback);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

__webpack_require__(173);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTMLImg = function (_Playback) {
  (0, _inherits3.default)(HTMLImg, _Playback);

  HTMLImg.prototype.getPlaybackType = function getPlaybackType() {
    return _playback2.default.NO_OP;
  };

  (0, _createClass3.default)(HTMLImg, [{
    key: 'name',
    get: function get() {
      return 'html_img';
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'img';
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'data-html-img': ''
      };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'load': '_onLoad',
        'abort': '_onError',
        'error': '_onError'
      };
    }
  }]);

  function HTMLImg(params) {
    (0, _classCallCheck3.default)(this, HTMLImg);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Playback.call(this, params));

    _this.el.src = params.src;
    return _this;
  }

  HTMLImg.prototype.render = function render() {
    this.trigger(_events2.default.PLAYBACK_READY, this.name);
    return this;
  };

  HTMLImg.prototype._onLoad = function _onLoad() {
    this.trigger(_events2.default.PLAYBACK_ENDED, this.name);
  };

  HTMLImg.prototype._onError = function _onError(evt) {
    var m = evt.type === 'error' ? 'load error' : 'loading aborted';
    this.trigger(_events2.default.PLAYBACK_ERROR, { message: m }, this.name);
  };

  return HTMLImg;
}(_playback2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = HTMLImg;


HTMLImg.canPlay = function (resource) {
  return (/\.(png|jpg|jpeg|gif|bmp|tiff|pgm|pnm|webp)(|\?.*)$/i.test(resource)
  );
};
module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(174);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./style.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "[data-html-img] {\n  max-width: 100%;\n  max-height: 100%; }\n", ""]);

// exports


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _playback = __webpack_require__(12);

var _playback2 = _interopRequireDefault(_playback);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _error = __webpack_require__(176);

var _error2 = _interopRequireDefault(_error);

__webpack_require__(177);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoOp = function (_Playback) {
  (0, _inherits3.default)(NoOp, _Playback);
  (0, _createClass3.default)(NoOp, [{
    key: 'name',
    get: function get() {
      return 'no_op';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_error2.default);
    }
  }, {
    key: 'attributes',
    get: function get() {
      return { 'data-no-op': '' };
    }
  }]);

  function NoOp() {
    (0, _classCallCheck3.default)(this, NoOp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Playback.call.apply(_Playback, [this].concat(args)));

    _this._noiseFrameNum = -1;
    return _this;
  }

  NoOp.prototype.render = function render() {
    var playbackNotSupported = this.options.playbackNotSupportedMessage || this.i18n.t('playback_not_supported');
    this.$el.html(this.template({ message: playbackNotSupported }));
    this.trigger(_events2.default.PLAYBACK_READY, this.name);
    var showForNoOp = !!(this.options.poster && this.options.poster.showForNoOp);
    if (this.options.autoPlay || !showForNoOp) this._animate();

    return this;
  };

  NoOp.prototype._noise = function _noise() {
    this._noiseFrameNum = (this._noiseFrameNum + 1) % 5;
    if (this._noiseFrameNum) {
      // only update noise every 5 frames to save cpu
      return;
    }

    var idata = this.context.createImageData(this.context.canvas.width, this.context.canvas.height);
    var buffer32 = void 0;
    try {
      buffer32 = new Uint32Array(idata.data.buffer);
    } catch (err) {
      buffer32 = new Uint32Array(this.context.canvas.width * this.context.canvas.height * 4);
      var data = idata.data;
      for (var i = 0; i < data.length; i++) {
        buffer32[i] = data[i];
      }
    }

    var len = buffer32.length,
        m = Math.random() * 6 + 4;
    var run = 0,
        color = 0;
    for (var _i = 0; _i < len;) {
      if (run < 0) {
        run = m * Math.random();
        var p = Math.pow(Math.random(), 0.4);
        color = 255 * p << 24;
      }
      run -= 1;
      buffer32[_i++] = color;
    }
    this.context.putImageData(idata, 0, 0);
  };

  NoOp.prototype._loop = function _loop() {
    var _this2 = this;

    if (this._stop) return;

    this._noise();
    this._animationHandle = (0, _utils.requestAnimationFrame)(function () {
      return _this2._loop();
    });
  };

  NoOp.prototype.destroy = function destroy() {
    if (this._animationHandle) {
      (0, _utils.cancelAnimationFrame)(this._animationHandle);
      this._stop = true;
    }
  };

  NoOp.prototype._animate = function _animate() {
    this.canvas = this.$el.find('canvas[data-no-op-canvas]')[0];
    this.context = this.canvas.getContext('2d');
    this._loop();
  };

  return NoOp;
}(_playback2.default);

exports.default = NoOp;


NoOp.canPlay = function (source) {
  // eslint-disable-line no-unused-vars
  return true;
};
module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = "<canvas data-no-op-canvas></canvas>\n<p data-no-op-msg><%=message%><p>\n";

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(178);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./style.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "[data-no-op] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n[data-no-op] p[data-no-op-msg] {\n  position: absolute;\n  text-align: center;\n  font-size: 25px;\n  left: 0;\n  right: 0;\n  color: white;\n  padding: 10px;\n  /* center vertically */\n  top: 50%;\n  transform: translateY(-50%);\n  max-height: 100%;\n  overflow: auto; }\n\n[data-no-op] canvas[data-no-op-canvas] {\n  background-color: #777;\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ui_container_plugin = __webpack_require__(42);

var _ui_container_plugin2 = _interopRequireDefault(_ui_container_plugin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _spinner = __webpack_require__(180);

var _spinner2 = _interopRequireDefault(_spinner);

__webpack_require__(181);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpinnerThreeBouncePlugin = function (_UIContainerPlugin) {
  (0, _inherits3.default)(SpinnerThreeBouncePlugin, _UIContainerPlugin);
  (0, _createClass3.default)(SpinnerThreeBouncePlugin, [{
    key: 'name',
    get: function get() {
      return 'spinner';
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'data-spinner': '',
        'class': 'spinner-three-bounce'
      };
    }
  }]);

  function SpinnerThreeBouncePlugin(container) {
    (0, _classCallCheck3.default)(this, SpinnerThreeBouncePlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIContainerPlugin.call(this, container));

    _this.template = (0, _template2.default)(_spinner2.default);
    _this.showTimeout = null;
    _this.listenTo(_this.container, _events2.default.CONTAINER_STATE_BUFFERING, _this.onBuffering);
    _this.listenTo(_this.container, _events2.default.CONTAINER_STATE_BUFFERFULL, _this.onBufferFull);
    _this.listenTo(_this.container, _events2.default.CONTAINER_STOP, _this.onStop);
    _this.listenTo(_this.container, _events2.default.CONTAINER_ENDED, _this.onStop);
    _this.listenTo(_this.container, _events2.default.CONTAINER_ERROR, _this.onStop);
    _this.render();
    return _this;
  }

  SpinnerThreeBouncePlugin.prototype.onBuffering = function onBuffering() {
    this.show();
  };

  SpinnerThreeBouncePlugin.prototype.onBufferFull = function onBufferFull() {
    this.hide();
  };

  SpinnerThreeBouncePlugin.prototype.onStop = function onStop() {
    this.hide();
  };

  SpinnerThreeBouncePlugin.prototype.show = function show() {
    var _this2 = this;

    if (this.showTimeout === null) this.showTimeout = setTimeout(function () {
      return _this2.$el.show();
    }, 300);
  };

  SpinnerThreeBouncePlugin.prototype.hide = function hide() {
    if (this.showTimeout !== null) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
    this.$el.hide();
  };

  SpinnerThreeBouncePlugin.prototype.render = function render() {
    this.$el.html(this.template());
    this.container.$el.append(this.$el);
    this.$el.hide();
    if (this.container.buffering) this.onBuffering();

    return this;
  };

  return SpinnerThreeBouncePlugin;
}(_ui_container_plugin2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = SpinnerThreeBouncePlugin;
module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = "<div data-bounce1></div><div data-bounce2></div><div data-bounce3></div>\n";

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(182);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./spinner.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./spinner.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".spinner-three-bounce[data-spinner] {\n  position: absolute;\n  margin: 0 auto;\n  width: 70px;\n  text-align: center;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  /* center vertically */\n  top: 50%;\n  transform: translateY(-50%); }\n  .spinner-three-bounce[data-spinner] > div {\n    width: 18px;\n    height: 18px;\n    background-color: #FFFFFF;\n    border-radius: 100%;\n    display: inline-block;\n    animation: bouncedelay 1.4s infinite ease-in-out;\n    /* Prevent first frame from flickering when animation starts */\n    animation-fill-mode: both; }\n  .spinner-three-bounce[data-spinner] [data-bounce1] {\n    animation-delay: -0.32s; }\n  .spinner-three-bounce[data-spinner] [data-bounce2] {\n    animation-delay: -0.16s; }\n\n@keyframes bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0); }\n  40% {\n    transform: scale(1); } }\n", ""]);

// exports


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stats = __webpack_require__(184);

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _stats2.default;
module.exports = exports['default'];

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _container_plugin = __webpack_require__(43);

var _container_plugin2 = _interopRequireDefault(_container_plugin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatsPlugin = function (_ContainerPlugin) {
  (0, _inherits3.default)(StatsPlugin, _ContainerPlugin);
  (0, _createClass3.default)(StatsPlugin, [{
    key: 'name',
    get: function get() {
      return 'stats';
    }
  }]);

  function StatsPlugin(container) {
    (0, _classCallCheck3.default)(this, StatsPlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ContainerPlugin.call(this, container));

    _this.setInitialAttrs();
    _this.reportInterval = _this.options.reportInterval || 5000;
    _this.state = 'IDLE';
    return _this;
  }

  StatsPlugin.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.container.playback, _events2.default.PLAYBACK_PLAY, this.onPlay);
    this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.onStop);
    this.listenTo(this.container, _events2.default.CONTAINER_ENDED, this.onStop);
    this.listenTo(this.container, _events2.default.CONTAINER_DESTROYED, this.onStop);
    this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERING, this.onBuffering);
    this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERFULL, this.onBufferFull);
    this.listenTo(this.container, _events2.default.CONTAINER_STATS_ADD, this.onStatsAdd);
    this.listenTo(this.container, _events2.default.CONTAINER_BITRATE, this.onStatsAdd);
    this.listenTo(this.container.playback, _events2.default.PLAYBACK_STATS_ADD, this.onStatsAdd);
  };

  StatsPlugin.prototype.setInitialAttrs = function setInitialAttrs() {
    this.firstPlay = true;
    this.startupTime = 0;
    this.rebufferingTime = 0;
    this.watchingTime = 0;
    this.rebuffers = 0;
    this.externalMetrics = {};
  };

  StatsPlugin.prototype.onPlay = function onPlay() {
    this.state = 'PLAYING';
    this.watchingTimeInit = Date.now();
    if (!this.intervalId) this.intervalId = setInterval(this.report.bind(this), this.reportInterval);
  };

  StatsPlugin.prototype.onStop = function onStop() {
    clearInterval(this.intervalId);
    this.report();
    this.intervalId = undefined;
    this.state = 'STOPPED';
  };

  StatsPlugin.prototype.onBuffering = function onBuffering() {
    if (this.firstPlay) this.startupTimeInit = Date.now();else this.rebufferingTimeInit = Date.now();

    this.state = 'BUFFERING';
    this.rebuffers++;
  };

  StatsPlugin.prototype.onBufferFull = function onBufferFull() {
    if (this.firstPlay && this.startupTimeInit) {
      this.firstPlay = false;
      this.startupTime = Date.now() - this.startupTimeInit;
      this.watchingTimeInit = Date.now();
    } else if (this.rebufferingTimeInit) {
      this.rebufferingTime += this.getRebufferingTime();
    }

    this.rebufferingTimeInit = undefined;
    this.state = 'PLAYING';
  };

  StatsPlugin.prototype.getRebufferingTime = function getRebufferingTime() {
    return Date.now() - this.rebufferingTimeInit;
  };

  StatsPlugin.prototype.getWatchingTime = function getWatchingTime() {
    var totalTime = Date.now() - this.watchingTimeInit;
    return totalTime - this.rebufferingTime;
  };

  StatsPlugin.prototype.isRebuffering = function isRebuffering() {
    return !!this.rebufferingTimeInit;
  };

  StatsPlugin.prototype.onStatsAdd = function onStatsAdd(metric) {
    _clapprZepto2.default.extend(this.externalMetrics, metric);
  };

  StatsPlugin.prototype.getStats = function getStats() {
    var metrics = {
      startupTime: this.startupTime,
      rebuffers: this.rebuffers,
      rebufferingTime: this.isRebuffering() ? this.rebufferingTime + this.getRebufferingTime() : this.rebufferingTime,
      watchingTime: this.isRebuffering() ? this.getWatchingTime() - this.getRebufferingTime() : this.getWatchingTime()
    };
    _clapprZepto2.default.extend(metrics, this.externalMetrics);
    return metrics;
  };

  StatsPlugin.prototype.report = function report() {
    this.container.statsReport(this.getStats());
  };

  return StatsPlugin;
}(_container_plugin2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = StatsPlugin;
module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ui_container_plugin = __webpack_require__(42);

var _ui_container_plugin2 = _interopRequireDefault(_ui_container_plugin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _watermark = __webpack_require__(186);

var _watermark2 = _interopRequireDefault(_watermark);

__webpack_require__(187);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaterMarkPlugin = function (_UIContainerPlugin) {
  (0, _inherits3.default)(WaterMarkPlugin, _UIContainerPlugin);
  (0, _createClass3.default)(WaterMarkPlugin, [{
    key: 'name',
    get: function get() {
      return 'watermark';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_watermark2.default);
    }
  }]);

  function WaterMarkPlugin(container) {
    (0, _classCallCheck3.default)(this, WaterMarkPlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIContainerPlugin.call(this, container));

    _this.configure();
    return _this;
  }

  WaterMarkPlugin.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.container, _events2.default.CONTAINER_PLAY, this.onPlay);
    this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.onStop);
    this.listenTo(this.container, _events2.default.CONTAINER_OPTIONS_CHANGE, this.configure);
  };

  WaterMarkPlugin.prototype.configure = function configure() {
    this.position = this.options.position || 'bottom-right';
    if (this.options.watermark) {
      this.imageUrl = this.options.watermark;
      this.imageLink = this.options.watermarkLink;
      this.render();
    } else {
      this.$el.remove();
    }
  };

  WaterMarkPlugin.prototype.onPlay = function onPlay() {
    if (!this.hidden) this.$el.show();
  };

  WaterMarkPlugin.prototype.onStop = function onStop() {
    this.$el.hide();
  };

  WaterMarkPlugin.prototype.render = function render() {
    this.$el.hide();
    var templateOptions = { position: this.position, imageUrl: this.imageUrl, imageLink: this.imageLink };
    this.$el.html(this.template(templateOptions));
    this.container.$el.append(this.$el);
    return this;
  };

  return WaterMarkPlugin;
}(_ui_container_plugin2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = WaterMarkPlugin;
module.exports = exports['default'];

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = "<div data-watermark data-watermark-<%=position %>>\n<% if(typeof imageLink !== 'undefined') { %>\n<a target=_blank href=\"<%= imageLink %>\">\n<% } %>\n<img src=\"<%= imageUrl %>\">\n<% if(typeof imageLink !== 'undefined') { %>\n</a>\n<% } %>\n</div>\n";

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(188);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./watermark.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./watermark.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "[data-watermark] {\n  position: absolute;\n  min-width: 70px;\n  max-width: 200px;\n  width: 12%;\n  text-align: center;\n  z-index: 10; }\n\n[data-watermark] a {\n  outline: none;\n  cursor: pointer; }\n\n[data-watermark] img {\n  max-width: 100%; }\n\n[data-watermark-bottom-left] {\n  bottom: 10px;\n  left: 10px; }\n\n[data-watermark-bottom-right] {\n  bottom: 10px;\n  right: 42px; }\n\n[data-watermark-top-left] {\n  top: 10px;\n  left: 10px; }\n\n[data-watermark-top-right] {\n  top: 10px;\n  right: 37px; }\n", ""]);

// exports


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ui_container_plugin = __webpack_require__(42);

var _ui_container_plugin2 = _interopRequireDefault(_ui_container_plugin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _playback = __webpack_require__(12);

var _playback2 = _interopRequireDefault(_playback);

var _error = __webpack_require__(75);

var _error2 = _interopRequireDefault(_error);

var _poster = __webpack_require__(190);

var _poster2 = _interopRequireDefault(_poster);

var _play = __webpack_require__(88);

var _play2 = _interopRequireDefault(_play);

__webpack_require__(191);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var PosterPlugin = function (_UIContainerPlugin) {
  (0, _inherits3.default)(PosterPlugin, _UIContainerPlugin);
  (0, _createClass3.default)(PosterPlugin, [{
    key: 'name',
    get: function get() {
      return 'poster';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_poster2.default);
    }
  }, {
    key: 'shouldRender',
    get: function get() {
      var showForNoOp = !!(this.options.poster && this.options.poster.showForNoOp);
      return this.container.playback.name !== 'html_img' && (this.container.playback.getPlaybackType() !== _playback2.default.NO_OP || showForNoOp);
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'player-poster',
        'data-poster': ''
      };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click': 'clicked'
      };
    }
  }, {
    key: 'showOnVideoEnd',
    get: function get() {
      return !this.options.poster || this.options.poster.showOnVideoEnd || this.options.poster.showOnVideoEnd === undefined;
    }
  }]);

  function PosterPlugin(container) {
    (0, _classCallCheck3.default)(this, PosterPlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIContainerPlugin.call(this, container));

    _this.hasStartedPlaying = false;
    _this.playRequested = false;
    _this.render();
    process.nextTick(function () {
      return _this.update();
    });
    return _this;
  }

  PosterPlugin.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.onStop);
    this.listenTo(this.container, _events2.default.CONTAINER_PLAY, this.onPlay);
    this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERING, this.update);
    this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERFULL, this.update);
    this.listenTo(this.container, _events2.default.CONTAINER_OPTIONS_CHANGE, this.render);
    this.listenTo(this.container, _events2.default.CONTAINER_ERROR, this.onError);
    this.showOnVideoEnd && this.listenTo(this.container, _events2.default.CONTAINER_ENDED, this.onStop);
  };

  PosterPlugin.prototype.onError = function onError(error) {
    this.hasFatalError = error.level === _error2.default.Levels.FATAL;

    if (this.hasFatalError) {
      this.hasStartedPlaying = false;
      this.playRequested = false;
      this.showPlayButton();
    }
  };

  PosterPlugin.prototype.onPlay = function onPlay() {
    this.hasStartedPlaying = true;
    this.update();
  };

  PosterPlugin.prototype.onStop = function onStop() {
    this.hasStartedPlaying = false;
    this.playRequested = false;
    this.update();
  };

  PosterPlugin.prototype.updatePlayButton = function updatePlayButton(show) {
    if (show && (!this.options.chromeless || this.options.allowUserInteraction)) this.showPlayButton();else this.hidePlayButton();
  };

  PosterPlugin.prototype.showPlayButton = function showPlayButton() {
    if (this.hasFatalError && !this.options.disableErrorScreen) return;

    this.$playButton.show();
    this.$el.addClass('clickable');
  };

  PosterPlugin.prototype.hidePlayButton = function hidePlayButton() {
    this.$playButton.hide();
    this.$el.removeClass('clickable');
  };

  PosterPlugin.prototype.clicked = function clicked() {
    if (!this.options.chromeless || this.options.allowUserInteraction) {
      this.playRequested = true;
      this.update();
      this.container.play();
    }
    return false;
  };

  PosterPlugin.prototype.shouldHideOnPlay = function shouldHideOnPlay() {
    // Audio broadcasts should keep the poster up; video should hide poster while playing.
    return !this.container.playback.isAudioOnly;
  };

  PosterPlugin.prototype.update = function update() {
    if (!this.shouldRender) return;

    var showPlayButton = !this.playRequested && !this.hasStartedPlaying && !this.container.buffering;
    this.updatePlayButton(showPlayButton);
    this.updatePoster();
  };

  PosterPlugin.prototype.updatePoster = function updatePoster() {
    if (!this.hasStartedPlaying) this.showPoster();else this.hidePoster();
  };

  PosterPlugin.prototype.showPoster = function showPoster() {
    this.container.disableMediaControl();
    this.$el.show();
  };

  PosterPlugin.prototype.hidePoster = function hidePoster() {
    this.container.enableMediaControl();
    if (this.shouldHideOnPlay()) this.$el.hide();
  };

  PosterPlugin.prototype.render = function render() {
    if (!this.shouldRender) return;

    this.$el.html(this.template());

    var isRegularPoster = this.options.poster && this.options.poster.custom === undefined;

    if (isRegularPoster) {
      var posterUrl = this.options.poster.url || this.options.poster;
      this.$el.css({ 'background-image': 'url(' + posterUrl + ')' });
    } else if (this.options.poster) {
      this.$el.css({ 'background': this.options.poster.custom });
    }

    this.container.$el.append(this.el);
    this.$playWrapper = this.$el.find('.play-wrapper');
    this.$playWrapper.append(_play2.default);
    this.$playButton = this.$playWrapper.find('svg');
    this.$playButton.addClass('poster-icon');
    this.$playButton.attr('data-poster', '');

    var buttonsColor = this.options.mediacontrol && this.options.mediacontrol.buttons;
    if (buttonsColor) this.$el.find('svg path').css('fill', buttonsColor);

    if (this.options.mediacontrol && this.options.mediacontrol.buttons) {
      buttonsColor = this.options.mediacontrol.buttons;
      this.$playButton.css('color', buttonsColor);
    }
    this.update();
    return this;
  };

  return PosterPlugin;
}(_ui_container_plugin2.default);

exports.default = PosterPlugin;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)))

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = "<div class=\"play-wrapper\" data-poster></div>\n";

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(192);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./poster.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./poster.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".player-poster[data-poster] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  background-color: #000;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%; }\n  .player-poster[data-poster].clickable {\n    cursor: pointer; }\n  .player-poster[data-poster]:hover .play-wrapper[data-poster] {\n    opacity: 1; }\n  .player-poster[data-poster] .play-wrapper[data-poster] {\n    width: 100%;\n    height: 25%;\n    margin: 0 auto;\n    opacity: 0.75;\n    transition: opacity 0.1s ease; }\n    .player-poster[data-poster] .play-wrapper[data-poster] svg {\n      height: 100%; }\n      .player-poster[data-poster] .play-wrapper[data-poster] svg path {\n        fill: #fff; }\n", ""]);

// exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _google_analytics = __webpack_require__(194);

var _google_analytics2 = _interopRequireDefault(_google_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _google_analytics2.default;
module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _container_plugin = __webpack_require__(43);

var _container_plugin2 = _interopRequireDefault(_container_plugin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var GoogleAnalytics = function (_ContainerPlugin) {
  (0, _inherits3.default)(GoogleAnalytics, _ContainerPlugin);
  (0, _createClass3.default)(GoogleAnalytics, [{
    key: 'name',
    get: function get() {
      return 'google_analytics';
    }
  }]);

  function GoogleAnalytics(container) {
    (0, _classCallCheck3.default)(this, GoogleAnalytics);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ContainerPlugin.call(this, container));

    if (_this.container.options.gaAccount) {
      _this.account = _this.container.options.gaAccount;
      _this.trackerName = _this.container.options.gaTrackerName ? _this.container.options.gaTrackerName + '.' : 'Clappr.';
      _this.domainName = _this.container.options.gaDomainName;
      _this.currentHDState = undefined;
      _this.embedScript();
    }
    return _this;
  }

  GoogleAnalytics.prototype.embedScript = function embedScript() {
    var _this2 = this;

    if (!window._gat) {
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('async', 'async');
      script.setAttribute('src', '//www.google-analytics.com/ga.js');
      script.onload = function () {
        return _this2.addEventListeners();
      };
      document.body.appendChild(script);
    } else {
      this.addEventListeners();
    }
  };

  GoogleAnalytics.prototype.addEventListeners = function addEventListeners() {
    var _this3 = this;

    if (this.container) {
      this.listenTo(this.container, _events2.default.CONTAINER_READY, this.onReady);
      this.listenTo(this.container, _events2.default.CONTAINER_PLAY, this.onPlay);
      this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.onStop);
      this.listenTo(this.container, _events2.default.CONTAINER_PAUSE, this.onPause);
      this.listenTo(this.container, _events2.default.CONTAINER_ENDED, this.onEnded);
      this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERING, this.onBuffering);
      this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERFULL, this.onBufferFull);
      this.listenTo(this.container, _events2.default.CONTAINER_ERROR, this.onError);
      this.listenTo(this.container, _events2.default.CONTAINER_PLAYBACKSTATE, this.onPlaybackChanged);
      this.listenTo(this.container, _events2.default.CONTAINER_VOLUME, function (event) {
        return _this3.onVolumeChanged(event);
      });
      this.listenTo(this.container, _events2.default.CONTAINER_SEEK, function (event) {
        return _this3.onSeek(event);
      });
      this.listenTo(this.container, _events2.default.CONTAINER_FULL_SCREEN, this.onFullscreen);
      this.listenTo(this.container, _events2.default.CONTAINER_HIGHDEFINITIONUPDATE, this.onHD);
      this.listenTo(this.container, _events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.onDVR);
    }
    _gaq.push([this.trackerName + '_setAccount', this.account]);
    if (this.domainName) _gaq.push([this.trackerName + '_setDomainName', this.domainName]);
  };

  GoogleAnalytics.prototype.onReady = function onReady() {
    this.push(['Video', 'Playback', this.container.playback.name]);
  };

  GoogleAnalytics.prototype.onPlay = function onPlay() {
    this.push(['Video', 'Play', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onStop = function onStop() {
    this.push(['Video', 'Stop', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onEnded = function onEnded() {
    this.push(['Video', 'Ended', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onBuffering = function onBuffering() {
    this.push(['Video', 'Buffering', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onBufferFull = function onBufferFull() {
    this.push(['Video', 'Bufferfull', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onError = function onError() {
    this.push(['Video', 'Error', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onHD = function onHD(isHD) {
    var status = isHD ? 'ON' : 'OFF';
    if (status !== this.currentHDState) {
      this.currentHDState = status;
      this.push(['Video', 'HD - ' + status, this.container.playback.src]);
    }
  };

  GoogleAnalytics.prototype.onPlaybackChanged = function onPlaybackChanged(playbackState) {
    if (playbackState.type !== null) this.push(['Video', 'Playback Type - ' + playbackState.type, this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onDVR = function onDVR(dvrInUse) {
    var status = dvrInUse ? 'ON' : 'OFF';
    this.push(['Interaction', 'DVR - ' + status, this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onPause = function onPause() {
    this.push(['Video', 'Pause', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onSeek = function onSeek() {
    this.push(['Video', 'Seek', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onVolumeChanged = function onVolumeChanged() {
    this.push(['Interaction', 'Volume', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onFullscreen = function onFullscreen() {
    this.push(['Interaction', 'Fullscreen', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.push = function push(array) {
    var res = [this.trackerName + '_trackEvent'].concat(array);
    _gaq.push(res);
  };

  return GoogleAnalytics;
}(_container_plugin2.default);

exports.default = GoogleAnalytics;
module.exports = exports['default'];

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _container_plugin = __webpack_require__(43);

var _container_plugin2 = _interopRequireDefault(_container_plugin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(12);

var _playback2 = _interopRequireDefault(_playback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClickToPausePlugin = function (_ContainerPlugin) {
  (0, _inherits3.default)(ClickToPausePlugin, _ContainerPlugin);
  (0, _createClass3.default)(ClickToPausePlugin, [{
    key: 'name',
    get: function get() {
      return 'click_to_pause';
    }
  }]);

  function ClickToPausePlugin(container) {
    (0, _classCallCheck3.default)(this, ClickToPausePlugin);
    return (0, _possibleConstructorReturn3.default)(this, _ContainerPlugin.call(this, container));
  }

  ClickToPausePlugin.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.container, _events2.default.CONTAINER_CLICK, this.click);
    this.listenTo(this.container, _events2.default.CONTAINER_SETTINGSUPDATE, this.settingsUpdate);
  };

  ClickToPausePlugin.prototype.click = function click() {
    var _this2 = this;

    if (this.container.getPlaybackType() !== _playback2.default.LIVE || this.container.isDvrEnabled()) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
        return;
      }
      this.timer = setTimeout(function () {
        clearTimeout(_this2.timer);
        _this2.timer = null;
        if (_this2.container.isPlaying()) _this2.container.pause();else _this2.container.play();
      }, 300);
    }
  };

  ClickToPausePlugin.prototype.settingsUpdate = function settingsUpdate() {
    var pointerEnabled = this.container.getPlaybackType() !== _playback2.default.LIVE || this.container.isDvrEnabled();
    if (pointerEnabled === this.pointerEnabled) return;

    var method = pointerEnabled ? 'addClass' : 'removeClass';
    this.container.$el[method]('pointer-enabled');
    this.pointerEnabled = pointerEnabled;
  };

  return ClickToPausePlugin;
}(_container_plugin2.default); //Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = ClickToPausePlugin;
module.exports = exports['default'];

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ui_core_plugin = __webpack_require__(33);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _playback = __webpack_require__(12);

var _playback2 = _interopRequireDefault(_playback);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _index = __webpack_require__(197);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(198);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DVRControls = function (_UICorePlugin) {
  (0, _inherits3.default)(DVRControls, _UICorePlugin);
  (0, _createClass3.default)(DVRControls, [{
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_index2.default);
    }
  }, {
    key: 'name',
    get: function get() {
      return 'dvr_controls';
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click .live-button': 'click'
      };
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'dvr-controls',
        'data-dvr-controls': ''
      };
    }
  }]);

  function DVRControls(core) {
    (0, _classCallCheck3.default)(this, DVRControls);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UICorePlugin.call(this, core));

    _this.settingsUpdate();
    return _this;
  }

  DVRControls.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged);
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_RENDERED, this.settingsUpdate);
    this.listenTo(this.core, _events2.default.CORE_OPTIONS_CHANGE, this.render);
    if (this.core.getCurrentContainer()) {
      this.listenToOnce(this.core.getCurrentContainer(), _events2.default.CONTAINER_TIMEUPDATE, this.render);
      this.listenTo(this.core.getCurrentContainer(), _events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.dvrChanged);
    }
  };

  DVRControls.prototype.containerChanged = function containerChanged() {
    this.stopListening();
    this.bindEvents();
  };

  DVRControls.prototype.dvrChanged = function dvrChanged(dvrEnabled) {
    if (this.core.getPlaybackType() !== _playback2.default.LIVE) return;
    this.settingsUpdate();
    this.core.mediaControl.$el.addClass('live');
    if (dvrEnabled) {
      this.core.mediaControl.$el.addClass('dvr');
      this.core.mediaControl.$el.find('.media-control-indicator[data-position], .media-control-indicator[data-duration]').hide();
    } else {
      this.core.mediaControl.$el.removeClass('dvr');
    }
  };

  DVRControls.prototype.click = function click() {
    var mediaControl = this.core.mediaControl;
    var container = mediaControl.container;
    if (!container.isPlaying()) container.play();

    if (mediaControl.$el.hasClass('dvr')) container.seek(container.getDuration());
  };

  DVRControls.prototype.settingsUpdate = function settingsUpdate() {
    var _this2 = this;

    this.stopListening();
    this.core.mediaControl.$el.removeClass('live');
    if (this.shouldRender()) {
      this.render();
      this.$el.click(function () {
        return _this2.click();
      });
    }
    this.bindEvents();
  };

  DVRControls.prototype.shouldRender = function shouldRender() {
    var useDvrControls = this.core.options.useDvrControls === undefined || !!this.core.options.useDvrControls;
    return useDvrControls && this.core.getPlaybackType() === _playback2.default.LIVE;
  };

  DVRControls.prototype.render = function render() {
    this.$el.html(this.template({
      live: this.core.i18n.t('live'),
      backToLive: this.core.i18n.t('back_to_live')
    }));
    if (this.shouldRender()) {
      this.core.mediaControl.$el.addClass('live');
      this.core.mediaControl.$('.media-control-left-panel[data-media-control]').append(this.$el);
    }
    return this;
  };

  return DVRControls;
}(_ui_core_plugin2.default);

exports.default = DVRControls;
module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<div class=\"live-info\"><%= live %></div>\n<button type=\"button\" class=\"live-button\" aria-label=\"<%= backToLive %>\"><%= backToLive %></button>\n";

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(199);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./dvr_controls.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./dvr_controls.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".dvr-controls[data-dvr-controls] {\n  display: inline-block;\n  float: left;\n  color: #fff;\n  line-height: 32px;\n  font-size: 10px;\n  font-weight: bold;\n  margin-left: 6px; }\n  .dvr-controls[data-dvr-controls] .live-info {\n    cursor: default;\n    font-family: \"Roboto\", \"Open Sans\", Arial, sans-serif;\n    text-transform: uppercase; }\n    .dvr-controls[data-dvr-controls] .live-info:before {\n      content: \"\";\n      display: inline-block;\n      position: relative;\n      width: 7px;\n      height: 7px;\n      border-radius: 3.5px;\n      margin-right: 3.5px;\n      background-color: #ff0101; }\n    .dvr-controls[data-dvr-controls] .live-info.disabled {\n      opacity: 0.3; }\n      .dvr-controls[data-dvr-controls] .live-info.disabled:before {\n        background-color: #fff; }\n  .dvr-controls[data-dvr-controls] .live-button {\n    cursor: pointer;\n    outline: none;\n    display: none;\n    border: 0;\n    color: #fff;\n    background-color: transparent;\n    height: 32px;\n    padding: 0;\n    opacity: 0.7;\n    font-family: \"Roboto\", \"Open Sans\", Arial, sans-serif;\n    text-transform: uppercase;\n    transition: all 0.1s ease; }\n    .dvr-controls[data-dvr-controls] .live-button:before {\n      content: \"\";\n      display: inline-block;\n      position: relative;\n      width: 7px;\n      height: 7px;\n      border-radius: 3.5px;\n      margin-right: 3.5px;\n      background-color: #fff; }\n    .dvr-controls[data-dvr-controls] .live-button:hover {\n      opacity: 1;\n      text-shadow: rgba(255, 255, 255, 0.75) 0 0 5px; }\n\n.dvr .dvr-controls[data-dvr-controls] .live-info {\n  display: none; }\n\n.dvr .dvr-controls[data-dvr-controls] .live-button {\n  display: block; }\n\n.dvr.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n  background-color: #005aff; }\n\n.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n  background-color: #ff0101; }\n", ""]);

// exports


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _closed_captions = __webpack_require__(201);

var _closed_captions2 = _interopRequireDefault(_closed_captions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _closed_captions2.default;
module.exports = exports['default'];

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ui_core_plugin = __webpack_require__(33);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _cc = __webpack_require__(202);

var _cc2 = _interopRequireDefault(_cc);

var _closed_captions = __webpack_require__(203);

var _closed_captions2 = _interopRequireDefault(_closed_captions);

__webpack_require__(204);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClosedCaptions = function (_UICorePlugin) {
  (0, _inherits3.default)(ClosedCaptions, _UICorePlugin);
  (0, _createClass3.default)(ClosedCaptions, [{
    key: 'name',
    get: function get() {
      return 'closed_captions';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_closed_captions2.default);
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click [data-cc-button]': 'toggleContextMenu',
        'click [data-cc-select]': 'onTrackSelect'
      };
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'cc-controls',
        'data-cc-controls': ''
      };
    }
  }]);

  function ClosedCaptions(core) {
    (0, _classCallCheck3.default)(this, ClosedCaptions);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UICorePlugin.call(this, core));

    var config = core.options.closedCaptionsConfig;
    _this._title = config && config.title ? config.title : null;
    _this._ariaLabel = config && config.ariaLabel ? config.ariaLabel : 'cc-button';
    _this._labelCb = config && config.labelCallback && typeof config.labelCallback === 'function' ? config.labelCallback : function (track) {
      return track.name;
    };
    return _this;
  }

  ClosedCaptions.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged);
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_RENDERED, this.render);
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_HIDE, this.hideContextMenu);
    this.container = this.core.getCurrentContainer();
    if (this.container) {
      this.listenTo(this.container, _events2.default.CONTAINER_SUBTITLE_AVAILABLE, this.onSubtitleAvailable);
      this.listenTo(this.container, _events2.default.CONTAINER_SUBTITLE_CHANGED, this.onSubtitleChanged);
      this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.onContainerStop);
    }
  };

  ClosedCaptions.prototype.onContainerStop = function onContainerStop() {
    this.ccAvailable(false);
  };

  ClosedCaptions.prototype.containerChanged = function containerChanged() {
    this.ccAvailable(false);
    this.stopListening();
    this.bindEvents();
  };

  ClosedCaptions.prototype.onSubtitleAvailable = function onSubtitleAvailable() {
    this.renderCcButton();
    this.ccAvailable(true);
  };

  ClosedCaptions.prototype.onSubtitleChanged = function onSubtitleChanged(track) {
    this.setCurrentContextMenuElement(track.id);
  };

  ClosedCaptions.prototype.onTrackSelect = function onTrackSelect(event) {
    var trackId = parseInt(event.target.dataset.ccSelect, 10);
    this.container.closedCaptionsTrackId = trackId;
    this.hideContextMenu();
    event.stopPropagation();
    return false;
  };

  ClosedCaptions.prototype.ccAvailable = function ccAvailable(hasCC) {
    var method = hasCC ? 'addClass' : 'removeClass';
    this.$el[method]('available');
  };

  ClosedCaptions.prototype.toggleContextMenu = function toggleContextMenu() {
    this.$el.find('ul').toggle();
  };

  ClosedCaptions.prototype.hideContextMenu = function hideContextMenu() {
    this.$el.find('ul').hide();
  };

  ClosedCaptions.prototype.contextMenuElement = function contextMenuElement(id) {
    return this.$el.find('ul a' + (!isNaN(id) ? '[data-cc-select="' + id + '"]' : '')).parent();
  };

  ClosedCaptions.prototype.setCurrentContextMenuElement = function setCurrentContextMenuElement(trackId) {
    if (this._trackId !== trackId) {
      this.contextMenuElement().removeClass('current');
      this.contextMenuElement(trackId).addClass('current');
      var method = trackId > -1 ? 'addClass' : 'removeClass';
      this.$ccButton[method]('enabled');
      this._trackId = trackId;
    }
  };

  ClosedCaptions.prototype.renderCcButton = function renderCcButton() {
    var tracks = this.container ? this.container.closedCaptionsTracks : [];
    for (var i = 0; i < tracks.length; i++) {
      tracks[i].label = this._labelCb(tracks[i]);
    }this.$el.html(this.template({
      ariaLabel: this._ariaLabel,
      disabledLabel: this.core.i18n.t('disabled'),
      title: this._title,
      tracks: tracks
    }));

    this.$ccButton = this.$el.find('button.cc-button[data-cc-button]');
    this.$ccButton.append(_cc2.default);
    this.$el.append(this.style);
  };

  ClosedCaptions.prototype.render = function render() {
    this.renderCcButton();

    var $fullscreen = this.core.mediaControl.$el.find('button[data-fullscreen]');
    if ($fullscreen[0]) this.$el.insertAfter($fullscreen);else this.core.mediaControl.$el.find('.media-control-right-panel[data-media-control]').prepend(this.$el);

    return this;
  };

  return ClosedCaptions;
}(_ui_core_plugin2.default);

exports.default = ClosedCaptions;
module.exports = exports['default'];

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 49 41.8\" style=\"enable-background:new 0 0 49 41.8;\" xml:space=\"preserve\"><path d=\"M47.1,0H3.2C1.6,0,0,1.2,0,2.8v31.5C0,35.9,1.6,37,3.2,37h11.9l3.2,1.9l4.7,2.7c0.9,0.5,2-0.1,2-1.1V37h22.1 c1.6,0,1.9-1.1,1.9-2.7V2.8C49,1.2,48.7,0,47.1,0z M7.2,18.6c0-4.8,3.5-9.3,9.9-9.3c4.8,0,7.1,2.7,7.1,2.7l-2.5,4 c0,0-1.7-1.7-4.2-1.7c-2.8,0-4.3,2.1-4.3,4.3c0,2.1,1.5,4.4,4.5,4.4c2.5,0,4.9-2.1,4.9-2.1l2.2,4.2c0,0-2.7,2.9-7.6,2.9 C10.8,27.9,7.2,23.5,7.2,18.6z M36.9,27.9c-6.4,0-9.9-4.4-9.9-9.3c0-4.8,3.5-9.3,9.9-9.3C41.7,9.3,44,12,44,12l-2.5,4 c0,0-1.7-1.7-4.2-1.7c-2.8,0-4.3,2.1-4.3,4.3c0,2.1,1.5,4.4,4.5,4.4c2.5,0,4.9-2.1,4.9-2.1l2.2,4.2C44.5,25,41.9,27.9,36.9,27.9z\"></path></svg>"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"cc-button media-control-button media-control-icon\" data-cc-button aria-label=\"<%= ariaLabel %>\"></button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href=\"#\" data-cc-select=\"-1\"><%= disabledLabel %></a></li>\n  <% for (var i = 0; i < tracks.length; i++) { %>\n    <li><a href=\"#\" data-cc-select=\"<%= tracks[i].id %>\"><%= tracks[i].label %></a></li>\n  <% }; %>\n</ul>\n";

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(205);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./closed_captions.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./closed_captions.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".cc-controls[data-cc-controls] {\n  float: right;\n  position: relative;\n  display: none; }\n  .cc-controls[data-cc-controls].available {\n    display: block; }\n  .cc-controls[data-cc-controls] .cc-button {\n    padding: 6px !important; }\n    .cc-controls[data-cc-controls] .cc-button.enabled {\n      display: block;\n      opacity: 1.0; }\n      .cc-controls[data-cc-controls] .cc-button.enabled:hover {\n        opacity: 1.0;\n        text-shadow: none; }\n  .cc-controls[data-cc-controls] > ul {\n    list-style-type: none;\n    position: absolute;\n    bottom: 25px;\n    border: 1px solid black;\n    display: none;\n    background-color: #e6e6e6; }\n  .cc-controls[data-cc-controls] li {\n    font-size: 10px; }\n    .cc-controls[data-cc-controls] li[data-title] {\n      background-color: #c3c2c2;\n      padding: 5px; }\n    .cc-controls[data-cc-controls] li a {\n      color: #444;\n      padding: 2px 10px;\n      display: block;\n      text-decoration: none; }\n      .cc-controls[data-cc-controls] li a:hover {\n        background-color: #555;\n        color: white; }\n        .cc-controls[data-cc-controls] li a:hover a {\n          color: white;\n          text-decoration: none; }\n    .cc-controls[data-cc-controls] li.current a {\n      color: #f00; }\n", ""]);

// exports


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _core_plugin = __webpack_require__(34);

var _core_plugin2 = _interopRequireDefault(_core_plugin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _play = __webpack_require__(88);

var _play2 = _interopRequireDefault(_play);

var _pause = __webpack_require__(207);

var _pause2 = _interopRequireDefault(_pause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oldIcon = (0, _clapprZepto2.default)('link[rel="shortcut icon"]');

var Favicon = function (_CorePlugin) {
  (0, _inherits3.default)(Favicon, _CorePlugin);
  (0, _createClass3.default)(Favicon, [{
    key: 'name',
    get: function get() {
      return 'favicon';
    }
  }, {
    key: 'oldIcon',
    get: function get() {
      return oldIcon;
    }
  }]);

  function Favicon(core) {
    (0, _classCallCheck3.default)(this, Favicon);

    var _this = (0, _possibleConstructorReturn3.default)(this, _CorePlugin.call(this, core));

    _this._container = null;
    _this.configure();
    return _this;
  }

  Favicon.prototype.configure = function configure() {
    if (this.core.options.changeFavicon) {
      if (!this.enabled) {
        this.stopListening(this.core, _events2.default.CORE_OPTIONS_CHANGE);
        this.enable();
      }
    } else if (this.enabled) {
      this.disable();
      this.listenTo(this.core, _events2.default.CORE_OPTIONS_CHANGE, this.configure);
    }
  };

  Favicon.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core, _events2.default.CORE_OPTIONS_CHANGE, this.configure);
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged);
    if (this.core.mediaControl.container) this.containerChanged();
  };

  Favicon.prototype.containerChanged = function containerChanged() {
    this._container && this.stopListening(this._container);
    this._container = this.core.mediaControl.container;
    this.listenTo(this._container, _events2.default.CONTAINER_PLAY, this.setPlayIcon);
    this.listenTo(this._container, _events2.default.CONTAINER_PAUSE, this.setPauseIcon);
    this.listenTo(this._container, _events2.default.CONTAINER_STOP, this.resetIcon);
    this.listenTo(this._container, _events2.default.CONTAINER_ENDED, this.resetIcon);
    this.listenTo(this._container, _events2.default.CONTAINER_ERROR, this.resetIcon);
    this.resetIcon();
  };

  Favicon.prototype.disable = function disable() {
    _CorePlugin.prototype.disable.call(this);
    this.resetIcon();
  };

  Favicon.prototype.destroy = function destroy() {
    _CorePlugin.prototype.destroy.call(this);
    this.resetIcon();
  };

  Favicon.prototype.createIcon = function createIcon(svg) {
    var canvas = (0, _clapprZepto2.default)('<canvas/>');
    canvas[0].width = 16;
    canvas[0].height = 16;
    var ctx = canvas[0].getContext('2d');
    ctx.fillStyle = '#000';
    var d = (0, _clapprZepto2.default)(svg).find('path').attr('d');
    var path = new Path2D(d);
    ctx.fill(path);
    var icon = (0, _clapprZepto2.default)('<link rel="shortcut icon" type="image/png"/>');
    icon.attr('href', canvas[0].toDataURL('image/png'));
    return icon;
  };

  Favicon.prototype.setPlayIcon = function setPlayIcon() {
    if (!this.playIcon) this.playIcon = this.createIcon(_play2.default);

    this.changeIcon(this.playIcon);
  };

  Favicon.prototype.setPauseIcon = function setPauseIcon() {
    if (!this.pauseIcon) this.pauseIcon = this.createIcon(_pause2.default);

    this.changeIcon(this.pauseIcon);
  };

  Favicon.prototype.resetIcon = function resetIcon() {
    (0, _clapprZepto2.default)('link[rel="shortcut icon"]').remove();
    (0, _clapprZepto2.default)('head').append(this.oldIcon);
  };

  Favicon.prototype.changeIcon = function changeIcon(icon) {
    if (icon) {
      (0, _clapprZepto2.default)('link[rel="shortcut icon"]').remove();
      (0, _clapprZepto2.default)('head').append(icon);
    }
  };

  return Favicon;
}(_core_plugin2.default);

exports.default = Favicon;
module.exports = exports['default'];

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#010101\" d=\"M1.712 14.76H6.43V1.24H1.71v13.52zm7.86-13.52v13.52h4.716V1.24H9.573z\"></path></svg>"

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _seek_time = __webpack_require__(209);

var _seek_time2 = _interopRequireDefault(_seek_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _seek_time2.default;
module.exports = exports['default'];

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _ui_core_plugin = __webpack_require__(33);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(12);

var _playback2 = _interopRequireDefault(_playback);

var _seek_time = __webpack_require__(210);

var _seek_time2 = _interopRequireDefault(_seek_time);

__webpack_require__(211);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SeekTime = function (_UICorePlugin) {
  (0, _inherits3.default)(SeekTime, _UICorePlugin);
  (0, _createClass3.default)(SeekTime, [{
    key: 'name',
    get: function get() {
      return 'seek_time';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_seek_time2.default);
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'seek-time',
        'data-seek-time': ''
      };
    }
  }, {
    key: 'mediaControl',
    get: function get() {
      return this.core.mediaControl;
    }
  }, {
    key: 'mediaControlContainer',
    get: function get() {
      return this.mediaControl.container;
    }
  }, {
    key: 'isLiveStreamWithDvr',
    get: function get() {
      return this.mediaControlContainer && this.mediaControlContainer.getPlaybackType() === _playback2.default.LIVE && this.mediaControlContainer.isDvrEnabled();
    }
  }, {
    key: 'durationShown',
    get: function get() {
      return this.isLiveStreamWithDvr && !this.actualLiveTime;
    }
  }, {
    key: 'useActualLiveTime',
    get: function get() {
      return this.actualLiveTime && this.isLiveStreamWithDvr;
    }
  }]);

  function SeekTime(core) {
    (0, _classCallCheck3.default)(this, SeekTime);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UICorePlugin.call(this, core));

    _this.hoveringOverSeekBar = false;
    _this.hoverPosition = null;
    _this.duration = null;
    _this.firstFragDateTime = null;
    _this.actualLiveTime = !!_this.mediaControl.options.actualLiveTime;
    if (_this.actualLiveTime) {
      if (_this.mediaControl.options.actualLiveServerTime) _this.actualLiveServerTimeDiff = new Date().getTime() - new Date(_this.mediaControl.options.actualLiveServerTime).getTime();else _this.actualLiveServerTimeDiff = 0;
    }
    return _this;
  }

  SeekTime.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_RENDERED, this.render);
    this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_MOUSEMOVE_SEEKBAR, this.showTime);
    this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_MOUSELEAVE_SEEKBAR, this.hideTime);
    this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_CONTAINERCHANGED, this.onContainerChanged);
    if (this.mediaControlContainer) {
      this.listenTo(this.mediaControlContainer, _events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.update);
      this.listenTo(this.mediaControlContainer, _events2.default.CONTAINER_TIMEUPDATE, this.updateDuration);
    }
  };

  SeekTime.prototype.onContainerChanged = function onContainerChanged() {
    this.stopListening();
    this.bindEvents();
  };

  SeekTime.prototype.updateDuration = function updateDuration(timeProgress) {
    this.duration = timeProgress.total;
    this.firstFragDateTime = timeProgress.firstFragDateTime;
    this.update();
  };

  SeekTime.prototype.showTime = function showTime(event) {
    this.hoveringOverSeekBar = true;
    this.calculateHoverPosition(event);
    this.update();
  };

  SeekTime.prototype.hideTime = function hideTime() {
    this.hoveringOverSeekBar = false;
    this.update();
  };

  SeekTime.prototype.calculateHoverPosition = function calculateHoverPosition(event) {
    var offset = event.pageX - this.mediaControl.$seekBarContainer.offset().left;
    // proportion into the seek bar that the mouse is hovered over 0-1
    this.hoverPosition = Math.min(1, Math.max(offset / this.mediaControl.$seekBarContainer.width(), 0));
  };

  SeekTime.prototype.getSeekTime = function getSeekTime() {
    var seekTime = void 0,
        secondsSinceMidnight = void 0,
        d = void 0,
        e = void 0;
    if (this.useActualLiveTime) {
      if (this.actualLiveServerTimeDiff) {
        d = new Date(new Date().getTime() - this.actualLiveServerTimeDiff);
        e = new Date(d);
        secondsSinceMidnight = (e - d.setHours(0, 0, 0, 0)) / 1000;
      } else if (this.firstFragDateTime) {
        e = new Date(this.firstFragDateTime);
        d = new Date(this.firstFragDateTime);
        d.setHours(0, 0, 0, 0);
        secondsSinceMidnight = (e.getTime() - d.getTime()) / 1000 + this.duration;
      }
      seekTime = secondsSinceMidnight - this.duration + this.hoverPosition * this.duration;
      if (seekTime < 0) seekTime += 86400;
    } else {
      seekTime = this.hoverPosition * this.duration;
    }

    return { seekTime: seekTime, secondsSinceMidnight: secondsSinceMidnight };
  };

  SeekTime.prototype.update = function update() {
    if (!this.rendered) {
      // update() is always called after a render
      return;
    }
    if (!this.shouldBeVisible()) {
      this.$el.hide();
      this.$el.css('left', '-100%');
    } else {
      var seekTime = this.getSeekTime();
      var currentSeekTime = (0, _utils.formatTime)(seekTime.seekTime, this.useActualLiveTime);
      // only update dom if necessary, ie time actually changed
      if (currentSeekTime !== this.displayedSeekTime) {
        this.$seekTimeEl.text(currentSeekTime);
        this.displayedSeekTime = currentSeekTime;
      }

      if (this.durationShown) {
        this.$durationEl.show();
        var currentDuration = (0, _utils.formatTime)(this.actualLiveTime ? seekTime.secondsSinceMidnight : this.duration, this.actualLiveTime);
        if (currentDuration !== this.displayedDuration) {
          this.$durationEl.text(currentDuration);
          this.displayedDuration = currentDuration;
        }
      } else {
        this.$durationEl.hide();
      }

      // the element must be unhidden before its width is requested, otherwise it's width will be reported as 0
      this.$el.show();
      var containerWidth = this.mediaControl.$seekBarContainer.width();
      var elWidth = this.$el.width();
      var elLeftPos = this.hoverPosition * containerWidth;
      elLeftPos -= elWidth / 2;
      elLeftPos = Math.max(0, Math.min(elLeftPos, containerWidth - elWidth));
      this.$el.css('left', elLeftPos);
    }
  };

  SeekTime.prototype.shouldBeVisible = function shouldBeVisible() {
    return this.mediaControlContainer && this.mediaControlContainer.settings.seekEnabled && this.hoveringOverSeekBar && this.hoverPosition !== null && this.duration !== null;
  };

  SeekTime.prototype.render = function render() {
    this.rendered = true;
    this.displayedDuration = null;
    this.displayedSeekTime = null;
    this.$el.html(this.template());
    this.$el.hide();
    this.mediaControl.$el.append(this.el);
    this.$seekTimeEl = this.$el.find('[data-seek-time]');
    this.$durationEl = this.$el.find('[data-duration]');
    this.$durationEl.hide();
    this.update();
  };

  return SeekTime;
}(_ui_core_plugin2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = SeekTime;
module.exports = exports['default'];

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<span data-seek-time></span>\n<span data-duration></span>\n";

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(212);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./seek_time.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./seek_time.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".seek-time[data-seek-time] {\n  position: absolute;\n  white-space: nowrap;\n  height: 20px;\n  line-height: 20px;\n  font-size: 0;\n  left: -100%;\n  bottom: 55px;\n  background-color: rgba(2, 2, 2, 0.5);\n  z-index: 9999;\n  transition: opacity 0.1s ease; }\n  .seek-time[data-seek-time].hidden[data-seek-time] {\n    opacity: 0; }\n  .seek-time[data-seek-time] [data-seek-time] {\n    display: inline-block;\n    color: white;\n    font-size: 10px;\n    padding-left: 7px;\n    padding-right: 7px;\n    vertical-align: top; }\n  .seek-time[data-seek-time] [data-duration] {\n    display: inline-block;\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 10px;\n    padding-right: 7px;\n    vertical-align: top; }\n    .seek-time[data-seek-time] [data-duration]:before {\n      content: \"|\";\n      margin-right: 7px; }\n", ""]);

// exports


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _core_plugin = __webpack_require__(34);

var _core_plugin2 = _interopRequireDefault(_core_plugin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SourcesPlugin = function (_CorePlugin) {
  (0, _inherits3.default)(SourcesPlugin, _CorePlugin);

  function SourcesPlugin() {
    (0, _classCallCheck3.default)(this, SourcesPlugin);
    return (0, _possibleConstructorReturn3.default)(this, _CorePlugin.apply(this, arguments));
  }

  SourcesPlugin.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core, _events2.default.CORE_CONTAINERS_CREATED, this.onContainersCreated);
  };

  SourcesPlugin.prototype.onContainersCreated = function onContainersCreated() {
    var firstValidSource = this.core.containers.filter(function (container) {
      return container.playback.name !== 'no_op';
    })[0] || this.core.containers[0];
    if (firstValidSource) {
      this.core.containers.forEach(function (container) {
        if (container !== firstValidSource) container.destroy();
      });
    }
  };

  (0, _createClass3.default)(SourcesPlugin, [{
    key: 'name',
    get: function get() {
      return 'sources';
    }
  }]);
  return SourcesPlugin;
}(_core_plugin2.default);

exports.default = SourcesPlugin;
module.exports = exports['default'];

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _core_plugin = __webpack_require__(34);

var _core_plugin2 = _interopRequireDefault(_core_plugin);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EndVideo = function (_CorePlugin) {
  (0, _inherits3.default)(EndVideo, _CorePlugin);

  function EndVideo() {
    (0, _classCallCheck3.default)(this, EndVideo);
    return (0, _possibleConstructorReturn3.default)(this, _CorePlugin.apply(this, arguments));
  }

  EndVideo.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged);
    var container = this.core.getCurrentContainer();
    if (container) {
      this.listenTo(container, _events2.default.CONTAINER_ENDED, this.ended);
      this.listenTo(container, _events2.default.CONTAINER_STOP, this.ended);
    }
  };

  EndVideo.prototype.containerChanged = function containerChanged() {
    this.stopListening();
    this.bindEvents();
  };

  EndVideo.prototype.ended = function ended() {
    var exitOnEnd = typeof this.core.options.exitFullscreenOnEnd === 'undefined' || this.core.options.exitFullscreenOnEnd;
    if (exitOnEnd && _utils.Fullscreen.isFullscreen()) this.core.toggleFullscreen();
  };

  (0, _createClass3.default)(EndVideo, [{
    key: 'name',
    get: function get() {
      return 'end_video';
    }
  }]);
  return EndVideo;
}(_core_plugin2.default);

exports.default = EndVideo;
module.exports = exports['default'];

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _core_plugin = __webpack_require__(34);

var _core_plugin2 = _interopRequireDefault(_core_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internationalization (i18n) plugin
 * @class Strings
 * @constructor
 * @extends CorePlugin
 * @module plugins
 */
var Strings = function (_CorePlugin) {
  (0, _inherits3.default)(Strings, _CorePlugin);
  (0, _createClass3.default)(Strings, [{
    key: 'name',
    get: function get() {
      return 'strings';
    }
  }]);

  function Strings(core) {
    (0, _classCallCheck3.default)(this, Strings);

    var _this = (0, _possibleConstructorReturn3.default)(this, _CorePlugin.call(this, core));

    _this._initializeMessages();
    return _this;
  }
  /**
   * Gets a translated string for the given key.
   * @method t
   * @param {String} key the key to all messages
   * @return {String} translated label
   */


  Strings.prototype.t = function t(key) {
    var lang = this._language();
    var fallbackLang = this._messages['en'];
    var i18n = lang && this._messages[lang] || fallbackLang;
    return i18n[key] || fallbackLang[key] || key;
  };

  Strings.prototype._language = function _language() {
    return this.core.options.language || (0, _utils.getBrowserLanguage)();
  };

  Strings.prototype._initializeMessages = function _initializeMessages() {
    var defaultMessages = {
      'en': {
        'live': 'live',
        'back_to_live': 'back to live',
        'disabled': 'Disabled',
        'playback_not_supported': 'Your browser does not support the playback of this video. Please try using a different browser.',
        'default_error_title': 'Could not play video.',
        'default_error_message': 'There was a problem trying to load the video.'
      },
      'pt': {
        'live': 'ao vivo',
        'back_to_live': 'voltar para o ao vivo',
        'disabled': 'Desativado',
        'playback_not_supported': 'Seu navegador não supporta a reprodução deste video. Por favor, tente usar um navegador diferente.',
        'default_error_title': 'Não foi possível reproduzir o vídeo.',
        'default_error_message': 'Ocorreu um problema ao tentar carregar o vídeo.'
      },
      'es': {
        'live': 'vivo',
        'back_to_live': 'volver en vivo',
        'disabled': 'Discapacitado',
        'playback_not_supported': 'Su navegador no soporta la reproducción de un video. Por favor, trate de usar un navegador diferente.'
      },
      'ru': {
        'live': 'прямой эфир',
        'back_to_live': 'к прямому эфиру',
        'disabled': 'Отключено',
        'playback_not_supported': 'Ваш браузер не поддерживает воспроизведение этого видео. Пожалуйста, попробуйте другой браузер.'
      },
      'fr': {
        'live': 'en direct',
        'back_to_live': 'retour au direct',
        'disabled': 'Désactivé',
        'playback_not_supported': 'Votre navigateur ne supporte pas la lecture de cette vidéo. Merci de tenter sur un autre navigateur.',
        'default_error_title': 'Impossible de lire la vidéo.',
        'default_error_message': 'Un problème est survenu lors du chargement de la vidéo.'
      },
      'tr': {
        'live': 'canlı',
        'back_to_live': 'canlı yayına dön',
        'disabled': 'Engelli',
        'playback_not_supported': 'Tarayıcınız bu videoyu oynatma desteğine sahip değil. Lütfen farklı bir tarayıcı ile deneyin.'
      },
      'et': {
        'live': 'Otseülekanne',
        'back_to_live': 'Tagasi otseülekande juurde',
        'disabled': 'Keelatud',
        'playback_not_supported': 'Teie brauser ei toeta selle video taasesitust. Proovige kasutada muud brauserit.'
      }
    };

    this._messages = _clapprZepto2.default.extend(true, defaultMessages, this.core.options.strings || {});
    this._messages['pt-BR'] = this._messages['pt'];
    this._messages['en-US'] = this._messages['en'];
    this._messages['es-419'] = this._messages['es'];
    this._messages['fr-FR'] = this._messages['fr'];
    this._messages['tr-TR'] = this._messages['tr'];
    this._messages['et-EE'] = this._messages['et'];
  };

  return Strings;
}(_core_plugin2.default);

exports.default = Strings;
module.exports = exports['default'];

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error_screen = __webpack_require__(217);

var _error_screen2 = _interopRequireDefault(_error_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _error_screen2.default;
module.exports = exports['default'];

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _ui_core_plugin = __webpack_require__(33);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _error = __webpack_require__(27);

var _error2 = _interopRequireDefault(_error);

var _reload = __webpack_require__(218);

var _reload2 = _interopRequireDefault(_reload);

var _error_screen = __webpack_require__(219);

var _error_screen2 = _interopRequireDefault(_error_screen);

__webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorScreen = function (_UICorePlugin) {
  (0, _inherits3.default)(ErrorScreen, _UICorePlugin);
  (0, _createClass3.default)(ErrorScreen, [{
    key: 'name',
    get: function get() {
      return 'error_screen';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_error_screen2.default);
    }
  }, {
    key: 'container',
    get: function get() {
      return this.core.getCurrentContainer();
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'player-error-screen',
        'data-error-screen': ''
      };
    }
  }]);

  function ErrorScreen(core) {
    var _ret;

    (0, _classCallCheck3.default)(this, ErrorScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UICorePlugin.call(this, core));

    if (_this.options.disableErrorScreen) return _ret = _this.disable(), (0, _possibleConstructorReturn3.default)(_this, _ret);
    return _this;
  }

  ErrorScreen.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core, _events2.default.ERROR, this.onError);
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_CONTAINERCHANGED, this.onContainerChanged);
  };

  ErrorScreen.prototype.bindReload = function bindReload() {
    this.reloadButton = this.$el.find('.player-error-screen__reload');
    this.reloadButton && this.reloadButton.on('click', this.reload.bind(this));
  };

  ErrorScreen.prototype.reload = function reload() {
    var _this2 = this;

    this.listenToOnce(this.core, _events2.default.CORE_READY, function () {
      return _this2.container.play();
    });
    this.core.load(this.options.sources, this.options.mimeType);
    this.unbindReload();
  };

  ErrorScreen.prototype.unbindReload = function unbindReload() {
    this.reloadButton && this.reloadButton.off('click');
  };

  ErrorScreen.prototype.onContainerChanged = function onContainerChanged() {
    this.err = null;
    this.unbindReload();
    this.hide();
  };

  ErrorScreen.prototype.onError = function onError() {
    var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (err.level === _error2.default.Levels.FATAL) {
      this.err = err;
      this.container.disableMediaControl();
      this.container.stop();
      this.show();
    }
  };

  ErrorScreen.prototype.show = function show() {
    this.render();
    this.$el.show();
  };

  ErrorScreen.prototype.hide = function hide() {
    this.$el.hide();
  };

  ErrorScreen.prototype.render = function render() {
    if (!this.err) return;

    this.$el.html(this.template({
      title: this.err.UI.title,
      message: this.err.UI.message,
      code: this.err.code,
      icon: this.err.UI.icon || '',
      reloadIcon: _reload2.default
    }));

    this.core.$el.append(this.el);

    this.bindReload();

    return this;
  };

  return ErrorScreen;
}(_ui_core_plugin2.default);

exports.default = ErrorScreen;
module.exports = exports['default'];

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = "<svg fill=\"#FFFFFF\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"></path><path d=\"M0 0h24v24H0z\" fill=\"none\"></path></svg>"

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = "<div class=\"player-error-screen__content\" data-error-screen>\n  <% if (icon) { %>\n  <div class=\"player-error-screen__icon\" data-error-screen><%= icon %></div>\n  <% } %>\n  <div class=\"player-error-screen__title\" data-error-screen><%= title %></div>\n  <div class=\"player-error-screen__message\" data-error-screen><%= message %></div>\n  <div class=\"player-error-screen__code\" data-error-screen>Error code: <%= code %></div>\n  <div class=\"player-error-screen__reload\" data-error-screen><%= reloadIcon %></div>\n</div>\n";

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(221);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./error_screen.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/project/clappr-amiznikov/src/base/scss!./error_screen.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "div.player-error-screen {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #CCCACA;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 2000;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center; }\n  div.player-error-screen__content[data-error-screen] {\n    font-size: 14px;\n    color: #CCCACA;\n    margin-top: 45px; }\n  div.player-error-screen__title[data-error-screen] {\n    font-weight: bold;\n    line-height: 30px;\n    font-size: 18px; }\n  div.player-error-screen__message[data-error-screen] {\n    width: 90%;\n    margin: 0 auto; }\n  div.player-error-screen__code[data-error-screen] {\n    font-size: 13px;\n    margin-top: 15px; }\n  div.player-error-screen__reload {\n    cursor: pointer;\n    width: 30px;\n    margin: 15px auto 0; }\n", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=clappr.js.map