"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Home = _interopRequireDefault(require("./components/Home"));
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// App.js

// import Appointments from './components/Appointments';
// import Gallery from './components/Gallery';
// import Contact from './components/Contact';

function App() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Home.default, null));
}
var _default = exports.default = App;