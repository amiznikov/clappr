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
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
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

var _setPrototypeOf = __webpack_require__(129);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(76);

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

var _defineProperty = __webpack_require__(75);

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

var _log = __webpack_require__(28);

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
 * Fired first level, which play right now
 *
 * @event PLAYBACK_FIRST_LEVEL
 *
 */
Events.PLAYBACK_FIRST_LEVEL = 'playback:first:level';
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
 * Fired when the active container changed
 *
 * @event CORE_ACTIVE_CONTAINER_CHANGED
 */
Events.CORE_ACTIVE_CONTAINER_CHANGED = 'core:active:container:changed';
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
 * Fired when core updates size
 *
 * @event CORE_RESIZE
 * @param {Object} currentSize an object with the current size
 */
Events.CORE_RESIZE = 'core:resize';
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
/**
 * Fired when occurs mouse move event on core element
 *
 * @event CORE_MOUSE_MOVE
 * @param {Object} event a DOM event
 */
Events.CORE_MOUSE_MOVE = 'core:mousemove';
/**
 * Fired when occurs mouse leave event on core element
 *
 * @event CORE_MOUSE_LEAVE
 * @param {Object} event a DOM event
 */
Events.CORE_MOUSE_LEAVE = 'core:mouseleave';

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

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty = __webpack_require__(75);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(135);

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
exports.listContainsIgnoreCase = listContainsIgnoreCase;
exports.canAutoPlayMedia = canAutoPlayMedia;

__webpack_require__(138);

var _browser = __webpack_require__(27);

var _browser2 = _interopRequireDefault(_browser);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _media = __webpack_require__(146);

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
/*jshint -W079 */

function assign(obj, source) {
  if (source) {
    for (var prop in source) {
      var propDescriptor = (0, _getOwnPropertyDescriptor2.default)(source, prop);
      propDescriptor ? (0, _defineProperty2.default)(obj, prop, propDescriptor) : obj[prop] = source[prop];
    }
  }
  return obj;
}

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

// find an item regardless of its letter case
function listContainsIgnoreCase(item, items) {
  if (item === undefined || items === undefined) return false;
  return items.find(function (itemEach) {
    return item.toLowerCase() === itemEach.toLowerCase();
  }) !== undefined;
}

// https://github.com/video-dev/can-autoplay
function canAutoPlayMedia(cb, options) {
  options = (0, _assign2.default)({
    inline: false,
    muted: false,
    timeout: 250,
    type: 'video',
    source: _media2.default.mp4,
    element: null
  }, options);

  var element = options.element ? options.element : document.createElement(options.type);

  element.muted = options.muted;
  if (options.muted === true) element.setAttribute('muted', 'muted');

  if (options.inline === true) element.setAttribute('playsinline', 'playsinline');

  element.src = options.source;

  var promise = element.play();

  var timeoutId = setTimeout(function () {
    setResult(false, new Error('Timeout ' + options.timeout + ' ms has been reached'));
  }, options.timeout);

  var setResult = function setResult(result) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    clearTimeout(timeoutId);
    cb(result, error);
  };

  if (promise !== undefined) {
    promise.then(function () {
      return setResult(true);
    }).catch(function (err) {
      return setResult(false, err);
    });
  } else {
    setResult(true);
  }
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
  removeArrayItem: removeArrayItem,
  canAutoPlayMedia: canAutoPlayMedia,
  Media: _media2.default
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
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

var	fixUrls = __webpack_require__(157);

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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(12);

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

