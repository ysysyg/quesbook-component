'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by az on 2017/7/10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/*eslint-disable*/
var QbButton = function (_Component) {
    _inherits(QbButton, _Component);

    function QbButton(props) {
        _classCallCheck(this, QbButton);

        var _this = _possibleConstructorReturn(this, (QbButton.__proto__ || Object.getPrototypeOf(QbButton)).call(this, props));

        _this.mouseOverHandler = _this.mouseOverHandler.bind(_this);
        _this.mouseUpHandler = _this.mouseUpHandler.bind(_this);
        _this.mouseDownHandler = _this.mouseDownHandler.bind(_this);
        _this.mouseOutHandler = _this.mouseOutHandler.bind(_this);
        _this.state = {
            className: props.className.trim().split(/ +/)
        };
        return _this;
    }

    _createClass(QbButton, [{
        key: 'addClass',
        value: function addClass(name) {
            var classNow = this.state.className;
            classNow.push(name);
            this.setState({
                className: classNow
            });
        }
    }, {
        key: 'removeClass',
        value: function removeClass(name) {
            console.log('Tag ,', this.state.className.indexOf(name));
            var classNow = this.state.className;
            var index = this.state.className.indexOf(name);
            classNow.splice(index, 1);
            this.setState({
                className: classNow
            });
        }
    }, {
        key: 'mouseOverHandler',
        value: function mouseOverHandler() {
            console.log('Tag hover');
            this.addClass('hover');
        }
    }, {
        key: 'mouseOutHandler',
        value: function mouseOutHandler() {
            console.log('Tag onMouseOut');
            this.removeClass('hover');
        }
    }, {
        key: 'mouseUpHandler',
        value: function mouseUpHandler() {
            console.log('Tag mouse up');
            this.removeClass('click');
        }
    }, {
        key: 'mouseDownHandler',
        value: function mouseDownHandler() {
            console.log('Tag mouse down');
            this.addClass('click');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                size = _props.size,
                clickHandler = _props.clickHandler;

            var height = 38;
            var fontSize = 21;
            var margin = '9px 26px';
            switch (size) {
                case 'small':
                    height = 30;
                    fontSize = 16;
                    margin = '7px 20px';
                    break;
                case 'default':
                    height = 38;
                    fontSize = 21;
                    margin = '9px 26px';
                    break;
                case 'large':
                    height = 52;
                    fontSize = 25;
                    margin = '13px 36px';
                    break;
                case 'blockLarge':
                    height = 52;
                    fontSize = 25;
                    margin = '13px 62px';
                    break;
            }
            var className = '';
            console.log('Tag this.state.className ,', this.state.className);
            this.state.className.forEach(function (name) {
                className = className + ' ' + name;
            });
            console.log('Tag className :', this.state.className, className);
            return _react2.default.createElement(
                _reactstrap.Button,
                { onMouseOver: this.mouseOverHandler,
                    onMouseOut: this.mouseOutHandler,
                    onMouseDown: this.mouseDownHandler,
                    onMouseUp: this.mouseUpHandler,
                    onClick: clickHandler(),
                    className: className,
                    style: _extends({}, style.frame, { height: height, fontSize: fontSize }) },
                _react2.default.createElement(
                    'div',
                    null,
                    this.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { style: _extends({}, style.content, { margin: margin }) },
                    label
                )
            );
        }
    }]);

    return QbButton;
}(_react.Component);

QbButton.propTypes = {
    label: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.string,
    size: _react2.default.PropTypes.string,
    clickHandler: _react2.default.PropTypes.func
};


var style = {
    frame: {
        borderRadius: 50,
        border: 0,
        padding: 0,
        lineHeight: 0
    },
    content: {}
};

exports.default = QbButton;