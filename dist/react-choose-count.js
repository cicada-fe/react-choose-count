(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ReactSwipe", [], factory);
	else if(typeof exports === 'object')
		exports["ReactSwipe"] = factory();
	else
		root["ReactSwipe"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by jiaaobo on 16/5/19.
	 * abjia 选择数量组件
	 */

	var ChooseCount = function (_React$Component) {
	    _inherits(ChooseCount, _React$Component);

	    function ChooseCount(props) {
	        _classCallCheck(this, ChooseCount);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChooseCount).call(this, props));

	        _this.state = {
	            count: 1
	        };
	        return _this;
	    }

	    _createClass(ChooseCount, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "_updateCount",
	        value: function _updateCount(type) {
	            var ct = this.state.count;
	            if (type == "add") {
	                ct++;
	            } else {
	                ct--;
	                if (ct < this.props.minCount) {
	                    ct = this.props.minCount;
	                }
	            }

	            this.setState({
	                count: ct
	            });
	        }
	    }, {
	        key: "getCount",
	        value: function getCount() {
	            return this.state.count;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                "section",
	                { className: "choose-count ib " },
	                React.createElement(
	                    "div",
	                    { className: "fx-row fx-row-center select-count" },
	                    React.createElement(
	                        "a",
	                        { href: "javascript:void(0)", className: "choose-count-delete-on ib", onClick: function onClick() {
	                                _this2._updateCount('-');
	                            } },
	                        React.createElement("i", { className: "ib img-delete-on" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "choose-count-content text-center fx-col-1 " },
	                        this.state.count
	                    ),
	                    React.createElement(
	                        "a",
	                        { href: "javascript:void(0)", className: "choose-count-add-on ib", onClick: function onClick() {
	                                _this2._updateCount('add');
	                            } },
	                        React.createElement("img", { className: "img-add-on", src: "data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAGxJREFU OBHtlUEKACEIRTXmdHre5npObmzRBN+FOwMh7JOfVxYROFR1eoByelChmQmqdd3IiDPa3jhoNYp6 FOzdlL38YesyYeZZdXh8qXmmRcQ8zpX/TJXjfis272YcLMpQwH/eatN32YEb5ANTrRGnveaUmQAA AABJRU5ErkJggg==" })
	                    )
	                )
	            );
	        }
	    }]);

	    return ChooseCount;
	}(React.Component);

	exports.default = ChooseCount;


	ChooseCount.defaultProps = {
	    minCount: 1,
	    maxCount: 9999,
	    startCount: 1
	};

	/**
	 * 属性检测
	 * @type {{listData: *}}
	 */
	ChooseCount.propTypes = {
	    startCount: React.PropTypes.number,
	    minCount: React.PropTypes.number,
	    maxCount: React.PropTypes.number
	};

/***/ }
/******/ ])
});
;