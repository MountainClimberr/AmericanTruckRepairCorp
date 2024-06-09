"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Appointments.js

function Appointments() {
  const handleCallNow = () => {
    window.location.href = 'tel:+203-561-7469';
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Book an Appointment"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleCallNow
  }, "Call Now"));
}
var _default = exports.default = Appointments;