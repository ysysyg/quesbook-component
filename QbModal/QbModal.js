'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Checkbox = require('react-bootstrap/lib/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by az on 2017/7/13.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/*eslint-disable*/
var QbModal = function (_Component) {
    _inherits(QbModal, _Component);

    function QbModal() {
        _classCallCheck(this, QbModal);

        return _possibleConstructorReturn(this, (QbModal.__proto__ || Object.getPrototypeOf(QbModal)).apply(this, arguments));
    }

    _createClass(QbModal, [{
        key: 'render',
        value: function render() {
            var target = this.props.target;

            return _react2.default.createElement(
                'div',
                { className: 'modal fade', id: target, role: 'dialog', 'aria-labelledby': 'myModalLabel', 'aria-hidden': 'true' },
                _react2.default.createElement(
                    'div',
                    { className: 'modal-dialog', role: 'document' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return QbModal;
}(_react.Component);

exports.default = QbModal;