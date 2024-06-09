"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactScroll = require("react-scroll");
var _TruckLogo = _interopRequireDefault(require("../assets/TruckLogo.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// NavBar.js

function NavBar() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _TruckLogo.default,
    className: "logo",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactScroll.Link, {
    to: "gallery",
    smooth: true,
    duration: 500
  }, "Gallery")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactScroll.Link, {
    to: "testimonials",
    smooth: true,
    duration: 500
  }, "Testimonials")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactScroll.Link, {
    to: "contact",
    smooth: true,
    duration: 500
  }, "Contact")))));
}
var _default = exports.default = NavBar;