"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../contact.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Contact.js

function Contact() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-container"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Contact Us"), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-section"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Contact"), /*#__PURE__*/_react.default.createElement("p", null, "Phone: (203) 223-5795"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => window.location.href = 'tel:203-223-5795'
  }, "Call Now"), /*#__PURE__*/_react.default.createElement("p", null, "americantruckrepaircorp@gmail.com"), /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:americantruckrepaircorp@gmail.com"
  }, "Email Us")), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-section"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Address"), /*#__PURE__*/_react.default.createElement("p", null, "289 East Village Road", /*#__PURE__*/_react.default.createElement("br", null), "Shelton, CT 06484", /*#__PURE__*/_react.default.createElement("br", null), "USA"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => window.location.href = 'https://www.google.com/maps?q=289+East+Village+Road,+Shelton,+CT+06484,+USA'
  }, "GET DIRECTIONS")), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-section"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Business Hours"), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Mon:"), /*#__PURE__*/_react.default.createElement("td", null, "7:00\u202FAM\u2009\u2013\u20096:00\u202FPM")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Tue:"), /*#__PURE__*/_react.default.createElement("td", null, "7:00\u202FAM\u2009\u2013\u20096:00\u202FPM")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Wed:"), /*#__PURE__*/_react.default.createElement("td", null, "7:00\u202FAM\u2009\u2013\u20096:00\u202FPM")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Thu:"), /*#__PURE__*/_react.default.createElement("td", null, "7:00\u202FAM\u2009\u2013\u20096:00\u202FPM")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Fri:"), /*#__PURE__*/_react.default.createElement("td", null, "7:00\u202FAM\u2009\u2013\u20096:00\u202FPM")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Sat:"), /*#__PURE__*/_react.default.createElement("td", null, "7:00\u202FAM\u2009\u2013\u20096:00\u202FPM")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Sun:"), /*#__PURE__*/_react.default.createElement("td", null, "Closed")))))));
}
var _default = exports.default = Contact;