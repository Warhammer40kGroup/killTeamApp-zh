/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = "./chunk.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(45);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {/* unused harmony export css */
/* unused harmony export keyframes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return injectGlobal; });
/* unused harmony export isStyledComponent */
/* unused harmony export consolidateStreamedStyles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* unused harmony export withTheme */
/* unused harmony export ServerStyleSheet */
/* unused harmony export StyleSheetManager */
/* unused harmony export __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stylis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_is__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_is__);








var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  false ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n* Are you trying to reuse it across renders?\n* Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n* Does this error occur on the client and is your target falsy?\n* Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n* Are you running in a client-like environment on the server?\n* Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n* Are you using a custom target that isn't mounted?\n* Does your document not have a valid head element?\n* Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "A plain React class (%s) has been interpolated into styles, probably as a component selector (https://www.styled-components.com/docs/advanced#referring-to-other-components). Only styled-component classes can be targeted in this fashion."
} : {};

/**
 * super basic version of sprintf
 */
function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c = void 0;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len2 = arguments.length, interpolations = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      interpolations[_key2 - 1] = arguments[_key2];
    }

    if (true) {
      var _this = possibleConstructorReturn(this, _Error.call(this, 'An error occurred. See https://github.com/styled-components/styled-components/blob/master/src/utils/errors.md#' + code + ' for more information. ' + (interpolations ? 'Additional arguments: ' + interpolations.join(', ') : '')));
    } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations))));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 

var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
    return __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName___default()(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
      return ruleSet;
    }

    /* Flatten ruleSet */
    if (Array.isArray(chunk)) {
      ruleSet.push.apply(ruleSet, flatten(chunk, executionContext));
      return ruleSet;
    }

    /* Handle other components */
    if (chunk.hasOwnProperty('styledComponentId')) {
      // $FlowFixMe not sure how to make this pass
      ruleSet.push('.' + chunk.styledComponentId);
      return ruleSet;
    }

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      if (executionContext) {
        var nextChunk = chunk(executionContext);
        /* Throw if a React Element was given styles */
        if (__WEBPACK_IMPORTED_MODULE_1_react___default.a.isValidElement(nextChunk)) {
          var elementName = chunk.displayName || chunk.name;
          throw new StyledComponentsError(11, elementName);
        }
        ruleSet.push.apply(ruleSet, flatten([nextChunk], executionContext));
      } else ruleSet.push(chunk);

      return ruleSet;
    }

    /* Handle objects */
    ruleSet.push(
    // $FlowFixMe have to add %checks somehow to isPlainObject
    isPlainObject(chunk) ? objToCss(chunk) : chunk.toString());

    return ruleSet;
  }, []);
};

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new __WEBPACK_IMPORTED_MODULE_2_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new __WEBPACK_IMPORTED_MODULE_2_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];
// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = __WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet___default()(function (rule) {
  parsingRules.push(rule);
});

stylis.use([parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

// 

function isStyledComponent(target) /* : %checks */{
  return (
    // $FlowFixMe TODO: flow for styledComponentId
    typeof target === 'function' && typeof target.styledComponentId === 'string'
  );
}

// 

/* This function is DEPRECATED and will be removed on the next major version release.
 * It was needed to rehydrate all style blocks prepended to chunks before React
 * tries to rehydrate its HTML stream. Since the master StyleSheet will now detect
 * the use of streamed style tags and will perform the rehydration earlier when needed
 * this function will not be needed anymore */
function consolidateStreamedStyles() {
  if (false) {
    // eslint-disable-next-line no-console
    console.warn('styled-components automatically does streaming SSR rehydration now.\n' + 'Calling consolidateStreamedStyles manually is no longer necessary and a noop now.\n' + '- Please remove the consolidateStreamedStyles call from your client.');
  }
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
};

// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 

var css = (function (styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (typeof styles === 'function' || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
});

// 


var SC_ATTR = typeof process !== 'undefined' && Object({"NODE_ENV":"production","PUBLIC_URL":""}).SC_ATTR || 'data-styled-components';
var SC_STREAM_ATTR = 'data-styled-streamed';
var CONTEXT_KEY = '__styled-components-stylesheet__';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = "production" !== 'production';

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : null;
});

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker);
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(id) {
  return document.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }
    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTagInternal = function makeServerTagInternal(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTagInternal(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeServerTag = function makeServerTag() {
  return makeServerTagInternal();
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

/* wraps a given tag so that rehydration is performed once when necessary */
var makeRehydrationTag = function makeRehydrationTag(tag, els, extracted, immediateRehydration) {
  /* rehydration function that adds all rules to the new tag */
  var rehydrate = once(function () {
    /* add all extracted components to the new tag */
    for (var i = 0, len = extracted.length; i < len; i += 1) {
      var _extracted$i = extracted[i],
          componentId = _extracted$i.componentId,
          cssFromDOM = _extracted$i.cssFromDOM;

      var cssRules = splitByRules(cssFromDOM);
      tag.insertRules(componentId, cssRules);
    }

    /* remove old HTMLStyleElements, since they have been rehydrated */
    for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
      var el = els[_i];
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  });

  if (immediateRehydration) rehydrate();

  return _extends({}, tag, {
    /* add rehydration hook to insertion methods */
    insertMarker: function insertMarker(id) {
      rehydrate();
      return tag.insertMarker(id);
    },
    insertRules: function insertRules(id, cssRules, name) {
      rehydrate();
      return tag.insertRules(id, cssRules, name);
    }
  });
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {
  /* a map from ids to tags */
  /* deferred rules for a given id */
  /* this is used for not reinjecting rules via hasNameForId() */
  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */
  /* a list of tags belonging to this StyleSheet */
  /* a tag for import rules */
  /* current capacity until a new tag must be created */
  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate() {
    if (!IS_BROWSER || this.forceServer) {
      return this;
    }

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + ']');
    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (nodesSize === 0) {
      return this;
    }

    for (var i = 0; i < nodesSize; i += 1) {
      // $FlowFixMe: We can trust that all elements in this query are style elements
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0; j < elNamesSize; j += 1) {
        var name = elNames[j];
        /* add rehydrated name to sheet to avoid readding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (extractedSize === 0) {
      return this;
    }

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);
    var rehydrationTag = makeRehydrationTag(tag, els, extracted, isStreamed);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(rehydrationTag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = rehydrationTag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by injectGlobal, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for injectGlobal to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);
    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;
    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(__WEBPACK_IMPORTED_MODULE_1_react__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck(this, StyleSheetManager);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.sheetInstance, _ref;
  };

  StyleSheetManager.prototype.componentWillMount = function componentWillMount() {
    if (this.props.sheet) {
      this.sheetInstance = this.props.sheet;
    } else if (this.props.target) {
      this.sheetInstance = new StyleSheet(this.props.target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.only(this.props.children);
  };

  return StyleSheetManager;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);
 false ? StyleSheetManager.propTypes = {
  sheet: PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]),
  target: PropTypes.shape({
    appendChild: PropTypes.func.isRequired
  })
} : void 0;

// 

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.closed = false;
  }

  ServerStyleSheet.prototype.complete = function complete() {
    if (!this.closed) {
      /* Remove closed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.closed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) {
      throw new StyledComponentsError(2);
    }

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.complete();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.complete();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        /* prepend style html to chunk */
        this.push(html + chunk);
        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.complete();
    });
    readableStream.on('error', function (err) {
      _this.complete();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

// 

function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

// 

function generateDisplayName(target) {
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

// 
/* eslint-disable max-len */
/**
 * Trying to avoid the unknown-prop errors on styled components by filtering by
 * React's attribute whitelist.
 *
 * To regenerate this regex:
 *
 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
 * 2. Run `regexgen` with the list of space-separated words below as input
 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
 *    and no false positives from partials
 * */
/*
children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onInvalid onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controlsList controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut class for autofocus allow allowUserMedia allowPaymentRequest
*/
/* eslint-enable max-len */

var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:Animation|Touch|Load|Drag)Start|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|Lo(?:stPointer|ad)|TimeUpdate|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|GotPointer|MouseDown|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|KeyPress|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|P(?:rogress|laying)|DragEnd|Key(?:Down|Up)|(?:MouseU|Dro)p|(?:Wait|Seek)ing|Scroll|Focus|Paste|Abort|Drag|Play|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|onPointerLeav|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|onPointerMov|(?:attribute|glyph)Nam|playsInlin|(?:writing|input|edge)Mod|(?:formE|e)ncTyp|(?:amplitu|mo)d|(?:xlinkTy|itemSco|keyTy|slo)p|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|l(?:ip(?:Path)?|ass)|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|auto[Ff]ocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|on(?:PointerDow|FocusI)|formActio|zoomAndPa|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveAspectRatio|ointsAt[X-Z]|anose1)|(?:(?:allowPaymentReque|(?:fontSize|length)Adju|manife)s|strokeMiterlimi|(?:(?:specularE|e)xpon|renderingInt|asc)en|(?:specularConsta|repeatCou|fontVaria)n|d(?:iffuseConsta|esce)n|baselineShif|vectorEffec|onPointerOu|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|markerStar|a(?:utoCorrec|bou)|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:gradientT|patternT|t)ransform|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|(?:markerM|onInval)i|preloa|metho|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|strokeDasharray|(?:onPointerCanc|lab)el|(?:allowFullScre|hidd)en|a(?:l(?:lowUserMedia|phabetic|t)|rabicForm|sync)|systemLanguage|(?:(?:o(?:nPointer(?:Ent|Ov)|rd)|allowReord|placehold|frameBord|paintOrd|post)e|repeatDu|d(?:efe|u))r|(?:pointerEve|keyPoi)nts|preserveAlpha|(?:strokeLineca|onPointerU|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|unicodeRange|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|(?:vI|i)deographic|mathematical|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|vAlphabetic|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|(?:xmlnsXl|valueL)ink|mediaGroup|spellCheck|(?:text|m(?:in|ax))Length|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|pathLength|(?:xlinkHr|glyphR)ef|innerHTML|xlinkShow|f(?:o(?:ntSize|rm?)|il(?:ter|l))|(?:tabInde|(?:sand|b)bo|viewBo)x|autoPlay|r(?:e(?:quired|sult|f))?|(?:(?:href|xml|src)La|kerni)ng|o(?:verflow|pen)|i(?:temRef|n2|s)|p(?:attern|oints)|unicode|d(?:efault|ata|ir)?|divisor|t(?:arget[XY]|o)|(?:stri|la)ng|(?:width|size)s|prefix|typeof|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|llow|s)|itemID|t(?:arget|ype)|m(?:edia|a(?:sk|x)|in)|value|width|x(?:mlns)?|size|href|k(?:ey)?|end|low|by|x[12]|y[12]|g[12]|i[dn]|f[xy]|[yz])$/;
/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(x|data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var validAttr = (function (name) {
  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
});

// 

function hasInInheritanceChain(child, parent) {
  var target = child;

  while (target) {
    target = Object.getPrototypeOf(target);

    if (target && target === parent) {
      return true;
    }
  }

  return false;
}

// 
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

var _contextShape, _ThemeProvider$contex;

// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
  getTheme: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  subscribe: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  unsubscribe: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
});

var contextShape = (_contextShape = {}, _contextShape[CHANNEL] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, _contextShape[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _contextShape);

var warnChannelDeprecated = void 0;
if (false) {
  warnChannelDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.warn('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
  });
}

var isFunction = function isFunction(test) {
  return typeof test === 'function';
};

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;

        if (_this2.broadcast !== undefined) {
          _this2.publish(_this2.props.theme);
        }
      });
    }

    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      if (false) {
        warnChannelDeprecated();
      }

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.publish(nextProps.theme);
    }
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;

    if (isFunction(theme)) {
      var mergedTheme = theme(this.outerTheme);

      if (false) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.publish = function publish(theme) {
    this.broadcast.publish(this.getTheme(theme));
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.only(this.props.children);
  };

  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ThemeProvider.childContextTypes = contextShape;
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

var _babelHelpers$extends;

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var modifiedContextShape = _extends({}, contextShape, (_babelHelpers$extends = {}, _babelHelpers$extends[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(ServerStyleSheet)]), _babelHelpers$extends));

var identifiers = {};

/* We depend on components having unique IDs */
var generateId = function generateId(ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);

  return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
};

var warnExtendDeprecated = function warnExtendDeprecated() {};
if (false) {
  warnExtendDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.warn('Warning: The "extend" API will be removed in the upcoming v4.0 release. Use styled(StyledComponent) instead. You can find more information here: https://github.com/styled-components/styled-components/issues/1546');
  });
}

// $FlowFixMe

var BaseStyledComponent = function (_Component) {
  inherits(BaseStyledComponent, _Component);

  function BaseStyledComponent() {
    var _temp, _this, _ret;

    classCallCheck(this, BaseStyledComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
      theme: null,
      generatedClassName: ''
    }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
  }

  BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
    if (this.unsubscribeId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
    }
  };

  BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
    var attrs = this.constructor.attrs;

    var context = _extends({}, props, { theme: theme });
    if (attrs === undefined) {
      return context;
    }

    this.attrs = Object.keys(attrs).reduce(function (acc, key) {
      var attr = attrs[key];

      // eslint-disable-next-line no-param-reassign
      acc[key] = typeof attr === 'function' && !hasInInheritanceChain(attr, __WEBPACK_IMPORTED_MODULE_1_react__["Component"]) ? attr(context) : attr;
      return acc;
    }, {});

    return _extends({}, context, this.attrs);
  };

  BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _constructor = this.constructor,
        attrs = _constructor.attrs,
        componentStyle = _constructor.componentStyle,
        warnTooManyClasses = _constructor.warnTooManyClasses;

    var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.master;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names
    if (componentStyle.isStatic && attrs === undefined) {
      return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
    } else {
      var executionContext = this.buildExecutionContext(theme, props);
      var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

      if (false) {
        warnTooManyClasses(className);
      }

      return className;
    }
  };

  BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var componentStyle = this.constructor.componentStyle;

    var styledContext = this.context[CHANNEL_NEXT];

    // If this is a statically-styled component, we don't need to the theme
    // to generate or build styles.
    if (componentStyle.isStatic) {
      var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
      this.setState({ generatedClassName: generatedClassName });
      // If there is a theme in the context, subscribe to the event emitter. This
      // is necessary due to pure components blocking context updates, this circumvents
      // that by updating when an event is emitted
    } else if (styledContext !== undefined) {
      var subscribe = styledContext.subscribe;

      this.unsubscribeId = subscribe(function (nextTheme) {
        // This will be called once immediately
        var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);

        var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

        _this2.setState({ theme: theme, generatedClassName: generatedClassName });
      });
    } else {
      // eslint-disable-next-line react/prop-types
      var theme = this.props.theme || EMPTY_OBJECT;
      var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
      this.setState({ theme: theme, generatedClassName: _generatedClassName });
    }
  };

  BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    // If this is a statically-styled component, we don't need to listen to
    // props changes to update styles
    var componentStyle = this.constructor.componentStyle;

    if (componentStyle.isStatic) {
      return;
    }

    this.setState(function (prevState) {
      var theme = determineTheme(nextProps, prevState.theme, _this3.constructor.defaultProps);
      var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

      return { theme: theme, generatedClassName: generatedClassName };
    });
  };

  BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribeFromContext();
  };

  BaseStyledComponent.prototype.render = function render() {
    // eslint-disable-next-line react/prop-types
    var innerRef = this.props.innerRef;
    var generatedClassName = this.state.generatedClassName;
    var _constructor2 = this.constructor,
        styledComponentId = _constructor2.styledComponentId,
        target = _constructor2.target;


    var isTargetTag = isTag(target);

    var className = [
    // eslint-disable-next-line react/prop-types
    this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

    var baseProps = _extends({}, this.attrs, {
      className: className
    });

    if (isStyledComponent(target)) {
      baseProps.innerRef = innerRef;
    } else {
      baseProps.ref = innerRef;
    }

    var propsForElement = baseProps;
    var key = void 0;

    for (key in this.props) {
      // Don't pass through non HTML tags through to HTML elements
      // always omit innerRef
      if (key !== 'innerRef' && key !== 'className' && (!isTargetTag || validAttr(key))) {
        propsForElement[key] = key === 'style' && key in this.attrs ? _extends({}, this.attrs[key], this.props[key]) : this.props[key];
      }
    }

    return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(target, propsForElement);
  };

  return BaseStyledComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _options$isClass = options.isClass,
        isClass = _options$isClass === undefined ? !isTag(target) : _options$isClass,
        _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;


    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId']);


        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);


          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          warnExtendDeprecated();

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.contextTypes = modifiedContextShape;
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.target = target;


    if (false) {
      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    if (isClass) {
      __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(StyledComponent, target, {
        // all SC-specific things should not be hoisted
        attrs: true,
        componentStyle: true,
        displayName: true,
        extend: true,
        styledComponentId: true,
        target: true,
        warnTooManyClasses: true,
        withComponent: true
      });
    }

    return StyledComponent;
  };

  return createStyledComponent;
});

// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(str) {
  var l = str.length | 0,
      h = l | 0,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;

  return h >>> 0;
}

// 

var areStylesCacheable = IS_BROWSER;

var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0, len = rules.length; i < len; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      if (typeof attrs[key] === 'function') {
        return false;
      }
    }
  }

  return true;
};

var isHMREnabled = typeof module !== 'undefined' && module.hot && "production" !== 'production';

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
  /* combines hashStr (murmurhash) and nameGenerator for convenience */
  var generateRuleHash = function generateRuleHash(str) {
    return nameGenerator(murmurhash(str));
  };

  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
      this.componentId = componentId;

      if (!StyleSheet.master.hasId(componentId)) {
        var placeholder =  false ? ['.' + componentId + ' {}'] : [];

        StyleSheet.master.deferredInject(componentId, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          componentId = this.componentId,
          lastClassName = this.lastClassName;

      if (areStylesCacheable && isStatic && lastClassName !== undefined && styleSheet.hasNameForId(componentId, lastClassName)) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var name = generateRuleHash(this.componentId + flatCSS.join(''));

      if (!styleSheet.hasNameForId(componentId, name)) {
        styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name), name);
      }

      this.lastClassName = name;
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return generateRuleHash(str);
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
});

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var _styled = (function (styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
});

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = (function (nameGenerator, stringifyRules, css) {
  return function () {
    var styleSheet = StyleSheet.master;
    var rules = css.apply(undefined, arguments);
    var name = nameGenerator(murmurhash(replaceWhitespace(JSON.stringify(rules))));
    var id = 'sc-keyframes-' + name;

    if (!styleSheet.hasNameForId(id, name)) {
      styleSheet.inject(id, stringifyRules(rules, name, '@keyframes'), name);
    }

    return name;
  };
});

// 

var _injectGlobal = (function (stringifyRules, css) {
  var injectGlobal = function injectGlobal() {
    var styleSheet = StyleSheet.master;
    var rules = css.apply(undefined, arguments);
    var hash = murmurhash(JSON.stringify(rules));
    var id = 'sc-global-' + hash;

    if (!styleSheet.hasId(id)) {
      styleSheet.inject(id, stringifyRules(rules));
    }
  };

  return injectGlobal;
});

// 

var _constructWithOptions = (function (css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

    if (!Object(__WEBPACK_IMPORTED_MODULE_6_react_is__["isValidElementType"])(tag)) {
      throw new StyledComponentsError(1, String(tag));
    }

    /* This is callable directly as a template function */
    // $FlowFixMe: Not typed to avoid destructuring arguments
    var templateFunction = function templateFunction() {
      return componentConstructor(tag, options, css.apply(undefined, arguments));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || EMPTY_OBJECT, attrs)
      }));
    };

    return templateFunction;
  };

  return constructWithOptions;
});

// 

var withTheme = (function (Component$$1) {
  var isStatelessFunctionalComponent = typeof Component$$1 === 'function' &&
  // $FlowFixMe TODO: flow for prototype
  !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

  // NOTE: We can't pass a ref to a stateless functional component
  var shouldSetInnerRef = isStyledComponent(Component$$1) || isStatelessFunctionalComponent;

  var WithTheme = function (_React$Component) {
    inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = EMPTY_OBJECT, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && "production" !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      var props = _extends({
        theme: this.state.theme
      }, this.props);

      if (!shouldSetInnerRef) {
        props.ref = props.innerRef;
        delete props.innerRef;
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component$$1, props);
    };

    return WithTheme;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

  WithTheme.contextTypes = contextShape;
  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';
  WithTheme.styledComponentId = 'withTheme';


  return __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(WithTheme, Component$$1);
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if (false) {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if (false) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);

/* harmony default export */ __webpack_exports__["b"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(35), __webpack_require__(50)(module)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var theme={maxWidth:"30em",fontBody:"'minon-pro', serif",fontHeader:"'gunplay', sans-serif",orange:"#e1501e",lightOrange:"#fdccbc",offWhite:"#f4f3f1",grey:"#a2a2a2",lightGrey:"#ddd",darkGrey:"#5e5e5e"};/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(2);
var _templateObject=_taggedTemplateLiteral(["\n    padding: 0;\n    margin: 0;\n    display: inline-block;\n    line-height: 1.7em;\n    align-self: center;\n    flex-grow: 1;\n\n    font-family: ",";\n    font-size: 0.7em;\n    font-weight: normal;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n"],["\n    padding: 0;\n    margin: 0;\n    display: inline-block;\n    line-height: 1.7em;\n    align-self: center;\n    flex-grow: 1;\n\n    font-family: ",";\n    font-size: 0.7em;\n    font-weight: normal;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledLabel=__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].span(_templateObject,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].fontHeader);/* harmony default export */ __webpack_exports__["a"] = (StyledLabel);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factions_astartes__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factions_militarum__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__factions_adeptus_mechanicus__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factions_harlequins__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__factions_grey_knights__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__factions_heretics__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__factions_death_guard__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__factions_thousand_sons__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__factions_asuryani__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__factions_death_watch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__factions_drukhari__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__factions_necrons__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__factions_orks__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__factions_tau__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__factions_tyranids__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__factions_genestealer_cults__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__factions_gellerpox__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__factions_starstriders__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__factions_servants_of_the_abyss__ = __webpack_require__(93);
var factions=[{id:"astartes",name:"星际战士",data:__WEBPACK_IMPORTED_MODULE_0__factions_astartes__["a" /* default */],naming:"nonStandard"},{id:"deathWatch",name:"Deathwatch",data:__WEBPACK_IMPORTED_MODULE_9__factions_death_watch__["a" /* default */],naming:"nonStandard"},{id:"greyKnights",name:"灰骑士",data:__WEBPACK_IMPORTED_MODULE_4__factions_grey_knights__["a" /* default */],naming:"standard"},{id:"militarum",name:"Astra Militarum",data:__WEBPACK_IMPORTED_MODULE_1__factions_militarum__["a" /* default */],naming:"nonStandard"},{id:"adMech",name:"Adeptus Mechanicus",data:__WEBPACK_IMPORTED_MODULE_2__factions_adeptus_mechanicus__["a" /* default */],naming:"standard"},{id:"heretics",name:"Heretic Astartes",data:__WEBPACK_IMPORTED_MODULE_5__factions_heretics__["a" /* default */],naming:"nonStandard"},{id:"deathGuard",name:"Death Guard",data:__WEBPACK_IMPORTED_MODULE_6__factions_death_guard__["a" /* default */],naming:"standard"},{id:"thousandSons",name:"Thousand Sons",data:__WEBPACK_IMPORTED_MODULE_7__factions_thousand_sons__["a" /* default */],naming:"standard"},{id:"asuryani",name:"Asuryani",data:__WEBPACK_IMPORTED_MODULE_8__factions_asuryani__["a" /* default */],naming:"nonStandard"},{id:"drukhari",name:"Drukhari",data:__WEBPACK_IMPORTED_MODULE_10__factions_drukhari__["a" /* default */],naming:"nonStandard"},{id:"harlequins",name:"Harlequins",data:__WEBPACK_IMPORTED_MODULE_3__factions_harlequins__["a" /* default */],naming:"standard"},{id:"necrons",name:"太空死灵",data:__WEBPACK_IMPORTED_MODULE_11__factions_necrons__["a" /* default */],naming:"standard"},{id:"orks",name:"兽人",data:__WEBPACK_IMPORTED_MODULE_12__factions_orks__["a" /* default */],naming:"standard"},{id:"tau",name:"钛帝国",data:__WEBPACK_IMPORTED_MODULE_13__factions_tau__["a" /* default */],naming:"standard"},{id:"tyranids",name:"泰伦虫族",data:__WEBPACK_IMPORTED_MODULE_14__factions_tyranids__["a" /* default */],naming:"standard"},{id:"gsc",name:"Genestealer Cults",data:__WEBPACK_IMPORTED_MODULE_15__factions_genestealer_cults__["a" /* default */],naming:"standard"},{id:"gellerpox",name:"Gellerpox Infected",data:__WEBPACK_IMPORTED_MODULE_16__factions_gellerpox__["a" /* default */],naming:false},{id:"starstriders",name:"Elucidian Starstriders",data:__WEBPACK_IMPORTED_MODULE_17__factions_starstriders__["a" /* default */],naming:false},{id:"servantsAbyss",name:"Servants of the Abyss",data:__WEBPACK_IMPORTED_MODULE_18__factions_servants_of_the_abyss__["a" /* default */],naming:false}];/* harmony default export */ __webpack_exports__["a"] = (factions);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var CheckboxIcon=function CheckboxIcon(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg",{fill:props.fill?props.fill:"#000",id:"ktcr_checkbox",viewBox:"0 0 444.85 341.13"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect",{x:"78.65",y:"124.98",transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -40.2729 243.9045)",width:"391.26",height:"91.17"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect",{x:"14.24",y:"139.37",transform:"matrix(0.7071 0.7071 -0.7071 0.7071 152.9493 0.6632)",width:"122.87",height:"91.17"}));};/* harmony default export */ __webpack_exports__["a"] = (CheckboxIcon);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commanders_astartes__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commanders_militarum__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commanders_adeptus_mechanicus__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commanders_harlequins__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commanders_grey_knights__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commanders_heretics__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commanders_death_guard__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__commanders_thousand_sons__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__commanders_asuryani__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commanders_death_watch__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commanders_drukhari__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commanders_necrons__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__commanders_orks__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__commanders_tau__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__commanders_tyranids__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__commanders_genestealer_cults__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__commanders_gellerpox__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__commanders_starstriders__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__commanders_servants_of_the_abyss__ = __webpack_require__(127);
var commanders={traits:[{name:"钢铁意志",cost:5},{name:"坚忍英雄",cost:10},{name:"归于命运",cost:10},{name:"战术大师",cost:15},{name:"多面手",cost:15,restriction:"Level 4"},{name:"专家大师",cost:30,restriction:"Level 4"}],psychicPowers:["Iron Arm","Forewarning","Fire Shield","Psychic Shriek","Enfeeble","Misfortune"],specialisms:[{name:"Ferocity",abilities:[{level:1,names:["Counter-attack"]},{level:2,names:["Bloodlust","Ignore Pain"]},{level:3,names:["Fearsome War Cry","Berserker","Death Frenzy","Indignant Rampage"]}]},{name:"Fortitude",abilities:[{level:1,names:["Hardy Constitution"]},{level:2,names:["Indomitable","Hard to Kill"]},{level:3,names:["Feel No Pain","Unyielding Will","True Grit","Iron Constitution"]}]},{name:"领队",abilities:[{level:1,names:["Symbol of Courage"]},{level:2,names:["Aura of Command","Inspiring"]},{level:3,names:["Master of War","Heroic","Grim Determination","Tenacious"]}]},{name:"后勤",abilities:[{level:1,names:["Extra Armour"]},{level:2,names:["Quartermaster","Armed to the Teeth"]},{level:3,names:["Scavenger","Master of Sabotage","Master Artisan","Rangefinder Scope"]}]},{name:"Melee",abilities:[{level:1,names:["Expert Fighter"]},{level:2,names:["Warrior Born","Swift Parry"]},{level:3,names:["Deullist","Precision Strike","Impenetrable Defence","Lightning Reflexes"]}]},{name:"Psyker",abilities:[{level:1,names:["Student of the Arcane"]},{level:2,names:["Psychic Onslaught","Warp Drain"]},{level:3,names:["Psionic Potency","Omniscience","Protective Wards","Witchbane"]}]},{name:"射击",abilities:[{level:1,names:["Shootist"]},{level:2,names:["Trick-shooter","Pistoleer"]},{level:3,names:["Targeting Weak","Precision Strike","Hip Shooter","Long Bomb"]}]},{name:"潜行",abilities:[{level:1,names:["Steady Aim"]},{level:2,names:["Skulker","Climber"]},{level:3,names:["One with the Shadows","Lurker","Prowler","Sure-footed"]}]},{name:"战略",abilities:[{level:1,names:["Resourceful"]},{level:2,names:["Advisor","Feigned Retreat"]},{level:3,names:["Counter-strategist","Master Tactician","Famed Commander","Mission-critical Mastermind"]}]},{name:"Strength",abilities:[{level:1,names:["Muscular"]},{level:2,names:["Juggernaut","Brutal Strikes"]},{level:3,names:["Bull Charge","Sunderer","Devastating Power","Crusher"]}]},{name:"Combat",abilities:[{level:1,names:["Expert Fighter"]},{level:2,names:["Warrior Adept","Deadly Counter"]},{level:3,names:["Deathblow","Combat Master","Killer Instinct","Bloodlust"]}]},{name:"爆破兵",abilities:[{level:1,names:["Breacher"]},{level:2,names:["Pyromaniac","Grenadier"]},{level:3,names:["Saboteur","Sapper","Siegemaster","Ammo Hound"]}]},{name:"老兵",abilities:[{level:1,names:["Grizzled"]},{level:2,names:["Practised","Seen It All"]},{level:3,names:["Survivor","One-man Army","Battle Scarred","Nerves of Steel"]}]},{name:"Zealot",abilities:[{level:1,names:["Frenzied"]},{level:2,names:["Exultant","Flagellant"]},{level:3,names:["Puritan","Rousing","Fanatical","Strength of Spirit"]}]}],factions:[{id:"astartes",name:"星际战士",data:__WEBPACK_IMPORTED_MODULE_0__commanders_astartes__["a" /* default */]},{id:"deathWatch",name:"死亡守望",data:__WEBPACK_IMPORTED_MODULE_9__commanders_death_watch__["a" /* default */]},{id:"greyKnights",name:"灰骑士",data:__WEBPACK_IMPORTED_MODULE_4__commanders_grey_knights__["a" /* default */]},{id:"militarum",name:"Astra Militarum",data:__WEBPACK_IMPORTED_MODULE_1__commanders_militarum__["a" /* default */]},{id:"adMech",name:"Adeptus Mechanicus",data:__WEBPACK_IMPORTED_MODULE_2__commanders_adeptus_mechanicus__["a" /* default */]},{id:"heretics",name:"Heretic Astartes",data:__WEBPACK_IMPORTED_MODULE_5__commanders_heretics__["a" /* default */]},{id:"deathGuard",name:"死亡守卫",data:__WEBPACK_IMPORTED_MODULE_6__commanders_death_guard__["a" /* default */]},{id:"thousandSons",name:"Thousand Sons",data:__WEBPACK_IMPORTED_MODULE_7__commanders_thousand_sons__["a" /* default */]},{id:"asuryani",name:"Asuryani",data:__WEBPACK_IMPORTED_MODULE_8__commanders_asuryani__["a" /* default */]},{id:"drukhari",name:"Drukhari",data:__WEBPACK_IMPORTED_MODULE_10__commanders_drukhari__["a" /* default */]},{id:"harlequins",name:"Harlequins",data:__WEBPACK_IMPORTED_MODULE_3__commanders_harlequins__["a" /* default */]},{id:"necrons",name:"Necrons",data:__WEBPACK_IMPORTED_MODULE_11__commanders_necrons__["a" /* default */]},{id:"orks",name:"Orks",data:__WEBPACK_IMPORTED_MODULE_12__commanders_orks__["a" /* default */]},{id:"tau",name:"钛帝国",data:__WEBPACK_IMPORTED_MODULE_13__commanders_tau__["a" /* default */]},{id:"tyranids",name:"Tyranids",data:__WEBPACK_IMPORTED_MODULE_14__commanders_tyranids__["a" /* default */]},{id:"gsc",name:"Genestealer Cults",data:__WEBPACK_IMPORTED_MODULE_15__commanders_genestealer_cults__["a" /* default */]},{id:"gellerpox",name:"Gellerpox Infected",data:__WEBPACK_IMPORTED_MODULE_16__commanders_gellerpox__["a" /* default */]},{id:"starstriders",name:"Elucidian Starstriders",data:__WEBPACK_IMPORTED_MODULE_17__commanders_starstriders__["a" /* default */]},{id:"servantsAbyss",name:"Servants of the Abyss",data:__WEBPACK_IMPORTED_MODULE_18__commanders_servants_of_the_abyss__["a" /* default */]}]};/* harmony default export */ __webpack_exports__["a"] = (commanders);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    display: block;\n\n    > span {\n        display: block;\n        position: relative;\n    }\n\n    select {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: transparent;\n        border: 0;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n    }\n\n    div {\n        width: 100%;\n        padding: 0.2em 1.3em 0.4em 0;\n        color: ",";\n        font-size: 0.9em;\n\n        span {\n            position: relative;\n            padding-right: 1.2em;\n\n            &::after {\n                content: \"\";\n                position: absolute;\n                margin-top: -0.3em;\n                top: 50%;\n                right: 0;\n                z-index: 1;\n                width: 0;\n                height: 0;\n                border-left: 0.4em solid transparent;\n                border-right: 0.4em solid transparent;\n                border-top: 0.6em solid ",";\n                transition: all 0.2s ease;\n            }\n        }\n    }\n"],["\n    display: block;\n\n    > span {\n        display: block;\n        position: relative;\n    }\n\n    select {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: transparent;\n        border: 0;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n    }\n\n    div {\n        width: 100%;\n        padding: 0.2em 1.3em 0.4em 0;\n        color: ",";\n        font-size: 0.9em;\n\n        span {\n            position: relative;\n            padding-right: 1.2em;\n\n            &::after {\n                content: \"\";\n                position: absolute;\n                margin-top: -0.3em;\n                top: 50%;\n                right: 0;\n                z-index: 1;\n                width: 0;\n                height: 0;\n                border-left: 0.4em solid transparent;\n                border-right: 0.4em solid transparent;\n                border-top: 0.6em solid ",";\n                transition: all 0.2s ease;\n            }\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var SelectInputWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var SelectInput=function(_Component){_inherits(SelectInput,_Component);function SelectInput(){_classCallCheck(this,SelectInput);return _possibleConstructorReturn(this,(SelectInput.__proto__||Object.getPrototypeOf(SelectInput)).apply(this,arguments));}_createClass(SelectInput,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SelectInputWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select",{id:this.props.id,onChange:this.props.handleChange,defaultValue:"default"},this.props.defaultOption&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{value:"default",disabled:this.props.defaultOptionDisabled},this.props.defaultOption),this.props.options.map(function(option){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:option,value:option},option);})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.selectedOption?this.props.selectedOption:this.props.defaultOption))));}}]);return SelectInput;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SelectInput);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(55)();
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(66);

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = specialismChange;
/* harmony export (immutable) */ __webpack_exports__["a"] = abilitiesChange;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_specialisms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_commanders__ = __webpack_require__(6);
function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function specialismChange(event,props){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"units";var specialismsData=__WEBPACK_IMPORTED_MODULE_0__data_specialisms__["a" /* default */];var targetValue=event.target.value;var targetId=event.target.id;if(type==="commanders"){specialismsData=__WEBPACK_IMPORTED_MODULE_1__data_commanders__["a" /* default */].specialisms;}if(event.target.name==="isSpecialist"){targetValue=event.target.checked;targetId=event.target.name;}// Get the current units in appState and adjust the correct unit
var newAppStateData=props.appState[type].map(function(unit){if(unit.id===props.card.id){unit[targetId]=targetValue;if(targetId==="isSpecialist"&&targetValue===false){unit.abilities=[];unit.specialism=null;unit.level=1;}if(targetId==="specialism"){unit.abilities=[];var levelOneAbility=specialismsData.filter(function(specialism){return specialism.name===targetValue;})[0].abilities[0].names[0];unit.abilities.push(levelOneAbility);}props.prepareCostForState(unit);}return unit;});props.setAppState(_defineProperty({},type,newAppStateData));}function abilitiesChange(_ref,props){var abilityId=_ref.target.id;var _props$card=props.card,cardId=_props$card.id,abilities=_props$card.abilities,type=props.type;var newData=props.appState[type].map(function(unit){if(unit.id===cardId){if(abilities.includes(abilityId)){unit.abilities=abilities.filter(function(id){return id!==abilityId;});}else{unit.abilities=[].concat(_toConsumableArray(abilities),[abilityId]);}}return unit;});props.setAppState(_defineProperty({},type,newData));}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = calculateSquadInTeamTotal;
/* harmony export (immutable) */ __webpack_exports__["a"] = calculatePointsInTeamTotal;
/* unused harmony export calculateSquadTotal */
/* harmony export (immutable) */ __webpack_exports__["b"] = calculatePointsTotal;
function inTeam(state){var units=state.units.filter(function(unit){return unit.inKillTeam;});var commanders=state.commanders.filter(function(commander){return commander.inKillTeam;});return units.concat(commanders);}// IN TEAM TOTALS
function calculateSquadInTeamTotal(state){return inTeam(state).length;}function calculatePointsInTeamTotal(state){var unitsAndCommanders=inTeam(state);var points=0;unitsAndCommanders.map(function(obj){points+=obj.cost;return obj;});return points;}// ROSTER TOTALS
function calculateSquadTotal(state){return state.units.length+state.commanders.length;}function calculatePointsTotal(state){var unitsAndCommanders=state.units.concat(state.commanders);var points=0;unitsAndCommanders.map(function(obj){points+=obj.cost;return obj;});return points;}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(42);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(46);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(65);

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    font-family: ",";\n    text-align: center;\n    text-transform: uppercase;\n"],["\n    font-family: ",";\n    text-align: center;\n    text-transform: uppercase;\n"]),_templateObject2=_taggedTemplateLiteral(["\n    font-size: 1.6em;\n"],["\n    font-size: 1.6em;\n"]),_templateObject3=_taggedTemplateLiteral(["\n    font-family: ",";\n    font-size: 1.4em;\n    font-style: italic;\n"],["\n    font-family: ",";\n    font-size: 1.4em;\n    font-style: italic;\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var SectionHeaderWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader);var SectionHeaderText=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span(_templateObject2);var SectionHeaderCount=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span(_templateObject3,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontBody);var SectionHeader=function(_Component){_inherits(SectionHeader,_Component);function SectionHeader(){_classCallCheck(this,SectionHeader);return _possibleConstructorReturn(this,(SectionHeader.__proto__||Object.getPrototypeOf(SectionHeader)).apply(this,arguments));}_createClass(SectionHeader,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionHeaderWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionHeaderText,null,this.props.text),this.props.count?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionHeaderCount,null,"(",this.props.count,")"):null);}}]);return SectionHeader;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SectionHeader);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SectionHeader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UnitSelectInput__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CommanderSelectInput__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__UnitCard__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommanderCard__ = __webpack_require__(140);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    text-align: center;\n    padding: 1.5em 0.8em;\n\n    .helper-text {\n        font-family: ",";\n        text-transform: uppercase;\n        font-size: 1.3em;\n    }\n"],["\n    text-align: center;\n    padding: 1.5em 0.8em;\n\n    .helper-text {\n        font-family: ",";\n        text-transform: uppercase;\n        font-size: 1.3em;\n    }\n"]),_templateObject2=_taggedTemplateLiteral(["\n    max-width: ",";\n    margin: 1em auto 0;\n\n    &:first-child {\n        margin-top: 0;\n    }\n\n    text-align: left;\n"],["\n    max-width: ",";\n    margin: 1em auto 0;\n\n    &:first-child {\n        margin-top: 0;\n    }\n\n    text-align: left;\n"]),_templateObject3=_taggedTemplateLiteral(["\n    margin-bottom: 1em;\n"],["\n    margin-bottom: 1em;\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var TeamWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader);var SectionWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].maxWidth);var CardsWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject3);var Team=function(_Component){_inherits(Team,_Component);function Team(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Team);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Team.__proto__||Object.getPrototypeOf(Team)).call.apply(_ref,[this].concat(args))),_this),_this.showSecondSelector=function(){return _this.props.appState.units.filter(function(_ref2){var inKillTeam=_ref2.inKillTeam;return inKillTeam;}).length>0||_this.props.appState.units.length>0&&_this.props.appState.rosterIsActive;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Team,[{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TeamWrap,null,this.props.appState.selectedFaction?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SectionHeader__["a" /* default */],{text:"指挥官"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CommanderSelectInput__["a" /* default */],{type:"commanders",appState:this.props.appState,setAppState:this.props.setAppState}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardsWrap,null,this.props.appState.commanders.filter(function(card){return _this2.props.appState.rosterIsActive?card:card.inKillTeam;}).map(function(card){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__CommanderCard__["a" /* default */],{key:card.id,card:card,appState:_this2.props.appState,setAppState:_this2.props.setAppState});}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SectionHeader__["a" /* default */],{text:"小队"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__UnitSelectInput__["a" /* default */],{type:"units",appState:this.props.appState,setAppState:this.props.setAppState}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardsWrap,null,this.props.appState.units.filter(function(card){return _this2.props.appState.rosterIsActive?card:card.inKillTeam;}).map(function(card){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__UnitCard__["a" /* default */],{key:card.id,card:card,appState:_this2.props.appState,setAppState:_this2.props.setAppState});})),this.showSecondSelector()&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__UnitSelectInput__["a" /* default */],{type:"units",appState:this.props.appState,setAppState:this.props.setAppState}))):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"helper-text"},"选择要开始的阵营"));}}]);return Team;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Team);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(2);
var _templateObject=_taggedTemplateLiteral(["\n    margin-top: 0.5em;\n    text-align: center;\n\n    > span {\n        display: inline-block;\n        position: relative;\n    }\n\n    select {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: transparent;\n        border: 0;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n\n        :hover {\n            + div {\n                color: white;\n\n                &::before {\n                    height: 100%;\n                }\n\n                &::after {\n                    border-top: 0.8em solid white;\n                }\n            }\n        }\n    }\n\n    div {\n        border: solid 2px ",";\n        padding: 0.4em 2.8em 0.3em 0.8em;\n        font-family: ",";\n        color: ",";\n        font-size: 0.8em;\n        text-transform: uppercase;\n        transition: all 0.2s ease;\n\n        &::before {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 0;\n            display: block;\n            z-index: 0;\n            background: black;\n            transition: all 0.2s ease;\n        }\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            margin-top: -0.4em;\n            top: 50%;\n            right: 0.8em;\n            z-index: 1;\n            width: 0;\n            height: 0;\n            border-left: 0.6em solid transparent;\n            border-right: 0.6em solid transparent;\n            border-top: 0.8em solid ",";\n            transition: all 0.2s ease;\n        }\n\n        span {\n            position: relative;\n        }\n    }\n"],["\n    margin-top: 0.5em;\n    text-align: center;\n\n    > span {\n        display: inline-block;\n        position: relative;\n    }\n\n    select {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: transparent;\n        border: 0;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n\n        :hover {\n            + div {\n                color: white;\n\n                &::before {\n                    height: 100%;\n                }\n\n                &::after {\n                    border-top: 0.8em solid white;\n                }\n            }\n        }\n    }\n\n    div {\n        border: solid 2px ",";\n        padding: 0.4em 2.8em 0.3em 0.8em;\n        font-family: ",";\n        color: ",";\n        font-size: 0.8em;\n        text-transform: uppercase;\n        transition: all 0.2s ease;\n\n        &::before {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 0;\n            display: block;\n            z-index: 0;\n            background: black;\n            transition: all 0.2s ease;\n        }\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            margin-top: -0.4em;\n            top: 50%;\n            right: 0.8em;\n            z-index: 1;\n            width: 0;\n            height: 0;\n            border-left: 0.6em solid transparent;\n            border-right: 0.6em solid transparent;\n            border-top: 0.8em solid ",";\n            transition: all 0.2s ease;\n        }\n\n        span {\n            position: relative;\n        }\n    }\n"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledSelectInput=__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].orange);/* harmony default export */ __webpack_exports__["a"] = (StyledSelectInput);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(106);
var bytesToUuid = __webpack_require__(107);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(2);
var _templateObject=_taggedTemplateLiteral(["\n    margin: 1em 0 0;\n    font-family: ",";\n\n    header,\n    footer {\n        padding: 0.3em 0.4em 0.2em;\n\n        background: ",";\n        border: solid 2px ",";\n\n        font-family: ",";\n        font-size: 1em;\n        letter-spacing: 0.04em;\n        text-transform: uppercase;\n    }\n\n    header {\n        .card-header__cost {\n            float: right;\n        }\n    }\n\n    footer {\n        text-align: right;\n    }\n"],["\n    margin: 1em 0 0;\n    font-family: ",";\n\n    header,\n    footer {\n        padding: 0.3em 0.4em 0.2em;\n\n        background: ",";\n        border: solid 2px ",";\n\n        font-family: ",";\n        font-size: 1em;\n        letter-spacing: 0.04em;\n        text-transform: uppercase;\n    }\n\n    header {\n        .card-header__cost {\n            float: right;\n        }\n    }\n\n    footer {\n        text-align: right;\n    }\n"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledCard=__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].fontBody,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].fontHeader);/* harmony default export */ __webpack_exports__["a"] = (StyledCard);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_specialisms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_commanders__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_cardChanges__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AbilitiesRow__ = __webpack_require__(131);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    @media (min-width: 450px) {\n        margin-bottom: 1em;\n    }\n\n    .spAb__level-inner {\n        display: flex;\n        text-align: center;\n        position: relative;\n\n        > div {\n            position: relative;\n            z-index: 999;\n        }\n    }\n\n    .spAb__level {\n        position: relative;\n\n        &.spAb__level--1,\n        &.spAb__level--2 {\n            &::before,\n            &::after {\n                content: \"\";\n                position: absolute;\n                left: 50%;\n                margin-left: -1;\n                display: block;\n                width: 2px;\n                height: 200%;\n                background: ",";\n                transform-origin: 1px 100%;\n            }\n        }\n\n        &.spAb__level--1 {\n            &::before,\n            &::after {\n                bottom: 0.5em;\n                transform: rotate(-110deg);\n            }\n\n            &::after {\n                bottom: 0.5em;\n                transform: rotate(110deg);\n            }\n\n            @media (min-width: 450px) {\n                &::before {\n                    height: 250%;\n                    transform: rotate(-102deg);\n                }\n\n                &::after {\n                    height: 250%;\n                    transform: rotate(102deg);\n                }\n\n                span {\n                    width: 30%;\n                    margin: 0.3em 10%;\n                }\n            }\n        }\n\n        &.spAb__level--2 {\n            &::before {\n                top: 1em;\n                left: 25%;\n            }\n\n            &::after {\n                top: 1em;\n                left: 75%;\n            }\n\n            @media (min-width: 450px) {\n                &::before {\n                    top: auto;\n                    bottom: 0.5em;\n                    transform: rotate(-110deg);\n                }\n\n                &::after {\n                    top: auto;\n                    bottom: 0.5em;\n                    transform: rotate(110deg);\n                }\n            }\n        }\n\n        &.spAb__level--2 {\n            .spAb__level-inner {\n                @media (min-width: 450px) {\n                    &::before,\n                    &::after {\n                        content: \"\";\n                        position: absolute;\n                        bottom: 0.5em;\n                        margin-left: -1;\n                        display: block;\n                        width: 2px;\n                        height: 200%;\n                        background: ",";\n                        transform-origin: 1px 100%;\n                    }\n\n                    &::before {\n                        left: 25%;\n                        transform: rotate(110deg);\n                    }\n\n                    &::after {\n                        left: 75%;\n                        transform: rotate(-110deg);\n                    }\n                }\n            }\n\n            @media (min-width: 450px) {\n                span {\n                    width: 40%;\n                    margin: 0.3em 5%;\n                }\n            }\n        }\n\n        &.spAb__selected-level--1 {\n            &.spAb__level--1 {\n                &::before,\n                &::after {\n                    display: none;\n                }\n            }\n        }\n\n        &.spAb__selected-level--2 {\n            &.spAb__level--2,\n            .spAb__level-inner {\n                &::before,\n                &::after {\n                    display: none;\n                }\n            }\n        }\n    }\n"],["\n    @media (min-width: 450px) {\n        margin-bottom: 1em;\n    }\n\n    .spAb__level-inner {\n        display: flex;\n        text-align: center;\n        position: relative;\n\n        > div {\n            position: relative;\n            z-index: 999;\n        }\n    }\n\n    .spAb__level {\n        position: relative;\n\n        &.spAb__level--1,\n        &.spAb__level--2 {\n            &::before,\n            &::after {\n                content: \"\";\n                position: absolute;\n                left: 50%;\n                margin-left: -1;\n                display: block;\n                width: 2px;\n                height: 200%;\n                background: ",";\n                transform-origin: 1px 100%;\n            }\n        }\n\n        &.spAb__level--1 {\n            &::before,\n            &::after {\n                bottom: 0.5em;\n                transform: rotate(-110deg);\n            }\n\n            &::after {\n                bottom: 0.5em;\n                transform: rotate(110deg);\n            }\n\n            @media (min-width: 450px) {\n                &::before {\n                    height: 250%;\n                    transform: rotate(-102deg);\n                }\n\n                &::after {\n                    height: 250%;\n                    transform: rotate(102deg);\n                }\n\n                span {\n                    width: 30%;\n                    margin: 0.3em 10%;\n                }\n            }\n        }\n\n        &.spAb__level--2 {\n            &::before {\n                top: 1em;\n                left: 25%;\n            }\n\n            &::after {\n                top: 1em;\n                left: 75%;\n            }\n\n            @media (min-width: 450px) {\n                &::before {\n                    top: auto;\n                    bottom: 0.5em;\n                    transform: rotate(-110deg);\n                }\n\n                &::after {\n                    top: auto;\n                    bottom: 0.5em;\n                    transform: rotate(110deg);\n                }\n            }\n        }\n\n        &.spAb__level--2 {\n            .spAb__level-inner {\n                @media (min-width: 450px) {\n                    &::before,\n                    &::after {\n                        content: \"\";\n                        position: absolute;\n                        bottom: 0.5em;\n                        margin-left: -1;\n                        display: block;\n                        width: 2px;\n                        height: 200%;\n                        background: ",";\n                        transform-origin: 1px 100%;\n                    }\n\n                    &::before {\n                        left: 25%;\n                        transform: rotate(110deg);\n                    }\n\n                    &::after {\n                        left: 75%;\n                        transform: rotate(-110deg);\n                    }\n                }\n            }\n\n            @media (min-width: 450px) {\n                span {\n                    width: 40%;\n                    margin: 0.3em 5%;\n                }\n            }\n        }\n\n        &.spAb__selected-level--1 {\n            &.spAb__level--1 {\n                &::before,\n                &::after {\n                    display: none;\n                }\n            }\n        }\n\n        &.spAb__selected-level--2 {\n            &.spAb__level--2,\n            .spAb__level-inner {\n                &::before,\n                &::after {\n                    display: none;\n                }\n            }\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var SpecialismAbilitiesWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].grey,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].grey);var SpecialismAbilities=function(_Component){_inherits(SpecialismAbilities,_Component);function SpecialismAbilities(){var _ref;var _temp,_this,_ret;_classCallCheck(this,SpecialismAbilities);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SpecialismAbilities.__proto__||Object.getPrototypeOf(SpecialismAbilities)).call.apply(_ref,[this].concat(args))),_this),_this.handleChange=function(event){Object(__WEBPACK_IMPORTED_MODULE_5__helpers_cardChanges__["a" /* abilitiesChange */])(event,_this.props);},_this.getSpecialisms=function(){if(_this.props.type==="commanders"){return __WEBPACK_IMPORTED_MODULE_4__data_commanders__["a" /* default */].specialisms;}return __WEBPACK_IMPORTED_MODULE_3__data_specialisms__["a" /* default */];},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SpecialismAbilities,[{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialismAbilitiesWrap,null,this.getSpecialisms().filter(function(specialismData){return specialismData.name===_this2.props.specialism;})[0].abilities.map(function(specialism){if(_this2.props.level>=specialism.level){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"spAb__level spAb__level--"+specialism.level+" spAb__selected-level--"+_this2.props.card.level,key:specialism.level},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"spAb__level-inner"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__AbilitiesRow__["a" /* default */],{specialism:specialism,handleChange:_this2.handleChange,card:_this2.props.card})));}return null;}));}}]);return SpecialismAbilities;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SpecialismAbilities);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var specialisms=[{name:"领队",abilities:[{level:1,names:["Resourceful"]},{level:2,names:["Bold","Inspiring"]},{level:3,names:["Paragon","Tyrant","Tactician","Mentor"]}]},{name:"Combat",abilities:[{level:1,names:["Expert Fighter"]},{level:2,names:["Warrior Adept","Deadly Counter"]},{level:3,names:["Deathblow","Combat Master","Killer Instinct","Bloodlust"]}]},{name:"通讯员",abilities:[{level:1,names:["Scanner"]},{level:2,names:["Expert","Static Screech"]},{level:3,names:["Vox Ghost","Command Relay","Triangulator","Vox Hacker"]}]},{name:"爆破兵",abilities:[{level:1,names:["Breacher"]},{level:2,names:["Pyromaniac","Grenadier"]},{level:3,names:["Saboteur","Sapper","Siegemaster","Ammo Hound"]}]},{name:"Heavy",abilities:[{level:1,names:["Relentless"]},{level:2,names:["Suppressor","Extra Armour"]},{level:3,names:["Devastator","Rigorous","Indomitable","Heavily Muscled"]}]},{name:"医护员",abilities:[{level:1,names:["Reassuring"]},{level:2,names:["Field Medic","Anatomist"]},{level:3,names:["Trauma Specialist","Triage Expert","Interrogator","Toxin Synthesiser"]}]},{name:"斥候",abilities:[{level:1,names:["Swift"]},{level:2,names:["Forward Scout","Pathfinder"]},{level:3,names:["Skirmisher","Vanguard","Observer","Explorer"]}]},{name:"狙击手",abilities:[{level:1,names:["Marksman"]},{level:2,names:["Assassin","Sharpshooter"]},{level:3,names:["Deadeye","Armour Piercing","Mobile","Eagle-eye"]}]},{name:"老兵",abilities:[{level:1,names:["Grizzled"]},{level:2,names:["Practised","Seen It All"]},{level:3,names:["Survivor","One-man Army","Battle Scarred","Nerves of Steel"]}]},{name:"Zealot",abilities:[{level:1,names:["Frenzied"]},{level:2,names:["Exultant","Flagellant"]},{level:3,names:["Puritan","Rousing","Fanatical","Strength of Spirit"]}]}];/* harmony default export */ __webpack_exports__["a"] = (specialisms);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    display: flex;\n    font-size: 0.9em;\n    margin-top: 0.4em;\n"],["\n    display: flex;\n    font-size: 0.9em;\n    margin-top: 0.4em;\n"]),_templateObject2=_taggedTemplateLiteral(["\n    display: inline-block;\n    position: relative;\n    width: 25%;\n\n    input {\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n    }\n\n    label {\n        display: inline-block;\n        width: 90%;\n        background: white;\n        border: solid 2px black;\n        text-align: center;\n        font-family: ",";\n    }\n\n    input:checked + label {\n        border-color: ",";\n        color: ",";\n    }\n"],["\n    display: inline-block;\n    position: relative;\n    width: 25%;\n\n    input {\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n    }\n\n    label {\n        display: inline-block;\n        width: 90%;\n        background: white;\n        border: solid 2px black;\n        text-align: center;\n        font-family: ",";\n    }\n\n    input:checked + label {\n        border-color: ",";\n        color: ",";\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var SpecialistLevelWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);var SpecialistLevel=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span(_templateObject2,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var SpecialismLevel=function(_Component){_inherits(SpecialismLevel,_Component);function SpecialismLevel(){var _ref;var _temp,_this,_ret;_classCallCheck(this,SpecialismLevel);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SpecialismLevel.__proto__||Object.getPrototypeOf(SpecialismLevel)).call.apply(_ref,[this].concat(args))),_this),_this.changeLevel=function(event){_this.props.handleChange({target:{id:"level",value:event.target.value}});},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SpecialismLevel,[{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialistLevelWrap,null,Array(4).fill(1).map(function(el,i){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialistLevel,{key:_this2.props.card.id+"_"+(i+1)},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{onChange:_this2.changeLevel,type:"radio",name:"level_"+(i+1)+"_"+_this2.props.card.id,value:i+1,id:"level_"+(i+1)+"_"+_this2.props.card.id,checked:parseInt(_this2.props.card.level,10)===i+1}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:"level_"+(i+1)+"_"+_this2.props.card.id},i+1));}));}}]);return SpecialismLevel;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SpecialismLevel);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(2);
var _templateObject=_taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    margin-top: 0.4em;\n\n    > span {\n        position: relative;\n    }\n\n    .specialist-type__text {\n        font-size: 0.9em;\n    }\n\n    .specialist-type__select {\n        flex-grow: 2;\n        select {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            top: 0;\n            left: 0;\n            background: transparent;\n            border: 0;\n            opacity: 0;\n            cursor: pointer;\n            z-index: 2;\n        }\n    }\n\n    .specialist-type__display {\n        width: 100%;\n        color: ",";\n        font-size: 0.9em;\n\n        span {\n            position: relative;\n            padding: 0 1.2em 0 0.5em;\n\n            &::after {\n                content: \"\";\n                position: absolute;\n                margin-top: -0.3em;\n                top: 50%;\n                right: 0;\n                z-index: 1;\n                width: 0;\n                height: 0;\n                border-left: 0.4em solid transparent;\n                border-right: 0.4em solid transparent;\n                border-top: 0.6em solid ",";\n                transition: all 0.2s ease;\n            }\n        }\n    }\n"],["\n    width: 100%;\n    display: flex;\n    margin-top: 0.4em;\n\n    > span {\n        position: relative;\n    }\n\n    .specialist-type__text {\n        font-size: 0.9em;\n    }\n\n    .specialist-type__select {\n        flex-grow: 2;\n        select {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            top: 0;\n            left: 0;\n            background: transparent;\n            border: 0;\n            opacity: 0;\n            cursor: pointer;\n            z-index: 2;\n        }\n    }\n\n    .specialist-type__display {\n        width: 100%;\n        color: ",";\n        font-size: 0.9em;\n\n        span {\n            position: relative;\n            padding: 0 1.2em 0 0.5em;\n\n            &::after {\n                content: \"\";\n                position: absolute;\n                margin-top: -0.3em;\n                top: 50%;\n                right: 0;\n                z-index: 1;\n                width: 0;\n                height: 0;\n                border-left: 0.4em solid transparent;\n                border-right: 0.4em solid transparent;\n                border-top: 0.6em solid ",";\n                transition: all 0.2s ease;\n            }\n        }\n    }\n"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledSpecialismType=__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].span(_templateObject,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].orange);/* harmony default export */ __webpack_exports__["a"] = (StyledSpecialismType);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons_RemoveIcon__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons_CheckboxIcon__ = __webpack_require__(5);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    display: flex;\n    justify-content: flex-end;\n    background: grey;\n\n    button {\n        width: 1.7em;\n        height: 1.7em;\n        background: none;\n        border: none;\n        position: relative;\n        padding: 0;\n\n        svg {\n            width: 100%;\n            height: 100%;\n            display: block;\n            fill: black;\n            transition: all 0.3s ease;\n            position: absolute;\n            top: 0;\n            left: 0;\n        }\n\n        &:hover {\n            svg {\n                fill: white;\n            }\n        }\n    }\n"],["\n    display: flex;\n    justify-content: flex-end;\n    background: grey;\n\n    button {\n        width: 1.7em;\n        height: 1.7em;\n        background: none;\n        border: none;\n        position: relative;\n        padding: 0;\n\n        svg {\n            width: 100%;\n            height: 100%;\n            display: block;\n            fill: black;\n            transition: all 0.3s ease;\n            position: absolute;\n            top: 0;\n            left: 0;\n        }\n\n        &:hover {\n            svg {\n                fill: white;\n            }\n        }\n    }\n"]),_templateObject2=_taggedTemplateLiteral(["\n    display: flex;\n\n    span {\n        float: left;\n        margin-right: 0.5em;\n        display: block;\n    }\n\n    span:last-child {\n        width: 1.4em;\n        height: 1.4em;\n        border: solid 2px black;\n        position: relative;\n\n        svg {\n            position: absolute;\n            top: 10%;\n            left: 10%;\n\n            width: 80%;\n            height: 80%;\n        }\n    }\n\n    input {\n        display: none;\n    }\n\n    label {\n        line-height: 1.5em;\n        cursor: pointer;\n    }\n"],["\n    display: flex;\n\n    span {\n        float: left;\n        margin-right: 0.5em;\n        display: block;\n    }\n\n    span:last-child {\n        width: 1.4em;\n        height: 1.4em;\n        border: solid 2px black;\n        position: relative;\n\n        svg {\n            position: absolute;\n            top: 10%;\n            left: 10%;\n\n            width: 80%;\n            height: 80%;\n        }\n    }\n\n    input {\n        display: none;\n    }\n\n    label {\n        line-height: 1.5em;\n        cursor: pointer;\n    }\n"]),_templateObject3=_taggedTemplateLiteral(["\n    margin-left: 0.5em;\n"],["\n    margin-left: 0.5em;\n"]);function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var FooterWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].footer(_templateObject);var InKillTeamWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span(_templateObject2);var RemoveIconWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject3);var Footer=function(_Component){_inherits(Footer,_Component);function Footer(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Footer);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Footer.__proto__||Object.getPrototypeOf(Footer)).call.apply(_ref,[this].concat(args))),_this),_this.removeUnit=function(){var unitType="units";if(_this.props.unitType==="commanders"){unitType="commanders";}var newAppStateUnits=_this.props.appState[unitType].filter(function(unit){return unit.id!==_this.props.card.id;});_this.props.setAppState(_defineProperty({},unitType,newAppStateUnits));},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Footer,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InKillTeamWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{onChange:this.props.handleChange,defaultChecked:this.props.card.inKillTeam,name:"inKillTeam",id:"inKillTeam_"+this.props.card.id,type:"checkbox"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:"inKillTeam_"+this.props.card.id},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,"In Kill Team")," ",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.card.inKillTeam?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__icons_CheckboxIcon__["a" /* default */],null):null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RemoveIconWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:this.removeUnit},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icons_RemoveIcon__["a" /* default */],null))));}}]);return Footer;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    display: block;\n    font-family: ",";\n\n    > span {\n        position: relative;\n        z-index: 1;\n        display: inline-block;\n        padding: 0.3em 0.6em;\n        background: black;\n        text-transform: uppercase;\n        color: white;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            right: -1.85em;\n            z-index: 0;\n            width: 0;\n            height: 0;\n            border-left: 1.85em solid transparent;\n            border-right: 1.85em solid transparent;\n            border-bottom: 1.85em solid black;\n        }\n\n        span {\n            position: relative;\n            z-index: 2;\n        }\n    }\n"],["\n    display: block;\n    font-family: ",";\n\n    > span {\n        position: relative;\n        z-index: 1;\n        display: inline-block;\n        padding: 0.3em 0.6em;\n        background: black;\n        text-transform: uppercase;\n        color: white;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            right: -1.85em;\n            z-index: 0;\n            width: 0;\n            height: 0;\n            border-left: 1.85em solid transparent;\n            border-right: 1.85em solid transparent;\n            border-bottom: 1.85em solid black;\n        }\n\n        span {\n            position: relative;\n            z-index: 2;\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var SpecialismHeaderWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader);var SpecialismHeader=function(_Component){_inherits(SpecialismHeader,_Component);function SpecialismHeader(){_classCallCheck(this,SpecialismHeader);return _possibleConstructorReturn(this,(SpecialismHeader.__proto__||Object.getPrototypeOf(SpecialismHeader)).apply(this,arguments));}_createClass(SpecialismHeader,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialismHeaderWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.specialism," ",this.props.specialism==="领队"?null:"专家")));}}]);return SpecialismHeader;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SpecialismHeader);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    display: inline;\n\n    .wargear__inner {\n        display: block;\n        position: relative;\n    }\n\n    select {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: transparent;\n        border: 0;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n    }\n"],["\n    display: inline;\n\n    .wargear__inner {\n        display: block;\n        position: relative;\n    }\n\n    select {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: transparent;\n        border: 0;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n    }\n"]),_templateObject2=_taggedTemplateLiteral(["\n    width: 100%;\n    padding: 0.2em 0 0.2em 0;\n    color: ",";\n    font-size: 0.9em;\n\n    .gear__selected-option {\n        position: relative;\n        padding-right: 1.2em;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            margin-top: -0.35em;\n            top: 50%;\n            right: 0;\n            z-index: 1;\n            width: 0;\n            height: 0;\n            border-left: 0.4em solid transparent;\n            border-right: 0.4em solid transparent;\n            border-top: 0.6em solid ",";\n            transition: all 0.2s ease;\n        }\n    }\n\n    .gear__selected-cost {\n        float: right;\n        font-family: ",";\n    }\n"],["\n    width: 100%;\n    padding: 0.2em 0 0.2em 0;\n    color: ",";\n    font-size: 0.9em;\n\n    .gear__selected-option {\n        position: relative;\n        padding-right: 1.2em;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            margin-top: -0.35em;\n            top: 50%;\n            right: 0;\n            z-index: 1;\n            width: 0;\n            height: 0;\n            border-left: 0.4em solid transparent;\n            border-right: 0.4em solid transparent;\n            border-top: 0.6em solid ",";\n            transition: all 0.2s ease;\n        }\n    }\n\n    .gear__selected-cost {\n        float: right;\n        font-family: ",";\n    }\n"]),_templateObject3=_taggedTemplateLiteral(["\n    display: inline-block;\n    padding-right: 0.5em;\n    font-size: 0.9em;\n"],["\n    display: inline-block;\n    padding-right: 0.5em;\n    font-size: 0.9em;\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var WargearWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);var WargearDisplay=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader);var SingleUpgrade=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject3);var Wargear=function(_Component){_inherits(Wargear,_Component);function Wargear(){_classCallCheck(this,Wargear);return _possibleConstructorReturn(this,(Wargear.__proto__||Object.getPrototypeOf(Wargear)).apply(this,arguments));}_createClass(Wargear,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WargearWrap,null,this.props.gear.upgrades?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"wargear__inner"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select",{key:this.props.gear.name,name:this.props.gear.name,id:"wargear_"+this.props.gear.name,onChange:this.props.changeWargear},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:this.props.gear.name},this.props.gear.name),this.props.gear.upgrades&&this.props.gear.upgrades.map(function(upgrade){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:upgrade.name},upgrade.name);})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WargearDisplay,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"gear__selected-option"},this.props.selectedGear.selectedOption),this.props.selectedGear.cost>0&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"gear__selected-cost"},"+",this.props.selectedGear.cost))):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SingleUpgrade,null,this.props.gear.name,this.props.separator&&", "));}}]);return Wargear;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Wargear);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_StyledLabel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_StyledOtherWargear__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons_CheckboxIcon__ = __webpack_require__(5);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral([""],[""]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var OtherWargearWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);var OtherWargear=function(_Component){_inherits(OtherWargear,_Component);function OtherWargear(){_classCallCheck(this,OtherWargear);return _possibleConstructorReturn(this,(OtherWargear.__proto__||Object.getPrototypeOf(OtherWargear)).apply(this,arguments));}_createClass(OtherWargear,[{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OtherWargearWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_StyledLabel__["a" /* default */],null,"其他装备:"),this.props.modelData.otherWargear.map(function(otherGear){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledOtherWargear__["a" /* default */],{key:otherGear.name},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{onChange:_this2.props.changeOtherWargear,checked:otherGear.checked,id:otherGear.name,type:"checkbox"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:otherGear.name},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"otherWargear__checkbox"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__icons_CheckboxIcon__["a" /* default */],{fill:__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"otherWargear__name"},otherGear.name),otherGear.cost&&_this2.props.card.otherWargear.find(function(gear){return gear.name===otherGear.name;}).checked&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"cardRow__cost"},"+",otherGear.cost)));}));}}]);return OtherWargear;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (OtherWargear);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectInput__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_RandomiseIcon__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_NameRandomiser__ = __webpack_require__(136);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    padding: 0.2em 0 0.4em;\n\n    .names__input {\n        display: flex;\n        width: 100%;\n        background: white;\n        border: solid 1px ",";\n\n        input {\n            flex-grow: 2;\n            padding: 0 0.4em;\n            margin: 0;\n            border: none;\n            border-radius: 0;\n            line-height: 1.7em;\n        }\n\n        button {\n            background: none;\n            border-radius: 0;\n            border: none;\n            position: relative;\n            display: block;\n            height: 1.7em;\n            width: 1.5em;\n            margin: 0 0.4em;\n\n            svg {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n            }\n\n            &:focus {\n                outline: none;\n            }\n        }\n    }\n\n    .names__randomiser {\n        position: relative;\n        z-index: 2;\n        margin-top: 0.6em;\n        padding: 0.3em 0.2em 0.3em 0.5em;\n        background: ",";\n        display: flex;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: -0.5em;\n            right: 0;\n            z-index: 1;\n            width: 0;\n            height: 0;\n            border-left: 0.8em solid transparent;\n            border-right: 0.8em solid transparent;\n            border-bottom: 0.8em solid ",";\n            transition: all 0.2s ease;\n        }\n\n        > div {\n            flex-grow: 2;\n            div {\n                color: ",";\n            }\n\n            span::after {\n                border-top-color: ",";\n            }\n        }\n\n        .names__randomiser-button {\n            border: solid 2px black;\n            background: none;\n            font-family: ",";\n            text-transform: uppercase;\n            color: black;\n            margin-right: 0.3em;\n\n            &:focus {\n                outline: none;\n            }\n        }\n\n        .names__randomiser-close {\n            border: 0;\n            background: transparent;\n            width: 1.6em;\n            font-size: 1em;\n            position: relative;\n\n            &:focus {\n                outline: none;\n            }\n\n            span {\n                position: absolute;\n                top: 0;\n                left: 0;\n                display: block;\n                width: 100%;\n                margin-top: -0.2em;\n                font-family: ",";\n                font-size: 2em;\n            }\n        }\n    }\n"],["\n    padding: 0.2em 0 0.4em;\n\n    .names__input {\n        display: flex;\n        width: 100%;\n        background: white;\n        border: solid 1px ",";\n\n        input {\n            flex-grow: 2;\n            padding: 0 0.4em;\n            margin: 0;\n            border: none;\n            border-radius: 0;\n            line-height: 1.7em;\n        }\n\n        button {\n            background: none;\n            border-radius: 0;\n            border: none;\n            position: relative;\n            display: block;\n            height: 1.7em;\n            width: 1.5em;\n            margin: 0 0.4em;\n\n            svg {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n            }\n\n            &:focus {\n                outline: none;\n            }\n        }\n    }\n\n    .names__randomiser {\n        position: relative;\n        z-index: 2;\n        margin-top: 0.6em;\n        padding: 0.3em 0.2em 0.3em 0.5em;\n        background: ",";\n        display: flex;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: -0.5em;\n            right: 0;\n            z-index: 1;\n            width: 0;\n            height: 0;\n            border-left: 0.8em solid transparent;\n            border-right: 0.8em solid transparent;\n            border-bottom: 0.8em solid ",";\n            transition: all 0.2s ease;\n        }\n\n        > div {\n            flex-grow: 2;\n            div {\n                color: ",";\n            }\n\n            span::after {\n                border-top-color: ",";\n            }\n        }\n\n        .names__randomiser-button {\n            border: solid 2px black;\n            background: none;\n            font-family: ",";\n            text-transform: uppercase;\n            color: black;\n            margin-right: 0.3em;\n\n            &:focus {\n                outline: none;\n            }\n        }\n\n        .names__randomiser-close {\n            border: 0;\n            background: transparent;\n            width: 1.6em;\n            font-size: 1em;\n            position: relative;\n\n            &:focus {\n                outline: none;\n            }\n\n            span {\n                position: absolute;\n                top: 0;\n                left: 0;\n                display: block;\n                width: 100%;\n                margin-top: -0.2em;\n                font-family: ",";\n                font-size: 2em;\n            }\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var NamesWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].lightGrey,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].lightGrey,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader);var Names=function(_Component){_inherits(Names,_Component);function Names(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Names);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Names.__proto__||Object.getPrototypeOf(Names)).call.apply(_ref,[this].concat(args))),_this),_this.randomiseName=function(){var newNames=Object(__WEBPACK_IMPORTED_MODULE_5__helpers_NameRandomiser__["c" /* prepareRandomName */])(_this.state.names);_this.props.handleChange({target:{id:"moniker",value:newNames.first+" "+newNames.second}});},_this.changeNamePool=function(event){_this.setState({selectedPool:event.target.value,names:_this.factionData.data.names[event.target.value]});},_this.openRandomiser=function(){_this.setState({randomiserOpen:true});},_this.closeRandomiser=function(){_this.setState({randomiserOpen:false});},_this.handleRandomButtonClick=function(){if(_this.state.factionNaming==="standard"){_this.randomiseName();}else if(_this.state.factionNaming==="nonStandard"){_this.openRandomiser();}},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Names,[{key:"componentWillMount",value:function componentWillMount(){this.factionData=Object(__WEBPACK_IMPORTED_MODULE_5__helpers_NameRandomiser__["a" /* prepareFactionData */])(this.props.card);this.setState(Object(__WEBPACK_IMPORTED_MODULE_5__helpers_NameRandomiser__["b" /* prepareNamesState */])(this.factionData));}},{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NamesWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"names__input"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{name:"moniker",id:"moniker",type:"text",placeholder:"名字...",value:this.props.card.moniker?this.props.card.moniker:"",onChange:this.props.handleChange}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:this.handleRandomButtonClick},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icons_RandomiseIcon__["a" /* default */],{fill:__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].darkGrey}))),this.state.randomiserOpen&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"names__randomiser"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SelectInput__["a" /* default */],{id:"namingPool",handleChange:this.changeNamePool,options:this.state.namingPool,selectedOption:this.state.selectedPool}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{className:"names__randomiser-button",onClick:this.randomiseName},"Randomise"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{className:"names__randomiser-close",onClick:this.closeRandomiser},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,"\xD7"))));}}]);return Names;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Names);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(2);
var _templateObject=_taggedTemplateLiteral(["\n    background: ",";\n\n    .campaign__toggle {\n        border-radius: 0;\n        border: 0;\n        background: transparent;\n        width: 100%;\n        font-family: ",";\n        text-transform: uppercase;\n        font-size: 0.7em;\n        text-align: left;\n        color: ",";\n        padding: 0;\n\n        &:focus {\n            outline: 0;\n        }\n    }\n"],["\n    background: ",";\n\n    .campaign__toggle {\n        border-radius: 0;\n        border: 0;\n        background: transparent;\n        width: 100%;\n        font-family: ",";\n        text-transform: uppercase;\n        font-size: 0.7em;\n        text-align: left;\n        color: ",";\n        padding: 0;\n\n        &:focus {\n            outline: 0;\n        }\n    }\n"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledCampaign=__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].lightGrey,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].orange);/* harmony default export */ __webpack_exports__["a"] = (StyledCampaign);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_StyledLabel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_CheckboxIcon__ = __webpack_require__(5);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    display: inline-block;\n    margin-top: 0.6em;\n    margin-right: 1em;\n    position: relative;\n    overflow: hidden;\n\n    input {\n        opacity: 0;\n        padding: 0;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n        width: 100%;\n        height: 100%;\n    }\n\n    label {\n        display: block;\n    }\n\n    .meta__checkbox {\n        width: 1.1em;\n        height: 1.1em;\n        display: block;\n        float: right;\n        margin-left: 0.4em;\n        border: solid 1px black;\n\n        svg {\n            width: 100%;\n            height: 100%;\n        }\n    }\n"],["\n    display: inline-block;\n    margin-top: 0.6em;\n    margin-right: 1em;\n    position: relative;\n    overflow: hidden;\n\n    input {\n        opacity: 0;\n        padding: 0;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n        width: 100%;\n        height: 100%;\n    }\n\n    label {\n        display: block;\n    }\n\n    .meta__checkbox {\n        width: 1.1em;\n        height: 1.1em;\n        display: block;\n        float: right;\n        margin-left: 0.4em;\n        border: solid 1px black;\n\n        svg {\n            width: 100%;\n            height: 100%;\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledMetaCheckbox=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);var MetaCheckbox=function(_Component){_inherits(MetaCheckbox,_Component);function MetaCheckbox(){_classCallCheck(this,MetaCheckbox);return _possibleConstructorReturn(this,(MetaCheckbox.__proto__||Object.getPrototypeOf(MetaCheckbox)).apply(this,arguments));}_createClass(MetaCheckbox,[{key:"render",value:function render(){var _props=this.props,id=_props.id,text=_props.text,handleChange=_props.handleChange,checked=_props.checked;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledMetaCheckbox,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{name:id,id:id,type:"checkbox",onChange:handleChange,defaultChecked:checked}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:id},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_StyledLabel__["a" /* default */],null,text,":"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"meta__checkbox"},checked&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icons_CheckboxIcon__["a" /* default */],{fill:__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange}))));}}]);return MetaCheckbox;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (MetaCheckbox);

/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(57);
} else {
  module.exports = require('./cjs/react-is.development.js');
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40);
module.exports = __webpack_require__(44);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(41).enable();
  window.Promise = __webpack_require__(43);
}

// fetch() polyfill for making API calls.
__webpack_require__(36);

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(8);

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {
  require('raf').polyfill(global);
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(15);

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(15);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__(49);
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_App__["a" /* default */],null),document.getElementById("root"));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(8),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,A=n?Symbol.for("react.memo"):
60115,B=n?Symbol.for("react.lazy"):60116,C="function"===typeof Symbol&&Symbol.iterator;function aa(a,b,e,c,d,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[e,c,d,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F={};
function G(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}G.prototype.isReactComponent={};G.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};G.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function H(){}H.prototype=G.prototype;function I(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}var J=I.prototype=new H;
J.constructor=I;k(J,G.prototype);J.isPureReactComponent=!0;var K={current:null,currentDispatcher:null},L=Object.prototype.hasOwnProperty,M={key:!0,ref:!0,__self:!0,__source:!0};
function N(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:d,_owner:K.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,e,c){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return e(c,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+U(d,h);g+=T(d,f,e,c)}else if(null===a||"object"!==typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,h++),g+=T(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function V(a,b,e){return null==a?0:T(a,"",b,e)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,function(a){return a}):null!=a&&(O(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(P,"$&/")+"/");b=R(b,g,c,d);V(a,da,b);S(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=R(null,null,b,e);V(a,ca,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){O(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:G,PureComponent:I,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:B,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:A,type:a,compare:void 0===b?null:b}},Fragment:r,StrictMode:t,Suspense:z,createElement:N,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;
if(null!=b){void 0!==b.ref&&(h=b.ref,f=K.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=N.bind(null,a);b.type=a;return b},isValidElement:O,version:"16.6.3",
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:K,assign:k}};X.unstable_ConcurrentMode=x;X.unstable_Profiler=u;var Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(8),ba=__webpack_require__(47);function ca(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function t(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:t("227");function da(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea=!0;fa=a}};function ka(a,b,c,d,e,f,g,h,k){ea=!1;fa=null;da.apply(ja,arguments)}function la(a,b,c,d,e,f,g,h,k){ka.apply(this,arguments);if(ea){if(ea){var l=fa;ea=!1;fa=null}else t("198"),l=void 0;ha||(ha=!0,ia=l)}}var ma=null,na={};
function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:t("96",a);if(!pa[c]){b.extractEvents?void 0:t("97",a);pa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;qa.hasOwnProperty(h)?t("99",h):void 0;qa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ra(k[e],g,h);e=!0}else f.registrationName?(ra(f.registrationName,g,h),e=!0):e=!1;e?void 0:t("98",d,a)}}}}
function ra(a,b,c){sa[a]?t("100",a):void 0;sa[a]=b;ta[a]=b.eventTypes[c].dependencies}var pa=[],qa={},sa={},ta={},ua=null,va=null,wa=null;function xa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=wa(c);la(d,b,void 0,a);a.currentTarget=null}function ya(a,b){null==b?t("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function za(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Aa=null;function Ba(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)xa(a,b[d],c[d]);else b&&xa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Ca={injectEventPluginOrder:function(a){ma?t("101"):void 0;ma=Array.prototype.slice.call(a);oa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?t("102",c):void 0,na[c]=d,b=!0)}b&&oa()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?t("231",b,typeof c):void 0;
return c}function Ea(a){null!==a&&(Aa=ya(Aa,a));a=Aa;Aa=null;if(a&&(za(a,Ba),Aa?t("95"):void 0,ha))throw a=ia,ha=!1,ia=null,a;}var Fa=Math.random().toString(36).slice(2),Ga="__reactInternalInstance$"+Fa,Ha="__reactEventHandlers$"+Fa;function Ia(a){if(a[Ga])return a[Ga];for(;!a[Ga];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ga];return 5===a.tag||6===a.tag?a:null}function Ja(a){a=a[Ga];return!a||5!==a.tag&&6!==a.tag?null:a}
function Ka(a){if(5===a.tag||6===a.tag)return a.stateNode;t("33")}function La(a){return a[Ha]||null}function Ma(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Na(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a)}
function Oa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Ma(b);for(b=c.length;0<b--;)Na(c[b],"captured",a);for(b=0;b<c.length;b++)Na(c[b],"bubbled",a)}}function Pa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a))}function Qa(a){a&&a.dispatchConfig.registrationName&&Pa(a._targetInst,null,a)}
function Ra(a){za(a,Oa)}var Sa=!("undefined"===typeof window||!window.document||!window.document.createElement);function Ta(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ua={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Va={},Wa={};
Sa&&(Wa=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Xa(a){if(Va[a])return Va[a];if(!Ua[a])return a;var b=Ua[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Wa)return Va[a]=b[c];return a}
var Ya=Xa("animationend"),Za=Xa("animationiteration"),$a=Xa("animationstart"),ab=Xa("transitionend"),bb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=null,eb=null,fb=null;
function gb(){if(fb)return fb;var a,b=eb,c=b.length,d,e="value"in cb?cb.value:cb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return fb=e.slice(a,1<d?1-d:void 0)}function hb(){return!0}function ib(){return!1}
function A(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?hb:ib;this.isPropagationStopped=ib;return this}
n(A.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=hb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=hb)},persist:function(){this.isPersistent=hb},isPersistent:ib,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ib;this._dispatchInstances=this._dispatchListeners=null}});A.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
A.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;jb(c);return c};jb(A);function kb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function lb(a){a instanceof this?void 0:t("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function jb(a){a.eventPool=[];a.getPooled=kb;a.release=lb}var mb=A.extend({data:null}),nb=A.extend({data:null}),ob=[9,13,27,32],pb=Sa&&"CompositionEvent"in window,qb=null;Sa&&"documentMode"in document&&(qb=document.documentMode);
var rb=Sa&&"TextEvent"in window&&!qb,sb=Sa&&(!pb||qb&&8<qb&&11>=qb),tb=String.fromCharCode(32),ub={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vb=!1;
function wb(a,b){switch(a){case "keyup":return-1!==ob.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function xb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var yb=!1;function zb(a,b){switch(a){case "compositionend":return xb(b);case "keypress":if(32!==b.which)return null;vb=!0;return tb;case "textInput":return a=b.data,a===tb&&vb?null:a;default:return null}}
function Ab(a,b){if(yb)return"compositionend"===a||!pb&&wb(a,b)?(a=gb(),fb=eb=cb=null,yb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return sb&&"ko"!==b.locale?null:b.data;default:return null}}
var Bb={eventTypes:ub,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(pb)b:{switch(a){case "compositionstart":e=ub.compositionStart;break b;case "compositionend":e=ub.compositionEnd;break b;case "compositionupdate":e=ub.compositionUpdate;break b}e=void 0}else yb?wb(a,c)&&(e=ub.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ub.compositionStart);e?(sb&&"ko"!==c.locale&&(yb||e!==ub.compositionStart?e===ub.compositionEnd&&yb&&(f=gb()):(cb=d,eb="value"in cb?cb.value:cb.textContent,yb=
!0)),e=mb.getPooled(e,b,c,d),f?e.data=f:(f=xb(c),null!==f&&(e.data=f)),Ra(e),f=e):f=null;(a=rb?zb(a,c):Ab(a,c))?(b=nb.getPooled(ub.beforeInput,b,c,d),b.data=a,Ra(b)):b=null;return null===f?b:null===b?f:[f,b]}},Cb=null,Db=null,Eb=null;function Hb(a){if(a=va(a)){"function"!==typeof Cb?t("280"):void 0;var b=ua(a.stateNode);Cb(a.stateNode,a.type,b)}}function Ib(a){Db?Eb?Eb.push(a):Eb=[a]:Db=a}function Jb(){if(Db){var a=Db,b=Eb;Eb=Db=null;Hb(a);if(b)for(a=0;a<b.length;a++)Hb(b[a])}}
function Kb(a,b){return a(b)}function Lb(a,b,c){return a(b,c)}function Mb(){}var Nb=!1;function Ob(a,b){if(Nb)return a(b);Nb=!0;try{return Kb(a,b)}finally{if(Nb=!1,null!==Db||null!==Eb)Mb(),Jb()}}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Pb[a.type]:"textarea"===b?!0:!1}
function Rb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Sb(a){if(!Sa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Tb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ub(a){var b=Tb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Vb(a){a._valueTracker||(a._valueTracker=Ub(a))}function Wb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Tb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var Xb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yb=/^(.*)[\\\/]/,D="function"===typeof Symbol&&Symbol.for,Zb=D?Symbol.for("react.element"):60103,$b=D?Symbol.for("react.portal"):60106,ac=D?Symbol.for("react.fragment"):60107,bc=D?Symbol.for("react.strict_mode"):60108,cc=D?Symbol.for("react.profiler"):60114,dc=D?Symbol.for("react.provider"):60109,ec=D?Symbol.for("react.context"):60110,fc=D?Symbol.for("react.concurrent_mode"):60111,gc=D?Symbol.for("react.forward_ref"):60112,hc=D?Symbol.for("react.suspense"):
60113,ic=D?Symbol.for("react.memo"):60115,jc=D?Symbol.for("react.lazy"):60116,kc="function"===typeof Symbol&&Symbol.iterator;function lc(a){if(null===a||"object"!==typeof a)return null;a=kc&&a[kc]||a["@@iterator"];return"function"===typeof a?a:null}
function mc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case fc:return"ConcurrentMode";case ac:return"Fragment";case $b:return"Portal";case cc:return"Profiler";case bc:return"StrictMode";case hc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ec:return"Context.Consumer";case dc:return"Context.Provider";case gc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ic:return mc(a.type);case jc:if(a=1===a._status?a._result:null)return mc(a)}return null}function nc(a){var b="";do{a:switch(a.tag){case 2:case 16:case 0:case 1:case 5:case 8:case 13:var c=a._debugOwner,d=a._debugSource,e=mc(a.type);var f=null;c&&(f=mc(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(Yb,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
function sc(a){if(pc.call(rc,a))return!0;if(pc.call(qc,a))return!1;if(oc.test(a))return rc[a]=!0;qc[a]=!0;return!1}function tc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function E(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var F={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F[a]=new E(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F[b]=new E(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F[a]=new E(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F[a]=new E(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F[a]=new E(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){F[a]=new E(a,3,!0,a,null)});
["capture","download"].forEach(function(a){F[a]=new E(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){F[a]=new E(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){F[a]=new E(a,5,!1,a.toLowerCase(),null)});var vc=/[\-:]([a-z])/g;function xc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
xc);F[b]=new E(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,xc);F[b]=new E(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,xc);F[b]=new E(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});F.tabIndex=new E("tabIndex",1,!1,"tabindex",null);
function yc(a,b,c,d){var e=F.hasOwnProperty(b)?F[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function zc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ac(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=zc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cc(a,b){b=b.checked;null!=b&&yc(a,"checked",b,!1)}
function Dc(a,b){Cc(a,b);var c=zc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ec(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ec(a,b.type,zc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Fc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Ec(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Gc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Hc(a,b,c){a=A.getPooled(Gc.change,a,b,c);a.type="change";Ib(c);Ra(a);return a}var Jc=null,Kc=null;function Lc(a){Ea(a)}
function Mc(a){var b=Ka(a);if(Wb(b))return a}function Nc(a,b){if("change"===a)return b}var Oc=!1;Sa&&(Oc=Sb("input")&&(!document.documentMode||9<document.documentMode));function Pc(){Jc&&(Jc.detachEvent("onpropertychange",Qc),Kc=Jc=null)}function Qc(a){"value"===a.propertyName&&Mc(Kc)&&(a=Hc(Kc,a,Rb(a)),Ob(Lc,a))}function Rc(a,b,c){"focus"===a?(Pc(),Jc=b,Kc=c,Jc.attachEvent("onpropertychange",Qc)):"blur"===a&&Pc()}function Sc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Mc(Kc)}
function Tc(a,b){if("click"===a)return Mc(b)}function Uc(a,b){if("input"===a||"change"===a)return Mc(b)}
var Vc={eventTypes:Gc,_isInputEventSupported:Oc,extractEvents:function(a,b,c,d){var e=b?Ka(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Nc:Qb(e)?Oc?f=Uc:(f=Sc,g=Rc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Tc);if(f&&(f=f(a,b)))return Hc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ec(e,"number",e.value)}},Wc=A.extend({view:null,detail:null}),Xc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Xc[a])?!!b[a]:!1}function Zc(){return Yc}
var $c=0,ad=0,bd=!1,cd=!1,dd=Wc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ia(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=dd,h=fd.mouseLeave,k=fd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=ed,h=fd.pointerLeave,k=fd.pointerEnter,l="pointer";var m=null==f?e:Ka(f);e=null==b?e:Ka(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Ma(g))l++;g=0;for(k=e;k;k=Ma(k))g++;for(;0<l-g;)b=Ma(b),l--;for(;0<g-l;)e=Ma(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Ma(b);e=Ma(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Ma(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Ma(d)}for(d=0;d<b.length;d++)Pa(b[d],"bubbled",a);for(d=f.length;0<d--;)Pa(f[d],"captured",c);return[a,c]}},hd=Object.prototype.hasOwnProperty;function id(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function jd(a,b){if(id(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!hd.call(b,c[d])||!id(a[c[d]],b[c[d]]))return!1;return!0}function kd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function ld(a){2!==kd(a)?t("188"):void 0}
function md(a){var b=a.alternate;if(!b)return b=kd(a),3===b?t("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return ld(e),a;if(g===d)return ld(e),b;g=g.sibling}t("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:t("189")}}c.alternate!==d?t("190"):void 0}3!==c.tag?t("188"):void 0;return c.stateNode.current===c?a:b}function nd(a){a=md(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var od=A.extend({animationName:null,elapsedTime:null,pseudoElement:null}),pd=A.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),qd=Wc.extend({relatedTarget:null});function rd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ud=Wc.extend({key:function(a){if(a.key){var b=sd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=rd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?td[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zc,charCode:function(a){return"keypress"===
a.type?rd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?rd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),vd=dd.extend({dataTransfer:null}),wd=Wc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zc}),xd=A.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),yd=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),zd=[["abort","abort"],[Ya,"animationEnd"],[Za,"animationIteration"],[$a,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ab,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Ad={},Bd={};function Cd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Ad[a]=b;Bd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Cd(a,!0)});zd.forEach(function(a){Cd(a,!1)});
var Dd={eventTypes:Ad,isInteractiveTopLevelEventType:function(a){a=Bd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Bd[a];if(!e)return null;switch(a){case "keypress":if(0===rd(c))return null;case "keydown":case "keyup":a=ud;break;case "blur":case "focus":a=qd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
vd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=wd;break;case Ya:case Za:case $a:a=od;break;case ab:a=xd;break;case "scroll":a=Wc;break;case "wheel":a=yd;break;case "copy":case "cut":case "paste":a=pd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=A}b=a.getPooled(e,b,c,d);Ra(b);return b}},Ed=Dd.isInteractiveTopLevelEventType,
Fd=[];function Gd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ia(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Rb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<pa.length;h++){var k=pa[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=ya(g,k))}Ea(g)}}var Hd=!0;
function G(a,b){if(!b)return null;var c=(Ed(a)?Id:Jd).bind(null,a);b.addEventListener(a,c,!1)}function Kd(a,b){if(!b)return null;var c=(Ed(a)?Id:Jd).bind(null,a);b.addEventListener(a,c,!0)}function Id(a,b){Lb(Jd,a,b)}
function Jd(a,b){if(Hd){var c=Rb(b);c=Ia(c);null===c||"number"!==typeof c.tag||2===kd(c)||(c=null);if(Fd.length){var d=Fd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Ob(Gd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Fd.length&&Fd.push(a)}}}var Ld={},Md=0,Nd="_reactListenersID"+(""+Math.random()).slice(2);
function Od(a){Object.prototype.hasOwnProperty.call(a,Nd)||(a[Nd]=Md++,Ld[a[Nd]]={});return Ld[a[Nd]]}function Pd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Pd();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Pd(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Sa&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Pd(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&jd(Zd,c)?null:(Zd=c,a=A.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ra(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Od(e);f=ta.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ka(b):window;switch(a){case "focus":if(Qb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ua=La;va=Ja;wa=Ka;Ca.injectEventPluginsByName({SimpleEventPlugin:Dd,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Vc,SelectEventPlugin:be,BeforeInputEventPlugin:Bb});function de(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function ee(a,b){a=n({children:void 0},b);if(b=de(b.children))a.children=b;return a}function fe(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+zc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function ge(a,b){null!=b.dangerouslySetInnerHTML?t("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function he(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?t("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:t("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:zc(c)}}
function ie(a,b){var c=zc(b.value),d=zc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function je(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var ke={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function le(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?le(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ne=void 0,oe=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==ke.svg||"innerHTML"in a)a.innerHTML=b;else{ne=ne||document.createElement("div");ne.innerHTML="<svg>"+b+"</svg>";for(b=ne.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},re=["Webkit","ms","Moz","O"];Object.keys(qe).forEach(function(a){re.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qe[b]=qe[a]})});function se(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qe.hasOwnProperty(a)&&qe[a]?(""+b).trim():b+"px"}
function te(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=se(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ue=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ve(a,b){b&&(ue[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?t("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?t("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:t("61")),null!=b.style&&"object"!==typeof b.style?t("62",""):void 0)}
function we(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function xe(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Od(a);b=ta[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Kd("scroll",a);break;case "focus":case "blur":Kd("focus",a);Kd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Sb(e)&&Kd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===bb.indexOf(e)&&G(e,a)}c[e]=!0}}}function ye(){}var ze=null,Ae=null;
function Be(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ce(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var De="function"===typeof setTimeout?setTimeout:void 0,Ee="function"===typeof clearTimeout?clearTimeout:void 0;
function Fe(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ge(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var He=[],Ie=-1;function H(a){0>Ie||(a.current=He[Ie],He[Ie]=null,Ie--)}function I(a,b){Ie++;He[Ie]=a.current;a.current=b}var Je={},J={current:Je},K={current:!1},Ke=Je;
function Le(a,b){var c=a.type.contextTypes;if(!c)return Je;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Me(a){H(K,a);H(J,a)}function Ne(a){H(K,a);H(J,a)}
function Oe(a,b,c){J.current!==Je?t("168"):void 0;I(J,b,a);I(K,c,a)}function Pe(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:t("108",mc(b)||"Unknown",e);return n({},c,d)}function Qe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Je;Ke=J.current;I(J,b,a);I(K,K.current,a);return!0}
function Re(a,b,c){var d=a.stateNode;d?void 0:t("169");c?(b=Pe(a,b,Ke),d.__reactInternalMemoizedMergedChildContext=b,H(K,a),H(J,a),I(J,b,a)):H(K,a);I(K,c,a)}var Se=null,Te=null;function Ue(a){return function(b){try{return a(b)}catch(c){}}}
function Ve(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Se=Ue(function(a){return b.onCommitFiberRoot(c,a)});Te=Ue(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function We(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function M(a,b,c,d){return new We(a,b,c,d)}
function Xe(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Ye(a){if("function"===typeof a)return Xe(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gc)return 11;if(a===ic)return 14}return 2}
function Ze(a,b){var c=a.alternate;null===c?(c=M(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.firstContextDependency=a.firstContextDependency;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function $e(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Xe(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ac:return af(c.children,e,f,b);case fc:return bf(c,e|3,f,b);case bc:return bf(c,e|2,f,b);case cc:return a=M(12,c,b,e|4),a.elementType=cc,a.type=cc,a.expirationTime=f,a;case hc:return a=M(13,c,b,e),a.elementType=hc,a.type=hc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case dc:g=10;break a;case ec:g=9;break a;case gc:g=11;break a;case ic:g=
14;break a;case jc:g=16;d=null;break a}t("130",null==a?a:typeof a,"")}b=M(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function af(a,b,c,d){a=M(7,a,d,b);a.expirationTime=c;return a}function bf(a,b,c,d){a=M(8,a,d,b);b=0===(b&1)?bc:fc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function cf(a,b,c){a=M(6,a,null,b);a.expirationTime=c;return a}
function df(a,b,c){b=M(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function ef(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);ff(b,a)}
function gf(a,b){a.didError=!1;var c=a.latestPingedTime;0!==c&&c>=b&&(a.latestPingedTime=0);c=a.earliestPendingTime;var d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);ff(b,a)}
function hf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function ff(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var jf=!1;
function kf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function lf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function mf(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function nf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function of(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=kf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=kf(a.memoizedState),e=c.updateQueue=kf(c.memoizedState)):d=a.updateQueue=lf(e):null===e&&(e=c.updateQueue=lf(d));null===e||d===e?nf(d,b):null===d.lastUpdate||null===e.lastUpdate?(nf(d,b),nf(e,b)):(nf(d,b),e.lastUpdate=b)}
function pf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=kf(a.memoizedState):qf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function qf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=lf(b));return b}
function rf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:jf=!0}return d}
function sf(a,b,c,d,e){jf=!1;b=qf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(l=rf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var q=k.expirationTime;q<e?(null===m&&(m=k,null===g&&(f=l)),h<q&&(h=q)):(l=rf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=
32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function tf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);uf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;uf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function uf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?t("191",c):void 0;c.call(d)}a=a.nextEffect}}
function vf(a,b){return{value:a,source:b,stack:nc(b)}}var wf={current:null},xf=null,yf=null,zf=null;function Af(a,b){var c=a.type._context;I(wf,c._currentValue,a);c._currentValue=b}function Bf(a){var b=wf.current;H(wf,a);a.type._context._currentValue=b}function Cf(a){xf=a;zf=yf=null;a.firstContextDependency=null}
function Df(a,b){if(zf!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)zf=a,b=1073741823;b={context:a,observedBits:b,next:null};null===yf?(null===xf?t("293"):void 0,xf.firstContextDependency=yf=b):yf=yf.next=b}return a._currentValue}var Ef={},N={current:Ef},Ff={current:Ef},Gf={current:Ef};function Hf(a){a===Ef?t("174"):void 0;return a}
function If(a,b){I(Gf,b,a);I(Ff,a,a);I(N,Ef,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:me(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=me(b,c)}H(N,a);I(N,b,a)}function Jf(a){H(N,a);H(Ff,a);H(Gf,a)}function Kf(a){Hf(Gf.current);var b=Hf(N.current);var c=me(b,a.type);b!==c&&(I(Ff,a,a),I(N,c,a))}function Lf(a){Ff.current===a&&(H(N,a),H(Ff,a))}
function O(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function Mf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:throw a._status=0,b=a._ctor,b=b(),b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)}),a._result=b,b;}}var Nf=Xb.ReactCurrentOwner,Of=(new aa.Component).refs;
function Pf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Uf={isMounted:function(a){return(a=a._reactInternalFiber)?2===kd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Qf();d=Rf(d,a);var e=mf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf();of(a,e);Tf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Qf();d=Rf(d,a);var e=mf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf();of(a,e);Tf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Qf();c=Rf(c,a);var d=mf(c);d.tag=
2;void 0!==b&&null!==b&&(d.callback=b);Sf();of(a,d);Tf(a,c)}};function Vf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!jd(c,d)||!jd(e,f):!0}
function Wf(a,b,c){var d=!1,e=Je;var f=b.contextType;"object"===typeof f&&null!==f?f=Nf.currentDispatcher.readContext(f):(e=L(b)?Ke:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Le(a,e):Je);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Uf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Xf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Uf.enqueueReplaceState(b,b.state,null)}
function Yf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Of;var f=b.contextType;"object"===typeof f&&null!==f?e.context=Nf.currentDispatcher.readContext(f):(f=L(b)?Ke:J.current,e.context=Le(a,f));f=a.updateQueue;null!==f&&(sf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Pf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&
"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Uf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(sf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Zf=Array.isArray;
function $f(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?t("289"):void 0,d=c.stateNode);d?void 0:t("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Of&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?t("284"):void 0;c._owner?void 0:t("290",a)}return a}
function ag(a,b){"textarea"!==a.type&&t("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function bg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ze(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=cf(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=$f(a,b,c),d.return=a,d;d=$e(c.type,c.key,c.props,null,a.mode,d);d.ref=$f(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=df(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,g){if(null===b||7!==b.tag)return b=af(c,a.mode,d,g),b.return=a,b;b=e(b,c,d);b.return=a;return b}function q(a,b,c){if("string"===typeof b||"number"===typeof b)return b=cf(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Zb:return c=$e(b.type,b.key,b.props,null,a.mode,c),c.ref=$f(a,null,b),c.return=a,c;case $b:return b=df(b,a.mode,c),b.return=a,b}if(Zf(b)||
lc(b))return b=af(b,a.mode,c,null),b.return=a,b;ag(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Zb:return c.key===e?c.type===ac?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $b:return c.key===e?l(a,b,c,d):null}if(Zf(c)||lc(c))return null!==e?null:m(a,b,c,d,null);ag(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Zb:return a=a.get(null===d.key?c:d.key)||null,d.type===ac?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $b:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Zf(d)||lc(d))return a=a.get(c)||null,m(b,a,d,e,null);ag(b,d)}return null}function B(e,g,h,k){for(var l=null,r=null,m=g,u=g=0,p=null;null!==m&&u<h.length;u++){m.index>u?(p=m,m=null):p=m.sibling;var v=x(e,m,h[u],k);if(null===v){null===m&&(m=p);break}a&&
m&&null===v.alternate&&b(e,m);g=f(v,g,u);null===r?l=v:r.sibling=v;r=v;m=p}if(u===h.length)return c(e,m),l;if(null===m){for(;u<h.length;u++)if(m=q(e,h[u],k))g=f(m,g,u),null===r?l=m:r.sibling=m,r=m;return l}for(m=d(e,m);u<h.length;u++)if(p=z(m,e,u,h[u],k))a&&null!==p.alternate&&m.delete(null===p.key?u:p.key),g=f(p,g,u),null===r?l=p:r.sibling=p,r=p;a&&m.forEach(function(a){return b(e,a)});return l}function Q(e,g,h,k){var l=lc(h);"function"!==typeof l?t("150"):void 0;h=l.call(h);null==h?t("151"):void 0;
for(var m=l=null,r=g,u=g=0,p=null,v=h.next();null!==r&&!v.done;u++,v=h.next()){r.index>u?(p=r,r=null):p=r.sibling;var y=x(e,r,v.value,k);if(null===y){r||(r=p);break}a&&r&&null===y.alternate&&b(e,r);g=f(y,g,u);null===m?l=y:m.sibling=y;m=y;r=p}if(v.done)return c(e,r),l;if(null===r){for(;!v.done;u++,v=h.next())v=q(e,v.value,k),null!==v&&(g=f(v,g,u),null===m?l=v:m.sibling=v,m=v);return l}for(r=d(e,r);!v.done;u++,v=h.next())v=z(r,e,u,v.value,k),null!==v&&(a&&null!==v.alternate&&r.delete(null===v.key?u:
v.key),g=f(v,g,u),null===m?l=v:m.sibling=v,m=v);a&&r.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ac&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Zb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===ac:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ac?f.props.children:f.props,h);d.ref=$f(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===ac?(d=af(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=$e(f.type,f.key,f.props,null,a.mode,h),h.ref=$f(a,d,f),h.return=a,a=h)}return g(a);case $b:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=df(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=cf(f,a.mode,h),d.return=a,a=d),g(a);if(Zf(f))return B(a,d,f,h);if(lc(f))return Q(a,d,f,h);l&&ag(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,t("152",h.displayName||h.name||"Component")}return c(a,d)}}var cg=bg(!0),dg=bg(!1),eg=null,fg=null,gg=!1;
function hg(a,b){var c=M(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function ig(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}
function jg(a){if(gg){var b=fg;if(b){var c=b;if(!ig(a,b)){b=Fe(c);if(!b||!ig(a,b)){a.effectTag|=2;gg=!1;eg=a;return}hg(eg,c)}eg=a;fg=Ge(b)}else a.effectTag|=2,gg=!1,eg=a}}function kg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;eg=a}function lg(a){if(a!==eg)return!1;if(!gg)return kg(a),gg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ce(b,a.memoizedProps))for(b=fg;b;)hg(a,b),b=Fe(b);kg(a);fg=eg?Fe(a.stateNode):null;return!0}function mg(){fg=eg=null;gg=!1}var ng=Xb.ReactCurrentOwner;
function P(a,b,c,d){b.child=null===a?dg(b,null,c,d):cg(b,a.child,c,d)}function og(a,b,c,d,e){c=c.render;var f=b.ref;Cf(b,e);d=c(d,f);b.effectTag|=1;P(a,b,d,e);return b.child}
function pg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Xe(g)&&void 0===g.defaultProps&&null===c.compare)return b.tag=15,b.type=g,qg(a,b,g,d,e,f);a=$e(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:jd,c(e,d)&&a.ref===b.ref))return rg(a,b,f);b.effectTag|=1;a=Ze(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function qg(a,b,c,d,e,f){return null!==a&&e<f&&jd(a.memoizedProps,d)&&a.ref===b.ref?rg(a,b,f):sg(a,b,c,d,f)}function tg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function sg(a,b,c,d,e){var f=L(c)?Ke:J.current;f=Le(b,f);Cf(b,e);c=c(d,f);b.effectTag|=1;P(a,b,c,e);return b.child}
function ug(a,b,c,d,e){if(L(c)){var f=!0;Qe(b)}else f=!1;Cf(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Wf(b,c,d,e),Yf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Nf.currentDispatcher.readContext(l):(l=L(c)?Ke:J.current,l=Le(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Xf(b,g,d,l);jf=!1;var x=b.memoizedState;k=g.state=x;var z=b.updateQueue;null!==z&&(sf(b,z,d,g,e),k=b.memoizedState);h!==d||x!==k||K.current||jf?("function"===typeof m&&(Pf(b,c,m,d),k=b.memoizedState),(h=jf||Vf(b,c,h,d,x,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:O(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=Nf.currentDispatcher.readContext(l):(l=L(c)?Ke:J.current,l=Le(b,l)),m=c.getDerivedStateFromProps,
(q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Xf(b,g,d,l),jf=!1,k=b.memoizedState,x=g.state=k,z=b.updateQueue,null!==z&&(sf(b,z,d,g,e),x=b.memoizedState),h!==d||k!==x||K.current||jf?("function"===typeof m&&(Pf(b,c,m,d),x=b.memoizedState),(m=jf||Vf(b,c,h,d,k,x,l))?(q||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return vg(a,b,c,d,f,e)}
function vg(a,b,c,d,e,f){tg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Re(b,c,!1),rg(a,b,f);d=b.stateNode;ng.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=cg(b,a.child,null,f),b.child=cg(b,null,h,f)):P(a,b,h,f);b.memoizedState=d.state;e&&Re(b,c,!0);return b.child}function wg(a){var b=a.stateNode;b.pendingContext?Oe(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Oe(a,b.context,!1);If(a,b.containerInfo)}
function xg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;null===a?g?(g=e.fallback,e=af(null,d,0,null),0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=af(g,d,c,null),e.sibling=d,c=e,c.return=d.return=b):c=d=dg(b,null,e.children,c):null!==a.memoizedState?(d=a.child,a=d.sibling,g?(c=e.fallback,e=Ze(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==b.memoizedState?
b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Ze(a,c,a.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=cg(b,d.child,e.children,c)):(a=a.child,g?(g=e.fallback,e=af(null,d,0,null),e.child=a,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=af(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=cg(b,a,e.children,c));b.memoizedState=f;b.child=c;return d}
function rg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?t("153"):void 0;if(null!==b.child){a=b.child;c=Ze(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ze(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function yg(a,b,c){var d=b.expirationTime;if(null!==a&&a.memoizedProps===b.pendingProps&&!K.current&&d<c){switch(b.tag){case 3:wg(b);mg();break;case 5:Kf(b);break;case 1:L(b.type)&&Qe(b);break;case 4:If(b,b.stateNode.containerInfo);break;case 10:Af(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return xg(a,b,c);b=rg(a,b,c);return null!==b?b.sibling:null}}return rg(a,b,c)}b.expirationTime=0;switch(b.tag){case 2:d=b.elementType;null!==
a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Le(b,J.current);Cf(b,c);e=d(a,e);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;if(L(d)){var f=!0;Qe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Pf(b,d,g,a);e.updater=Uf;b.stateNode=e;e._reactInternalFiber=b;Yf(b,d,a,c);b=vg(null,b,d,!0,f,c)}else b.tag=0,P(null,b,e,c),b=b.child;
return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=Mf(e);b.type=a;e=b.tag=Ye(a);f=O(a,f);g=void 0;switch(e){case 0:g=sg(null,b,a,f,c);break;case 1:g=ug(null,b,a,f,c);break;case 11:g=og(null,b,a,f,c);break;case 14:g=pg(null,b,a,O(a.type,f),d,c);break;default:t("283",a)}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:O(d,e),sg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:O(d,e),ug(a,b,d,
e,c);case 3:wg(b);d=b.updateQueue;null===d?t("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;sf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)mg(),b=rg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)fg=Ge(b.stateNode.containerInfo),eg=b,e=gg=!0;e?(b.effectTag|=2,b.child=dg(b,null,d,c)):(P(a,b,d,c),mg());b=b.child}return b;case 5:return Kf(b),null===a&&jg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ce(d,e)?g=null:null!==
f&&Ce(d,f)&&(b.effectTag|=16),tg(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=1,b=null):(P(a,b,g,c),b=b.child),b;case 6:return null===a&&jg(b),null;case 13:return xg(a,b,c);case 4:return If(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=cg(b,null,d,c):P(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:O(d,e),og(a,b,d,e,c);case 7:return P(a,b,b.pendingProps,c),b.child;case 8:return P(a,b,b.pendingProps.children,c),b.child;case 12:return P(a,b,b.pendingProps.children,
c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Af(b,f);if(null!==g){var h=g.value;f=h===f&&(0!==h||1/h===1/f)||h!==h&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!K.current){b=rg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&f)){if(1===g.tag){var k=mf(c);k.tag=2;of(g,k)}g.expirationTime<
c&&(g.expirationTime=c);k=g.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(l.childExpirationTime<c)l.childExpirationTime=c,null!==k&&k.childExpirationTime<c&&(k.childExpirationTime=c);else if(null!==k&&k.childExpirationTime<c)k.childExpirationTime=c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==k;){if(k===b){k=null;break}g=k.sibling;
if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}P(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Cf(b,c),e=Df(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,P(a,b,d,c),b.child;case 14:return e=b.type,f=O(e.type,b.pendingProps),pg(a,b,e,f,d,c);case 15:return qg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:O(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Qe(b)):
a=!1,Cf(b,c),Wf(b,d,e,c),Yf(b,d,e,c),vg(null,b,d,!0,a,c);default:t("156")}}function zg(a){a.effectTag|=4}var Ag=void 0,Bg=void 0,Fg=void 0,Gg=void 0;Ag=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bg=function(){};
Fg=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Hf(N.current);a=null;switch(c){case "input":f=Ac(g,f);d=Ac(g,d);a=[];break;case "option":f=ee(g,f);d=ee(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=ge(g,f);d=ge(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ye)}ve(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(sa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(sa.hasOwnProperty(c)?(null!=l&&xe(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&zg(b)}};Gg=function(a,b,c,d){c!==d&&zg(b)};
function Hg(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=nc(c));null!==c&&mc(c.type);b=b.value;null!==a&&1===a.tag&&mc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Ig(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Jg(a,c)}else b.current=null}
function Kg(a){"function"===typeof Te&&Te(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(null!==d){var e=a;try{d()}catch(f){Jg(e,f)}}c=c.next}while(c!==b)}break;case 1:Ig(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){Jg(a,f)}break;case 5:Ig(a);break;case 4:Lg(a)}}
function Mg(a){return 5===a.tag||3===a.tag||4===a.tag}
function Ng(a){a:{for(var b=a.return;null!==b;){if(Mg(b)){var c=b;break a}b=b.return}t("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:t("161")}c.effectTag&16&&(pe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Mg(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=ye)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Lg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?t("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(Kg(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?(d=b.stateNode.containerInfo,e=!0):Kg(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Og(a,b){switch(b.tag){case 0:case 11:case 14:case 15:break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ha]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cc(c,d);we(a,e);b=we(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?te(c,h):"dangerouslySetInnerHTML"===g?oe(c,h):"children"===g?pe(c,h):yc(c,g,h,b)}switch(a){case "input":Dc(c,d);break;case "textarea":ie(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?fe(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?fe(c,!!d.multiple,d.defaultValue,!0):fe(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:null===b.stateNode?t("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=Qf()));if(null!==a)a:for(b=c=a;;){if(5===
b.tag)a=b.stateNode,d?a.style.display="none":(a=b.stateNode,f=b.memoizedProps.style,f=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null,a.style.display=se("display",f));else if(6===b.tag)b.stateNode.nodeValue=d?"":b.memoizedProps;else if(13===b.tag&&null!==b.memoizedState){a=b.child.sibling;a.return=b;b=a;continue}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===c)break a;for(;null===b.sibling;){if(null===b.return||b.return===c)break a;b=b.return}b.sibling.return=
b.return;b=b.sibling}break;case 17:break;default:t("163")}}function Pg(a,b,c){c=mf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qg(d);Hg(a,b)};return c}
function Rg(a,b,c){c=mf(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Sg?Sg=new Set([this]):Sg.add(this));var c=b.value,e=b.stack;Hg(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Tg(a){switch(a.tag){case 1:L(a.type)&&Me(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Jf(a),Ne(a),b=a.effectTag,0!==(b&64)?t("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Lf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 4:return Jf(a),null;case 10:return Bf(a),null;default:return null}}
var Ug={readContext:Df},Vg=Xb.ReactCurrentOwner,Wg=1073741822,Xg=0,Yg=!1,R=null,S=null,T=0,Zg=-1,$g=!1,U=null,ah=!1,bh=null,ch=null,Sg=null;function dh(){if(null!==R)for(var a=R.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Me(b);break;case 3:Jf(b);Ne(b);break;case 5:Lf(b);break;case 4:Jf(b);break;case 10:Bf(b)}a=a.return}S=null;T=0;Zg=-1;$g=!1;R=null}function Sf(){null!==ch&&(ba.unstable_cancelCallback(bh),ch())}
function eh(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){R=a;a:{var e=b;b=a;var f=T;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:L(b.type)&&Me(b);break;case 3:Jf(b);Ne(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)lg(b),b.effectTag&=-3;Bg(b);break;case 5:Lf(b);var h=Hf(Gf.current);f=b.type;if(null!==e&&null!=b.stateNode)Fg(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var k=Hf(N.current);if(lg(b)){g=b;e=g.stateNode;var l=g.type,m=g.memoizedProps,q=h;e[Ga]=g;e[Ha]=m;f=void 0;h=l;switch(h){case "iframe":case "object":G("load",e);break;case "video":case "audio":for(l=0;l<bb.length;l++)G(bb[l],e);break;case "source":G("error",e);break;case "img":case "image":case "link":G("error",e);G("load",e);break;case "form":G("reset",e);G("submit",e);break;case "details":G("toggle",e);break;case "input":Bc(e,m);G("invalid",e);xe(q,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};G("invalid",e);xe(q,"onChange");break;case "textarea":he(e,m),G("invalid",e),xe(q,"onChange")}ve(h,m);l=null;for(f in m)m.hasOwnProperty(f)&&(k=m[f],"children"===f?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):sa.hasOwnProperty(f)&&null!=k&&xe(q,f));switch(h){case "input":Vb(e);Fc(e,m,!0);break;case "textarea":Vb(e);je(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=ye)}f=l;g.updateQueue=f;g=null!==f?!0:!1;g&&zg(b)}else{m=b;e=f;q=g;l=9===h.nodeType?h:h.ownerDocument;k===ke.html&&(k=le(e));k===ke.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof q.is?l=l.createElement(e,{is:q.is}):(l=l.createElement(e),"select"===e&&q.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[Ga]=m;e[Ha]=g;Ag(e,b,!1,!1);q=e;l=f;m=g;var x=h,z=we(l,m);switch(l){case "iframe":case "object":G("load",
q);h=m;break;case "video":case "audio":for(h=0;h<bb.length;h++)G(bb[h],q);h=m;break;case "source":G("error",q);h=m;break;case "img":case "image":case "link":G("error",q);G("load",q);h=m;break;case "form":G("reset",q);G("submit",q);h=m;break;case "details":G("toggle",q);h=m;break;case "input":Bc(q,m);h=Ac(q,m);G("invalid",q);xe(x,"onChange");break;case "option":h=ee(q,m);break;case "select":q._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});G("invalid",q);xe(x,"onChange");break;case "textarea":he(q,
m);h=ge(q,m);G("invalid",q);xe(x,"onChange");break;default:h=m}ve(l,h);k=void 0;var B=l,Q=q,v=h;for(k in v)if(v.hasOwnProperty(k)){var r=v[k];"style"===k?te(Q,r):"dangerouslySetInnerHTML"===k?(r=r?r.__html:void 0,null!=r&&oe(Q,r)):"children"===k?"string"===typeof r?("textarea"!==B||""!==r)&&pe(Q,r):"number"===typeof r&&pe(Q,""+r):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(sa.hasOwnProperty(k)?null!=r&&xe(x,k):null!=r&&yc(Q,k,r,z))}switch(l){case "input":Vb(q);
Fc(q,m,!1);break;case "textarea":Vb(q);je(q,m);break;case "option":null!=m.value&&q.setAttribute("value",""+zc(m.value));break;case "select":h=q;h.multiple=!!m.multiple;q=m.value;null!=q?fe(h,!!m.multiple,q,!1):null!=m.defaultValue&&fe(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(q.onclick=ye)}(g=Be(f,g))&&zg(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?t("166"):void 0;break;case 6:e&&null!=b.stateNode?Gg(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?t("166"):void 0),e=Hf(Gf.current),Hf(N.current),lg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Ga]=g,(g=f.nodeValue!==e)&&zg(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Ga]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;R=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g!==f||0===(b.effectTag&1)&&g)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Jf(b);Bg(b);break;case 10:Bf(b);break;case 9:break;case 14:break;case 17:L(b.type)&&Me(b);break;default:t("156")}R=null}b=a;if(1===T||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==R)return R;null!==c&&0===(c.effectTag&1024)&&(null===
c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Tg(a,T);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function fh(a){var b=yg(a.alternate,a,T);a.memoizedProps=a.pendingProps;null===b&&(b=eh(a));Vg.current=null;return b}
function gh(a,b){Yg?t("243"):void 0;Sf();Yg=!0;Vg.currentDispatcher=Ug;var c=a.nextExpirationTimeToWorkOn;if(c!==T||a!==S||null===R)dh(),S=a,T=c,R=Ze(S.current,null,T),a.pendingCommitExpirationTime=0;var d=!1;do{try{if(b)for(;null!==R&&!hh();)R=fh(R);else for(;null!==R;)R=fh(R)}catch(B){if(zf=yf=xf=null,null===R)d=!0,Qg(B);else{null===R?t("271"):void 0;var e=R,f=e.return;if(null===f)d=!0,Qg(B);else{a:{var g=a,h=f,k=e,l=B;f=T;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===
typeof l&&"function"===typeof l.then){var m=l;l=h;var q=-1,x=-1;do{if(13===l.tag){var z=l.alternate;if(null!==z&&(z=z.memoizedState,null!==z)){x=10*(1073741822-z.timedOutAt);break}z=l.pendingProps.maxDuration;if("number"===typeof z)if(0>=z)q=0;else if(-1===q||z<q)q=z}l=l.return}while(null!==l);l=h;do{if(z=13===l.tag)z=void 0===l.memoizedProps.fallback?!1:null===l.memoizedState;if(z){h=ih.bind(null,g,l,k,0===(l.mode&1)?1073741823:f);m.then(h,h);if(0===(l.mode&1)){l.effectTag|=64;k.effectTag&=-1957;
1===k.tag&&null===k.alternate&&(k.tag=17);k.expirationTime=f;break a}-1===q?g=1073741823:(-1===x&&(x=10*(1073741822-hf(g,f))-5E3),g=x+q);0<=g&&Zg<g&&(Zg=g);l.effectTag|=2048;l.expirationTime=f;break a}l=l.return}while(null!==l);l=Error((mc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+nc(k))}$g=!0;l=vf(l,k);g=h;do{switch(g.tag){case 3:k=
l;g.effectTag|=2048;g.expirationTime=f;f=Pg(g,k,f);pf(g,f);break a;case 1:if(k=l,h=g.type,m=g.stateNode,0===(g.effectTag&64)&&("function"===typeof h.getDerivedStateFromError||null!==m&&"function"===typeof m.componentDidCatch&&(null===Sg||!Sg.has(m)))){g.effectTag|=2048;g.expirationTime=f;f=Rg(g,k,f);pf(g,f);break a}}g=g.return}while(null!==g)}R=eh(e);continue}}}break}while(1);Yg=!1;zf=yf=xf=Vg.currentDispatcher=null;if(d)S=null,a.finishedWork=null;else if(null!==R)a.finishedWork=null;else{d=a.current.alternate;
null===d?t("281"):void 0;S=null;if($g){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<c||0!==f&&f<c||0!==g&&g<c){gf(a,c);jh(a,d,c,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;c=a.nextExpirationTimeToWorkOn=c;b=a.expirationTime=1073741823;jh(a,d,c,b,-1);return}}b&&-1!==Zg?(gf(a,c),b=10*(1073741822-hf(a,c)),b<Zg&&(Zg=b),b=10*(1073741822-Qf()),b=Zg-b,jh(a,d,c,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=c,a.finishedWork=d)}}
function Jg(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Sg||!Sg.has(d))){a=vf(b,a);a=Rg(c,a,1073741823);of(c,a);Tf(c,1073741823);return}break;case 3:a=vf(b,a);a=Pg(c,a,1073741823);of(c,a);Tf(c,1073741823);return}c=c.return}3===a.tag&&(c=vf(b,a),c=Pg(a,c,1073741823),of(a,c),Tf(a,1073741823))}
function Rf(a,b){0!==Xg?a=Xg:Yg?a=ah?1073741823:T:b.mode&1?(a=kh?1073741822-10*(((1073741822-a+15)/10|0)+1):1073741822-25*(((1073741822-a+500)/25|0)+1),null!==S&&a===T&&--a):a=1073741823;kh&&(0===lh||a<lh)&&(lh=a);return a}
function ih(a,b,c,d){var e=a.earliestSuspendedTime;var f=a.latestSuspendedTime;if(0!==e&&d<=e&&d>=f){f=e=d;a.didError=!1;var g=a.latestPingedTime;if(0===g||g>f)a.latestPingedTime=f;ff(f,a)}else e=Qf(),e=Rf(e,b),ef(a,e);0!==(b.mode&1)&&a===S&&T===d&&(S=null);mh(b,e);0===(b.mode&1)&&(mh(c,e),1===c.tag&&null!==c.stateNode&&(b=mf(e),b.tag=2,of(c,b)));c=a.expirationTime;0!==c&&nh(a,c)}
function mh(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function Tf(a,b){a=mh(a,b);null!==a&&(!Yg&&0!==T&&b>T&&dh(),ef(a,b),Yg&&!ah&&S===a||nh(a,a.expirationTime),oh>ph&&(oh=0,t("185")))}function qh(a,b,c,d,e){var f=Xg;Xg=1073741823;try{return a(b,c,d,e)}finally{Xg=f}}var rh=null,V=null,sh=0,th=void 0,W=!1,uh=null,X=0,lh=0,vh=!1,wh=null,Z=!1,xh=!1,kh=!1,yh=null,zh=ba.unstable_now(),Ah=1073741822-(zh/10|0),Bh=Ah,ph=50,oh=0,Ch=null;function Dh(){Ah=1073741822-((ba.unstable_now()-zh)/10|0)}
function Eh(a,b){if(0!==sh){if(b<sh)return;null!==th&&ba.unstable_cancelCallback(th)}sh=b;a=ba.unstable_now()-zh;th=ba.unstable_scheduleCallback(Fh,{timeout:10*(1073741822-b)-a})}function jh(a,b,c,d,e){a.expirationTime=d;0!==e||hh()?0<e&&(a.timeoutHandle=De(Gh.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Gh(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;Dh();Bh=Ah;Hh(a,c)}function Qf(){if(W)return Bh;Ih();if(0===X||1===X)Dh(),Bh=Ah;return Bh}
function nh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===V?(rh=V=a,a.nextScheduledRoot=a):(V=V.nextScheduledRoot=a,V.nextScheduledRoot=rh)):b>a.expirationTime&&(a.expirationTime=b);W||(Z?xh&&(uh=a,X=1073741823,Jh(a,1073741823,!1)):1073741823===b?Kh(1073741823,!1):Eh(a,b))}
function Ih(){var a=0,b=null;if(null!==V)for(var c=V,d=rh;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===V?t("244"):void 0;if(d===d.nextScheduledRoot){rh=V=d.nextScheduledRoot=null;break}else if(d===rh)rh=e=d.nextScheduledRoot,V.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===V){V=c;V.nextScheduledRoot=rh;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===V)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}uh=b;X=a}var Lh=!1;function hh(){return Lh?!0:ba.unstable_shouldYield()?Lh=!0:!1}function Fh(){try{if(!hh()&&null!==rh){Dh();var a=rh;do{var b=a.expirationTime;0!==b&&Ah<=b&&(a.nextExpirationTimeToWorkOn=Ah);a=a.nextScheduledRoot}while(a!==rh)}Kh(0,!0)}finally{Lh=!1}}
function Kh(a,b){Ih();if(b)for(Dh(),Bh=Ah;null!==uh&&0!==X&&a<=X&&!(Lh&&Ah>X);)Jh(uh,X,Ah>X),Ih(),Dh(),Bh=Ah;else for(;null!==uh&&0!==X&&a<=X;)Jh(uh,X,!1),Ih();b&&(sh=0,th=null);0!==X&&Eh(uh,X);oh=0;Ch=null;if(null!==yh)for(a=yh,yh=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){vh||(vh=!0,wh=d)}}if(vh)throw a=wh,wh=null,vh=!1,a;}function Hh(a,b){W?t("253"):void 0;uh=a;X=b;Jh(a,b,!1);Kh(1073741823,!1)}
function Jh(a,b,c){W?t("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Mh(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Ee(d)),gh(a,c),d=a.finishedWork,null!==d&&(hh()?a.finishedWork=d:Mh(a,d,b)))}else d=a.finishedWork,null!==d?Mh(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Ee(d)),gh(a,c),d=a.finishedWork,null!==d&&Mh(a,d,b));W=!1}
function Mh(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===yh?yh=[d]:yh.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===Ch?oh++:(Ch=a,oh=0);ah=Yg=!0;a.current===b?t("177"):void 0;c=a.pendingCommitExpirationTime;0===c?t("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=e>d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=
0):(e=a.latestPendingTime,0!==e&&(e>d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?ef(a,d):d<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,ef(a,d)):d>e&&ef(a,d));ff(0,a);Vg.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ze=Hd;e=Td();if(Ud(e)){if("selectionStart"in e)var f={start:e.selectionStart,
end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var h=g.anchorOffset,k=g.focusNode;g=g.focusOffset;try{f.nodeType,k.nodeType}catch(db){f=null;break a}var l=0,m=-1,q=-1,x=0,z=0,B=e,Q=null;b:for(;;){for(var v;;){B!==f||0!==h&&3!==B.nodeType||(m=l+h);B!==k||0!==g&&3!==B.nodeType||(q=l+g);3===B.nodeType&&(l+=B.nodeValue.length);if(null===(v=B.firstChild))break;Q=B;B=v}for(;;){if(B===e)break b;Q===f&&
++x===h&&(m=l);Q===k&&++z===g&&(q=l);if(null!==(v=B.nextSibling))break;B=Q;Q=B.parentNode}B=v}f=-1===m||-1===q?null:{start:m,end:q}}else f=null}f=f||{start:0,end:0}}else f=null;Ae={focusedElem:e,selectionRange:f};Hd=!1;for(U=d;null!==U;){e=!1;f=void 0;try{for(;null!==U;){if(U.effectTag&256)a:{var r=U.alternate;h=U;switch(h.tag){case 0:case 11:case 15:break a;case 1:if(h.effectTag&256&&null!==r){var u=r.memoizedProps,y=r.memoizedState,Y=h.stateNode,Th=Y.getSnapshotBeforeUpdate(h.elementType===h.type?
u:O(h.type,u),y);Y.__reactInternalSnapshotBeforeUpdate=Th}break a;case 3:case 5:case 6:case 4:case 17:break a;default:t("163")}}U=U.nextEffect}}catch(db){e=!0,f=db}e&&(null===U?t("178"):void 0,Jg(U,f),null!==U&&(U=U.nextEffect))}for(U=d;null!==U;){r=!1;u=void 0;try{for(;null!==U;){var w=U.effectTag;w&16&&pe(U.stateNode,"");if(w&128){var C=U.alternate;if(null!==C){var p=C.ref;null!==p&&("function"===typeof p?p(null):p.current=null)}}switch(w&14){case 2:Ng(U);U.effectTag&=-3;break;case 6:Ng(U);U.effectTag&=
-3;Og(U.alternate,U);break;case 4:Og(U.alternate,U);break;case 8:y=U,Lg(y),y.return=null,y.child=null,y.alternate&&(y.alternate.child=null,y.alternate.return=null)}U=U.nextEffect}}catch(db){r=!0,u=db}r&&(null===U?t("178"):void 0,Jg(U,u),null!==U&&(U=U.nextEffect))}p=Ae;C=Td();w=p.focusedElem;u=p.selectionRange;if(C!==w&&w&&w.ownerDocument&&Sd(w.ownerDocument.documentElement,w)){null!==u&&Ud(w)&&(C=u.start,p=u.end,void 0===p&&(p=C),"selectionStart"in w?(w.selectionStart=C,w.selectionEnd=Math.min(p,
w.value.length)):(p=(C=w.ownerDocument||document)&&C.defaultView||window,p.getSelection&&(p=p.getSelection(),y=w.textContent.length,r=Math.min(u.start,y),u=void 0===u.end?r:Math.min(u.end,y),!p.extend&&r>u&&(y=u,u=r,r=y),y=Rd(w,r),Y=Rd(w,u),y&&Y&&(1!==p.rangeCount||p.anchorNode!==y.node||p.anchorOffset!==y.offset||p.focusNode!==Y.node||p.focusOffset!==Y.offset)&&(C=C.createRange(),C.setStart(y.node,y.offset),p.removeAllRanges(),r>u?(p.addRange(C),p.extend(Y.node,Y.offset)):(C.setEnd(Y.node,Y.offset),
p.addRange(C))))));C=[];for(p=w;p=p.parentNode;)1===p.nodeType&&C.push({element:p,left:p.scrollLeft,top:p.scrollTop});"function"===typeof w.focus&&w.focus();for(w=0;w<C.length;w++)p=C[w],p.element.scrollLeft=p.left,p.element.scrollTop=p.top}Ae=null;Hd=!!ze;ze=null;a.current=b;for(U=d;null!==U;){d=!1;w=void 0;try{for(C=c;null!==U;){var Fb=U.effectTag;if(Fb&36){var Gb=U.alternate;p=U;r=C;switch(p.tag){case 0:case 11:case 15:break;case 1:var wc=p.stateNode;if(p.effectTag&4)if(null===Gb)wc.componentDidMount();
else{var ci=p.elementType===p.type?Gb.memoizedProps:O(p.type,Gb.memoizedProps);wc.componentDidUpdate(ci,Gb.memoizedState,wc.__reactInternalSnapshotBeforeUpdate)}var Cg=p.updateQueue;null!==Cg&&tf(p,Cg,wc,r);break;case 3:var Dg=p.updateQueue;if(null!==Dg){u=null;if(null!==p.child)switch(p.child.tag){case 5:u=p.child.stateNode;break;case 1:u=p.child.stateNode}tf(p,Dg,u,r)}break;case 5:var di=p.stateNode;null===Gb&&p.effectTag&4&&Be(p.type,p.memoizedProps)&&di.focus();break;case 6:break;case 4:break;
case 12:break;case 13:break;case 17:break;default:t("163")}}if(Fb&128){var Ic=U.ref;if(null!==Ic){var Eg=U.stateNode;switch(U.tag){case 5:var ce=Eg;break;default:ce=Eg}"function"===typeof Ic?Ic(ce):Ic.current=ce}}U=U.nextEffect}}catch(db){d=!0,w=db}d&&(null===U?t("178"):void 0,Jg(U,w),null!==U&&(U=U.nextEffect))}Yg=ah=!1;"function"===typeof Se&&Se(b.stateNode);Fb=b.expirationTime;b=b.childExpirationTime;b=b>Fb?b:Fb;0===b&&(Sg=null);a.expirationTime=b;a.finishedWork=null}
function Qg(a){null===uh?t("246"):void 0;uh.expirationTime=0;vh||(vh=!0,wh=a)}function Nh(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||W||Kh(1073741823,!1)}}function Oh(a,b){if(Z&&!xh){xh=!0;try{return a(b)}finally{xh=!1}}return a(b)}function Ph(a,b,c){if(kh)return a(b,c);Z||W||0===lh||(Kh(lh,!1),lh=0);var d=kh,e=Z;Z=kh=!0;try{return a(b,c)}finally{kh=d,(Z=e)||W||Kh(1073741823,!1)}}
function Qh(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===kd(c)&&1===c.tag?void 0:t("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(L(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);t("171");g=void 0}if(1===c.tag){var h=c.type;if(L(h)){c=Pe(c,h,g);break a}}c=g}else c=Je;null===b.context?b.context=c:b.pendingContext=c;b=e;e=mf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
Sf();of(f,e);Tf(f,d);return d}function Rh(a,b,c,d){var e=b.current,f=Qf();e=Rf(f,e);return Qh(a,b,c,e,d)}function Sh(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Uh(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Cb=function(a,b,c){switch(b){case "input":Dc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=La(d);e?void 0:t("90");Wb(d);Dc(d,e)}}}break;case "textarea":ie(a,c);break;case "select":b=c.value,null!=b&&fe(a,!!c.multiple,b,!1)}};
function Vh(a){var b=1073741822-25*(((1073741822-Qf()+500)/25|0)+1);b>=Wg&&(b=Wg-1);this._expirationTime=Wg=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Vh.prototype.render=function(a){this._defer?void 0:t("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Wh;Qh(a,b,null,c,d._onCommit);return d};
Vh.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Vh.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:t("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?t("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Hh(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Vh.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Wh(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Wh.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Wh.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?t("191",c):void 0;c()}}};
function Xh(a,b,c){b=M(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Xh.prototype.render=function(a,b){var c=this._internalRoot,d=new Wh;b=void 0===b?null:b;null!==b&&d.then(b);Rh(a,c,null,d._onCommit);return d};Xh.prototype.unmount=function(a){var b=this._internalRoot,c=new Wh;a=void 0===a?null:a;null!==a&&c.then(a);Rh(null,b,null,c._onCommit);return c};Xh.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Wh;c=void 0===c?null:c;null!==c&&e.then(c);Rh(b,d,a,e._onCommit);return e};
Xh.prototype.createBatch=function(){var a=new Vh(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Yh(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Kb=Nh;Lb=Ph;Mb=function(){W||0===lh||(Kh(lh,!1),lh=0)};
function Zh(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Xh(a,!1,b)}
function $h(a,b,c,d,e){Yh(c)?void 0:t("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Sh(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Zh(c,d);if("function"===typeof e){var h=e;e=function(){var a=Sh(f._internalRoot);h.call(a)}}Oh(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Sh(f._internalRoot)}
function ai(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Yh(b)?void 0:t("200");return Uh(a,b,null,c)}
var bi={createPortal:ai,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?t("188"):t("268",Object.keys(a)));a=nd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return $h(null,a,b,!0,c)},render:function(a,b,c){return $h(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?t("38"):void 0;return $h(a,b,c,!1,d)},unmountComponentAtNode:function(a){Yh(a)?
void 0:t("40");return a._reactRootContainer?(Oh(function(){$h(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return ai.apply(void 0,arguments)},unstable_batchedUpdates:Nh,unstable_interactiveUpdates:Ph,flushSync:function(a,b){W?t("187"):void 0;var c=Z;Z=!0;try{return qh(a,b)}finally{Z=c,Kh(1073741823,!1)}},unstable_flushControlled:function(a){var b=Z;Z=!0;try{qh(a)}finally{(Z=b)||W||Kh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ja,
Ka,La,Ca.injectEventPluginsByName,qa,Ra,function(a){za(a,Qa)},Ib,Jb,Jd,Ea]},unstable_createRoot:function(a,b){Yh(a)?void 0:t("299","unstable_createRoot");return new Xh(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Ve(n({},a,{findHostInstanceByFiber:function(a){a=nd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ia,bundleType:0,version:"16.6.3",rendererPackageName:"react-dom"});
var ei={default:bi},fi=ei&&bi||ei;module.exports=fi.default||fi;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(48);
} else {
  module.exports = require('./cjs/scheduler.development.js');
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=null,f=!1,h=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a)}}
function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var e=h,Q=l;h=a;l=b;try{var g=c()}finally{h=e,l=Q}if("function"===typeof g)if(g={callback:g,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=g.next=g.previous=g;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==d);null===c?c=d:c===d&&(d=g,p());b=c.previous;b.next=c.previous=g;g.next=c;g.previous=
b}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1}}}function t(a){m=!0;var b=f;f=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,f=b,null!==d?p():n=!1,v()}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w;
if("undefined"!==typeof window&&window._schedMock){var G=window._schedMock;r=G[0];q=G[1];w=G[2]}else if("undefined"===typeof window||"function"!==typeof window.addEventListener){var H=null,I=-1,J=function(a,b){if(null!==H){var c=H;H=null;try{I=b,c(a)}finally{I=-1}}};r=function(a,b){-1!==I?setTimeout(r,0,a,b):(H=a,setTimeout(J,b,!0,b),setTimeout(J,1073741823,!1,1073741823))};q=function(){H=null};w=function(){return!1};exports.unstable_now=function(){return-1===I?0:I}}else{"undefined"!==typeof console&&
("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T="__reactIdleCallback$"+Math.random().toString(36).slice(2);
window.addEventListener("message",function(a){if(a.source===window&&a.data===T){L=!1;a=K;var b=M;K=null;M=-1;var c=exports.unstable_now(),e=!1;if(0>=P-c)if(-1!==b&&b<=c)e=!0;else{N||(N=!0,E(U));K=a;M=b;return}if(null!==a){O=!0;try{a(e)}finally{O=!1}}}},!1);var U=function(a){if(null!==K){E(U);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,window.postMessage(T,"*"))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?window.postMessage(T,"*"):N||(N=!0,E(U))};q=function(){K=null;L=!1;M=-1}}
exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=h,e=k;h=a;k=exports.unstable_now();try{return b()}finally{h=c,k=e,v()}};
exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(h){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3}a={callback:a,priorityLevel:h,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var e=d;do{if(e.expirationTime>b){c=e;break}e=e.next}while(e!==d);null===c?c=d:c===d&&(d=a,p());
b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=h;return function(){var c=h,e=k;h=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{h=c,k=e,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return h};
exports.unstable_shouldYield=function(){return!f&&(null!==d&&d.expirationTime<l||w())};


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Roster__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Team__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_initialState__ = __webpack_require__(146);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    *, *:before, *:after {\n        box-sizing: border-box;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"],["\n    *, *:before, *:after {\n        box-sizing: border-box;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]),_templateObject2=_taggedTemplateLiteral(["\n    font-family: ",";\n    background: url(\"assets/images/bg.jpg\") center top;\n"],["\n    font-family: ",";\n    background: url(\"assets/images/bg.jpg\") center top;\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* injectGlobal */])(_templateObject);var AppWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,function(props){return props.theme.fontMinon;});var App=function(_Component){_inherits(App,_Component);function App(){var _ref;var _temp,_this,_ret;_classCallCheck(this,App);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=App.__proto__||Object.getPrototypeOf(App)).call.apply(_ref,[this].concat(args))),_this),_this.setAppState=function(updater,callback){_this.setState(updater,function(){if(callback){callback();}});},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(App,[{key:"componentWillMount",value:function componentWillMount(){// Set initial state
this.setState(__WEBPACK_IMPORTED_MODULE_6__data_initialState__["a" /* default */]);}// Wrapper around setState to pass down the chain
},{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* ThemeProvider */],{theme:__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */]},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AppWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */],{appState:this.state,setAppState:this.setAppState}),this.state.rosterIsActive?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Roster__["a" /* default */],{appState:this.state,setAppState:this.setAppState}):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Team__["a" /* default */],{appState:this.state,setAppState:this.setAppState})));}}]);return App;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(52);

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {/* eslint-disable */
	 true ? (module['exports'] = factory(null)) :
		typeof define === 'function' && define['amd'] ? define(factory(null)) :
			(window['stylis'] = factory(null))
}(/** @param {*=} options */function factory (options) {/* eslint-disable */

	'use strict'

	/**
	 * Notes
	 *
	 * The ['<method name>'] pattern is used to support closure compiler
	 * the jsdoc signatures are also used to the same effect
	 *
	 * ----
	 *
	 * int + int + int === n4 [faster]
	 *
	 * vs
	 *
	 * int === n1 && int === n2 && int === n3
	 *
	 * ----
	 *
	 * switch (int) { case ints...} [faster]
	 *
	 * vs
	 *
	 * if (int == 1 && int === 2 ...)
	 *
	 * ----
	 *
	 * The (first*n1 + second*n2 + third*n3) format used in the property parser
	 * is a simple way to hash the sequence of characters
	 * taking into account the index they occur in
	 * since any number of 3 character sequences could produce duplicates.
	 *
	 * On the other hand sequences that are directly tied to the index of the character
	 * resolve a far more accurate measure, it's also faster
	 * to evaluate one condition in a switch statement
	 * than three in an if statement regardless of the added math.
	 *
	 * This allows the vendor prefixer to be both small and fast.
	 */

	var nullptn = /^\0+/g /* matches leading null characters */
	var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
	var colonptn = /: */g /* splits animation rules */
	var cursorptn = /zoo|gra/ /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
	var elementptn = / *[\0] */g /* selector elements */
	var selectorptn = /,\r+?/g /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
	var invalidptn = /\W+/g /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
	var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/ /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available */
	var imgsrcptn = /([^-])(image-set\()/

	/* vendors */
	var webkit = '-webkit-'
	var moz = '-moz-'
	var ms = '-ms-'

	/* character codes */
	var SEMICOLON = 59 /* ; */
	var CLOSEBRACES = 125 /* } */
	var OPENBRACES = 123 /* { */
	var OPENPARENTHESES = 40 /* ( */
	var CLOSEPARENTHESES = 41 /* ) */
	var OPENBRACKET = 91 /* [ */
	var CLOSEBRACKET = 93 /* ] */
	var NEWLINE = 10 /* \n */
	var CARRIAGE = 13 /* \r */
	var TAB = 9 /* \t */
	var AT = 64 /* @ */
	var SPACE = 32 /*   */
	var AND = 38 /* & */
	var DASH = 45 /* - */
	var UNDERSCORE = 95 /* _ */
	var STAR = 42 /* * */
	var COMMA = 44 /* , */
	var COLON = 58 /* : */
	var SINGLEQUOTE = 39 /* ' */
	var DOUBLEQUOTE = 34 /* " */
	var FOWARDSLASH = 47 /* / */
	var GREATERTHAN = 62 /* > */
	var PLUS = 43 /* + */
	var TILDE = 126 /* ~ */
	var NULL = 0 /* \0 */
	var FORMFEED = 12 /* \f */
	var VERTICALTAB = 11 /* \v */

	/* special identifiers */
	var KEYFRAME = 107 /* k */
	var MEDIA = 109 /* m */
	var SUPPORTS = 115 /* s */
	var PLACEHOLDER = 112 /* p */
	var READONLY = 111 /* o */
	var IMPORT = 105 /* <at>i */
	var CHARSET = 99 /* <at>c */
	var DOCUMENT = 100 /* <at>d */
	var PAGE = 112 /* <at>p */

	var column = 1 /* current column */
	var line = 1 /* current line numebr */
	var pattern = 0 /* :pattern */

	var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1 /* vendor prefix */
	var escape = 1 /* escape :global() pattern */
	var compress = 0 /* compress output */
	var semicolon = 0 /* no/semicolon option */
	var preserve = 0 /* preserve empty selectors */

	/* empty reference */
	var array = []

	/* plugins */
	var plugins = []
	var plugged = 0
	var should = null

	/* plugin context */
	var POSTS = -2
	var PREPS = -1
	var UNKWN = 0
	var PROPS = 1
	var BLCKS = 2
	var ATRUL = 3

	/* plugin newline context */
	var unkwn = 0

	/* keyframe animation */
	var keyed = 1
	var key = ''

	/* selector namespace */
	var nscopealt = ''
	var nscope = ''

	/**
	 * Compile
	 *
	 * @param {Array<string>} parent
	 * @param {Array<string>} current
	 * @param {string} body
	 * @param {number} id
	 * @param {number} depth
	 * @return {string}
	 */
	function compile (parent, current, body, id, depth) {
		var bracket = 0 /* brackets [] */
		var comment = 0 /* comments /* // or /* */
		var parentheses = 0 /* functions () */
		var quote = 0 /* quotes '', "" */

		var first = 0 /* first character code */
		var second = 0 /* second character code */
		var code = 0 /* current character code */
		var tail = 0 /* previous character code */
		var trail = 0 /* character before previous code */
		var peak = 0 /* previous non-whitespace code */

		var counter = 0 /* count sequence termination */
		var context = 0 /* track current context */
		var atrule = 0 /* track @at-rule context */
		var pseudo = 0 /* track pseudo token index */
		var caret = 0 /* current character index */
		var format = 0 /* control character formating context */
		var insert = 0 /* auto semicolon insertion */
		var invert = 0 /* inverted selector pattern */
		var length = 0 /* generic length address */
		var eof = body.length /* end of file(length) */
		var eol = eof - 1 /* end of file(characters) */

		var char = '' /* current character */
		var chars = '' /* current buffer of characters */
		var child = '' /* next buffer of characters */
		var out = '' /* compiled body */
		var children = '' /* compiled children */
		var flat = '' /* compiled leafs */
		var selector /* generic selector address */
		var result /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret)

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
					}

					quote = parentheses = bracket = 0
					eof++
					eol++
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '')
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE: {
								break
							}
							default: {
								chars += body.charAt(caret)
							}
						}

						code = SEMICOLON
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA: {
							insert = 0
						}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE: {
							break
						}
						// valid
						default: {
							insert = 0
							length = caret
							first = code
							caret--
							code = SEMICOLON

							while (length < eof) {
								switch (body.charCodeAt(length++)) {
									case NEWLINE:
									case CARRIAGE:
									case SEMICOLON: {
										++caret
										code = first
										length = eof
										break
									}
									case COLON: {
										if (format > 0) {
											++caret
											code = first
										}
									}
									case OPENBRACES: {
										length = eof
									}
								}
							}
						}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES: {
						chars = chars.trim()
						first = chars.charCodeAt(0)
						counter = 1
						length = ++caret

						while (caret < eof) {
							switch (code = body.charCodeAt(caret)) {
								case OPENBRACES: {
									counter++
									break
								}
								case CLOSEBRACES: {
									counter--
									break
								}
								case FOWARDSLASH: {
									switch (second = body.charCodeAt(caret + 1)) {
										// /*, //
										case STAR:
										case FOWARDSLASH: {
											caret = delimited(second, caret, eol, body)
										}
									}
									break
								}
								// given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93
								case OPENBRACKET: {
									code++
								}
								// given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41
								case OPENPARENTHESES: {
									code++
								}
								// quote tail delimiter is identical to the head delimiter hence noop,
								// fallthrough clauses have been shifted to the correct tail delimiter
								case DOUBLEQUOTE:
								case SINGLEQUOTE: {
									while (caret++ < eol) {
										if (body.charCodeAt(caret) === code) {
											break
										}
									}
								}
							}

							if (counter === 0) {
								break
							}

							caret++
						}

						child = body.substring(length, caret)

						if (first === NULL) {
							first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
						}

						switch (first) {
							// @at-rule
							case AT: {
								if (format > 0) {
									chars = chars.replace(formatptn, '')
								}

								second = chars.charCodeAt(1)

								switch (second) {
									case DOCUMENT:
									case MEDIA:
									case SUPPORTS:
									case DASH: {
										selector = current
										break
									}
									default: {
										selector = array
									}
								}

								child = compile(current, selector, child, second, depth+1)
								length = child.length

								// preserve empty @at-rule
								if (preserve > 0 && length === 0) {
									length = chars.length
								}

								// execute plugins, @at-rule context
								if (plugged > 0) {
									selector = select(array, chars, invert)
									result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
									chars = selector.join('')

									if (result !== void 0) {
										if ((length = (child = result.trim()).length) === 0) {
											second = 0
											child = ''
										}
									}
								}

								if (length > 0) {
									switch (second) {
										case SUPPORTS: {
											chars = chars.replace(supportsptn, supports)
										}
										case DOCUMENT:
										case MEDIA:
										case DASH: {
											child = chars + '{' + child + '}'
											break
										}
										case KEYFRAME: {
											chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
											child = chars + '{' + child + '}'

											if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
												child = '@' + webkit + child + '@' + child
											} else {
												child = '@' + child
											}
											break
										}
										default: {
											child = chars + child

											if (id === PAGE) {
												child = (out += child, '')
											}
										}
									}
								} else {
									child = ''
								}

								break
							}
							// selector
							default: {
								child = compile(current, select(current, chars, invert), child, id, depth+1)
							}
						}

						children += child

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						atrule = 0
						chars = ''
						child = ''
						code = body.charCodeAt(++caret)
						break
					}
					case CLOSEBRACES:
					case SEMICOLON: {
						chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

						if ((length = chars.length) > 1) {
							// monkey-patch missing colon
							if (pseudo === 0) {
								first = chars.charCodeAt(0)

								// first character is a letter or dash, buffer has a space character
								if ((first === DASH || first > 96 && first < 123)) {
									length = (chars = chars.replace(' ', ':')).length
								}
							}

							// execute plugins, property context
							if (plugged > 0) {
								if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
									if ((length = (chars = result.trim()).length) === 0) {
										chars = '\0\0'
									}
								}
							}

							first = chars.charCodeAt(0)
							second = chars.charCodeAt(1)

							switch (first) {
								case NULL: {
									break
								}
								case AT: {
									if (second === IMPORT || second === CHARSET) {
										flat += chars + body.charAt(caret)
										break
									}
								}
								default: {
									if (chars.charCodeAt(length-1) === COLON) {
										break
									}

									out += property(chars, first, second, chars.charCodeAt(2))
								}
							}
						}

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						chars = ''
						code = body.charCodeAt(++caret)
						break
					}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE: {
					// auto insert semicolon
					if (comment + quote + parentheses + bracket + semicolon === 0) {
						// valid non-whitespace characters that
						// may precede a newline
						switch (peak) {
							case CLOSEPARENTHESES:
							case SINGLEQUOTE:
							case DOUBLEQUOTE:
							case AT:
							case TILDE:
							case GREATERTHAN:
							case STAR:
							case PLUS:
							case FOWARDSLASH:
							case DASH:
							case COLON:
							case COMMA:
							case SEMICOLON:
							case OPENBRACES:
							case CLOSEBRACES: {
								break
							}
							default: {
								// current buffer has a colon
								if (pseudo > 0) {
									insert = 1
								}
							}
						}
					}

					// terminate line comment
					if (comment === FOWARDSLASH) {
						comment = 0
					} else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
						format = 1
						chars += '\0'
					}

					// execute plugins, newline context
					if (plugged * unkwn > 0) {
						proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
					}

					// next line, reset column position
					column = 1
					line++
					break
				}
				case SEMICOLON:
				case CLOSEBRACES: {
					if (comment + quote + parentheses + bracket === 0) {
						column++
						break
					}
				}
				default: {
					// increment column position
					column++

					// current character
					char = body.charAt(caret)

					// remove comments, escape functions, strings, attributes and prepare selectors
					switch (code) {
						case TAB:
						case SPACE: {
							if (quote + bracket + comment === 0) {
								switch (tail) {
									case COMMA:
									case COLON:
									case TAB:
									case SPACE: {
										char = ''
										break
									}
									default: {
										if (code !== SPACE) {
											char = ' '
										}
									}
								}
							}
							break
						}
						// escape breaking control characters
						case NULL: {
							char = '\\0'
							break
						}
						case FORMFEED: {
							char = '\\f'
							break
						}
						case VERTICALTAB: {
							char = '\\v'
							break
						}
						// &
						case AND: {
							// inverted selector pattern i.e html &
							if (quote + comment + bracket === 0 && cascade > 0) {
								invert = 1
								format = 1
								char = '\f' + char
							}
							break
						}
						// ::p<l>aceholder, l
						// :read-on<l>y, l
						case 108: {
							if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
								switch (caret - pseudo) {
									// ::placeholder
									case 2: {
										if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
											pattern = tail
										}
									}
									// :read-only
									case 8: {
										if (trail === READONLY) {
											pattern = trail
										}
									}
								}
							}
							break
						}
						// :<pattern>
						case COLON: {
							if (quote + comment + bracket === 0) {
								pseudo = caret
							}
							break
						}
						// selectors
						case COMMA: {
							if (comment + parentheses + quote + bracket === 0) {
								format = 1
								char += '\r'
							}
							break
						}
						// quotes
						case DOUBLEQUOTE:
						case SINGLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
							}
							break
						}
						// attributes
						case OPENBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket++
							}
							break
						}
						case CLOSEBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket--
							}
							break
						}
						// functions
						case CLOSEPARENTHESES: {
							if (quote + comment + bracket === 0) {
								parentheses--
							}
							break
						}
						case OPENPARENTHESES: {
							if (quote + comment + bracket === 0) {
								if (context === 0) {
									switch (tail*2 + trail*3) {
										// :matches
										case 533: {
											break
										}
										// :global, :not, :nth-child etc...
										default: {
											counter = 0
											context = 1
										}
									}
								}

								parentheses++
							}
							break
						}
						case AT: {
							if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
								atrule = 1
							}
							break
						}
						// block/line comments
						case STAR:
						case FOWARDSLASH: {
							if (quote + bracket + parentheses > 0) {
								break
							}

							switch (comment) {
								// initialize line/block comment context
								case 0: {
									switch (code*2 + body.charCodeAt(caret+1)*3) {
										// //
										case 235: {
											comment = FOWARDSLASH
											break
										}
										// /*
										case 220: {
											length = caret
											comment = STAR
											break
										}
									}
									break
								}
								// end block comment context
								case STAR: {
									if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
										// /*<!> ... */, !
										if (body.charCodeAt(length+2) === 33) {
											out += body.substring(length, caret+1)
										}
										char = ''
										comment = 0
									}
								}
							}
						}
					}

					// ignore comment blocks
					if (comment === 0) {
						// aggressive isolation mode, divide each individual selector
						// including selectors in :not function but excluding selectors in :global function
						if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
							switch (code) {
								case COMMA:
								case TILDE:
								case GREATERTHAN:
								case PLUS:
								case CLOSEPARENTHESES:
								case OPENPARENTHESES: {
									if (context === 0) {
										// outside of an isolated context i.e nth-child(<...>)
										switch (tail) {
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												char = char + '\0'
												break
											}
											default: {
												char = '\0' + char + (code === COMMA ? '' : '\0')
											}
										}
										format = 1
									} else {
										// within an isolated context, sleep untill it's terminated
										switch (code) {
											case OPENPARENTHESES: {
												// :globa<l>(
												if (pseudo + 7 === caret && tail === 108) {
													pseudo = 0
												}
												context = ++counter
												break
											}
											case CLOSEPARENTHESES: {
												if ((context = --counter) === 0) {
													format = 1
													char += '\0'
												}
												break
											}
										}
									}
									break
								}
								case TAB:
								case SPACE: {
									switch (tail) {
										case NULL:
										case OPENBRACES:
										case CLOSEBRACES:
										case SEMICOLON:
										case COMMA:
										case FORMFEED:
										case TAB:
										case SPACE:
										case NEWLINE:
										case CARRIAGE: {
											break
										}
										default: {
											// ignore in isolated contexts
											if (context === 0) {
												format = 1
												char += '\0'
											}
										}
									}
								}
							}
						}

						// concat buffer of characters
						chars += char

						// previous non-whitespace character code
						if (code !== SPACE && code !== TAB) {
							peak = code
						}
					}
				}
			}

			// tail character codes
			trail = tail
			tail = code

			// visit every character
			caret++
		}

		length = out.length

		// preserve empty selector
 		if (preserve > 0) {
 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
					length = current.join(',').length + 2
 				}
 			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children
				}
			}

			out = selector.join(',') + '{' + out + '}'

			if (prefix*pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2))
					pattern = 0

				switch (pattern) {
					// ::read-only
					case READONLY: {
						out = out.replace(readonlyptn, ':'+moz+'$1')+out
						break
					}
					// ::placeholder
					case PLACEHOLDER: {
						out = (
							out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
							out.replace(plcholdrptn, '::' + moz + '$1') +
							out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
						)
						break
					}
				}

				pattern = 0
			}
		}

		return flat + out + children
	}

	/**
	 * Select
	 *
	 * @param {Array<string>} parent
	 * @param {string} current
	 * @param {number} invert
	 * @return {Array<string>}
	 */
	function select (parent, current, invert) {
		var selectors = current.trim().split(selectorptn)
		var out = selectors

		var length = selectors.length
		var l = parent.length

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1: {
				for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
					out[i] = scope(selector, out[i], invert, l).trim()
				}
				break
			}
			// >2 parent selectors, nested
			default: {
				for (var i = 0, j = 0, out = []; i < length; ++i) {
					for (var k = 0; k < l; ++k) {
						out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
					}
				}
			}
		}

		return out
	}

	/**
	 * Scope
	 *
	 * @param {string} parent
	 * @param {string} current
	 * @param {number} invert
	 * @param {number} level
	 * @return {string}
	 */
	function scope (parent, current, invert, level) {
		var selector = current
		var code = selector.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0)
		}

		switch (code) {
			// &
			case AND: {
				switch (cascade + level) {
					case 0:
					case 1: {
						if (parent.trim().length === 0) {
							break
						}
					}
					default: {
						return selector.replace(andptn, '$1'+parent.trim())
					}
				}
				break
			}
			// :
			case COLON: {
				switch (selector.charCodeAt(1)) {
					// g in :global
					case 103: {
						if (escape > 0 && cascade > 0) {
							return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
						}
						break
					}
					default: {
						// :hover
						return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
					}
				}
			}
			default: {
				// html &
				if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
					return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
				}
			}
		}

		return parent + selector
	}

	/**
	 * Property
	 *
	 * @param {string} input
	 * @param {number} first
	 * @param {number} second
	 * @param {number} third
	 * @return {string}
	 */
	function property (input, first, second, third) {
		var index = 0
		var out = input + ';'
		var hash = (first*2) + (second*3) + (third*4)
		var cache

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out)
		} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
			return out
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015: {
				// text-shadow/text-align/text-transform, a
				return out.charCodeAt(10) === 97 ? webkit + out + out : out
			}
			// filter/fill f, i, l
			case 951: {
				// filter, t
				return out.charCodeAt(3) === 116 ? webkit + out + out : out
			}
			// color/column, c, o, l
			case 963: {
				// column, n
				return out.charCodeAt(5) === 110 ? webkit + out + out : out
			}
			// box-decoration-break, b, o, x
			case 1009: {
				if (out.charCodeAt(4) !== 100) {
					break
				}
			}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942: {
				return webkit + out + out
			}
			// appearance: a, p, p
			case 978: {
				return webkit + out + moz + out + out
			}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983: {
				return webkit + out + moz + out + ms + out + out
			}
			// background/backface-visibility, b, a, c
			case 883: {
				// backface-visibility, -
				if (out.charCodeAt(8) === DASH) {
					return webkit + out + out
				}

				// image-set(...)
				if (out.indexOf('image-set(', 11) > 0) {
					return out.replace(imgsrcptn, '$1'+webkit+'$2') + out
				}

				return out
			}
			// flex: f, l, e
			case 932: {
				if (out.charCodeAt(4) === DASH) {
					switch (out.charCodeAt(5)) {
						// flex-grow, g
						case 103: {
							return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
						}
						// flex-shrink, s
						case 115: {
							return webkit + out + ms + out.replace('shrink', 'negative') + out
						}
						// flex-basis, b
						case 98: {
							return webkit + out + ms + out.replace('basis', 'preferred-size') + out
						}
					}
				}

				return webkit + out + ms + out + out
			}
			// order: o, r, d
			case 964: {
				return webkit + out + ms + 'flex' + '-' + out + out
			}
			// justify-items/justify-content, j, u, s
			case 1023: {
				// justify-content, c
				if (out.charCodeAt(8) !== 99) {
					break
				}

				cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
				return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
			}
			// cursor, c, u, r
			case 1005: {
				return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
			}
			// writing-mode, w, r, i
			case 1000: {
				cache = out.substring(13).trim()
				index = cache.indexOf('-') + 1

				switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
					// vertical-lr
					case 226: {
						cache = out.replace(writingptn, 'tb')
						break
					}
					// vertical-rl
					case 232: {
						cache = out.replace(writingptn, 'tb-rl')
						break
					}
					// horizontal-tb
					case 220: {
						cache = out.replace(writingptn, 'lr')
						break
					}
					default: {
						return out
					}
				}

				return webkit + out + ms + cache + out
			}
			// position: sticky
			case 1017: {
				if (out.indexOf('sticky', 9) === -1) {
					return out
				}
			}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975: {
				index = (out = input).length - 10
				cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()

				switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
					// inline-
					case 203: {
						// inline-box
						if (cache.charCodeAt(8) < 111) {
							break
						}
					}
					// inline-box/sticky
					case 115: {
						out = out.replace(cache, webkit+cache)+';'+out
						break
					}
					// inline-flex
					// flex
					case 207:
					case 102: {
						out = (
							out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
							out.replace(cache, webkit+cache)+';'+
							out.replace(cache, ms+cache+'box')+';'+
							out
						)
					}
				}

				return out + ';'
			}
			// align-items, align-center, align-self: a, l, i, -
			case 938: {
				if (out.charCodeAt(5) === DASH) {
					switch (out.charCodeAt(6)) {
						// align-items, i
						case 105: {
							cache = out.replace('-items', '')
							return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
						}
						// align-self, s
						case 115: {
							return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
						}
						// align-content
						default: {
							return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
						}
					}
				}
				break
			}
			// min/max
			case 973:
			case 989: {
				// min-/max- height/width/block-size/inline-size
				if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
					break
				}
			}
			// height/width: min-content / width: max-content
			case 931:
			case 953: {
				if (dimensionptn.test(input) === true) {
					// stretch
					if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
						return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
					else
						return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
				}
				break
			}
			// transform, transition: t, r, a
			case 962: {
				out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

				// transitions
				if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
					return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
				}

				break
			}
		}

		return out
	}

	/**
	 * Vendor
	 *
	 * @param {string} content
	 * @param {number} context
	 * @return {boolean}
	 */
	function vendor (content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{')
		var key = content.substring(0, context !== 3 ? index : 10)
		var value = content.substring(index + 1, content.length - 1)

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
	}

	/**
	 * Supports
	 *
	 * @param {string} match
	 * @param {string} group
	 * @return {string}
	 */
	function supports (match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))

		return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
	}

	/**
	 * Animation
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function animation (input) {
		var length = input.length
		var index = input.indexOf(':', 9) + 1
		var declare = input.substring(0, index).trim()
		var out = input.substring(index, length-1).trim()

		switch (input.charCodeAt(9)*keyed) {
			case 0: {
				break
			}
			// animation-*, -
			case DASH: {
				// animation-name, n
				if (input.charCodeAt(10) !== 110) {
					break
				}
			}
			// animation/animation-name
			default: {
				// split in case of multiple animations
				var list = out.split((out = '', animationptn))

				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i]
					var items = value.split(propertiesptn)

					while (value = items[index]) {
						var peak = value.charCodeAt(0)

						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key
										}
									}
								}
							}
						}

						items[index++] = value
					}

					out += (i === 0 ? '' : ',') + items.join(' ')
				}
			}
		}

		out = declare + out + ';'

		if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
			return webkit + out + out

		return out
	}

	/**
	 * Isolate
	 *
	 * @param {Array<string>} current
	 */
	function isolate (current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn)
			var out = ''

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue
				}

				tail = out.charCodeAt(out.length-1)
				code = element.charCodeAt(0)
				padding = ''

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:  {
							break
						}
						default: {
							padding = ' '
						}
					}
				}

				switch (code) {
					case AND: {
						element = padding + nscopealt
					}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES: {
						break
					}
					case OPENBRACKET: {
						element = padding + element + nscopealt
						break
					}
					case COLON: {
						switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
							// :global
							case 530: {
								if (escape > 0) {
									element = padding + element.substring(8, size - 1)
									break
								}
							}
							// :hover, :nth-child(), ...
							default: {
								if (j < 1 || elements[j-1].length < 1) {
									element = padding + nscopealt + element
								}
							}
						}
						break
					}
					case COMMA: {
						padding = ''
					}
					default: {
						if (size > 1 && element.indexOf(':') > 0) {
							element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
						} else {
							element = padding + element + nscopealt
						}
					}
				}

				out += element
			}

			selector[i] = out.replace(formatptn, '').trim()
		}

		return selector
	}

	/**
	 * Proxy
	 *
	 * @param {number} context
	 * @param {string} content
	 * @param {Array<string>} selectors
	 * @param {Array<string>} parents
	 * @param {number} line
	 * @param {number} column
	 * @param {number} length
	 * @param {number} id
	 * @param {number} depth
	 * @param {number} at
	 * @return {(string|void|*)}
	 */
	function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null: {
					break
				}
				default: {
					out = next
				}
			}
		}
		if (out !== content) {
		  return out
		}
	}

	/**
	 * @param {number} code
	 * @param {number} index
	 * @param {number} length
	 * @param {string} body
	 * @return {number}
	 */
	function delimited (code, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				// /*
				case FOWARDSLASH: {
					if (code === STAR) {
						if (body.charCodeAt(i - 1) === STAR &&  index + 2 !== i) {
							return i + 1
						}
					}
					break
				}
				// //
				case NEWLINE: {
					if (code === FOWARDSLASH) {
						return i + 1
					}
				}
			}
		}

		return i
	}

	/**
	 * @param {number} type
	 * @param {number} index
	 * @param {number} length
	 * @param {number} find
	 * @param {string} body
	 * @return {number}
	 */
	function match (type, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				case type: {
					return i
				}
			}
		}

		return i
	}

	/**
	 * Minify
	 *
	 * @param {(string|*)} output
	 * @return {string}
	 */
	function minify (output) {
		return output
			.replace(formatptn, '')
			.replace(beforeptn, '')
			.replace(afterptn, '$1')
			.replace(tailptn, '$1')
			.replace(whiteptn, ' ')
	}

	/**
	 * Use
	 *
	 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
	 */
	function use (plugin) {
		switch (plugin) {
			case void 0:
			case null: {
				plugged = plugins.length = 0
				break
			}
			default: {
				if (typeof plugin === 'function') {
					plugins[plugged++] = plugin
				}	else if (typeof plugin === 'object') {
					for (var i = 0, length = plugin.length; i < length; ++i) {
						use(plugin[i])
					}
				} else {
					unkwn = !!plugin|0
				}
			}
 		}

 		return use
	}

	/**
	 * Set
	 *
	 * @param {*} options
	 */
	function set (options) {
		for (var name in options) {
			var value = options[name]
			switch (name) {
				case 'keyframe': keyed = value|0; break
				case 'global': escape = value|0; break
				case 'cascade': cascade = value|0; break
				case 'compress': compress = value|0; break
				case 'semicolon': semicolon = value|0; break
				case 'preserve': preserve = value|0; break
				case 'prefix':
					should = null

					if (!value) {
						prefix = 0
					} else if (typeof value !== 'function') {
						prefix = 1
					} else {
						prefix = 2
						should = value
					}
			}
		}

		return set
	}

	/**
	 * Stylis
	 *
	 * @param {string} selector
	 * @param {string} input
	 * @return {*}
	 */
	function stylis (selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector)
		}

		// setup
		var ns = selector
		var code = ns.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0)
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns
		} else {
			nscopealt = ns
		}

		var selectors = [nscope]
		var result

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)

			if (result !== void 0 && typeof result === 'string') {
				input = result
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0)

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)

			// bypass minification
			if (result !== void 0 && typeof(output = result) !== 'string') {
				code = 0
			}
		}

		// reset
		key = ''
		nscope = ''
		nscopealt = ''
		pattern = 0
		line = 1
		column = 1

		return compress*code === 0 ? output : minify(output)
	}

	stylis['use'] = use
	stylis['set'] = set

	if (options !== void 0) {
		set(options)
	}

	return stylis
}));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		typeof define === 'function' && define['amd'] ? define(factory()) :
			(window['stylisRuleSheet'] = factory())
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(56);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,r=b?Symbol.for("react.memo"):
60115,t=b?Symbol.for("react.lazy"):60116;function u(a){if("object"===typeof a&&null!==a){var q=a.$$typeof;switch(q){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return q}}case d:return q}}}function v(a){return u(a)===m}exports.typeOf=u;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;
exports.Profiler=g;exports.Portal=d;exports.StrictMode=f;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||u(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return u(a)===k};exports.isContextProvider=function(a){return u(a)===h};
exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return u(a)===n};exports.isFragment=function(a){return u(a)===e};exports.isProfiler=function(a){return u(a)===g};exports.isPortal=function(a){return u(a)===d};exports.isStrictMode=function(a){return u(a)===f};


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Toolbar__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FactionSelect__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Logo__ = __webpack_require__(102);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    background: url(\"assets/images/dark-grey-bg.jpg\");\n    color: white;\n    padding: 0.8em;\n    font-size: 1em;\n"],["\n    background: url(\"assets/images/dark-grey-bg.jpg\");\n    color: white;\n    padding: 0.8em;\n    font-size: 1em;\n"]),_templateObject2=_taggedTemplateLiteral(["\n    max-width: ",";\n    margin: 0 auto;\n    display: flex;\n    text-align: center;\n\n    button {\n        position: relative;\n        margin: 0;\n        padding: 0.3em 0.2em;\n        width: 50%;\n\n        background: rgba(0, 0, 0, 0.3);\n        border-radius: 0;\n        border: solid 2px ",";\n\n        font-family: ",";\n        font-size: 1.2em;\n        text-transform: uppercase;\n        color: ",";\n        transition: all 0.2s ease;\n\n        cursor: pointer;\n\n        &::before {\n            content: \"\";\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            display: block;\n            width: 100%;\n            height: 0;\n            background: ",";\n            transition: all 0.2s ease;\n        }\n\n        span {\n            position: relative;\n            z-index: 1;\n        }\n\n        &:first-child {\n            margin-right: 0.5em;\n        }\n\n        &:focus {\n            outline: 0;\n        }\n    }\n\n    &.toggle--team {\n        .button--team,\n        .button--roster:hover {\n            color: black;\n            &::before {\n                height: 100%;\n            }\n        }\n    }\n\n    &.toggle--roster {\n        .button--roster,\n        .button--team:hover {\n            color: black;\n            &::before {\n                height: 100%;\n            }\n        }\n    }\n"],["\n    max-width: ",";\n    margin: 0 auto;\n    display: flex;\n    text-align: center;\n\n    button {\n        position: relative;\n        margin: 0;\n        padding: 0.3em 0.2em;\n        width: 50%;\n\n        background: rgba(0, 0, 0, 0.3);\n        border-radius: 0;\n        border: solid 2px ",";\n\n        font-family: ",";\n        font-size: 1.2em;\n        text-transform: uppercase;\n        color: ",";\n        transition: all 0.2s ease;\n\n        cursor: pointer;\n\n        &::before {\n            content: \"\";\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            display: block;\n            width: 100%;\n            height: 0;\n            background: ",";\n            transition: all 0.2s ease;\n        }\n\n        span {\n            position: relative;\n            z-index: 1;\n        }\n\n        &:first-child {\n            margin-right: 0.5em;\n        }\n\n        &:focus {\n            outline: 0;\n        }\n    }\n\n    &.toggle--team {\n        .button--team,\n        .button--roster:hover {\n            color: black;\n            &::before {\n                height: 100%;\n            }\n        }\n    }\n\n    &.toggle--roster {\n        .button--roster,\n        .button--team:hover {\n            color: black;\n            &::before {\n                height: 100%;\n            }\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var HeaderWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);var TeamRosterToggle=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].maxWidth,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var Header=function(_Component){_inherits(Header,_Component);function Header(){_classCallCheck(this,Header);return _possibleConstructorReturn(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));}_createClass(Header,[{key:"toggleTeamRoster",value:function toggleTeamRoster(toggle){var curAppState=this.props.appState;if(toggle==="team"){curAppState.rosterIsActive=false;}else{curAppState.rosterIsActive=true;}this.props.setAppState(curAppState);}},{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeaderWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Logo__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Toolbar__["a" /* default */],{appState:this.props.appState,setAppState:this.props.setAppState}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TeamRosterToggle,{className:this.props.appState.rosterIsActive?"toggle--roster":"toggle--team"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:function onClick(){return _this2.toggleTeamRoster("roster");},className:"button--roster"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,"登记册")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:function onClick(){return _this2.toggleTeamRoster("team");},className:"button--team"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,"Kill Team"))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FactionSelect__["a" /* default */],{appState:this.props.appState,setAppState:this.props.setAppState}));}}]);return Header;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SaveLoad__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Export__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Copy__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Counts__ = __webpack_require__(100);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    padding: 0 0 0.5em 0;\n    max-width: ",";\n    margin: 0 auto;\n\n    button {\n        color: ",";\n        border: solid 2px ",";\n        border-radius: 0;\n        background: transparent;\n        font-family: ",";\n        text-transform: uppercase;\n        margin-right: 0.5em;\n\n        &:focus {\n            outline: none;\n        }\n    }\n\n    .toolbar__inner {\n        background: grey;\n    }\n"],["\n    padding: 0 0 0.5em 0;\n    max-width: ",";\n    margin: 0 auto;\n\n    button {\n        color: ",";\n        border: solid 2px ",";\n        border-radius: 0;\n        background: transparent;\n        font-family: ",";\n        text-transform: uppercase;\n        margin-right: 0.5em;\n\n        &:focus {\n            outline: none;\n        }\n    }\n\n    .toolbar__inner {\n        background: grey;\n    }\n"]);function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var ToolbarWrap=__WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].maxWidth,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].darkGrey,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].darkGrey,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].fontHeader);var Toolbar=function(_Component){_inherits(Toolbar,_Component);function Toolbar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Toolbar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Toolbar.__proto__||Object.getPrototypeOf(Toolbar)).call.apply(_ref,[this].concat(args))),_this),_this.toggle=function(event){var eventID=event.target.id;_this.props.setAppState(_defineProperty({},eventID,!_this.props.appState[eventID]));},_temp),_possibleConstructorReturn(_this,_ret);}// Toggle relavent modal to show
_createClass(Toolbar,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ToolbarWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Counts__["a" /* default */],{appState:this.props.appState}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{id:"copyIsActive",className:"topLine__button",onClick:this.toggle},"复制/分享"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{id:"exportIsActive",className:"topLine__button",onClick:this.toggle},"导出/打印"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{id:"saveLoadIsActive",className:"topLine__button",onClick:this.toggle},"保存/载入")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_modal___default.a,{className:"KTCR__modal",overlayClassName:"KTCR__modal-overlay",isOpen:this.props.appState.saveLoadIsActive,appElement:document.querySelector("#root"),onRequestClose:this.toggle,contentLabel:"Save/Load Modal"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SaveLoad__["a" /* default */],{appState:this.props.appState,setAppState:this.props.setAppState,closeSaveLoadModal:this.toggle})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_modal___default.a,{className:"KTCR__modal",overlayClassName:"KTCR__modal-overlay",isOpen:this.props.appState.exportIsActive,appElement:document.querySelector("#root"),onRequestClose:this.toggle,contentLabel:"Save/Load Modal"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Export__["a" /* default */],{appState:this.props.appState,setAppState:this.props.setAppState,closeExportModal:this.toggle})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_modal___default.a,{className:"KTCR__modal",overlayClassName:"KTCR__modal-overlay",isOpen:this.props.appState.copyIsActive,appElement:document.querySelector("#root"),onRequestClose:this.toggle,contentLabel:"Save/Load Modal"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Copy__["a" /* default */],{appState:this.props.appState,closeCopyModal:this.toggle})));}}]);return Toolbar;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Toolbar);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(61);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(62);

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(18);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(10);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(68);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _reactDom2.default.createPortal !== undefined;
var createPortal = isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      parent.removeChild(_this.node);
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

exports.default = Modal;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(63);

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(64);

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(18);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(67);

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(10);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen();
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (false) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.afterClose();
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        "div",
        {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        },
        _react2.default.createElement(
          "div",
          _extends({
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {})),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(17);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(17);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  var target;
  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  event.preventDefault();

  tabbable[x].focus();
}
module.exports = exports["default"];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (false) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n";
    }

    classes = document.body.className;

    // eslint-disable-next-line max-len
    buffer += "\n\ndoc.body (" + classes + "):\n";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
    }

    buffer += "\n";

    // eslint-disable-next-line no-console
    console.log(buffer);
  }
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    .save-load__header-text {\n        padding: 0.8em;\n        margin: 0;\n        font-family: ",";\n        text-transform: uppercase;\n        font-weight: normal;\n        font-size: 1.6em;\n        text-align: center;\n    }\n\n    .save-load__close-button {\n        position: absolute;\n        top: 0;\n        right: 0;\n        font-size: 1.5em;\n        font-family: sans-serif;\n        border: 0;\n        background: none;\n    }\n\n    .save-load__tooltip {\n        background: ",";\n        padding: 1em;\n        text-align: center;\n        font-family: ",";\n        font-size: 1em;\n        line-height: 1.2em;\n    }\n\n    .save-load__heading {\n        display: block;\n        font-family: ",";\n        text-transform: uppercase;\n        padding: 0 0 0.4em;\n    }\n\n    .save-load__body {\n        padding: 1em;\n    }\n\n    .save-load__line-item {\n        padding: 0.5em 0.2em;\n        border-bottom: solid 1px ",";\n    }\n\n    .save-load__save-button,\n    .save-load__line-item button {\n        color: ",";\n        border: solid 2px ",";\n        border-radius: 0;\n        background: white;\n        font-family: ",";\n        text-transform: uppercase;\n        margin-right: 0.5em;\n    }\n\n    .save-load__line-name {\n        display: block;\n        font-weight: bold;\n        padding-bottom: 0.3em;\n    }\n\n    .save-load__save-input {\n        display: block;\n        border: solid 1px black;\n        width: 100%;\n        padding: 0.5em;\n        margin-bottom: 0.5em;\n\n        &:focus {\n            outline: none;\n            border-color: ",";\n        }\n    }\n"],["\n    .save-load__header-text {\n        padding: 0.8em;\n        margin: 0;\n        font-family: ",";\n        text-transform: uppercase;\n        font-weight: normal;\n        font-size: 1.6em;\n        text-align: center;\n    }\n\n    .save-load__close-button {\n        position: absolute;\n        top: 0;\n        right: 0;\n        font-size: 1.5em;\n        font-family: sans-serif;\n        border: 0;\n        background: none;\n    }\n\n    .save-load__tooltip {\n        background: ",";\n        padding: 1em;\n        text-align: center;\n        font-family: ",";\n        font-size: 1em;\n        line-height: 1.2em;\n    }\n\n    .save-load__heading {\n        display: block;\n        font-family: ",";\n        text-transform: uppercase;\n        padding: 0 0 0.4em;\n    }\n\n    .save-load__body {\n        padding: 1em;\n    }\n\n    .save-load__line-item {\n        padding: 0.5em 0.2em;\n        border-bottom: solid 1px ",";\n    }\n\n    .save-load__save-button,\n    .save-load__line-item button {\n        color: ",";\n        border: solid 2px ",";\n        border-radius: 0;\n        background: white;\n        font-family: ",";\n        text-transform: uppercase;\n        margin-right: 0.5em;\n    }\n\n    .save-load__line-name {\n        display: block;\n        font-weight: bold;\n        padding-bottom: 0.3em;\n    }\n\n    .save-load__save-input {\n        display: block;\n        border: solid 1px black;\n        width: 100%;\n        padding: 0.5em;\n        margin-bottom: 0.5em;\n\n        &:focus {\n            outline: none;\n            border-color: ",";\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var SaveLoadWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontBody,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].grey,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].darkGrey,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].darkGrey,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var SaveLoad=function(_Component){_inherits(SaveLoad,_Component);function SaveLoad(){var _ref;var _temp,_this,_ret;_classCallCheck(this,SaveLoad);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SaveLoad.__proto__||Object.getPrototypeOf(SaveLoad)).call.apply(_ref,[this].concat(args))),_this),_this.updateSaveName=function(event){_this.setState({saveName:event.target.value});},_this.saveRoster=function(event){// Add new roster to obj and save to localStorage
var savedRosters=_this.state.savedRosters;var nameExists=_this.state.savedRosters.filter(function(roster){return roster.name===_this.state.saveName;})[0];if(nameExists){savedRosters.map(function(roster){if(roster.name===_this.state.saveName){roster.data=_this.props.appState;}return roster;});}else{savedRosters.push({name:_this.state.saveName,data:_this.props.appState});}_this.setState({savedRosters:savedRosters});localStorage.setItem("rosters",JSON.stringify(savedRosters));_this.props.closeSaveLoadModal({target:{id:"saveLoadIsActive"}});},_this.loadRoster=function(event){var rosterToLoad=_this.state.savedRosters.filter(function(roster){return roster.name===event.target.id;})[0];_this.props.setAppState(rosterToLoad.data);_this.props.closeSaveLoadModal({target:{id:"saveLoadIsActive"}});},_this.overwriteRoster=function(event){var savedRosters=_this.state.savedRosters.map(function(roster){if(roster.name===event.target.id){roster.data=_this.props.appState;}return roster;});_this.setState({savedRosters:savedRosters});localStorage.setItem("rosters",JSON.stringify(savedRosters));_this.props.closeSaveLoadModal({target:{id:"saveLoadIsActive"}});},_this.deleteRoster=function(event){var newRosters=_this.state.savedRosters.filter(function(roster){return roster.name!==event.target.id;});_this.setState({savedRosters:newRosters});localStorage.setItem("rosters",JSON.stringify(newRosters));},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SaveLoad,[{key:"componentWillMount",value:function componentWillMount(){// get rosters from localstorage & save to local state.
var savedRosters=[];if(localStorage.getItem("rosters")){savedRosters=JSON.parse(localStorage.getItem("rosters"));}this.setState({saveName:this.props.appState.name,savedRosters:savedRosters});}// Update the name to call the roster in localStorage to state so it can be
// read back later
// When a user wants to save a new roster, add it into localStorage
// Laad Roster
// Overwrite
// Delete
},{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SaveLoadWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"save-load__inner"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"save-load__header"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2",{className:"save-load__header-text"},"Save/Load"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{id:"saveLoadIsActive",className:"save-load__close-button",onClick:this.props.closeSaveLoadModal},"\xD7"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"save-load__tooltip"},"Save, Load or Overwrite a Roster and store it on your device for future reference and editing.")),this.state.savedRosters.length>0?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"save-load__body"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"save-load__heading"},"Your Rosters"),this.state.savedRosters.map(function(roster){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"save-load__line-item",key:roster.name},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"save-load__line-name"},roster.name),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:_this2.overwriteRoster,id:roster.name},"Overwrite"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:_this2.loadRoster,id:roster.name},"Load"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:_this2.deleteRoster,id:roster.name},"Delete"));})):null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"save-load__body"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"save-load__heading"},"Save new Roster:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{className:"save-load__save-input",type:"text",value:this.state.saveName,onChange:this.updateSaveName}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{className:"save-load__save-button",onClick:this.saveRoster},"Save"))));}}]);return SaveLoad;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SaveLoad);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_BrowserUtils__ = __webpack_require__(74);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    .export__header-text {\n        padding: 0.8em;\n        margin: 0;\n        font-family: ",";\n        text-transform: uppercase;\n        font-weight: normal;\n        font-size: 1.6em;\n        text-align: center;\n    }\n\n    .export__close-button {\n        position: absolute;\n        top: 0;\n        right: 0;\n        font-size: 1.5em;\n        font-family: sans-serif;\n        border: 0;\n        background: none;\n    }\n\n    .export__tooltip {\n        background: ",";\n        padding: 1em;\n        text-align: center;\n        font-family: ",";\n        font-size: 1em;\n        line-height: 1.2em;\n    }\n\n    .export__heading {\n        display: block;\n        font-family: ",";\n        text-transform: uppercase;\n        padding: 0 0 0.4em;\n    }\n\n    .export__body {\n        padding: 1em;\n    }\n\n    .export__button {\n        color: ",";\n        border: solid 2px ",";\n        border-radius: 0;\n        background: white;\n        font-family: ",";\n        text-transform: uppercase;\n        margin-top: 0.5em;\n        margin-right: 0.5em;\n        font-size: 1em;\n    }\n\n    .export__input {\n        display: block;\n        border: solid 1px black;\n        width: 100%;\n        padding: 0.5em;\n        margin-bottom: 0.5em;\n\n        &:focus {\n            outline: none;\n            border-color: ",";\n        }\n    }\n"],["\n    .export__header-text {\n        padding: 0.8em;\n        margin: 0;\n        font-family: ",";\n        text-transform: uppercase;\n        font-weight: normal;\n        font-size: 1.6em;\n        text-align: center;\n    }\n\n    .export__close-button {\n        position: absolute;\n        top: 0;\n        right: 0;\n        font-size: 1.5em;\n        font-family: sans-serif;\n        border: 0;\n        background: none;\n    }\n\n    .export__tooltip {\n        background: ",";\n        padding: 1em;\n        text-align: center;\n        font-family: ",";\n        font-size: 1em;\n        line-height: 1.2em;\n    }\n\n    .export__heading {\n        display: block;\n        font-family: ",";\n        text-transform: uppercase;\n        padding: 0 0 0.4em;\n    }\n\n    .export__body {\n        padding: 1em;\n    }\n\n    .export__button {\n        color: ",";\n        border: solid 2px ",";\n        border-radius: 0;\n        background: white;\n        font-family: ",";\n        text-transform: uppercase;\n        margin-top: 0.5em;\n        margin-right: 0.5em;\n        font-size: 1em;\n    }\n\n    .export__input {\n        display: block;\n        border: solid 1px black;\n        width: 100%;\n        padding: 0.5em;\n        margin-bottom: 0.5em;\n\n        &:focus {\n            outline: none;\n            border-color: ",";\n        }\n    }\n"]);function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var ExportWrap=__WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].fontBody,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].darkGrey,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].darkGrey,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_3__styles_theme__["a" /* default */].orange);var SaveLoad=function(_Component){_inherits(SaveLoad,_Component);function SaveLoad(){var _ref,_this2=this;var _temp,_this,_ret;_classCallCheck(this,SaveLoad);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SaveLoad.__proto__||Object.getPrototypeOf(SaveLoad)).call.apply(_ref,[this].concat(args))),_this),_this.updatePlayerName=function(event){_this.setState({playerName:event.target.value});},_this.createPDF=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var _ref3,renderPDF,blob;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_this.setState({isRendering:true});_context.next=3;return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 147));case 3:_ref3=_context.sent;renderPDF=_ref3.default;_context.next=7;return renderPDF(_this.props.appState,_this.state.playerName);case 7:blob=_context.sent;if(!__WEBPACK_IMPORTED_MODULE_5__helpers_BrowserUtils__["a" /* isiOS */]){_context.next=13;break;}_context.next=11;return Object(__WEBPACK_IMPORTED_MODULE_5__helpers_BrowserUtils__["b" /* openForiOS */])(blob);case 11:_context.next=14;break;case 13:__WEBPACK_IMPORTED_MODULE_4_file_saver___default()(blob,"MyRoster.pdf");case 14:_this.setState({isRendering:false});case 15:case"end":return _context.stop();}}},_callee,_this2);})),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SaveLoad,[{key:"componentWillMount",value:function componentWillMount(){this.setState({playerName:""});}},{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ExportWrap,null,__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"export__inner"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2",{className:"export__header-text"},"Export"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button",{className:"export__close-button",id:"exportIsActive",onClick:this.props.closeExportModal},"\xD7"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"export__tooltip"},"Export your roster to a PDF."),this.props.appState.units.length>0||this.props.appState.commanders.length>0?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"export__body"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:"export__heading"},"Player Name"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input",{className:"export__input",type:"text",onChange:this.updatePlayerName,value:this.state.playerName,placeholder:"Player name..."})),this.state.isRendering?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",null,"Loading..."):__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button",{className:"export__button",onClick:this.createPDF},"Download")):__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"export__body"},"Get started on your Roster by adding some squad members or commanders.")));}}]);return SaveLoad;}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SaveLoad);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(72);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||"object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}};f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isiOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return openForiOS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
var _this=this;function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}var isiOS=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);var isChrome=/CriOS/i.test(navigator.userAgent);var openForiOS=function(){var _ref=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(blob){var url,_url;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!isChrome){_context.next=7;break;}_context.next=3;return createFileReaderURL(blob);case 3:url=_context.sent;window.open(url);_context.next=9;break;case 7:_url=URL.createObjectURL(blob);window.open(_url,"_parent");case 9:case"end":return _context.stop();}}},_callee,_this);}));return function openForiOS(_x){return _ref.apply(this,arguments);};}();var createFileReaderURL=function createFileReaderURL(blob){return new Promise(function(res){var reader=new FileReader();reader.onload=function(){res(reader.result);};reader.readAsDataURL(blob);});};

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var astartes={background:{name:"Heroic Origin",options:["Crusaders","Last Survivors","Seekers After Vengeance","Oath Sworn","Infiltration Specialists","Hand-picked Heroes","Tactical Strike Force","Fire Support","Honour Guard","Extermination Force"]},mission:{name:"Oath of Moment",options:["Shock and Awe","Assassination","Secure and Control","Hold the Line","Hit and Run","Scouting Mission","Rescue Mission","Eliminate Target","Line Breakers","Speartip"]},quirk:{name:"Codex Emphasis",options:["Stubborn","Dynamic","Stealthy","Zealous","Exemplars","Selfless","Merciless","Vendetta","Bloodthirsty","Strategists"]},demeanours:["Dour","Ebullient","Aggressive","Castellan","Noble","Xenophobic","Ferocious","Sombre","Mysterious","Charismatic"],names:{Ultramarines:{first:{name:"Forename",options:["Marius","Agnathio","Ollonius","Cato","Titus","Agies","Gaius","Andrus","Marcus","Cassius"]},second:{name:"Surname",options:["Chronus","Tarentus","Dysorius","Cassus","Acastian","Varenus","Apollon","Aggennor","Castus","Poladrus"]}},"Imperial Fists":{first:{name:"Forename",options:["Lydus","Darnath","Lexandro","Nereus","Tylaeus","Vorn","Tor","Boreas","Jago","Oreas"]},second:{name:"Surname",options:["Hagen","Mirhen","Garadon","Lytanus","Danithor","Markov","Mordelai","Julan","Darsway","Lordann"]}},"Blood Angels":{first:{name:"Forename",options:["Amareus","Erasmus","Rafael","Morlaeo","Leonid","Faustian","Donatelus","Raelyn","Nicodemus","Furian"]},second:{name:"Surname",options:["Belarius","Seraphan","Moriar","Raneil","Castivar","Arteros","Redolpho","Lorenso","Amuto","Rephas"]}},"Raven Guard":{first:{name:"Forename",options:["Aajz","Kyrin","Vykus","Tryris","Ordias","Navaer","Syras","Aevar","Reszan","Vorkyl"]},second:{name:"Surname",options:["Kaed","Solari","Solaq","Qeld","Korvaedyn","Vaanes","Torvaec","Klayde","Moradus","Ordaris"]}},"White Scars":{first:{name:"Forename",options:["Anagar","Khajog","Suberei","Khoros","Jaygor","Seglei","Jurgah","Kaljyk","Kulghu","Saghari"]},second:{name:"Surname",options:["Gatughan","Yesuberei","Ghol","Jaghol","Kandakh","Mologhai","Ujumm","Bhangleo","J’ungah","Aghulo"]}},"Iron Hands":{first:{name:"Forename",options:["Arrven","Gorrloch","Shorrgol","Galorr","Dorrghun","Kaagos","Barrgus","Ghorrean","Orros","Gdolkin"]},second:{name:"Surname",options:["Feirros","Graevarr","Bannus","Lydriik","Terrek","Korvaan","Urloch","Rauth","Varrox","Xeriis"]}},"Space Wolves":{first:{name:"Forename",options:["Gunnar","Ulfrich","Laars","Sven","Wulfgar","Erik","Dolf","Leif","Olaf","Torrvald"]},second:{name:"Surname",options:["Ironaxe","Icefang","Orksbane","the Red","Wyrmslayer","Thunderhowl","Stormstrider","Stoneshield","Trollbane","Greymane"]}},Salamanders:{first:{name:"Forename",options:["Dak’Lyr","Sho’Tan","Tsu’Gar","Fugean","Xavus","Nubari","Vorr’n","Sholta","Xa’Vor","Leotrak"]},second:{name:"Surname",options:["K’Gosi","Dallor","Jurr","Mir’Shan","Shenn","Ta’Phor","Rhoshan","Antanar","Shal’Dar","Gar’Dos"]}},"Dark Angels":{first:{name:"Forename",options:["Azkarael","Zakeal","Rhellion","Zoreal","Azathor","Shoriel","Nemator","Ezekial","Bethor","Zadakial"]},second:{name:"Surname",options:["Zaborial","Azdallon","Zacahrus","Astathor","Seraphus","Zanthor","Kaelon","Namaat","Soriel","Belian"]}}},units:[{name:"斥候",specialisms:[{name:"领队",restriction:"Scout Sergeant"},{name:"Heavy",restriction:"Scout Gunner"},{name:"通讯员"},{name:"爆破兵"},{name:"斥候"},{name:"狙击手"}],models:[{name:"斥候",default:true,cost:10,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Combat Knife"},{name:"Astartes Shotgun"},{name:"Sniper Rifle & Camo Cloak",cost:2}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Scout Gunner",cost:11,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Heavy Bolter",cost:3},{name:"Missile Launcher",cost:5},{name:"Sniper Rifle & Camo Cloak",cost:2}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Camo Cloak (Missile Launcher Only)",cost:1}]},{name:"Scout Sergeant",cost:11,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Chainsword"},{name:"Astartes Shotgun"},{name:"Sniper Rifle & Camo Cloak",cost:2}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]}]},{name:"Tactical Marine",specialisms:[{name:"领队",restriction:"Tactical Sergeant"},{name:"Heavy",restriction:"Tactical Marine Gunner"},{name:"通讯员"},{name:"爆破兵"},{name:"狙击手"},{name:"老兵"},{name:"医护员"}],models:[{name:"Tactical Marine",default:true,cost:12,wargear:[{name:"Boltgun",default:true},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Tactical Marine Gunner",cost:13,limit:2,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Flamer",cost:3},{name:"Meltagun",cost:3},{name:"Plasma Gun",cost:3},{name:"Grav Gun",cost:2},{name:"Missile Launcher",cost:5},{name:"Heavy Bolter",cost:3}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Tactical Sergeant",cost:13,limit:1,wargear:[{name:"Boltgun & Bolt Pistol",default:true,upgrades:[{name:"Combi-flamer",cost:3},{name:"Combi-grav",cost:2},{name:"Combi-melta",cost:3},{name:"Combi-plasma",cost:2},{name:"Bolt Pistol & Chainsword"},{name:"Bolt Pistol & Power Fist",cost:4},{name:"Bolt Pistol & Power Sword",cost:2},{name:"Bolt Pistol & Auspex",cost:1},{name:"Plasma Pistol & Chainsword",cost:1},{name:"Plasma Pistol & Power Fist",cost:5},{name:"Plasma Pistol & Power Sword",cost:3},{name:"Plasma Pistol & Auspex",cost:2},{name:"Grav-pistol & Chainsword",cost:1},{name:"Grav-pistol & Power Fist",cost:5},{name:"Grav-pistol & Power Sword",cost:3},{name:"Grav-pistol & Auspex",cost:2}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]}]},{name:"Reiver",specialisms:[{name:"领队",restriction:"Reiver Sergeant"},{name:"Combat"},{name:"通讯员"},{name:"爆破兵"},{name:"斥候"},{name:"老兵"}],models:[{name:"Reiver",default:true,cost:16,wargear:[{name:"Bolt Carbine",default:true,upgrades:[{name:"Combat Knife"}]},{name:"Heavy Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true},{name:"Shock Grenades",default:true}],otherWargear:[{name:"Grav-chute",cost:1},{name:"Grapnel Launcher",cost:1}]},{name:"Reiver Sergeant",default:true,cost:16,wargear:[{name:"Bolt Carbine",default:true,upgrades:[{name:"Combat Knife"}]},{name:"Heavy Bolt Pistol",default:true,upgrades:[{name:"Combat Knife"}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true},{name:"Shock Grenades",default:true}],otherWargear:[{name:"Grav-chute",cost:1},{name:"Grapnel Launcher",cost:1}]}]},{name:"Intercessor",specialisms:[{name:"领队",restriction:"Intercessor Sergeant"},{name:"Combat"},{name:"通讯员"},{name:"爆破兵",restriction:"Intercessor Gunner"},{name:"老兵"},{name:"狙击手"},{name:"医护员"}],models:[{name:"Intercessor",default:true,cost:15,wargear:[{name:"Bolt Rifle",default:true,upgrades:[{name:"Auto Bolt Rifle"},{name:"Stalker Bolt Rifle"}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Auspex"}]},{name:"Intercessor Gunner",default:true,cost:16,wargear:[{name:"Bolt Rifle",default:true,upgrades:[{name:"Auto Bolt Rifle"},{name:"Stalker Bolt Rifle"}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Auxiliary Grenade Launcher"},{name:"Auspex"}]},{name:"Intercessor Sergeant",default:true,cost:16,wargear:[{name:"Bolt Rifle",default:true,upgrades:[{name:"Power Sword",cost:2},{name:"Chainsword"}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Power Sword",cost:2},{name:"Chainsword"},{name:"Auspex"}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (astartes);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var militarum={background:{name:"战争故事",options:["Penal Troopers","Hardened Veterans","Light Infantry","Sappers","Elite Guards","Fresh Meat","Drop Troops","Tank Hunters","Shock Troops","Grizzled Survivors"]},mission:{name:"Duty to the Emperor",options:["Hold at All Costs","Assault","Assassinate","爆破兵","Die Well","Raiders","Capture Location","Recon","Messengers","Looters"]},quirk:{name:"特性",options:["Faithful","Parade Ground Drilled","Tunnel Fighters","City Fighters","Death Worlders","Xenos Hunters","Seen Too Much","Chem-addicts","Gone Native","Killer Rep"]},demeanours:["Dutiful","Haunted","Nerves of Steel","Pious","Eagle-eye","Courageous","Vengeful","Psycho","Expert","Gung-ho"],names:{Cadian:{first:{name:"Trooper",options:["Jens","Karsk","Hekler","Reeve","Pavlo","Hektor","Nils","Thenmann","Kyser","Erlen","Raphe","Creed","Lasko","Ackerman","Mattias","Mortens","Dansk","Feodor","Tomas","Kolson","Vance","Pask","Niems","Gryf","Sonnen","Ekhter","Farestein","Dekker","Graf","Arvans","Viers","Kolm","Bask","Vesker","Pavlo"]}},Catachan:{first:{name:"Trooper",options:["Gunnarsen","Harker","Grytt","‘Snake’ Vandien","Greiss","Stryker","Storm","Lance","‘Crazy’ Winters","Cage","Hammer","Cobra","‘Hardhead’ Jackson","‘Stonefist’ Kage","‘Boss’ Stransky","‘Bomber’ Johnson","Jacksen","Marshall","‘Fangs’ Lorson","‘Cold-eye’ McKay","Wolf","‘Shiv’ Frost","Brent","‘Ironheart’ McKillen","‘Killer’ Crowe","‘Wildman’ Weiss","‘Ice’ Creek","Dane","Steeljaw","Dransky","‘Slim’ Hasker","Mason","Hawks","Axel","Carver","Payne"]}},Valhallan:{first:{name:"Trooper",options:["Vensk","Skarrsen","Chernov","Dushenko","Rynsk","Gorska","Varence","Nyska","Putran","Dorff","Tyvosk","Polanski","Drekoff","Vorn","Hapscheldt","Olof","Trevinska","Schonnen","Kleiss","Borys","Ivanek","Smirnek","Kuzentsev","Vasilesnev","Petravitch","Skolov","Fedorev","Morazev","Volko","Lebesnev","Egoryn","Pavlek","Kozlev","Stepanovic","Nikoli","Orlakev"]}},Tallarn:{first:{name:"Trooper",options:["Alem","Hallain","Laskair","Nathal","Altarem","Mohal","Dharem","Hasman","Sonnam","Ushmet","Shadnan","Asphret","Ushad","Tal’hasen","Ashmyr","Shashlem","Haseed","Ushar","Raheim","Dassed","Sahleim","Alhret","Khaleeth","Eshmet","Ul’shalem","Talannar","Al’phareim","El’shan","Khabir","Khalym","‘Swiftrider’","‘Dunestrider’","‘Hawkseye’","‘Sand Devil’","‘the Mirage’","‘the Hunter’"]}}},units:[{name:"Infantry Squad Guardsman",specialisms:[{name:"领队",restriction:"Sergeant"},{name:"Heavy",restriction:"Guardsman Gunner"},{name:"通讯员",restriction:"Guardsman with Vox-caster"},{name:"爆破兵"},{name:"斥候"},{name:"狙击手"},{name:"老兵"}],models:[{name:"Guardsman",default:true,cost:5,wargear:[{name:"Lasgun",default:true},{name:"Frag Grenades",default:true}],otherWargear:[{name:"Vox-caster",cost:5}]},{name:"Guardsman Gunner",cost:5,wargear:[{name:"Lasgun",default:true,upgrades:[{name:"Flamer",cost:3},{name:"Grenade Launcher",cost:2},{name:"Meltagun",cost:3},{name:"Plasma Gun",cost:3},{name:"Sniper Rifle",cost:1}]},{name:"Frag Grenades",default:true}]},{name:"Sergeant",cost:5,wargear:[{name:"Las Pistol",default:true,upgrades:[{name:"Bolt Pistol"},{name:"Plasma Pistol",cost:1}]},{name:"Chainsword",default:true,upgrades:[{name:"Power Sword",cost:1}]},{name:"Frag Grenades",default:true}]}]},{name:"Sepcial Weapons Squad Guardsman",specialisms:[{name:"Heavy",restriction:"Sepcial Weapons Gunner"},{name:"领队"},{name:"通讯员"},{name:"爆破兵"},{name:"斥候"},{name:"狙击手"},{name:"老兵"}],models:[{name:"Special Weapons Guardsman",default:true,cost:5,wargear:[{name:"Lasgun",default:true},{name:"Frag Grenades",default:true}]},{name:"Special Weapons Gunner",cost:5,limit:3,wargear:[{name:"Lasgun",default:true,upgrades:[{name:"Flamer",cost:3},{name:"Grenade Launcher",cost:2},{name:"Meltagun",cost:3},{name:"Plasma Gun",cost:3},{name:"Sniper Rifle",cost:1}]},{name:"Frag Grenades",default:true}]}]},{name:"militarum Tempestus Scion",specialisms:[{name:"领队",restriction:"Tempestor"},{name:"爆破兵",restriction:"Scion Gunner"},{name:"Heavy",restriction:"Scion Gunner"},{name:"通讯员"},{name:"医护员"},{name:"斥候"},{name:"狙击手"},{name:"老兵"}],models:[{name:"Scion",default:true,cost:9,wargear:[{name:"Hot-shot Lasgun",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Vox-caster",cost:5}]},{name:"Scion Gunner",default:true,cost:10,wargear:[{name:"Hot-shot Lasgun",default:true,upgrades:[{name:"Flamer",cost:3},{name:"Meltagun",cost:3},{name:"Plasma Gun",cost:3},{name:"Hot-shot Volley Gun",cost:3}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Tempestor",default:true,cost:10,wargear:[{name:"Hot-shot Laspistol",default:true,upgrades:[{name:"Bolt Pistol"},{name:"Plasma Pistol",cost:1}]},{name:"Chainsword",default:true,upgrades:[{name:"Power Sword",cost:1},{name:"Power Fist",cost:2}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]}]},{named:true,name:"Pious Vorne",specialisms:[{name:"Zealot"}],models:[{name:"Pious Vorne",default:true,cost:15,wargear:[{name:"Vindicator",default:true}]}]},{named:true,name:"Rein and Raus",specialisms:[{name:"狙击手"}],models:[{name:"Rein and Raus",default:true,cost:18,wargear:[{name:"Sniper Rifle & Stub Pistol (Rein)",default:true},{name:"Stub Pistol & Demolition Charge (Raus)",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (militarum);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var adeptusMechanicus={background:{name:"Designation",options:["Explorer Team","Archeotech Hunters","Elimination Clade","Campaign Veterans","Titan Guards","Rad-zone Corps","Infiltrator Clade","Domination Cadre","Itratii Cadre","Corpus-Sanctarii Clade"]},mission:{name:"Function",options:["Defend the Sacred Technologies","Recover a Holy Prize","Biologis Sample Extraction","Strategic Martyrdom","Smite a Tech-Heretic","Eliminate Heretical Machineries","Righteous Auo-castigation","Root Out Techno-dissidents","Eradicate False Testament","Victory for Logic"]},quirk:{name:"Unsanctioned Divergence",options:["Acquisitive","Jealous Guardians","Mindlessly Devout","Requiring Re-sanctification","Monotask","Pursuing Auto-perfection","Cybernetic Ascension","Mercilessly Decisive","Secretive","Beyond the Crux Mechanicus"]},demeanours:["Meticulously Observant","Binharic Piety","Biologis Cognis","Mechadominus","Defensor Majoris","Memeglitch","Uncompromator Doctrines","Ironstride","Strategic Chorister","Autopuritanical Ballistics"],names:{first:{name:"Alpha Component",options:["Sy-gex","Tyr","Dak","Ar","Kappic-Schoelendt","Tyba","Dorox","Alb","Zyto-Neumann","Xixos","Kau","Rho","Delpha","Chu","Ix","Neng-Pho","Bheta","Zhu","Lho","Teppa-Nyxos","Kor","Dox","Sek","Gryphonne-Reductus","Tov","Eq","Mu","Rhy","Dos","Exitor-Dho","Fel","Actus","Xor","Decima","Rax","Kas"]},second:{name:"Beta Component",options:["-511","-1111","-XXVII","-802","-323/mk12","-089","-744","-VII","-18.1","-656","-IV","-110","-0.4343","-97/mk24","-XIX","-7","-110100","-3.16","-961.34254","-MXV","-99","-2918","-888.88","-404","-1010","-0.44//K","-745","-66.75/mk98","-1/1/2","-99941","-83.2","-575","-79.09/5","-668.2","-1/5","-666/2"]}},units:[{name:"Skitarii Ranger",specialisms:[{name:"领队",restriction:["Ranger Alpha"]},{name:"Heavy",restriction:["Ranger Gunner"]},{name:"通讯员"},{name:"斥候"},{name:"狙击手"},{name:"Zealot"}],models:[{name:"Skitarii Ranger",default:true,cost:9,wargear:[{name:"Galvanic Rifle",default:true}],otherWargear:[{name:"Omnispex",cost:1},{name:"Advanced Data-tether",cost:5}]},{name:"Ranger Gunner",cost:10,limit:3,wargear:[{name:"Galvanic Rifle",default:true,upgrades:[{name:"Arc Rifle"},{name:"Plasma Caliver",cost:3},{name:"Transuranic Arquebus",cost:5}]}]},{name:"Ranger Alpha",cost:10,limit:1,wargear:[{name:"Galvanic Rifle",default:true,upgrades:[{name:"Arc Pistol & Arc Maul"},{name:"Arc Pistol & Power Sword"},{name:"Arc Pistol & Taser Goad",cost:1},{name:"Phosphor Blast Pistol & Arc Maul"},{name:"Phosphor Blast Pistol & Power Sword"},{name:"Phosphor Blast Pistol & Taser Goad",cost:1},{name:"Radium Pistol & Arc Maul"},{name:"Radium Pistol & Power Sword"},{name:"Radium Pistol & Taser Goad",cost:1}]}]}]},{name:"Skitarii Vanguard",specialisms:[{name:"领队",restriction:["Vanguard Alpha"]},{name:"Heavy",restriction:["Vanguard Gunner"]},{name:"通讯员"},{name:"斥候"},{name:"狙击手"},{name:"Zealot"}],models:[{name:"Skitarii Vanguard",default:true,cost:9,wargear:[{name:"Radium Carbine",default:true}],otherWargear:[{name:"Omnispex",cost:1},{name:"Advanced Data-tether",cost:5}]},{name:"Vanguard Gunner",cost:10,limit:3,wargear:[{name:"Radium Carbine",default:true,upgrades:[{name:"Arc Rifle"},{name:"Plasma Caliver",cost:3},{name:"Transuranic Arquebus",cost:5}]}]},{name:"Vanguard Alpha",cost:10,limit:1,wargear:[{name:"Radium Carbine",default:true,upgrades:[{name:"Arc Pistol & Arc Maul"},{name:"Arc Pistol & Power Sword"},{name:"Arc Pistol & Taser Goad",cost:1},{name:"Phosphor Blast Pistol & Arc Maul"},{name:"Phosphor Blast Pistol & Power Sword"},{name:"Phosphor Blast Pistol & Taser Goad",cost:1},{name:"Radium Pistol & Arc Maul"},{name:"Radium Pistol & Power Sword"},{name:"Radium Pistol & Taser Goad",cost:1}]}]}]},{name:"Sicarian Ruststalker",specialisms:[{name:"领队",restriction:["Ruststalker Princeps"]},{name:"Combat"},{name:"通讯员"},{name:"斥候"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Sicarian Ruststalker",default:true,cost:14,wargear:[{name:"Transonic razor & Chordclaw",cost:1,default:true,upgrades:[{name:"Transonic Blades"}]}]},{name:"Ruststalker Princeps",cost:15,wargear:[{name:"Transonic razor & Chordclaw",cost:1,default:true,upgrades:[{name:"Chordclaw & Transonic Blades",cost:1}]}]}]},{name:"Sicarian Infiltrator",specialisms:[{name:"领队",restriction:["Infiltrator Princeps"]},{name:"Combat"},{name:"通讯员"},{name:"斥候"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Sicarian Infiltrator",default:true,cost:14,wargear:[{name:"Stubcarbine & Power Sword",cost:1,default:true,upgrades:[{name:"Flechette Blaster & Taser Goad",cost:1}]}]},{name:"Infiltrator Princeps",cost:15,wargear:[{name:"Stubcarbine & Power Sword",cost:1,default:true,upgrades:[{name:"Flechette Blaster & Taser Goad",cost:1}]}]}]},{named:true,name:"UR-025",specialisms:[{name:"Heavy"}],models:[{name:"UR-025",default:true,cost:30,wargear:[{name:"MK I Assault Cannon",default:true},{name:"Power Claw",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (adeptusMechanicus);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var harlequins={background:{name:"The Cast",options:["The Swords of Khaine","Webway Wanderers","The Solitary","Fate’s Messengers","Sinister Killers","Guardians of the Black Library"]},mission:{name:"The Tale",options:["The Dance of the Thief ’s Reward","The Dance of Kurnous’ Gate","The Dance of the Crimson Reaping","The Dance of the Veiled Blade","The Dance of the Starving Ygghs","The Dance of Vaul’s Tempering"]},quirk:{name:"The Affectation",options:["Warriors of the Light","Blades of the Twilight","Talons of the Dark","Swift as the Wind","Cruelly Mocking","Starlight Stride"]},demeanours:["Heroic Protagonist","Malicious Antagonist","Bladed Fool","Sorrowful Killer","Gleeful Maniac","Relentless Destroyer","Sombre Executioner","Fate’s Herald","The Eternal Wanderer","The Harmonious Herald"],names:{first:{name:"DRAMATIC MANTLE",options:["The Sun","The Star","The Shadow","The Void","The Sky","The Redtide","The Moon","The Highborn","The Leering","The Bladed"]},second:{name:"RITUAL PERSONA",options:["King","Queen","Prince","Knave","Witch","Judge","Executioner","Seer","Ghoul","Crone"]}},units:[{name:"Player",specialisms:[{name:"领队"},{name:"Combat"},{name:"医护员"},{name:"斥候"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Player",default:true,cost:12,wargear:[{name:"Shuriken Pistol",default:true,upgrades:[{name:"Neuro Disruptor",cost:2},{name:"Fusion Pistol",cost:3}]},{name:"Harlequin’s Blade",default:true,upgrades:[{name:"Harlequin’s Embrace",cost:2},{name:"Harlequin’s Caress",cost:3},{name:"Harlequin’s Kiss",cost:4}]},{name:"Plasma Grenades",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (harlequins);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var greyKnights={background:{name:"Legend",options:["They Hunt the Beast","Those That Remain","Purgation Corps","Sworn Guardians","Hand of the Prognosticars","The Heroic Few"]},mission:{name:"Quest",options:["End the Nightmare","Aquisitus Prohibitum","Wield the True Name","Reap the Tally","Scorched Earth","Trial by Blade"]},quirk:{name:"Virtue",options:["Unyielding","Blessed Aura","Exacting","Bellicose","Sworn to Purify","Dark Lore"]},demeanours:["Wrathful","Fanatical","Mystic","Methodical","Firebrand","Vengeful","Marksman","Psychic Nexus","Merciless","Stoic"],names:{first:{name:"Forename",options:["Valdar","Kaladour","Pelenas","Anval","Drystan","Garran","Drako","Caddon","Arno","Verdan"]},second:{name:"Surname",options:["Mordrak","Torvin","Thule","Varn","Ordan","Gerontas","Solor","Cromm","Kai","Trevan"]}},units:[{name:"Grey Knight",specialisms:[{name:"领队",restriction:"Justicar"},{name:"Heavy",restriction:"Grey Knight Gunner"},{name:"Combat"},{name:"通讯员"},{name:"爆破兵"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Grey Knight",default:true,cost:18,wargear:[{name:"Nemesis Force Sword",default:true,upgrades:[{name:"Nemesis Force Halberd"},{name:"Nemesis Daemon Hammer",cost:2},{name:"Nemesis Warding Stave"},{name:"2 x Nemesis Falchions",cost:2}]},{name:"Storm Bolter",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true},{name:"Psyk-out Grenades",default:true}]},{name:"Grey Knight Gunner",cost:19,limit:2,wargear:[{name:"Nemesis Force Sword",default:true,upgrades:[{name:"Incinerator",cost:3},{name:"Psilencer",cost:3},{name:"Psycannon",cost:2}]},{name:"Storm Bolter",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true},{name:"Psyk-out Grenades",default:true}]},{name:"Justicar",cost:19,limit:1,wargear:[{name:"Nemesis Force Sword",default:true,upgrades:[{name:"Nemesis Force Halberd"},{name:"Nemesis Daemon Hammer",cost:2},{name:"Nemesis Warding Stave"},{name:"Pair of Nemesis falchions",cost:1}]},{name:"Storm Bolter",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true},{name:"Psyk-out Grenades",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (greyKnights);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var heretics={background:{name:"Dark Pact",options:["Champions All","Lost and Damned","Veterans of the Long War","Predators","Warp-infused Warriors","Tzeentch Worshippers","Khorne Worshippers","Slaanesh Worshippers","Nurgle Worshippers","Worldslayers"]},mission:{name:"Dread Purpose",options:["Terror Raid","Seed Corruption","Dark Ritual","Sunder the Gates","Arcane Prize","Faithbreakers","Seekers After Glory","Hand of the Gods","Dark Guardians","Saboteurs"]},quirk:{name:"Twisted Nature",options:["Embittered","Berserk","Devious","Zealous","Cruel","Stolid","Iron Discipline","Arrogant","Insane","Possessed"]},demeanours:["Ultimate Veteran","Cannibal","Deranged","Blade-master","Visionary","Living Canker","Unstoppable Force","Twisted","True Believer","On the Brink"],names:{"Black Legion":{first:{name:"Forename",options:["Zekyr","Dreccor","Sorvram","Thallos","Zagator","Korthranus","Drekva","Thygmor","Ashrok","Azmodial"]},second:{name:"Surname",options:["Aximand","the Vengeful","Thrice-Cursed","Korda","the Black","Daemonsblade","Orakar","Naxos","the Mad","Faithslayer"]}},"Alpha Legion":{first:{name:"Forename",options:["Kyphax","Inigo","Thkeln","Sylas","Armilus","Sheed","Eskyrx","Jaego","Askelitar","Alpharius"]},second:{name:"Surname",options:["Sheyr","Dynas","Hertzor","Ranko","(no cypher)","23-7","Legion","Phors","Nul","(no cypher)"]}},"Emperor's Children":{first:{name:"Forename",options:["Antinius","Eidelitor","Ilitoias","Teloss","Abdemis","Fabian","Julianis","Abdelis","Lycon","Xiander"]},second:{name:"Surname",options:["Sellion","Thest","Atonian","Vessatar","Bericosian","Xandassus","Tresell","Vastorius","Kanasiar","the Perfect"]}},"World Eaters":{first:{name:"Forename",options:["Khargos","Drakh","Ashkal","Gharrax","Khorgor","Sorkhos","Aggravax","Ashkorh","Larsakh","Khaen"]},second:{name:"Surname",options:["Skullfiend","the Reaper","Khorr","the Butcher","the Furious","Slaughterborn","Foe Ripper","the Destroyer","the Hound","Thaxxos"]}}},units:[{name:"Chaos Cultist",specialisms:[{name:"领队",restriction:"Cultist Champion"},{name:"Heavy",restriction:"Chaos Cultist Gunner"},{name:"Combat"},{name:"爆破兵"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Chaos Cultist",default:true,cost:4,wargear:[{name:"Autogun",default:true,upgrades:[{name:"Brutal Assault Weapon & Autopistol"}]}]},{name:"Chaos Cultist Gunner",cost:5,wargear:[{name:"Autogun",default:true,upgrades:[{name:"Flamer",cost:3},{name:"Heavy Stubber"}]}]},{name:"Cultist Champion",cost:5,wargear:[{name:"Autogun",default:true,upgrades:[{name:"Shotgun"},{name:"Brutal Assault Weapon & Autopistol"}]}]}]},{name:"Chaos Space Marine",specialisms:[{name:"领队",restriction:"Aspiring Champion"},{name:"Heavy",restriction:"Chaos Space Marine Gunner"},{name:"爆破兵"},{name:"狙击手"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Chaos Space Marine",default:true,cost:12,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Chainsword"}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Icon of Vengeance",cost:1,upgrades:[{name:"Icon of Wrath",cost:5},{name:"Icon of Flame",cost:1},{name:"Icon of Despair",cost:3},{name:"Icon of Excess",cost:5}]}]},{name:"Chaos Space Marine Gunner",cost:13,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Flamer",cost:3},{name:"Melatgun",cost:3},{name:"Plasma Gun",cost:3},{name:"Heavy Bolter",cost:3}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Aspiring Champion",cost:13,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Chainsword"},{name:"Power Sword",cost:2},{name:"Power Fist",cost:4}]},{name:"Bolt Pistol",default:true,upgrades:[{name:"Plasma Pistol",cost:1}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (heretics);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var deathGuard={background:{name:"Foul Nature",options:["The Virulent","Dark Alchemists","Trench Fighters","Mortarion’s Chosen","Reapers","Shepherds of the Neverdead"]},mission:{name:"Glorious Burden",options:["Defilers","Seize and Profane","Victory Through Endurance","Sevenfold Slaughter","Fatal Infection","Warp-spores"]},quirk:{name:"Blightful Boon",options:["Morbid Mirth","Justifiable Arrogance","Dirgesong","Vengeful","Servants of Entropy","Relentless"]},demeanours:["Drudge","Morbid Fascinations","Jocular","Generous","Belligerent","Meticulous","Deathflinger","Reeking Horror","Taking Samples","Stubborn"],names:{first:{name:"Forename",options:["Gurloch","Suppurax","Golchor","Festasmus","Rancidius","Mulgh","Shurgholgh","Bubox","Pustus","Malignus"]},second:{name:"Surname",options:["Urghe","Volghor","Grulgus","the Pestilent","the Reeking","the Curdled","Glouch","Muttermould","Thrax","Trudg"]}},units:[{name:"Plague Marine",specialisms:[{name:"领队",restriction:"Plague Champion"},{name:"Heavy",restriction:"Plague Marine Gunner"},{name:"Zealot",restriction:"Plague Marine Fighter"},{name:"Combat"},{name:"爆破兵"},{name:"老兵"}],models:[{name:"Plague Marine",default:true,cost:14,wargear:[{name:"Boltgun",default:true},{name:"Plague Knife",default:true},{name:"Blight Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Icon of Despair",cost:3}]},{name:"Plague Marine Gunner",cost:15,limit:2,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Plague Spewer",cost:4},{name:"Plague Belcher",cost:3},{name:"Blight Launcher",cost:3},{name:"Meltagun",cost:3},{name:"Plasma Gun",cost:3}]},{name:"Plague Knife",default:true},{name:"Blight Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Plague Marine Fighter",cost:15,limit:2,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Bubotic Axe",cost:2},{name:"Great Plague Cleaver",cost:4},{name:"Flail of Corruption",cost:4},{name:"Second Plague Knife"},{name:"Mace of Contagion & Bubotic Axe",cost:5}]},{name:"Plague Knife",default:true},{name:"Blight Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Plague Champion",cost:15,limit:1,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Bolt Pistol"},{name:"Plasma Pistol",cost:1},{name:"Plasma Gun",cost:3}]},{name:"Plague Knife",default:true,upgrades:[{name:"Plague Sword"}]},{name:"Blight Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Power Fist",cost:4}]}]},{name:"Poxwalker",specialisms:[{name:"Combat"},{name:"Zealot"}],models:[{name:"Poxwalker",default:true,cost:3,wargear:[{name:"Improvised Weapon",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (deathGuard);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var deathGuard={background:{name:"Path of Fate",options:["Heralds of Madness","Seekers After Sorcery","Arch-coven","Relentless Destroyers","Warriors Out of Time","Daemonologists"]},mission:{name:"Ineffable Purpose",options:["Ritual Desecration","Abduction","Sowing Sorcery","Firestorm","Vengeance for Prospero","Hands of Fate"]},quirk:{name:"Mysterious Boon",options:["Aetheric Coronae","One Will","Single-minded","Ancient Dust","Superior","Ghosts of the Warp"]},demeanours:["Enigmatic","Exacting","Ninefold Warrior","War is an Altar","The Madness of Tzeentch","Unspeaking","Plans Within Plans","Prophesier","Pyromaniac","Seething with Change"],names:{first:{name:"Forename",options:["Phosis","Amonhep","Basteq","Apophitar","Thotek","Kalophis","Phael","Thotmas","Imhoden","Ankhu"]},second:{name:"Surname",options:["T’Kor","Basth","Takar","Kallisar","Rhan","P’Tra","Manahkmor","Shen","Apophontar","H’Kett"]}},units:[{name:"Rubric Marine",specialisms:[{name:"领队",restriction:"Aspiring Sorcerer"},{name:"Heavy",restriction:"Rubric Marine Gunner"},{name:"Combat"},{name:"爆破兵"},{name:"老兵"}],models:[{name:"Rubric Marine",default:true,cost:16,wargear:[{name:"Inferno Boltgun",default:true,upgrades:[{name:"Warpflamer",cost:4}]}],otherWargear:[{name:"Icon of Flame",cost:1}]},{name:"Rubric Marine Gunner",cost:16,wargear:[{name:"Inferno Boltgun",default:true,upgrades:[{name:"Soulreaper Cannon",cost:4}]}]},{name:"Aspiring Sorcerer",cost:17,wargear:[{name:"Inferno Bolt Pistol",default:true,upgrades:[{name:"Warpflame Pistol",cost:1}]},{name:"Force Stave",default:true}]}]},{name:"Tzaangor",specialisms:[{name:"领队",restriction:"Twistbray"},{name:"通讯员",restriction:"Tzaangor with Brayhorn"},{name:"Combat"},{name:"医护员"},{name:"老兵"}],models:[{name:"Tzaangor",default:true,cost:7,wargear:[{name:"Tzaangor Blades",default:true,upgrades:[{name:"Autopistol & Chainsword"}]}],otherWargear:[{name:"Brayhorn",cost:3}]},{name:"Twistbray",cost:8,wargear:[{name:"Tzaangor Blades",default:true,upgrades:[{name:"Autopistol & Chainsword"}]}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (deathGuard);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var asuryani={background:{name:"Shared Destiny",options:["Gwynt’ar Fue","Pre-emptive Strike","Keepers of the Gate","The Shrine Ascendant","Shadow Squad","Echoes of Greatness","Ily’Haeth Khai","Cleansers","The Bladed Mirror","Wardens of the Pivotal Life"]},mission:{name:"Purpose",options:["Enact the Bailic-fen","Surprise Attack","Keepers of the Gate","Talons of Heg","Fate’s Executioners","Forbidden Ground","The First Wave","Faolchú’s Wings","A Greater Foe","Mobile Defence"]},quirk:{name:"Deeper Nature",options:["Close Bonds","Fickle","Merciless Hate","Sorrows Beyond Measure","Psychically Attuned","Uncanny Perfectionists","Servants of Prophecy","Superior","A Shining Example","Arrogant and Aloof"]},demeanours:["Acrobatic","Mentally Dexterous","Crystalline Soul","Damned","Survivor’s Guilt","Absolute Focus","Haughty","Cold as the Void","Passionate","Grandiloquent"],names:{Female:{first:{name:"First Element",options:["Tenrith","Justune","Aleerith","Yrlla","Aileer","Caslith","Tai’shar","Jair","Luirth","Aleera","Phyllistra","Myrnoth","Fyrram","Ishylla","Tishriel","Aydona","Galánta","Ylleth","Giladrea","Osinell","Glenoighi","Ishtá","Yvraine","Intrisiel","Torc","Anesh","Kalistri","Alee","Altanish","Gwyth","Tyrelli","Kaithe","Galrethi","Noithi","Braesil","Meari"]},second:{name:"Second Element",options:["the Fireheart","Kyldroth","Tridehlá","Who Walks Alone","of the Flowing Spirits","Iydoth","Brylliel","Biel-rith","(no second appellation)","Iyadolath","Last of the House of the Ayandi","the Melancholy","Llacharni (‘brightheart’)","the Huntress","Aryimelli","Bringer of Azure Death","Umachuli","Shelwe-hann (‘Song of Enlightenment’)","Serenti (‘glory of the setting sun’)","Ullamar","Dystari (‘that which will never shatter’)","Ciaradh","Iyadari","Flethál (‘Star-pattern of Perfection’)","the Whisper of Death","Hanndroth (‘Quest Eternal’)","Sheersom","Cegodari (‘who laughs at despair’)","Ullathani (‘she who walks many paths’)","Corsikanni (‘kin to Corsairs’)","Yn Farwolloch (‘deadly to her enemies’)","Indomi","Saim-Ingrelli (‘the grace of the striking snake’)","Ysbwrieli (‘Starsplinter’)","Morai-fen","Undomniel"]}},Male:{first:{name:"First Element",options:["Fachean","Tarvaril","Fánai","Yrmnoch","Barahir","Eldrion","Dis’ar","Eldos","Kinshar","Rhidhal","Athairnos","Eärandil","Siriolas","Bahtaam","Fian","Eldroth","Lorinth","Illisar","Ealion","Elronhir","Tamishar","Arenal","Iradil","Maur","Requiel","Lann","Yrule","Ra’thar","Las’hár","Arision","Ingfhar","Senn","Hal’thar","Yrion","Silgar","Konrith"]},second:{name:"Second Element",options:["Son of Coheria","Finarfin","Eldrion","the Unyielding Fire","Glaermril","Arronnás","Gloywach (‘the Glow Dragon’)","the Uncompromising","of the Noble House of Picarothi","Enbrondil","Lladronoth","Bechareth (‘spirit on the wind’)","Ceifulgaithann (‘wind rider’)","Undroíl","Caman (‘the avenger’)","Tóir","Scion of Rhidmar","the Wanderer","of the Clan Randras","Llmaea-fen (‘born of black suns’)","Rillietar","Elarique of Alaitoc","Sydarus Starstrider","the Implacable","Ulthos (‘speaker of unspeakable truths’)","Sharnál","the Deathly Eloquent","Born of Twilight","of the Tower of Stars","Shelwe-nin (‘Song of the Fading Star’)","the Undaunted","Rhianthari (‘starlight partially obscured by nebula’)","Eldroneth","Trithjain (‘Storm of the Stars’)","the Rising Star","Bhanlhar (‘avenger of the lost clan’)"]}}},units:[{name:"Guardian Defender",specialisms:[{name:"领队"},{name:"通讯员"},{name:"医护员"},{name:"斥候"},{name:"老兵"}],models:[{name:"Guardian Defender",default:true,cost:7,wargear:[{name:"Shuriken Catapult",default:true},{name:"Plasma Grenades",default:true}]},{name:"Heavy Weapon Platform",cost:8,limit:1,wargear:[{name:"Shuriken Cannon",default:true,cost:2,upgrades:[{name:"Aeldari Missile Launcher",cost:5},{name:"Bright Lance",cost:4},{name:"Scatter Laser",cost:2},{name:"Starcannon",cost:3}]}]}]},{name:"Storm Guardian",specialisms:[{name:"领队"},{name:"Combat"},{name:"通讯员"},{name:"医护员"},{name:"斥候"},{name:"老兵"}],models:[{name:"Storm Guardian",default:true,cost:6,wargear:[{name:"Aeldari Blade",default:true,upgrades:[{name:"Chainsword"}]},{name:"Shuriken Pistol",default:true},{name:"Plasma Grenades",default:true}]},{name:"Storm Guardian Gunner",cost:7,wargear:[{name:"Aeldari Blade & Shuriken Pistol",default:true,upgrades:[{name:"Flamer",cost:3},{name:"Fusion Gun",cost:3}]},{name:"Plasma Grenades",default:true}]}]},{name:"Ranger",specialisms:[{name:"领队"},{name:"通讯员"},{name:"医护员"},{name:"斥候"},{name:"狙击手"},{name:"老兵"}],models:[{name:"Ranger",default:true,cost:11,wargear:[{name:"Shuriken Pistol",default:true},{name:"Ranger Long Rifle",default:true}]}]},{name:"Dire Avenger",specialisms:[{name:"领队",restriction:"Dire Avenger Exarch"},{name:"通讯员"},{name:"医护员"},{name:"斥候"},{name:"Combat"},{name:"老兵"}],models:[{name:"Dire Avenger",default:true,cost:10,wargear:[{name:"Avenger Shuriken Catapult",default:true},{name:"Plasma Grenades",default:true}]},{name:"Dire Avenger Exarch",default:true,cost:11,wargear:[{name:"Avenger Shuriken Catapult",default:true,upgrades:[{name:"2 x Avenger Shuriken Catapult"},{name:"Shuriken Pistol & Power Glaive",cost:1},{name:"Shuriken Pistol & Diresword",cost:2},{name:"Shimmershield & Power Glaive",cost:5}]},{name:"Plasma Grenades",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (asuryani);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var deathWatch={background:{name:"Team Doctrine",options:["Aquila Kill Team","Furor Kill Team","Venator Kill Team:","Dominatus Kill Team","Malleus Kill Team","Purgatus Kill Team","Fortis Kill Team","Mission Survivors","The Long Hunt","The Shield that Slays"]},mission:{name:"Covert Operation",options:["Secure and Control","The Cull","Cut off the Head","Disrupt the Swarm","The Heart of the Hive","Knowledge is Power"]},quirk:{name:"Team Facet",options:["Newly Forged","Xenovendetta","Competitive","Pragmatic","Bellicose","The Bigger Picture"]},demeanours:["Newcomer","Black Shield","Xenobiologist","Fuelled by Hate","Tactician","Huntsman","Marksman","Grim","Contemptuous","Murderous"],names:null,units:[{name:"Deathwatch Veteran",specialisms:[{name:"领队",restriction:"Watch Sergeant"},{name:"Heavy",restriction:"Deathwatch Veteran Gunner"},{name:"Combat"},{name:"通讯员"},{name:"爆破兵"},{name:"狙击手"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Deathwatch Veteran",default:true,cost:14,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Combi-melta",cost:3},{name:"Combi-plasma",cost:4},{name:"Stalker Pattern Boltgun",cost:1},{name:"Power Sword",cost:2},{name:"Power Maul",cost:2},{name:"Storm Shield",cost:3},{name:"Deathwatch Shotgun",cost:1},{name:"Heavy Thunder Hammer",cost:5}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Power Sword",cost:2},{name:"Power Maul",cost:2}]},{name:"Deathwatch Veteran Gunner",cost:16,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Deathwatch Frag Cannon",cost:3},{name:"Infernus Heavy Bolter",cost:2}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Black Shield",default:true,cost:16,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Combi-melta",cost:3},{name:"Combi-plasma",cost:4},{name:"Stalker Pattern Boltgun",cost:1},{name:"Power Sword",cost:2},{name:"Power Maul",cost:2},{name:"Storm Shield",cost:3},{name:"Deathwatch Shotgun",cost:1},{name:"Heavy Thunder Hammer",cost:5}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Power Sword",cost:2},{name:"Power Maul",cost:2}]},{name:"Watch Sergeant",default:true,cost:16,wargear:[{name:"Boltgun",default:true,upgrades:[{name:"Combi-melta",cost:3},{name:"Combi-plasma",cost:4},{name:"Stalker Pattern Boltgun",cost:1},{name:"Power Sword",cost:2},{name:"Power Maul",cost:2},{name:"Storm Shield",cost:3},{name:"Xenophase Blade",cost:3}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Power Sword",cost:2},{name:"Power Maul",cost:2}]}]},{name:"Reiver",specialisms:[{name:"领队",restriction:"Reiver Sergeant"},{name:"Combat"},{name:"通讯员"},{name:"爆破兵"},{name:"斥候"},{name:"老兵"}],models:[{name:"Reiver",default:true,cost:16,wargear:[{name:"Bolt Carbine",cost:2,default:true,upgrades:[{name:"Combat Knife"}]},{name:"Heavy Bolt Pistol",cost:2,default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true},{name:"Shock Grenades",default:true}],otherWargear:[{name:"Grav-chute",cost:1},{name:"Grapnel Launcher",cost:1}]},{name:"Reiver Sergeant",default:true,cost:16,wargear:[{name:"Bolt Carbine",cost:2,default:true,upgrades:[{name:"Combat Knife"}]},{name:"Heavy Bolt Pistol",cost:2,default:true,upgrades:[{name:"Combat Knife"}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true},{name:"Shock Grenades",default:true}],otherWargear:[{name:"Grav-chute",cost:1},{name:"Grapnel Launcher",cost:1}]}]},{name:"Intercessor",specialisms:[{name:"领队",restriction:"Intercessor Sergeant"},{name:"Combat"},{name:"通讯员"},{name:"爆破兵"},{name:"斥候"},{name:"老兵"}],models:[{name:"Intercessor",default:true,cost:15,wargear:[{name:"Bolt Rifle",cost:2,default:true,upgrades:[{name:"Auto Bolt Rifle",cost:2},{name:"Stalker Bolt Rifle",cost:2}]},{name:"Bolt Pistol",cost:2,default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Intercessor Gunner",default:true,cost:16,wargear:[{name:"Bolt Rifle",cost:2,default:true,upgrades:[{name:"Auto Bolt Rifle",cost:2},{name:"Stalker Bolt Rifle",cost:2}]},{name:"Bolt Pistol",cost:2,default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Auxiliary Grenade Launcher"}]},{name:"Intercessor Sergeant",default:true,cost:16,wargear:[{name:"Bolt Rifle",cost:2,default:true,upgrades:[{name:"Power Sword",cost:2},{name:"Chainsword"}]},{name:"Bolt Pistol",cost:2,default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Power Sword",cost:2},{name:"Chainsword"}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (deathWatch);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var drukhari={background:{name:"Shadowed Origin",options:["Vanguard Party","Slave Trialists","Ascendant Murderers","Enemies of My Enemy","Avatars of the Arenas","Slithering Compulsion","Hired Blades","Betrayers","One Shall Stand","Desolators"]},mission:{name:"Cruel Intent",options:["Probe","Harvest","Interrogate","Assassinate","Deceive","Terrorise","Abduct","Enslave","Disembowel","Revel"]},quirk:{name:"Unnatural Perversion",options:["Sinful Focus","Revel in Pain","Swift and Deadly","Reckless","Territorial","Trophy Hunters","Eldritch Cunning","Masochistic","Shadow Stalkers","Consummate Provocateurs"]},demeanours:["Predator’s Eye","Dark Flamboyance","Ravenous","Extravagant","Scheming","Mistrustful","Darkened Soul","Unforgiving","Boundless Ambition","Vindictive"],names:{Kabalite:{first:{name:"Taken Name",options:["Anarkyss","Veth’va","Mayator","Quaez","Daisan","Bekliel","Orvak","Narlek","Monsatos","Vivithrax","Drevakh","Kyzarkh","Thresyn","Shylas","Lythric","Kylos","Theskril","Skythe","Akkhar","Kharsac","Nyktos","Grevyth","Thraed","Sykil","Khaeyl","Madrax","Akhirion","Vypus","Ethriliac","Kheraes","Iyshak","Khepres","Eldoriac","Vrekkus","Thayd","Xurul"]},second:{name:"Kabalite Name",options:["Sar’sel","Vorpex","Kreen","the Bloodbreather","Maestros","Gaarsus","Ehthrek","Ghorghast","Ignyss","Mohrkhar","Thresk","Scaur","the Pale","Khadylus","Phrel","Vulkyriax","Nul","the Flenser","Poisonblade","Barbtongue","Xesh","the Ravening","Draeven","of the Obsidian Needle","Vhrex","Kaghmyr","Thrail","Flickerblade","Xosh","the Bleak","Neverbreath","Skahyl","Verkosian","Ulthurian","Menesh","the Cruel"]}},"Wych-cult":{first:{name:"Arena Title",options:["Ariex","Melikka","Grendett","Vaivel","Bithandrel","Ingenue","Demadyne","Laelanyel","Excrucia","Nathra","Vrexith","Thyndrella","Selithrian","Xela","Peiythia","Uless","Skyshrin","Anielyn","Vyrenik","Khatryx","Nyssa","Phyrix","Mellyx","Kherissa","Tryxin","Aniellah","Veshtari","Morghynn","Thrixxesh","Thessa","Xindrell","Kladys","Shemriel","Lyxanna","Nimhre","Vylekh"]},second:{name:"Clique Name",options:["La’flenz","Wysp","Soriel","Oblique","Nervose","Mourn","Vivicon","Viserhyx","Berrebaal","Vulptuse","Ehlynna","Khaur","Hexehss","the Crimson","Thrix","Khoryssa","Vexx","of the Screaming Blade","Khrygg","Nichtren","Veluxis","the Huntress","Beastbane","the Magnificent","Trehll","Xyriphraxis","Masdruvael","Khrone","the Untouched","Bloodslyk","the Cruel","Kharavyxis","Ynthrekh","Dyvahur","Krael","the Bloodsister"]}}},units:[{name:"Kabalite Warrior",specialisms:[{name:"领队",restriction:"Sybarite"},{name:"狙击手",restriction:"Kabalite Gunner"},{name:"通讯员"},{name:"斥候"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Kabalite Warrior",default:true,cost:7,wargear:[{name:"Splinter Rifle",default:true}]},{name:"Kabalite Gunner",cost:8,wargear:[{name:"Splinter Rifle",default:true,upgrades:[{name:"Splinter Cannon",cost:3},{name:"Dark Lance",cost:4},{name:"Shredder",cost:1},{name:"Blaster",cost:3}]}]},{name:"Sybarite",cost:8,wargear:[{name:"Splinter Rifle",default:true,upgrades:[{name:"Splinter Pistol",cost:3},{name:"Blast Pistol",cost:2}]}],otherWargear:[{name:"Power Sword",cost:2},{name:"Agoniser",cost:2},{name:"Phantasm Grenade Launcher",cost:1}]}]},{name:"Wych",specialisms:[{name:"领队",restriction:"Hekatrix"},{name:"Combat"},{name:"斥候"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Wych",default:true,cost:8,wargear:[{name:"Splinter Pistol",default:true},{name:"Hekatarii Blade",default:true},{name:"Plasma Grenades",default:true}]},{name:"Wych Fighter",cost:9,wargear:[{name:"Splinter Pistol & Hekatarii Blade",default:true,upgrades:[{name:"Hydra Gauntlets",cost:2},{name:"Razorflails",cost:2},{name:"Shardnet & Impaler",cost:2}]},{name:"Plasma Grenades",default:true}]},{name:"Hekatrix",cost:9,wargear:[{name:"Splinter Pistol",default:true,upgrades:[{name:"Blast Pistol",cost:2}]},{name:"Hekatarii Blade",default:true,upgrades:[{name:"Power Sword",cost:2},{name:"Agoniser",cost:2}]},{name:"Plasma Grenades",default:true}],otherWargear:[{name:"Phantasm Grenade Launcher",cost:1}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (drukhari);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var necrons={background:{name:"Ancient Origins",options:["Harbingers","Tomb Guardians","Invaders from Beyond","The Phaeron’s Chosen","Scouring Party","Code-bound","Assassins","Ghoulish Nightmares","Mindless Martyrs","Domination Force"]},mission:{name:"Glorious Task",options:["The Cull","Mindthieves","Servants of the Crypteks","Heralds of the Uprising","Chrono-aquisitors","Fractal Disruption","Punishment Detail","Relentless War","The Phaeron’s Blade","The Phaeron’s Curse"]},quirk:{name:"Gift of Aeons",options:["The Curse of Time","Wreathed in Power","Deadly Automata","Dark Sentience","Ether-flux","Skin-takers","Arrogant Hunters","Deranged","Unfeeling","Favoured Warriors"]},demeanours:["Menacing","Maniacal","Strategic","Nihilist","Tormentor","Glitching","Obsessive","Delusional","Acquisitive","Necrochirurgeon"],names:{first:{name:"Bequeathed Name",options:["Ankhep","Tamonhak","Eknotath","Khotek","Thanatar","Amhut","Karok","Zan-Tep","Unakh","Khophec","Tzantath","Tahar","Imonekh","Trazat","Xeoptar","Hamanet","Oberek","Banatur","Ahmnok","Kophesh","Teznet","Odakhar","Kythok","Eknothet","Anubitar","Anokh","Thotep","Anhutek","Ikhatar","Thotmek","Ramatek","Homanat","Taknophet","Makhret","(no first appellation)","Zanatek"]},second:{name:"Magnificent Title",options:["the Unliving","the Gilded","the Great","the Exalted","the Loyal","the Cruel","the Storm’s Eye","the Bloodied","the Mighty","the Relentless","the Unforgiving","the Merciless","the Glorious","the Devoted","the Victorious","the Destroyer","the Shrouded","the Flenser","the Unstoppable","the Beheader","the Impaler","the Magnificent","the Illuminated","the Executioner","the Phaeron’s Hand","the Guardian","the Gatekeeper","the All-seeing","the All-knowing","the Starwalker","the Starkiller","the Lifetaker","the Godbreaker","the Torchbearer","the Stormbringer","the Colossus"]}},units:[{name:"Necron Warrior",specialisms:[{name:"领队"},{name:"通讯员"},{name:"老兵"}],models:[{name:"Necron Warrior",default:true,cost:12,wargear:[{name:"Gauss Flayer",default:true}]}]},{name:"Immortal",specialisms:[{name:"领队"},{name:"通讯员"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Immortal",default:true,cost:16,wargear:[{name:"Gauss Blaster",default:true,upgrades:[{name:"Tesla Carbine"}]}]}]},{name:"Flayed One",specialisms:[{name:"领队"},{name:"通讯员"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Flayed One",default:true,cost:10,wargear:[{name:"Flayer Claws",default:true}]}]},{name:"Deathmark",specialisms:[{name:"领队"},{name:"通讯员"},{name:"斥候"},{name:"狙击手"},{name:"老兵"}],models:[{name:"Deathmark",default:true,cost:15,wargear:[{name:"Synaptic Distintegrator",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (necrons);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var orks={background:{name:"Da Ladz",options:["Gung-ho!","Filled with Waaagh!","Skraphuntaz","The Shootiest","Sneaky Gits!","Brutal","Kunnin'","Internal Rivalries","Addicted to Destruction","Spreaders of the Waaagh!"]},mission:{name:"Da Plan",options:["Kill Their Bosses","Get Stuck In","Salvage","'Andz off","We’ll Show ’Em","Da Ambush","Speed Is Its Own Reward","Sneak About","Fist of Gork (or Mork)","Plant da Flag"]},quirk:{name:"Da Know-Wotz",options:["Loud and Tuneless","Boastful","Itchy","Madboyz","Krumpin’ Krew","Hard-bitten","Lucky Gitz","Pyromaniacs","Buzzsquigs","Praktical Jokers"]},demeanours:["Thick-headed","Heavily Scarred","Strategic","Light-fingered","Violent Loon","Resilient","Beady-eyed","Too Dumb to Know Fear","Foul Gob","Big and Brawny"],names:{first:{name:"Front Bit",options:["Urzog","Snikrat","Krogskull","Gorgrok","Droknog","Grodd","Zogwarp","Gitzog","Ruggat","Zargruk","Stugbrog","Snarkrat","Zagblag","Bokgrobber","Zarknutz","Dhakadak","Nargrunt","Farksnot","Gharagh","Urlakk","Zogger","Slazbag","Squigface","Ugul","Tuska","Nakboz","Skarzot","Kroggler","Grukk","Fragbad","Traknug","Grizgutz","Shrokbog","Kraznag","Gragnatz","Blokrotz"]},second:{name:"Uvver Bit",options:["Drakka","Grug","Gitstompa","Skullcrusha","Facekrumpa","the ’Ard","Grot Kicker","da Shiv","(no uvver bit)","Blaktoof","da Hammer","Ghazbhag","Steelfang","Daggafist","Squigbiter","da Stompy","da Facegrinda","Loudgob","Facebiter","da Maniak","Steelbootz","Ripblade ","’Umiechewa","Ironboot","Flame Spitta","Wurldkilla","Stompkrumpa","Spleenrippa","Bigfangz","Badfang","Snotkicka","Brewguzzla","Bonesplitta","’Eadkrakka","Madeye","Trakeye"]}},units:[{name:"Ork Boy",specialisms:[{name:"领队",restriction:"Boss Nob"},{name:"Heavy",restriction:"Ork Boy Gunner"},{name:"Combat"},{name:"爆破兵"},{name:"老兵"}],models:[{name:"Ork Boy",default:true,cost:6,wargear:[{name:"Slugga & Choppa",default:true,upgrades:[{name:"Shoota"}]},{name:"Stikkbombs",default:true}]},{name:"Ork Boy Gunner",cost:7,wargear:[{name:"Slugga & Choppa",default:true,upgrades:[{name:"Big Shoota"},{name:"Rokkit Launcha",cost:3}]},{name:"Stikkbombs",default:true}]},{name:"Boss Nob",cost:10,wargear:[{name:"Slugga",default:true,upgrades:[{name:"Kombi-weapon with Rokkit Launcha",cost:3},{name:"Kombi-weapon with Skorcha",cost:4}]},{name:"Choppa",default:true,upgrades:[{name:"Big Choppa",cost:2},{name:"Power Klaw",cost:4}]},{name:"Stikkbombs",default:true}]}]},{name:"Gretchin",specialisms:[{name:"领队"},{name:"斥候"}],models:[{name:"Gretchin",default:true,cost:3,wargear:[{name:"Grot Blasta",default:true}]}]},{name:"Kommando",specialisms:[{name:"领队",restriction:"Kommando Boss Nob"},{name:"Combat"},{name:"爆破兵"},{name:"斥候"},{name:"老兵"}],models:[{name:"Kommando",default:true,cost:8,wargear:[{name:"Slugga",default:true},{name:"Choppa",default:true},{name:"Stikkbombs",default:true}]},{name:"Kommando Boss Nob",cost:12,wargear:[{name:"Choppa",default:true,upgrades:[{name:"Power Klaw",cost:4}]},{name:"Slugga",default:true},{name:"Stikkbombs",default:true}]}]},{name:"Burna Boy",specialisms:[{name:"通讯员",restriction:"Burner Spanner"},{name:"领队"},{name:"Combat"},{name:"爆破兵"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Burna Boy",default:true,cost:12,wargear:[{name:"Burna",default:true},{name:"Stikkbombs",default:true}]},{name:"Burna Spanner",cost:10,wargear:[{name:"Big Shoota",default:true,upgrades:[{name:"Kustom Mega-blasta"},{name:"Rokkit Launcha",cost:3}]},{name:"Stikkbombs",default:true}]}]},{name:"Loota",specialisms:[{name:"通讯员",restriction:"Loota Spanner"},{name:"领队"},{name:"Combat"},{name:"爆破兵"},{name:"Heavy"},{name:"老兵"}],models:[{name:"Loota",default:true,cost:12,wargear:[{name:"Deffgun",default:true},{name:"Stikkbombs",default:true}]},{name:"Loota Spanner",cost:10,wargear:[{name:"Big Shoota",default:true,upgrades:[{name:"Kustom Mega-blasta"},{name:"Rokkit Launcha",cost:3}]},{name:"Stikkbombs",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (orks);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tau={background:{name:"联系",options:["幸存者","隐形专家","原型武器测试员","教化小队","城市作战专家","上上善道的英雄们","保镖随从","学院精英","第四世界的老兵","狙击小队"]},mission:{name:"为上上善道服务",options:["诱捕陷阱","标记目标","毁坏敌人的辎重","刺杀","伏击","提取目标","武器测试","截获重要的情报","挺进侦察","保卫战略物资"]},quirk:{name:"Philosophy",options:["Honourable Warriors","Vengeful","Unyielding","Students of Kauyon","Students of Mont’ka","Canny Tacticians","No Heroes","Tech-minded","Ghosts","No One Left Behind"]},demeanours:["清汐学者","实干","精准的","热血","聪明的老兵","临危不乱","富有洞察力","受辱","远见同情者","孤狼"],names:{first:{name:"Individual",options:["Sul’an","Ho’sen","Atsumo","N’ea","Els’im","K’yen","Or’os","Pashera","Rais","Sel’tas","Be’tol","E’yaal","Murakan","To’jo","Kurami","U’so","Lorresa","Paluto","Ren’as","Lor’ma","Tash’lor","Watana","Nomura","Nishino","D’tano","Xo’yima","T’suka","Kais","Shamasa","Pu’jato","Ju’yem","Ga’mo","Kasashi","Lamano","Mi’daro","Uvash’a"]}},units:[{name:"火战士",specialisms:[{name:"领队",restriction:"火战士队长"},{name:"通讯员"},{name:"医护员"},{name:"斥候"},{name:"狙击手"},{name:"老兵"}],models:[{name:"火战士",default:true,cost:8,wargear:[{name:"脉冲步枪",default:true,upgrades:[{name:"脉冲卡宾"}]},{name:"光子手雷",default:true}],otherWargear:[{name:"脉冲手枪"}]},{name:"火战士队长",cost:8,wargear:[{name:"脉冲步枪",default:true,upgrades:[{name:"脉冲卡宾"},{name:"脉冲手枪"}]},{name:"光子手雷",default:true}],otherWargear:[{name:"脉冲手枪"},{name:"标记光"},{name:"DS8 战术支援炮塔（导弹舱）",cost:7},{name:"DS8 战术支援炮塔（智能导弹系统）",cost:5}]}]},{name:"寻路者小队",specialisms:[{name:"领队",restriction:"寻路者队长"},{name:"狙击手",restriction:"寻路者枪手"},{name:"通讯员"},{name:"爆破兵"},{name:"医护员"},{name:"斥候"},{name:"老兵"}],models:[{name:"寻路者",default:true,cost:6,wargear:[{name:"脉冲卡宾",default:true},{name:"标记光",default:true},{name:"光子手雷",default:true}]},{name:"寻路者枪手",cost:7,wargear:[{name:"脉冲卡宾和标记光",default:true,upgrades:[{name:"粒子步枪",cost:3},{name:"磁轨步枪"}]},{name:"光子手雷",default:true}]},{name:"寻路者队长",cost:7,wargear:[{name:"脉冲卡宾",default:true},{name:"标记光",default:true},{name:"光子手雷",default:true}],otherWargear:[{name:"脉冲手枪"}]}]},{name:"火战士破袭者",specialisms:[{name:"领队",restriction:"火战士破袭者队长"},{name:"通讯员"},{name:"爆破兵"},{name:"医护员"},{name:"斥候"},{name:"老兵"}],models:[{name:"火战士破袭者",default:true,cost:8,wargear:[{name:"脉冲爆裂枪",default:true},{name:"光子手雷",default:true}],otherWargear:[{name:"脉冲手枪"},{name:"DS8 战术支援炮塔（导弹舱）",cost:7},{name:"DS8 战术支援炮塔（智能导弹系统）",cost:5}]},{name:"火战士破袭者队长",cost:8,wargear:[{name:"脉冲爆裂枪",default:true,upgrades:[{name:"脉冲手枪"}]},{name:"光子手雷",default:true}],otherWargear:[{name:"标记光"}]}]},{name:"XV25 潜行战斗服",specialisms:[{name:"领队",restriction:"XV25 潜行战斗服"},{name:"通讯员"},{name:"Heavy"},{name:"斥候"},{name:"老兵"}],models:[{name:"XV25 潜行战斗服",default:true,cost:20,wargear:[{name:"脉冲速射炮",default:true,upgrades:[{name:"融合炮"}]}]},{name:"XV25 潜行战斗服队长",cost:20,wargear:[{name:"脉冲速射炮",default:true,upgrades:[{name:"融合炮"}]}],otherWargear:[{name:"标记光和目标锁定器"}]}]},{name:"兵蜂",specialisms:[],models:[{name:"MV1 枪蜂",default:true,cost:7,wargear:[{name:"2 x 脉冲卡宾",default:true}]},{name:"MV4 盾蜂",cost:7,wargear:[{name:"护盾发生器",default:true}]},{name:"MV7 标记蜂",cost:7,wargear:[{name:"标记光",default:true}]},{name:"MV36 守护者兵蜂",cost:7},{name:"MV33 反重力兵蜂",cost:7},{name:"MV31 脉冲加速蜂",cost:7},{name:"MB3 侦察兵蜂",cost:7,wargear:[{name:"脉冲速射炮",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (tau);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tyranids={background:{name:"Brood Classification",options:["Stealth Brood","Devourer Brood","Swiftkiller Brood","Highcrawler Brood","Bombardment Brood","Kill-swarm","Living Barricade","Alpha Pack","Ambush Brood","Kingslayer Brood"]},mission:{name:"Brood Imperative",options:["Devour","Infiltrate","Cull","Swarm","Terrify","Rampage","Stalk","Spread","Protect","Shroud"]},quirk:{name:"Brood Strain",options:["Ravenous","Cautious","Slinking","Bladed Shoal","Inescapable Hunters","Shrieker Brood","Sizzling Gore","Heightened Senses","Shorn of Synapse","Catalysed"]},demeanours:["Hive Node","Sentient Ammunition","Entangling Tendrils","Synaptophage","Guardian Beast","Survival Instincts","Bloodhunger","Unsettling Presence","Lurker","Mimic"],names:{first:{name:"First Title",options:["The Omega","The Creeping","The Crimson","The Kraken’s","The Leviathan’s","The Behemoth’s","Jormungandr’s","The Serpent’s","The Hydra’s","The Rising","The Devouring","The Looming","The Gorgon’s","The Ravening","The Kolorian","The Icharian","The Writhing","The Inescapable","The Dark","Kronos’","The Nightmare","Tiamet’s","The Ominous","Ouroboris’","The Ancient","The Slithering","The Bladed","The Monstrous","The Elder","The Nameless","The Hunter’s","The Formless","The Sudden","TheVoid","The Lurking","The Hungry"]},second:{name:"Second Title",options:["Infestation","Talon","Fang","Claw","Tendril","Coil","Eye","Brood","Shadow","Dread","Swarm","Barb","Jaws","Assassins","Slayers","Executioners","Ghosts","Echo","Terrors","Horrors","Lurkers","Heralds","Sting","Bite","Doom","Butchers","Devils","Wraiths","Menace","Shroud","Annihilators","Scream","Pall","Devourers","Stalkers","Maw"]}},units:[{name:"Termagant",specialisms:[{name:"斥候"},{name:"老兵"}],models:[{name:"Termagant",default:true,cost:4,wargear:[{name:"Fleshborer",default:true,upgrades:[{name:"Devourer",cost:3},{name:"Spinefists"}]}],otherWargear:[{name:"Toxin Sacs",cost:1},{name:"Adrenal Glands",cost:1}]}]},{name:"Hormagaunt",specialisms:[{name:"Combat"},{name:"斥候"},{name:"老兵"}],models:[{name:"Hormagaunt",default:true,cost:4,wargear:[{name:"Pair of Scything Talons",default:true}],otherWargear:[{name:"Toxin Sacs",cost:1},{name:"Adrenal Glands",cost:1}]}]},{name:"Lictor",specialisms:[{name:"领队"},{name:"Combat"},{name:"通讯员"},{name:"斥候"},{name:"老兵"}],models:[{name:"Lictor",default:true,cost:25,wargear:[{name:"Flesh Hooks",default:true},{name:"Grasping Talons",default:true},{name:"Rending Claws",default:true}]}]},{name:"Tyranid Warrior",specialisms:[{name:"Heavy",restriction:"Tyranid Warrior Gunner"},{name:"领队"},{name:"Combat"},{name:"通讯员"},{name:"老兵"}],models:[{name:"Tyranid Warrior",default:true,cost:20,wargear:[{name:"Pair of Scything Talons",default:true,upgrades:[{name:"Rending Claws"},{name:"Boneswords"},{name:"Lash Whip & Bonesword",cost:1}]},{name:"Devourer",default:true,upgrades:[{name:"Deathspitter",cost:2},{name:"Spinefists"},{name:"Rending Claws"},{name:"Boneswords"},{name:"Pair of Scything Talons"},{name:"Lash Whip & Bonesword",cost:1}]}],otherWargear:[{name:"Flesh Hooks"},{name:"Toxin Sacs",cost:1},{name:"Adrenal Glands",cost:1}]},{name:"Tyranid Warrior Gunner",cost:20,wargear:[{name:"Pair of Scything Talons",default:true,upgrades:[{name:"Rending Claws"},{name:"Boneswords"},{name:"Lash Whip & Bonesword",cost:1}]},{name:"Devourer",default:true,upgrades:[{name:"Barbed Strangler",cost:3},{name:"Venom Cannon",cost:4}]}],otherWargear:[{name:"Flesh Hooks"},{name:"Toxin Sacs",cost:1},{name:"Adrenal Glands",cost:1}]}]},{name:"Genestealer",specialisms:[{name:"领队"},{name:"Combat"},{name:"斥候"},{name:"老兵"}],models:[{name:"Genestealer",default:true,cost:11,wargear:[{name:"Rending Claws",default:true}],otherWargear:[{name:"Pair of Scything Talons"},{name:"Toxin Sacs",cost:1},{name:"Extended Carapace"},{name:"Acid Maw"},{name:"Flesh Hooks"}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (tyranids);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var genestealerCults={background:{name:"Cell",options:["Scavenger Cell","The Prophet’s Claw","Tunnel Skulkers","Killers in the Fold","Eyes of the Patriarch","Iconoclast Cell","Snatcher Cell","Shadowstalker Gene-kin","Snare Setters","Veterans of the First Cycle"]},mission:{name:"Sacred Task",options:["Open Their Eyes","Feed the Progeny","Raid Supply Lines","Prepare the Killing Field","Sabotage Vital Machinery","Undertunnel Ambush","They Know Too Much","Spread the Cult","Tear Down False Idols","From Below"]},quirk:{name:"Gene-deviance",options:["Deep-dwellers","Gene-kin Cant","Rabid Evangelists","Anarchists","Devious Scum","Twisted Physiologies","Fanatics","Creeping Killers","Inhuman Cruelty","Murderous"]},demeanours:["Acidic Spittle","Strange Twitching","Enlightener","Marker of the Dead","Unblinking","Proselytiser","Tunnelspawn","Destined Ascension","Predatory Instincts","Born Survivor"],names:{first:{name:"Forename",options:["Gannar","Dhraz","Yohrick","Kol","Hastun","Sayben","Hollan","Narek","Rauss","Basc","Davon","Zask","Nasser","Seimon","Jacobiah","Skir","Ghaskin","Foyle","Kreen","Judh","Mordecai","Isaak","Michon","Jerec","Aldren","Madrax","Vyrion","Hollun","Steen","Pike","Mallick","Groust","Eldric","Yorl","Xandus","Crasker"]},second:{name:"Surname",options:["Druchmann","Kreel","Desh","Cavorla","Krauss","Gardlinger","Zorbech","Stennvar","Varnway","Starn","Baumgart","Drisso","Sammer","Helm","Tarnright","Valka","Kelbrech","Kheiser","Madrach","Venner","Novek","Svodnor","Black","Barchus","Matterzhek","Onderghast","Thrace","Lhaska","Rezzekh","Carleon","Drevender","Seifer","Vreel","Xyben","Gorl","Arnalt"]}},units:[{name:"Acolyte Hybrid",specialisms:[{name:"领队",restriction:"Acolyte Leader"},{name:"爆破兵",restriction:"Acolyte Fighter"},{name:"Combat"},{name:"通讯员"},{name:"Zealot"}],models:[{name:"Acolyte Hybrid",default:true,cost:7,wargear:[{name:"Autopistol",default:true,upgrades:[{name:"Handflamer",cost:2}]},{name:"Cultist Knife",default:true},{name:"Rending Claw",default:true},{name:"Blasting Charges",default:true}],otherWargear:[{name:"Cult Icon",cost:5}]},{name:"Acolyte Fighter",default:true,cost:8,wargear:[{name:"Autopistol",default:true,upgrades:[{name:"Handflamer",cost:2}]},{name:"Cultist Knife & Rending Claw",default:true,upgrades:[{name:"Heavy Rock Drill",cost:5},{name:"Heavy Rock Saw",cost:4},{name:"Heavy Rock Cutter",cost:4},{name:"Demolition Charges",cost:3}]},{name:"Blasting Charges",default:true}]},{name:"Acolyte Leader",default:true,cost:8,wargear:[{name:"Autopistol & Cultist Knife",default:true,upgrades:[{name:"Autopistol & Bonesword",cost:1},{name:"Lash Whip & Bonesword",cost:2}]},{name:"Rending Claw",default:true},{name:"Blasting Charges",default:true}]}]},{name:"Aberrant",specialisms:[{name:"领队"},{name:"Combat"},{name:"爆破兵"},{name:"Zealot"}],models:[{name:"Aberrant",default:true,cost:15,wargear:[{name:"Power Pick",cost:3,default:true,upgrades:[{name:"Power Hammer",cost:4}]},{name:"Rending Claws",default:true}]}]},{name:"Neophyte Hybrid",specialisms:[{name:"领队",restriction:"Neophyte Leader"},{name:"Heavy",restriction:"Neophyte Gunner"},{name:"爆破兵"},{name:"医护员"},{name:"斥候"},{name:"Zealot"}],models:[{name:"Neophyte Hybrid",default:true,cost:5,wargear:[{name:"Autogun",default:true,upgrades:[{name:"Shotgun"}]},{name:"Autopistol",default:true},{name:"Blasting Charges",default:true}],otherWargear:[{name:"Cult Icon",cost:5}]},{name:"Neophyte Gunner",default:true,cost:6,wargear:[{name:"Autogun",default:true,upgrades:[{name:"Shotgun"},{name:"Flamer",cost:3},{name:"Grenade Launcher",cost:2},{name:"Webber",cost:1},{name:"Heavy Stubber"},{name:"Mining Laser",cost:3},{name:"Seismic Cannon",cost:2}]},{name:"Autopistol",default:true},{name:"Blasting Charges",default:true}]},{name:"Neophyte Leader",default:true,cost:6,wargear:[{name:"Autogun & Autopistol",default:true,upgrades:[{name:"Autopistol & Chainsword"},{name:"Autopistol & Power Maul",cost:1},{name:"Autopistol & Power Pick",cost:3},{name:"Bolt Pistol & Chainsword"},{name:"Bolt Pistol & Power Maul",cost:1},{name:"Bolt Pistol & Power Pick",cost:3},{name:"Web Pistol & Chainsword"},{name:"Web Pistol & Power Maul",cost:1},{name:"Web Pistol & Power Pick",cost:3}]},{name:"Blasting Charges",default:true}]}]},{name:"Hybrid Metamorph",specialisms:[{name:"领队",restriction:"Metamorph Leader"},{name:"Combat"},{name:"通讯员"},{name:"爆破兵"},{name:"Zealot"}],models:[{name:"Hybrid Metamorph",default:true,cost:8,wargear:[{name:"Autopistol",default:true,upgrades:[{name:"Hand Flamer",cost:2}]},{name:"Rending Claw & Metamorph Talon",default:true,upgrades:[{name:"A Pair of Metamorph Talons"},{name:"Rending Claw & Metamorph Whip",cost:1},{name:"Metamorph Claw",cost:1}]},{name:"Blasting Charges",default:true}],otherWargear:[{name:"Cult Icon",cost:5}]},{name:"Metamorph Leader",default:true,cost:8,wargear:[{name:"Autopistol",default:true,upgrades:[{name:"Hand Flamer",cost:2}]},{name:"Rending Claw & Metamorph Talon",default:true,upgrades:[{name:"A Pair of Metamorph Talons"},{name:"Rending Claw & Metamorph Whip",cost:1},{name:"Metamorph Claw",cost:1}]},{name:"Blasting Charges",default:true}],otherWargear:[{name:"Bonesword"}]}]},{name:"Genestealer",specialisms:[{name:"领队"},{name:"Combat"},{name:"斥候"},{name:"老兵"}],models:[{name:"Genestealer",default:true,cost:11,wargear:[{name:"Rending Claws",default:true}],otherWargear:[{name:"Pair of Scything Talons"},{name:"Toxin Sacs",cost:1},{name:"Extended Carapace"},{name:"Acid Maw"},{name:"Flesh Hooks"}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (genestealerCults);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var gellerpox={units:[{name:"Nightmare Hulk",specialisms:[{name:"领队",restriction:"Gnasher-Screamer"},{name:"Combat"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Nightmare Hulk",default:true,cost:31,wargear:[{name:"Hideous Mutations",default:true}]},{name:"Gnasher-Screamer",cost:31,limit:1,wargear:[{name:"Hideous Mutations",default:true},{name:"Plague Cleaveer",default:true}]}]},{name:"Gellerpox Mutant",specialisms:[{name:"领队"},{name:"Combat"},{name:"爆破兵"},{name:"斥候"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Gellerpox Mutant",default:true,cost:8,wargear:[{name:"Hideous Mutations",default:true},{name:"Improvised Weapons",default:true}]}]},{name:"Eyestinger Swarm",specialisms:[],models:[{name:"Eyestinger Swarm",default:true,cost:5,wargear:[{name:"Spawning Barb",default:true}]}]},{name:"Glitchling",specialisms:[{name:"Combat"},{name:"斥候"},{name:"Zealot"}],models:[{name:"Glitchling",default:true,cost:5,wargear:[{name:"Diseased Claws & Fangs",default:true}]}]},{name:"Cursemite",specialisms:[],models:[{name:"Cursemite",default:true,cost:4,wargear:[{name:"Bloodsucking Proboscis",default:true}]}]},{name:"Sludge-grub",specialisms:[],models:[{name:"Sludge-grub",default:true,cost:4,wargear:[{name:"Acid Spit",default:true},{name:"Fanged Maw & Stinger",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (gellerpox);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var starstriders={units:[{name:"Voidsman",specialisms:[{name:"领队",restriction:"Voidsmaster Nitsch"},{name:"Heavy",restriction:"Voidsman Gunner"},{name:"斥候",restriction:"Aximillion"},{name:"爆破兵"},{name:"老兵"}],models:[{name:"Voidsman",default:true,cost:6,wargear:[{name:"Lasgun",default:true},{name:"Laspistol",default:true},{name:"Concussion Grenades",default:true}]},{name:"Voidsman Gunner",cost:6,wargear:[{name:"Rotor Cannon",default:true},{name:"Laspistol",default:true},{name:"Concussion Grenades",default:true}]},{name:"Voidsmaster Nitsch",cost:6,wargear:[{name:"Artificer Shotgun",default:true},{name:"Laspistol",default:true},{name:"Concussion Grenades",default:true}]},{name:"Aximillion",cost:6,wargear:[{name:"Vicious Bite",default:true}]}]},{named:true,name:"Knosso Prond",specialisms:[{name:"Combat"}],models:[{name:"Knosso Prond",default:true,cost:25,wargear:[{name:"Death Cult Power Blade",default:true},{name:"Dartmask",default:true},{name:"Concussion Grenades",default:true}]}]},{named:true,name:"Larsen Van Der Grauss",specialisms:[{name:"通讯员"}],models:[{name:"Larsen Van Der Grauss",default:true,cost:22,wargear:[{name:"Voltaic Pistol",default:true},{name:"Concussion Grenades",default:true}]}]},{named:true,name:"Sanistasia Minst",specialisms:[{name:"医护员"}],models:[{name:"Sanistasia Minst",default:true,cost:17,wargear:[{name:"Scalpel Claw",default:true},{name:"Laspistol",default:true},{name:"Concussion Grenades",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (starstriders);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var servantsAbyss={units:[{name:"Traitor Guardsmen",specialisms:[{name:"领队",restriction:"Traitor Sergeant"},{name:"Heavy",restriction:"Traitor Guardsman Gunner"},{name:"斥候"},{name:"爆破兵"},{name:"老兵"},{name:"狙击手"}],models:[{name:"Traitor Guardsman",default:true,cost:5,wargear:[{name:"Lasgun",default:true,upgrades:[{name:"Autopistol & Brutal Assault Weapon"},{name:"Laspistol & Brutal Assault Weapon"}]},{name:"Frag Grenades",default:true}]},{name:"Traitor Guardsman Gunner",cost:5,wargear:[{name:"Lasgun",default:true,upgrades:[{name:"Flamer",cost:3}]},{name:"Frag Grenades",default:true}],otherWargear:[{name:"Krak Grenades"}]},{name:"Traitor Sergeant",cost:5,wargear:[{name:"Laspistol",default:true},{name:"Chainsword",default:true},{name:"Frag Grenades",default:true}]}]},{name:"Chaos Beastmen",specialisms:[{name:"领队"},{name:"Combat"},{name:"爆破兵"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Chaos Beastman",cost:7,default:true,wargear:[{name:"Laspistol",default:true,upgrades:[{name:"Autopistol"}]},{name:"Chainsword",default:true,upgrades:[{name:"Brutal Assault Weapon"}]},{name:"Frag Grenades",default:true}]}]},{name:"Negavolt Cultists",specialisms:[{name:"领队"},{name:"Combat"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Negavolt Cultist",cost:9,default:true,wargear:[{name:"Electro-goads",default:true}]}]},{name:"Rogue Psyker",specialisms:[{name:"领队"},{name:"通讯员"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Rogue Psyker",cost:20,default:true,wargear:[{name:"Laspistol",default:true},{name:"Chaos Stave",default:true}]}]},{name:"Black Legionaire",specialisms:[{name:"领队"},{name:"Combat"},{name:"狙击手"},{name:"老兵"},{name:"Zealot"}],models:[{name:"Black Legionaire",cost:12,default:true,wargear:[{name:"Boltgun",default:true},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]}]}]};/* harmony default export */ __webpack_exports__["a"] = (servantsAbyss);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_TextRepresentation__ = __webpack_require__(99);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    .copy__header-text {\n        padding: 0.8em;\n        margin: 0;\n        font-family: ",";\n        text-transform: uppercase;\n        font-weight: normal;\n        font-size: 1.6em;\n        text-align: center;\n    }\n\n    .copy__close-button {\n        position: absolute;\n        top: 0;\n        right: 0;\n        font-size: 1.5em;\n        font-family: sans-serif;\n        border: 0;\n        background: none;\n    }\n\n    .copy__tooltip {\n        background: ",";\n        padding: 1em;\n        text-align: center;\n        font-family: ",";\n        font-size: 1em;\n        line-height: 1.2em;\n    }\n\n    .copy__heading {\n        display: block;\n        font-family: ",";\n        text-transform: uppercase;\n        padding: 0 0 0.4em;\n    }\n\n    .copy__body {\n        padding: 1em;\n        text-align: center;\n\n        textarea {\n            width: 100%;\n            height: 60vh;\n            background: ",";\n            color: black;\n            border: solid 1px ",";\n            padding: 1em;\n        }\n    }\n\n    .copy__button {\n        color: ",";\n        border: solid 2px ",";\n        border-radius: 0;\n        background: white;\n        font-family: ",";\n        text-transform: uppercase;\n        padding: 0.5em 1em;\n        font-size: 1em;\n        margin: 1em auto;\n    }\n"],["\n    .copy__header-text {\n        padding: 0.8em;\n        margin: 0;\n        font-family: ",";\n        text-transform: uppercase;\n        font-weight: normal;\n        font-size: 1.6em;\n        text-align: center;\n    }\n\n    .copy__close-button {\n        position: absolute;\n        top: 0;\n        right: 0;\n        font-size: 1.5em;\n        font-family: sans-serif;\n        border: 0;\n        background: none;\n    }\n\n    .copy__tooltip {\n        background: ",";\n        padding: 1em;\n        text-align: center;\n        font-family: ",";\n        font-size: 1em;\n        line-height: 1.2em;\n    }\n\n    .copy__heading {\n        display: block;\n        font-family: ",";\n        text-transform: uppercase;\n        padding: 0 0 0.4em;\n    }\n\n    .copy__body {\n        padding: 1em;\n        text-align: center;\n\n        textarea {\n            width: 100%;\n            height: 60vh;\n            background: ",";\n            color: black;\n            border: solid 1px ",";\n            padding: 1em;\n        }\n    }\n\n    .copy__button {\n        color: ",";\n        border: solid 2px ",";\n        border-radius: 0;\n        background: white;\n        font-family: ",";\n        text-transform: uppercase;\n        padding: 0.5em 1em;\n        font-size: 1em;\n        margin: 1em auto;\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var CopyWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontBody,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].lightGrey,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader);var SaveLoad=function(_Component){_inherits(SaveLoad,_Component);function SaveLoad(){_classCallCheck(this,SaveLoad);return _possibleConstructorReturn(this,(SaveLoad.__proto__||Object.getPrototypeOf(SaveLoad)).apply(this,arguments));}_createClass(SaveLoad,[{key:"componentWillMount",value:function componentWillMount(){var appState=this.props.appState;var fullRoster=Object(__WEBPACK_IMPORTED_MODULE_4__helpers_TextRepresentation__["a" /* createRosterText */])(appState);this.setState({copied:false,fullRoster:fullRoster});}},{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CopyWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"copy__inner"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"copy__header"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2",{className:"copy__header-text"},"Copy/Share"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{className:"copy__close-button",id:"copyIsActive",onClick:this.props.closeCopyModal},"\xD7"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"copy__tooltip"},"Copy your roster in text format.")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"copy__body"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea",{value:this.state.fullRoster,disabled:true}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__["CopyToClipboard"],{text:this.state.fullRoster,onCopy:function onCopy(){return _this2.setState({copied:true});}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{className:"copy__button"},"Copy to clipboard")))));}}]);return SaveLoad;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SaveLoad);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(96),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = __webpack_require__(97);

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyToClipboard = exports.CopyToClipboard = function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CopyToClipboard.__proto__ || Object.getPrototypeOf(CopyToClipboard)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;


      var elem = _react2.default.Children.only(children);

      var result = (0, _copyToClipboard2.default)(text, options);

      if (onCopy) {
        onCopy(text, result);
      }

      // Bypass onClick if it was present
      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CopyToClipboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _text = _props.text,
          _onCopy = _props.onCopy,
          _options = _props.options,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['text', 'onCopy', 'options', 'children']);

      var elem = _react2.default.Children.only(children);

      return _react2.default.cloneElement(elem, _extends({}, props, { onClick: this.onClick }));
    }
  }]);

  return CopyToClipboard;
}(_react2.default.PureComponent);

CopyToClipboard.defaultProps = {
  onCopy: undefined,
  options: undefined
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(98);

var defaultMessage = 'Copy to clipboard: #{key}, Enter';

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) { options = {}; }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement('span');
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = 'unset';
    // prevents scrolling to the end of the page
    mark.style.position = 'fixed';
    mark.style.top = 0;
    mark.style.clip = 'rect(0, 0, 0, 0)';
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = 'pre';
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = 'text';
    mark.style.MozUserSelect = 'text';
    mark.style.msUserSelect = 'text';
    mark.style.userSelect = 'text';

    document.body.appendChild(mark);

    range.selectNode(mark);
    selection.addRange(range);

    var successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('copy command was unsuccessful');
    }
    success = true;
  } catch (err) {
    debug && console.error('unable to copy using execCommand: ', err);
    debug && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData('text', text);
      success = true;
    } catch (err) {
      debug && console.error('unable to copy using clipboardData: ', err);
      debug && console.error('falling back to prompt');
      message = format('message' in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),
/* 98 */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRosterText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__counts__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_factions__ = __webpack_require__(4);
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}var getFactionName=function getFactionName(factionID){return __WEBPACK_IMPORTED_MODULE_1__data_factions__["a" /* default */].filter(function(faction){return faction.id===factionID;}).map(function(faction){return faction.name;});};var createLinesWhen=function createLinesWhen(){for(var _len=arguments.length,conditions=Array(_len),_key=0;_key<_len;_key++){conditions[_key]=arguments[_key];}return conditions.filter(function(_ref){var _ref2=_slicedToArray(_ref,1),condition=_ref2[0];return!!condition;}).map(function(_ref3){var _ref4=_slicedToArray(_ref3,2),_=_ref4[0],text=_ref4[1];return text;}).join("\n");};var createRosterMeta=function createRosterMeta(_ref5){var selectedFaction=_ref5.selectedFaction,mission=_ref5.mission,background=_ref5.background,quirk=_ref5.quirk;return createLinesWhen([selectedFaction,"FACTION: "+getFactionName(selectedFaction)],[mission,"任务: "+mission],[background,"背景: "+background],[quirk,"QUIRK: "+quirk]);};var createUnitInfo=function createUnitInfo(_ref6){var model=_ref6.model,cost=_ref6.cost,moniker=_ref6.moniker,demeanour=_ref6.demeanour;return createLinesWhen([model,"MODEL: "+model],[cost,"COST: "+cost],[moniker,"名字: "+moniker],[demeanour,"DEMEANOUR: "+demeanour]);};var createUnitSpecialism=function createUnitSpecialism(_ref7){var isSpecialist=_ref7.isSpecialist,specialism=_ref7.specialism,level=_ref7.level,abilities=_ref7.abilities;return isSpecialist&&createLinesWhen([specialism,"SPECIALISM: "+specialism],[level,"LEVEL: "+level],[abilities,"ABILITIES: "+abilities.join(", ")]);};var createCommanderTraits=function createCommanderTraits(_ref8){var traits=_ref8.traits;return traits.length>0&&"TRAITS: "+traits.map(function(_ref9){var name=_ref9.name;return name;}).join(", ");};var createUnitMeta=function createUnitMeta(_ref10){var experience=_ref10.experience,convalescence=_ref10.convalescence,newRecruit=_ref10.newRecruit;return createLinesWhen([experience,"EXPERIENCE: "+experience],[convalescence,"CONVALESCENCE: "+convalescence],[newRecruit,"NEW RECRUIT: "+newRecruit]);};var createCommanderMeta=function createCommanderMeta(_ref11){var injurySerious=_ref11.injurySerious,injuryMinor=_ref11.injuryMinor,injuryContusion=_ref11.injuryContusion;return createLinesWhen([injurySerious,"SERIOUS INJURY: "+injurySerious],[injuryMinor,"MINOR INJURY: "+injuryMinor],[injuryContusion,"CONTUSION: "+injuryContusion]);};var createUnitWargear=function createUnitWargear(_ref12){var wargear=_ref12.wargear;return wargear.map(function(_ref13){var selectedOption=_ref13.selectedOption;return selectedOption;}).join(", ");};var createUnitOtherWargear=function createUnitOtherWargear(_ref14){var otherWargear=_ref14.otherWargear;return otherWargear&&otherWargear.filter(function(_ref15){var checked=_ref15.checked;return checked;}).map(function(_ref16){var name=_ref16.name;return name;}).join(", ");};var createAllUnitWargear=function createAllUnitWargear(unit){return"WARGEAR: "+[createUnitWargear,createUnitOtherWargear].map(function(fn){return fn(unit);}).filter(function(text){return!!text;}).join(", ");};var createUnitRoster=function createUnitRoster(units){return units.filter(function(_ref17){var inKillTeam=_ref17.inKillTeam;return inKillTeam;}).map(function(unit){return[createUnitInfo,createUnitSpecialism,createAllUnitWargear,createUnitMeta].map(function(fn){return fn(unit);}).filter(function(str){return!!str;}).join("\n");}).join("\n\n");};var createCommanderRoster=function createCommanderRoster(commanders){return commanders.filter(function(_ref18){var inKillTeam=_ref18.inKillTeam;return inKillTeam;}).map(function(commander){return[createUnitInfo,createUnitSpecialism,createCommanderTraits,createAllUnitWargear,createCommanderMeta].map(function(fn){return fn(commander);}).filter(function(str){return!!str;}).join("\n");}).join("\n\n");};var createRosterText=function createRosterText(appState){var name=appState.name,units=appState.units,commanders=appState.commanders,metadata=_objectWithoutProperties(appState,["name","units","commanders"]);var rosterName="NAME: "+(name||"My Roster");var rosterCost="COST: "+Object(__WEBPACK_IMPORTED_MODULE_0__counts__["a" /* calculatePointsInTeamTotal */])(appState);var rosterMeta=createRosterMeta(metadata);var commanderTitle="COMMANDERS:\n";var commanderRoster=createCommanderRoster(commanders);var unitTitle="\nUNITS:\n";var unitRoster=createUnitRoster(units);var fullRoster=[rosterName,rosterCost,rosterMeta,commanderTitle,commanderRoster,unitTitle,unitRoster];return fullRoster.join("\n");};

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_counts__ = __webpack_require__(14);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    max-width: ",";\n    margin: 0 auto;\n    text-align: right;\n    display: flex;\n    padding-bottom: 0.5em;\n\n    font-family: ",";\n    text-transform: uppercase;\n\n    span {\n        font-size: 0.7em;\n        margin-left: 0.7em;\n\n        &:first-child {\n            flex-grow: 2;\n            margin-left: 0;\n            float: left;\n\n            text-align: left;\n\n            @media (min-width: 500px) {\n                float: none;\n            }\n        }\n    }\n\n\n    @media (min-width: 500px) {\n        display: block;\n        float: right;\n    }\n"],["\n    max-width: ",";\n    margin: 0 auto;\n    text-align: right;\n    display: flex;\n    padding-bottom: 0.5em;\n\n    font-family: ",";\n    text-transform: uppercase;\n\n    span {\n        font-size: 0.7em;\n        margin-left: 0.7em;\n\n        &:first-child {\n            flex-grow: 2;\n            margin-left: 0;\n            float: left;\n\n            text-align: left;\n\n            @media (min-width: 500px) {\n                float: none;\n            }\n        }\n    }\n\n\n    @media (min-width: 500px) {\n        display: block;\n        float: right;\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var CountsWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].maxWidth,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader);var Toolbar=function(_Component){_inherits(Toolbar,_Component);function Toolbar(){_classCallCheck(this,Toolbar);return _possibleConstructorReturn(this,(Toolbar.__proto__||Object.getPrototypeOf(Toolbar)).apply(this,arguments));}_createClass(Toolbar,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CountsWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,"Kill Team:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,"小队 ",Object(__WEBPACK_IMPORTED_MODULE_3__helpers_counts__["c" /* calculateSquadInTeamTotal */])(this.props.appState)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,"点数 ",Object(__WEBPACK_IMPORTED_MODULE_3__helpers_counts__["a" /* calculatePointsInTeamTotal */])(this.props.appState)));}}]);return Toolbar;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Toolbar);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_factions__ = __webpack_require__(4);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    text-align: center;\n    font-size: 1em;\n    margin-top: 0.6em;\n\n    > span {\n        display: block;\n        position: relative;\n        max-width: ",";\n        margin: 0 auto;\n    }\n\n    select {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: transparent;\n        border: 0;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n\n        :hover {\n            + div {\n                color: white;\n\n                &::before {\n                    height: 100%;\n                }\n\n                &::after {\n                    border-top: 0.8em solid white;\n                }\n            }\n        }\n    }\n\n    div {\n        border: solid 2px ",";\n        width: 100%;\n        padding: 0.4em 0.8em;\n        font-family: ",";\n        color: ",";\n        font-size: 0.9em;\n        text-transform: uppercase;\n        transition: all 0.2s ease;\n        background: rgba(0, 0, 0, 0.3);\n\n        &::before {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 0;\n            display: block;\n            z-index: 0;\n            background: ",";\n            transition: all 0.2s ease;\n        }\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            margin-top: -0.4em;\n            top: 50%;\n            right: 0.8em;\n            z-index: 1;\n            width: 0;\n            height: 0;\n            border-left: 0.6em solid transparent;\n            border-right: 0.6em solid transparent;\n            border-top: 0.8em solid ",";\n            transition: all 0.2s ease;\n        }\n\n        span {\n            position: relative;\n        }\n    }\n"],["\n    text-align: center;\n    font-size: 1em;\n    margin-top: 0.6em;\n\n    > span {\n        display: block;\n        position: relative;\n        max-width: ",";\n        margin: 0 auto;\n    }\n\n    select {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: transparent;\n        border: 0;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n\n        :hover {\n            + div {\n                color: white;\n\n                &::before {\n                    height: 100%;\n                }\n\n                &::after {\n                    border-top: 0.8em solid white;\n                }\n            }\n        }\n    }\n\n    div {\n        border: solid 2px ",";\n        width: 100%;\n        padding: 0.4em 0.8em;\n        font-family: ",";\n        color: ",";\n        font-size: 0.9em;\n        text-transform: uppercase;\n        transition: all 0.2s ease;\n        background: rgba(0, 0, 0, 0.3);\n\n        &::before {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 0;\n            display: block;\n            z-index: 0;\n            background: ",";\n            transition: all 0.2s ease;\n        }\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            margin-top: -0.4em;\n            top: 50%;\n            right: 0.8em;\n            z-index: 1;\n            width: 0;\n            height: 0;\n            border-left: 0.6em solid transparent;\n            border-right: 0.6em solid transparent;\n            border-top: 0.8em solid ",";\n            transition: all 0.2s ease;\n        }\n\n        span {\n            position: relative;\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var FactionSelectWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].maxWidth,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var FactionSelect=function(_Component){_inherits(FactionSelect,_Component);function FactionSelect(){var _ref;var _temp,_this,_ret;_classCallCheck(this,FactionSelect);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=FactionSelect.__proto__||Object.getPrototypeOf(FactionSelect)).call.apply(_ref,[this].concat(args))),_this),_this.handleFactionSelect=function(input){var curAppState=_this.props.appState;curAppState.selectedFaction=input.target.value;if(!input.deferStateUpdate){_this.props.setAppState(curAppState);}},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(FactionSelect,[{key:"componentWillMount",value:function componentWillMount(){var _this2=this;var selectedFaction=__WEBPACK_IMPORTED_MODULE_3__data_factions__["a" /* default */].filter(function(faction){return _this2.props.appState.selectedFaction===faction.id;})[0];if(!selectedFaction){selectedFaction="选择阵营...";}else{selectedFaction=selectedFaction.name;}}},{key:"componentDidUpdate",value:function componentDidUpdate(){if(this.props.appState.selectedFaction){this.handleFactionSelect({target:{value:this.props.appState.selectedFaction},deferStateUpdate:true});}}},{key:"render",value:function render(){var _this3=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FactionSelectWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select",{value:this.props.appState.selectedFaction?this.props.appState.selectedFaction:"default",onChange:this.handleFactionSelect},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{value:"default",disabled:true},"选择阵营..."),__WEBPACK_IMPORTED_MODULE_3__data_factions__["a" /* default */].map(function(faction){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:faction.id,value:faction.id},faction.name);})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.appState.selectedFaction?__WEBPACK_IMPORTED_MODULE_3__data_factions__["a" /* default */].filter(function(faction){return _this3.props.appState.selectedFaction===faction.id;})[0].name:"选择阵营..."))));}}]);return FactionSelect;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (FactionSelect);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    padding-bottom: 0.6em;\n    text-align: center;\n\n    h1 {\n        width: 16em;\n        height: 7em;\n        margin: 0 auto;\n        font-size: 1em;\n        text-indent: -9999px;\n\n        background-image: url(\"assets/images/logo.png\");\n        background-repeat: no-repeat;\n        background-position: top center;\n        background-size: contain;\n    }\n"],["\n    padding-bottom: 0.6em;\n    text-align: center;\n\n    h1 {\n        width: 16em;\n        height: 7em;\n        margin: 0 auto;\n        font-size: 1em;\n        text-indent: -9999px;\n\n        background-image: url(\"assets/images/logo.png\");\n        background-repeat: no-repeat;\n        background-position: top center;\n        background-size: contain;\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var LogoWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);var Logo=function(_Component){_inherits(Logo,_Component);function Logo(){_classCallCheck(this,Logo);return _possibleConstructorReturn(this,(Logo.__proto__||Object.getPrototypeOf(Logo)).apply(this,arguments));}_createClass(Logo,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LogoWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",null,"Kill Team Command Roster"));}}]);return Logo;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SectionHeader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Team__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RosterInfo__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Resource__ = __webpack_require__(145);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    text-align: center;\n"],["\n    text-align: center;\n"]),_templateObject2=_taggedTemplateLiteral(["\n    background: url(\"assets/images/orange-bg.jpg\");\n    border-top: solid 6px black;\n    margin-top: 1.5em;\n    padding: 0.8em 0.8em 1.5em;\n    text-align: center;\n\n    .resources__inner {\n        margin: 0 auto;\n        max-width: ",";\n        text-align: left;\n    }\n\n    .resources__wrap {\n        margin-top: 0.5em;\n        text-align: center;\n    }\n"],["\n    background: url(\"assets/images/orange-bg.jpg\");\n    border-top: solid 6px black;\n    margin-top: 1.5em;\n    padding: 0.8em 0.8em 1.5em;\n    text-align: center;\n\n    .resources__inner {\n        margin: 0 auto;\n        max-width: ",";\n        text-align: left;\n    }\n\n    .resources__wrap {\n        margin-top: 0.5em;\n        text-align: center;\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var RosterWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);var SectionWrapResources=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].maxWidth);var Roster=function(_Component){_inherits(Roster,_Component);function Roster(){_classCallCheck(this,Roster);return _possibleConstructorReturn(this,(Roster.__proto__||Object.getPrototypeOf(Roster)).apply(this,arguments));}_createClass(Roster,[{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RosterWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RosterInfo__["a" /* default */],{appState:this.props.appState,setAppState:this.props.setAppState}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Team__["a" /* default */],{appState:this.props.appState,setAppState:this.props.setAppState}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionWrapResources,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"resources__inner"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SectionHeader__["a" /* default */],{text:"Campaign"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"resources__wrap"},this.props.appState.resources.map(function(resource){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Resource__["a" /* default */],{key:resource.name,resource:resource,appState:_this2.props.appState,setAppState:_this2.props.setAppState});})))));}}]);return Roster;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Roster);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_StyledSelectInput__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_factions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_PrepareUnitCardData__ = __webpack_require__(105);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SelectInput=function(_Component){_inherits(SelectInput,_Component);function SelectInput(){var _ref;var _temp,_this,_ret;_classCallCheck(this,SelectInput);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SelectInput.__proto__||Object.getPrototypeOf(SelectInput)).call.apply(_ref,[this].concat(args))),_this),_this.addUnit=function(input){// get select option
var selectedUnit=_this.getFactionData().data.units.filter(function(unit){return unit.name===input.target.value;})[0];// prepare card data
var unitCard=new __WEBPACK_IMPORTED_MODULE_3__helpers_PrepareUnitCardData__["a" /* default */](selectedUnit,_this.props.appState.selectedFaction,_this.props.appState.rosterIsActive);// add option to appState
_this.props.setAppState({units:_this.props.appState.units.concat(unitCard.prepare())});// reset input
_this.setState({optionsValue:"default"});},_this.getFactionData=function(){var selectedFaction=_this.props.appState.selectedFaction;if(!selectedFaction){return null;}return __WEBPACK_IMPORTED_MODULE_2__data_factions__["a" /* default */].filter(function(faction){return faction.id===selectedFaction;})[0];},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SelectInput,[{key:"componentWillMount",value:function componentWillMount(){this.setState({optionsValue:"default"});}},{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles_StyledSelectInput__["a" /* default */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select",{value:this.state.optionsValue,onChange:this.addUnit},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{value:"default",disabled:true},"添加一名小队成员..."),this.getFactionData()&&this.getFactionData().data.units.map(function(option){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:option.name,value:option.name},option.name);})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,"添加一名小队成员..."))));}}]);return SelectInput;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SelectInput);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_v1__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var PrepareUnitCardData=function(){function PrepareUnitCardData(unit,factionId,rosterIsActive){_classCallCheck(this,PrepareUnitCardData);this.unit=unit;this.data=[{id:__WEBPACK_IMPORTED_MODULE_0_uuid_v1___default()(),faction:factionId,unitName:this.unit.name,model:this.default("models").name,cost:this.calculateCost(),isSpecialist:false,specialism:null,abilities:[],moniker:null,demeanour:null,wargear:this.wargear(),otherWargear:this.otherWargear(),level:1,inKillTeam:!rosterIsActive,showCampaign:false,experience:0,fireTeamAbility1:null,fireTeamAbility2:null,fireTeamAbility3:null,convalescence:false,newRecruit:false}];this.isNamed();}_createClass(PrepareUnitCardData,[{key:"isNamed",value:function isNamed(){if(this.unit.named){this.data[0].moniker=this.unit.name;if(this.unit.specialisms.length===1){this.data[0].isSpecialist=true;this.data[0].specialism=this.unit.specialisms[0].name;}}}},{key:"default",value:function _default(arr){return this.unit[arr].filter(function(index){return index.default;})[0];}},{key:"wargear",value:function wargear(){return this.default("models").wargear.filter(function(gear){return gear.default;}).map(function(gear){return{name:gear.name,selectedOption:gear.name,cost:gear.cost?gear.cost:0};});}},{key:"otherWargear",value:function otherWargear(){if(!this.default("models").otherWargear){return false;}return this.default("models").otherWargear.map(function(gear){return{name:gear.name,checked:gear.default,cost:gear.cost};});}},{key:"calculateCost",value:function calculateCost(){var cost=this.default("models").cost;this.default("models").wargear.filter(function(gear){return gear.default;}).map(function(gear){if(gear.cost){cost+=gear.cost;}return gear;});return cost;}},{key:"prepare",value:function prepare(){return this.data;}}]);return PrepareUnitCardData;}();/* harmony default export */ __webpack_exports__["a"] = (PrepareUnitCardData);

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_StyledSelectInput__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_commanders__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_PrepareCommanderCardData__ = __webpack_require__(128);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SelectInput=function(_Component){_inherits(SelectInput,_Component);function SelectInput(){var _ref;var _temp,_this,_ret;_classCallCheck(this,SelectInput);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SelectInput.__proto__||Object.getPrototypeOf(SelectInput)).call.apply(_ref,[this].concat(args))),_this),_this.addCommander=function(input){// get select option
var selectedUnit=_this.getFactionData().data.filter(function(commander){return commander.name===input.target.value;})[0];// prepare card data
var commanderCard=new __WEBPACK_IMPORTED_MODULE_3__helpers_PrepareCommanderCardData__["a" /* default */](selectedUnit,_this.props.appState.selectedFaction,_this.props.appState.rosterIsActive);// add option to appState
_this.props.setAppState({commanders:_this.props.appState.commanders.concat(commanderCard.prepare())});// reset input
_this.setState({optionsValue:"default"});},_this.getFactionData=function(){var selectedFaction=_this.props.appState.selectedFaction;if(!selectedFaction){return null;}return __WEBPACK_IMPORTED_MODULE_2__data_commanders__["a" /* default */].factions.filter(function(faction){return faction.id===selectedFaction;})[0];},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SelectInput,[{key:"componentWillMount",value:function componentWillMount(){this.setState({optionsValue:"default"});}},{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles_StyledSelectInput__["a" /* default */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select",{value:this.state.optionsValue,onChange:this.addCommander},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{value:"default",disabled:true},"添加一名小队成员..."),this.getFactionData()&&this.getFactionData().data.map(function(option){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:option.name,value:option.name},option.name);})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,"添加一名指挥官..."))));}}]);return SelectInput;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (SelectInput);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var astartes=[{name:"Primaris Captain",costs:[76,96,116,141],specialisms:["Ferocity","Fortitude","领队","后勤","Melee","射击","潜行","战略","Strength"],wargear:[{name:"Master Crafted Auto Bolt Rifle",default:true,upgrades:[{name:"Master Crafted Stalker Bolt Rifle"}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Power Sword",cost:7}]},{name:"Primaris Lieutenant",costs:[46,61,76,101],specialisms:["Ferocity","Fortitude","领队","后勤","Melee","射击","潜行","战略","Strength"],wargear:[{name:"Master Crafted Auto Bolt Rifle",default:true,upgrades:[{name:"Master Crafted Stalker Bolt Rifle"},{name:"Power Sword",cost:4}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Primaris Chaplain",costs:[63,78,93,118],specialisms:["Ferocity","Fortitude","领队","Melee","射击","Strength"],wargear:[{name:"Crozius Arcanum",default:true},{name:"Absolver Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Primaris Librarian",costs:[81,101,121,146],specialisms:["Fortitude","Melee","Psyker","射击","Strength"],wargear:[{name:"Force Sword",default:true},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{named:true,name:"Janus Draik",costs:[50,65,80,105],specialisms:["领队"],wargear:[{name:"Monomolecular Rapier",default:true},{name:"Heirloom Pistol",default:true},{name:"Archeotech Grenade",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (astartes);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var militarum=[{name:"Commissar",costs:[10,15,30,50],specialisms:["Fortitude","领队","后勤","Melee","射击","战略"],wargear:[{name:"Bolt Pistol",default:true,upgrades:[{name:"Plasma Pistol",cost:3}]}],otherWargear:[{name:"Power Fist",cost:6},{name:"Power Sword",cost:2}]},{name:"Lord Commissar",costs:[25,30,45,65],specialisms:["Fortitude","领队","后勤","Melee","射击","战略"],wargear:[{name:"Bolt Pistol",default:true,upgrades:[{name:"Plasma Pistol",cost:3}]}],otherWargear:[{name:"Power Fist",cost:6},{name:"Power Sword",cost:2}]},{name:"Platoon Commander",costs:[10,15,30,50],specialisms:["领队","后勤","射击","潜行","战略"],wargear:[{name:"Laspistol",default:true,upgrades:[{name:"Boltgun",cost:2},{name:"Bolt Pistol"},{name:"Plasma Pistol",cost:3}]},{name:"Frag Grenades",default:true}],otherWargear:[{name:"Chainsword",cost:1},{name:"Power Sword",cost:2},{name:"Power Fist",cost:6}]},{name:"Company Commander",costs:[15,20,35,55],specialisms:["领队","后勤","射击","潜行","战略"],wargear:[{name:"Laspistol",default:true,upgrades:[{name:"Boltgun",cost:2},{name:"Bolt Pistol"},{name:"Plasma Pistol",cost:3}]},{name:"Frag Grenades",default:true}],otherWargear:[{name:"Chainsword",cost:1},{name:"Power Sword",cost:2},{name:"Power Fist",cost:6}]},{name:"Tempestor Prime",costs:[25,30,45,65],specialisms:["领队","后勤","射击","潜行","战略"],wargear:[{name:"Hot-shot Laspistol",default:true,upgrades:[{name:"Tempestus Command Rod",cost:2},{name:"Bolt Pistol"},{name:"Plasma Pistol",cost:3}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Chainsword",cost:1},{name:"Power Sword",cost:2},{name:"Power Fist",cost:8}]},{named:true,name:"Janus Draik",costs:[50,65,80,105],specialisms:["领队"],wargear:[{name:"Monomolecular Rapier",default:true},{name:"Heirloom Pistol",default:true},{name:"Archeotech Grenade",default:true}]},{named:true,name:"Taddeus the Purifier",costs:[50,55,70,85],specialisms:["Ferocity"],wargear:[{name:"Laspistol",default:true},{name:"Servo-stubber",default:true},{name:"Power Maul",default:true}]},{named:true,name:"Espern Locarno",costs:[30,40,50,60],specialisms:["Psyker"],wargear:[{name:"Laspistol",default:true},{name:"Force-orb Cane",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (militarum);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var adeptusMechanicus=[{name:"Tech-priest Enginseer",costs:[28,33,48,68],specialisms:["Fortitude","领队","后勤","射击","战略","Strength"],wargear:[{name:"Laspistol",default:true},{name:"Omnissian Axe",default:true},{name:"Servo-arm",default:true}]},{name:"Tech-priest Dominus",costs:[130,150,170,195],specialisms:["Fortitude","领队","后勤","射击","战略","Strength"],wargear:[{name:"Volkite Blaster",default:true,upgrades:[{name:"Eradication Ray",cost:14}]},{name:"Macrostubber",default:true,upgrades:[{name:"Phosphor Serpenta",cost:4}]},{name:"Omnissian Axe",default:true}]},{named:true,name:"Janus Draik",costs:[50,65,80,105],specialisms:["领队"],wargear:[{name:"Monomolecular Rapier",default:true},{name:"Heirloom Pistol",default:true},{name:"Archeotech Grenade",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (adeptusMechanicus);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var harlequins=[{name:"Troupe Master",costs:[50,65,80,105],specialisms:["Ferocity","领队","Melee","射击","潜行","战略"],wargear:[{name:"Shuriken Pistol",default:true,upgrades:[{name:"Neuro Disruptor",cost:6},{name:"Fusion Pistol",cost:10}]},{name:"Harlequin's Blade",default:true,upgrades:[{name:"Power Sword",cost:4},{name:"Harlequin's Embrace",cost:6},{name:"Harlequin's Kiss",cost:9},{name:"Harlequin's Caress",cost:7}]},{name:"Plasma Grenades",default:true}]},{name:"Shadowseer",costs:[65,80,95,120],specialisms:["Ferocity","Melee","Psyker","射击","潜行"],wargear:[{name:"Shuriken Pistol",default:true,upgrades:[{name:"Neuro Disruptor",cost:6}]},{name:"Hallucinogen Grenade Launcher",default:true},{name:"Miststave",default:true}]},{name:"Death Jester",costs:[45,60,75,100],specialisms:["Ferocity","Melee","射击","潜行"],wargear:[{name:"Shrieker Cannon",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (harlequins);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var greyKnights=[{name:"Brotherhood Champion",costs:[108,128,148,173],specialisms:["Fortitude","领队","Melee","Psyker","射击","Strength"],wargear:[{name:"Nemesis Force Sword",default:true},{name:"Storm Bolter",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true},{name:"Psyk-out Grenades",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (greyKnights);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var heretics=[{name:"Exalted Champion",costs:[30,35,50,70],specialisms:["Ferocity","Fortitude","领队","后勤","Melee","射击","潜行","战略","Strength"],wargear:[{name:"Chainsword",default:true,upgrades:[{name:"Power Axe",cost:5},{name:"Power Fist",cost:12},{name:"Power Sword",cost:4}]},{name:"Bolt Pistol",default:true,upgrades:[{name:"Plasma Pistol",cost:4}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Boltgun"}]},{name:"Sorcerer",costs:[65,80,95,120],specialisms:["Fortitude","Melee","Psyker","射击","Strength"],wargear:[{name:"Force Sword",default:true,upgrades:[{name:"Force Stave"}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (heretics);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var deathGuard=[{name:"Foul Blightspawn",costs:[80,100,120,145],specialisms:["Fortitude","后勤","Melee","Strength"],wargear:[{name:"Plague Sprayer",default:true},{name:"Blight Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Tallyman",costs:[45,60,75,100],specialisms:["Fortitude","领队","后勤","Melee","射击","战略","Strength"],wargear:[{name:"Plasma Pistol",default:true},{name:"Blight Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Biologus Putrifier",costs:[50,65,80,105],specialisms:["Fortitude","后勤","Melee","射击","Strength"],wargear:[{name:"Plague Knife",default:true},{name:"Injector Pistol",default:true},{name:"Hyper Blight Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Plague Surgeon",costs:[45,60,75,100],specialisms:["Fortitude","领队","后勤","Melee","Strength"],wargear:[{name:"Bolt Pistol",default:true},{name:"Balesword",default:true},{name:"Blight Grenades",default:true},{name:"Krak Grenades",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (deathGuard);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var deathGuard=[{name:"Exalted Sorcerer",costs:[81,101,121,146],specialisms:["Fortitude","领队","后勤","Melee","Psyker","射击","战略","Strength"],wargear:[{name:"Force Stave",default:true},{name:"Inferno Bolt Pistol",default:true,upgrades:[{name:"Plasma Pistol",cost:7},{name:"Warpflame Pistol",cost:7}]},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Power Sword"},{name:"Disc of Tzeentch",cost:20}]},{name:"Tzaangor Shaman",costs:[40,55,70,95],specialisms:["Ferocity","Fortitude","领队","Melee","Psyker","战略","Strength"],wargear:[{name:"Force Stave",default:true},{name:"Disc of Tzeentch",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (deathGuard);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var asuryani=[{name:"Autarch",costs:[55,70,85,110],specialisms:["Ferocity","领队","后勤","Melee","射击","潜行","战略"],wargear:[{name:"Star Glaive",default:true,upgrades:[{name:"Power Sword"},{name:"Fusion Pistol",cost:10},{name:"Swooping Hawk Wings",cost:20}]},{name:"Plasma Grenades",default:true}]},{name:"Warlock",costs:[20,25,40,60],specialisms:["后勤","Melee","Psyker","射击"],wargear:[{name:"Shuriken Pistol",default:true},{name:"Witchblade",default:true,upgrades:[{name:"Singing Spear",cost:3}]}]},{name:"Farseer",costs:[55,70,85,110],specialisms:["领队","后勤","Psyker","战略"],wargear:[{name:"Shuriken Pistol",default:true},{name:"Witchblade",default:true,upgrades:[{name:"Singing Spear",cost:5}]}]},{named:true,name:"Amallyn Shadowguide",costs:[30,35,50,60],specialisms:["潜行"],wargear:[{name:"Ranger Long Rifle",default:true},{name:"Power Blade",default:true},{name:"Plasma Grenades",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (asuryani);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var deathWatch=[{name:"Watch Master",costs:[125,145,165,190],specialisms:["Fortitude","领队","后勤","Melee","射击","战略","Strength"],wargear:[{name:"Guardian Spear",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Primaris Captain",costs:[76,96,116,141],specialisms:["Ferocity","Fortitude","领队","后勤","Melee","射击","潜行","战略","Strength"],wargear:[{name:"Master Crafted Auto Bolt Rifle",default:true,upgrades:[{name:"Master Crafted Stalker Bolt Rifle"}]},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}],otherWargear:[{name:"Power Sword",cost:7}]},{name:"Primaris Chaplain",costs:[63,78,93,118],specialisms:["Ferocity","Fortitude","领队","Melee","射击","Strength"],wargear:[{name:"Crozius Arcanum",default:true},{name:"Absolver Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]},{name:"Primaris Librarian",costs:[81,101,121,146],specialisms:["Fortitude","Melee","Psyker","射击","Strength"],wargear:[{name:"Force Sword",default:true},{name:"Bolt Pistol",default:true},{name:"Frag Grenades",default:true},{name:"Krak Grenades",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (deathWatch);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var drukhari=[{name:"Archon",costs:[56,71,86,111],specialisms:["Ferocity","领队","后勤","Melee","射击","潜行","战略"],wargear:[{name:"Splinter Pistol",default:true,upgrades:[{name:"Blast Pistol",cost:10}]},{name:"Huskblade",default:true,upgrades:[{name:"Agoniser"},{name:"Power Sword"},{name:"Venom Blade"}]}]},{name:"Succubus",costs:[48,63,78,103],specialisms:["Ferocity","Melee","潜行"],wargear:[{name:"Agoniser",default:true},{name:"Archite Glaive",default:true}]},{name:"Haemonculus",costs:[30,35,50,70],specialisms:["Ferocity","Fortitude","后勤","Melee","Strength"],wargear:[{name:"Stinger Pistol",default:true},{name:"Haemonculus Tools",default:true}],otherWargear:[{name:"Inchor Injector",cost:5}]}];/* harmony default export */ __webpack_exports__["a"] = (drukhari);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var necrons=[{name:"Overlord",costs:[86,106,126,151],specialisms:["Fortitude","领队","后勤","Melee","射击","战略","Strength"],wargear:[{name:"Voidscythe",default:true,upgrades:[{name:"Staff of Light"},{name:"Warscythe"}]}]},{name:"Cryptek",costs:[44,59,74,99],specialisms:["Fortitude","后勤","Melee","射击","战略","Strength"],wargear:[{name:"Staff of Light",default:true}],otherWargear:[{name:"Canoptek Cloak",cost:10}]}];/* harmony default export */ __webpack_exports__["a"] = (necrons);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var orks=[{name:"Warboss",costs:[62,82,102,127],specialisms:["Ferocity","Fortitude","领队","Melee","战略","Strength"],wargear:[{name:"Kustom Shoota",default:true,upgrades:[{name:"Kombi-weapon with Rokkit Launcha",cost:5},{name:"Kombi-weapon with Skorch",cost:8}]},{name:"Big Choppa",default:true,upgrades:[{name:"Power Klaw",cost:13}]},{name:"Stikkbombs",default:true}],otherWargear:[{name:"Attack Squig",cost:6}]},{name:"Big Mek",costs:[20,25,40,60],specialisms:["Ferocity","Fortitude","后勤","Melee","Strength"],wargear:[{name:"Slugga",default:true,upgrades:[{name:"Kustom Mega-slugga",cost:4},{name:"Shokk Attack Gun",cost:27}]},{name:"Choppa",default:true},{name:"Stikkbombs",default:true}],otherWargear:[{name:"Kustom Force Field"}]},{name:"Painboy",costs:[20,25,40,60],specialisms:["Ferocity","Fortitude","后勤","Melee","Strength"],wargear:[{name:"Power Klaw",default:true},{name:"'urty Syringe",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (orks);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tau=[{name:"火刃队长",costs:[23,28,43,63],specialisms:["领队","后勤","射击","潜行","战略"],wargear:[{name:"标记光",default:true},{name:"脉冲步枪",default:true},{name:"光子手雷",default:true}]},{name:"以太长老",costs:[18,23,38,58],specialisms:["领队","后勤","战略"],wargear:[{name:"荣耀之刃",default:true,upgrades:[{name:"平衡之剑",cost:1}]}],otherWargear:[{name:"悬浮兵蜂",cost:5}]},{named:true,name:"Dahyak Grekh",costs:[25,30,40,50],specialisms:["潜行"],wargear:[{name:"克鲁特步枪",default:true},{name:"克鲁特手枪",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (tau);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tyranids=[{name:"Tyranid Prime",costs:[50,65,80,105],specialisms:["Ferocity","Fortitude","领队","Melee","战略","Strength"],wargear:[{name:"Scything Talons",default:true,upgrades:[{name:"Boneswords",cost:5},{name:"Rending Claws"},{name:"Lash Whip and Bonesword",cost:5}]},{name:"Devourer",default:true,upgrades:[{name:"Deathspitter",cost:5},{name:"Scything Talons"},{name:"Spinefists"},{name:"Boneswords",cost:5},{name:"Rending Claws"},{name:"Lash Whip and Bonesword",cost:5}]}],otherWargear:[{name:"Flesh Hooks",cost:2},{name:"Toxin Sacs",cost:8},{name:"Adrenal Glands",cost:1}]},{name:"Broodlord",costs:[131,151,171,196],specialisms:["Ferocity","Fortitude","领队","Melee","Psyker","潜行","战略","Strength"],wargear:[{name:"Monstrous Rending Claws",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (tyranids);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var genestealerCults=[{name:"Magus",costs:[30,35,50,70],specialisms:["领队","后勤","Psyker","潜行"],wargear:[{name:"Autopistol",default:true},{name:"Force Stave",default:true}]},{name:"Primus",costs:[28,33,48,68],specialisms:["Ferocity","Fortitude","领队","后勤","Melee","射击","潜行","战略","Strength"],wargear:[{name:"Needle Pistol",default:true},{name:"Bonesword",default:true},{name:"Toxin Injector Claw",default:true},{name:"Blasting Charges",default:true}]},{name:"Patriarch",costs:[131,151,171,196],specialisms:["Ferocity","Fortitude","Melee","Psyker","潜行","Strength"],wargear:[{name:"Monstrous Rending Claws",default:true}]},{name:"Acolyte Iconward",costs:[18,23,38,58],specialisms:["Ferocity","Fortitude","领队","Melee","潜行"],wargear:[{name:"Autopistol",default:true},{name:"Rending Claw",default:true},{name:"Blasting Charges",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (genestealerCults);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var gellerpox=[{named:true,name:"Vulgrar Thrice-Cursed",costs:[65,85,105,130],specialisms:["Combat","爆破兵","Strength","老兵","Zealot"],traits:[{name:"Twisted Brilliance",cost:10},{name:"Master of Vermin",cost:15}],wargear:[{name:"Belly-flamer",default:true},{name:"Fleshripper Claws",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (gellerpox);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var starstriders=[{named:true,name:"Elucia Vhane",costs:[45,60,75,100],specialisms:["Combat","斥候","战略","老兵","Zealot"],traits:[{name:"Explorator Fleetmaster",cost:10},{name:"Trader Militant",cost:15}],wargear:[{name:"Heirloom Pistol",default:true},{name:"Monomolecular Cane-rapier",default:true},{name:"Concussion grenades",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (starstriders);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var servantsAbyss=[{named:true,name:"Obsidius Mallex",costs:[125,140,155,170],specialisms:["Fortitude"],wargear:[{name:"Plasma Pistol",default:true},{name:"Thunder Hammer",default:true}]}];/* harmony default export */ __webpack_exports__["a"] = (servantsAbyss);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v1__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_v1__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var PrepareCommanderCardData=function(){function PrepareCommanderCardData(commander,factionId,rosterIsActive){_classCallCheck(this,PrepareCommanderCardData);this.commander=commander;this.data=[{id:__WEBPACK_IMPORTED_MODULE_0_uuid_v1___default()(),faction:factionId,model:this.commander.name,cost:this.commander.costs[0],level:1,specialism:null,abilities:[],traits:[],moniker:null,wargear:this.wargear(),otherWargear:this.otherWargear(),inKillTeam:!rosterIsActive,showCampaign:false,injurySerious:false,injuryMinor:false,injuryContusion:false}];this.isNamed();}_createClass(PrepareCommanderCardData,[{key:"isNamed",value:function isNamed(){if(this.commander.named){this.data[0].moniker=this.commander.name;if(this.commander.specialisms.length===1){this.data[0].specialism=this.commander.specialisms[0];}}}},{key:"wargear",value:function wargear(){return this.commander.wargear.filter(function(gear){return gear.default;}).map(function(gear){return{name:gear.name,selectedOption:gear.name,cost:gear.cost?gear.cost:0};});}},{key:"otherWargear",value:function otherWargear(){if(!this.commander.otherWargear){return false;}return this.commander.otherWargear.map(function(gear){return{name:gear.name,checked:gear.default,cost:gear.cost};});}},{key:"prepare",value:function prepare(){return this.data;}}]);return PrepareCommanderCardData;}();/* harmony default export */ __webpack_exports__["a"] = (PrepareCommanderCardData);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_StyledCard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_factions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_Specialism__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_Footer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_SpecialismHeader__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_SelectInput__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card_Wargear__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__card_OtherWargear__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__card_Names__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__card_Campaign__ = __webpack_require__(137);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    background: rgba(255, 255, 255, 0.7);\n    border-right: solid 2px ",";\n    border-left: solid 2px ",";\n\n    > div {\n        padding: 0.2em 0.5em;\n        border-bottom: solid 1px rgba(0, 0, 0, 0.1);\n    }\n"],["\n    background: rgba(255, 255, 255, 0.7);\n    border-right: solid 2px ",";\n    border-left: solid 2px ",";\n\n    > div {\n        padding: 0.2em 0.5em;\n        border-bottom: solid 1px rgba(0, 0, 0, 0.1);\n    }\n"]),_templateObject2=_taggedTemplateLiteral(["\n    .cardRow__label-wrap {\n    }\n\n    .cardRow__cost {\n        float: right;\n        font-family: ",";\n        font-size: 0.9em;\n        color: ",";\n    }\n"],["\n    .cardRow__label-wrap {\n    }\n\n    .cardRow__cost {\n        float: right;\n        font-family: ",";\n        font-size: 0.9em;\n        color: ",";\n    }\n"]),_templateObject3=_taggedTemplateLiteral(["\n    display: block;\n\n    > span {\n        display: block;\n    }\n"],["\n    display: block;\n\n    > span {\n        display: block;\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var UnitCardBody=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var CardRowWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var CardRowWrapWargear=Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(CardRowWrap)(_templateObject3);var UnitCard=function(_Component){_inherits(UnitCard,_Component);function UnitCard(){var _ref;var _temp,_this,_ret;_classCallCheck(this,UnitCard);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=UnitCard.__proto__||Object.getPrototypeOf(UnitCard)).call.apply(_ref,[this].concat(args))),_this),_this.handleChange=function(event){var targetValue=event.target.value;var targetId=event.target.id;// If the change is the `inKillTeam` checkbox, then toggle that value
if(event.target.name==="inKillTeam"||event.target.name==="convalescence"||event.target.name==="newRecruit"){targetValue=event.target.checked;targetId=event.target.name;}// If the change is back to default, null it
if(event.target.value==="default"){targetValue=null;}// Get the current units in appState and adjust the correct unit
var newAppStateUnits=_this.props.appState.units.map(function(unit){if(unit.id===_this.props.card.id){unit[targetId]=targetValue;_this.prepareCostForState(unit);}return unit;});_this.props.setAppState({units:newAppStateUnits});},_this.changeModel=function(event){// Change model data
_this.modelData=_this.unitData.models.filter(function(model){return model.name===event.target.value;})[0];// Change wargear for new model
var newWargear=null;if(_this.modelData.wargear){newWargear=_this.modelData.wargear.filter(function(gear){return gear.default;}).map(function(gear){return{name:gear.name,selectedOption:gear.name,cost:gear.cost?gear.cost:0};});}// Change OtherWargear for new model
var newOtherWargear=null;if(_this.modelData.otherWargear){newOtherWargear=_this.modelData.otherWargear.map(function(otherGear){return{name:otherGear.name,checked:false,cost:otherGear.cost?otherGear.cost:0};});}// Get the current units in appState and adjust the correct unit
var newAppStateUnits=_this.props.appState.units.map(function(unit){if(unit.id===_this.props.card.id){unit.model=event.target.value;unit.wargear=newWargear;unit.otherWargear=newOtherWargear;_this.prepareCostForState(unit);}return unit;});_this.props.setAppState({units:newAppStateUnits});},_this.changeWargear=function(event){var selectedGear=_this.modelData.wargear.filter(function(gear){return gear.name===event.target.name;})[0];var selectedGearOption=void 0;if(selectedGear.name===event.target.value){selectedGearOption=selectedGear;}else if(selectedGear.upgrades){selectedGearOption=selectedGear.upgrades.filter(function(option){return option.name===event.target.value;})[0];}else{selectedGearOption=selectedGear;}var newWargearData={name:selectedGear.name,selectedOption:selectedGearOption.name,cost:selectedGearOption.cost?selectedGearOption.cost:0};// Get the current units in appState and adjust the correct unit
var newAppStateUnits=_this.props.appState.units.map(function(unit){if(unit.id===_this.props.card.id){for(var gearIndex in unit.wargear){if(unit.wargear[gearIndex].name===newWargearData.name){unit.wargear[gearIndex]=newWargearData;break;}}_this.prepareCostForState(unit);}return unit;});_this.props.setAppState({units:newAppStateUnits});},_this.changeOtherWargear=function(event){// Get the current units in appState and adjust the correct unit
var newAppStateUnits=_this.props.appState.units;for(var i in newAppStateUnits){if(newAppStateUnits[i].id===_this.props.card.id){for(var gearIndex in newAppStateUnits[i].otherWargear){if(newAppStateUnits[i].otherWargear[gearIndex].name===event.target.id){newAppStateUnits[i].otherWargear[gearIndex].checked=event.target.checked;break;}}_this.prepareCostForState(newAppStateUnits[i]);break;}}_this.props.setAppState({units:newAppStateUnits});},_this.prepareCostForState=function(unitInState){var squadMemberCost=_this.modelData.cost;if(unitInState.wargear){unitInState.wargear.map(function(gear){if(gear.cost){squadMemberCost+=gear.cost;}return gear;});}if(unitInState.otherWargear){unitInState.otherWargear.map(function(gear){if(gear.checked&&gear.cost){squadMemberCost+=gear.cost;}return gear;});}if(unitInState.isSpecialist&&unitInState.level>1){squadMemberCost+=unitInState.level*4-4;}if(!unitInState.isSpecialist&&!unitInState.newRecruit){// Unit is in a fire team
// and is not a new recruit
if(unitInState.experience===12){squadMemberCost+=3;}else if(unitInState.experience>=7){squadMemberCost+=2;}else if(unitInState.experience>=3){squadMemberCost+=1;}}unitInState.cost=squadMemberCost;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(UnitCard,[{key:"componentWillMount",value:function componentWillMount(){var _this2=this;this.factionData=__WEBPACK_IMPORTED_MODULE_5__data_factions__["a" /* default */].filter(function(faction){return faction.id===_this2.props.card.faction;})[0].data;this.unitData=this.factionData.units.filter(function(unit){return unit.name===_this2.props.card.unitName;})[0];this.modelData=this.unitData.models.filter(function(model){return model.name===_this2.props.card.model;})[0];// Update unit's cost
this.props.appState.units.filter(function(_ref2){var id=_ref2.id;return id===_this2.props.card.id;}).map(function(unit){_this2.prepareCostForState(unit);return unit;});}// TODO
// Refactor this entire file, lots of repetition etc, needs streamlining
},{key:"render",value:function render(){var _this3=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_StyledCard__["a" /* default */],{id:this.props.card.id},this.props.card.isSpecialist&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__card_SpecialismHeader__["a" /* default */],{specialism:this.props.card.specialism}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.card.unitName),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"card-header__cost"},this.props.card.cost)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(UnitCardBody,null,!this.unitData.named&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"cardRow__label-wrap"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"单位类型："),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"cardRow__cost"},"+",this.modelData.cost)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__card_SelectInput__["a" /* default */],{id:"model",handleChange:this.changeModel,options:this.unitData.models.map(function(model){return model.name;}),selectedOption:this.props.card.model})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"姓名:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__card_Names__["a" /* default */],{card:this.props.card,handleChange:this.handleChange})),this.factionData.demeanours&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"外表："),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__card_SelectInput__["a" /* default */],{id:"demeanour",handleChange:this.handleChange,defaultOption:"None",options:this.factionData.demeanours,selectedOption:this.props.card.demeanour})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__card_Specialism__["a" /* default */],{specialisms:this.unitData.specialisms,card:this.props.card,prepareCostForState:this.prepareCostForState,appState:this.props.appState,setAppState:this.props.setAppState})),this.modelData.wargear&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrapWargear,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"装备:"),this.modelData.wargear.map(function(gear,index){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__card_Wargear__["a" /* default */],{key:gear.name,selectedGear:_this3.props.card.wargear.find(function(gearInCard){return gearInCard.name===gear.name;}),gear:gear,changeWargear:_this3.changeWargear,separator:_this3.modelData.wargear.length!==index+1});})),this.modelData.otherWargear&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__card_OtherWargear__["a" /* default */],{modelData:this.modelData,card:this.props.card,changeOtherWargear:this.changeOtherWargear})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__card_Campaign__["a" /* default */],{appState:this.props.appState,setAppState:this.props.setAppState,card:this.props.card,handleChange:this.handleChange,prepareCostForState:this.prepareCostForState})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__card_Footer__["a" /* default */],{appState:this.props.appState,setAppState:this.props.setAppState,card:this.props.card,handleChange:this.handleChange}));}}]);return UnitCard;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (UnitCard);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SpecialismAbilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SpecialismLevels__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_StyledLabel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_StyledSpecialismType__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons_CheckboxIcon__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_cardChanges__ = __webpack_require__(11);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    padding: 0.1em 0;\n\n    .specialism__sub-header {\n        display: block;\n        font-size: 0.9em;\n        margin: 0.4em 0;\n    }\n"],["\n    padding: 0.1em 0;\n\n    .specialism__sub-header {\n        display: block;\n        font-size: 0.9em;\n        margin: 0.4em 0;\n    }\n"]),_templateObject2=_taggedTemplateLiteral(["\n    position: relative;\n    overflow: hidden;\n\n    input {\n        opacity: 0;\n        padding: 0;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n        width: 100%;\n        height: 100%;\n    }\n\n    label {\n        display: block;\n    }\n\n    .is-specialist__checkbox {\n        width: 1.2em;\n        height: 1.2em;\n        display: block;\n        float: left;\n        margin-right: 0.5em;\n        border: solid 2px ",";\n\n        svg {\n            width: 100%;\n            height: 100%;\n        }\n    }\n"],["\n    position: relative;\n    overflow: hidden;\n\n    input {\n        opacity: 0;\n        padding: 0;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n        width: 100%;\n        height: 100%;\n    }\n\n    label {\n        display: block;\n    }\n\n    .is-specialist__checkbox {\n        width: 1.2em;\n        height: 1.2em;\n        display: block;\n        float: left;\n        margin-right: 0.5em;\n        border: solid 2px ",";\n\n        svg {\n            width: 100%;\n            height: 100%;\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var SpecialismWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);var SpecialismCheckbox=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].orange);var Specialism=function(_Component){_inherits(Specialism,_Component);function Specialism(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Specialism);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Specialism.__proto__||Object.getPrototypeOf(Specialism)).call.apply(_ref,[this].concat(args))),_this),_this.handleChange=function(event){Object(__WEBPACK_IMPORTED_MODULE_8__helpers_cardChanges__["b" /* specialismChange */])(event,_this.props,"units");},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Specialism,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialismWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialismCheckbox,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{id:"isSpecialist",name:"isSpecialist",type:"checkbox",onChange:this.handleChange}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:"isSpecialist"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"is-specialist__checkbox"},this.props.card.isSpecialist&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__icons_CheckboxIcon__["a" /* default */],{fill:__WEBPACK_IMPORTED_MODULE_4__styles_theme__["a" /* default */].orange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__styles_StyledLabel__["a" /* default */],null,"专家?"),this.props.card.level>1&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"cardRow__cost"},"+",this.props.card.level*4-4))),this.props.card.isSpecialist&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__styles_StyledSpecialismType__["a" /* default */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"specialist-type__text"},"Type:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"specialist-type__select"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select",{id:"specialism",onChange:this.handleChange,defaultValue:"default"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{value:"default",disabled:true},"选择..."),this.props.specialisms.map(function(specialism){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:specialism.name,value:specialism.name},specialism.name,specialism.restriction&&" ("+specialism.restriction+" only)");})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"specialist-type__display"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.card.specialism?this.props.card.specialism:"选择...")))),this.props.card.specialism&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"specialism__sub-header"},"等级和能力："),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SpecialismLevels__["a" /* default */],{card:this.props.card,handleChange:this.handleChange}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SpecialismAbilities__["a" /* default */],{type:"units",specialism:this.props.card.specialism,level:this.props.card.level,card:this.props.card,appState:this.props.appState,setAppState:this.props.setAppState}))));}}]);return Specialism;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Specialism);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AbilityCheckbox__ = __webpack_require__(132);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    width: 100%;\n    margin-top: 0.5em;\n\n    .abilities__row-inner {\n        display: flex;\n        justify-content: center;\n    }\n\n    .abilities__col {\n        width: 48%;\n        margin: 0 1%;\n\n        > span {\n            width: 100%;\n        }\n\n        @media (min-width: 450px) {\n            display: flex;\n\n            > span {\n                width: 48%;\n                height: 100%;\n            }\n        }\n    }\n"],["\n    width: 100%;\n    margin-top: 0.5em;\n\n    .abilities__row-inner {\n        display: flex;\n        justify-content: center;\n    }\n\n    .abilities__col {\n        width: 48%;\n        margin: 0 1%;\n\n        > span {\n            width: 100%;\n        }\n\n        @media (min-width: 450px) {\n            display: flex;\n\n            > span {\n                width: 48%;\n                height: 100%;\n            }\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledAbilitiesRow=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);var AbilitiesRow=function(_Component){_inherits(AbilitiesRow,_Component);function AbilitiesRow(){_classCallCheck(this,AbilitiesRow);return _possibleConstructorReturn(this,(AbilitiesRow.__proto__||Object.getPrototypeOf(AbilitiesRow)).apply(this,arguments));}_createClass(AbilitiesRow,[{key:"render",value:function render(){var _this2=this;var _props=this.props,specialism=_props.specialism,handleChange=_props.handleChange,card=_props.card;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledAbilitiesRow,null,specialism.level<=2?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"abilities__row-inner"},specialism.names.map(function(name){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__AbilityCheckbox__["a" /* default */],{key:name,abilityName:name,handleChange:handleChange,card:_this2.props.card});})):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"abilities__row-inner"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"abilities__col"},specialism.names.filter(function(ability,index){return index<=1;}).map(function(name){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__AbilityCheckbox__["a" /* default */],{key:name,abilityName:name,handleChange:handleChange,card:card});})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"abilities__col"},specialism.names.filter(function(ability,index){return index>1;}).map(function(name){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__AbilityCheckbox__["a" /* default */],{key:name,abilityName:name,handleChange:handleChange,card:card});}))));}}]);return AbilitiesRow;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (AbilitiesRow);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    width: 48%;\n    position: relative;\n    display: inline-block;\n    margin: 0.3em 1%;\n    text-align: center;\n\n    input {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        opacity: 0;\n\n        &:checked + label {\n            border-color: ",";\n            color: ",";\n        }\n    }\n\n    label {\n        display: block;\n        padding: 0.3em 0.8em;\n        height: 100%;\n        font-size: 0.9em;\n        background: ",";\n        border: solid 2px ",";\n    }\n"],["\n    width: 48%;\n    position: relative;\n    display: inline-block;\n    margin: 0.3em 1%;\n    text-align: center;\n\n    input {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        opacity: 0;\n\n        &:checked + label {\n            border-color: ",";\n            color: ",";\n        }\n    }\n\n    label {\n        display: block;\n        padding: 0.3em 0.8em;\n        height: 100%;\n        font-size: 0.9em;\n        background: ",";\n        border: solid 2px ",";\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledAbilityCheckbox=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].lightGrey,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].grey);var AbilityCheckbox=function(_Component){_inherits(AbilityCheckbox,_Component);function AbilityCheckbox(){_classCallCheck(this,AbilityCheckbox);return _possibleConstructorReturn(this,(AbilityCheckbox.__proto__||Object.getPrototypeOf(AbilityCheckbox)).apply(this,arguments));}_createClass(AbilityCheckbox,[{key:"render",value:function render(){var _props=this.props,abilityName=_props.abilityName,handleChange=_props.handleChange,card=_props.card;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledAbilityCheckbox,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{id:abilityName,type:"checkbox",onChange:handleChange,checked:card.abilities.includes(abilityName)}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:abilityName},abilityName));}}]);return AbilityCheckbox;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (AbilityCheckbox);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var RemoveIcon=function RemoveIcon(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg",{id:"ktcr_remove",viewBox:"0 0 350.9 423.4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M327,423.4c-101.1,0-201.8,0-302.9,0c0-92.9,0-185.7,0-278.9c12.8,0,25.6,0,39,0c0,79.5,0,159.1,0,239.1 c75,0,149.5,0,224.5,0c0-79.6,0-159.2,0-239.2c13.3,0,26.2,0,39.4,0C327,237.3,327,330.1,327,423.4z"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M0,111.3c0-13.1,0-25.8,0-39.2c1.9,0,3.7,0,5.5,0c23.8,0,47.6-0.1,71.5,0.1c3.9,0,5.5-1.4,6.6-4.9 c6.8-20.8,14-41.6,20.8-62.4c1.2-3.6,2.6-4.9,6.5-4.9c43.1,0.2,86.3,0.1,129.4,0c3.5,0,5.1,0.9,6.3,4.4c6.8,21,14,41.9,20.9,62.9 c1.2,3.5,2.7,4.9,6.7,4.9c23.7-0.2,47.3-0.1,71-0.1c1.8,0,3.6,0,5.8,0c0,13.2,0,26.1,0,39.2C234,111.3,117.3,111.3,0,111.3z M123.4,71.8c35.1,0,69.3,0,104.2,0c-3.4-10.3-6.7-20.2-10.2-30c-0.4-1.1-2.5-2.1-3.8-2.1c-25.5-0.1-50.9-0.1-76.4,0 c-1.3,0-3.3,1.2-3.7,2.3C130.1,51.7,126.9,61.4,123.4,71.8z"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M151,343.4c-13.1,0-25.8,0-38.9,0c0-66.3,0-132.4,0-198.9c12.8,0,25.7,0,38.9,0C151,210.6,151,276.7,151,343.4z"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M239.1,144.4c0,66.4,0,132.5,0,198.9c-13,0-25.7,0-38.9,0c0-66.2,0-132.4,0-198.9C213,144.4,225.7,144.4,239.1,144.4z"}));};/* harmony default export */ __webpack_exports__["a"] = (RemoveIcon);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(2);
var _templateObject=_taggedTemplateLiteral(["\n    position: relative;\n    margin-bottom: 0.3em;\n\n    input {\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n\n        :checked + label {\n            .otherWargear__checkbox {\n                svg {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n\n    label {\n        width: 100%;\n        display: flex;\n    }\n\n    .otherWargear__name {\n        flex-grow: 2;\n        font-size: 0.9em;\n    }\n\n    .otherWargear__checkbox {\n        width: 1.2em;\n        height: 1.2em;\n        display: inline-block;\n        position: relative;\n        margin-right: 0.5em;\n        border: solid 2px ",";\n\n        svg {\n            opacity: 0;\n            width: 100%;\n            height: 100%;\n        }\n    }\n"],["\n    position: relative;\n    margin-bottom: 0.3em;\n\n    input {\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n\n        :checked + label {\n            .otherWargear__checkbox {\n                svg {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n\n    label {\n        width: 100%;\n        display: flex;\n    }\n\n    .otherWargear__name {\n        flex-grow: 2;\n        font-size: 0.9em;\n    }\n\n    .otherWargear__checkbox {\n        width: 1.2em;\n        height: 1.2em;\n        display: inline-block;\n        position: relative;\n        margin-right: 0.5em;\n        border: solid 2px ",";\n\n        svg {\n            opacity: 0;\n            width: 100%;\n            height: 100%;\n        }\n    }\n"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StyledOtherWargear=__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* default */].orange);/* harmony default export */ __webpack_exports__["a"] = (StyledOtherWargear);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var RandomiseIcon=function RandomiseIcon(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg",{fill:props.fill?props.fill:"#000",id:"ktcr_randomise",viewBox:"0 0 980 873.66"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M0,573.46c10.5,0.04,20.99,0.12,31.49,0.12c49.99,0.01,99.98-0.01,149.97,0.05c3.17,0,5.5-0.66,7.8-3.18 C314.51,433.24,439.86,296.1,565.12,158.9c2.34-2.57,4.69-3.53,8.15-3.52c72.32,0.1,144.64,0.08,216.96,0.08c1.99,0,3.98,0,6.64,0 c0-51.83,0-103.49,0-155.14c0.36-0.11,0.72-0.22,1.08-0.32c6.39,8.21,12.79,16.43,19.18,24.64 c53.62,68.88,107.24,137.75,160.87,206.62c0.6,0.78,1.32,1.47,1.99,2.2c0,0.33,0,0.67,0,1c-9.47,10.49-19.02,20.9-28.39,31.47 c-50.2,56.59-100.35,113.23-150.53,169.84c-0.99,1.12-2.04,2.19-3.73,4c0-47.06,0-93.34,0-140.13c-5.13-0.31-9.71-0.68-14.29-0.84 c-54.12-1.95-108.23-3.91-162.36-5.65c-2-0.06-4.62,1.58-6.02,3.22c-29.94,34.91-59.74,69.93-89.57,104.93 c-86.99,102.09-173.97,204.19-261.06,306.19c-1.47,1.73-4.37,3.17-6.61,3.17c-84.65,0.16-169.31,0.14-253.96,0.12 c-1.15,0-2.31-0.21-3.46-0.32C0,664.79,0,619.13,0,573.46z"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M980,659.46c-1.56,1.42-3.26,2.72-4.68,4.27c-62.25,68.41-124.47,136.83-186.7,205.26c-1.22,1.34-2.48,2.64-4.38,4.67 c0-52.37,0-103.89,0-156.28c-2.57,0-4.64,0-6.71,0c-70.16,0-140.33-0.03-210.49,0.08c-3.67,0.01-6.09-1.06-8.53-3.81 c-34.93-39.41-69.98-78.7-105-118.03c-0.66-0.74-1.28-1.51-2.31-2.73c42.6-38.82,85.14-77.59,127.41-116.1 c3.48,3.18,6.95,6,10.01,9.2c20.6,21.58,41.06,43.28,61.73,64.79c1.63,1.69,4.43,3.19,6.69,3.2c43,0.19,85.99,0.14,128.99,0.12 c1.3,0,2.59-0.21,4.38-0.36c0-25.68,0-51.1,0-78.15c63.91,61.64,126.76,122.25,189.6,182.86C980,658.79,980,659.13,980,659.46z"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M0,155.46c62.63,0.03,125.27,0.05,187.9,0.08c27.49,0.01,54.97-0.05,82.46,0.1c2.06,0.01,4.74,0.82,6.06,2.25 c35.56,38.35,70.98,76.83,106.42,115.3c0.22,0.24,0.36,0.56,0.94,1.46c-40.65,34.2-81.37,68.45-122.42,102.99 c-1.91-2.02-3.72-3.91-5.51-5.83c-15.81-16.92-31.66-33.79-47.36-50.82c-2.35-2.55-4.68-3.59-8.16-3.56 c-65.13,0.51-130.26,0.91-195.38,1.31c-1.65,0.01-3.31-0.18-4.96-0.27C0,264.13,0,209.79,0,155.46z"}));};/* harmony default export */ __webpack_exports__["a"] = (RandomiseIcon);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = prepareRandomName;
/* harmony export (immutable) */ __webpack_exports__["b"] = prepareNamesState;
/* harmony export (immutable) */ __webpack_exports__["a"] = prepareFactionData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_factions__ = __webpack_require__(4);
function prepareRandomName(names){var firstNamesArr=names.first.options;var randomFirstName=firstNamesArr[Math.floor(Math.random()*firstNamesArr.length)];var randomSecondName="";if(names.second){var secondNamesArr=names.second.options;randomSecondName=secondNamesArr[Math.floor(Math.random()*secondNamesArr.length)];}return{first:randomFirstName,second:randomSecondName};}function prepareNamesState(factionData){var newState={factionNaming:factionData.naming,randomiserOpen:false,selectedPool:null};if(factionData.naming==="nonStandard"){var namingPool=Object.keys(factionData.data.names);newState.namingPool=namingPool;newState.selectedPool=namingPool[0];newState.names=factionData.data.names[namingPool[0]];}if(factionData.naming==="standard"){newState.names=factionData.data.names;}return newState;}function prepareFactionData(card){var factionID=card.faction;// Pull astartes names when choosing deathwatch
if(factionID==="deathWatch"){factionID="astartes";}// Pull tyranid names for genestealer
if(factionID==="gsc"&&card.model==="Genestealer"){factionID="tyranids";}return __WEBPACK_IMPORTED_MODULE_0__data_factions__["a" /* default */].find(function(faction){return faction.id===factionID;});}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_StyledLabel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_StyledCampaign__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons_CheckboxIcon__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MetaCheckbox__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FireTeamAbilities__ = __webpack_require__(138);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    display: inline-block;\n    width: 1.1em;\n    height: 1.1em;\n    background: white;\n    border: solid 1px black;\n    margin-right: 0.2em;\n    position: relative;\n\n    &.bracket {\n        border-color: ",";\n    }\n\n    label {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        opacity: 0;\n    }\n\n    input {\n        padding: 0;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 2;\n        opacity: 0;\n    }\n\n    input[checked] + label {\n        opacity: 1;\n    }\n"],["\n    display: inline-block;\n    width: 1.1em;\n    height: 1.1em;\n    background: white;\n    border: solid 1px black;\n    margin-right: 0.2em;\n    position: relative;\n\n    &.bracket {\n        border-color: ",";\n    }\n\n    label {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        opacity: 0;\n    }\n\n    input {\n        padding: 0;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 2;\n        opacity: 0;\n    }\n\n    input[checked] + label {\n        opacity: 1;\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var ExperienceBoxWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var Campaign=function(_Component){_inherits(Campaign,_Component);function Campaign(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Campaign);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Campaign.__proto__||Object.getPrototypeOf(Campaign)).call.apply(_ref,[this].concat(args))),_this),_this.changeExperience=function(event){var newAppStateUnits=_this.props.appState.units.map(function(unit){if(_this.props.card.model===unit.model&&!unit.isSpecialist&&!_this.props.card.isSpecialist){// in a fire team
if(unit.experience===1&&parseInt(event.target.getAttribute("data-key"),10)===1){unit.experience=0;}else{unit.experience=parseInt(event.target.getAttribute("data-key"),10);}_this.props.prepareCostForState(unit);return unit;}// if experience is already 1, then remove it completely
if(unit.id===_this.props.card.id){if(unit.experience===1&&parseInt(event.target.getAttribute("data-key"),10)===1){unit.experience=0;}else{unit.experience=parseInt(event.target.getAttribute("data-key"),10);}}return unit;});_this.props.setAppState({units:newAppStateUnits});},_this.toggleCampaignData=function(){_this.props.handleChange({target:{id:"showCampaign",value:!_this.props.card.showCampaign}});},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Campaign,[{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledCampaign__["a" /* default */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{className:"campaign__toggle",onClick:this.toggleCampaignData},this.props.card.showCampaign?"Hide Campaign Data":"Show Campaign Data..."),this.props.card.showCampaign&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"card__experience"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_StyledLabel__["a" /* default */],null,"Experience:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"card__experience-checkboxes"},Array(12).fill(1).map(function(el,i){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ExperienceBoxWrap,{key:i+1,className:i===2||i===6||i===11?"bracket":null},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{type:"checkbox","data-key":i+1,onChange:_this2.changeExperience,defaultChecked:i<_this2.props.card.experience?true:false}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__icons_CheckboxIcon__["a" /* default */],{fill:i===2||i===6||i===11?__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange:"black"})));}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__FireTeamAbilities__["a" /* default */],{card:this.props.card,appState:this.props.appState,setAppState:this.props.setAppState,prepareCostForState:this.props.prepareCostForState})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__MetaCheckbox__["a" /* default */],{id:"convalescence",text:"Convalescence",handleChange:this.props.handleChange,checked:this.props.card.convalescence}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__MetaCheckbox__["a" /* default */],{id:"newRecruit",text:"New Recruit",handleChange:this.props.handleChange,checked:this.props.card.newRecruit}))));}}]);return Campaign;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Campaign);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_fireTeamAbilities__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SelectInput__ = __webpack_require__(7);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    border-top: solid 1px ",";\n    border-bottom: solid 1px ",";\n"],["\n    border-top: solid 1px ",";\n    border-bottom: solid 1px ",";\n"]),_templateObject2=_taggedTemplateLiteral(["\n    display: flex;\n\n    .fire-team-ability__label {\n        font-size: 0.9em;\n        padding: 0.4em 0;\n    }\n\n    .fire-team-ability__select {\n        flex-grow: 2;\n\n        > div {\n            width: 100%;\n        }\n\n        div {\n            text-align: left;\n        }\n    }\n\n    .fire-team-ability__cost {\n        margin-left: 0.5em;\n        font-family: ",";\n        font-size: 1em;\n        padding-top: 0.3em;\n    }\n"],["\n    display: flex;\n\n    .fire-team-ability__label {\n        font-size: 0.9em;\n        padding: 0.4em 0;\n    }\n\n    .fire-team-ability__select {\n        flex-grow: 2;\n\n        > div {\n            width: 100%;\n        }\n\n        div {\n            text-align: left;\n        }\n    }\n\n    .fire-team-ability__cost {\n        margin-left: 0.5em;\n        font-family: ",";\n        font-size: 1em;\n        padding-top: 0.3em;\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var FireTeamAbilitiesWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].grey,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].grey);var FireTeamAbility=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader);var FireTeamAbilities=function(_Component){_inherits(FireTeamAbilities,_Component);function FireTeamAbilities(){var _ref;var _temp,_this,_ret;_classCallCheck(this,FireTeamAbilities);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=FireTeamAbilities.__proto__||Object.getPrototypeOf(FireTeamAbilities)).call.apply(_ref,[this].concat(args))),_this),_this.handleChange=function(event){var newAppStateUnits=_this.props.appState.units.map(function(unit){if(_this.props.card.model===unit.model&&!unit.isSpecialist&&!_this.props.card.isSpecialist){unit[event.target.id]=event.target.value;_this.props.prepareCostForState(unit);}return unit;});_this.props.setAppState({units:newAppStateUnits});},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(FireTeamAbilities,[{key:"render",value:function render(){return!this.props.card.isSpecialist&&this.props.card.experience>=3&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FireTeamAbilitiesWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"Fire Team Abilities:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FireTeamAbility,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"fire-team-ability__label"},"Level 2 Ability:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"fire-team-ability__select"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__SelectInput__["a" /* default */],{id:"fireTeamAbility2",handleChange:this.handleChange,defaultOption:"选择...",options:__WEBPACK_IMPORTED_MODULE_3__data_fireTeamAbilities__["a" /* default */],selectedOption:this.props.card.fireTeamAbility2})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"fire-team-ability__cost"},"+1")),this.props.card.experience>=7&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FireTeamAbility,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"fire-team-ability__label"},"Level 3 Ability:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"fire-team-ability__select"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__SelectInput__["a" /* default */],{id:"fireTeamAbility3",handleChange:this.handleChange,defaultOption:"选择...",options:__WEBPACK_IMPORTED_MODULE_3__data_fireTeamAbilities__["a" /* default */],selectedOption:this.props.card.fireTeamAbility3})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"fire-team-ability__cost"},"+2")),this.props.card.experience===12&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FireTeamAbility,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"fire-team-ability__label"},"Level 4 Ability:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"fire-team-ability__select"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__SelectInput__["a" /* default */],{id:"fireTeamAbility4",handleChange:this.handleChange,defaultOption:"选择...",options:__WEBPACK_IMPORTED_MODULE_3__data_fireTeamAbilities__["a" /* default */],selectedOption:this.props.card.fireTeamAbility4})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"fire-team-ability__cost"},"+3")));}}]);return FireTeamAbilities;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (FireTeamAbilities);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var fireTeamAbilities=["Fleet","Lucky","Courageous","Skilled (Shooting Attacks)","Skilled (Fight Phase)","Lethal (Shooting Attacks)","Lethal (Fight Phase)","Die-hard"];/* harmony default export */ __webpack_exports__["a"] = (fireTeamAbilities);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_StyledCard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_commanders__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_CommanderSpecialism__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_CommanderCampaign__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_Footer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_SpecialismHeader__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card_Wargear__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__card_OtherWargear__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__card_Names__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__card_CommanderTraits__ = __webpack_require__(143);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    background: rgba(255, 255, 255, 0.7);\n    border-right: solid 2px ",";\n    border-left: solid 2px ",";\n\n    > div {\n        padding: 0.2em 0.5em;\n        border-bottom: solid 1px rgba(0, 0, 0, 0.1);\n    }\n"],["\n    background: rgba(255, 255, 255, 0.7);\n    border-right: solid 2px ",";\n    border-left: solid 2px ",";\n\n    > div {\n        padding: 0.2em 0.5em;\n        border-bottom: solid 1px rgba(0, 0, 0, 0.1);\n    }\n"]),_templateObject2=_taggedTemplateLiteral(["\n    .cardRow__cost {\n        float: right;\n        font-family: ",";\n        font-size: 0.9em;\n        color: ",";\n    }\n"],["\n    .cardRow__cost {\n        float: right;\n        font-family: ",";\n        font-size: 0.9em;\n        color: ",";\n    }\n"]),_templateObject3=_taggedTemplateLiteral(["\n    display: block;\n\n    > span {\n        display: block;\n    }\n"],["\n    display: block;\n\n    > span {\n        display: block;\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var CommanderCardBody=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var CardRowWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var CardRowWrapWargear=Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(CardRowWrap)(_templateObject3);var CommanderCard=function(_Component){_inherits(CommanderCard,_Component);function CommanderCard(){var _ref;var _temp,_this,_ret;_classCallCheck(this,CommanderCard);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=CommanderCard.__proto__||Object.getPrototypeOf(CommanderCard)).call.apply(_ref,[this].concat(args))),_this),_this.handleChange=function(event){var targetValue=event.target.value;var targetId=event.target.id;// If the change is the `inKillTeam` checkbox, then toggle that value
if(event.target.name==="inKillTeam"||event.target.name==="injurySerious"||event.target.name==="injuryMinor"||event.target.name==="injuryContusion"){targetValue=event.target.checked;targetId=event.target.name;}// If the change is back to default, null it
if(event.target.value==="default"){targetValue=null;}// Get the current units in appState and adjust the correct unit
var newAppStateCommanders=_this.props.appState.commanders.map(function(commander){if(commander.id===_this.props.card.id){commander[targetId]=targetValue;_this.prepareCostForState(commander);}return commander;});_this.props.setAppState({commanders:newAppStateCommanders});},_this.changeWargear=function(event){var selectedGear=_this.commanderData.wargear.filter(function(gear){return gear.name===event.target.name;})[0];var selectedGearOption=void 0;if(selectedGear.name===event.target.value){selectedGearOption=selectedGear;}else if(selectedGear.upgrades){selectedGearOption=selectedGear.upgrades.filter(function(option){return option.name===event.target.value;})[0];}else{selectedGearOption=selectedGear;}var newWargearData={name:selectedGear.name,selectedOption:selectedGearOption.name,cost:selectedGearOption.cost?selectedGearOption.cost:0};// Get the current units in appState and adjust the correct unit
var newAppStateCommanders=_this.props.appState.commanders.map(function(commander){if(commander.id===_this.props.card.id){for(var gearIndex in commander.wargear){if(commander.wargear[gearIndex].name===newWargearData.name){commander.wargear[gearIndex]=newWargearData;break;}}_this.prepareCostForState(commander);}return commander;});_this.props.setAppState({commanders:newAppStateCommanders});},_this.changeOtherWargear=function(event){// Get the current units in appState and adjust the correct unit
var newAppStateCommanders=_this.props.appState.commanders;for(var i in newAppStateCommanders){if(newAppStateCommanders[i].id===_this.props.card.id){for(var gearIndex in newAppStateCommanders[i].otherWargear){if(newAppStateCommanders[i].otherWargear[gearIndex].name===event.target.id){newAppStateCommanders[i].otherWargear[gearIndex].checked=event.target.checked;break;}}_this.prepareCostForState(newAppStateCommanders[i]);break;}}_this.props.setAppState({commanders:newAppStateCommanders});},_this.handleTraitChange=function(newTraits){// Get the current units in appState and adjust the correct unit
var newAppStateCommanders=_this.props.appState.commanders.map(function(commander){if(commander.id===_this.props.card.id){commander.traits=newTraits;_this.prepareCostForState(commander);}return commander;});_this.props.setAppState({commanders:newAppStateCommanders});},_this.prepareCostForState=function(unitInState){var squadMemberCost=_this.commanderData.costs[_this.props.card.level-1];unitInState.wargear.map(function(gear){if(gear.cost){squadMemberCost+=gear.cost;}return gear;});if(unitInState.otherWargear){unitInState.otherWargear.map(function(gear){if(gear.checked&&gear.cost){squadMemberCost+=gear.cost;}return gear;});}if(unitInState.traits){unitInState.traits.map(function(trait){squadMemberCost+=trait.cost;return trait;});}unitInState.cost=squadMemberCost;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(CommanderCard,[{key:"componentWillMount",value:function componentWillMount(){var _this2=this;this.factionData=__WEBPACK_IMPORTED_MODULE_5__data_commanders__["a" /* default */].factions.filter(function(faction){return faction.id===_this2.props.card.faction;})[0].data;this.commanderData=this.factionData.filter(function(commander){return commander.name===_this2.props.card.model;})[0];}// TODO
// Refactor this entire file, lots of repetition etc, needs streamlining
},{key:"render",value:function render(){var _this3=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_StyledCard__["a" /* default */],{id:this.props.card.id},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__card_SpecialismHeader__["a" /* default */],{specialism:this.props.card.specialism}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.card.model),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"card-header__cost"},this.props.card.cost)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CommanderCardBody,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"姓名:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__card_Names__["a" /* default */],{card:this.props.card,handleChange:this.handleChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__card_CommanderSpecialism__["a" /* default */],{specialisms:this.commanderData.specialisms,card:this.props.card,prepareCostForState:this.prepareCostForState,costs:this.commanderData.costs,appState:this.props.appState,setAppState:this.props.setAppState})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__card_CommanderTraits__["a" /* default */],{card:this.props.card,handleTraitChange:this.handleTraitChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrapWargear,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"装备:"),this.commanderData.wargear.map(function(gear,index){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__card_Wargear__["a" /* default */],{key:gear.name,selectedGear:_this3.props.card.wargear.find(function(gearInCard){return gearInCard.name===gear.name;}),gear:gear,changeWargear:_this3.changeWargear,separator:_this3.commanderData.wargear.length!==index+1});})),this.commanderData.otherWargear&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardRowWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__card_OtherWargear__["a" /* default */],{modelData:this.commanderData,card:this.props.card,changeOtherWargear:this.changeOtherWargear})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__card_CommanderCampaign__["a" /* default */],{appState:this.props.appState,setAppState:this.props.setAppState,card:this.props.card,handleChange:this.handleChange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__card_Footer__["a" /* default */],{appState:this.props.appState,setAppState:this.props.setAppState,card:this.props.card,handleChange:this.handleChange,unitType:"commanders"}));}}]);return CommanderCard;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (CommanderCard);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SpecialismAbilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SpecialismLevels__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_StyledLabel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_StyledSpecialismType__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_cardChanges__ = __webpack_require__(11);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    padding: 0.1em 0;\n\n    .specialism__sub-header {\n        font-size: 0.9em;\n        margin-top: 0.3em;\n    }\n\n    .specialist-type__select {\n        display: block;\n        margin-bottom: 0.3em;\n    }\n\n    .specialist-type__display {\n        span {\n            padding-left: 0;\n        }\n    }\n\n    .specialist-type__cost {\n        float: right;\n        font-family: ",";\n        font-size: 0.9em;\n        color: ",";\n    }\n"],["\n    padding: 0.1em 0;\n\n    .specialism__sub-header {\n        font-size: 0.9em;\n        margin-top: 0.3em;\n    }\n\n    .specialist-type__select {\n        display: block;\n        margin-bottom: 0.3em;\n    }\n\n    .specialist-type__display {\n        span {\n            padding-left: 0;\n        }\n    }\n\n    .specialist-type__cost {\n        float: right;\n        font-family: ",";\n        font-size: 0.9em;\n        color: ",";\n    }\n"]),_templateObject2=_taggedTemplateLiteral(["\n    display: block;\n"],["\n    display: block;\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var SpecialismWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var StyledCommanderSpecialismType=Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_6__styles_StyledSpecialismType__["a" /* default */])(_templateObject2);var CommanderSpecialism=function(_Component){_inherits(CommanderSpecialism,_Component);function CommanderSpecialism(){var _ref;var _temp,_this,_ret;_classCallCheck(this,CommanderSpecialism);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=CommanderSpecialism.__proto__||Object.getPrototypeOf(CommanderSpecialism)).call.apply(_ref,[this].concat(args))),_this),_this.handleChange=function(event){Object(__WEBPACK_IMPORTED_MODULE_7__helpers_cardChanges__["b" /* specialismChange */])(event,_this.props,"commanders");},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(CommanderSpecialism,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialismWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledCommanderSpecialismType,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"specialist-type__label"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__styles_StyledLabel__["a" /* default */],null,"专家类型："),this.props.card.level>1&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"specialist-type__cost"},"+",this.props.costs[this.props.card.level-1])),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"specialist-type__select"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select",{id:"specialism",onChange:this.handleChange,defaultValue:"default"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{value:"default",disabled:true},"选择..."),this.props.specialisms.map(function(specialism){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:specialism,value:specialism},specialism);})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"specialist-type__display"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.card.specialism?this.props.card.specialism:"选择专业...")))),this.props.card.specialism&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"specialism__sub-header"},"等级和能力："),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SpecialismLevels__["a" /* default */],{card:this.props.card,handleChange:this.handleChange}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SpecialismAbilities__["a" /* default */],{type:"commanders",specialism:this.props.card.specialism,level:this.props.card.level,card:this.props.card,appState:this.props.appState,setAppState:this.props.setAppState})));}}]);return CommanderSpecialism;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (CommanderSpecialism);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_StyledCampaign__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MetaCheckbox__ = __webpack_require__(34);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CommanderCampaign=function(_Component){_inherits(CommanderCampaign,_Component);function CommanderCampaign(){var _ref;var _temp,_this,_ret;_classCallCheck(this,CommanderCampaign);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=CommanderCampaign.__proto__||Object.getPrototypeOf(CommanderCampaign)).call.apply(_ref,[this].concat(args))),_this),_this.toggleCampaignData=function(){_this.props.handleChange({target:{id:"showCampaign",value:!_this.props.card.showCampaign}});},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(CommanderCampaign,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles_StyledCampaign__["a" /* default */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{className:"campaign__toggle",onClick:this.toggleCampaignData},this.props.card.showCampaign?"隐藏作战数据":"显示作战数据..."),this.props.card.showCampaign&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__MetaCheckbox__["a" /* default */],{id:"injurySerious",text:"重伤",handleChange:this.props.handleChange,checked:this.props.card.injurySerious}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__MetaCheckbox__["a" /* default */],{id:"injuryMinor",text:"轻伤",handleChange:this.props.handleChange,checked:this.props.card.injuryMinor}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__MetaCheckbox__["a" /* default */],{id:"injuryContusion",text:"擦伤",handleChange:this.props.handleChange,checked:this.props.card.injuryContusion})));}}]);return CommanderCampaign;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (CommanderCampaign);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectInput__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_commanders__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icons_CheckboxIcon__ = __webpack_require__(5);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral([""],[""]),_templateObject2=_taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    margin-top: 0.2em;\n    font-size: 0.9em;\n\n    .trait__name {\n        padding: 0 0.6em;\n        flex-grow: 2;\n    }\n\n    .trait__cost {\n        font-family: ",";\n        font-size: 0.9em;\n        color: ",";\n    }\n\n    .trait__button {\n        width: 1.4em;\n        display: block;\n        background: none;\n        border: solid 2px ",";\n        border-radius: 0;\n        position: relative;\n\n        svg {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n    }\n"],["\n    display: flex;\n    width: 100%;\n    margin-top: 0.2em;\n    font-size: 0.9em;\n\n    .trait__name {\n        padding: 0 0.6em;\n        flex-grow: 2;\n    }\n\n    .trait__cost {\n        font-family: ",";\n        font-size: 0.9em;\n        color: ",";\n    }\n\n    .trait__button {\n        width: 1.4em;\n        display: block;\n        background: none;\n        border: solid 2px ",";\n        border-radius: 0;\n        position: relative;\n\n        svg {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var TraitsSelect=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);var TraitRowWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var CommanderTraits=function(_Component){_inherits(CommanderTraits,_Component);function CommanderTraits(){var _ref;var _temp,_this,_ret;_classCallCheck(this,CommanderTraits);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=CommanderTraits.__proto__||Object.getPrototypeOf(CommanderTraits)).call.apply(_ref,[this].concat(args))),_this),_this.handleChange=function(_ref2,remove){var selectValue=_ref2.target.value;var newTrait=__WEBPACK_IMPORTED_MODULE_5__data_commanders__["a" /* default */].traits.find(function(trait){return trait.name===selectValue;});var newTraits=[];if(newTraits.find(function(_ref3){var name=_ref3.name;return name===selectValue;})||remove){newTraits=_this.props.card.traits.filter(function(_ref4){var name=_ref4.name;return name!==selectValue;});}else{newTraits=_this.props.card.traits;newTraits.push(newTrait);}_this.props.handleTraitChange(newTraits);},_this.removeTrait=function(event){_this.handleChange({target:{value:event.currentTarget.value}},true);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(CommanderTraits,[{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TraitsSelect,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"特性:"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SelectInput__["a" /* default */],{id:"traits",handleChange:this.handleChange,defaultOption:"选择特性...",options:__WEBPACK_IMPORTED_MODULE_5__data_commanders__["a" /* default */].traits.map(function(trait){return trait.name;})})),this.props.card.traits&&this.props.card.traits.map(function(trait){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TraitRowWrap,{key:trait.name},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{className:"trait__button",value:trait.name,onClick:_this2.removeTrait},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__icons_CheckboxIcon__["a" /* default */],{fill:__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"trait__name"},trait.name," ",trait.restriction&&"("+trait.restriction+")"),trait.cost&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"trait__cost"},"+",trait.cost));}));}}]);return CommanderTraits;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (CommanderTraits);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_factions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__ = __webpack_require__(3);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    margin-bottom: 1em;\n    background: url(\"assets/images/orange-bg.jpg\");\n    border-bottom: solid 6px black;\n    padding: 0.8em;\n\n    .rosterInfo__item-wrap {\n        display: flex;\n        padding-bottom: 0.6em;\n        margin: 0 auto;\n        max-width: ",";\n        text-align: left;\n\n        input {\n            flex-grow: 2;\n            margin-left: 0.4em;\n            border: solid 2px black;\n            background: transparent;\n\n            padding: 0.4em 1.3em 0.4em 0.8em;\n            font-family: ",";\n            font-size: 0.8em;\n            text-transform: uppercase;\n            color: white;\n\n            :focus {\n                outline: 0;\n            }\n\n            ::placeholder {\n                color: white;\n                opacity: 1;\n            }\n\n            :-ms-input-placeholder {\n                color: white;\n            }\n\n            ::-ms-input-placeholder {\n                color: white;\n            }\n        }\n    }\n"],["\n    margin-bottom: 1em;\n    background: url(\"assets/images/orange-bg.jpg\");\n    border-bottom: solid 6px black;\n    padding: 0.8em;\n\n    .rosterInfo__item-wrap {\n        display: flex;\n        padding-bottom: 0.6em;\n        margin: 0 auto;\n        max-width: ",";\n        text-align: left;\n\n        input {\n            flex-grow: 2;\n            margin-left: 0.4em;\n            border: solid 2px black;\n            background: transparent;\n\n            padding: 0.4em 1.3em 0.4em 0.8em;\n            font-family: ",";\n            font-size: 0.8em;\n            text-transform: uppercase;\n            color: white;\n\n            :focus {\n                outline: 0;\n            }\n\n            ::placeholder {\n                color: white;\n                opacity: 1;\n            }\n\n            :-ms-input-placeholder {\n                color: white;\n            }\n\n            ::-ms-input-placeholder {\n                color: white;\n            }\n        }\n    }\n"]),_templateObject2=_taggedTemplateLiteral(["\n    position: relative;\n    flex-grow: 2;\n    margin-left: 0.4em;\n\n    select {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: transparent;\n        border: 0;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n    }\n\n    div {\n        width: 100%;\n        padding: 0.4em 1.3em 0.4em 0.8em;\n        font-family: ",";\n        color: white;\n        border: solid 2px black;\n        font-size: 0.8em;\n        text-transform: uppercase;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            margin-top: -0.3em;\n            top: 50%;\n            right: 0.5em;\n            z-index: 1;\n            width: 0;\n            height: 0;\n            border-left: 0.4em solid transparent;\n            border-right: 0.4em solid transparent;\n            border-top: 0.6em solid black;\n            transition: all 0.2s ease;\n        }\n\n        span {\n            position: relative;\n        }\n    }\n"],["\n    position: relative;\n    flex-grow: 2;\n    margin-left: 0.4em;\n\n    select {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: transparent;\n        border: 0;\n        opacity: 0;\n        cursor: pointer;\n        z-index: 2;\n    }\n\n    div {\n        width: 100%;\n        padding: 0.4em 1.3em 0.4em 0.8em;\n        font-family: ",";\n        color: white;\n        border: solid 2px black;\n        font-size: 0.8em;\n        text-transform: uppercase;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            margin-top: -0.3em;\n            top: 50%;\n            right: 0.5em;\n            z-index: 1;\n            width: 0;\n            height: 0;\n            border-left: 0.4em solid transparent;\n            border-right: 0.4em solid transparent;\n            border-top: 0.6em solid black;\n            transition: all 0.2s ease;\n        }\n\n        span {\n            position: relative;\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var RosterInfoWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].maxWidth,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader);var SelectInputWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader);var RosterInfo=function(_Component){_inherits(RosterInfo,_Component);function RosterInfo(){var _ref;var _temp,_this,_ret;_classCallCheck(this,RosterInfo);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=RosterInfo.__proto__||Object.getPrototypeOf(RosterInfo)).call.apply(_ref,[this].concat(args))),_this),_this.updateFactionData=function(){_this.factionData=__WEBPACK_IMPORTED_MODULE_3__data_factions__["a" /* default */].filter(function(faction){return faction.id===_this.props.appState.selectedFaction;})[0];},_this.handleChange=function(event){var newAppState=_this.props.appState;newAppState[event.target.id]=event.target.value;_this.props.setAppState({info:newAppState});},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(RosterInfo,[{key:"componentWillMount",value:function componentWillMount(){this.updateFactionData();}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(){this.updateFactionData();}},{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RosterInfoWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"rosterInfo__item-wrap"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:"name"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"姓名:")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input",{className:"rosterInfo__name-input",onChange:this.handleChange,id:"name",type:"text",value:this.props.appState.name,placeholder:"登记册名称..."})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"rosterInfo__item-wrap"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:"background"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"背景：")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SelectInputWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select",{id:"background",value:this.props.appState.background?this.props.appState.background:"default",onChange:this.handleChange},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{value:"default",disabled:true},typeof this.factionData!=="undefined"&&this.factionData.data.background?this.factionData.data.background.name+"...":null),typeof this.factionData!=="undefined"&&this.factionData.data.background?this.factionData.data.background.options.map(function(option){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:option,value:option},option);}):null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.appState.background?this.props.appState.background:"选择背景...")))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"rosterInfo__item-wrap"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:"mission"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"任务：")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SelectInputWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select",{id:"mission",value:this.props.appState.mission?this.props.appState.mission:"default",onChange:this.handleChange},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{value:"default",disabled:true},typeof this.factionData!=="undefined"&&this.factionData.data.mission?this.factionData.data.mission.name+"...":"..."),typeof this.factionData!=="undefined"&&this.factionData.data.mission?this.factionData.data.mission.options.map(function(option){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:option,value:option},option);}):null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.appState.mission?this.props.appState.mission:"选择任务...")))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"rosterInfo__item-wrap"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label",{htmlFor:"quirk"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_StyledLabel__["a" /* default */],null,"Squad Quirk:")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SelectInputWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select",{id:"quirk",value:this.props.appState.quirk?this.props.appState.quirk:"default",onChange:this.handleChange},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{value:"default",disabled:true},typeof this.factionData!=="undefined"&&this.factionData.data.quirk?this.factionData.data.quirk.name+"...":"..."),typeof this.factionData!=="undefined"&&this.factionData.data.quirk?this.factionData.data.quirk.options.map(function(option){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option",{key:option,value:option},option);}):null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,this.props.appState.quirk?this.props.appState.quirk:"Select quirk...")))));}}]);return RosterInfo;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (RosterInfo);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_theme__ = __webpack_require__(2);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n    display: inline-block;\n    font-family: ",";\n\n    .resource__inner {\n        margin: 0.25em;\n        border: solid 2px black;\n        text-align: center;\n    }\n\n    .resource__name {\n        display: block;\n        padding: 0.4em 1em 0.6em;\n        font-size: 0.8em;\n        text-transform: uppercase;\n        letter-spacing: 0.02em;\n        color: white;\n        background: black;\n    }\n\n    .resource__controls-wrap {\n        display: flex;\n\n        > * {\n            flex-grow: 1;\n        }\n    }\n\n    .resource__tally {\n        width: 35%;\n        padding: 0.2em;\n        font-size: 1.4em;\n        background: rgba(225, 225, 225, 0.7);\n        border-right: solid 2px black;\n        border-left: solid 2px black;\n    }\n\n    button {\n        // background: ",";\n        background: transparent;\n        border-radius: 0;\n        border: 0;\n        width: 1.8em;\n        height: 1.8em;\n        padding: 0 0 0.2em;\n        font-size: 1.4em;\n        font-weight: bold;\n        color: white;\n\n        &:focus {\n            outline: 0;\n        }\n    }\n"],["\n    display: inline-block;\n    font-family: ",";\n\n    .resource__inner {\n        margin: 0.25em;\n        border: solid 2px black;\n        text-align: center;\n    }\n\n    .resource__name {\n        display: block;\n        padding: 0.4em 1em 0.6em;\n        font-size: 0.8em;\n        text-transform: uppercase;\n        letter-spacing: 0.02em;\n        color: white;\n        background: black;\n    }\n\n    .resource__controls-wrap {\n        display: flex;\n\n        > * {\n            flex-grow: 1;\n        }\n    }\n\n    .resource__tally {\n        width: 35%;\n        padding: 0.2em;\n        font-size: 1.4em;\n        background: rgba(225, 225, 225, 0.7);\n        border-right: solid 2px black;\n        border-left: solid 2px black;\n    }\n\n    button {\n        // background: ",";\n        background: transparent;\n        border-radius: 0;\n        border: 0;\n        width: 1.8em;\n        height: 1.8em;\n        padding: 0 0 0.2em;\n        font-size: 1.4em;\n        font-weight: bold;\n        color: white;\n\n        &:focus {\n            outline: 0;\n        }\n    }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var ResourceWrap=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].fontHeader,__WEBPACK_IMPORTED_MODULE_2__styles_theme__["a" /* default */].orange);var Resource=function(_Component){_inherits(Resource,_Component);function Resource(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Resource);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Resource.__proto__||Object.getPrototypeOf(Resource)).call.apply(_ref,[this].concat(args))),_this),_this.toggleUp=function(){_this.toggle("add",_this.props.resource);},_this.toggleDown=function(){_this.toggle("subtract",_this.props.resource);},_this.toggle=function(direction,source){var newAppStateResources=_this.props.appState.resources;newAppStateResources.map(function(resource){if(resource.name===source.name){if(direction==="add"){resource.tally++;}else{if(resource.tally>0){resource.tally--;}else{resource.tally=0;}}}return resource;});_this.props.setAppState({resources:newAppStateResources});},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Resource,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ResourceWrap,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"resource__inner"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"resource__name"},this.props.resource.name),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"resource__controls-wrap"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:this.toggleDown},"-"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"resource__tally"},this.props.resource.tally),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:this.toggleUp},"+"))));}}]);return Resource;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Resource);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var initialState={copyIsActive:false,exportIsActive:false,saveLoadIsActive:false,rosterIsActive:true,selectedFaction:null,totalSquad:0,totalPoints:0,name:"",background:null,mission:null,quirk:null,resources:[{name:"Intelligence",tally:8},{name:"Material",tally:8},{name:"Morale",tally:8},{name:"Territory",tally:8}],units:[],commanders:[]};/* harmony default export */ __webpack_exports__["a"] = (initialState);

/***/ })
/******/ ]);


// WEBPACK FOOTER //
// static/js/main.e185bcc4.js