var _ui_object = __webpack_require__(29);

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
     * Determine if the playback has user consent.
     * @property consented
     * @type Boolean
     */

  }, {
    key: 'consented',
    get: function get() {
      return this._consented;
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
    _this._consented = false;
    return _this;
  }

  /**
   * Gives user consent to playback (mobile devices).
   * @method consent
   */


  Playback.prototype.consent = function consent() {
    this._consented = true;
  };

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
   * attempt to autoplays the playback.
   * @method attemptAutoPlay
   */


  Playback.prototype.attemptAutoPlay = function attemptAutoPlay() {
    var _this2 = this;

    this.canAutoPlay(function (result, error) {
      // eslint-disable-line no-unused-vars
      result && _this2.play();
    });
  };

  /**
   * checks if the playback can autoplay.
   * @method canAutoPlay
   * @param {Function} callback function where first param is Boolean and second param is playback Error or null
   */


  Playback.prototype.canAutoPlay = function canAutoPlay(cb) {
    cb(true, null); // Assume playback can autoplay by default
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 13 */
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
var hide = __webpack_require__(24);
var has = __webpack_require__(21);
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

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(65);
var toPrimitive = __webpack_require__(45);
var dP = Object.defineProperty;

exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

var _log = __webpack_require__(28);

var _log2 = _interopRequireDefault(_log);

var _error = __webpack_require__(30);

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

var isObject = __webpack_require__(25);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(26)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(68);
var defined = __webpack_require__(47);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(12);

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

var _ui_object = __webpack_require__(29);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var createDesc = __webpack_require__(31);
module.exports = __webpack_require__(20) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = __webpack_require__(139);

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _browser2.default;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = __webpack_require__(147);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _log2.default;
module.exports = exports['default'];

/***/ }),
/* 29 */
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
   * @method destroy
   * @return {UIObject} itself
   */


  UIObject.prototype.destroy = function destroy() {
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = __webpack_require__(80);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _error2.default;
module.exports = exports['default'];

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(67);
var enumBugKeys = __webpack_require__(51);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(12);

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

var _iterator = __webpack_require__(107);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(117);

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

var _html5_video = __webpack_require__(170);

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

var _assign = __webpack_require__(12);

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

var _ui_object = __webpack_require__(29);

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

var _assign = __webpack_require__(12);

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
 * @extends BaseObject
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
var aFunction = __webpack_require__(101);
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
var isObject = __webpack_require__(25);
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
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
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

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(109)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(71)(String, 'String', function (iterated) {
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(111);
var enumBugKeys = __webpack_require__(51);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(66)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(112).appendChild(iframe);
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(17).f;
var has = __webpack_require__(21);
var TAG = __webpack_require__(13)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(13);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(35);
var wksExt = __webpack_require__(57);
var defineProperty = __webpack_require__(17).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(37);
var createDesc = __webpack_require__(31);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(45);
var has = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(65);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(20) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kibo = __webpack_require__(148);

var _kibo2 = _interopRequireDefault(_kibo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { Kibo: _kibo2.default };
module.exports = exports['default'];

/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(83);

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
/* 63 */
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
/* 64 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(20) && !__webpack_require__(26)(function () {
  return Object.defineProperty(__webpack_require__(66)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25);
var document = __webpack_require__(16).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(103)(false);
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(48);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(15);
var core = __webpack_require__(6);
var fails = __webpack_require__(26);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(35);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(72);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(33);
var $iterCreate = __webpack_require__(110);
var setToStringTag = __webpack_require__(56);
var getPrototypeOf = __webpack_require__(113);
var ITERATOR = __webpack_require__(13)('iterator');
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
var global = __webpack_require__(16);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(33);
var TO_STRING_TAG = __webpack_require__(13)('toStringTag');

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(67);
var hiddenKeys = __webpack_require__(51).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(143);
var ITERATOR = __webpack_require__(13)('iterator');
var Iterators = __webpack_require__(33);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(151);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;
module.exports = exports['default'];

/***/ }),
/* 79 */
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
/* 80 */
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

var _log = __webpack_require__(28);

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _container = __webpack_require__(154);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _container2.default;
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loader = __webpack_require__(163);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loader2.default;
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _html5_audio = __webpack_require__(174);

var _html5_audio2 = _interopRequireDefault(_html5_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html5_audio2.default;
module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hls = __webpack_require__(175);

var _hls2 = _interopRequireDefault(_hls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _hls2.default;
module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(176), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _html_img = __webpack_require__(178);

var _html_img2 = _interopRequireDefault(_html_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html_img2.default;
module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _no_op = __webpack_require__(181);

var _no_op2 = _interopRequireDefault(_no_op);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _no_op2.default;
module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spinner_three_bounce = __webpack_require__(185);

var _spinner_three_bounce2 = _interopRequireDefault(_spinner_three_bounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _spinner_three_bounce2.default;
module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _watermark = __webpack_require__(191);

var _watermark2 = _interopRequireDefault(_watermark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _watermark2.default;
module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _poster = __webpack_require__(195);

var _poster2 = _interopRequireDefault(_poster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _poster2.default;
module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _click_to_pause = __webpack_require__(201);

var _click_to_pause2 = _interopRequireDefault(_click_to_pause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _click_to_pause2.default;
module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _media_control = __webpack_require__(202);

var _media_control2 = _interopRequireDefault(_media_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _media_control2.default;
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvr_controls = __webpack_require__(212);

var _dvr_controls2 = _interopRequireDefault(_dvr_controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dvr_controls2.default;
module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _favicon = __webpack_require__(222);

var _favicon2 = _interopRequireDefault(_favicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _favicon2.default;
module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _player = __webpack_require__(98);

var _player2 = _interopRequireDefault(_player);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(11);

var _playback2 = _interopRequireDefault(_playback);

var _container_plugin = __webpack_require__(43);

var _container_plugin2 = _interopRequireDefault(_container_plugin);

var _core_plugin = __webpack_require__(34);

var _core_plugin2 = _interopRequireDefault(_core_plugin);

var _ui_core_plugin = __webpack_require__(23);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _ui_container_plugin = __webpack_require__(42);

var _ui_container_plugin2 = _interopRequireDefault(_ui_container_plugin);

var _base_object = __webpack_require__(14);

var _base_object2 = _interopRequireDefault(_base_object);

var _ui_object = __webpack_require__(29);

var _ui_object2 = _interopRequireDefault(_ui_object);

var _browser = __webpack_require__(27);

var _browser2 = _interopRequireDefault(_browser);

var _container = __webpack_require__(81);

var _container2 = _interopRequireDefault(_container);

var _core = __webpack_require__(78);

var _core2 = _interopRequireDefault(_core);

var _error = __webpack_require__(30);

var _error2 = _interopRequireDefault(_error);

var _loader = __webpack_require__(82);

var _loader2 = _interopRequireDefault(_loader);

var _mediator = __webpack_require__(61);

var _mediator2 = _interopRequireDefault(_mediator);

var _player_info = __webpack_require__(40);

var _player_info2 = _interopRequireDefault(_player_info);

var _hls = __webpack_require__(85);

var _hls2 = _interopRequireDefault(_hls);

var _html5_audio = __webpack_require__(84);

var _html5_audio2 = _interopRequireDefault(_html5_audio);

var _html5_video = __webpack_require__(41);

var _html5_video2 = _interopRequireDefault(_html5_video);

var _html_img = __webpack_require__(87);

var _html_img2 = _interopRequireDefault(_html_img);

var _no_op = __webpack_require__(88);

var _no_op2 = _interopRequireDefault(_no_op);

var _media_control = __webpack_require__(93);

var _media_control2 = _interopRequireDefault(_media_control);

var _click_to_pause = __webpack_require__(92);

var _click_to_pause2 = _interopRequireDefault(_click_to_pause);

var _dvr_controls = __webpack_require__(95);

var _dvr_controls2 = _interopRequireDefault(_dvr_controls);

var _favicon = __webpack_require__(96);

var _favicon2 = _interopRequireDefault(_favicon);

var _log = __webpack_require__(28);

var _log2 = _interopRequireDefault(_log);

var _poster = __webpack_require__(91);

var _poster2 = _interopRequireDefault(_poster);

var _spinner_three_bounce = __webpack_require__(89);

var _spinner_three_bounce2 = _interopRequireDefault(_spinner_three_bounce);

var _watermark = __webpack_require__(90);

var _watermark2 = _interopRequireDefault(_watermark);

var _styler = __webpack_require__(79);

var _styler2 = _interopRequireDefault(_styler);

var _vendor = __webpack_require__(60);

var _vendor2 = _interopRequireDefault(_vendor);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var version = "0.3.3";

exports.default = {
  Player: _player2.default,
  Mediator: _mediator2.default,
  Events: _events2.default,
  Browser: _browser2.default,
  PlayerInfo: _player_info2.default,
  MediaControl: _media_control2.default,
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(12);

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

var _browser = __webpack_require__(27);

var _browser2 = _interopRequireDefault(_browser);

var _core_factory = __webpack_require__(149);

var _core_factory2 = _interopRequireDefault(_core_factory);

var _loader = __webpack_require__(82);

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
      return this.core.activeContainer.ended;
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
      return this.core.activeContainer.buffering;
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
     * @param {Number} [options.autoPlayTimeout]
     * autoplay check timeout.
     */

  }]);

  function Player(options) {
    (0, _classCallCheck3.default)(this, Player);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, options));

    var playbackDefaultOptions = { recycleVideo: true };
    var defaultOptions = {
      playerId: (0, _utils.uniqueId)(''),
      persistConfig: true,
      width: 640,
      height: 360,
      baseUrl: baseUrl,
      allowUserInteraction: _browser2.default.isMobile,
      playback: playbackDefaultOptions
    };
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

    this.listenTo(this.core.activeContainer, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this._containerChanged);
    this.listenTo(this.core, _events2.default.CORE_FULLSCREEN, this._onFullscreenChange);
    this.listenTo(this.core, _events2.default.CORE_RESIZE, this._onResize);
    return this;
  };

  Player.prototype._addContainerEventListeners = function _addContainerEventListeners() {
    var container = this.core.activeContainer;
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

    var hasNewEvents = (0, _keys2.default)(newEvents).length > 0;
    hasNewEvents && (0, _keys2.default)(events).forEach(function (userEvent) {
      var eventType = _this2.eventsMapping[userEvent];
      eventType && _this2.off(eventType, events[userEvent]);
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

  Player.prototype._onResize = function _onResize(size) {
    this.trigger(_events2.default.PLAYER_RESIZE, size);
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
    this.core.activeContainer.play();
    return this;
  };

  /**
   * pauses the current video (`source`).
   * @method pause
   * @return {Player} itself
   */


  Player.prototype.pause = function pause() {
    this.core.activeContainer.pause();
    return this;
  };

  /**
   * stops the current video (`source`).
   * @method stop
   * @return {Player} itself
   */


  Player.prototype.stop = function stop() {
    this.core.activeContainer.stop();
    return this;
  };

  /**
   * seeks the current video (`source`). For example, `player.seek(120)` will seek to second 120 (2minutes) of the current video.
   * @method seek
   * @param {Number} time should be a number between 0 and the video duration.
   * @return {Player} itself
   */


  Player.prototype.seek = function seek(time) {
    this.core.activeContainer.seek(time);
    return this;
  };

  /**
   * seeks the current video (`source`). For example, `player.seek(50)` will seek to the middle of the current video.
   * @method seekPercentage
   * @param {Number} time should be a number between 0 and 100.
   * @return {Player} itself
   */


  Player.prototype.seekPercentage = function seekPercentage(percentage) {
    this.core.activeContainer.seekPercentage(percentage);
    return this;
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
    return this.core.activeContainer.isPlaying();
  };

  /**
   * returns `true` if DVR is enable otherwise `false`.
   * @method isDvrEnabled
   * @return {Boolean}
   */


  Player.prototype.isDvrEnabled = function isDvrEnabled() {
    return this.core.activeContainer.isDvrEnabled();
  };

  /**
   * returns `true` if DVR is in use otherwise `false`.
   * @method isDvrInUse
   * @return {Boolean}
   */


  Player.prototype.isDvrInUse = function isDvrInUse() {
    return this.core.activeContainer.isDvrInUse();
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
    var plugins = this.core.plugins.concat(this.core.activeContainer.plugins);
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
    return this.core.activeContainer.getCurrentTime();
  };

  /**
   * The time that "0" now represents relative to when playback started.
   * For a stream with a sliding window this will increase as content is
   * removed from the beginning.
   * @method getStartTimeOffset
   * @return {Number} time (in seconds) that time "0" represents.
   */


  Player.prototype.getStartTimeOffset = function getStartTimeOffset() {
    return this.core.activeContainer.getStartTimeOffset();
  };

  /**
   * the duration time in seconds.
   * @method getDuration
   * @return {Number} duration time (in seconds) of the current source
   */


  Player.prototype.getDuration = function getDuration() {
    return this.core.activeContainer.getDuration();
  };

  return Player;
}(_base_object2.default);

exports.default = Player;


(0, _assign2.default)(Player.prototype, _error_mixin2.default);
module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(15);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(102) });


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(37);
var toObject = __webpack_require__(38);
var IObject = __webpack_require__(68);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(26)(function () {
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(69);
var toAbsoluteIndex = __webpack_require__(104);
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
module.exports = __webpack_require__(6).Object.keys;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(38);
var $keys = __webpack_require__(32);

__webpack_require__(70)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(73);
module.exports = __webpack_require__(57).f('iterator');


/***/ }),
/* 109 */
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(55);
var descriptor = __webpack_require__(31);
var setToStringTag = __webpack_require__(56);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(24)(IteratorPrototype, __webpack_require__(13)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(32);

module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(16).document;
module.exports = document && document.documentElement;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(21);
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(115);
var step = __webpack_require__(116);
var Iterators = __webpack_require__(33);
var toIObject = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(71)(Array, 'Array', function (iterated, kind) {
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
/* 115 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(119);
__webpack_require__(124);
__webpack_require__(125);
__webpack_require__(126);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(16);
var has = __webpack_require__(21);
var DESCRIPTORS = __webpack_require__(20);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(72);
var META = __webpack_require__(120).KEY;
var $fails = __webpack_require__(26);
var shared = __webpack_require__(50);
var setToStringTag = __webpack_require__(56);
var uid = __webpack_require__(36);
var wks = __webpack_require__(13);
var wksExt = __webpack_require__(57);
var wksDefine = __webpack_require__(58);
var enumKeys = __webpack_require__(121);
var isArray = __webpack_require__(122);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(25);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(45);
var createDesc = __webpack_require__(31);
var _create = __webpack_require__(55);
var gOPNExt = __webpack_require__(123);
var $GOPD = __webpack_require__(59);
var $DP = __webpack_require__(17);
var $keys = __webpack_require__(32);
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
  __webpack_require__(74).f = gOPNExt.f = $getOwnPropertyNames;
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(24)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(36)('meta');
var isObject = __webpack_require__(25);
var has = __webpack_require__(21);
var setDesc = __webpack_require__(17).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(26)(function () {
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(32);
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(46);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(22);
var gOPN = __webpack_require__(74).f;
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
/* 124 */
/***/ (function(module, exports) {



/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('asyncIterator');


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('observable');


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(20), 'Object', { defineProperty: __webpack_require__(17).f });


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(130), __esModule: true };

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(6).Object.setPrototypeOf;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(15);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(132).set });


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(25);
var anObject = __webpack_require__(19);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(44)(Function.call, __webpack_require__(59).f(Object.prototype, '__proto__').set, 2);
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
var $Object = __webpack_require__(6).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(55) });


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
var $Object = __webpack_require__(6).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(22);
var $getOwnPropertyDescriptor = __webpack_require__(59).f;

__webpack_require__(70)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 138 */
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDevice = exports.getViewportSize = exports.getOsData = exports.getBrowserData = exports.getBrowserInfo = undefined;

var _getIterator2 = __webpack_require__(140);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _browser_data = __webpack_require__(144);

var _browser_data2 = _interopRequireDefault(_browser_data);

var _os_data = __webpack_require__(145);

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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(_browser_data2.default), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var browser = _step.value;

      var browserRegExp = new RegExp(browser.identifier.toLowerCase());
      var browserRegExpResult = browserRegExp.exec(userAgent);

      if (browserRegExpResult != null && browserRegExpResult[1]) {
        browserObject.name = browser.name;
        browserObject.group = browser.group;

        // Check version
        if (browser.versionIdentifier) {
          var versionRegExp = new RegExp(browser.versionIdentifier.toLowerCase());
          var versionRegExpResult = versionRegExp.exec(userAgent);

          if (versionRegExpResult != null && versionRegExpResult[1]) setBrowserVersion(versionRegExpResult[1], browserObject);
        } else {
          setBrowserVersion(browserRegExpResult[1], browserObject);
        }
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
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
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3.default)(_os_data2.default), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var os = _step2.value;

      var osRegExp = new RegExp(os.identifier.toLowerCase());
      var osRegExpResult = osRegExp.exec(userAgent);

      if (osRegExpResult != null) {
        osObject.name = os.name;
        osObject.group = os.group;

        // Version defined
        if (os.version) {
          setOsVersion(os.version, os.versionSeparator ? os.versionSeparator : '.', osObject);

          // Version detected
        } else if (osRegExpResult[1]) {
          setOsVersion(osRegExpResult[1], os.versionSeparator ? os.versionSeparator : '.', osObject);

          // Version identifier
        } else if (os.versionIdentifier) {
          var versionRegExp = new RegExp(os.versionIdentifier.toLowerCase());
          var versionRegExpResult = versionRegExp.exec(userAgent);

          if (versionRegExpResult != null && versionRegExpResult[1]) setOsVersion(versionRegExpResult[1], os.versionSeparator ? os.versionSeparator : '.', osObject);
        }
        break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
__webpack_require__(54);
module.exports = __webpack_require__(142);


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var get = __webpack_require__(77);
module.exports = __webpack_require__(6).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(46);
var TAG = __webpack_require__(13)('toStringTag');
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
/* 144 */
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
/* 145 */
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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/mathiasbynens/small
var mp4 = exports.mp4 = 'data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=';

exports.default = {
  mp4: mp4
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _vendor = __webpack_require__(60);

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
/* 148 */
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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core_factory = __webpack_require__(150);

var _core_factory2 = _interopRequireDefault(_core_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core_factory2.default;
module.exports = exports['default'];

/***/ }),
/* 150 */
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

var _core = __webpack_require__(78);

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
      this.core[key] = externalFunctions[key].bind(plugin);
    }
  };

  return CoreFactory;
}(_base_object2.default);

exports.default = CoreFactory;
module.exports = exports['default'];

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(12);

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

var _styler = __webpack_require__(79);

var _styler2 = _interopRequireDefault(_styler);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _ui_object = __webpack_require__(29);

var _ui_object2 = _interopRequireDefault(_ui_object);

var _ui_core_plugin = __webpack_require__(23);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _browser = __webpack_require__(27);

var _browser2 = _interopRequireDefault(_browser);

var _container_factory = __webpack_require__(152);

var _container_factory2 = _interopRequireDefault(_container_factory);

var _mediator = __webpack_require__(61);

var _mediator2 = _interopRequireDefault(_mediator);

var _player_info = __webpack_require__(40);

var _player_info2 = _interopRequireDefault(_player_info);

var _error = __webpack_require__(30);

var _error2 = _interopRequireDefault(_error);

var _error_mixin = __webpack_require__(18);

var _error_mixin2 = _interopRequireDefault(_error_mixin);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

__webpack_require__(158);

var _fonts = __webpack_require__(160);

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var style = void 0;

/**
 * The Core is responsible to manage Containers, the mediator, MediaControl
 * and the player state.
 * @class Core
 * @constructor
 * @extends UIObject
 * @module components
 */

var Core = function (_UIObject) {
  (0, _inherits3.default)(Core, _UIObject);
  (0, _createClass3.default)(Core, [{
    key: 'events',
    get: function get() {
      return {
        'webkitfullscreenchange': 'handleFullscreenChange',
        'mousemove': 'onMouseMove',
        'mouseleave': 'onMouseLeave'
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

    /**
     * @deprecated
     * This property currently exists for retrocompatibility reasons.
     * If you want to access the media control instance, use the method getPlugin('media_control').
     */

  }, {
    key: 'mediaControl',
    get: function get() {
      return this.getPlugin('media_control') || this.dummyMediaControl;
    }
  }, {
    key: 'dummyMediaControl',
    get: function get() {
      if (this._dummyMediaControl) return this._dummyMediaControl;
      this._dummyMediaControl = new _ui_core_plugin2.default(this);
      return this._dummyMediaControl;
    }

    /**
     * gets the active container reference.
     * @property activeContainer
     * @type {Object}
     */

  }, {
    key: 'activeContainer',
    get: function get() {
      return this._activeContainer;
    }

    /**
     * sets the active container reference and trigger a event with the new reference.
     * @property activeContainer
     * @type {Object}
     */
    ,
    set: function set(container) {
      this._activeContainer = container;
      this.trigger(_events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this._activeContainer);
    }

    /**
     * gets the active playback reference.
     * @property activePlayback
     * @type {Object}
     */

  }, {
    key: 'activePlayback',
    get: function get() {
      return this.activeContainer && this.activeContainer.playback;
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
    var recycleVideo = this.options && this.options.playback && this.options.playback.recycleVideo;
    _utils.DomRecycler.configure({ recycleVideo: recycleVideo });
  };

  Core.prototype.createContainers = function createContainers(options) {
    this.defer = _clapprZepto2.default.Deferred();
    this.defer.promise(this);
    this.containerFactory = new _container_factory2.default(options, options.loader, this.i18n, this.playerError);
    this.prepareContainers();
  };

  Core.prototype.prepareContainers = function prepareContainers() {
    var _this2 = this;

    this.containerFactory.createContainers().then(function (containers) {
      return _this2.setupContainers(containers);
    }).then(function (containers) {
      return _this2.resolveOnContainersReady(containers);
    });
  };

  Core.prototype.updateSize = function updateSize() {
    _utils.Fullscreen.isFullscreen() ? this.setFullscreen() : this.setPlayerSize();
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
      _this3.triggerResize({ width: _this3.el.clientWidth, height: _this3.el.clientHeight });
    };
    this.resizeObserverInterval = setInterval(checkSizeCallback, 500);
  };

  Core.prototype.triggerResize = function triggerResize(newSize) {
    var thereWasChange = this.firstResize || this.oldHeight !== newSize.height || this.oldWidth !== newSize.width;
    if (thereWasChange) {
      this.oldHeight = newSize.height;
      this.oldWidth = newSize.width;
      this.playerInfo.computedSize = newSize;
      this.firstResize = false;
      _mediator2.default.trigger(this.options.playerId + ':' + _events2.default.PLAYER_RESIZE, newSize);
      this.trigger(_events2.default.CORE_RESIZE, newSize);
    }
  };

  Core.prototype.disableResizeObserver = function disableResizeObserver() {
    this.resizeObserverInterval && clearInterval(this.resizeObserverInterval);
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
    this.options.mimeType = mimeType;
    sources = sources && sources.constructor === Array ? sources : [sources];
    this.options.sources = sources;
    this.containers.forEach(function (container) {
      return container.destroy();
    });
    this.containerFactory.options = _clapprZepto2.default.extend(this.options, { sources: sources });
    this.prepareContainers();
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
    (0, _clapprZepto2.default)(document).unbind('fullscreenchange', this._boundFullscreenHandler);
    (0, _clapprZepto2.default)(document).unbind('MSFullscreenChange', this._boundFullscreenHandler);
    (0, _clapprZepto2.default)(document).unbind('mozfullscreenchange', this._boundFullscreenHandler);
    this.stopListening();
  };

  Core.prototype.handleFullscreenChange = function handleFullscreenChange() {
    this.trigger(_events2.default.CORE_FULLSCREEN, _utils.Fullscreen.isFullscreen());
    this.updateSize();
  };

  Core.prototype.handleWindowResize = function handleWindowResize(event) {
    var orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    if (this._screenOrientation === orientation) return;
    this._screenOrientation = orientation;
    this.triggerResize({ width: this.el.clientWidth, height: this.el.clientHeight });
    this.trigger(_events2.default.CORE_SCREEN_ORIENTATION_CHANGED, {
      event: event,
      orientation: this._screenOrientation
    });
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
    this.activeContainer = containers[0];
    this.render();
    this.appendToParent();
    return this.containers;
  };

  Core.prototype.renderContainers = function renderContainers() {
    var _this5 = this;

    this.containers.forEach(function (container) {
      return _this5.el.appendChild(container.render().el);
    });
  };

  Core.prototype.createContainer = function createContainer(source, options) {
    var container = this.containerFactory.createContainer(source, options);
    this.setupContainer(container);
    this.el.appendChild(container.render().el);
    return container;
  };

  /**
   * @deprecated
   * This method currently exists for retrocompatibility reasons.
   * If you want the current container reference, use the activeContainer getter.
   */


  Core.prototype.getCurrentContainer = function getCurrentContainer() {
    return this.activeContainer;
  };

  /**
   * @deprecated
   * This method currently exists for retrocompatibility reasons.
   * If you want the current playback reference, use the activePlayback getter.
   */


  Core.prototype.getCurrentPlayback = function getCurrentPlayback() {
    return this.activePlayback;
  };

  Core.prototype.getPlaybackType = function getPlaybackType() {
    return this.activeContainer && this.activeContainer.getPlaybackType();
  };

  Core.prototype.toggleFullscreen = function toggleFullscreen() {
    if (!_utils.Fullscreen.isFullscreen()) {
      _utils.Fullscreen.requestFullscreen(_browser2.default.isiOS ? this.activeContainer.el : this.el);
      !_browser2.default.isiOS && this.$el.addClass('fullscreen');
    } else {
      _utils.Fullscreen.cancelFullscreen();
      !_browser2.default.isiOS && this.$el.removeClass('fullscreen nocursor');
    }
  };

  Core.prototype.onMouseMove = function onMouseMove(event) {
    this.trigger(_events2.default.CORE_MOUSE_MOVE, event);
  };

  Core.prototype.onMouseLeave = function onMouseLeave(event) {
    this.trigger(_events2.default.CORE_MOUSE_LEAVE, event);
  };

  /**
   * enables to configure the container after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   */


  Core.prototype.configure = function configure(options) {
    var _this6 = this;

    this._options = _clapprZepto2.default.extend(this._options, options);
    this.configureDomRecycler();

    var sources = options.source || options.sources;
    sources && this.load(sources, options.mimeType || this.options.mimeType);

    this.trigger(_events2.default.CORE_OPTIONS_CHANGE);
    this.containers.forEach(function (container) {
      return container.configure(_this6.options);
    });
  };

  Core.prototype.appendToParent = function appendToParent() {
    var hasCoreParent = this.$el.parent() && this.$el.parent().length;
    !hasCoreParent && this.$el.appendTo(this.options.parentElement);
  };

  Core.prototype.render = function render() {
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
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _container_factory = __webpack_require__(153);

var _container_factory2 = _interopRequireDefault(_container_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _container_factory2.default;
module.exports = exports['default'];

/***/ }),
/* 153 */
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

var _container = __webpack_require__(81);

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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(12);

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

var _ui_object = __webpack_require__(29);

var _ui_object2 = _interopRequireDefault(_ui_object);

var _error_mixin = __webpack_require__(18);

var _error_mixin2 = _interopRequireDefault(_error_mixin);

__webpack_require__(155);

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
/* 155 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(156);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./style.scss");

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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".container[data-container] {\n  position: absolute;\n  background-color: black;\n  height: 100%;\n  width: 100%; }\n  .container[data-container] .chromeless {\n    cursor: default; }\n\n[data-player]:not(.nocursor) .container[data-container]:not(.chromeless).pointer-enabled {\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),
/* 157 */
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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(159);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./style.scss");

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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "[data-player] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate3d(0, 0, 0);\n  position: relative;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-style: normal;\n  font-weight: normal;\n  text-align: center;\n  overflow: hidden;\n  font-size: 100%;\n  font-family: \"Roboto\", \"Open Sans\", Arial, sans-serif;\n  text-shadow: 0 0 0;\n  box-sizing: border-box; }\n  [data-player] div, [data-player] span, [data-player] applet, [data-player] object, [data-player] iframe,\n  [data-player] h1, [data-player] h2, [data-player] h3, [data-player] h4, [data-player] h5, [data-player] h6, [data-player] p, [data-player] blockquote, [data-player] pre,\n  [data-player] a, [data-player] abbr, [data-player] acronym, [data-player] address, [data-player] big, [data-player] cite, [data-player] code,\n  [data-player] del, [data-player] dfn, [data-player] em, [data-player] img, [data-player] ins, [data-player] kbd, [data-player] q, [data-player] s, [data-player] samp,\n  [data-player] small, [data-player] strike, [data-player] strong, [data-player] sub, [data-player] sup, [data-player] tt, [data-player] var,\n  [data-player] b, [data-player] u, [data-player] i, [data-player] center,\n  [data-player] dl, [data-player] dt, [data-player] dd, [data-player] ol, [data-player] ul, [data-player] li,\n  [data-player] fieldset, [data-player] form, [data-player] label, [data-player] legend,\n  [data-player] table, [data-player] caption, [data-player] tbody, [data-player] tfoot, [data-player] thead, [data-player] tr, [data-player] th, [data-player] td,\n  [data-player] article, [data-player] aside, [data-player] canvas, [data-player] details, [data-player] embed,\n  [data-player] figure, [data-player] figcaption, [data-player] footer, [data-player] header, [data-player] hgroup,\n  [data-player] menu, [data-player] nav, [data-player] output, [data-player] ruby, [data-player] section, [data-player] summary,\n  [data-player] time, [data-player] mark, [data-player] audio, [data-player] video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline; }\n  [data-player] table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n  [data-player] caption, [data-player] th, [data-player] td {\n    text-align: left;\n    font-weight: normal;\n    vertical-align: middle; }\n  [data-player] q, [data-player] blockquote {\n    quotes: none; }\n    [data-player] q:before, [data-player] q:after, [data-player] blockquote:before, [data-player] blockquote:after {\n      content: \"\";\n      content: none; }\n  [data-player] a img {\n    border: none; }\n  [data-player]:focus {\n    outline: 0; }\n  [data-player] * {\n    max-width: none;\n    box-sizing: inherit;\n    float: none; }\n  [data-player] div {\n    display: block; }\n  [data-player].fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    top: 0;\n    left: 0; }\n  [data-player].nocursor {\n    cursor: none; }\n\n.clappr-style {\n  display: none !important; }\n", ""]);

// exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(161);
exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + escape(__webpack_require__(162)) + ") format(\"truetype\");\n}\n", ""]);

// exports


/***/ }),
/* 161 */
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
/* 162 */
/***/ (function(module, exports) {

module.exports = "<%=baseUrl%>/38861cba61c66739c1452c3a71e39852.ttf";

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(76);

var _create2 = _interopRequireDefault(_create);

var _toConsumableArray2 = __webpack_require__(62);

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

var _html5_audio = __webpack_require__(84);

var _html5_audio2 = _interopRequireDefault(_html5_audio);

var _hls = __webpack_require__(85);

var _hls2 = _interopRequireDefault(_hls);

var _html_img = __webpack_require__(87);

var _html_img2 = _interopRequireDefault(_html_img);

var _no_op = __webpack_require__(88);

var _no_op2 = _interopRequireDefault(_no_op);

var _spinner_three_bounce = __webpack_require__(89);

var _spinner_three_bounce2 = _interopRequireDefault(_spinner_three_bounce);

var _stats = __webpack_require__(189);

var _stats2 = _interopRequireDefault(_stats);

var _watermark = __webpack_require__(90);

var _watermark2 = _interopRequireDefault(_watermark);

var _poster = __webpack_require__(91);

var _poster2 = _interopRequireDefault(_poster);

var _google_analytics = __webpack_require__(199);

var _google_analytics2 = _interopRequireDefault(_google_analytics);

var _click_to_pause = __webpack_require__(92);

var _click_to_pause2 = _interopRequireDefault(_click_to_pause);

var _media_control = __webpack_require__(93);

var _media_control2 = _interopRequireDefault(_media_control);

var _dvr_controls = __webpack_require__(95);

var _dvr_controls2 = _interopRequireDefault(_dvr_controls);

var _closed_captions = __webpack_require__(216);

var _closed_captions2 = _interopRequireDefault(_closed_captions);

var _favicon = __webpack_require__(96);

var _favicon2 = _interopRequireDefault(_favicon);

var _seek_time = __webpack_require__(223);

var _seek_time2 = _interopRequireDefault(_seek_time);

var _sources = __webpack_require__(228);

var _sources2 = _interopRequireDefault(_sources);

var _end_video = __webpack_require__(229);

var _end_video2 = _interopRequireDefault(_end_video);

var _strings = __webpack_require__(230);

var _strings2 = _interopRequireDefault(_strings);

var _error_screen = __webpack_require__(231);

var _error_screen2 = _interopRequireDefault(_error_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * It keeps a list of the default plugins (playback, container, core) and it merges external plugins with its internals.
 * @class Loader
 * @constructor
 * @extends BaseObject
 * @module components
 */


/* Playback Plugins */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

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
    _this.corePlugins = [_media_control2.default, _dvr_controls2.default, _closed_captions2.default, _favicon2.default, _seek_time2.default, _sources2.default, _end_video2.default, _error_screen2.default, _strings2.default];

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

/* Core Plugins */


/* Container Plugins */


exports.default = Loader;
module.exports = exports['default'];

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(165);
module.exports = __webpack_require__(6).Array.from;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(44);
var $export = __webpack_require__(15);
var toObject = __webpack_require__(38);
var call = __webpack_require__(166);
var isArrayIter = __webpack_require__(167);
var toLength = __webpack_require__(69);
var createProperty = __webpack_require__(168);
var getIterFn = __webpack_require__(77);

$export($export.S + $export.F * !__webpack_require__(169)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(19);
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(33);
var ITERATOR = __webpack_require__(13)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(17);
var createDesc = __webpack_require__(31);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(13)('iterator');
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(83);

var _from2 = _interopRequireDefault(_from);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__(62);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

var _utils = __webpack_require__(5);

var _playback = __webpack_require__(11);

var _playback2 = _interopRequireDefault(_playback);

var _browser = __webpack_require__(27);

var _browser2 = _interopRequireDefault(_browser);

var _error = __webpack_require__(30);

var _error2 = _interopRequireDefault(_error);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _log = __webpack_require__(28);

var _log2 = _interopRequireDefault(_log);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _tracks = __webpack_require__(171);

var _tracks2 = _interopRequireDefault(_tracks);

__webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var MIMETYPES = {
  'mp4': ['avc1.42E01E', 'avc1.58A01E', 'avc1.4D401E', 'avc1.64001E', 'mp4v.20.8', 'mp4v.20.240', 'mp4a.40.2'].map(function (codec) {
    return 'video/mp4; codecs="' + codec + ', mp4a.40.2"';
  }),
  'ogg': ['video/ogg; codecs="theora, vorbis"', 'video/ogg; codecs="dirac"', 'video/ogg; codecs="theora, speex"'],
  '3gpp': ['video/3gpp; codecs="mp4v.20.8, samr"'],
  'webm': ['video/webm; codecs="vp8, vorbis"'],
  'mkv': ['video/x-matroska; codecs="theora, vorbis"'],
  'm3u8': ['application/x-mpegurl']
};
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

    _this.options.autoPlay && _this.attemptAutoPlay();
    return _this;
  }

  // See Playback.attemptAutoPlay()


  HTML5Video.prototype.attemptAutoPlay = function attemptAutoPlay() {
    var _this2 = this;

    this.canAutoPlay(function (result, error) {
      error && _log2.default.warn(_this2.name, 'autoplay error.', { result: result, error: error });

      // https://github.com/clappr/clappr/issues/1076
      result && process.nextTick(function () {
        return !_this2._destroyed && _this2.play();
      });
    });
  };

  // See Playback.canAutoPlay()


  HTML5Video.prototype.canAutoPlay = function canAutoPlay(cb) {
    if (this.options.disableCanAutoPlay) cb(true, null);

    var opts = {
      timeout: this.options.autoPlayTimeout || 500,
      inline: this.options.playback.playInline || false,
      muted: this.options.mute || false // Known issue: mediacontrols may asynchronously mute video


      // Use current video element if recycling feature enabled with mobile devices
    };if (_browser2.default.isMobile && _utils.DomRecycler.options.recycleVideo) opts.element = this.el;

    // Desktop browser autoplay policy may require user action
    // Mobile browser autoplay require user consent and video recycling feature enabled
    // It may returns a false positive with source-less player consent
    (0, _utils.canAutoPlayMedia)(cb, opts);
  };

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
    if (!this.isPlaying()) {
      _Playback.prototype.consent.call(this);
      this.el.load();
    }
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
      this.el.volume = value / 100;
    }
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
    return this.el.muted === true || this.el.volume === 0;
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

    var isUnknownError = code === UNKNOWN_ERROR.code;

    var formattedError = this.createError({
      code: code,
      description: message,
      raw: this.el.error,
      level: isUnknownError ? _error2.default.Levels.WARN : _error2.default.Levels.FATAL
    });

    if (isUnknownError) _log2.default.warn(this.name, 'HTML5 unknown error: ', formattedError);else this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = "<% for (var i = 0; i < tracks.length; i++) { %>\n  <track data-html5-video-track=\"<%= i %>\" kind=\"<%= tracks[i].kind %>\" label=\"<%= tracks[i].label %>\" srclang=\"<%= tracks[i].lang %>\" src=\"<%= tracks[i].src %>\" />\n<% }; %>\n";

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(173);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./style.scss");

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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "[data-html5-video] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: block; }\n", ""]);

// exports


/***/ }),
/* 174 */
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

var _playback = __webpack_require__(11);

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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(62);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__(86);

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

var _hlsLightMin = __webpack_require__(177);

var _hlsLightMin2 = _interopRequireDefault(_hlsLightMin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(11);

var _playback2 = _interopRequireDefault(_playback);

var _utils = __webpack_require__(5);

var _log = __webpack_require__(28);

var _log2 = _interopRequireDefault(_log);

var _error = __webpack_require__(30);

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
      if (this.options.hlsUseNextLevel) this._hls.nextLevel = this._currentLevel;else this._hls.currentLevel = this._currentLevel;
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
  var isHls = resourceParts.length > 1 && resourceParts[1].toLowerCase() === 'm3u8' || (0, _utils.listContainsIgnoreCase)(mimeType, ['application/vnd.apple.mpegurl', 'application/x-mpegURL']);

  return !!(_hlsLightMin2.default.isSupported() && isHls);
};
module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"undefined"!=typeof window&&function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Hls=t():e.Hls=t()}(this,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=24)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(6);function a(){}var n={trace:a,debug:a,log:a,warn:a,info:a,error:a},o=n;var s=i.getSelfScope();function l(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];t.forEach(function(t){o[t]=e[t]?e[t].bind(e):function(e){var t=s.console[e];return t?function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];r[0]&&(r[0]=function(e,t){return t="["+e+"] > "+t}(e,r[0])),t.apply(s.console,r)}:a}(t)})}t.enableLogs=function(e){if(!0===e||"object"==typeof e){l(e,"debug","log","info","warn","error");try{o.log()}catch(e){o=n}}else o=n},t.logger=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(6).getSelfScope().Number;t.Number=i,i.isFinite=i.isFinite||function(e){return"number"==typeof e&&isFinite(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorTypes={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",KEY_SYSTEM_ERROR:"keySystemError",MUX_ERROR:"muxError",OTHER_ERROR:"otherError"},t.ErrorDetails={KEY_SYSTEM_NO_KEYS:"keySystemNoKeys",KEY_SYSTEM_NO_ACCESS:"keySystemNoAccess",KEY_SYSTEM_NO_SESSION:"keySystemNoSession",KEY_SYSTEM_LICENSE_REQUEST_FAILED:"keySystemLicenseRequestFailed",MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",MANIFEST_INCOMPATIBLE_CODECS_ERROR:"manifestIncompatibleCodecsError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",AUDIO_TRACK_LOAD_ERROR:"audioTrackLoadError",AUDIO_TRACK_LOAD_TIMEOUT:"audioTrackLoadTimeOut",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",REMUX_ALLOC_ERROR:"remuxAllocError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_ADD_CODEC_ERROR:"bufferAddCodecError",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError",BUFFER_SEEK_OVER_HOLE:"bufferSeekOverHole",BUFFER_NUDGE_ON_STALL:"bufferNudgeOnStall",INTERNAL_EXCEPTION:"internalException"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(3),n=r(1),o={hlsEventGeneric:!0,hlsHandlerDestroying:!0,hlsHandlerDestroyed:!0},s=function(){function e(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this.hls=e,this.onEvent=this.onEvent.bind(this),this.handledEvents=t,this.useGenericHandler=!0,this.registerListeners()}return e.prototype.destroy=function(){this.onHandlerDestroying(),this.unregisterListeners(),this.onHandlerDestroyed()},e.prototype.onHandlerDestroying=function(){},e.prototype.onHandlerDestroyed=function(){},e.prototype.isEventHandler=function(){return"object"==typeof this.handledEvents&&this.handledEvents.length&&"function"==typeof this.onEvent},e.prototype.registerListeners=function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){if(o[e])throw new Error("Forbidden event-name: "+e);this.hls.on(e,this.onEvent)},this)},e.prototype.unregisterListeners=function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){this.hls.off(e,this.onEvent)},this)},e.prototype.onEvent=function(e,t){this.onEventGeneric(e,t)},e.prototype.onEventGeneric=function(e,t){try{(function(e,t){var r="on"+e.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+e+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,t)}).call(this,e,t).call()}catch(t){i.logger.error("An internal error happened while handling event "+e+'. Error message: "'+t.message+'". Here is a stacktrace:',t),this.hls.trigger(n.default.ERROR,{type:a.ErrorTypes.OTHER_ERROR,details:a.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:e,err:t})}},e}();t.default=s},function(e,t){e.exports=void 0},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSelfScope=function(){return"undefined"==typeof window?self:window}},function(e,t,r){!function(t){var r=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,i=/^([^\/?#]*)(.*)$/,a=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,o={buildAbsoluteURL:function(e,t,r){if(r=r||{},e=e.trim(),!(t=t.trim())){if(!r.alwaysNormalize)return e;var a=o.parseURL(e);if(!a)throw new Error("Error trying to parse base URL.");return a.path=o.normalizePath(a.path),o.buildURLFromParts(a)}var n=o.parseURL(t);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):t;var s=o.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=i.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var u={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(u.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var d=s.path,f=d.substring(0,d.lastIndexOf("/")+1)+n.path;u.path=o.normalizePath(f)}else u.path=s.path,n.params||(u.params=s.params,n.query||(u.query=s.query));return null===u.path&&(u.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(u)},parseURL:function(e){var t=r.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){for(e=e.split("").reverse().join("").replace(a,"");e.length!==(e=e.replace(n,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}};e.exports=o}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.isBuffered=function(e,t){try{if(e)for(var r=e.buffered,i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0}catch(e){}return!1},e.bufferInfo=function(e,t,r){try{if(e){var i=e.buffered,a=[],n=void 0;for(n=0;n<i.length;n++)a.push({start:i.start(n),end:i.end(n)});return this.bufferedInfo(a,t,r)}}catch(e){}return{len:0,start:t,end:t,nextStart:void 0}},e.bufferedInfo=function(e,t,r){var i,a,n,o,s,l=[];for(e.sort(function(e,t){var r=e.start-t.start;return r||t.end-e.end}),s=0;s<e.length;s++){var u=l.length;if(u){var d=l[u-1].end;e[s].start-d<r?e[s].end>d&&(l[u-1].end=e[s].end):l.push(e[s])}else l.push(e[s])}for(s=0,i=0,a=n=t;s<l.length;s++){var f=l[s].start,c=l[s].end;if(t+r>=f&&t<c)a=f,i=(n=c)-t;else if(t+r<f){o=f;break}}return{len:i,start:a,end:n,nextStart:o}},e}();t.BufferHelper=i},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),n=r(1);t.FragmentState={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};var o=function(r){function o(e){var t=r.call(this,e,n.default.BUFFER_APPENDED,n.default.FRAG_BUFFERED,n.default.FRAG_LOADED)||this;return t.bufferPadding=.2,t.fragments=Object.create(null),t.timeRanges=Object.create(null),t.config=e.config,t}return i(o,r),o.prototype.destroy=function(){this.fragments=null,this.timeRanges=null,this.config=null,a.default.prototype.destroy.call(this),r.prototype.destroy.call(this)},o.prototype.getBufferedFrag=function(e,t){var r=this.fragments,i=Object.keys(r).filter(function(i){var a=r[i];if(a.body.type!==t)return!1;if(!a.buffered)return!1;var n=a.body;return n.startPTS<=e&&e<=n.endPTS});if(0===i.length)return null;var a=i.pop();return r[a].body},o.prototype.detectEvictedFragments=function(e,t){var r,i,a=this;Object.keys(this.fragments).forEach(function(n){var o=a.fragments[n];if(!0===o.buffered){var s=o.range[e];if(s){r=s.time;for(var l=0;l<r.length;l++)if(i=r[l],!1===a.isTimeBuffered(i.startPTS,i.endPTS,t)){a.removeFragment(o.body);break}}}})},o.prototype.detectPartialFragments=function(e){var t=this,r=this.getFragmentKey(e),i=this.fragments[r];i&&(i.buffered=!0,Object.keys(this.timeRanges).forEach(function(r){if(e.hasElementaryStream(r)){var a=t.timeRanges[r];i.range[r]=t.getBufferedTimes(e.startPTS,e.endPTS,a)}}))},o.prototype.getBufferedTimes=function(e,t,r){for(var i,a,n=[],o=!1,s=0;s<r.length;s++){if(i=r.start(s)-this.bufferPadding,a=r.end(s)+this.bufferPadding,e>=i&&t<=a){n.push({startPTS:Math.max(e,r.start(s)),endPTS:Math.min(t,r.end(s))});break}if(e<a&&t>i)n.push({startPTS:Math.max(e,r.start(s)),endPTS:Math.min(t,r.end(s))}),o=!0;else if(t<=i)break}return{time:n,partial:o}},o.prototype.getFragmentKey=function(e){return e.type+"_"+e.level+"_"+e.urlId+"_"+e.sn},o.prototype.getPartialFragment=function(e){var t,r,i,a=this,n=null,o=0;return Object.keys(this.fragments).forEach(function(s){var l=a.fragments[s];a.isPartial(l)&&(r=l.body.startPTS-a.bufferPadding,i=l.body.endPTS+a.bufferPadding,e>=r&&e<=i&&(t=Math.min(e-r,i-e),o<=t&&(n=l.body,o=t)))}),n},o.prototype.getState=function(e){var r=this.getFragmentKey(e),i=this.fragments[r],a=t.FragmentState.NOT_LOADED;return void 0!==i&&(a=i.buffered?!0===this.isPartial(i)?t.FragmentState.PARTIAL:t.FragmentState.OK:t.FragmentState.APPENDING),a},o.prototype.isPartial=function(e){return!0===e.buffered&&(void 0!==e.range.video&&!0===e.range.video.partial||void 0!==e.range.audio&&!0===e.range.audio.partial)},o.prototype.isTimeBuffered=function(e,t,r){for(var i,a,n=0;n<r.length;n++){if(i=r.start(n)-this.bufferPadding,a=r.end(n)+this.bufferPadding,e>=i&&t<=a)return!0;if(t<=i)return!1}return!1},o.prototype.onFragLoaded=function(t){var r=t.frag;e.isFinite(r.sn)&&!r.bitrateTest&&(this.fragments[this.getFragmentKey(r)]={body:r,range:Object.create(null),buffered:!1})},o.prototype.onBufferAppended=function(e){var t=this;this.timeRanges=e.timeRanges,Object.keys(this.timeRanges).forEach(function(e){var r=t.timeRanges[e];t.detectEvictedFragments(e,r)})},o.prototype.onFragBuffered=function(e){this.detectPartialFragments(e.frag)},o.prototype.hasFragment=function(e){var t=this.getFragmentKey(e);return void 0!==this.fragments[t]},o.prototype.removeFragment=function(e){var t=this.getFragmentKey(e);delete this.fragments[t]},o.prototype.removeAllFragments=function(){this.fragments=Object.create(null)},o}(a.default);t.FragmentTracker=o}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={search:function(e,t){for(var r=0,i=e.length-1,a=null,n=null;r<=i;){var o=t(n=e[a=(r+i)/2|0]);if(o>0)r=a+1;else{if(!(o<0))return n;i=a-1}}return null}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.isHeader=function(e,t){return t+10<=e.length&&73===e[t]&&68===e[t+1]&&51===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128},e.isFooter=function(e,t){return t+10<=e.length&&51===e[t]&&68===e[t+1]&&73===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128},e.getID3Data=function(t,r){for(var i=r,a=0;e.isHeader(t,r);){a+=10,a+=e._readSize(t,r+6),e.isFooter(t,r+10)&&(a+=10),r+=a}if(a>0)return t.subarray(i,i+a)},e._readSize=function(e,t){var r=0;return r=(127&e[t])<<21,r|=(127&e[t+1])<<14,r|=(127&e[t+2])<<7,r|=127&e[t+3]},e.getTimeStamp=function(t){for(var r=e.getID3Frames(t),i=0;i<r.length;i++){var a=r[i];if(e.isTimeStampFrame(a))return e._readTimeStamp(a)}},e.isTimeStampFrame=function(e){return e&&"PRIV"===e.key&&"com.apple.streaming.transportStreamTimestamp"===e.info},e._getFrameData=function(t){var r=String.fromCharCode(t[0],t[1],t[2],t[3]),i=e._readSize(t,4);return{type:r,size:i,data:t.subarray(10,10+i)}},e.getID3Frames=function(t){for(var r=0,i=[];e.isHeader(t,r);){for(var a=e._readSize(t,r+6),n=(r+=10)+a;r+8<n;){var o=e._getFrameData(t.subarray(r)),s=e._decodeFrame(o);s&&i.push(s),r+=o.size+10}e.isFooter(t,r)&&(r+=10)}return i},e._decodeFrame=function(t){return"PRIV"===t.type?e._decodePrivFrame(t):"T"===t.type[0]?e._decodeTextFrame(t):"W"===t.type[0]?e._decodeURLFrame(t):void 0},e._readTimeStamp=function(e){if(8===e.data.byteLength){var t=new Uint8Array(e.data),r=1&t[3],i=(t[4]<<23)+(t[5]<<15)+(t[6]<<7)+t[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},e._decodePrivFrame=function(t){if(!(t.size<2)){var r=e._utf8ArrayToStr(t.data,!0),i=new Uint8Array(t.data.subarray(r.length+1));return{key:t.type,info:r,data:i.buffer}}},e._decodeTextFrame=function(t){if(!(t.size<2)){if("TXXX"===t.type){var r=1,i=e._utf8ArrayToStr(t.data.subarray(r));r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data.subarray(1));return{key:t.type,data:n}}},e._decodeURLFrame=function(t){if("WXXX"===t.type){if(t.size<2)return;var r=1,i=e._utf8ArrayToStr(t.data.subarray(r));r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data);return{key:t.type,data:n}},e._utf8ArrayToStr=function(e,t){void 0===t&&(t=!1);for(var r,i,a,n=e.length,o="",s=0;s<n;){if(0===(r=e[s++])&&t)return o;if(0!==r&&3!==r)switch(r>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o+=String.fromCharCode(r);break;case 12:case 13:i=e[s++],o+=String.fromCharCode((31&r)<<6|63&i);break;case 14:i=e[s++],a=e[s++],o+=String.fromCharCode((15&r)<<12|(63&i)<<6|(63&a)<<0)}}return o},e}(),a=i._utf8ArrayToStr;t.utf8ArrayToStr=a,t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMediaSource=function(){if("undefined"!=typeof window)return window.MediaSource||window.WebKitMediaSource}},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(3),s=r(0),l=r(14),u=r(25),d=window.performance,f={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},c={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"},h=function(t){function r(e){var r=t.call(this,e,a.default.MANIFEST_LOADING,a.default.LEVEL_LOADING,a.default.AUDIO_TRACK_LOADING,a.default.SUBTITLE_TRACK_LOADING)||this;return r.loaders={},r}return i(r,t),Object.defineProperty(r,"ContextType",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(r,"LevelType",{get:function(){return c},enumerable:!0,configurable:!0}),r.canHaveQualityLevels=function(e){return e!==f.AUDIO_TRACK&&e!==f.SUBTITLE_TRACK},r.mapContextToLevelType=function(e){switch(e.type){case f.AUDIO_TRACK:return c.AUDIO;case f.SUBTITLE_TRACK:return c.SUBTITLE;default:return c.MAIN}},r.getResponseUrl=function(e,t){var r=e.url;return void 0!==r&&0!==r.indexOf("data:")||(r=t.url),r},r.prototype.createInternalLoader=function(e){var t=this.hls.config,r=t.pLoader,i=t.loader,a=new(r||i)(t);return e.loader=a,this.loaders[e.type]=a,a},r.prototype.getInternalLoader=function(e){return this.loaders[e.type]},r.prototype.resetInternalLoader=function(e){this.loaders[e]&&delete this.loaders[e]},r.prototype.destroyInternalLoaders=function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}},r.prototype.destroy=function(){this.destroyInternalLoaders(),t.prototype.destroy.call(this)},r.prototype.onManifestLoading=function(e){this.load(e.url,{type:f.MANIFEST,level:0,id:null})},r.prototype.onLevelLoading=function(e){this.load(e.url,{type:f.LEVEL,level:e.level,id:e.id})},r.prototype.onAudioTrackLoading=function(e){this.load(e.url,{type:f.AUDIO_TRACK,level:null,id:e.id})},r.prototype.onSubtitleTrackLoading=function(e){this.load(e.url,{type:f.SUBTITLE_TRACK,level:null,id:e.id})},r.prototype.load=function(e,t){var r=this.hls.config;s.logger.debug("Loading playlist of type "+t.type+", level: "+t.level+", id: "+t.id);var i,a,n,o,l=this.getInternalLoader(t);if(l){var u=l.context;if(u&&u.url===e)return s.logger.trace("playlist request ongoing"),!1;s.logger.warn("aborting previous loader for type: "+t.type),l.abort()}switch(t.type){case f.MANIFEST:i=r.manifestLoadingMaxRetry,a=r.manifestLoadingTimeOut,n=r.manifestLoadingRetryDelay,o=r.manifestLoadingMaxRetryTimeout;break;case f.LEVEL:i=0,a=r.levelLoadingTimeOut;break;default:i=r.levelLoadingMaxRetry,a=r.levelLoadingTimeOut,n=r.levelLoadingRetryDelay,o=r.levelLoadingMaxRetryTimeout}l=this.createInternalLoader(t),t.url=e,t.responseType=t.responseType||"";var d={timeout:a,maxRetry:i,retryDelay:n,maxRetryDelay:o},c={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};return s.logger.debug("Calling internal loader delegate for URL: "+e),l.load(t,d,c),!0},r.prototype.loadsuccess=function(e,t,r,i){if(void 0===i&&(i=null),r.isSidxRequest)return this._handleSidxRequest(e,r),void this._handlePlaylistLoaded(e,t,r,i);this.resetInternalLoader(r.type);var a=e.data;t.tload=d.now(),0===a.indexOf("#EXTM3U")?a.indexOf("#EXTINF:")>0||a.indexOf("#EXT-X-TARGETDURATION:")>0?this._handleTrackOrLevelPlaylist(e,t,r,i):this._handleMasterPlaylist(e,t,r,i):this._handleManifestParsingError(e,r,"no EXTM3U delimiter",i)},r.prototype.loaderror=function(e,t,r){void 0===r&&(r=null),this._handleNetworkError(t,r,!1,e)},r.prototype.loadtimeout=function(e,t,r){void 0===r&&(r=null),this._handleNetworkError(t,r,!0)},r.prototype._handleMasterPlaylist=function(e,t,i,n){var o=this.hls,l=e.data,d=r.getResponseUrl(e,i),f=u.default.parseMasterPlaylist(l,d);if(f.length){var c=f.map(function(e){return{id:e.attrs.AUDIO,codec:e.audioCodec}}),h=u.default.parseMasterPlaylistMedia(l,d,"AUDIO",c),p=u.default.parseMasterPlaylistMedia(l,d,"SUBTITLES");if(h.length){var g=!1;h.forEach(function(e){e.url||(g=!0)}),!1===g&&f[0].audioCodec&&!f[0].attrs.AUDIO&&(s.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),h.unshift({type:"main",name:"main"}))}o.trigger(a.default.MANIFEST_LOADED,{levels:f,audioTracks:h,subtitles:p,url:d,stats:t,networkDetails:n})}else this._handleManifestParsingError(e,i,"no level found in manifest",n)},r.prototype._handleTrackOrLevelPlaylist=function(t,i,n,o){var s=this.hls,l=n.id,c=n.level,h=n.type,p=r.getResponseUrl(t,n),g=e.isFinite(l)?l:0,v=e.isFinite(c)?c:g,m=r.mapContextToLevelType(n),y=u.default.parseLevelPlaylist(t.data,p,v,m,g);if(y.tload=i.tload,h===f.MANIFEST){var _={url:p,details:y};s.trigger(a.default.MANIFEST_LOADED,{levels:[_],audioTracks:[],url:p,stats:i,networkDetails:o})}if(i.tparsed=d.now(),y.needSidxRanges){var E=y.initSegment.url;this.load(E,{isSidxRequest:!0,type:h,level:c,levelDetails:y,id:l,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer"})}else n.levelDetails=y,this._handlePlaylistLoaded(t,i,n,o)},r.prototype._handleSidxRequest=function(e,t){var r=l.default.parseSegmentIndex(new Uint8Array(e.data));if(r){var i=r.references,a=t.levelDetails;i.forEach(function(e,t){var r=e.info,i=a.fragments[t];0===i.byteRange.length&&(i.rawByteRange=String(1+r.end-r.start)+"@"+String(r.start))}),a.initSegment.rawByteRange=String(r.moovEndOffset)+"@0"}},r.prototype._handleManifestParsingError=function(e,t,r,i){this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:e.url,reason:r,networkDetails:i})},r.prototype._handleNetworkError=function(e,t,r,i){var n,l;void 0===r&&(r=!1),void 0===i&&(i=null),s.logger.info("A network error occured while loading a "+e.type+"-type playlist");var u=this.getInternalLoader(e);switch(e.type){case f.MANIFEST:n=r?o.ErrorDetails.MANIFEST_LOAD_TIMEOUT:o.ErrorDetails.MANIFEST_LOAD_ERROR,l=!0;break;case f.LEVEL:n=r?o.ErrorDetails.LEVEL_LOAD_TIMEOUT:o.ErrorDetails.LEVEL_LOAD_ERROR,l=!1;break;case f.AUDIO_TRACK:n=r?o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,l=!1;break;default:l=!1}u&&(u.abort(),this.resetInternalLoader(e.type));var d={type:o.ErrorTypes.NETWORK_ERROR,details:n,fatal:l,url:u.url,loader:u,context:e,networkDetails:t};i&&(d.response=i),this.hls.trigger(a.default.ERROR,d)},r.prototype._handlePlaylistLoaded=function(e,t,i,n){var o=i.type,s=i.level,l=i.id,u=i.levelDetails;if(u.targetduration)if(r.canHaveQualityLevels(i.type))this.hls.trigger(a.default.LEVEL_LOADED,{details:u,level:s||0,id:l||0,stats:t,networkDetails:n});else switch(o){case f.AUDIO_TRACK:this.hls.trigger(a.default.AUDIO_TRACK_LOADED,{details:u,id:l,stats:t,networkDetails:n});break;case f.SUBTITLE_TRACK:this.hls.trigger(a.default.SUBTITLE_TRACK_LOADED,{details:u,id:l,stats:t,networkDetails:n})}else this._handleManifestParsingError(e,i,"invalid target duration",n)},r}(n.default);t.default=h}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(1),n=Math.pow(2,32)-1,o=function(){function e(e,t){this.observer=e,this.remuxer=t}return e.prototype.resetTimeStamp=function(e){this.initPTS=e},e.prototype.resetInitSegment=function(t,r,i,n){if(t&&t.byteLength){var o=this.initData=e.parseInitSegment(t);null==r&&(r="mp4a.40.5"),null==i&&(i="avc1.42e01e");var s={};o.audio&&o.video?s.audiovideo={container:"video/mp4",codec:r+","+i,initSegment:n?t:null}:(o.audio&&(s.audio={container:"audio/mp4",codec:r,initSegment:n?t:null}),o.video&&(s.video={container:"video/mp4",codec:i,initSegment:n?t:null})),this.observer.trigger(a.default.FRAG_PARSING_INIT_SEGMENT,{tracks:s})}else r&&(this.audioCodec=r),i&&(this.videoCodec=i)},e.probe=function(t){return e.findBox({data:t,start:0,end:Math.min(t.length,16384)},["moof"]).length>0},e.bin2str=function(e){return String.fromCharCode.apply(null,e)},e.readUint16=function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<8|e[t+1];return r<0?65536+r:r},e.readUint32=function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3];return r<0?4294967296+r:r},e.writeUint32=function(e,t,r){e.data&&(t+=e.start,e=e.data),e[t]=r>>24,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r},e.findBox=function(t,r){var i,a,n,o,s,l,u,d=[];if(t.data?(l=t.start,o=t.end,t=t.data):(l=0,o=t.byteLength),!r.length)return null;for(i=l;i<o;)a=e.readUint32(t,i),n=e.bin2str(t.subarray(i+4,i+8)),u=a>1?i+a:o,n===r[0]&&(1===r.length?d.push({data:t,start:i+8,end:u}):(s=e.findBox({data:t,start:i+8,end:u},r.slice(1))).length&&(d=d.concat(s))),i=u;return d},e.parseSegmentIndex=function(t){var r,i=e.findBox(t,["moov"])[0],a=i?i.end:null,n=0,o=e.findBox(t,["sidx"]);if(!o||!o[0])return null;r=[];var s=(o=o[0]).data[0];n=0===s?8:16;var l=e.readUint32(o,n);n+=4;n+=0===s?8:16,n+=2;var u=o.end+0,d=e.readUint16(o,n);n+=2;for(var f=0;f<d;f++){var c=n,h=e.readUint32(o,c);c+=4;var p=2147483647&h;if(1===(2147483648&h)>>>31)return void console.warn("SIDX has hierarchical references (not supported)");var g=e.readUint32(o,c);c+=4,r.push({referenceSize:p,subsegmentDuration:g,info:{duration:g/l,start:u,end:u+p-1}}),u+=p,n=c+=4}return{earliestPresentationTime:0,timescale:l,version:s,referencesCount:d,references:r,moovEndOffset:a}},e.parseInitSegment=function(t){var r=[];return e.findBox(t,["moov","trak"]).forEach(function(t){var a=e.findBox(t,["tkhd"])[0];if(a){var n=a.data[a.start],o=0===n?12:20,s=e.readUint32(a,o),l=e.findBox(t,["mdia","mdhd"])[0];if(l){o=0===(n=l.data[l.start])?12:20;var u=e.readUint32(l,o),d=e.findBox(t,["mdia","hdlr"])[0];if(d){var f={soun:"audio",vide:"video"}[e.bin2str(d.data.subarray(d.start+8,d.start+12))];if(f){var c=e.findBox(t,["mdia","minf","stbl","stsd"]);if(c.length){c=c[0];var h=e.bin2str(c.data.subarray(c.start+12,c.start+16));i.logger.log("MP4Demuxer:"+f+":"+h+" found")}r[s]={timescale:u,type:f},r[f]={timescale:u,id:s}}}}}}),r},e.getStartDTS=function(t,r){var i,a,n;return i=e.findBox(r,["moof","traf"]),a=[].concat.apply([],i.map(function(r){return e.findBox(r,["tfhd"]).map(function(i){var a,n;return a=e.readUint32(i,4),n=t[a].timescale||9e4,e.findBox(r,["tfdt"]).map(function(t){var r,i;return r=t.data[t.start],i=e.readUint32(t,4),1===r&&(i*=Math.pow(2,32),i+=e.readUint32(t,8)),i})[0]/n})})),n=Math.min.apply(null,a),isFinite(n)?n:0},e.offsetStartDTS=function(t,r,i){e.findBox(r,["moof","traf"]).map(function(r){return e.findBox(r,["tfhd"]).map(function(a){var o=e.readUint32(a,4),s=t[o].timescale||9e4;e.findBox(r,["tfdt"]).map(function(t){var r=t.data[t.start],a=e.readUint32(t,4);if(0===r)e.writeUint32(t,4,a-i*s);else{a*=Math.pow(2,32),a+=e.readUint32(t,8),a-=i*s,a=Math.max(a,0);var o=Math.floor(a/(n+1)),l=Math.floor(a%(n+1));e.writeUint32(t,4,o),e.writeUint32(t,8,l)}})})})},e.prototype.append=function(t,r,i,n){var o=this.initData;o||(this.resetInitSegment(t,this.audioCodec,this.videoCodec,!1),o=this.initData);var s,l=this.initPTS;if(void 0===l){var u=e.getStartDTS(o,t);this.initPTS=l=u-r,this.observer.trigger(a.default.INIT_PTS_FOUND,{initPTS:l})}e.offsetStartDTS(o,t,l),s=e.getStartDTS(o,t),this.remuxer.remux(o.audio,o.video,null,null,s,i,n,t)},e.prototype.destroy=function(){},e}();t.default=o},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),a=r(16),n=function(){function t(){var e;this._url=null,this._byteRange=null,this._decryptdata=null,this.tagList=[],this.programDateTime=null,this.rawProgramDateTime=null,this._elementaryStreams=((e={})[t.ElementaryStreamTypes.AUDIO]=!1,e[t.ElementaryStreamTypes.VIDEO]=!1,e)}return Object.defineProperty(t,"ElementaryStreamTypes",{get:function(){return{AUDIO:"audio",VIDEO:"video"}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return!this._url&&this.relurl&&(this._url=i.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(e){this._url=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"byteRange",{get:function(){if(!this._byteRange&&!this.rawByteRange)return[];if(this._byteRange)return this._byteRange;var e=[];if(this.rawByteRange){var t=this.rawByteRange.split("@",2);if(1===t.length){var r=this.lastByteRangeEndOffset;e[0]=r||0}else e[0]=parseInt(t[1]);e[1]=parseInt(t[0])+e[0],this._byteRange=e}return e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"byteRangeStartOffset",{get:function(){return this.byteRange[0]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"byteRangeEndOffset",{get:function(){return this.byteRange[1]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"decryptdata",{get:function(){return this._decryptdata||(this._decryptdata=this.fragmentDecryptdataFromLevelkey(this.levelkey,this.sn)),this._decryptdata},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"endProgramDateTime",{get:function(){if(!e.isFinite(this.programDateTime))return null;var t=e.isFinite(this.duration)?this.duration:0;return this.programDateTime+1e3*t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"encrypted",{get:function(){return!(!this.decryptdata||null===this.decryptdata.uri||null!==this.decryptdata.key)},enumerable:!0,configurable:!0}),t.prototype.addElementaryStream=function(e){this._elementaryStreams[e]=!0},t.prototype.hasElementaryStream=function(e){return!0===this._elementaryStreams[e]},t.prototype.createInitializationVector=function(e){for(var t=new Uint8Array(16),r=12;r<16;r++)t[r]=e>>8*(15-r)&255;return t},t.prototype.fragmentDecryptdataFromLevelkey=function(e,t){var r=e;return e&&e.method&&e.uri&&!e.iv&&((r=new a.default).method=e.method,r.baseuri=e.baseuri,r.reluri=e.reluri,r.iv=this.createInitializationVector(t)),r},t}();t.default=n}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),a=function(){function e(){this.method=null,this.key=null,this.iv=null,this._uri=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return!this._uri&&this.reluri&&(this._uri=i.buildAbsoluteURL(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri},enumerable:!0,configurable:!0}),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0}};t.isCodecType=function(e,t){var r=i[t];return!!r&&!0===r[e.slice(0,4)]},t.isCodecSupportedInMp4=function(e,t){return window.MediaSource.isTypeSupported((t||"video")+'/mp4;codecs="'+e+'"')}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=r(1),n=r(3),o=r(19),s=r(36),l=r(14),u=r(37),d=r(40),f=r(41),c=r(44),h=r(6),p=r(0),g=h.getSelfScope();try{i=g.performance.now.bind(g.performance)}catch(e){p.logger.debug("Unable to use Performance API on this environment"),i=g.Date.now}var v=function(){function e(e,t,r,i){this.observer=e,this.typeSupported=t,this.config=r,this.vendor=i}return e.prototype.destroy=function(){var e=this.demuxer;e&&e.destroy()},e.prototype.push=function(e,t,r,n,s,l,u,d,f,c,h,p){var g=this;if(e.byteLength>0&&null!=t&&null!=t.key&&"AES-128"===t.method){var v=this.decrypter;null==v&&(v=this.decrypter=new o.default(this.observer,this.config));var m=i();v.decrypt(e,t.key.buffer,t.iv.buffer,function(e){var o=i();g.observer.trigger(a.default.FRAG_DECRYPTED,{stats:{tstart:m,tdecrypt:o}}),g.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),n,s,l,u,d,f,c,h,p)})}else this.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),n,s,l,u,d,f,c,h,p)},e.prototype.pushDecrypted=function(e,t,r,i,o,h,p,g,v,m,y,_){var E=this.demuxer;if(!E||(p||g)&&!this.probe(e)){for(var b=this.observer,S=this.typeSupported,T=this.config,A=[{demux:u.default,remux:f.default},{demux:l.default,remux:c.default},{demux:s.default,remux:f.default},{demux:d.default,remux:f.default}],R=0,L=A.length;R<L;R++){var D=A[R],O=D.demux.probe;if(O(e)){var w=this.remuxer=new D.remux(b,T,S,this.vendor);E=new D.demux(b,w,T,S),this.probe=O;break}}if(!E)return void b.trigger(a.default.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});this.demuxer=E}var P=this.remuxer;(p||g)&&(E.resetInitSegment(r,i,o,m),P.resetInitSegment()),p&&(E.resetTimeStamp(_),P.resetTimeStamp(_)),"function"==typeof E.setDecryptData&&E.setDecryptData(t),E.append(e,h,v,y)},e}();t.default=v},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(33),a=r(34),n=r(35),o=r(3),s=r(0),l=r(1),u=r(6).getSelfScope(),d=function(){function e(e,t,r){var i=(void 0===r?{}:r).removePKCS7Padding,a=void 0===i||i;if(this.logEnabled=!0,this.observer=e,this.config=t,this.removePKCS7Padding=a,a)try{var n=u.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch(e){}this.disableWebCrypto=!this.subtle}return e.prototype.isSync=function(){return this.disableWebCrypto&&this.config.enableSoftwareAES},e.prototype.decrypt=function(e,t,r,o){var l=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(s.logger.log("JS AES decrypt"),this.logEnabled=!1);var u=this.decryptor;u||(this.decryptor=u=new n.default),u.expandKey(t),o(u.decrypt(e,0,r,this.removePKCS7Padding))}else{this.logEnabled&&(s.logger.log("WebCrypto AES decrypt"),this.logEnabled=!1);var d=this.subtle;this.key!==t&&(this.key=t,this.fastAesKey=new a.default(d,t)),this.fastAesKey.expandKey().then(function(a){new i.default(d,r).decrypt(e,a).catch(function(i){l.onWebCryptoError(i,e,t,r,o)}).then(function(e){o(e)})}).catch(function(i){l.onWebCryptoError(i,e,t,r,o)})}},e.prototype.onWebCryptoError=function(e,t,r,i,a){this.config.enableSoftwareAES?(s.logger.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(t,r,i,a)):(s.logger.error("decrypting error : "+e.message),this.observer.trigger(l.default.ERROR,{type:o.ErrorTypes.MEDIA_ERROR,details:o.ErrorDetails.FRAG_DECRYPT_ERROR,fatal:!0,reason:e.message}))},e.prototype.destroy=function(){var e=this.decryptor;e&&(e.destroy(),this.decryptor=void 0)},e}();t.default=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(3),n=r(1);function o(e,t,r,o){var s,l,u,d,f,c=navigator.userAgent.toLowerCase(),h=o,p=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];if(s=1+((192&t[r+2])>>>6),!((l=(60&t[r+2])>>>2)>p.length-1))return d=(1&t[r+2])<<2,d|=(192&t[r+3])>>>6,i.logger.log("manifest codec:"+o+",ADTS data:type:"+s+",sampleingIndex:"+l+"["+p[l]+"Hz],channelConfig:"+d),/firefox/i.test(c)?l>=6?(s=5,f=new Array(4),u=l-3):(s=2,f=new Array(2),u=l):-1!==c.indexOf("android")?(s=2,f=new Array(2),u=l):(s=5,f=new Array(4),o&&(-1!==o.indexOf("mp4a.40.29")||-1!==o.indexOf("mp4a.40.5"))||!o&&l>=6?u=l-3:((o&&-1!==o.indexOf("mp4a.40.2")&&(l>=6&&1===d||/vivaldi/i.test(c))||!o&&1===d)&&(s=2,f=new Array(2)),u=l)),f[0]=s<<3,f[0]|=(14&l)>>1,f[1]|=(1&l)<<7,f[1]|=d<<3,5===s&&(f[1]|=(14&u)>>1,f[2]=(1&u)<<7,f[2]|=8,f[3]=0),{config:f,samplerate:p[l],channelCount:d,codec:"mp4a.40."+s,manifestCodec:h};e.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+l})}function s(e,t){return 255===e[t]&&240==(246&e[t+1])}function l(e,t){return 1&e[t+1]?7:9}function u(e,t){return(3&e[t+3])<<11|e[t+4]<<3|(224&e[t+5])>>>5}function d(e){return 9216e4/e}function f(e,t,r,i,a){var n,o,s=e.length;if(n=l(e,t),o=u(e,t),(o-=n)>0&&t+n+o<=s)return{headerLength:n,frameLength:o,stamp:r+i*a}}t.getAudioConfig=o,t.isHeaderPattern=s,t.getHeaderLength=l,t.getFullFrameLength=u,t.isHeader=function(e,t){return!!(t+1<e.length&&s(e,t))},t.probe=function(e,t){if(t+1<e.length&&s(e,t)){var r=l(e,t);t+5<e.length&&(r=u(e,t));var i=t+r;if(i===e.length||i+1<e.length&&s(e,i))return!0}return!1},t.initTrackConfig=function(e,t,r,a,n){if(!e.samplerate){var s=o(t,r,a,n);e.config=s.config,e.samplerate=s.samplerate,e.channelCount=s.channelCount,e.codec=s.codec,e.manifestCodec=s.manifestCodec,i.logger.log("parsed codec:"+e.codec+",rate:"+s.samplerate+",nb channel:"+s.channelCount)}},t.getFrameDuration=d,t.parseFrameHeader=f,t.appendFrame=function(e,t,r,i,a){var n=f(t,r,i,a,d(e.samplerate));if(n){var o=n.stamp,s=n.headerLength,l=n.frameLength,u={unit:t.subarray(r+s,r+s+l),pts:o,dts:o};return e.samples.push(u),e.len+=l,{sample:u,length:l+s}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={BitratesMap:[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],SamplingRateMap:[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],SamplesCoefficients:[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],BytesInSlot:[0,1,1,4],appendFrame:function(e,t,r,i,a){if(!(r+24>t.length)){var n=this.parseHeader(t,r);if(n&&r+n.frameLength<=t.length){var o=i+a*(9e4*n.samplesPerFrame/n.sampleRate),s={unit:t.subarray(r,r+n.frameLength),pts:o,dts:o};return e.config=[],e.channelCount=n.channelCount,e.samplerate=n.sampleRate,e.samples.push(s),e.len+=n.frameLength,{sample:s,length:n.frameLength}}}},parseHeader:function(e,t){var r=e[t+1]>>3&3,a=e[t+1]>>1&3,n=e[t+2]>>4&15,o=e[t+2]>>2&3,s=e[t+2]>>1&1;if(1!==r&&0!==n&&15!==n&&3!==o){var l=3===r?3-a:3===a?3:4,u=1e3*i.BitratesMap[14*l+n-1],d=3===r?0:2===r?1:2,f=i.SamplingRateMap[3*d+o],c=e[t+3]>>6==3?1:2,h=i.SamplesCoefficients[r][a],p=i.BytesInSlot[a],g=8*h*p;return{sampleRate:f,channelCount:c,frameLength:parseInt(h*u/f+s,10)*p,samplesPerFrame:g}}},isHeaderPattern:function(e,t){return 255===e[t]&&224==(224&e[t+1])&&0!=(6&e[t+1])},isHeader:function(e,t){return!!(t+1<e.length&&this.isHeaderPattern(e,t))},probe:function(e,t){if(t+1<e.length&&this.isHeaderPattern(e,t)){var r=this.parseHeader(e,t),i=4;r&&r.frameLength&&(i=r.frameLength);var a=t+i;if(a===e.length||a+1<e.length&&this.isHeaderPattern(e,a))return!0}return!1}};t.default=i},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.trigger=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this.emit.apply(this,[e,e].concat(t))},t}(r(45).EventEmitter);t.Observer=a},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(0);function a(t,r,a){var n=t[r],o=t[a],s=o.startPTS;e.isFinite(s)?a>r?(n.duration=s-n.start,n.duration<0&&i.logger.warn("negative duration computed for frag "+n.sn+",level "+n.level+", there should be some duration drift between playlist and fragment!")):(o.duration=n.start-s,o.duration<0&&i.logger.warn("negative duration computed for frag "+o.sn+",level "+o.level+", there should be some duration drift between playlist and fragment!")):o.start=a>r?n.start+n.duration:Math.max(n.start-o.duration,0)}function n(t,r,i,n,o,s){var l=i;if(e.isFinite(r.startPTS)){var u=Math.abs(r.startPTS-i);e.isFinite(r.deltaPTS)?r.deltaPTS=Math.max(u,r.deltaPTS):r.deltaPTS=u,l=Math.max(i,r.startPTS),i=Math.min(i,r.startPTS),n=Math.max(n,r.endPTS),o=Math.min(o,r.startDTS),s=Math.max(s,r.endDTS)}var d=i-r.start;r.start=r.startPTS=i,r.maxStartPTS=l,r.endPTS=n,r.startDTS=o,r.endDTS=s,r.duration=n-i;var f,c,h,p=r.sn;if(!t||p<t.startSN||p>t.endSN)return 0;for(f=p-t.startSN,(c=t.fragments)[f]=r,h=f;h>0;h--)a(c,h,h-1);for(h=f;h<c.length-1;h++)a(c,h,h+1);return t.PTSKnown=!0,d}t.addGroupId=function(e,t,r){switch(t){case"audio":e.audioGroupIds||(e.audioGroupIds=[]),e.audioGroupIds.push(r);break;case"text":e.textGroupIds||(e.textGroupIds=[]),e.textGroupIds.push(r)}},t.updatePTS=a,t.updateFragPTSDTS=n,t.mergeDetails=function(t,r){var a,o=Math.max(t.startSN,r.startSN)-r.startSN,s=Math.min(t.endSN,r.endSN)-r.startSN,l=r.startSN-t.startSN,u=t.fragments,d=r.fragments,f=0;if(r.initSegment&&t.initSegment&&(r.initSegment=t.initSegment),s<o)r.PTSKnown=!1;else{for(var c=o;c<=s;c++){var h=u[l+c],p=d[c];p&&h&&(f=h.cc-p.cc,e.isFinite(h.startPTS)&&(p.start=p.startPTS=h.startPTS,p.endPTS=h.endPTS,p.duration=h.duration,p.backtracked=h.backtracked,p.dropped=h.dropped,a=p))}if(f)for(i.logger.log("discontinuity sliding from playlist, take drift into account"),c=0;c<d.length;c++)d[c].cc+=f;if(a)n(r,a,a.startPTS,a.endPTS,a.startDTS,a.endDTS);else if(l>=0&&l<u.length){var g=u[l].start;for(c=0;c<d.length;c++)d[c].start+=g}r.PTSKnown=t.PTSKnown}}}).call(this,r(2).Number)},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),n=r(3),o=r(13),s=r(28),l=r(29),u=r(9),d=r(30),f=r(54),c=r(55),h=r(57),p=r(0),g=r(58),v=r(1),m=function(e){function t(r){void 0===r&&(r={});var i=e.call(this)||this,a=t.DefaultConfig;if((r.liveSyncDurationCount||r.liveMaxLatencyDurationCount)&&(r.liveSyncDuration||r.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for(var n in a)n in r||(r[n]=a[n]);if(void 0!==r.liveMaxLatencyDurationCount&&r.liveMaxLatencyDurationCount<=r.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==r.liveMaxLatencyDuration&&(r.liveMaxLatencyDuration<=r.liveSyncDuration||void 0===r.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');p.enableLogs(r.debug),i.config=r,i._autoLevelCapping=-1;var h=i.abrController=new r.abrController(i),g=new r.bufferController(i),v=new r.capLevelController(i),m=new r.fpsController(i),y=new o.default(i),_=new s.default(i),E=new l.default(i),b=new c.default(i),S=i.levelController=new f.default(i),T=new u.FragmentTracker(i),A=[S,i.streamController=new d.default(i,T)],R=r.audioStreamController;R&&A.push(new R(i,T)),i.networkControllers=A;var L=[y,_,E,h,g,v,m,b,T];if(R=r.audioTrackController){var D=new R(i);i.audioTrackController=D,L.push(D)}if(R=r.subtitleTrackController){var O=new R(i);i.subtitleTrackController=O,L.push(O)}if(R=r.emeController){var w=new R(i);i.emeController=w,L.push(w)}return(R=r.subtitleStreamController)&&L.push(new R(i,T)),(R=r.timelineController)&&L.push(new R(i)),i.coreComponents=L,i}return i(t,e),Object.defineProperty(t,"version",{get:function(){return"0.12.2"},enumerable:!0,configurable:!0}),t.isSupported=function(){return h.isSupported()},Object.defineProperty(t,"Events",{get:function(){return v.default},enumerable:!0,configurable:!0}),Object.defineProperty(t,"ErrorTypes",{get:function(){return n.ErrorTypes},enumerable:!0,configurable:!0}),Object.defineProperty(t,"ErrorDetails",{get:function(){return n.ErrorDetails},enumerable:!0,configurable:!0}),Object.defineProperty(t,"DefaultConfig",{get:function(){return t.defaultConfig?t.defaultConfig:g.hlsDefaultConfig},set:function(e){t.defaultConfig=e},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){p.logger.log("destroy"),this.trigger(v.default.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach(function(e){e.destroy()}),this.url=null,this.removeAllListeners(),this._autoLevelCapping=-1},t.prototype.attachMedia=function(e){p.logger.log("attachMedia"),this.media=e,this.trigger(v.default.MEDIA_ATTACHING,{media:e})},t.prototype.detachMedia=function(){p.logger.log("detachMedia"),this.trigger(v.default.MEDIA_DETACHING),this.media=null},t.prototype.loadSource=function(e){e=a.buildAbsoluteURL(window.location.href,e,{alwaysNormalize:!0}),p.logger.log("loadSource:"+e),this.url=e,this.trigger(v.default.MANIFEST_LOADING,{url:e})},t.prototype.startLoad=function(e){void 0===e&&(e=-1),p.logger.log("startLoad("+e+")"),this.networkControllers.forEach(function(t){t.startLoad(e)})},t.prototype.stopLoad=function(){p.logger.log("stopLoad"),this.networkControllers.forEach(function(e){e.stopLoad()})},t.prototype.swapAudioCodec=function(){p.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()},t.prototype.recoverMediaError=function(){p.logger.log("recoverMediaError");var e=this.media;this.detachMedia(),this.attachMedia(e)},Object.defineProperty(t.prototype,"levels",{get:function(){return this.levelController.levels},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentLevel",{get:function(){return this.streamController.currentLevel},set:function(e){p.logger.log("set currentLevel:"+e),this.loadLevel=e,this.streamController.immediateLevelSwitch()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nextLevel",{get:function(){return this.streamController.nextLevel},set:function(e){p.logger.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"loadLevel",{get:function(){return this.levelController.level},set:function(e){p.logger.log("set loadLevel:"+e),this.levelController.manualLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nextLoadLevel",{get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"firstLevel",{get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(e){p.logger.log("set firstLevel:"+e),this.levelController.firstLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"startLevel",{get:function(){return this.levelController.startLevel},set:function(e){p.logger.log("set startLevel:"+e);-1!==e&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoLevelCapping",{get:function(){return this._autoLevelCapping},set:function(e){p.logger.log("set autoLevelCapping:"+e),this._autoLevelCapping=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoLevelEnabled",{get:function(){return-1===this.levelController.manualLevel},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"manualLevel",{get:function(){return this.levelController.manualLevel},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"minAutoLevel",{get:function(){for(var e=this.levels,t=this.config.minAutoBitrate,r=e?e.length:0,i=0;i<r;i++){if((e[i].realBitrate?Math.max(e[i].realBitrate,e[i].bitrate):e[i].bitrate)>t)return i}return 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxAutoLevel",{get:function(){var e=this.levels,t=this.autoLevelCapping;return-1===t&&e&&e.length?e.length-1:t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nextAutoLevel",{get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(e){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"audioTracks",{get:function(){var e=this.audioTrackController;return e?e.audioTracks:[]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"audioTrack",{get:function(){var e=this.audioTrackController;return e?e.audioTrack:-1},set:function(e){var t=this.audioTrackController;t&&(t.audioTrack=e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"liveSyncPosition",{get:function(){return this.streamController.liveSyncPosition},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"subtitleTracks",{get:function(){var e=this.subtitleTrackController;return e?e.subtitleTracks:[]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"subtitleTrack",{get:function(){var e=this.subtitleTrackController;return e?e.subtitleTrack:-1},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleTrack=e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"subtitleDisplay",{get:function(){var e=this.subtitleTrackController;return!!e&&e.subtitleDisplay},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)},enumerable:!0,configurable:!0}),t}(r(22).Observer);t.default=m},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),a=r(15),n=r(26),o=r(16),s=r(27),l=r(0),u=r(17),d=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,f=/#EXT-X-MEDIA:(.*)/g,c=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/|(?!#)([\S+ ?]+)/.source,/|#EXT-X-BYTERANGE:*(.+)/.source,/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/|#.*/.source].join(""),"g"),h=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,p=/\.(mp4|m4s|m4v|m4a)$/i,g=function(){function t(){}return t.findGroup=function(e,t){if(!e)return null;for(var r=null,i=0;i<e.length;i++){var a=e[i];a.id===t&&(r=a)}return r},t.convertAVC1ToAVCOTI=function(e){var t,r=e.split(".");return r.length>2?(t=r.shift()+".",t+=parseInt(r.shift()).toString(16),t+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):t=e,t},t.resolve=function(e,t){return i.buildAbsoluteURL(t,e,{alwaysNormalize:!0})},t.parseMasterPlaylist=function(e,r){var i,a=[];function n(e,t){["video","audio"].forEach(function(r){var i=e.filter(function(e){return u.isCodecType(e,r)});if(i.length){var a=i.filter(function(e){return 0===e.lastIndexOf("avc1",0)||0===e.lastIndexOf("mp4a",0)});t[r+"Codec"]=a.length>0?a[0]:i[0],e=e.filter(function(e){return-1===i.indexOf(e)})}}),t.unknownCodecs=e}for(d.lastIndex=0;null!=(i=d.exec(e));){var o={},l=o.attrs=new s.default(i[1]);o.url=t.resolve(i[2],r);var f=l.decimalResolution("RESOLUTION");f&&(o.width=f.width,o.height=f.height),o.bitrate=l.decimalInteger("AVERAGE-BANDWIDTH")||l.decimalInteger("BANDWIDTH"),o.name=l.NAME,n([].concat((l.CODECS||"").split(/[ ,]+/)),o),o.videoCodec&&-1!==o.videoCodec.indexOf("avc1")&&(o.videoCodec=t.convertAVC1ToAVCOTI(o.videoCodec)),a.push(o)}return a},t.parseMasterPlaylistMedia=function(e,r,i,a){var n;void 0===a&&(a=[]);var o=[],l=0;for(f.lastIndex=0;null!==(n=f.exec(e));){var u={},d=new s.default(n[1]);if(d.TYPE===i){if(u.groupId=d["GROUP-ID"],u.name=d.NAME,u.type=i,u.default="YES"===d.DEFAULT,u.autoselect="YES"===d.AUTOSELECT,u.forced="YES"===d.FORCED,d.URI&&(u.url=t.resolve(d.URI,r)),u.lang=d.LANGUAGE,u.name||(u.name=u.lang),a.length){var c=t.findGroup(a,u.groupId);u.audioCodec=c?c.codec:a[0].codec}u.id=l++,o.push(u)}}return o},t.parseLevelPlaylist=function(t,r,i,u,d){var f,g,m=0,y=0,_=new n.default(r),E=new o.default,b=0,S=null,T=new a.default,A=null;for(c.lastIndex=0;null!==(f=c.exec(t));){var R=f[1];if(R){T.duration=parseFloat(R);var L=(" "+f[2]).slice(1);T.title=L||null,T.tagList.push(L?["INF",R,L]:["INF",R])}else if(f[3]){if(e.isFinite(T.duration)){var D=m++;T.type=u,T.start=y,T.levelkey=E,T.sn=D,T.level=i,T.cc=b,T.urlId=d,T.baseurl=r,T.relurl=(" "+f[3]).slice(1),v(T,S),_.fragments.push(T),S=T,y+=T.duration,T=new a.default}}else if(f[4]){if(T.rawByteRange=(" "+f[4]).slice(1),S){var O=S.byteRangeEndOffset;O&&(T.lastByteRangeEndOffset=O)}}else if(f[5])T.rawProgramDateTime=(" "+f[5]).slice(1),T.tagList.push(["PROGRAM-DATE-TIME",T.rawProgramDateTime]),null===A&&(A=_.fragments.length);else{for(f=f[0].match(h),g=1;g<f.length&&void 0===f[g];g++);var w=(" "+f[g+1]).slice(1),P=(" "+f[g+2]).slice(1);switch(f[g]){case"#":T.tagList.push(P?[w,P]:[w]);break;case"PLAYLIST-TYPE":_.type=w.toUpperCase();break;case"MEDIA-SEQUENCE":m=_.startSN=parseInt(w);break;case"TARGETDURATION":_.targetduration=parseFloat(w);break;case"VERSION":_.version=parseInt(w);break;case"EXTM3U":break;case"ENDLIST":_.live=!1;break;case"DIS":b++,T.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":b=parseInt(w);break;case"KEY":var I=w,x=new s.default(I),F=x.enumeratedString("METHOD"),k=x.URI,C=x.hexadecimalInteger("IV");F&&(E=new o.default,k&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(F)>=0&&(E.method=F,E.baseuri=r,E.reluri=k,E.key=null,E.iv=C));break;case"START":var M=w,U=new s.default(M).decimalFloatingPoint("TIME-OFFSET");e.isFinite(U)&&(_.startTimeOffset=U);break;case"MAP":var N=new s.default(w);T.relurl=N.URI,T.rawByteRange=N.BYTERANGE,T.baseurl=r,T.level=i,T.type=u,T.sn="initSegment",_.initSegment=T,(T=new a.default).rawProgramDateTime=_.initSegment.rawProgramDateTime;break;default:l.logger.warn("line parsed but not handled: "+f)}}}return(T=S)&&!T.relurl&&(_.fragments.pop(),y-=T.duration),_.totalduration=y,_.averagetargetduration=y/_.fragments.length,_.endSN=m-1,_.startCC=_.fragments[0]?_.fragments[0].cc:0,_.endCC=b,!_.initSegment&&_.fragments.length&&_.fragments.every(function(e){return p.test(e.relurl)})&&(l.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),(T=new a.default).relurl=_.fragments[0].relurl,T.baseurl=r,T.level=i,T.type=u,T.sn="initSegment",_.initSegment=T,_.needSidxRanges=!0),A&&function(e,t){for(var r=e[t],i=t-1;i>=0;i--){var a=e[i];a.programDateTime=r.programDateTime-1e3*a.duration,r=a}}(_.fragments,A),_},t}();function v(t,r){t.rawProgramDateTime?t.programDateTime=Date.parse(t.rawProgramDateTime):r&&r.programDateTime&&(t.programDateTime=r.endProgramDateTime),e.isFinite(t.programDateTime)||(t.programDateTime=null,t.rawProgramDateTime=null)}t.default=g}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function t(e){this.endCC=0,this.endSN=0,this.fragments=[],this.initSegment=null,this.live=!0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=e,this.version=null}return Object.defineProperty(t.prototype,"hasProgramDateTime",{get:function(){return!(!this.fragments[0]||!e.isFinite(this.fragments[0].programDateTime))},enumerable:!0,configurable:!0}),t}();t.default=r}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=/^(\d+)x(\d+)$/,i=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,a=function(){function t(e){for(var r in"string"==typeof e&&(e=t.parseAttrList(e)),e)e.hasOwnProperty(r)&&(this[r]=e[r])}return t.prototype.decimalInteger=function(t){var r=parseInt(this[t],10);return r>e.MAX_SAFE_INTEGER?1/0:r},t.prototype.hexadecimalInteger=function(e){if(this[e]){var t=(this[e]||"0x").slice(2);t=(1&t.length?"0":"")+t;for(var r=new Uint8Array(t.length/2),i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(2*i,2*i+2),16);return r}return null},t.prototype.hexadecimalIntegerAsNumber=function(t){var r=parseInt(this[t],16);return r>e.MAX_SAFE_INTEGER?1/0:r},t.prototype.decimalFloatingPoint=function(e){return parseFloat(this[e])},t.prototype.enumeratedString=function(e){return this[e]},t.prototype.decimalResolution=function(e){var t=r.exec(this[e]);if(null!==t)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}},t.parseAttrList=function(e){var t,r={};for(i.lastIndex=0;null!==(t=i.exec(e));){var a=t[2];0===a.indexOf('"')&&a.lastIndexOf('"')===a.length-1&&(a=a.slice(1,-1)),r[t[1]]=a}return r},t}();t.default=a}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(3),s=r(0),l=function(t){function r(e){var r=t.call(this,e,a.default.FRAG_LOADING)||this;return r.loaders={},r}return i(r,t),r.prototype.destroy=function(){var e=this.loaders;for(var r in e){var i=e[r];i&&i.destroy()}this.loaders={},t.prototype.destroy.call(this)},r.prototype.onFragLoading=function(t){var r=t.frag,i=r.type,a=this.loaders,n=this.hls.config,o=n.fLoader,l=n.loader;r.loaded=0;var u,d,f,c=a[i];c&&(s.logger.warn("abort previous fragment loader for type: "+i),c.abort()),c=a[i]=r.loader=n.fLoader?new o(n):new l(n),u={url:r.url,frag:r,responseType:"arraybuffer",progressData:!1};var h=r.byteRangeStartOffset,p=r.byteRangeEndOffset;e.isFinite(h)&&e.isFinite(p)&&(u.rangeStart=h,u.rangeEnd=p),d={timeout:n.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:n.fragLoadingMaxRetryTimeout},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},c.load(u,d,f)},r.prototype.loadsuccess=function(e,t,r,i){void 0===i&&(i=null);var n=e.data,o=r.frag;o.loader=void 0,this.loaders[o.type]=void 0,this.hls.trigger(a.default.FRAG_LOADED,{payload:n,frag:o,stats:t,networkDetails:i})},r.prototype.loaderror=function(e,t,r){void 0===r&&(r=null);var i=t.frag,n=i.loader;n&&n.abort(),this.loaders[i.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:t.frag,response:e,networkDetails:r})},r.prototype.loadtimeout=function(e,t,r){void 0===r&&(r=null);var i=t.frag,n=i.loader;n&&n.abort(),this.loaders[i.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t.frag,networkDetails:r})},r.prototype.loadprogress=function(e,t,r,i){void 0===i&&(i=null);var n=t.frag;n.loaded=e.loaded,this.hls.trigger(a.default.FRAG_LOAD_PROGRESS,{frag:n,stats:e,networkDetails:i})},r}(n.default);t.default=l}).call(this,r(2).Number)},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(3),s=r(0),l=function(e){function t(t){var r=e.call(this,t,a.default.KEY_LOADING)||this;return r.loaders={},r.decryptkey=null,r.decrypturl=null,r}return i(t,e),t.prototype.destroy=function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy()}this.loaders={},n.default.prototype.destroy.call(this)},t.prototype.onKeyLoading=function(e){var t=e.frag,r=t.type,i=this.loaders[r],n=t.decryptdata,o=n.uri;if(o!==this.decrypturl||null===this.decryptkey){var l=this.hls.config;i&&(s.logger.warn("abort previous key loader for type:"+r),i.abort()),t.loader=this.loaders[r]=new l.loader(l),this.decrypturl=o,this.decryptkey=null;var u,d,f;u={url:o,frag:t,responseType:"arraybuffer"},d={timeout:l.fragLoadingTimeOut,maxRetry:0,retryDelay:l.fragLoadingRetryDelay,maxRetryDelay:l.fragLoadingMaxRetryTimeout},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},t.loader.load(u,d,f)}else this.decryptkey&&(n.key=this.decryptkey,this.hls.trigger(a.default.KEY_LOADED,{frag:t}))},t.prototype.loadsuccess=function(e,t,r){var i=r.frag;this.decryptkey=i.decryptdata.key=new Uint8Array(e.data),i.loader=void 0,this.loaders[i.type]=void 0,this.hls.trigger(a.default.KEY_LOADED,{frag:i})},t.prototype.loaderror=function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),this.loaders[t.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:r,response:e})},t.prototype.loadtimeout=function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),this.loaders[t.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},t}(n.default);t.default=l},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(10),n=r(8),o=r(31),s=r(1),l=r(9),u=r(15),d=r(13),f=r(23),c=r(48),h=r(3),p=r(0),g=r(49),v=r(50),m=r(51),y=r(52),_=function(t){function r(e,r){var i=t.call(this,e,s.default.MEDIA_ATTACHED,s.default.MEDIA_DETACHING,s.default.MANIFEST_LOADING,s.default.MANIFEST_PARSED,s.default.LEVEL_LOADED,s.default.KEY_LOADED,s.default.FRAG_LOADED,s.default.FRAG_LOAD_EMERGENCY_ABORTED,s.default.FRAG_PARSING_INIT_SEGMENT,s.default.FRAG_PARSING_DATA,s.default.FRAG_PARSED,s.default.ERROR,s.default.AUDIO_TRACK_SWITCHING,s.default.AUDIO_TRACK_SWITCHED,s.default.BUFFER_CREATED,s.default.BUFFER_APPENDED,s.default.BUFFER_FLUSHED)||this;return i.fragmentTracker=r,i.config=e.config,i.audioCodecSwap=!1,i._state=y.State.STOPPED,i.stallReported=!1,i.gapController=null,i}return i(r,t),r.prototype.onHandlerDestroying=function(){this.stopLoad(),t.prototype.onHandlerDestroying.call(this)},r.prototype.onHandlerDestroyed=function(){this.state=y.State.STOPPED,this.fragmentTracker=null,t.prototype.onHandlerDestroyed.call(this)},r.prototype.startLoad=function(e){if(this.levels){var t=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(i=0,this.bitrateTest=!0),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}t>0&&-1===e&&(p.logger.log("override startPosition with lastCurrentTime @"+t.toFixed(3)),e=t),this.state=y.State.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this.forceStartLoad=!0,this.state=y.State.STOPPED},r.prototype.stopLoad=function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragmentTracker.removeFragment(e),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.clearInterval(),this.state=y.State.STOPPED,this.forceStartLoad=!1},r.prototype.doTick=function(){switch(this.state){case y.State.BUFFER_FLUSHING:this.fragLoadError=0;break;case y.State.IDLE:this._doTickIdle();break;case y.State.WAITING_LEVEL:var e=this.levels[this.level];e&&e.details&&(this.state=y.State.IDLE);break;case y.State.FRAG_LOADING_WAITING_RETRY:var t=window.performance.now(),r=this.retryDate;(!r||t>=r||this.media&&this.media.seeking)&&(p.logger.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=y.State.IDLE);break;case y.State.ERROR:case y.State.STOPPED:case y.State.FRAG_LOADING:case y.State.PARSING:case y.State.PARSED:case y.State.ENDED:}this._checkBuffer(),this._checkFragmentChanged()},r.prototype._doTickIdle=function(){var e=this.hls,t=e.config,r=this.media;if(void 0!==this.levelLastLoaded&&(r||!this.startFragRequested&&t.startFragPrefetch)){var i;i=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var a=e.nextLoadLevel,o=this.levels[a];if(o){var l,u=o.bitrate;l=u?Math.max(8*t.maxBufferSize/u,t.maxBufferLength):t.maxBufferLength,l=Math.min(l,t.maxMaxBufferLength);var d=n.BufferHelper.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,i,t.maxBufferHole),f=d.len;if(!(f>=l)){p.logger.trace("buffer length of "+f.toFixed(3)+" is below max of "+l.toFixed(3)+". checking for more payload ..."),this.level=e.nextLoadLevel=a;var c=o.details;if(!c||c.live&&this.levelLastLoaded!==a)this.state=y.State.WAITING_LEVEL;else{if(this._streamEnded(d,c)){var h={};return this.altAudio&&(h.type="video"),this.hls.trigger(s.default.BUFFER_EOS,h),void(this.state=y.State.ENDED)}this._fetchPayloadOrEos(i,d,c)}}}}},r.prototype._fetchPayloadOrEos=function(e,t,r){var i=this.fragPrevious,a=this.level,n=r.fragments,o=n.length;if(0!==o){var s,l=n[0].start,u=n[o-1].start+n[o-1].duration,d=t.end;if(r.initSegment&&!r.initSegment.data)s=r.initSegment;else if(r.live){var f=this.config.initialLiveManifestSize;if(o<f)return void p.logger.warn("Can not start playback of a level, reason: not enough fragments "+o+" < "+f);if(null===(s=this._ensureFragmentAtLivePoint(r,d,l,u,i,n,o)))return}else d<l&&(s=n[0]);s||(s=this._findFragment(l,i,o,n,d,u,r)),s&&(s.encrypted?(p.logger.log("Loading key for "+s.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+a),this._loadKey(s)):(p.logger.log("Loading "+s.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+a+", currentTime:"+e.toFixed(3)+",bufferEnd:"+d.toFixed(3)),this._loadFragment(s)))}},r.prototype._ensureFragmentAtLivePoint=function(e,t,r,i,n,o,s){var l,u=this.hls.config,d=this.media,f=void 0!==u.liveMaxLatencyDuration?u.liveMaxLatencyDuration:u.liveMaxLatencyDurationCount*e.targetduration;if(t<Math.max(r-u.maxFragLookUpTolerance,i-f)){var c=this.liveSyncPosition=this.computeLivePosition(r,e);p.logger.log("buffer end: "+t.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+c.toFixed(3)),t=c,d&&d.readyState&&d.duration>c&&(d.currentTime=c),this.nextLoadPosition=c}if(e.PTSKnown&&t>i&&d&&d.readyState)return null;if(this.startFragRequested&&!e.PTSKnown){if(n)if(e.hasProgramDateTime)p.logger.log("live playlist, switching playlist, load frag with same PDT: "+n.programDateTime),l=v.findFragmentByPDT(o,n.endProgramDateTime,u.maxFragLookUpTolerance);else{var h=n.sn+1;if(h>=e.startSN&&h<=e.endSN){var g=o[h-e.startSN];n.cc===g.cc&&(l=g,p.logger.log("live playlist, switching playlist, load frag with next SN: "+l.sn))}l||(l=a.default.search(o,function(e){return n.cc-e.cc}))&&p.logger.log("live playlist, switching playlist, load frag with same CC: "+l.sn)}l||(l=o[Math.min(s-1,Math.round(s/2))],p.logger.log("live playlist, switching playlist, unknown, load middle frag : "+l.sn))}return l},r.prototype._findFragment=function(e,t,r,i,a,n,o){var s,l=this.hls.config;if(a<n){var u=a>n-l.maxFragLookUpTolerance?0:l.maxFragLookUpTolerance;s=v.findFragmentByPTS(t,i,a,u)}else s=i[r-1];if(s){var d=s.sn-o.startSN,f=t&&s.level===t.level,c=i[d-1],h=i[d+1];if(t&&s.sn===t.sn)if(f&&!s.backtracked)if(s.sn<o.endSN){var g=t.deltaPTS;g&&g>l.maxBufferHole&&t.dropped&&d?(s=c,p.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")):(s=h,p.logger.log("SN just loaded, load next one: "+s.sn,s))}else s=null;else s.backtracked&&(h&&h.backtracked?(p.logger.warn("Already backtracked from fragment "+h.sn+", will not backtrack to fragment "+s.sn+". Loading fragment "+h.sn),s=h):(p.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),s.dropped=0,c?(s=c).backtracked=!0:d&&(s=null)))}return s},r.prototype._loadKey=function(e){this.state=y.State.KEY_LOADING,this.hls.trigger(s.default.KEY_LOADING,{frag:e})},r.prototype._loadFragment=function(t){var r=this.fragmentTracker.getState(t);this.fragCurrent=t,this.startFragRequested=!0,e.isFinite(t.sn)&&!t.bitrateTest&&(this.nextLoadPosition=t.start+t.duration),t.backtracked||r===l.FragmentState.NOT_LOADED||r===l.FragmentState.PARTIAL?(t.autoLevel=this.hls.autoLevelEnabled,t.bitrateTest=this.bitrateTest,this.hls.trigger(s.default.FRAG_LOADING,{frag:t}),this.demuxer||(this.demuxer=new o.default(this.hls,"main")),this.state=y.State.FRAG_LOADING):r===l.FragmentState.APPENDING&&this._reduceMaxBufferLength(t.duration)&&this.fragmentTracker.removeFragment(t)},Object.defineProperty(r.prototype,"state",{get:function(){return this._state},set:function(e){if(this.state!==e){var t=this.state;this._state=e,p.logger.log("main stream:"+t+"->"+e),this.hls.trigger(s.default.STREAM_STATE_TRANSITION,{previousState:t,nextState:e})}},enumerable:!0,configurable:!0}),r.prototype.getBufferedFrag=function(e){return this.fragmentTracker.getBufferedFrag(e,d.default.LevelType.MAIN)},Object.defineProperty(r.prototype,"currentLevel",{get:function(){var e=this.media;if(e){var t=this.getBufferedFrag(e.currentTime);if(t)return t.level}return-1},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"nextBufferedFrag",{get:function(){var e=this.media;return e?this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)):null},enumerable:!0,configurable:!0}),r.prototype.followingBufferedFrag=function(e){return e?this.getBufferedFrag(e.endPTS+.5):null},Object.defineProperty(r.prototype,"nextLevel",{get:function(){var e=this.nextBufferedFrag;return e?e.level:-1},enumerable:!0,configurable:!0}),r.prototype._checkFragmentChanged=function(){var e,t,r=this.media;if(r&&r.readyState&&!1===r.seeking&&((t=r.currentTime)>this.lastCurrentTime&&(this.lastCurrentTime=t),n.BufferHelper.isBuffered(r,t)?e=this.getBufferedFrag(t):n.BufferHelper.isBuffered(r,t+.1)&&(e=this.getBufferedFrag(t+.1)),e)){var i=e;if(i!==this.fragPlaying){this.hls.trigger(s.default.FRAG_CHANGED,{frag:i});var a=i.level;this.fragPlaying&&this.fragPlaying.level===a||this.hls.trigger(s.default.LEVEL_SWITCHED,{level:a}),this.fragPlaying=i}}},r.prototype.immediateLevelSwitch=function(){if(p.logger.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var t=this.media,r=void 0;t?(r=t.paused,t.pause()):r=!0,this.previouslyPaused=r}var i=this.fragCurrent;i&&i.loader&&i.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(0,e.POSITIVE_INFINITY)},r.prototype.immediateLevelSwitchEnd=function(){var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,n.BufferHelper.isBuffered(e,e.currentTime)&&(e.currentTime-=1e-4),this.previouslyPaused||e.play())},r.prototype.nextLevelSwitch=function(){var t=this.media;if(t&&t.readyState){var r,i=void 0,a=void 0;if((r=this.getBufferedFrag(t.currentTime))&&r.startPTS>1&&this.flushMainBuffer(0,r.startPTS-1),t.paused)i=0;else{var n=this.hls.nextLoadLevel,o=this.levels[n],s=this.fragLastKbps;i=s&&this.fragCurrent?this.fragCurrent.duration*o.bitrate/(1e3*s)+1:0}if((a=this.getBufferedFrag(t.currentTime+i))&&(a=this.followingBufferedFrag(a))){var l=this.fragCurrent;l&&l.loader&&l.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(a.maxStartPTS,e.POSITIVE_INFINITY)}}},r.prototype.flushMainBuffer=function(e,t){this.state=y.State.BUFFER_FLUSHING;var r={startOffset:e,endOffset:t};this.altAudio&&(r.type="video"),this.hls.trigger(s.default.BUFFER_FLUSHING,r)},r.prototype.onMediaAttached=function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("seeked",this.onvseeked),t.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition),this.gapController=new m.default(r,t,this.fragmentTracker,this.hls)},r.prototype.onMediaDetaching=function(){var e=this.media;e&&e.ended&&(p.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.levels;t&&t.forEach(function(e){e.details&&e.details.fragments.forEach(function(e){e.backtracked=void 0})}),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("seeked",this.onvseeked),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()},r.prototype.onMediaSeeked=function(){var t=this.media,r=t?t.currentTime:void 0;e.isFinite(r)&&p.logger.log("media seeked to "+r.toFixed(3)),this.tick()},r.prototype.onManifestLoading=function(){p.logger.log("trigger BUFFER_RESET"),this.hls.trigger(s.default.BUFFER_RESET),this.fragmentTracker.removeAllFragments(),this.stalled=!1,this.startPosition=this.lastCurrentTime=0},r.prototype.onManifestParsed=function(e){var t,r=!1,i=!1;e.levels.forEach(function(e){(t=e.audioCodec)&&(-1!==t.indexOf("mp4a.40.2")&&(r=!0),-1!==t.indexOf("mp4a.40.5")&&(i=!0))}),this.audioCodecSwitch=r&&i,this.audioCodecSwitch&&p.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=e.levels,this.startFragRequested=!1;var a=this.config;(a.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(a.startPosition)},r.prototype.onLevelLoaded=function(t){var r=t.details,i=t.level,a=this.levels[this.levelLastLoaded],n=this.levels[i],o=r.totalduration,l=0;if(p.logger.log("level "+i+" loaded ["+r.startSN+","+r.endSN+"],duration:"+o),r.live){var u=n.details;u&&r.fragments.length>0?(f.mergeDetails(u,r),l=r.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(l,u),r.PTSKnown&&e.isFinite(l)?p.logger.log("live playlist sliding:"+l.toFixed(3)):(p.logger.log("live playlist - outdated PTS, unknown sliding"),g.alignStream(this.fragPrevious,a,r))):(p.logger.log("live playlist - first load, unknown sliding"),r.PTSKnown=!1,g.alignStream(this.fragPrevious,a,r))}else r.PTSKnown=!1;if(n.details=r,this.levelLastLoaded=i,this.hls.trigger(s.default.LEVEL_UPDATED,{details:r,level:i}),!1===this.startFragRequested){if(-1===this.startPosition||-1===this.lastCurrentTime){var d=r.startTimeOffset;e.isFinite(d)?(d<0&&(p.logger.log("negative start time offset "+d+", count from end of last fragment"),d=l+o+d),p.logger.log("start time offset found in playlist, adjust startPosition to "+d),this.startPosition=d):r.live?(this.startPosition=this.computeLivePosition(l,r),p.logger.log("configure startPosition to "+this.startPosition)):this.startPosition=0,this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===y.State.WAITING_LEVEL&&(this.state=y.State.IDLE),this.tick()},r.prototype.onKeyLoaded=function(){this.state===y.State.KEY_LOADING&&(this.state=y.State.IDLE,this.tick())},r.prototype.onFragLoaded=function(e){var t=this.fragCurrent,r=this.hls,i=this.levels,a=this.media,n=e.frag;if(this.state===y.State.FRAG_LOADING&&t&&"main"===n.type&&n.level===t.level&&n.sn===t.sn){var l=e.stats,u=i[t.level],d=u.details;if(this.bitrateTest=!1,this.stats=l,p.logger.log("Loaded "+t.sn+" of ["+d.startSN+" ,"+d.endSN+"],level "+t.level),n.bitrateTest&&r.nextLoadLevel)this.state=y.State.IDLE,this.startFragRequested=!1,l.tparsed=l.tbuffered=window.performance.now(),r.trigger(s.default.FRAG_BUFFERED,{stats:l,frag:t,id:"main"}),this.tick();else if("initSegment"===n.sn)this.state=y.State.IDLE,l.tparsed=l.tbuffered=window.performance.now(),d.initSegment.data=e.payload,r.trigger(s.default.FRAG_BUFFERED,{stats:l,frag:t,id:"main"}),this.tick();else{p.logger.log("Parsing "+t.sn+" of ["+d.startSN+" ,"+d.endSN+"],level "+t.level+", cc "+t.cc),this.state=y.State.PARSING,this.pendingBuffering=!0,this.appended=!1,n.bitrateTest&&(n.bitrateTest=!1,this.fragmentTracker.onFragLoaded({frag:n}));var f=!(a&&a.seeking)&&(d.PTSKnown||!d.live),c=d.initSegment?d.initSegment.data:[],h=this._getAudioCodec(u);(this.demuxer=this.demuxer||new o.default(this.hls,"main")).push(e.payload,c,h,u.videoCodec,t,d.totalduration,f)}}this.fragLoadError=0},r.prototype.onFragParsingInitSegment=function(e){var t=this.fragCurrent,r=e.frag;if(t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===y.State.PARSING){var i=e.tracks,a=void 0,n=void 0;if(i.audio&&this.altAudio&&delete i.audio,n=i.audio){var o=this.levels[this.level].audioCodec,l=navigator.userAgent.toLowerCase();o&&this.audioCodecSwap&&(p.logger.log("swapping playlist audio codec"),o=-1!==o.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==n.metadata.channelCount&&-1===l.indexOf("firefox")&&(o="mp4a.40.5"),-1!==l.indexOf("android")&&"audio/mpeg"!==n.container&&(o="mp4a.40.2",p.logger.log("Android: force audio codec to "+o)),n.levelCodec=o,n.id=e.id}for(a in(n=i.video)&&(n.levelCodec=this.levels[this.level].videoCodec,n.id=e.id),this.hls.trigger(s.default.BUFFER_CODECS,i),i){n=i[a],p.logger.log("main track:"+a+",container:"+n.container+",codecs[level/parsed]=["+n.levelCodec+"/"+n.codec+"]");var u=n.initSegment;u&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(s.default.BUFFER_APPENDING,{type:a,data:u,parent:"main",content:"initSegment"}))}this.tick()}},r.prototype.onFragParsingData=function(t){var r=this,i=this.fragCurrent,a=t.frag;if(i&&"main"===t.id&&a.sn===i.sn&&a.level===i.level&&("audio"!==t.type||!this.altAudio)&&this.state===y.State.PARSING){var n=this.levels[this.level],o=i;if(e.isFinite(t.endPTS)||(t.endPTS=t.startPTS+i.duration,t.endDTS=t.startDTS+i.duration),!0===t.hasAudio&&o.addElementaryStream(u.default.ElementaryStreamTypes.AUDIO),!0===t.hasVideo&&o.addElementaryStream(u.default.ElementaryStreamTypes.VIDEO),p.logger.log("Parsed "+t.type+",PTS:["+t.startPTS.toFixed(3)+","+t.endPTS.toFixed(3)+"],DTS:["+t.startDTS.toFixed(3)+"/"+t.endDTS.toFixed(3)+"],nb:"+t.nb+",dropped:"+(t.dropped||0)),"video"===t.type)if(o.dropped=t.dropped,o.dropped)if(o.backtracked)p.logger.warn("Already backtracked on this fragment, appending with the gap",o.sn);else{var l=n.details;if(!l||o.sn!==l.startSN)return p.logger.warn("missing video frame(s), backtracking fragment",o.sn),this.fragmentTracker.removeFragment(o),o.backtracked=!0,this.nextLoadPosition=t.startPTS,this.state=y.State.IDLE,this.fragPrevious=o,void this.tick();p.logger.warn("missing video frame(s) on first frag, appending with gap",o.sn)}else o.backtracked=!1;var d=f.updateFragPTSDTS(n.details,o,t.startPTS,t.endPTS,t.startDTS,t.endDTS),c=this.hls;c.trigger(s.default.LEVEL_PTS_UPDATED,{details:n.details,level:this.level,drift:d,type:t.type,start:t.startPTS,end:t.endPTS}),[t.data1,t.data2].forEach(function(e){e&&e.length&&r.state===y.State.PARSING&&(r.appended=!0,r.pendingBuffering=!0,c.trigger(s.default.BUFFER_APPENDING,{type:t.type,data:e,parent:"main",content:"data"}))}),this.tick()}},r.prototype.onFragParsed=function(e){var t=this.fragCurrent,r=e.frag;t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===y.State.PARSING&&(this.stats.tparsed=window.performance.now(),this.state=y.State.PARSED,this._checkAppendedParsed())},r.prototype.onAudioTrackSwitching=function(t){var r=!!t.url,i=t.id;if(!r){if(this.mediaBuffer!==this.media){p.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var a=this.fragCurrent;a.loader&&(p.logger.log("switching to main audio track, cancel main fragment load"),a.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=y.State.IDLE}var n=this.hls;n.trigger(s.default.BUFFER_FLUSHING,{startOffset:0,endOffset:e.POSITIVE_INFINITY,type:"audio"}),n.trigger(s.default.AUDIO_TRACK_SWITCHED,{id:i}),this.altAudio=!1}},r.prototype.onAudioTrackSwitched=function(e){var t=e.id,r=!!this.hls.audioTracks[t].url;if(r){var i=this.videoBuffer;i&&this.mediaBuffer!==i&&(p.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=r,this.tick()},r.prototype.onBufferCreated=function(e){var t,r,i=e.tracks,a=!1;for(var n in i){var o=i[n];"main"===o.id?(r=n,t=o,"video"===n&&(this.videoBuffer=i[n].buffer)):a=!0}a&&t?(p.logger.log("alternate track found, use "+r+".buffered to schedule main fragment loading"),this.mediaBuffer=t.buffer):this.mediaBuffer=this.media},r.prototype.onBufferAppended=function(e){if("main"===e.parent){var t=this.state;t!==y.State.PARSING&&t!==y.State.PARSED||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}},r.prototype._checkAppendedParsed=function(){if(!(this.state!==y.State.PARSED||this.appended&&this.pendingBuffering)){var e=this.fragCurrent;if(e){var t=this.mediaBuffer?this.mediaBuffer:this.media;p.logger.log("main buffered : "+c.default.toString(t.buffered)),this.fragPrevious=e;var r=this.stats;r.tbuffered=window.performance.now(),this.fragLastKbps=Math.round(8*r.total/(r.tbuffered-r.tfirst)),this.hls.trigger(s.default.FRAG_BUFFERED,{stats:r,frag:e,id:"main"}),this.state=y.State.IDLE}this.tick()}},r.prototype.onError=function(t){var r=t.frag||this.fragCurrent;if(!r||"main"===r.type){var i=!!this.media&&n.BufferHelper.isBuffered(this.media,this.media.currentTime)&&n.BufferHelper.isBuffered(this.media,this.media.currentTime+.5);switch(t.details){case h.ErrorDetails.FRAG_LOAD_ERROR:case h.ErrorDetails.FRAG_LOAD_TIMEOUT:case h.ErrorDetails.KEY_LOAD_ERROR:case h.ErrorDetails.KEY_LOAD_TIMEOUT:if(!t.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){var a=Math.min(Math.pow(2,this.fragLoadError)*this.config.fragLoadingRetryDelay,this.config.fragLoadingMaxRetryTimeout);p.logger.warn("mediaController: frag loading failed, retry in "+a+" ms"),this.retryDate=window.performance.now()+a,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.fragLoadError++,this.state=y.State.FRAG_LOADING_WAITING_RETRY}else p.logger.error("mediaController: "+t.details+" reaches max retry, redispatch as fatal ..."),t.fatal=!0,this.state=y.State.ERROR;break;case h.ErrorDetails.LEVEL_LOAD_ERROR:case h.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==y.State.ERROR&&(t.fatal?(this.state=y.State.ERROR,p.logger.warn("streamController: "+t.details+",switch to "+this.state+" state ...")):t.levelRetry||this.state!==y.State.WAITING_LEVEL||(this.state=y.State.IDLE));break;case h.ErrorDetails.BUFFER_FULL_ERROR:"main"!==t.parent||this.state!==y.State.PARSING&&this.state!==y.State.PARSED||(i?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=y.State.IDLE):(p.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,e.POSITIVE_INFINITY)))}}},r.prototype._reduceMaxBufferLength=function(e){var t=this.config;return t.maxMaxBufferLength>=e&&(t.maxMaxBufferLength/=2,p.logger.warn("main:reduce max buffer length to "+t.maxMaxBufferLength+"s"),!0)},r.prototype._checkBuffer=function(){var e=this.media;if(e&&0!==e.readyState){var t=(this.mediaBuffer?this.mediaBuffer:e).buffered;!this.loadedmetadata&&t.length?(this.loadedmetadata=!0,this._seekToStartPos()):this.immediateSwitch?this.immediateLevelSwitchEnd():this.gapController.poll(this.lastCurrentTime,t)}},r.prototype.onFragLoadEmergencyAborted=function(){this.state=y.State.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()},r.prototype.onBufferFlushed=function(){var e=this.mediaBuffer?this.mediaBuffer:this.media;e&&this.fragmentTracker.detectEvictedFragments(u.default.ElementaryStreamTypes.VIDEO,e.buffered),this.state=y.State.IDLE,this.fragPrevious=null},r.prototype.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},r.prototype.computeLivePosition=function(e,t){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*t.targetduration;return e+Math.max(0,t.totalduration-r)},r.prototype._seekToStartPos=function(){var e=this.media,t=e.currentTime,r=e.seeking?t:this.startPosition;t!==r&&(p.logger.log("target start position not buffered, seek to buffered.start(0) "+r+" from current time "+t+" "),e.currentTime=r)},r.prototype._getAudioCodec=function(e){var t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&(p.logger.log("swapping playlist audio codec"),t&&(t=-1!==t.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),t},Object.defineProperty(r.prototype,"liveSyncPosition",{get:function(){return this._liveSyncPosition},set:function(e){this._liveSyncPosition=e},enumerable:!0,configurable:!0}),r}(y.default);t.default=_}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(32),a=r(1),n=r(18),o=r(0),s=r(3),l=r(12),u=r(6),d=r(22),f=u.getSelfScope(),c=l.getMediaSource(),h=function(){function t(e,t){var r=this;this.hls=e,this.id=t;var l=this.observer=new d.Observer,u=e.config,h=function(t,i){(i=i||{}).frag=r.frag,i.id=r.id,e.trigger(t,i)};l.on(a.default.FRAG_DECRYPTED,h),l.on(a.default.FRAG_PARSING_INIT_SEGMENT,h),l.on(a.default.FRAG_PARSING_DATA,h),l.on(a.default.FRAG_PARSED,h),l.on(a.default.ERROR,h),l.on(a.default.FRAG_PARSING_METADATA,h),l.on(a.default.FRAG_PARSING_USERDATA,h),l.on(a.default.INIT_PTS_FOUND,h);var p={mp4:c.isTypeSupported("video/mp4"),mpeg:c.isTypeSupported("audio/mpeg"),mp3:c.isTypeSupported('audio/mp4; codecs="mp3"')},g=navigator.vendor;if(u.enableWorker&&"undefined"!=typeof Worker){o.logger.log("demuxing in webworker");var v=void 0;try{v=this.w=i(46),this.onwmsg=this.onWorkerMessage.bind(this),v.addEventListener("message",this.onwmsg),v.onerror=function(t){e.trigger(a.default.ERROR,{type:s.ErrorTypes.OTHER_ERROR,details:s.ErrorDetails.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:t.message+" ("+t.filename+":"+t.lineno+")"}})},v.postMessage({cmd:"init",typeSupported:p,vendor:g,id:t,config:JSON.stringify(u)})}catch(e){o.logger.warn("Error in worker:",e),o.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),v&&f.URL.revokeObjectURL(v.objectURL),this.demuxer=new n.default(l,p,u,g),this.w=void 0}}else this.demuxer=new n.default(l,p,u,g)}return t.prototype.destroy=function(){var e=this.w;if(e)e.removeEventListener("message",this.onwmsg),e.terminate(),this.w=null;else{var t=this.demuxer;t&&(t.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)},t.prototype.push=function(t,r,i,a,n,s,l,u){var d=this.w,f=e.isFinite(n.startPTS)?n.startPTS:n.start,c=n.decryptdata,h=this.frag,p=!(h&&n.cc===h.cc),g=!(h&&n.level===h.level),v=h&&n.sn===h.sn+1,m=!g&&v;if(p&&o.logger.log(this.id+":discontinuity detected"),g&&o.logger.log(this.id+":switch detected"),this.frag=n,d)d.postMessage({cmd:"demux",data:t,decryptdata:c,initSegment:r,audioCodec:i,videoCodec:a,timeOffset:f,discontinuity:p,trackSwitch:g,contiguous:m,duration:s,accurateTimeOffset:l,defaultInitPTS:u},t instanceof ArrayBuffer?[t]:[]);else{var y=this.demuxer;y&&y.push(t,c,r,i,a,f,p,g,m,s,l,u)}},t.prototype.onWorkerMessage=function(e){var t=e.data,r=this.hls;switch(t.event){case"init":f.URL.revokeObjectURL(this.w.objectURL);break;case a.default.FRAG_PARSING_DATA:t.data.data1=new Uint8Array(t.data1),t.data2&&(t.data.data2=new Uint8Array(t.data2));default:t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data)}},t}();t.default=h}).call(this,r(2).Number)},function(e,t,r){function i(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var i=r(r.s=ENTRY_MODULE);return i.default||i}var a="[\\.|\\-|\\+|\\w|/|@]+",n="\\((/\\*.*?\\*/)?s?.*?("+a+").*?\\)";function o(e){return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function s(e){return!isNaN(1*e)}function l(e,t,i){var l={};l[i]=[];var u=t.toString(),d=u.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);if(!d)return l;for(var f,c=d[1],h=new RegExp("(\\\\n|\\W)"+o(c)+n,"g");f=h.exec(u);)"dll-reference"!==f[3]&&l[i].push(f[3]);for(h=new RegExp("\\("+o(c)+'\\("(dll-reference\\s('+a+'))"\\)\\)'+n,"g");f=h.exec(u);)e[f[2]]||(l[i].push(f[1]),e[f[2]]=r(f[1]).m),l[f[2]]=l[f[2]]||[],l[f[2]].push(f[4]);for(var p=Object.keys(l),g=0;g<p.length;g++)for(var v=0;v<l[p[g]].length;v++)s(l[p[g]][v])&&(l[p[g]][v]=1*l[p[g]][v]);return l}function u(e){return Object.keys(e).reduce(function(t,r){return t||e[r].length>0},!1)}e.exports=function(e,t){t=t||{};var a={main:r.m},n=t.all?{main:Object.keys(a.main)}:function(e,t){for(var r={main:[t]},i={main:[]},a={main:{}};u(r);)for(var n=Object.keys(r),o=0;o<n.length;o++){var s=n[o],d=r[s].pop();if(a[s]=a[s]||{},!a[s][d]&&e[s][d]){a[s][d]=!0,i[s]=i[s]||[],i[s].push(d);for(var f=l(e,e[s][d],s),c=Object.keys(f),h=0;h<c.length;h++)r[c[h]]=r[c[h]]||[],r[c[h]]=r[c[h]].concat(f[c[h]])}}return i}(a,e),o="";Object.keys(n).filter(function(e){return"main"!==e}).forEach(function(e){for(var t=0;n[e][t];)t++;n[e].push(t),a[e][t]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",o=o+"var "+e+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+n[e].map(function(t){return JSON.stringify(t)+": "+a[e][t].toString()}).join(",")+"});\n"}),o=o+"new (("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+n.main.map(function(e){return JSON.stringify(e)+": "+a.main[e].toString()}).join(",")+"}))(self);";var s=new window.Blob([o],{type:"text/javascript"});if(t.bare)return s;var d=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(s),f=new window.Worker(d);return f.objectURL=d,f}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.subtle=e,this.aesIV=t}return e.prototype.decrypt=function(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)},e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.subtle=e,this.key=t}return e.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},e}();t.default=i},function(e,t,r){"use strict";function i(e){var t=e.byteLength,r=t&&new DataView(e).getUint8(t-1);return r?e.slice(0,t-r):e}Object.defineProperty(t,"__esModule",{value:!0}),t.removePadding=i;var a=function(){function e(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}return e.prototype.uint8ArrayToUint32Array_=function(e){for(var t=new DataView(e),r=new Uint32Array(4),i=0;i<4;i++)r[i]=t.getUint32(4*i);return r},e.prototype.initTable=function(){var e=this.sBox,t=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],o=r[3],s=this.invSubMix,l=s[0],u=s[1],d=s[2],f=s[3],c=new Uint32Array(256),h=0,p=0,g=0;for(g=0;g<256;g++)c[g]=g<128?g<<1:g<<1^283;for(g=0;g<256;g++){var v=p^p<<1^p<<2^p<<3^p<<4;v=v>>>8^255&v^99,e[h]=v,t[v]=h;var m=c[h],y=c[m],_=c[y],E=257*c[v]^16843008*v;i[h]=E<<24|E>>>8,a[h]=E<<16|E>>>16,n[h]=E<<8|E>>>24,o[h]=E,E=16843009*_^65537*y^257*m^16843008*h,l[v]=E<<24|E>>>8,u[v]=E<<16|E>>>16,d[v]=E<<8|E>>>24,f[v]=E,h?(h=m^c[c[c[_^m]]],p^=c[c[p]]):h=p=1}},e.prototype.expandKey=function(e){for(var t=this.uint8ArrayToUint32Array_(e),r=!0,i=0;i<t.length&&r;)r=t[i]===this.key[i],i++;if(!r){this.key=t;var a=this.keySize=t.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n,o,s,l,u=this.ksRows=4*(a+6+1),d=this.keySchedule=new Uint32Array(u),f=this.invKeySchedule=new Uint32Array(u),c=this.sBox,h=this.rcon,p=this.invSubMix,g=p[0],v=p[1],m=p[2],y=p[3];for(n=0;n<u;n++)n<a?s=d[n]=t[n]:(l=s,n%a==0?(l=c[(l=l<<8|l>>>24)>>>24]<<24|c[l>>>16&255]<<16|c[l>>>8&255]<<8|c[255&l],l^=h[n/a|0]<<24):a>6&&n%a==4&&(l=c[l>>>24]<<24|c[l>>>16&255]<<16|c[l>>>8&255]<<8|c[255&l]),d[n]=s=(d[n-a]^l)>>>0);for(o=0;o<u;o++)n=u-o,l=3&o?d[n]:d[n-4],f[o]=o<4||n<=4?l:g[c[l>>>24]]^v[c[l>>>16&255]]^m[c[l>>>8&255]]^y[c[255&l]],f[o]=f[o]>>>0}},e.prototype.networkToHostOrderSwap=function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24},e.prototype.decrypt=function(e,t,r,a){for(var n,o,s,l,u,d,f,c,h,p,g,v,m,y,_=this.keySize+6,E=this.invKeySchedule,b=this.invSBox,S=this.invSubMix,T=S[0],A=S[1],R=S[2],L=S[3],D=this.uint8ArrayToUint32Array_(r),O=D[0],w=D[1],P=D[2],I=D[3],x=new Int32Array(e),F=new Int32Array(x.length),k=this.networkToHostOrderSwap;t<x.length;){for(h=k(x[t]),p=k(x[t+1]),g=k(x[t+2]),v=k(x[t+3]),u=h^E[0],d=v^E[1],f=g^E[2],c=p^E[3],m=4,y=1;y<_;y++)n=T[u>>>24]^A[d>>16&255]^R[f>>8&255]^L[255&c]^E[m],o=T[d>>>24]^A[f>>16&255]^R[c>>8&255]^L[255&u]^E[m+1],s=T[f>>>24]^A[c>>16&255]^R[u>>8&255]^L[255&d]^E[m+2],l=T[c>>>24]^A[u>>16&255]^R[d>>8&255]^L[255&f]^E[m+3],u=n,d=o,f=s,c=l,m+=4;n=b[u>>>24]<<24^b[d>>16&255]<<16^b[f>>8&255]<<8^b[255&c]^E[m],o=b[d>>>24]<<24^b[f>>16&255]<<16^b[c>>8&255]<<8^b[255&u]^E[m+1],s=b[f>>>24]<<24^b[c>>16&255]<<16^b[u>>8&255]<<8^b[255&d]^E[m+2],l=b[c>>>24]<<24^b[u>>16&255]<<16^b[d>>8&255]<<8^b[255&f]^E[m+3],m+=3,F[t]=k(n^O),F[t+1]=k(l^w),F[t+2]=k(s^P),F[t+3]=k(o^I),O=h,w=p,P=g,I=v,t+=4}return a?i(F.buffer):F.buffer},e.prototype.destroy=function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0},e}();t.default=a},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(20),a=r(0),n=r(11),o=function(){function t(e,t,r){this.observer=e,this.config=r,this.remuxer=t}return t.prototype.resetInitSegment=function(e,t,r,i){this._audioTrack={container:"audio/adts",type:"audio",id:0,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}},t.prototype.resetTimeStamp=function(){},t.probe=function(e){if(!e)return!1;for(var t=(n.default.getID3Data(e,0)||[]).length,r=e.length;t<r;t++)if(i.probe(e,t))return a.logger.log("ADTS sync word found !"),!0;return!1},t.prototype.append=function(t,r,o,s){for(var l=this._audioTrack,u=n.default.getID3Data(t,0)||[],d=n.default.getTimeStamp(u),f=e.isFinite(d)?90*d:9e4*r,c=0,h=f,p=t.length,g=u.length,v=[{pts:h,dts:h,data:u}];g<p-1;)if(i.isHeader(t,g)&&g+5<p){i.initTrackConfig(l,this.observer,t,g,l.manifestCodec);var m=i.appendFrame(l,t,g,f,c);if(!m){a.logger.log("Unable to parse AAC frame");break}g+=m.length,h=m.sample.pts,c++}else n.default.isHeader(t,g)?(u=n.default.getID3Data(t,g),v.push({pts:h,dts:h,data:u}),g+=u.length):g++;this.remuxer.remux(l,{samples:[]},{samples:v,inputTimeScale:9e4},{samples:[]},r,o,s)},t.prototype.destroy=function(){},t}();t.default=o}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(20),a=r(21),n=r(1),o=r(38),s=r(39),l=r(0),u=r(3),d={video:1,audio:2,id3:3,text:4},f=function(){function e(e,t,r,i){this.observer=e,this.config=r,this.typeSupported=i,this.remuxer=t,this.sampleAes=null}return e.prototype.setDecryptData=function(e){null!=e&&null!=e.key&&"SAMPLE-AES"===e.method?this.sampleAes=new s.default(this.observer,this.config,e,this.discardEPB):this.sampleAes=null},e.probe=function(t){var r=e._syncOffset(t);return!(r<0)&&(r&&l.logger.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),!0)},e._syncOffset=function(e){for(var t=Math.min(1e3,e.length-564),r=0;r<t;){if(71===e[r]&&71===e[r+188]&&71===e[r+376])return r;r++}return-1},e.createTrack=function(e,t){return{container:"video"===e||"audio"===e?"video/mp2t":void 0,type:e,id:d[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0,dropped:"video"===e?0:void 0,isAAC:"audio"===e||void 0,duration:"audio"===e?t:void 0}},e.prototype.resetInitSegment=function(t,r,i,a){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=e.createTrack("video",a),this._audioTrack=e.createTrack("audio",a),this._id3Track=e.createTrack("id3",a),this._txtTrack=e.createTrack("text",a),this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=r,this.videoCodec=i,this._duration=a},e.prototype.resetTimeStamp=function(){},e.prototype.append=function(t,r,i,a){var o,s,d,f,c,h=t.length,p=!1;this.contiguous=i;var g=this.pmtParsed,v=this._avcTrack,m=this._audioTrack,y=this._id3Track,_=v.pid,E=m.pid,b=y.pid,S=this._pmtId,T=v.pesData,A=m.pesData,R=y.pesData,L=this._parsePAT,D=this._parsePMT,O=this._parsePES,w=this._parseAVCPES.bind(this),P=this._parseAACPES.bind(this),I=this._parseMPEGPES.bind(this),x=this._parseID3PES.bind(this),F=e._syncOffset(t);for(h-=(h+F)%188,o=F;o<h;o+=188)if(71===t[o]){if(s=!!(64&t[o+1]),d=((31&t[o+1])<<8)+t[o+2],(48&t[o+3])>>4>1){if((f=o+5+t[o+4])===o+188)continue}else f=o+4;switch(d){case _:s&&(T&&(c=O(T))&&void 0!==c.pts&&w(c,!1),T={data:[],size:0}),T&&(T.data.push(t.subarray(f,o+188)),T.size+=o+188-f);break;case E:s&&(A&&(c=O(A))&&void 0!==c.pts&&(m.isAAC?P(c):I(c)),A={data:[],size:0}),A&&(A.data.push(t.subarray(f,o+188)),A.size+=o+188-f);break;case b:s&&(R&&(c=O(R))&&void 0!==c.pts&&x(c),R={data:[],size:0}),R&&(R.data.push(t.subarray(f,o+188)),R.size+=o+188-f);break;case 0:s&&(f+=t[f]+1),S=this._pmtId=L(t,f);break;case S:s&&(f+=t[f]+1);var k=D(t,f,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,null!=this.sampleAes);(_=k.avc)>0&&(v.pid=_),(E=k.audio)>0&&(m.pid=E,m.isAAC=k.isAAC),(b=k.id3)>0&&(y.pid=b),p&&!g&&(l.logger.log("reparse from beginning"),p=!1,o=F-188),g=this.pmtParsed=!0;break;case 17:case 8191:break;default:p=!0}}else this.observer.trigger(n.default.ERROR,{type:u.ErrorTypes.MEDIA_ERROR,details:u.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});T&&(c=O(T))&&void 0!==c.pts?(w(c,!0),v.pesData=null):v.pesData=T,A&&(c=O(A))&&void 0!==c.pts?(m.isAAC?P(c):I(c),m.pesData=null):(A&&A.size&&l.logger.log("last AAC PES packet truncated,might overlap between fragments"),m.pesData=A),R&&(c=O(R))&&void 0!==c.pts?(x(c),y.pesData=null):y.pesData=R,null==this.sampleAes?this.remuxer.remux(m,v,y,this._txtTrack,r,i,a):this.decryptAndRemux(m,v,y,this._txtTrack,r,i,a)},e.prototype.decryptAndRemux=function(e,t,r,i,a,n,o){if(e.samples&&e.isAAC){var s=this;this.sampleAes.decryptAacSamples(e.samples,0,function(){s.decryptAndRemuxAvc(e,t,r,i,a,n,o)})}else this.decryptAndRemuxAvc(e,t,r,i,a,n,o)},e.prototype.decryptAndRemuxAvc=function(e,t,r,i,a,n,o){if(t.samples){var s=this;this.sampleAes.decryptAvcSamples(t.samples,0,0,function(){s.remuxer.remux(e,t,r,i,a,n,o)})}else this.remuxer.remux(e,t,r,i,a,n,o)},e.prototype.destroy=function(){this._initPTS=this._initDTS=void 0,this._duration=0},e.prototype._parsePAT=function(e,t){return(31&e[t+10])<<8|e[t+11]},e.prototype._parsePMT=function(e,t,r,i){var a,n,o={audio:-1,avc:-1,id3:-1,isAAC:!0};for(a=t+3+((15&e[t+1])<<8|e[t+2])-4,t+=12+((15&e[t+10])<<8|e[t+11]);t<a;){switch(n=(31&e[t+1])<<8|e[t+2],e[t]){case 207:if(!i){l.logger.log("unkown stream type:"+e[t]);break}case 15:-1===o.audio&&(o.audio=n);break;case 21:-1===o.id3&&(o.id3=n);break;case 219:if(!i){l.logger.log("unkown stream type:"+e[t]);break}case 27:-1===o.avc&&(o.avc=n);break;case 3:case 4:r?-1===o.audio&&(o.audio=n,o.isAAC=!1):l.logger.log("MPEG audio found, not supported in this browser for now");break;case 36:l.logger.warn("HEVC stream type found, not supported for now");break;default:l.logger.log("unkown stream type:"+e[t])}t+=5+((15&e[t+3])<<8|e[t+4])}return o},e.prototype._parsePES=function(e){var t,r,i,a,n,o,s,u,d=0,f=e.data;if(!e||0===e.size)return null;for(;f[0].length<19&&f.length>1;){var c=new Uint8Array(f[0].length+f[1].length);c.set(f[0]),c.set(f[1],f[0].length),f[0]=c,f.splice(1,1)}if(1===((t=f[0])[0]<<16)+(t[1]<<8)+t[2]){if((i=(t[4]<<8)+t[5])&&i>e.size-6)return null;192&(r=t[7])&&((o=536870912*(14&t[9])+4194304*(255&t[10])+16384*(254&t[11])+128*(255&t[12])+(254&t[13])/2)>4294967295&&(o-=8589934592),64&r?((s=536870912*(14&t[14])+4194304*(255&t[15])+16384*(254&t[16])+128*(255&t[17])+(254&t[18])/2)>4294967295&&(s-=8589934592),o-s>54e5&&(l.logger.warn(Math.round((o-s)/9e4)+"s delta between PTS and DTS, align them"),o=s)):s=o),u=(a=t[8])+9,e.size-=u,n=new Uint8Array(e.size);for(var h=0,p=f.length;h<p;h++){var g=(t=f[h]).byteLength;if(u){if(u>g){u-=g;continue}t=t.subarray(u),g-=u,u=0}n.set(t,d),d+=g}return i&&(i-=a+3),{data:n,pts:o,dts:s,len:i}}return null},e.prototype.pushAccesUnit=function(e,t){if(e.units.length&&e.frame){var r=t.samples,i=r.length;!this.config.forceKeyFrameOnDiscontinuity||!0===e.key||t.sps&&(i||this.contiguous)?(e.id=i,r.push(e)):t.dropped++}e.debug.length&&l.logger.log(e.pts+"/"+e.dts+":"+e.debug)},e.prototype._parseAVCPES=function(e,t){var r,i,a,n=this,s=this._avcTrack,l=this._parseAVCNALu(e.data),u=this.avcSample,d=!1,f=this.pushAccesUnit.bind(this),c=function(e,t,r,i){return{key:e,pts:t,dts:r,units:[],debug:i}};e.data=null,u&&l.length&&!s.audFound&&(f(u,s),u=this.avcSample=c(!1,e.pts,e.dts,"")),l.forEach(function(t){switch(t.type){case 1:i=!0,u||(u=n.avcSample=c(!0,e.pts,e.dts,"")),u.frame=!0;var l=t.data;if(d&&l.length>4){var h=new o.default(l).readSliceType();2!==h&&4!==h&&7!==h&&9!==h||(u.key=!0)}break;case 5:i=!0,u||(u=n.avcSample=c(!0,e.pts,e.dts,"")),u.key=!0,u.frame=!0;break;case 6:i=!0,(r=new o.default(n.discardEPB(t.data))).readUByte();for(var p=0,g=0,v=!1,m=0;!v&&r.bytesAvailable>1;){p=0;do{p+=m=r.readUByte()}while(255===m);g=0;do{g+=m=r.readUByte()}while(255===m);if(4===p&&0!==r.bytesAvailable){if(v=!0,181===r.readUByte())if(49===r.readUShort())if(1195456820===r.readUInt())if(3===r.readUByte()){var y=r.readUByte(),_=31&y,E=[y,r.readUByte()];for(a=0;a<_;a++)E.push(r.readUByte()),E.push(r.readUByte()),E.push(r.readUByte());n._insertSampleInOrder(n._txtTrack.samples,{type:3,pts:e.pts,bytes:E})}}else if(g<r.bytesAvailable)for(a=0;a<g;a++)r.readUByte()}break;case 7:if(i=!0,d=!0,!s.sps){var b=(r=new o.default(t.data)).readSPS();s.width=b.width,s.height=b.height,s.pixelRatio=b.pixelRatio,s.sps=[t.data],s.duration=n._duration;var S=t.data.subarray(1,4),T="avc1.";for(a=0;a<3;a++){var A=S[a].toString(16);A.length<2&&(A="0"+A),T+=A}s.codec=T}break;case 8:i=!0,s.pps||(s.pps=[t.data]);break;case 9:i=!1,s.audFound=!0,u&&f(u,s),u=n.avcSample=c(!1,e.pts,e.dts,"");break;case 12:i=!1;break;default:i=!1,u&&(u.debug+="unknown NAL "+t.type+" ")}u&&i&&u.units.push(t)}),t&&u&&(f(u,s),this.avcSample=null)},e.prototype._insertSampleInOrder=function(e,t){var r=e.length;if(r>0){if(t.pts>=e[r-1].pts)e.push(t);else for(var i=r-1;i>=0;i--)if(t.pts<e[i].pts){e.splice(i,0,t);break}}else e.push(t)},e.prototype._getLastNalUnit=function(){var e,t=this.avcSample;if(!t||0===t.units.length){var r=this._avcTrack.samples;t=r[r.length-1]}if(t){var i=t.units;e=i[i.length-1]}return e},e.prototype._parseAVCNALu=function(e){var t,r,i,a,n=0,o=e.byteLength,s=this._avcTrack,l=s.naluState||0,u=l,d=[],f=-1;for(-1===l&&(f=0,a=31&e[0],l=0,n=1);n<o;)if(t=e[n++],l)if(1!==l)if(t)if(1===t){var c,h;if(f>=0)i={data:e.subarray(f,n-l-1),type:a},d.push(i);else if(c=this._getLastNalUnit())if(u&&n<=4-u&&c.state&&(c.data=c.data.subarray(0,c.data.byteLength-u)),(r=n-l-1)>0)(h=new Uint8Array(c.data.byteLength+r)).set(c.data,0),h.set(e.subarray(0,r),c.data.byteLength),c.data=h;n<o?(f=n,a=31&e[n],l=0):l=-1}else l=0;else l=3;else l=t?0:2;else l=t?0:1;(f>=0&&l>=0&&(i={data:e.subarray(f,o),type:a,state:l},d.push(i)),0===d.length)&&((c=this._getLastNalUnit())&&((h=new Uint8Array(c.data.byteLength+e.byteLength)).set(c.data,0),h.set(e,c.data.byteLength),c.data=h));return s.naluState=l,d},e.prototype.discardEPB=function(e){for(var t,r,i=e.byteLength,a=[],n=1;n<i-2;)0===e[n]&&0===e[n+1]&&3===e[n+2]?(a.push(n+2),n+=2):n++;if(0===a.length)return e;t=i-a.length,r=new Uint8Array(t);var o=0;for(n=0;n<t;o++,n++)o===a[0]&&(o++,a.shift()),r[n]=e[o];return r},e.prototype._parseAACPES=function(e){var t,r,a,o,s,d=this._audioTrack,f=e.data,c=e.pts,h=this.aacOverFlow,p=this.aacLastPTS;if(h){var g=new Uint8Array(h.byteLength+f.byteLength);g.set(h,0),g.set(f,h.byteLength),f=g}for(a=0,s=f.length;a<s-1&&!i.isHeader(f,a);a++);if(a){var v=void 0,m=void 0;if(a<s-1?(v="AAC PES did not start with ADTS header,offset:"+a,m=!1):(v="no ADTS header found in AAC PES",m=!0),l.logger.warn("parsing error:"+v),this.observer.trigger(n.default.ERROR,{type:u.ErrorTypes.MEDIA_ERROR,details:u.ErrorDetails.FRAG_PARSING_ERROR,fatal:m,reason:v}),m)return}if(i.initTrackConfig(d,this.observer,f,a,this.audioCodec),r=0,t=i.getFrameDuration(d.samplerate),h&&p){var y=p+t;Math.abs(y-c)>1&&(l.logger.log("AAC: align PTS for overlapping frames by "+Math.round((y-c)/90)),c=y)}for(;a<s;)if(i.isHeader(f,a)&&a+5<s){var _=i.appendFrame(d,f,a,c,r);if(!_)break;a+=_.length,o=_.sample.pts,r++}else a++;h=a<s?f.subarray(a,s):null,this.aacOverFlow=h,this.aacLastPTS=o},e.prototype._parseMPEGPES=function(e){for(var t=e.data,r=t.length,i=0,n=0,o=e.pts;n<r;)if(a.default.isHeader(t,n)){var s=a.default.appendFrame(this._audioTrack,t,n,o,i);if(!s)break;n+=s.length,i++}else n++},e.prototype._parseID3PES=function(e){this._id3Track.samples.push(e)},e}();t.default=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=function(){function e(e){this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}return e.prototype.loadWord=function(){var e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),a=Math.min(4,t);if(0===a)throw new Error("no bytes available");i.set(e.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a},e.prototype.skipBits=function(e){var t;this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,e-=(t=e>>3)>>3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)},e.prototype.readBits=function(e){var t=Math.min(this.bitsAvailable,e),r=this.word>>>32-t;return e>32&&i.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0?this.word<<=t:this.bytesAvailable>0&&this.loadWord(),(t=e-t)>0&&this.bitsAvailable?r<<t|this.readBits(t):r},e.prototype.skipLZ=function(){var e;for(e=0;e<this.bitsAvailable;++e)if(0!=(this.word&2147483648>>>e))return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()},e.prototype.skipUEG=function(){this.skipBits(1+this.skipLZ())},e.prototype.skipEG=function(){this.skipBits(1+this.skipLZ())},e.prototype.readUEG=function(){var e=this.skipLZ();return this.readBits(e+1)-1},e.prototype.readEG=function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)},e.prototype.readBoolean=function(){return 1===this.readBits(1)},e.prototype.readUByte=function(){return this.readBits(8)},e.prototype.readUShort=function(){return this.readBits(16)},e.prototype.readUInt=function(){return this.readBits(32)},e.prototype.skipScalingList=function(e){var t,r=8,i=8;for(t=0;t<e;t++)0!==i&&(i=(r+this.readEG()+256)%256),r=0===i?r:i},e.prototype.readSPS=function(){var e,t,r,i,a,n,o,s=0,l=0,u=0,d=0,f=this.readUByte.bind(this),c=this.readBits.bind(this),h=this.readUEG.bind(this),p=this.readBoolean.bind(this),g=this.skipBits.bind(this),v=this.skipEG.bind(this),m=this.skipUEG.bind(this),y=this.skipScalingList.bind(this);if(f(),e=f(),c(5),g(3),f(),m(),100===e||110===e||122===e||244===e||44===e||83===e||86===e||118===e||128===e){var _=h();if(3===_&&g(1),m(),m(),g(1),p())for(n=3!==_?8:12,o=0;o<n;o++)p()&&y(o<6?16:64)}m();var E=h();if(0===E)h();else if(1===E)for(g(1),v(),v(),t=h(),o=0;o<t;o++)v();m(),g(1),r=h(),i=h(),0===(a=c(1))&&g(1),g(1),p()&&(s=h(),l=h(),u=h(),d=h());var b=[1,1];if(p()&&p())switch(f()){case 1:b=[1,1];break;case 2:b=[12,11];break;case 3:b=[10,11];break;case 4:b=[16,11];break;case 5:b=[40,33];break;case 6:b=[24,11];break;case 7:b=[20,11];break;case 8:b=[32,11];break;case 9:b=[80,33];break;case 10:b=[18,11];break;case 11:b=[15,11];break;case 12:b=[64,33];break;case 13:b=[160,99];break;case 14:b=[4,3];break;case 15:b=[3,2];break;case 16:b=[2,1];break;case 255:b=[f()<<8|f(),f()<<8|f()]}return{width:Math.ceil(16*(r+1)-2*s-2*l),height:(2-a)*(i+1)*16-(a?2:4)*(u+d),pixelRatio:b}},e.prototype.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(19),a=function(){function e(e,t,r,a){this.decryptdata=r,this.discardEPB=a,this.decrypter=new i.default(e,t,{removePKCS7Padding:!1})}return e.prototype.decryptBuffer=function(e,t){this.decrypter.decrypt(e,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,t)},e.prototype.decryptAacSample=function(e,t,r,i){var a=e[t].unit,n=a.subarray(16,a.length-a.length%16),o=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),s=this;this.decryptBuffer(o,function(n){n=new Uint8Array(n),a.set(n,16),i||s.decryptAacSamples(e,t+1,r)})},e.prototype.decryptAacSamples=function(e,t,r){for(;;t++){if(t>=e.length)return void r();if(!(e[t].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(e,t,r,i),!i)return}}},e.prototype.getAvcEncryptedData=function(e){for(var t=16*Math.floor((e.length-48)/160)+16,r=new Int8Array(t),i=0,a=32;a<=e.length-16;a+=160,i+=16)r.set(e.subarray(a,a+16),i);return r},e.prototype.getAvcDecryptedUnit=function(e,t){t=new Uint8Array(t);for(var r=0,i=32;i<=e.length-16;i+=160,r+=16)e.set(t.subarray(r,r+16),i);return e},e.prototype.decryptAvcSample=function(e,t,r,i,a,n){var o=this.discardEPB(a.data),s=this.getAvcEncryptedData(o),l=this;this.decryptBuffer(s.buffer,function(s){a.data=l.getAvcDecryptedUnit(o,s),n||l.decryptAvcSamples(e,t,r+1,i)})},e.prototype.decryptAvcSamples=function(e,t,r,i){for(;;t++,r=0){if(t>=e.length)return void i();for(var a=e[t].units;!(r>=a.length);r++){var n=a[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var o=this.decrypter.isSync();if(this.decryptAvcSample(e,t,r,i,n,o),!o)return}}}},e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(11),a=r(0),n=r(21),o=function(){function e(e,t,r){this.observer=e,this.config=r,this.remuxer=t}return e.prototype.resetInitSegment=function(e,t,r,i){this._audioTrack={container:"audio/mpeg",type:"audio",id:-1,sequenceNumber:0,isAAC:!1,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}},e.prototype.resetTimeStamp=function(){},e.probe=function(e){var t,r,o=i.default.getID3Data(e,0);if(o&&void 0!==i.default.getTimeStamp(o))for(t=o.length,r=Math.min(e.length-1,t+100);t<r;t++)if(n.default.probe(e,t))return a.logger.log("MPEG Audio sync word found !"),!0;return!1},e.prototype.append=function(e,t,r,a){for(var o=i.default.getID3Data(e,0),s=i.default.getTimeStamp(o),l=s?90*s:9e4*t,u=o.length,d=e.length,f=0,c=0,h=this._audioTrack,p=[{pts:l,dts:l,data:o}];u<d;)if(n.default.isHeader(e,u)){var g=n.default.appendFrame(h,e,u,l,f);if(!g)break;u+=g.length,c=g.sample.pts,f++}else i.default.isHeader(e,u)?(o=i.default.getID3Data(e,u),p.push({pts:c,dts:c,data:o}),u+=o.length):u++;this.remuxer.remux(h,{samples:[]},{samples:p,inputTimeScale:9e4},{samples:[]},t,r,a)},e.prototype.destroy=function(){},e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(42),a=r(43),n=r(1),o=r(3),s=r(0),l=function(){function e(e,t,r,i){this.observer=e,this.config=t,this.typeSupported=r;var a=navigator.userAgent;this.isSafari=i&&i.indexOf("Apple")>-1&&a&&!a.match("CriOS"),this.ISGenerated=!1}return e.prototype.destroy=function(){},e.prototype.resetTimeStamp=function(e){this._initPTS=this._initDTS=e},e.prototype.resetInitSegment=function(){this.ISGenerated=!1},e.prototype.remux=function(e,t,r,i,a,o,l){if(this.ISGenerated||this.generateIS(e,t,a),this.ISGenerated){var u=e.samples.length,d=t.samples.length,f=a,c=a;if(u&&d){var h=(e.samples[0].pts-t.samples[0].pts)/t.inputTimeScale;f+=Math.max(0,h),c+=Math.max(0,-h)}if(u){e.timescale||(s.logger.warn("regenerate InitSegment as audio detected"),this.generateIS(e,t,a));var p=this.remuxAudio(e,f,o,l);if(d){var g=void 0;p&&(g=p.endPTS-p.startPTS),t.timescale||(s.logger.warn("regenerate InitSegment as video detected"),this.generateIS(e,t,a)),this.remuxVideo(t,c,o,g,l)}}else if(d){var v=this.remuxVideo(t,c,o,0,l);v&&e.codec&&this.remuxEmptyAudio(e,f,o,v)}}r.samples.length&&this.remuxID3(r,a),i.samples.length&&this.remuxText(i,a),this.observer.trigger(n.default.FRAG_PARSED)},e.prototype.generateIS=function(e,t,r){var i,l,u=this.observer,d=e.samples,f=t.samples,c=this.typeSupported,h="audio/mp4",p={},g={tracks:p},v=void 0===this._initPTS;if(v&&(i=l=1/0),e.config&&d.length&&(e.timescale=e.samplerate,s.logger.log("audio sampling rate : "+e.samplerate),e.isAAC||(c.mpeg?(h="audio/mpeg",e.codec=""):c.mp3&&(e.codec="mp3")),p.audio={container:h,codec:e.codec,initSegment:!e.isAAC&&c.mpeg?new Uint8Array:a.default.initSegment([e]),metadata:{channelCount:e.channelCount}},v&&(i=l=d[0].pts-e.inputTimeScale*r)),t.sps&&t.pps&&f.length){var m=t.inputTimeScale;t.timescale=m,p.video={container:"video/mp4",codec:t.codec,initSegment:a.default.initSegment([t]),metadata:{width:t.width,height:t.height}},v&&(i=Math.min(i,f[0].pts-m*r),l=Math.min(l,f[0].dts-m*r),this.observer.trigger(n.default.INIT_PTS_FOUND,{initPTS:i}))}Object.keys(p).length?(u.trigger(n.default.FRAG_PARSING_INIT_SEGMENT,g),this.ISGenerated=!0,v&&(this._initPTS=i,this._initDTS=l)):u.trigger(n.default.ERROR,{type:o.ErrorTypes.MEDIA_ERROR,details:o.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})},e.prototype.remuxVideo=function(e,t,r,i,l){var u,d,f,c,h,p,g,v=8,m=e.timescale,y=e.samples,_=[],E=y.length,b=this._PTSNormalize,S=this._initPTS,T=this.nextAvcDts,A=this.isSafari;if(0!==E){A&&(r|=y.length&&T&&(l&&Math.abs(t-T/m)<.1||Math.abs(y[0].pts-T-S)<m/5)),r||(T=t*m),y.forEach(function(e){e.pts=b(e.pts-S,T),e.dts=b(e.dts-S,T)}),y.sort(function(e,t){var r=e.dts-t.dts,i=e.pts-t.pts;return r||i||e.id-t.id});var R=y.reduce(function(e,t){return Math.max(Math.min(e,t.pts-t.dts),-18e3)},0);if(R<0){s.logger.warn("PTS < DTS detected in video samples, shifting DTS by "+Math.round(R/90)+" ms to overcome this issue");for(var L=0;L<y.length;L++)y[L].dts+=R}var D=y[0];h=Math.max(D.dts,0),c=Math.max(D.pts,0);var O=Math.round((h-T)/90);r&&O&&(O>1?s.logger.log("AVC:"+O+" ms hole between fragments detected,filling it"):O<-1&&s.logger.log("AVC:"+-O+" ms overlapping between fragments detected"),h=T,y[0].dts=h,c=Math.max(c-O,T),y[0].pts=c,s.logger.log("Video/PTS/DTS adjusted: "+Math.round(c/90)+"/"+Math.round(h/90)+",delta:"+O+" ms")),D=y[y.length-1],g=Math.max(D.dts,0),p=Math.max(D.pts,0,g),A&&(u=Math.round((g-h)/(y.length-1)));var w=0,P=0;for(L=0;L<E;L++){for(var I=y[L],x=I.units,F=x.length,k=0,C=0;C<F;C++)k+=x[C].data.length;P+=k,w+=F,I.length=k,I.dts=A?h+L*u:Math.max(I.dts,h),I.pts=Math.max(I.pts,I.dts)}var M=P+4*w+8;try{d=new Uint8Array(M)}catch(e){return void this.observer.trigger(n.default.ERROR,{type:o.ErrorTypes.MUX_ERROR,details:o.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:M,reason:"fail allocating video mdat "+M})}var U=new DataView(d.buffer);U.setUint32(0,M),d.set(a.default.types.mdat,4);for(L=0;L<E;L++){var N=y[L],B=N.units,G=0,j=void 0;for(C=0,F=B.length;C<F;C++){var H=B[C],K=H.data,V=H.data.byteLength;U.setUint32(v,V),v+=4,d.set(K,v),v+=V,G+=4+V}if(A)j=Math.max(0,u*Math.round((N.pts-N.dts)/u));else{if(L<E-1)u=y[L+1].dts-N.dts;else{var W=this.config,Y=N.dts-y[L>0?L-1:L].dts;if(W.stretchShortVideoTrack){var z=W.maxBufferHole,X=Math.floor(z*m),q=(i?c+i*m:this.nextAudioPts)-N.pts;q>X?((u=q-Y)<0&&(u=Y),s.logger.log("It is approximately "+q/90+" ms to the next segment; using duration "+u/90+" ms for the last video frame.")):u=Y}else u=Y}j=Math.round(N.pts-N.dts)}_.push({size:G,duration:u,cts:j,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:N.key?2:1,isNonSync:N.key?0:1}})}this.nextAvcDts=g+u;var Q=e.dropped;if(e.len=0,e.nbNalu=0,e.dropped=0,_.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var Z=_[0].flags;Z.dependsOn=2,Z.isNonSync=0}e.samples=_,f=a.default.moof(e.sequenceNumber++,h,e),e.samples=[];var J={data1:f,data2:d,startPTS:c/m,endPTS:(p+u)/m,startDTS:h/m,endDTS:this.nextAvcDts/m,type:"video",hasAudio:!1,hasVideo:!0,nb:_.length,dropped:Q};return this.observer.trigger(n.default.FRAG_PARSING_DATA,J),J}},e.prototype.remuxAudio=function(e,t,r,l){var u,d,f,c,h,p,g,v=e.inputTimeScale,m=e.timescale,y=v/m,_=(e.isAAC?1024:1152)*y,E=this._PTSNormalize,b=this._initPTS,S=!e.isAAC&&this.typeSupported.mpeg,T=e.samples,A=[],R=this.nextAudioPts;if(r|=T.length&&R&&(l&&Math.abs(t-R/v)<.1||Math.abs(T[0].pts-R-b)<20*_),T.forEach(function(e){e.pts=e.dts=E(e.pts-b,t*v)}),0!==(T=T.filter(function(e){return e.pts>=0})).length){if(r||(R=l?t*v:T[0].pts),e.isAAC)for(var L=this.config.maxAudioFramesDrift,D=0,O=R;D<T.length;){var w,P=T[D];w=(N=P.pts)-O;var I=Math.abs(1e3*w/v);if(w<=-L*_)s.logger.warn("Dropping 1 audio frame @ "+(O/v).toFixed(3)+"s due to "+Math.round(I)+" ms overlap."),T.splice(D,1),e.len-=P.unit.length;else if(w>=L*_&&I<1e4&&O){var x=Math.round(w/_);s.logger.warn("Injecting "+x+" audio frame @ "+(O/v).toFixed(3)+"s due to "+Math.round(1e3*w/v)+" ms gap.");for(var F=0;F<x;F++){var k=Math.max(O,0);(f=i.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(s.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),f=P.unit.subarray()),T.splice(D,0,{unit:f,pts:k,dts:k}),e.len+=f.length,O+=_,D++}P.pts=P.dts=O,O+=_,D++}else Math.abs(w),P.pts=P.dts=O,O+=_,D++}F=0;for(var C=T.length;F<C;F++){var M=T[F],U=M.unit,N=M.pts;if(void 0!==g)d.duration=Math.round((N-g)/y);else{var B=Math.round(1e3*(N-R)/v),G=0;if(r&&e.isAAC&&B){if(B>0&&B<1e4)G=Math.round((N-R)/_),s.logger.log(B+" ms hole between AAC samples detected,filling it"),G>0&&((f=i.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(f=U.subarray()),e.len+=G*f.length);else if(B<-12){s.logger.log("drop overlapping AAC sample, expected/parsed/delta:"+(R/v).toFixed(3)+"s/"+(N/v).toFixed(3)+"s/"+-B+"ms"),e.len-=U.byteLength;continue}N=R}if(p=N,!(e.len>0))return;var j=S?e.len:e.len+8;u=S?0:8;try{c=new Uint8Array(j)}catch(e){return void this.observer.trigger(n.default.ERROR,{type:o.ErrorTypes.MUX_ERROR,details:o.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:j,reason:"fail allocating audio mdat "+j})}S||(new DataView(c.buffer).setUint32(0,j),c.set(a.default.types.mdat,4));for(D=0;D<G;D++)(f=i.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(s.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),f=U.subarray()),c.set(f,u),u+=f.byteLength,d={size:f.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},A.push(d)}c.set(U,u);var H=U.byteLength;u+=H,d={size:H,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},A.push(d),g=N}var K=0,V=A.length;if(V>=2&&(K=A[V-2].duration,d.duration=K),V){this.nextAudioPts=R=g+y*K,e.len=0,e.samples=A,h=S?new Uint8Array:a.default.moof(e.sequenceNumber++,p/y,e),e.samples=[];var W=p/v,Y=R/v,z={data1:h,data2:c,startPTS:W,endPTS:Y,startDTS:W,endDTS:Y,type:"audio",hasAudio:!0,hasVideo:!1,nb:V};return this.observer.trigger(n.default.FRAG_PARSING_DATA,z),z}return null}},e.prototype.remuxEmptyAudio=function(e,t,r,a){var n=e.inputTimeScale,o=n/(e.samplerate?e.samplerate:n),l=this.nextAudioPts,u=(void 0!==l?l:a.startDTS*n)+this._initDTS,d=a.endDTS*n+this._initDTS,f=1024*o,c=Math.ceil((d-u)/f),h=i.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(s.logger.warn("remux empty Audio"),h){for(var p=[],g=0;g<c;g++){var v=u+g*f;p.push({unit:h,pts:v,dts:v}),e.len+=h.length}e.samples=p,this.remuxAudio(e,t,r)}else s.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")},e.prototype.remuxID3=function(e){var t,r=e.samples.length,i=e.inputTimeScale,a=this._initPTS,o=this._initDTS;if(r){for(var s=0;s<r;s++)(t=e.samples[s]).pts=(t.pts-a)/i,t.dts=(t.dts-o)/i;this.observer.trigger(n.default.FRAG_PARSING_METADATA,{samples:e.samples})}e.samples=[]},e.prototype.remuxText=function(e){e.samples.sort(function(e,t){return e.pts-t.pts});var t,r=e.samples.length,i=e.inputTimeScale,a=this._initPTS;if(r){for(var o=0;o<r;o++)(t=e.samples[o]).pts=(t.pts-a)/i;this.observer.trigger(n.default.FRAG_PARSING_USERDATA,{samples:e.samples})}e.samples=[]},e.prototype._PTSNormalize=function(e,t){var r;if(void 0===t)return e;for(r=t<e?-8589934592:8589934592;Math.abs(e-t)>4294967296;)e+=r;return e},e}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.getSilentFrame=function(e,t){switch(e){case"mp4a.40.2":if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null},e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Math.pow(2,32)-1,a=function(){function e(){}return e.init=function(){var t;for(t in e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=n,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var o=new Uint8Array([105,115,111,109]),s=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,o,l,o,s),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,a))},e.box=function(e){for(var t,r=Array.prototype.slice.call(arguments,1),i=8,a=r.length,n=a;a--;)i+=r[a].byteLength;for((t=new Uint8Array(i))[0]=i>>24&255,t[1]=i>>16&255,t[2]=i>>8&255,t[3]=255&i,t.set(e,4),a=0,i=8;a<n;a++)t.set(r[a],i),i+=r[a].byteLength;return t},e.hdlr=function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])},e.mdat=function(t){return e.box(e.types.mdat,t)},e.mdhd=function(t,r){r*=t;var a=Math.floor(r/(i+1)),n=Math.floor(r%(i+1));return e.box(e.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,a>>24,a>>16&255,a>>8&255,255&a,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))},e.mdia=function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))},e.mfhd=function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))},e.minf=function(t){return"audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t))},e.moof=function(t,r,i){return e.box(e.types.moof,e.mfhd(t),e.traf(i,r))},e.moov=function(t){for(var r=t.length,i=[];r--;)i[r]=e.trak(t[r]);return e.box.apply(null,[e.types.moov,e.mvhd(t[0].timescale,t[0].duration)].concat(i).concat(e.mvex(t)))},e.mvex=function(t){for(var r=t.length,i=[];r--;)i[r]=e.trex(t[r]);return e.box.apply(null,[e.types.mvex].concat(i))},e.mvhd=function(t,r){r*=t;var a=Math.floor(r/(i+1)),n=Math.floor(r%(i+1)),o=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,a>>24,a>>16&255,a>>8&255,255&a,n>>24,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,o)},e.sdtp=function(t){var r,i,a=t.samples||[],n=new Uint8Array(4+a.length);for(i=0;i<a.length;i++)r=a[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return e.box(e.types.sdtp,n)},e.stbl=function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))},e.avc1=function(t){var r,i,a,n=[],o=[];for(r=0;r<t.sps.length;r++)a=(i=t.sps[r]).byteLength,n.push(a>>>8&255),n.push(255&a),n=n.concat(Array.prototype.slice.call(i));for(r=0;r<t.pps.length;r++)a=(i=t.pps[r]).byteLength,o.push(a>>>8&255),o.push(255&a),o=o.concat(Array.prototype.slice.call(i));var s=e.box(e.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|t.sps.length].concat(n).concat([t.pps.length]).concat(o))),l=t.width,u=t.height,d=t.pixelRatio[0],f=t.pixelRatio[1];return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),s,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),e.box(e.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,255&d,f>>24,f>>16&255,f>>8&255,255&f])))},e.esds=function(e){var t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))},e.mp4a=function(t){var r=t.samplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),e.box(e.types.esds,e.esds(t)))},e.mp3=function(t){var r=t.samplerate;return e.box(e.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},e.stsd=function(t){return"audio"===t.type?t.isAAC||"mp3"!==t.codec?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.mp3(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))},e.tkhd=function(t){var r=t.id,a=t.duration*t.timescale,n=t.width,o=t.height,s=Math.floor(a/(i+1)),l=Math.floor(a%(i+1));return e.box(e.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,l>>24,l>>16&255,l>>8&255,255&l,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,n>>8&255,255&n,0,0,o>>8&255,255&o,0,0]))},e.traf=function(t,r){var a=e.sdtp(t),n=t.id,o=Math.floor(r/(i+1)),s=Math.floor(r%(i+1));return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),e.box(e.types.tfdt,new Uint8Array([1,0,0,0,o>>24,o>>16&255,o>>8&255,255&o,s>>24,s>>16&255,s>>8&255,255&s])),e.trun(t,a.length+16+20+8+16+8+8),a)},e.trak=function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))},e.trex=function(t){var r=t.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},e.trun=function(t,r){var i,a,n,o,s,l,u=t.samples||[],d=u.length,f=12+16*d,c=new Uint8Array(f);for(r+=8+f,c.set([0,0,15,1,d>>>24&255,d>>>16&255,d>>>8&255,255&d,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<d;i++)n=(a=u[i]).duration,o=a.size,s=a.flags,l=a.cts,c.set([n>>>24&255,n>>>16&255,n>>>8&255,255&n,o>>>24&255,o>>>16&255,o>>>8&255,255&o,s.isLeading<<2|s.dependsOn,s.isDependedOn<<6|s.hasRedundancy<<4|s.paddingValue<<1|s.isNonSync,61440&s.degradPrio,15&s.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);return e.box(e.types.trun,c)},e.initSegment=function(t){e.types||e.init();var r,i=e.moov(t);return(r=new Uint8Array(e.FTYP.byteLength+i.byteLength)).set(e.FTYP),r.set(i,e.FTYP.byteLength),r},e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),a=function(){function e(e){this.observer=e}return e.prototype.destroy=function(){},e.prototype.resetTimeStamp=function(){},e.prototype.resetInitSegment=function(){},e.prototype.remux=function(e,t,r,a,n,o,s,l){var u=this.observer,d="";e&&(d+="audio"),t&&(d+="video"),u.trigger(i.default.FRAG_PARSING_DATA,{data1:l,startPTS:n,startDTS:n,type:d,hasAudio:!!e,hasVideo:!!t,nb:1,dropped:0}),u.trigger(i.default.FRAG_PARSED)},e}();t.default=a},function(e,t,r){"use strict";var i=Object.prototype.hasOwnProperty,a="~";function n(){}function o(e,t,r,i,n){if("function"!=typeof r)throw new TypeError("The listener must be a function");var o=new function(e,t,r){this.fn=e,this.context=t,this.once=r||!1}(r,i||e,n),s=a?a+t:t;return e._events[s]?e._events[s].fn?e._events[s]=[e._events[s],o]:e._events[s].push(o):(e._events[s]=o,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function l(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),l.prototype.eventNames=function(){var e,t,r=[];if(0===this._eventsCount)return r;for(t in e=this._events)i.call(e,t)&&r.push(a?t.slice(1):t);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},l.prototype.listeners=function(e){var t=a?a+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,o=new Array(n);i<n;i++)o[i]=r[i].fn;return o},l.prototype.listenerCount=function(e){var t=a?a+e:e,r=this._events[t];return r?r.fn?1:r.length:0},l.prototype.emit=function(e,t,r,i,n,o){var s=a?a+e:e;if(!this._events[s])return!1;var l,u,d=this._events[s],f=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),f){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,r),!0;case 4:return d.fn.call(d.context,t,r,i),!0;case 5:return d.fn.call(d.context,t,r,i,n),!0;case 6:return d.fn.call(d.context,t,r,i,n,o),!0}for(u=1,l=new Array(f-1);u<f;u++)l[u-1]=arguments[u];d.fn.apply(d.context,l)}else{var c,h=d.length;for(u=0;u<h;u++)switch(d[u].once&&this.removeListener(e,d[u].fn,void 0,!0),f){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,t);break;case 3:d[u].fn.call(d[u].context,t,r);break;case 4:d[u].fn.call(d[u].context,t,r,i);break;default:if(!l)for(c=1,l=new Array(f-1);c<f;c++)l[c-1]=arguments[c];d[u].fn.apply(d[u].context,l)}}return!0},l.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},l.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},l.prototype.removeListener=function(e,t,r,i){var n=a?a+e:e;if(!this._events[n])return this;if(!t)return s(this,n),this;var o=this._events[n];if(o.fn)o.fn!==t||i&&!o.once||r&&o.context!==r||s(this,n);else{for(var l=0,u=[],d=o.length;l<d;l++)(o[l].fn!==t||i&&!o[l].once||r&&o[l].context!==r)&&u.push(o[l]);u.length?this._events[n]=1===u.length?u[0]:u:s(this,n)}return this},l.prototype.removeAllListeners=function(e){var t;return e?(t=a?a+e:e,this._events[t]&&s(this,t)):(this._events=new n,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=a,l.EventEmitter=l,e.exports=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(18),a=r(1),n=r(0),o=r(47);t.default=function(e){var t=new o.EventEmitter;t.trigger=function(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];t.emit.apply(t,[e,e].concat(r))},t.off=function(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];t.removeListener.apply(t,[e].concat(r))};var r=function(t,r){e.postMessage({event:t,data:r})};e.addEventListener("message",function(a){var o=a.data;switch(o.cmd){case"init":var s=JSON.parse(o.config);e.demuxer=new i.default(t,o.typeSupported,s,o.vendor),n.enableLogs(s.debug),r("init",null);break;case"demux":e.demuxer.push(o.data,o.decryptdata,o.initSegment,o.audioCodec,o.videoCodec,o.timeOffset,o.discontinuity,o.trackSwitch,o.contiguous,o.duration,o.accurateTimeOffset,o.defaultInitPTS)}}),t.on(a.default.FRAG_DECRYPTED,r),t.on(a.default.FRAG_PARSING_INIT_SEGMENT,r),t.on(a.default.FRAG_PARSED,r),t.on(a.default.ERROR,r),t.on(a.default.FRAG_PARSING_METADATA,r),t.on(a.default.FRAG_PARSING_USERDATA,r),t.on(a.default.INIT_PTS_FOUND,r),t.on(a.default.FRAG_PARSING_DATA,function(t,r){var i=[],a={event:t,data:r};r.data1&&(a.data1=r.data1.buffer,i.push(r.data1.buffer),delete r.data1),r.data2&&(a.data2=r.data2.buffer,i.push(r.data2.buffer),delete r.data2),e.postMessage(a,i)})}},function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function a(e){return"object"==typeof e&&null!==e}function n(e){return void 0===e}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,o,s,l,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var d=new Error('Uncaught, unspecified "error" event. ('+t+")");throw d.context=t,d}if(n(r=this._events[e]))return!1;if(i(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),r.apply(this,s)}else if(a(r))for(s=Array.prototype.slice.call(arguments,1),o=(u=r.slice()).length,l=0;l<o;l++)u[l].apply(this,s);return!0},r.prototype.addListener=function(e,t){var o;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(o=n(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function");var r=!1;function a(){this.removeListener(e,a),r||(r=!0,t.apply(this,arguments))}return a.listener=t,this.on(e,a),this},r.prototype.removeListener=function(e,t){var r,n,o,s;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(r=this._events[e]).length,n=-1,r===t||i(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(r)){for(s=o;s-- >0;)if(r[s]===t||r[s].listener&&r[s].listener===t){n=s;break}if(n<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i(r=this._events[e]))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={toString:function(e){for(var t="",r=e.length,i=0;i<r;i++)t+="["+e.start(i).toFixed(3)+","+e.end(i).toFixed(3)+"]";return t}}},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(10),a=r(0);function n(e,t){for(var r=null,i=0;i<e.length;i+=1){var a=e[i];if(a&&a.cc===t){r=a;break}}return r}function o(e,t,r){var i=!1;return t&&t.details&&r&&(r.endCC>r.startCC||e&&e.cc<r.startCC)&&(i=!0),i}function s(e,t){var r=e.fragments,i=t.fragments;if(i.length&&r.length){var o=n(r,i[0].cc);if(o&&(!o||o.startPTS))return o;a.logger.log("No frag in previous level to align on")}else a.logger.log("No fragments to align")}function l(e,t){t.fragments.forEach(function(t){if(t){var r=t.start+e;t.start=t.startPTS=r,t.endPTS=r+t.duration}}),t.PTSKnown=!0}function u(e,t,r){if(o(e,r,t)){var i=s(r.details,t);i&&(a.logger.log("Adjusting PTS using last level due to CC increase within current level"),l(i.start,t))}}function d(t,r){if(r&&r.fragments.length){if(!t.hasProgramDateTime||!r.hasProgramDateTime)return;var i=r.fragments[0].programDateTime,n=(t.fragments[0].programDateTime-i)/1e3+r.fragments[0].start;e.isFinite(n)&&(a.logger.log("adjusting PTS using programDateTime delta, sliding:"+n.toFixed(3)),l(n,t))}}t.findFirstFragWithCC=n,t.findFragWithCC=function(e,t){return i.default.search(e,function(e){return e.cc<t?1:e.cc>t?-1:0})},t.shouldAlignOnDiscontinuities=o,t.findDiscontinuousReferenceFrag=s,t.adjustPts=l,t.alignStream=function(e,t,r){u(e,r,t),!r.PTSKnown&&t&&d(r,t.details)},t.alignDiscontinuities=u,t.alignPDT=d}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(10);function a(e,t,r){void 0===e&&(e=0),void 0===t&&(t=0);var i=Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=e?1:r.start-i>e&&r.start?-1:0}function n(e,t,r){var i=1e3*Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.endProgramDateTime-i>e}t.findFragmentByPDT=function(t,r,i){if(!Array.isArray(t)||!t.length||!e.isFinite(r))return null;if(r<t[0].programDateTime)return null;if(r>=t[t.length-1].endProgramDateTime)return null;i=i||0;for(var a=0;a<t.length;++a){var o=t[a];if(n(r,i,o))return o}return null},t.findFragmentByPTS=function(e,t,r,n){void 0===r&&(r=0),void 0===n&&(n=0);var o=e?t[e.sn-t[0].sn+1]:null;return o&&!a(r,n,o)?o:i.default.search(t,a.bind(null,r,n))},t.fragmentWithinToleranceTest=a,t.pdtWithinToleranceTest=n}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(8),a=r(3),n=r(1),o=r(0),s=function(){function e(e,t,r,i){this.config=e,this.media=t,this.fragmentTracker=r,this.hls=i,this.stallReported=!1}return e.prototype.poll=function(e,t){var r=this.config,a=this.media,n=a.currentTime,s=window.performance.now();if(n!==e)return this.stallReported&&(o.logger.warn("playback not stuck anymore @"+n+", after "+Math.round(s-this.stalled)+"ms"),this.stallReported=!1),this.stalled=null,void(this.nudgeRetry=0);if(!(a.ended||!a.buffered.length||a.readyState>2||a.seeking&&i.BufferHelper.isBuffered(a,n))){var l=s-this.stalled,u=i.BufferHelper.bufferInfo(a,n,r.maxBufferHole);this.stalled?(l>=1e3&&this._reportStall(u.len),this._tryFixBufferStall(u,l)):this.stalled=s}},e.prototype._tryFixBufferStall=function(e,t){var r=this.config,i=this.fragmentTracker,a=this.media.currentTime,n=i.getPartialFragment(a);n&&this._trySkipBufferHole(n),e.len>.5&&t>1e3*r.highBufferWatchdogPeriod&&(this.stalled=null,this._tryNudgeBuffer())},e.prototype._reportStall=function(e){var t=this.hls,r=this.media;this.stallReported||(this.stallReported=!0,o.logger.warn("Playback stalling at @"+r.currentTime+" due to low buffer"),t.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:e}))},e.prototype._trySkipBufferHole=function(e){for(var t=this.hls,r=this.media,i=r.currentTime,s=0,l=0;l<r.buffered.length;l++){var u=r.buffered.start(l);if(i>=s&&i<u)return r.currentTime=Math.max(u,r.currentTime+.1),o.logger.warn("skipping hole, adjusting currentTime from "+i+" to "+r.currentTime),this.stalled=null,void t.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+i+" to "+r.currentTime,frag:e});s=r.buffered.end(l)}},e.prototype._tryNudgeBuffer=function(){var e=this.config,t=this.hls,r=this.media,i=r.currentTime,s=(this.nudgeRetry||0)+1;if(this.nudgeRetry=s,s<e.nudgeMaxRetry){var l=i+s*e.nudgeOffset;o.logger.log("adjust currentTime from "+i+" to "+l),r.currentTime=l,t.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:!1})}else o.logger.error("still stuck in high buffer @"+i+" after "+e.nudgeMaxRetry+", raise fatal error"),t.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!0})},e}();t.default=s},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(53),n=r(9),o=r(8),s=r(0);t.State={STOPPED:"STOPPED",STARTING:"STARTING",IDLE:"IDLE",PAUSED:"PAUSED",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",BUFFER_FLUSHING:"BUFFER_FLUSHING",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};var l=function(r){function a(){return null!==r&&r.apply(this,arguments)||this}return i(a,r),a.prototype.doTick=function(){},a.prototype._streamEnded=function(e,t){var r=this.fragCurrent,i=this.fragmentTracker;if(!t.live&&r&&!r.backtracked&&r.sn===t.endSN&&!e.nextStart){var a=i.getState(r);return a===n.FragmentState.PARTIAL||a===n.FragmentState.OK}return!1},a.prototype.onMediaSeeking=function(){var r=this.config,i=this.media,a=this.mediaBuffer,n=this.state,l=i?i.currentTime:null,u=o.BufferHelper.bufferInfo(a||i,l,this.config.maxBufferHole);if(e.isFinite(l)&&s.logger.log("media seeking to "+l.toFixed(3)),n===t.State.FRAG_LOADING){var d=this.fragCurrent;if(0===u.len&&d){var f=r.maxFragLookUpTolerance,c=d.start-f,h=d.start+d.duration+f;l<c||l>h?(d.loader&&(s.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),d.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=t.State.IDLE):s.logger.log("seeking outside of buffer but within currently loaded fragment range")}}else n===t.State.ENDED&&(0===u.len&&(this.fragPrevious=null,this.fragCurrent=null),this.state=t.State.IDLE);i&&(this.lastCurrentTime=l),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=l),this.tick()},a.prototype.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},a}(a.default);t.default=l}).call(this,r(2).Number)},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var a=e.apply(this,[t].concat(r))||this;return a._tickInterval=null,a._tickTimer=null,a._tickCallCount=0,a._boundTick=a.tick.bind(a),a}return i(t,e),t.prototype.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},t.prototype.hasInterval=function(){return!!this._tickInterval},t.prototype.hasNextTick=function(){return!!this._tickTimer},t.prototype.setInterval=function(e){return!this._tickInterval&&(this._tickInterval=setInterval(this._boundTick,e),!0)},t.prototype.clearInterval=function(){return!!this._tickInterval&&(clearInterval(this._tickInterval),this._tickInterval=null,!0)},t.prototype.clearNextTick=function(){return!!this._tickTimer&&(clearTimeout(this._tickTimer),this._tickTimer=null,!0)},t.prototype.tick=function(){this._tickCallCount++,1===this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&(this.clearNextTick(),this._tickTimer=setTimeout(this._boundTick,0)),this._tickCallCount=0)},t.prototype.doTick=function(){},t}(r(4).default);t.default=a},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(1),o=r(4),s=r(0),l=r(3),u=r(17),d=r(23),f=window.performance,c=function(e){function t(t){var r=e.call(this,t,n.default.MANIFEST_LOADED,n.default.LEVEL_LOADED,n.default.AUDIO_TRACK_SWITCHED,n.default.FRAG_LOADED,n.default.ERROR)||this;return r.canload=!1,r.currentLevelIndex=null,r.manualLevelIndex=-1,r.timer=null,a=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),r}return i(t,e),t.prototype.onHandlerDestroying=function(){this.clearTimer(),this.manualLevelIndex=-1},t.prototype.clearTimer=function(){null!==this.timer&&(clearTimeout(this.timer),this.timer=null)},t.prototype.startLoad=function(){var e=this._levels;this.canload=!0,this.levelRetryCount=0,e&&e.forEach(function(e){e.loadError=0;var t=e.details;t&&t.live&&(e.details=void 0)}),null!==this.timer&&this.loadLevel()},t.prototype.stopLoad=function(){this.canload=!1},t.prototype.onManifestLoaded=function(e){var t,r=[],i=[],o={},f=null,c=!1,h=!1;if(e.levels.forEach(function(e){var t=e.attrs;e.loadError=0,e.fragmentError=!1,c=c||!!e.videoCodec,h=h||!!e.audioCodec,a&&e.audioCodec&&-1!==e.audioCodec.indexOf("mp4a.40.34")&&(e.audioCodec=void 0),(f=o[e.bitrate])?f.url.push(e.url):(e.url=[e.url],e.urlId=0,o[e.bitrate]=e,r.push(e)),t&&(t.AUDIO&&(h=!0,d.addGroupId(f||e,"audio",t.AUDIO)),t.SUBTITLES&&d.addGroupId(f||e,"text",t.SUBTITLES))}),c&&h&&(r=r.filter(function(e){return!!e.videoCodec})),r=r.filter(function(e){var t=e.audioCodec,r=e.videoCodec;return(!t||u.isCodecSupportedInMp4(t,"audio"))&&(!r||u.isCodecSupportedInMp4(r,"video"))}),e.audioTracks&&(i=e.audioTracks.filter(function(e){return!e.audioCodec||u.isCodecSupportedInMp4(e.audioCodec,"audio")})).forEach(function(e,t){e.id=t}),r.length>0){t=r[0].bitrate,r.sort(function(e,t){return e.bitrate-t.bitrate}),this._levels=r;for(var p=0;p<r.length;p++)if(r[p].bitrate===t){this._firstLevel=p,s.logger.log("manifest loaded,"+r.length+" level(s) found, first bitrate:"+t);break}this.hls.trigger(n.default.MANIFEST_PARSED,{levels:r,audioTracks:i,firstLevel:this._firstLevel,stats:e.stats,audio:h,video:c,altAudio:i.some(function(e){return!!e.url})})}else this.hls.trigger(n.default.ERROR,{type:l.ErrorTypes.MEDIA_ERROR,details:l.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:this.hls.url,reason:"no level with compatible codecs found in manifest"})},Object.defineProperty(t.prototype,"levels",{get:function(){return this._levels},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"level",{get:function(){return this.currentLevelIndex},set:function(e){var t=this._levels;t&&(e=Math.min(e,t.length-1),this.currentLevelIndex===e&&t[e].details||this.setLevelInternal(e))},enumerable:!0,configurable:!0}),t.prototype.setLevelInternal=function(e){var t=this._levels,r=this.hls;if(e>=0&&e<t.length){if(this.clearTimer(),this.currentLevelIndex!==e){s.logger.log("switching to level "+e),this.currentLevelIndex=e;var i=t[e];i.level=e,r.trigger(n.default.LEVEL_SWITCHING,i)}var a=t[e],o=a.details;if(!o||o.live){var u=a.urlId;r.trigger(n.default.LEVEL_LOADING,{url:a.url[u],level:e,id:u})}}else r.trigger(n.default.ERROR,{type:l.ErrorTypes.OTHER_ERROR,details:l.ErrorDetails.LEVEL_SWITCH_ERROR,level:e,fatal:!1,reason:"invalid level idx"})},Object.defineProperty(t.prototype,"manualLevel",{get:function(){return this.manualLevelIndex},set:function(e){this.manualLevelIndex=e,void 0===this._startLevel&&(this._startLevel=e),-1!==e&&(this.level=e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"firstLevel",{get:function(){return this._firstLevel},set:function(e){this._firstLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"startLevel",{get:function(){if(void 0===this._startLevel){var e=this.hls.config.startLevel;return void 0!==e?e:this._firstLevel}return this._startLevel},set:function(e){this._startLevel=e},enumerable:!0,configurable:!0}),t.prototype.onError=function(e){if(e.fatal)e.type===l.ErrorTypes.NETWORK_ERROR&&this.clearTimer();else{var t,r=!1,i=!1;switch(e.details){case l.ErrorDetails.FRAG_LOAD_ERROR:case l.ErrorDetails.FRAG_LOAD_TIMEOUT:case l.ErrorDetails.KEY_LOAD_ERROR:case l.ErrorDetails.KEY_LOAD_TIMEOUT:t=e.frag.level,i=!0;break;case l.ErrorDetails.LEVEL_LOAD_ERROR:case l.ErrorDetails.LEVEL_LOAD_TIMEOUT:t=e.context.level,r=!0;break;case l.ErrorDetails.REMUX_ALLOC_ERROR:t=e.level,r=!0}void 0!==t&&this.recoverLevel(e,t,r,i)}},t.prototype.recoverLevel=function(e,t,r,i){var a,n,o,l=this,u=this.hls.config,d=e.details,f=this._levels[t];if(f.loadError++,f.fragmentError=i,r){if(!(this.levelRetryCount+1<=u.levelLoadingMaxRetry))return s.logger.error("level controller, cannot recover from "+d+" error"),this.currentLevelIndex=null,this.clearTimer(),void(e.fatal=!0);n=Math.min(Math.pow(2,this.levelRetryCount)*u.levelLoadingRetryDelay,u.levelLoadingMaxRetryTimeout),this.timer=setTimeout(function(){return l.loadLevel()},n),e.levelRetry=!0,this.levelRetryCount++,s.logger.warn("level controller, "+d+", retry in "+n+" ms, current retry count is "+this.levelRetryCount)}(r||i)&&((a=f.url.length)>1&&f.loadError<a?(f.urlId=(f.urlId+1)%a,f.details=void 0,s.logger.warn("level controller, "+d+" for level "+t+": switching to redundant URL-id "+f.urlId)):-1===this.manualLevelIndex?(o=0===t?this._levels.length-1:t-1,s.logger.warn("level controller, "+d+": switch to "+o),this.hls.nextAutoLevel=this.currentLevelIndex=o):i&&(s.logger.warn("level controller, "+d+": reload a fragment"),this.currentLevelIndex=null))},t.prototype.onFragLoaded=function(e){var t=e.frag;if(void 0!==t&&"main"===t.type){var r=this._levels[t.level];void 0!==r&&(r.fragmentError=!1,r.loadError=0,this.levelRetryCount=0)}},t.prototype.onLevelLoaded=function(e){var t=this,r=e.level;if(r===this.currentLevelIndex){var i=this._levels[r];i.fragmentError||(i.loadError=0,this.levelRetryCount=0);var a=e.details;if(a.live){var n=1e3*(a.averagetargetduration?a.averagetargetduration:a.targetduration),o=n,l=i.details;l&&a.endSN===l.endSN&&(o/=2,s.logger.log("same live playlist, reload twice faster")),o-=f.now()-e.stats.trequest,o=Math.max(n/2,Math.round(o)),s.logger.log("live playlist, reload in "+Math.round(o)+" ms"),this.timer=setTimeout(function(){return t.loadLevel()},o)}else this.clearTimer()}},t.prototype.onAudioTrackSwitched=function(e){var t=this.hls.audioTracks[e.id].groupId,r=this.hls.levels[this.currentLevelIndex];if(r&&r.audioGroupIds){var i=r.audioGroupIds.findIndex(function(e){return e===t});i!==r.urlId&&(r.urlId=i,this.startLoad())}},t.prototype.loadLevel=function(){if(s.logger.debug("call to loadLevel"),null!==this.currentLevelIndex&&this.canload){var e=this._levels[this.currentLevelIndex];if("object"==typeof e&&e.url.length>0){var t=this.currentLevelIndex,r=e.urlId,i=e.url[r];s.logger.log("Attempt loading level index "+t+" with URL-id "+r),this.hls.trigger(n.default.LEVEL_LOADING,{url:i,level:t,id:r})}}},Object.defineProperty(t.prototype,"nextLoadLevel",{get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(e){this.level=e,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=e)},enumerable:!0,configurable:!0}),t}(o.default);t.default=c},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(11),s=r(56),l=function(e){function t(t){var r=e.call(this,t,a.default.MEDIA_ATTACHED,a.default.MEDIA_DETACHING,a.default.FRAG_PARSING_METADATA)||this;return r.id3Track=void 0,r.media=void 0,r}return i(t,e),t.prototype.destroy=function(){n.default.prototype.destroy.call(this)},t.prototype.onMediaAttached=function(e){this.media=e.media,this.media},t.prototype.onMediaDetaching=function(){s.clearCurrentCues(this.id3Track),this.id3Track=void 0,this.media=void 0},t.prototype.getID3Track=function(e){for(var t=0;t<e.length;t++){var r=e[t];if("metadata"===r.kind&&"id3"===r.label)return s.sendAddTrackEvent(r,this.media),r}return this.media.addTextTrack("metadata","id3")},t.prototype.onFragParsingMetadata=function(e){var t=e.frag,r=e.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var i=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,a=0;a<r.length;a++){var n=o.default.getID3Frames(r[a].data);if(n){var s=r[a].pts,l=a<r.length-1?r[a+1].pts:t.endPTS;s===l&&(l+=1e-4);for(var u=0;u<n.length;u++){var d=n[u];if(!o.default.isTimeStampFrame(d)){var f=new i(s,l,"");f.value=d,this.id3Track.addCue(f)}}}}},t}(n.default);t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendAddTrackEvent=function(e,t){var r=null;try{r=new window.Event("addtrack")}catch(e){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=e,t.dispatchEvent(r)},t.clearCurrentCues=function(e){if(e&&e.cues)for(;e.cues.length>0;)e.removeCue(e.cues[0])}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(12);t.isSupported=function(){var e=i.getMediaSource(),t=window.SourceBuffer||window.WebKitSourceBuffer,r=e&&"function"==typeof e.isTypeSupported&&e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),a=!t||t.prototype&&"function"==typeof t.prototype.appendBuffer&&"function"==typeof t.prototype.remove;return!!r&&!!a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(59),a=r(62),n=r(63),o=r(64),s=r(65),l=(r(5),r(5),r(5),r(5),r(5),r(5),r(5),r(66));t.hlsDefaultConfig={autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,liveDurationInfinity:!1,liveBackBufferLength:1/0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:s.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,abrController:i.default,bufferController:a.default,capLevelController:n.default,fpsController:o.default,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,requestMediaKeySystemAccessFunc:l.requestMediaKeySystemAccess}},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(8),s=r(3),l=r(0),u=r(60),d=window.performance,f=function(t){function r(e){var r=t.call(this,e,a.default.FRAG_LOADING,a.default.FRAG_LOADED,a.default.FRAG_BUFFERED,a.default.ERROR)||this;return r.lastLoadedFragLevel=0,r._nextAutoLevel=-1,r.hls=e,r.timer=null,r._bwEstimator=null,r.onCheck=r._abandonRulesCheck.bind(r),r}return i(r,t),r.prototype.destroy=function(){this.clearTimer(),n.default.prototype.destroy.call(this)},r.prototype.onFragLoading=function(e){var t=e.frag;if("main"===t.type&&(this.timer||(this.fragCurrent=t,this.timer=setInterval(this.onCheck,100)),!this._bwEstimator)){var r=this.hls,i=r.config,a=t.level,n=void 0,o=void 0;r.levels[a].details.live?(n=i.abrEwmaFastLive,o=i.abrEwmaSlowLive):(n=i.abrEwmaFastVoD,o=i.abrEwmaSlowVoD),this._bwEstimator=new u.default(r,o,n,i.abrEwmaDefaultEstimate)}},r.prototype._abandonRulesCheck=function(){var e=this.hls,t=e.media,r=this.fragCurrent;if(r){var i=r.loader,n=e.minAutoLevel;if(!i||i.stats&&i.stats.aborted)return l.logger.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);var s=i.stats;if(t&&s&&(!t.paused&&0!==t.playbackRate||!t.readyState)&&r.autoLevel&&r.level){var u=d.now()-s.trequest,f=Math.abs(t.playbackRate);if(u>500*r.duration/f){var c=e.levels,h=Math.max(1,s.bw?s.bw/8:1e3*s.loaded/u),p=c[r.level],g=p.realBitrate?Math.max(p.realBitrate,p.bitrate):p.bitrate,v=s.total?s.total:Math.max(s.loaded,Math.round(r.duration*g/8)),m=t.currentTime,y=(v-s.loaded)/h,_=(o.BufferHelper.bufferInfo(t,m,e.config.maxBufferHole).end-m)/f;if(_<2*r.duration/f&&y>_){var E=void 0,b=void 0;for(b=r.level-1;b>n;b--){var S=c[b].realBitrate?Math.max(c[b].realBitrate,c[b].bitrate):c[b].bitrate;if((E=r.duration*S/(6.4*h))<_)break}E<y&&(l.logger.warn("loading too slow, abort fragment loading and switch to level "+b+":fragLoadedDelay["+b+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+E.toFixed(1)+"<"+y.toFixed(1)+":"+_.toFixed(1)),e.nextLoadLevel=b,this._bwEstimator.sample(u,s.loaded),i.abort(),this.clearTimer(),e.trigger(a.default.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:s}))}}}}},r.prototype.onFragLoaded=function(t){var r=t.frag;if("main"===r.type&&e.isFinite(r.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=r.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var i=this.hls.levels[r.level],a=(i.loaded?i.loaded.bytes:0)+t.stats.loaded,n=(i.loaded?i.loaded.duration:0)+t.frag.duration;i.loaded={bytes:a,duration:n},i.realBitrate=Math.round(8*a/n)}if(t.frag.bitrateTest){var o=t.stats;o.tparsed=o.tbuffered=o.tload,this.onFragBuffered(t)}}},r.prototype.onFragBuffered=function(t){var r=t.stats,i=t.frag;if(!0!==r.aborted&&"main"===i.type&&e.isFinite(i.sn)&&(!i.bitrateTest||r.tload===r.tbuffered)){var a=r.tparsed-r.trequest;l.logger.log("latency/loading/parsing/append/kbps:"+Math.round(r.tfirst-r.trequest)+"/"+Math.round(r.tload-r.tfirst)+"/"+Math.round(r.tparsed-r.tload)+"/"+Math.round(r.tbuffered-r.tparsed)+"/"+Math.round(8*r.loaded/(r.tbuffered-r.trequest))),this._bwEstimator.sample(a,r.loaded),r.bwEstimate=this._bwEstimator.getEstimate(),i.bitrateTest?this.bitrateTestDelay=a/1e3:this.bitrateTestDelay=0}},r.prototype.onError=function(e){switch(e.details){case s.ErrorDetails.FRAG_LOAD_ERROR:case s.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer()}},r.prototype.clearTimer=function(){clearInterval(this.timer),this.timer=null},Object.defineProperty(r.prototype,"nextAutoLevel",{get:function(){var e=this._nextAutoLevel,t=this._bwEstimator;if(!(-1===e||t&&t.canEstimate()))return e;var r=this._nextABRAutoLevel;return-1!==e&&(r=Math.min(e,r)),r},set:function(e){this._nextAutoLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"_nextABRAutoLevel",{get:function(){var e=this.hls,t=e.maxAutoLevel,r=e.levels,i=e.config,a=e.minAutoLevel,n=e.media,s=this.lastLoadedFragLevel,u=this.fragCurrent?this.fragCurrent.duration:0,d=n?n.currentTime:0,f=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,c=this._bwEstimator?this._bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,h=(o.BufferHelper.bufferInfo(n,d,i.maxBufferHole).end-d)/f,p=this._findBestLevel(s,u,c,a,t,h,i.abrBandWidthFactor,i.abrBandWidthUpFactor,r);if(p>=0)return p;l.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var g=u?Math.min(u,i.maxStarvationDelay):i.maxStarvationDelay,v=i.abrBandWidthFactor,m=i.abrBandWidthUpFactor;if(0===h){var y=this.bitrateTestDelay;if(y)g=(u?Math.min(u,i.maxLoadingDelay):i.maxLoadingDelay)-y,l.logger.trace("bitrate test took "+Math.round(1e3*y)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*g)+" ms"),v=m=1}return p=this._findBestLevel(s,u,c,a,t,h+g,v,m,r),Math.max(p,0)},enumerable:!0,configurable:!0}),r.prototype._findBestLevel=function(e,t,r,i,a,n,o,s,u){for(var d=a;d>=i;d--){var f=u[d];if(f){var c=f.details,h=c?c.totalduration/c.fragments.length:t,p=!!c&&c.live,g=void 0;g=d<=e?o*r:s*r;var v=u[d].realBitrate?Math.max(u[d].realBitrate,u[d].bitrate):u[d].bitrate,m=v*h/g;if(l.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+d+"/"+Math.round(g)+"/"+v+"/"+h+"/"+n+"/"+m),g>v&&(!m||p&&!this.bitrateTestDelay||m<n))return d}}return-1},r}(n.default);t.default=f}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(61),a=function(){function e(e,t,r,a){this.hls=e,this.defaultEstimate_=a,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new i.default(t),this.fast_=new i.default(r)}return e.prototype.sample=function(e,t){var r=8e3*t/(e=Math.max(e,this.minDelayMs_)),i=e/1e3;this.fast_.sample(i,r),this.slow_.sample(i,r)},e.prototype.canEstimate=function(){var e=this.fast_;return e&&e.getTotalWeight()>=this.minWeight_},e.prototype.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},e.prototype.destroy=function(){},e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=0,this.totalWeight_=0}return e.prototype.sample=function(e,t){var r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e},e.prototype.getTotalWeight=function(){return this.totalWeight_},e.prototype.getEstimate=function(){if(this.alpha_){var e=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/e}return this.estimate_},e}();t.default=i},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(0),s=r(3),l=r(12).getMediaSource(),u=function(t){function r(e){var r=t.call(this,e,a.default.MEDIA_ATTACHING,a.default.MEDIA_DETACHING,a.default.MANIFEST_PARSED,a.default.BUFFER_RESET,a.default.BUFFER_APPENDING,a.default.BUFFER_CODECS,a.default.BUFFER_EOS,a.default.BUFFER_FLUSHING,a.default.LEVEL_PTS_UPDATED,a.default.LEVEL_UPDATED)||this;return r._msDuration=null,r._levelDuration=null,r._levelTargetDuration=10,r._live=null,r._objectUrl=null,r.bufferCodecEventsExpected=0,r.onsbue=r.onSBUpdateEnd.bind(r),r.onsbe=r.onSBUpdateError.bind(r),r.pendingTracks={},r.tracks={},r}return i(r,t),r.prototype.destroy=function(){n.default.prototype.destroy.call(this)},r.prototype.onLevelPtsUpdated=function(e){var t=e.type,r=this.tracks.audio;if("audio"===t&&r&&"audio/mpeg"===r.container){var i=this.sourceBuffer.audio;if(Math.abs(i.timestampOffset-e.start)>.1){var a=i.updating;try{i.abort()}catch(e){o.logger.warn("can not abort audio buffer: "+e)}a?this.audioTimestampOffset=e.start:(o.logger.warn("change mpeg audio timestamp offset from "+i.timestampOffset+" to "+e.start),i.timestampOffset=e.start)}}},r.prototype.onManifestParsed=function(e){this.bufferCodecEventsExpected=e.altAudio?2:1,o.logger.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},r.prototype.onMediaAttaching=function(e){var t=this.media=e.media;if(t){var r=this.mediaSource=new l;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),r.addEventListener("sourceopen",this.onmso),r.addEventListener("sourceended",this.onmse),r.addEventListener("sourceclose",this.onmsc),t.src=window.URL.createObjectURL(r),this._objectUrl=t.src}},r.prototype.onMediaDetaching=function(){o.logger.log("media source detaching");var e=this.mediaSource;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(e){o.logger.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}e.removeEventListener("sourceopen",this.onmso),e.removeEventListener("sourceended",this.onmse),e.removeEventListener("sourceclose",this.onmsc),this.media&&(window.URL.revokeObjectURL(this._objectUrl),this.media.src===this._objectUrl?(this.media.removeAttribute("src"),this.media.load()):o.logger.warn("media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(a.default.MEDIA_DETACHED)},r.prototype.onMediaSourceOpen=function(){o.logger.log("media source opened"),this.hls.trigger(a.default.MEDIA_ATTACHED,{media:this.media});var e=this.mediaSource;e&&e.removeEventListener("sourceopen",this.onmso),this.checkPendingTracks()},r.prototype.checkPendingTracks=function(){var e=this.bufferCodecEventsExpected,t=this.pendingTracks,r=Object.keys(t).length;(r&&!e||2===r)&&(this.createSourceBuffers(t),this.pendingTracks={},this.doAppending())},r.prototype.onMediaSourceClose=function(){o.logger.log("media source closed")},r.prototype.onMediaSourceEnded=function(){o.logger.log("media source ended")},r.prototype.onSBUpdateEnd=function(){if(this.audioTimestampOffset){var e=this.sourceBuffer.audio;o.logger.warn("change mpeg audio timestamp offset from "+e.timestampOffset+" to "+this.audioTimestampOffset),e.timestampOffset=this.audioTimestampOffset,delete this.audioTimestampOffset}this._needsFlush&&this.doFlush(),this._needsEos&&this.checkEos(),this.appending=!1;var t=this.parent,r=this.segments.reduce(function(e,r){return r.parent===t?e+1:e},0),i={},n=this.sourceBuffer;for(var s in n)i[s]=n[s].buffered;this.hls.trigger(a.default.BUFFER_APPENDED,{parent:t,pending:r,timeRanges:i}),this._needsFlush||this.doAppending(),this.updateMediaElementDuration(),0===r&&this.flushLiveBackBuffer()},r.prototype.onSBUpdateError=function(e){o.logger.error("sourceBuffer error:",e),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})},r.prototype.onBufferReset=function(){var e=this.sourceBuffer;for(var t in e){var r=e[t];try{this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this.onsbue),r.removeEventListener("error",this.onsbe)}catch(e){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0},r.prototype.onBufferCodecs=function(e){var t=this;if(!Object.keys(this.sourceBuffer).length){Object.keys(e).forEach(function(r){t.pendingTracks[r]=e[r]});var r=this.mediaSource;this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),r&&"open"===r.readyState&&this.checkPendingTracks()}},r.prototype.createSourceBuffers=function(e){var t=this.sourceBuffer,r=this.mediaSource;for(var i in e)if(!t[i]){var n=e[i],l=n.levelCodec||n.codec,u=n.container+";codecs="+l;o.logger.log("creating sourceBuffer("+u+")");try{var d=t[i]=r.addSourceBuffer(u);d.addEventListener("updateend",this.onsbue),d.addEventListener("error",this.onsbe),this.tracks[i]={codec:l,container:n.container},n.buffer=d}catch(e){o.logger.error("error while trying to add sourceBuffer:"+e.message),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:e,mimeType:u})}}this.hls.trigger(a.default.BUFFER_CREATED,{tracks:e})},r.prototype.onBufferAppending=function(e){this._needsFlush||(this.segments?this.segments.push(e):this.segments=[e],this.doAppending())},r.prototype.onBufferAppendFail=function(e){o.logger.error("sourceBuffer error:",e.event),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})},r.prototype.onBufferEos=function(e){var t=this.sourceBuffer,r=e.type;for(var i in t)r&&i!==r||t[i].ended||(t[i].ended=!0,o.logger.log(i+" sourceBuffer now EOS"));this.checkEos()},r.prototype.checkEos=function(){var e=this.sourceBuffer,t=this.mediaSource;if(t&&"open"===t.readyState){for(var r in e){var i=e[r];if(!i.ended)return;if(i.updating)return void(this._needsEos=!0)}o.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");try{t.endOfStream()}catch(e){o.logger.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1}else this._needsEos=!1},r.prototype.onBufferFlushing=function(e){this.flushRange.push({start:e.startOffset,end:e.endOffset,type:e.type}),this.flushBufferCounter=0,this.doFlush()},r.prototype.flushLiveBackBuffer=function(){if(this._live){var e=this.hls.config.liveBackBufferLength;if(isFinite(e)&&!(e<0))for(var t=this.media.currentTime,r=this.sourceBuffer,i=Object.keys(r),a=t-Math.max(e,this._levelTargetDuration),n=i.length-1;n>=0;n--){var o=i[n],s=r[o].buffered;s.length>0&&a>s.start(0)&&this.removeBufferRange(o,r[o],0,a)}}},r.prototype.onLevelUpdated=function(e){var t=e.details;t.fragments.length>0&&(this._levelDuration=t.totalduration+t.fragments[0].start,this._levelTargetDuration=t.averagetargetduration||t.targetduration||10,this._live=t.live,this.updateMediaElementDuration())},r.prototype.updateMediaElementDuration=function(){var t,r=this.hls.config;if(null!==this._levelDuration&&this.media&&this.mediaSource&&this.sourceBuffer&&0!==this.media.readyState&&"open"===this.mediaSource.readyState){for(var i in this.sourceBuffer)if(!0===this.sourceBuffer[i].updating)return;t=this.media.duration,null===this._msDuration&&(this._msDuration=this.mediaSource.duration),!0===this._live&&!0===r.liveDurationInfinity?(o.logger.log("Media Source duration is set to Infinity"),this._msDuration=this.mediaSource.duration=1/0):(this._levelDuration>this._msDuration&&this._levelDuration>t||!e.isFinite(t))&&(o.logger.log("Updating Media Source duration to "+this._levelDuration.toFixed(3)),this._msDuration=this.mediaSource.duration=this._levelDuration)}},r.prototype.doFlush=function(){for(;this.flushRange.length;){var e=this.flushRange[0];if(!this.flushBuffer(e.start,e.end,e.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var t=0,r=this.sourceBuffer;try{for(var i in r)t+=r[i].buffered.length}catch(e){o.logger.error("error while accessing sourceBuffer.buffered")}this.appended=t,this.hls.trigger(a.default.BUFFER_FLUSHED)}},r.prototype.doAppending=function(){var e=this.hls,t=this.segments,r=this.sourceBuffer;if(Object.keys(r).length){if(this.media.error)return this.segments=[],void o.logger.error("trying to append although a media error occured, flush segment and abort");if(this.appending)return;if(t&&t.length){var i=t.shift();try{var n=r[i.type];n?n.updating?t.unshift(i):(n.ended=!1,this.parent=i.parent,n.appendBuffer(i.data),this.appendError=0,this.appended++,this.appending=!0):this.onSBUpdateEnd()}catch(r){o.logger.error("error while trying to append buffer:"+r.message),t.unshift(i);var l={type:s.ErrorTypes.MEDIA_ERROR,parent:i.parent};22!==r.code?(this.appendError?this.appendError++:this.appendError=1,l.details=s.ErrorDetails.BUFFER_APPEND_ERROR,this.appendError>e.config.appendErrorMaxRetry?(o.logger.log("fail "+e.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),this.segments=[],l.fatal=!0,e.trigger(a.default.ERROR,l)):(l.fatal=!1,e.trigger(a.default.ERROR,l))):(this.segments=[],l.details=s.ErrorDetails.BUFFER_FULL_ERROR,l.fatal=!1,e.trigger(a.default.ERROR,l))}}}},r.prototype.flushBuffer=function(e,t,r){var i,a=this.sourceBuffer;if(Object.keys(a).length){if(o.logger.log("flushBuffer,pos/start/end: "+this.media.currentTime.toFixed(3)+"/"+e+"/"+t),this.flushBufferCounter<this.appended){for(var n in a)if(!r||n===r){if((i=a[n]).ended=!1,i.updating)return o.logger.warn("cannot flush, sb updating in progress"),!1;if(this.removeBufferRange(n,i,e,t))return this.flushBufferCounter++,!1}}else o.logger.warn("abort flushing too many retries");o.logger.log("buffer flushed")}return!0},r.prototype.removeBufferRange=function(e,t,r,i){try{for(var a=0;a<t.buffered.length;a++){var n=t.buffered.start(a),s=t.buffered.end(a),l=Math.max(n,r),u=Math.min(s,i);if(Math.min(u,s)-l>.5)return o.logger.log("sb remove "+e+" ["+l+","+u+"], of ["+n+","+s+"], pos:"+this.media.currentTime),t.remove(l,u),!0}}catch(e){o.logger.warn("removeBufferRange failed",e)}return!1},r}(n.default);t.default=u}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=function(t){function r(r){var i=t.call(this,r,a.default.FPS_DROP_LEVEL_CAPPING,a.default.MEDIA_ATTACHING,a.default.MANIFEST_PARSED,a.default.BUFFER_CODECS,a.default.MEDIA_DETACHING)||this;return i.autoLevelCapping=e.POSITIVE_INFINITY,i.firstLevel=null,i.levels=[],i.media=null,i.restrictedLevels=[],i.timer=null,i}return i(r,t),r.prototype.destroy=function(){this.hls.config.capLevelToPlayerSize&&(this.media=null,this._stopCapping())},r.prototype.onFpsDropLevelCapping=function(e){r.isLevelAllowed(e.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(e.droppedLevel)},r.prototype.onMediaAttaching=function(e){this.media=e.media instanceof window.HTMLVideoElement?e.media:null},r.prototype.onManifestParsed=function(e){var t=this.hls;this.restrictedLevels=[],this.levels=e.levels,this.firstLevel=e.firstLevel,t.config.capLevelToPlayerSize&&e.video&&this._startCapping()},r.prototype.onBufferCodecs=function(e){this.hls.config.capLevelToPlayerSize&&e.video&&this._startCapping()},r.prototype.onLevelsUpdated=function(e){this.levels=e.levels},r.prototype.onMediaDetaching=function(){this._stopCapping()},r.prototype.detectPlayerSize=function(){if(this.media){var e=this.levels?this.levels.length:0;if(e){var t=this.hls;t.autoLevelCapping=this.getMaxLevel(e-1),t.autoLevelCapping>this.autoLevelCapping&&t.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}},r.prototype.getMaxLevel=function(e){var t=this;if(!this.levels)return-1;var i=this.levels.filter(function(i,a){return r.isLevelAllowed(a,t.restrictedLevels)&&a<=e});return r.getMaxLevelByMediaSize(i,this.mediaWidth,this.mediaHeight)},r.prototype._startCapping=function(){this.timer||(this.autoLevelCapping=e.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},r.prototype._stopCapping=function(){this.restrictedLevels=[],this.firstLevel=null,this.autoLevelCapping=e.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer),this.timer=null)},Object.defineProperty(r.prototype,"mediaWidth",{get:function(){var e,t=this.media;return t&&(e=t.width||t.clientWidth||t.offsetWidth,e*=r.contentScaleFactor),e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"mediaHeight",{get:function(){var e,t=this.media;return t&&(e=t.height||t.clientHeight||t.offsetHeight,e*=r.contentScaleFactor),e},enumerable:!0,configurable:!0}),Object.defineProperty(r,"contentScaleFactor",{get:function(){var e=1;try{e=window.devicePixelRatio}catch(e){}return e},enumerable:!0,configurable:!0}),r.isLevelAllowed=function(e,t){return void 0===t&&(t=[]),-1===t.indexOf(e)},r.getMaxLevelByMediaSize=function(e,t,r){if(!e||e&&!e.length)return-1;for(var i=function(e,t){return!t||(e.width!==t.width||e.height!==t.height)},a=e.length-1,n=0;n<e.length;n+=1){var o=e[n];if((o.width>=t||o.height>=r)&&i(o,e[n+1])){a=n;break}}return a},r}(r(4).default);t.default=n}).call(this,r(2).Number)},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(0),s=window.performance,l=function(e){function t(t){return e.call(this,t,a.default.MEDIA_ATTACHING)||this}return i(t,e),t.prototype.destroy=function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1},t.prototype.onMediaAttaching=function(e){var t=this.hls.config;t.capLevelOnFPSDrop&&("function"==typeof(this.video=e.media instanceof window.HTMLVideoElement?e.media:null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),t.fpsDroppedMonitoringPeriod))},t.prototype.checkFPS=function(e,t,r){var i=s.now();if(t){if(this.lastTime){var n=i-this.lastTime,l=r-this.lastDroppedFrames,u=t-this.lastDecodedFrames,d=1e3*l/n,f=this.hls;if(f.trigger(a.default.FPS_DROP,{currentDropped:l,currentDecoded:u,totalDroppedFrames:r}),d>0&&l>f.config.fpsDroppedMonitoringThreshold*u){var c=f.currentLevel;o.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(-1===f.autoLevelCapping||f.autoLevelCapping>=c)&&(c-=1,f.trigger(a.default.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:f.currentLevel}),f.autoLevelCapping=c,f.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}},t.prototype.checkFPSInterval=function(){var e=this.video;if(e)if(this.isVideoPlaybackQualityAvailable){var t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)},t}(n.default);t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=window.performance,n=window.XMLHttpRequest,o=function(){function e(e){e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}return e.prototype.destroy=function(){this.abort(),this.loader=null},e.prototype.abort=function(){var e=this.loader;e&&4!==e.readyState&&(this.stats.aborted=!0,e.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null},e.prototype.load=function(e,t,r){this.context=e,this.config=t,this.callbacks=r,this.stats={trequest:a.now(),retry:0},this.retryDelay=t.retryDelay,this.loadInternal()},e.prototype.loadInternal=function(){var e,t=this.context;e=this.loader=new n;var r=this.stats;r.tfirst=0,r.loaded=0;var i=this.xhrSetup;try{if(i)try{i(e,t.url)}catch(r){e.open("GET",t.url,!0),i(e,t.url)}e.readyState||e.open("GET",t.url,!0)}catch(r){return void this.callbacks.onError({code:e.status,text:r.message},t,e)}t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),e.send()},e.prototype.readystatechange=function(e){var t=e.currentTarget,r=t.readyState,n=this.stats,o=this.context,s=this.config;if(!n.aborted&&r>=2)if(window.clearTimeout(this.requestTimeout),0===n.tfirst&&(n.tfirst=Math.max(a.now(),n.trequest)),4===r){var l=t.status;if(l>=200&&l<300){n.tload=Math.max(n.tfirst,a.now());var u=void 0,d=void 0;d="arraybuffer"===o.responseType?(u=t.response).byteLength:(u=t.responseText).length,n.loaded=n.total=d;var f={url:t.responseURL,data:u};this.callbacks.onSuccess(f,n,o,t)}else n.retry>=s.maxRetry||l>=400&&l<499?(i.logger.error(l+" while loading "+o.url),this.callbacks.onError({code:l,text:t.statusText},o,t)):(i.logger.warn(l+" while loading "+o.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,s.maxRetryDelay),n.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),s.timeout)},e.prototype.loadtimeout=function(){i.logger.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context,null)},e.prototype.loadprogress=function(e){var t=e.currentTarget,r=this.stats;r.loaded=e.loaded,e.lengthComputable&&(r.total=e.total);var i=this.callbacks.onProgress;i&&i(r,this.context,null,t)},e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"!=typeof window&&window.navigator&&window.navigator.requestMediaKeySystemAccess?window.navigator.requestMediaKeySystemAccess.bind(window.navigator):null;t.requestMediaKeySystemAccess=i}]).default});
//# sourceMappingURL=hls.light.min.js.map

/***/ }),
/* 178 */
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

var _playback = __webpack_require__(11);

var _playback2 = _interopRequireDefault(_playback);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

__webpack_require__(179);

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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(180);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./style.scss");

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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "[data-html-img] {\n  max-width: 100%;\n  max-height: 100%; }\n", ""]);

// exports


/***/ }),
/* 181 */
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

var _playback = __webpack_require__(11);

var _playback2 = _interopRequireDefault(_playback);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _error = __webpack_require__(182);

var _error2 = _interopRequireDefault(_error);

__webpack_require__(183);

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
/* 182 */
/***/ (function(module, exports) {

module.exports = "<canvas data-no-op-canvas></canvas>\n<p data-no-op-msg><%=message%><p>\n";

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(184);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./style.scss");

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
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "[data-no-op] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n[data-no-op] p[data-no-op-msg] {\n  position: absolute;\n  text-align: center;\n  font-size: 25px;\n  left: 0;\n  right: 0;\n  color: white;\n  padding: 10px;\n  /* center vertically */\n  top: 50%;\n  transform: translateY(-50%);\n  max-height: 100%;\n  overflow: auto; }\n\n[data-no-op] canvas[data-no-op-canvas] {\n  background-color: #777;\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


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

var _spinner = __webpack_require__(186);

var _spinner2 = _interopRequireDefault(_spinner);

__webpack_require__(187);

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
/* 186 */
/***/ (function(module, exports) {

module.exports = "<div data-bounce1></div><div data-bounce2></div><div data-bounce3></div>\n";

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
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./spinner.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./spinner.scss");

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
exports.push([module.i, ".spinner-three-bounce[data-spinner] {\n  position: absolute;\n  margin: 0 auto;\n  width: 70px;\n  text-align: center;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  /* center vertically */\n  top: 50%;\n  transform: translateY(-50%); }\n  .spinner-three-bounce[data-spinner] > div {\n    width: 18px;\n    height: 18px;\n    background-color: #FFFFFF;\n    border-radius: 100%;\n    display: inline-block;\n    animation: bouncedelay 1.4s infinite ease-in-out;\n    /* Prevent first frame from flickering when animation starts */\n    animation-fill-mode: both; }\n  .spinner-three-bounce[data-spinner] [data-bounce1] {\n    animation-delay: -0.32s; }\n  .spinner-three-bounce[data-spinner] [data-bounce2] {\n    animation-delay: -0.16s; }\n\n@keyframes bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0); }\n  40% {\n    transform: scale(1); } }\n", ""]);

// exports


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stats = __webpack_require__(190);

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _stats2.default;
module.exports = exports['default'];

/***/ }),
/* 190 */
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
/* 191 */
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

var _watermark = __webpack_require__(192);

var _watermark2 = _interopRequireDefault(_watermark);

__webpack_require__(193);

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
/* 192 */
/***/ (function(module, exports) {

module.exports = "<div class=\"clappr-watermark\" data-watermark data-watermark-<%=position %>>\n<% if(typeof imageLink !== 'undefined') { %>\n<a target=_blank href=\"<%= imageLink %>\">\n<% } %>\n<img src=\"<%= imageUrl %>\">\n<% if(typeof imageLink !== 'undefined') { %>\n</a>\n<% } %>\n</div>\n";

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(194);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./watermark.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./watermark.scss");

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
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".clappr-watermark[data-watermark] {\n  position: absolute;\n  min-width: 70px;\n  max-width: 200px;\n  width: 12%;\n  text-align: center;\n  z-index: 10; }\n\n.clappr-watermark[data-watermark] a {\n  outline: none;\n  cursor: pointer; }\n\n.clappr-watermark[data-watermark] img {\n  max-width: 100%; }\n\n.clappr-watermark[data-watermark-bottom-left] {\n  bottom: 10px;\n  left: 10px; }\n\n.clappr-watermark[data-watermark-bottom-right] {\n  bottom: 10px;\n  right: 42px; }\n\n.clappr-watermark[data-watermark-top-left] {\n  top: 10px;\n  left: 10px; }\n\n.clappr-watermark[data-watermark-top-right] {\n  top: 10px;\n  right: 37px; }\n", ""]);

// exports


/***/ }),
/* 195 */
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

var _playback = __webpack_require__(11);

var _playback2 = _interopRequireDefault(_playback);

var _error = __webpack_require__(80);

var _error2 = _interopRequireDefault(_error);

var _poster = __webpack_require__(196);

var _poster2 = _interopRequireDefault(_poster);

var _play = __webpack_require__(64);

var _play2 = _interopRequireDefault(_play);

__webpack_require__(197);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<div class=\"play-wrapper\" data-poster></div>\n";

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(198);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./poster.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./poster.scss");

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
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".player-poster[data-poster] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  background-color: #000;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%; }\n  .player-poster[data-poster].clickable {\n    cursor: pointer; }\n  .player-poster[data-poster]:hover .play-wrapper[data-poster] {\n    opacity: 1; }\n  .player-poster[data-poster] .play-wrapper[data-poster] {\n    width: 100%;\n    height: 25%;\n    margin: 0 auto;\n    opacity: 0.75;\n    transition: opacity 0.1s ease; }\n    .player-poster[data-poster] .play-wrapper[data-poster] svg {\n      height: 100%; }\n      .player-poster[data-poster] .play-wrapper[data-poster] svg path {\n        fill: #fff; }\n", ""]);

// exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _google_analytics = __webpack_require__(200);

var _google_analytics2 = _interopRequireDefault(_google_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _google_analytics2.default;
module.exports = exports['default'];

/***/ }),
/* 200 */
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

var _container_plugin = __webpack_require__(43);

var _container_plugin2 = _interopRequireDefault(_container_plugin);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(11);

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
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(86);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(1);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(5);

var _vendor = __webpack_require__(60);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _ui_core_plugin = __webpack_require__(23);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _browser = __webpack_require__(27);

var _browser2 = _interopRequireDefault(_browser);

var _mediator = __webpack_require__(61);

var _mediator2 = _interopRequireDefault(_mediator);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _playback = __webpack_require__(11);

var _playback2 = _interopRequireDefault(_playback);

var _clapprZepto = __webpack_require__(7);

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

__webpack_require__(203);

var _mediaControl = __webpack_require__(205);

var _mediaControl2 = _interopRequireDefault(_mediaControl);

var _play = __webpack_require__(64);

var _play2 = _interopRequireDefault(_play);

var _pause = __webpack_require__(94);

var _pause2 = _interopRequireDefault(_pause);

var _stop = __webpack_require__(206);

var _stop2 = _interopRequireDefault(_stop);

var _volume = __webpack_require__(207);

var _volume2 = _interopRequireDefault(_volume);

var _mute = __webpack_require__(208);

var _mute2 = _interopRequireDefault(_mute);

var _expand = __webpack_require__(209);

var _expand2 = _interopRequireDefault(_expand);

var _shrink = __webpack_require__(210);

var _shrink2 = _interopRequireDefault(_shrink);

var _hd = __webpack_require__(211);

var _hd2 = _interopRequireDefault(_hd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaControl = function (_UICorePlugin) {
  (0, _inherits3.default)(MediaControl, _UICorePlugin);
  (0, _createClass3.default)(MediaControl, [{
    key: 'name',
    get: function get() {
      return 'media_control';
    }
  }, {
    key: 'disabled',
    get: function get() {
      var playbackIsNOOP = this.container && this.container.getPlaybackType() === _playback2.default.NO_OP;
      return this.userDisabled || playbackIsNOOP;
    }
  }, {
    key: 'container',
    get: function get() {
      return this.core && this.core.activeContainer;
    }
  }, {
    key: 'playback',
    get: function get() {
      return this.core && this.core.activePlayback;
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'media-control',
        'data-media-control': ''
      };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click [data-play]': 'play',
        'click [data-pause]': 'pause',
        'click [data-playpause]': 'togglePlayPause',
        'click [data-stop]': 'stop',
        'click [data-playstop]': 'togglePlayStop',
        'click [data-fullscreen]': 'toggleFullscreen',
        'click .bar-container[data-seekbar]': 'seek',
        'click .bar-container[data-volume]': 'onVolumeClick',
        'click .drawer-icon[data-volume]': 'toggleMute',
        'mouseenter .drawer-container[data-volume]': 'showVolumeBar',
        'mouseleave .drawer-container[data-volume]': 'hideVolumeBar',
        'mousedown .bar-container[data-volume]': 'startVolumeDrag',
        'mousemove .bar-container[data-volume]': 'mousemoveOnVolumeBar',
        'mousedown .bar-scrubber[data-seekbar]': 'startSeekDrag',
        'mousemove .bar-container[data-seekbar]': 'mousemoveOnSeekBar',
        'mouseleave .bar-container[data-seekbar]': 'mouseleaveOnSeekBar',
        'mouseenter .media-control-layer[data-controls]': 'setUserKeepVisible',
        'mouseleave .media-control-layer[data-controls]': 'resetUserKeepVisible'
      };
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_mediaControl2.default);
    }
  }, {
    key: 'volume',
    get: function get() {
      return this.container && this.container.isReady ? this.container.volume : this.intendedVolume;
    }
  }, {
    key: 'muted',
    get: function get() {
      return this.volume === 0;
    }
  }]);

  function MediaControl(core) {
    (0, _classCallCheck3.default)(this, MediaControl);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UICorePlugin.call(this, core));

    _this.persistConfig = _this.options.persistConfig;
    _this.currentPositionValue = null;
    _this.currentDurationValue = null;
    _this.keepVisible = false;
    _this.fullScreenOnVideoTagSupported = null; // unknown
    _this.setInitialVolume();
    _this.settings = {
      left: ['play', 'stop', 'pause'],
      right: ['volume'],
      default: ['position', 'seekbar', 'duration']
    };
    _this.kibo = new _vendor.Kibo(_this.options.focusElement);
    _this.bindKeyEvents();

    if (_this.container) {
      if (!_clapprZepto2.default.isEmptyObject(_this.container.settings)) _this.settings = _clapprZepto2.default.extend({}, _this.container.settings);
    } else {
      _this.settings = {};
    }

    _this.userDisabled = false;
    if (_this.container && _this.container.mediaControlDisabled || _this.options.chromeless) _this.disable();

    _this.stopDragHandler = function (event) {
      return _this.stopDrag(event);
    };
    _this.updateDragHandler = function (event) {
      return _this.updateDrag(event);
    };
    (0, _clapprZepto2.default)(document).bind('mouseup', _this.stopDragHandler);
    (0, _clapprZepto2.default)(document).bind('mousemove', _this.updateDragHandler);
    return _this;
  }

  MediaControl.prototype.getExternalInterface = function getExternalInterface() {
    var _this2 = this;

    return {
      setVolume: this.setVolume,
      getVolume: function getVolume() {
        return _this2.volume;
      }
    };
  };

  MediaControl.prototype.bindEvents = function bindEvents() {
    var _this3 = this;

    this.stopListening();
    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this.onActiveContainerChanged);
    this.listenTo(this.core, _events2.default.CORE_MOUSE_MOVE, this.show);
    this.listenTo(this.core, _events2.default.CORE_MOUSE_LEAVE, function () {
      return _this3.hide(_this3.options.hideMediaControlDelay);
    });
    this.listenTo(this.core, _events2.default.CORE_FULLSCREEN, this.show);
    this.listenTo(this.core, _events2.default.CORE_OPTIONS_CHANGE, this.configure);
    _mediator2.default.on(this.options.playerId + ':' + _events2.default.PLAYER_RESIZE, this.playerResize, this);
    this.bindContainerEvents();
  };

  MediaControl.prototype.bindContainerEvents = function bindContainerEvents() {
    if (!this.container) return;
    this.listenTo(this.container, _events2.default.CONTAINER_PLAY, this.changeTogglePlay);
    this.listenTo(this.container, _events2.default.CONTAINER_PAUSE, this.changeTogglePlay);
    this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.changeTogglePlay);
    this.listenTo(this.container, _events2.default.CONTAINER_DBLCLICK, this.toggleFullscreen);
    this.listenTo(this.container, _events2.default.CONTAINER_TIMEUPDATE, this.onTimeUpdate);
    this.listenTo(this.container, _events2.default.CONTAINER_PROGRESS, this.updateProgressBar);
    this.listenTo(this.container, _events2.default.CONTAINER_SETTINGSUPDATE, this.settingsUpdate);
    this.listenTo(this.container, _events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.settingsUpdate);
    this.listenTo(this.container, _events2.default.CONTAINER_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate);
    this.listenTo(this.container, _events2.default.CONTAINER_MEDIACONTROL_DISABLE, this.disable);
    this.listenTo(this.container, _events2.default.CONTAINER_MEDIACONTROL_ENABLE, this.enable);
    this.listenTo(this.container, _events2.default.CONTAINER_ENDED, this.ended);
    this.listenTo(this.container, _events2.default.CONTAINER_VOLUME, this.onVolumeChanged);
    this.listenTo(this.container, _events2.default.CONTAINER_OPTIONS_CHANGE, this.setInitialVolume);
    if (this.container.playback.el.nodeName.toLowerCase() === 'video') {
      // wait until the metadata has loaded and then check if fullscreen on video tag is supported
      this.listenToOnce(this.container, _events2.default.CONTAINER_LOADEDMETADATA, this.onLoadedMetadataOnVideoTag);
    }
  };

  MediaControl.prototype.disable = function disable() {
    this.userDisabled = true;
    this.hide();
    this.unbindKeyEvents();
    this.$el.hide();
  };

  MediaControl.prototype.enable = function enable() {
    if (this.options.chromeless) return;
    this.userDisabled = false;
    this.bindKeyEvents();
    this.show();
  };

  MediaControl.prototype.play = function play() {
    this.container && this.container.play();
  };

  MediaControl.prototype.pause = function pause() {
    this.container && this.container.pause();
  };

  MediaControl.prototype.stop = function stop() {
    this.container && this.container.stop();
  };

  MediaControl.prototype.setInitialVolume = function setInitialVolume() {
    var initialVolume = this.persistConfig ? _utils.Config.restore('volume') : 100;
    var options = this.container && this.container.options || this.options;
    this.setVolume(options.mute ? 0 : initialVolume, true);
  };

  MediaControl.prototype.onVolumeChanged = function onVolumeChanged() {
    this.updateVolumeUI();
  };

  MediaControl.prototype.onLoadedMetadataOnVideoTag = function onLoadedMetadataOnVideoTag() {
    var video = this.playback && this.playback.el;
    // video.webkitSupportsFullscreen is deprecated but iOS appears to only use this
    // see https://github.com/clappr/clappr/issues/1127
    if (!_utils.Fullscreen.fullscreenEnabled() && video.webkitSupportsFullscreen) {
      this.fullScreenOnVideoTagSupported = true;
      this.settingsUpdate();
    }
  };

  MediaControl.prototype.updateVolumeUI = function updateVolumeUI() {
    // this will be called after a render
    if (!this.rendered) return;

    // update volume bar scrubber/fill on bar mode
    this.$volumeBarContainer.find('.bar-fill-2').css({});
    var containerWidth = this.$volumeBarContainer.width();
    var barWidth = this.$volumeBarBackground.width();
    var offset = (containerWidth - barWidth) / 2.0;
    var pos = barWidth * this.volume / 100.0 + offset;
    this.$volumeBarFill.css({ width: this.volume + '%' });
    this.$volumeBarScrubber.css({ left: pos });

    // update volume bar segments on segmented bar mode
    this.$volumeBarContainer.find('.segmented-bar-element').removeClass('fill');
    var item = Math.ceil(this.volume / 10.0);
    this.$volumeBarContainer.find('.segmented-bar-element').slice(0, item).addClass('fill');
    this.$volumeIcon.html('');
    this.$volumeIcon.removeClass('muted');
    if (!this.muted) {
      this.$volumeIcon.append(_volume2.default);
    } else {
      this.$volumeIcon.append(_mute2.default);
      this.$volumeIcon.addClass('muted');
    }
    this.applyButtonStyle(this.$volumeIcon);
  };

  MediaControl.prototype.changeTogglePlay = function changeTogglePlay() {
    this.$playPauseToggle.html('');
    this.$playStopToggle.html('');
    if (this.container && this.container.isPlaying()) {
      this.$playPauseToggle.append(_pause2.default);
      this.$playStopToggle.append(_stop2.default);
      this.trigger(_events2.default.MEDIACONTROL_PLAYING);
    } else {
      this.$playPauseToggle.append(_play2.default);
      this.$playStopToggle.append(_play2.default);
      this.trigger(_events2.default.MEDIACONTROL_NOTPLAYING);
      _browser2.default.isMobile && this.show();
    }
    this.applyButtonStyle(this.$playPauseToggle);
    this.applyButtonStyle(this.$playStopToggle);
  };

  MediaControl.prototype.mousemoveOnSeekBar = function mousemoveOnSeekBar(event) {
    if (this.settings.seekEnabled) {
      var offsetX = event.pageX - this.$seekBarContainer.offset().left - this.$seekBarHover.width() / 2;
      this.$seekBarHover.css({ left: offsetX });
    }
    this.trigger(_events2.default.MEDIACONTROL_MOUSEMOVE_SEEKBAR, event);
  };

  MediaControl.prototype.mouseleaveOnSeekBar = function mouseleaveOnSeekBar(event) {
    this.trigger(_events2.default.MEDIACONTROL_MOUSELEAVE_SEEKBAR, event);
  };

  MediaControl.prototype.onVolumeClick = function onVolumeClick(event) {
    this.setVolume(this.getVolumeFromUIEvent(event));
  };

  MediaControl.prototype.mousemoveOnVolumeBar = function mousemoveOnVolumeBar(event) {
    this.draggingVolumeBar && this.setVolume(this.getVolumeFromUIEvent(event));
  };

  MediaControl.prototype.playerResize = function playerResize(size) {
    this.$fullscreenToggle.html('');
    var icon = _utils.Fullscreen.isFullscreen() ? _shrink2.default : _expand2.default;
    this.$fullscreenToggle.append(icon);
    this.applyButtonStyle(this.$fullscreenToggle);
    this.$el.find('.media-control').length !== 0 && this.$el.removeClass('w320');
    if (size.width <= 320 || this.options.hideVolumeBar) this.$el.addClass('w320');
  };

  MediaControl.prototype.togglePlayPause = function togglePlayPause() {
    this.container.isPlaying() ? this.container.pause() : this.container.play();
    return false;
  };

  MediaControl.prototype.togglePlayStop = function togglePlayStop() {
    this.container.isPlaying() ? this.container.stop() : this.container.play();
  };

  MediaControl.prototype.startSeekDrag = function startSeekDrag(event) {
    if (!this.settings.seekEnabled) return;
    this.draggingSeekBar = true;
    this.$el.addClass('dragging');
    this.$seekBarLoaded.addClass('media-control-notransition');
    this.$seekBarPosition.addClass('media-control-notransition');
    this.$seekBarScrubber.addClass('media-control-notransition');
    event && event.preventDefault();
  };

  MediaControl.prototype.startVolumeDrag = function startVolumeDrag(event) {
    this.draggingVolumeBar = true;
    this.$el.addClass('dragging');
    event && event.preventDefault();
  };

  MediaControl.prototype.stopDrag = function stopDrag(event) {
    this.draggingSeekBar && this.seek(event);
    this.$el.removeClass('dragging');
    this.$seekBarLoaded.removeClass('media-control-notransition');
    this.$seekBarPosition.removeClass('media-control-notransition');
    this.$seekBarScrubber.removeClass('media-control-notransition dragging');
    this.draggingSeekBar = false;
    this.draggingVolumeBar = false;
  };

  MediaControl.prototype.updateDrag = function updateDrag(event) {
    if (this.draggingSeekBar) {
      event.preventDefault();
      var offsetX = event.pageX - this.$seekBarContainer.offset().left;
      var pos = offsetX / this.$seekBarContainer.width() * 100;
      pos = Math.min(100, Math.max(pos, 0));
      this.setSeekPercentage(pos);
    } else if (this.draggingVolumeBar) {
      event.preventDefault();
      this.setVolume(this.getVolumeFromUIEvent(event));
    }
  };

  MediaControl.prototype.getVolumeFromUIEvent = function getVolumeFromUIEvent(event) {
    var offsetY = event.pageX - this.$volumeBarContainer.offset().left;
    var volumeFromUI = offsetY / this.$volumeBarContainer.width() * 100;
    return volumeFromUI;
  };

  MediaControl.prototype.toggleMute = function toggleMute() {
    this.setVolume(this.muted ? 100 : 0);
  };

  MediaControl.prototype.setVolume = function setVolume(value) {
    var _this4 = this;

    var isInitialVolume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    value = Math.min(100, Math.max(value, 0));
    // this will hold the intended volume
    // it may not actually get set to this straight away
    // if the container is not ready etc
    this.intendedVolume = value;
    this.persistConfig && !isInitialVolume && _utils.Config.persist('volume', value);
    var setWhenContainerReady = function setWhenContainerReady() {
      if (_this4.container && _this4.container.isReady) {
        _this4.container.setVolume(value);
      } else {
        _this4.listenToOnce(_this4.container, _events2.default.CONTAINER_READY, function () {
          _this4.container.setVolume(value);
        });
      }
    };

    if (!this.container) this.listenToOnce(this, _events2.default.MEDIACONTROL_CONTAINERCHANGED, function () {
      return setWhenContainerReady();
    });else setWhenContainerReady();
  };

  MediaControl.prototype.toggleFullscreen = function toggleFullscreen() {
    this.trigger(_events2.default.MEDIACONTROL_FULLSCREEN, this.name);
    this.container.fullscreen();
    this.core.toggleFullscreen();
    this.resetUserKeepVisible();
  };

  MediaControl.prototype.onActiveContainerChanged = function onActiveContainerChanged() {
    this.fullScreenOnVideoTagSupported = null;
    this.bindEvents();
    _mediator2.default.off(this.options.playerId + ':' + _events2.default.PLAYER_RESIZE, this.playerResize, this);
    // set the new container to match the volume of the last one
    this.setInitialVolume();
    this.changeTogglePlay();
    this.bindContainerEvents();
    this.settingsUpdate();
    this.container && this.container.trigger(_events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.container.isDvrInUse());
    this.container && this.container.mediaControlDisabled && this.disable();
    this.trigger(_events2.default.MEDIACONTROL_CONTAINERCHANGED);
  };

  MediaControl.prototype.showVolumeBar = function showVolumeBar() {
    this.hideVolumeId && clearTimeout(this.hideVolumeId);
    this.$volumeBarContainer.removeClass('volume-bar-hide');
  };

  MediaControl.prototype.hideVolumeBar = function hideVolumeBar() {
    var _this5 = this;

    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;

    if (!this.$volumeBarContainer) return;
    if (this.draggingVolumeBar) {
      this.hideVolumeId = setTimeout(function () {
        return _this5.hideVolumeBar();
      }, timeout);
    } else {
      this.hideVolumeId && clearTimeout(this.hideVolumeId);
      this.hideVolumeId = setTimeout(function () {
        return _this5.$volumeBarContainer.addClass('volume-bar-hide');
      }, timeout);
    }
  };

  MediaControl.prototype.ended = function ended() {
    this.changeTogglePlay();
  };

  MediaControl.prototype.updateProgressBar = function updateProgressBar(progress) {
    var loadedStart = progress.start / progress.total * 100;
    var loadedEnd = progress.current / progress.total * 100;
    this.$seekBarLoaded.css({ left: loadedStart + '%', width: loadedEnd - loadedStart + '%' });
  };

  MediaControl.prototype.onTimeUpdate = function onTimeUpdate(timeProgress) {
    if (this.draggingSeekBar) return;
    // TODO why should current time ever be negative?
    var position = timeProgress.current < 0 ? timeProgress.total : timeProgress.current;

    this.currentPositionValue = position;
    this.currentDurationValue = timeProgress.total;
    this.renderSeekBar();
  };

  MediaControl.prototype.renderSeekBar = function renderSeekBar() {
    // this will be triggered as soon as these become available
    if (this.currentPositionValue === null || this.currentDurationValue === null) return;

    // default to 100%
    this.currentSeekBarPercentage = 100;
    if (this.container && (this.container.getPlaybackType() !== _playback2.default.LIVE || this.container.isDvrInUse())) this.currentSeekBarPercentage = this.currentPositionValue / this.currentDurationValue * 100;

    this.setSeekPercentage(this.currentSeekBarPercentage);

    var newPosition = (0, _utils.formatTime)(this.currentPositionValue);
    var newDuration = (0, _utils.formatTime)(this.currentDurationValue);
    if (newPosition !== this.displayedPosition) {
      this.$position.text(newPosition);
      this.displayedPosition = newPosition;
    }
    if (newDuration !== this.displayedDuration) {
      this.$duration.text(newDuration);
      this.displayedDuration = newDuration;
    }
  };

  MediaControl.prototype.seek = function seek(event) {
    if (!this.settings.seekEnabled) return;
    var offsetX = event.pageX - this.$seekBarContainer.offset().left;
    var pos = offsetX / this.$seekBarContainer.width() * 100;
    pos = Math.min(100, Math.max(pos, 0));
    this.container && this.container.seekPercentage(pos);
    this.setSeekPercentage(pos);
    return false;
  };

  MediaControl.prototype.setKeepVisible = function setKeepVisible() {
    this.keepVisible = true;
  };

  MediaControl.prototype.resetKeepVisible = function resetKeepVisible() {
    this.keepVisible = false;
  };

  MediaControl.prototype.setUserKeepVisible = function setUserKeepVisible() {
    this.userKeepVisible = true;
  };

  MediaControl.prototype.resetUserKeepVisible = function resetUserKeepVisible() {
    this.userKeepVisible = false;
  };

  MediaControl.prototype.isVisible = function isVisible() {
    return !this.$el.hasClass('media-control-hide');
  };

  MediaControl.prototype.show = function show(event) {
    var _this6 = this;

    if (this.disabled) return;

    var timeout = 2000;
    var mousePointerMoved = event && event.clientX !== this.lastMouseX && event.clientY !== this.lastMouseY;
    if (!event || mousePointerMoved || navigator.userAgent.match(/firefox/i)) {
      clearTimeout(this.hideId);
      this.$el.show();
      this.trigger(_events2.default.MEDIACONTROL_SHOW, this.name);
      this.container && this.container.trigger(_events2.default.CONTAINER_MEDIACONTROL_SHOW, this.name);
      this.$el.removeClass('media-control-hide');
      this.hideId = setTimeout(function () {
        return _this6.hide();
      }, timeout);
      if (event) {
        this.lastMouseX = event.clientX;
        this.lastMouseY = event.clientY;
      }
    }
    var showing = true;
    this.updateCursorStyle(showing);
  };

  MediaControl.prototype.hide = function hide() {
    var _this7 = this;

    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (!this.isVisible()) return;

    var timeout = delay || 2000;
    clearTimeout(this.hideId);
    if (!this.disabled && this.options.hideMediaControl === false) return;

    var hasKeepVisibleRequested = this.userKeepVisible || this.keepVisible;
    var hasDraggingAction = this.draggingSeekBar || this.draggingVolumeBar;

    if (!this.disabled && (delay || hasKeepVisibleRequested || hasDraggingAction)) {
      this.hideId = setTimeout(function () {
        return _this7.hide();
      }, timeout);
    } else {
      this.trigger(_events2.default.MEDIACONTROL_HIDE, this.name);
      this.container && this.container.trigger(_events2.default.CONTAINER_MEDIACONTROL_HIDE, this.name);
      this.$el.addClass('media-control-hide');
      this.hideVolumeBar(0);
      var showing = false;
      this.updateCursorStyle(showing);
    }
  };

  MediaControl.prototype.updateCursorStyle = function updateCursorStyle(showing) {
    if (showing) this.core.$el.removeClass('nocursor');else if (_utils.Fullscreen.isFullscreen()) this.core.$el.addClass('nocursor');
  };

  MediaControl.prototype.settingsUpdate = function settingsUpdate() {
    var newSettings = this.getSettings();
    if (newSettings && !this.fullScreenOnVideoTagSupported && !_utils.Fullscreen.fullscreenEnabled()) {
      // remove fullscreen from settings if it is present
      newSettings.default && (0, _utils.removeArrayItem)(newSettings.default, 'fullscreen');
      newSettings.left && (0, _utils.removeArrayItem)(newSettings.left, 'fullscreen');
      newSettings.right && (0, _utils.removeArrayItem)(newSettings.right, 'fullscreen');
    }
    var settingsChanged = (0, _stringify2.default)(this.settings) !== (0, _stringify2.default)(newSettings);
    if (settingsChanged) {
      this.settings = newSettings;
      this.render();
    }
  };

  MediaControl.prototype.getSettings = function getSettings() {
    return _clapprZepto2.default.extend(true, {}, this.container && this.container.settings);
  };

  MediaControl.prototype.highDefinitionUpdate = function highDefinitionUpdate(isHD) {
    this.isHD = isHD;
    var method = isHD ? 'addClass' : 'removeClass';
    this.$hdIndicator[method]('enabled');
  };

  MediaControl.prototype.createCachedElements = function createCachedElements() {
    var $layer = this.$el.find('.media-control-layer');
    this.$duration = $layer.find('.media-control-indicator[data-duration]');
    this.$fullscreenToggle = $layer.find('button.media-control-button[data-fullscreen]');
    this.$playPauseToggle = $layer.find('button.media-control-button[data-playpause]');
    this.$playStopToggle = $layer.find('button.media-control-button[data-playstop]');
    this.$position = $layer.find('.media-control-indicator[data-position]');
    this.$seekBarContainer = $layer.find('.bar-container[data-seekbar]');
    this.$seekBarHover = $layer.find('.bar-hover[data-seekbar]');
    this.$seekBarLoaded = $layer.find('.bar-fill-1[data-seekbar]');
    this.$seekBarPosition = $layer.find('.bar-fill-2[data-seekbar]');
    this.$seekBarScrubber = $layer.find('.bar-scrubber[data-seekbar]');
    this.$volumeBarContainer = $layer.find('.bar-container[data-volume]');
    this.$volumeContainer = $layer.find('.drawer-container[data-volume]');
    this.$volumeIcon = $layer.find('.drawer-icon[data-volume]');
    this.$volumeBarBackground = this.$el.find('.bar-background[data-volume]');
    this.$volumeBarFill = this.$el.find('.bar-fill-1[data-volume]');
    this.$volumeBarScrubber = this.$el.find('.bar-scrubber[data-volume]');
    this.$hdIndicator = this.$el.find('button.media-control-button[data-hd-indicator]');
    this.resetIndicators();
    this.initializeIcons();
  };

  MediaControl.prototype.resetIndicators = function resetIndicators() {
    this.displayedPosition = this.$position.text();
    this.displayedDuration = this.$duration.text();
  };

  MediaControl.prototype.initializeIcons = function initializeIcons() {
    var $layer = this.$el.find('.media-control-layer');
    $layer.find('button.media-control-button[data-play]').append(_play2.default);
    $layer.find('button.media-control-button[data-pause]').append(_pause2.default);
    $layer.find('button.media-control-button[data-stop]').append(_stop2.default);
    this.$playPauseToggle.append(_play2.default);
    this.$playStopToggle.append(_play2.default);
    this.$volumeIcon.append(_volume2.default);
    this.$fullscreenToggle.append(_expand2.default);
    this.$hdIndicator.append(_hd2.default);
  };

  MediaControl.prototype.setSeekPercentage = function setSeekPercentage(value) {
    value = Math.max(Math.min(value, 100.0), 0);
    // not changed since last update
    if (this.displayedSeekBarPercentage === value) return;

    this.displayedSeekBarPercentage = value;
    this.$seekBarPosition.removeClass('media-control-notransition');
    this.$seekBarScrubber.removeClass('media-control-notransition');
    this.$seekBarPosition.css({ width: value + '%' });
    this.$seekBarScrubber.css({ left: value + '%' });
  };

  MediaControl.prototype.seekRelative = function seekRelative(delta) {
    if (!this.settings.seekEnabled) return;

    var currentTime = this.container.getCurrentTime();
    var duration = this.container.getDuration();
    var position = Math.min(Math.max(currentTime + delta, 0), duration);
    position = Math.min(position * 100 / duration, 100);
    this.container.seekPercentage(position);
  };

  MediaControl.prototype.bindKeyAndShow = function bindKeyAndShow(key, callback) {
    var _this8 = this;

    this.kibo.down(key, function () {
      _this8.show();
      return callback();
    });
  };

  MediaControl.prototype.bindKeyEvents = function bindKeyEvents() {
    var _this9 = this;

    if (_browser2.default.isMobile || this.options.disableKeyboardShortcuts) return;

    this.unbindKeyEvents();
    this.kibo = new _vendor.Kibo(this.options.focusElement || this.options.parentElement);
    this.bindKeyAndShow('space', function () {
      return _this9.togglePlayPause();
    });
    this.bindKeyAndShow('left', function () {
      return _this9.seekRelative(-5);
    });
    this.bindKeyAndShow('right', function () {
      return _this9.seekRelative(5);
    });
    this.bindKeyAndShow('shift left', function () {
      return _this9.seekRelative(-10);
    });
    this.bindKeyAndShow('shift right', function () {
      return _this9.seekRelative(10);
    });
    this.bindKeyAndShow('shift ctrl left', function () {
      return _this9.seekRelative(-15);
    });
    this.bindKeyAndShow('shift ctrl right', function () {
      return _this9.seekRelative(15);
    });
    var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    keys.forEach(function (i) {
      _this9.bindKeyAndShow(i, function () {
        _this9.settings.seekEnabled && _this9.container && _this9.container.seekPercentage(i * 10);
      });
    });
  };

  MediaControl.prototype.unbindKeyEvents = function unbindKeyEvents() {
    if (this.kibo) {
      this.kibo.off('space');
      this.kibo.off('left');
      this.kibo.off('right');
      this.kibo.off('shift left');
      this.kibo.off('shift right');
      this.kibo.off('shift ctrl left');
      this.kibo.off('shift ctrl right');
      this.kibo.off(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
    }
  };

  MediaControl.prototype.parseColors = function parseColors() {
    if (this.options.mediacontrol) {
      this.buttonsColor = this.options.mediacontrol.buttons;
      var seekbarColor = this.options.mediacontrol.seekbar;
      this.$el.find('.bar-fill-2[data-seekbar]').css('background-color', seekbarColor);
      this.$el.find('.media-control-icon svg path').css('fill', this.buttonsColor);
      this.$el.find('.segmented-bar-element[data-volume]').css('boxShadow', 'inset 2px 0 0 ' + this.buttonsColor);
    }
  };

  MediaControl.prototype.applyButtonStyle = function applyButtonStyle(element) {
    this.buttonsColor && element && (0, _clapprZepto2.default)(element).find('svg path').css('fill', this.buttonsColor);
  };

  MediaControl.prototype.destroy = function destroy() {
    (0, _clapprZepto2.default)(document).unbind('mouseup', this.stopDragHandler);
    (0, _clapprZepto2.default)(document).unbind('mousemove', this.updateDragHandler);
    this.unbindKeyEvents();
    this.stopListening();
    _UICorePlugin.prototype.destroy.call(this);
  };

  /**
   * enables to configure the media control after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   */


  MediaControl.prototype.configure = function configure() {
    this.options.chromeless ? this.disable() : this.enable();
    this.trigger(_events2.default.MEDIACONTROL_OPTIONS_CHANGE);
  };

  MediaControl.prototype.render = function render() {
    var _this10 = this;

    var timeout = this.options.hideMediaControlDelay || 2000;
    this.settings && this.$el.html(this.template({ settings: this.settings }));
    this.createCachedElements();
    this.$playPauseToggle.addClass('paused');
    this.$playStopToggle.addClass('stopped');

    this.changeTogglePlay();

    if (this.container) {
      this.hideId = setTimeout(function () {
        return _this10.hide();
      }, timeout);
      this.disabled && this.hide();
    }

    // Video volume cannot be changed with Safari on mobile devices
    // Display mute/unmute icon only if Safari version >= 10
    if (_browser2.default.isSafari && _browser2.default.isMobile) {
      if (_browser2.default.version < 10) this.$volumeContainer.css('display', 'none');else this.$volumeBarContainer.css('display', 'none');
    }

    this.$seekBarPosition.addClass('media-control-notransition');
    this.$seekBarScrubber.addClass('media-control-notransition');

    var previousSeekPercentage = 0;
    if (this.displayedSeekBarPercentage) previousSeekPercentage = this.displayedSeekBarPercentage;

    this.displayedSeekBarPercentage = null;
    this.setSeekPercentage(previousSeekPercentage);

    process.nextTick(function () {
      !_this10.settings.seekEnabled && _this10.$seekBarContainer.addClass('seek-disabled');
      !_browser2.default.isMobile && !_this10.options.disableKeyboardShortcuts && _this10.bindKeyEvents();
      _this10.playerResize({ width: _this10.options.width, height: _this10.options.height });
      _this10.hideVolumeBar(0);
    });

    this.parseColors();
    this.highDefinitionUpdate(this.isHD);

    this.core.$el.append(this.el);

    this.rendered = true;
    this.updateVolumeUI();
    this.trigger(_events2.default.MEDIACONTROL_RENDERED);
    return this;
  };

  return MediaControl;
}(_ui_core_plugin2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * The MediaControl is responsible for displaying the Player controls.
 */

exports.default = MediaControl;


MediaControl.extend = function (properties) {
  return (0, _utils.extend)(MediaControl, properties);
};
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(204);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./media-control.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./media-control.scss");

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
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<div class=\"media-control-background\" data-background></div>\n<div class=\"media-control-layer\" data-controls>\n  <%  var renderBar = function(name) { %>\n      <div class=\"bar-container\" data-<%= name %>>\n        <div class=\"bar-background\" data-<%= name %>>\n          <div class=\"bar-fill-1\" data-<%= name %>></div>\n          <div class=\"bar-fill-2\" data-<%= name %>></div>\n          <div class=\"bar-hover\" data-<%= name %>></div>\n        </div>\n        <div class=\"bar-scrubber\" data-<%= name %>>\n          <div class=\"bar-scrubber-icon\" data-<%= name %>></div>\n        </div>\n      </div>\n  <%  }; %>\n  <%  var renderSegmentedBar = function(name, segments) {\n      segments = segments || 10; %>\n    <div class=\"bar-container\" data-<%= name %>>\n    <% for (var i = 0; i < segments; i++) { %>\n      <div class=\"segmented-bar-element\" data-<%= name %>></div>\n    <% } %>\n    </div>\n  <% }; %>\n  <% var renderDrawer = function(name, renderContent) { %>\n      <div class=\"drawer-container\" data-<%= name %>>\n        <div class=\"drawer-icon-container\" data-<%= name %>>\n          <div class=\"drawer-icon media-control-icon\" data-<%= name %>></div>\n          <span class=\"drawer-text\" data-<%= name %>></span>\n        </div>\n        <% renderContent(name); %>\n      </div>\n  <% }; %>\n  <% var renderIndicator = function(name) { %>\n      <div class=\"media-control-indicator\" data-<%= name %>></div>\n  <% }; %>\n  <% var renderButton = function(name) { %>\n    <button type=\"button\" class=\"media-control-button media-control-icon\" data-<%= name %> aria-label=\"<%= name %>\"></button>\n  <% }; %>\n  <%  var templates = {\n        bar: renderBar,\n        segmentedBar: renderSegmentedBar,\n      };\n      var render = function(settingsList) {\n        settingsList.forEach(function(setting) {\n          if(setting === \"seekbar\") {\n            renderBar(setting);\n          } else if (setting === \"volume\") {\n            renderDrawer(setting, settings.volumeBarTemplate ? templates[settings.volumeBarTemplate] : function(name) { return renderSegmentedBar(name); });\n          } else if (setting === \"duration\" || setting === \"position\") {\n            renderIndicator(setting);\n          } else {\n            renderButton(setting);\n          }\n        });\n      }; %>\n  <% if (settings.default && settings.default.length) { %>\n  <div class=\"media-control-center-panel\" data-media-control>\n    <% render(settings.default); %>\n  </div>\n  <% } %>\n  <% if (settings.left && settings.left.length) { %>\n  <div class=\"media-control-left-panel\" data-media-control>\n    <% render(settings.left); %>\n  </div>\n  <% } %>\n  <% if (settings.right && settings.right.length) { %>\n  <div class=\"media-control-right-panel\" data-media-control>\n    <% render(settings.right); %>\n  </div>\n  <% } %>\n</div>\n";

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 212 */
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

var _ui_core_plugin = __webpack_require__(23);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _playback = __webpack_require__(11);

var _playback2 = _interopRequireDefault(_playback);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _index = __webpack_require__(213);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(214);

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
/* 213 */
/***/ (function(module, exports) {

module.exports = "<div class=\"live-info\"><%= live %></div>\n<button type=\"button\" class=\"live-button\" aria-label=\"<%= backToLive %>\"><%= backToLive %></button>\n";

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(215);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./dvr_controls.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./dvr_controls.scss");

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
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".dvr-controls[data-dvr-controls] {\n  display: inline-block;\n  float: left;\n  color: #fff;\n  line-height: 32px;\n  font-size: 10px;\n  font-weight: bold;\n  margin-left: 6px; }\n  .dvr-controls[data-dvr-controls] .live-info {\n    cursor: default;\n    font-family: \"Roboto\", \"Open Sans\", Arial, sans-serif;\n    text-transform: uppercase; }\n    .dvr-controls[data-dvr-controls] .live-info:before {\n      content: \"\";\n      display: inline-block;\n      position: relative;\n      width: 7px;\n      height: 7px;\n      border-radius: 3.5px;\n      margin-right: 3.5px;\n      background-color: #ff0101; }\n    .dvr-controls[data-dvr-controls] .live-info.disabled {\n      opacity: 0.3; }\n      .dvr-controls[data-dvr-controls] .live-info.disabled:before {\n        background-color: #fff; }\n  .dvr-controls[data-dvr-controls] .live-button {\n    cursor: pointer;\n    outline: none;\n    display: none;\n    border: 0;\n    color: #fff;\n    background-color: transparent;\n    height: 32px;\n    padding: 0;\n    opacity: 0.7;\n    font-family: \"Roboto\", \"Open Sans\", Arial, sans-serif;\n    text-transform: uppercase;\n    transition: all 0.1s ease; }\n    .dvr-controls[data-dvr-controls] .live-button:before {\n      content: \"\";\n      display: inline-block;\n      position: relative;\n      width: 7px;\n      height: 7px;\n      border-radius: 3.5px;\n      margin-right: 3.5px;\n      background-color: #fff; }\n    .dvr-controls[data-dvr-controls] .live-button:hover {\n      opacity: 1;\n      text-shadow: rgba(255, 255, 255, 0.75) 0 0 5px; }\n\n.dvr .dvr-controls[data-dvr-controls] .live-info {\n  display: none; }\n\n.dvr .dvr-controls[data-dvr-controls] .live-button {\n  display: block; }\n\n.dvr.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n  background-color: #005aff; }\n\n.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n  background-color: #ff0101; }\n", ""]);

// exports


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _closed_captions = __webpack_require__(217);

var _closed_captions2 = _interopRequireDefault(_closed_captions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _closed_captions2.default;
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

var _ui_core_plugin = __webpack_require__(23);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _cc = __webpack_require__(218);

var _cc2 = _interopRequireDefault(_cc);

var _closed_captions = __webpack_require__(219);

var _closed_captions2 = _interopRequireDefault(_closed_captions);

__webpack_require__(220);

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
    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged);
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
/* 218 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"cc-button media-control-button media-control-icon\" data-cc-button aria-label=\"<%= ariaLabel %>\"></button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href=\"#\" data-cc-select=\"-1\"><%= disabledLabel %></a></li>\n  <% for (var i = 0; i < tracks.length; i++) { %>\n    <li><a href=\"#\" data-cc-select=\"<%= tracks[i].id %>\"><%= tracks[i].label %></a></li>\n  <% }; %>\n</ul>\n";

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
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./closed_captions.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./closed_captions.scss");

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
exports.push([module.i, ".cc-controls[data-cc-controls] {\n  float: right;\n  position: relative;\n  display: none; }\n  .cc-controls[data-cc-controls].available {\n    display: block; }\n  .cc-controls[data-cc-controls] .cc-button {\n    padding: 6px !important; }\n    .cc-controls[data-cc-controls] .cc-button.enabled {\n      display: block;\n      opacity: 1.0; }\n      .cc-controls[data-cc-controls] .cc-button.enabled:hover {\n        opacity: 1.0;\n        text-shadow: none; }\n  .cc-controls[data-cc-controls] > ul {\n    list-style-type: none;\n    position: absolute;\n    bottom: 25px;\n    border: 1px solid black;\n    display: none;\n    background-color: #e6e6e6; }\n  .cc-controls[data-cc-controls] li {\n    font-size: 10px; }\n    .cc-controls[data-cc-controls] li[data-title] {\n      background-color: #c3c2c2;\n      padding: 5px; }\n    .cc-controls[data-cc-controls] li a {\n      color: #444;\n      padding: 2px 10px;\n      display: block;\n      text-decoration: none; }\n      .cc-controls[data-cc-controls] li a:hover {\n        background-color: #555;\n        color: white; }\n        .cc-controls[data-cc-controls] li a:hover a {\n          color: white;\n          text-decoration: none; }\n    .cc-controls[data-cc-controls] li.current a {\n      color: #f00; }\n", ""]);

// exports


/***/ }),
/* 222 */
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

var _play = __webpack_require__(64);

var _play2 = _interopRequireDefault(_play);

var _pause = __webpack_require__(94);

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
    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged);
    this.core.activeContainer && this.containerChanged();
  };

  Favicon.prototype.containerChanged = function containerChanged() {
    this._container && this.stopListening(this._container);
    this._container = this.core.activeContainer;
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
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _seek_time = __webpack_require__(224);

var _seek_time2 = _interopRequireDefault(_seek_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _seek_time2.default;
module.exports = exports['default'];

/***/ }),
/* 224 */
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

var _ui_core_plugin = __webpack_require__(23);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(11);

var _playback2 = _interopRequireDefault(_playback);

var _seek_time = __webpack_require__(225);

var _seek_time2 = _interopRequireDefault(_seek_time);

__webpack_require__(226);

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
      if (this.firstFragDateTime) {
        e = new Date(this.firstFragDateTime);
        d = new Date(this.firstFragDateTime);
        d.setHours(0, 0, 0, 0);
        secondsSinceMidnight = (e.getTime() - d.getTime()) / 1000 + this.duration;
      } else {
        d = new Date(new Date().getTime() - this.actualLiveServerTimeDiff);
        e = new Date(d);
        secondsSinceMidnight = (e - d.setHours(0, 0, 0, 0)) / 1000;
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
/* 225 */
/***/ (function(module, exports) {

module.exports = "<span data-seek-time></span>\n<span data-duration></span>\n";

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(227);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./seek_time.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./seek_time.scss");

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
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".seek-time[data-seek-time] {\n  position: absolute;\n  white-space: nowrap;\n  height: 20px;\n  line-height: 20px;\n  font-size: 0;\n  left: -100%;\n  bottom: 55px;\n  background-color: rgba(2, 2, 2, 0.5);\n  z-index: 9999;\n  transition: opacity 0.1s ease; }\n  .seek-time[data-seek-time].hidden[data-seek-time] {\n    opacity: 0; }\n  .seek-time[data-seek-time] [data-seek-time] {\n    display: inline-block;\n    color: white;\n    font-size: 10px;\n    padding-left: 7px;\n    padding-right: 7px;\n    vertical-align: top; }\n  .seek-time[data-seek-time] [data-duration] {\n    display: inline-block;\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 10px;\n    padding-right: 7px;\n    vertical-align: top; }\n    .seek-time[data-seek-time] [data-duration]:before {\n      content: \"|\";\n      margin-right: 7px; }\n", ""]);

// exports


/***/ }),
/* 228 */
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
/* 229 */
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
    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged);
    var container = this.core.activeContainer;
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
/* 230 */
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
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error_screen = __webpack_require__(232);

var _error_screen2 = _interopRequireDefault(_error_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _error_screen2.default;
module.exports = exports['default'];

/***/ }),
/* 232 */
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

var _ui_core_plugin = __webpack_require__(23);

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(10);

var _template2 = _interopRequireDefault(_template);

var _error = __webpack_require__(30);

var _error2 = _interopRequireDefault(_error);

var _reload = __webpack_require__(233);

var _reload2 = _interopRequireDefault(_reload);

var _error_screen = __webpack_require__(234);

var _error_screen2 = _interopRequireDefault(_error_screen);

__webpack_require__(235);

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
    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this.onContainerChanged);
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
/* 233 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = "<div class=\"player-error-screen__content\" data-error-screen>\n  <% if (icon) { %>\n  <div class=\"player-error-screen__icon\" data-error-screen><%= icon %></div>\n  <% } %>\n  <div class=\"player-error-screen__title\" data-error-screen><%= title %></div>\n  <div class=\"player-error-screen__message\" data-error-screen><%= message %></div>\n  <div class=\"player-error-screen__code\" data-error-screen>Error code: <%= code %></div>\n  <div class=\"player-error-screen__reload\" data-error-screen><%= reloadIcon %></div>\n</div>\n";

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(236);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./error_screen.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/amiznikov/projects/clappr/src/base/scss!./error_screen.scss");

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
/* 236 */
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