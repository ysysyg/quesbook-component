'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _QbButton = require('./QbButton');

var _QbButton2 = _interopRequireDefault(_QbButton);

var _QbInput = require('./QbInput');

var _QbModal = require('./QbModal');

require('bootstrap/dist/css/bootstrap.min.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by az on 2017/7/12.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            show: false
        };
        return _this;
    }

    _createClass(App, [{
        key: 'toggleModal',
        value: function toggleModal() {
            this.setState({
                show: !this.state.show
            });
            console.log('Tag show is, ', this.state.show);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_QbButton2.default, { label: 'hello',
                    size: 'small',
                    clickHandler: this.toggleModal.bind(this), dataTarget: '#modal', dataToggle: 'modal' }),
                _react2.default.createElement(_QbInput.QbCheckBox, { label: 'hello', changeHandler: function changeHandler() {
                        return alert('hi');
                    } }),
                _react2.default.createElement(_QbInput.QbRadio, { label: 'hello', changeHandler: function changeHandler() {
                        return alert('hello');
                    } }),
                _react2.default.createElement(_QbInput.QbInput, { size: 'small', changeHandler: function changeHandler(e) {
                        return alert(e.target.value);
                    } }),
                _react2.default.createElement(
                    _QbModal.QbModal,
                    { target: 'modal' },
                    _react2.default.createElement(
                        _QbModal.QbModalHeader,
                        null,
                        _react2.default.createElement(
                            'div',
                            null,
                            'header'
                        )
                    ),
                    _react2.default.createElement(
                        _QbModal.QbModalBody,
                        null,
                        _react2.default.createElement(
                            'div',
                            null,
                            'body'
                        )
                    ),
                    _react2.default.createElement(
                        _QbModal.QbModalFooter,
                        null,
                        _react2.default.createElement(_QbButton2.default, { label: 'close', dataTarget: '#modal', dataToggle: 'modal' })
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var div = document.getElementById('root');
_reactDom2.default.render(_react2.default.createElement(App, null), div);