"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Gallery = _interopRequireDefault(require("./Gallery"));
var _Contact = _interopRequireDefault(require("./Contact"));
var _NavBar = _interopRequireDefault(require("./NavBar"));
var _Testimonials = _interopRequireDefault(require("./Testimonials.js"));
var _reactScroll = require("react-scroll");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Home() {
  const [scrollPosition, setScrollPosition] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleCallNow = () => {
    window.location.href = 'tel:203-223-5795';
  };
  const scrollToTop = () => {
    _reactScroll.animateScroll.scrollToTop();
  };
  const heroOpacity = 1 - Math.min(scrollPosition / 750, 1);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "home-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-container",
    style: {
      opacity: heroOpacity
    }
  }, /*#__PURE__*/_react.default.createElement(_NavBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col, button"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Your Trusted Partner In Truck Repairs"), /*#__PURE__*/_react.default.createElement("p", null, "To schedule your repair call +203-223-5795 or"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleCallNow
  }, "Call Now")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col"
  }))), /*#__PURE__*/_react.default.createElement("section", {
    className: "gallery-section",
    id: "gallery"
  }, /*#__PURE__*/_react.default.createElement(_Gallery.default, null)), /*#__PURE__*/_react.default.createElement("section", {
    className: "testimonials-section",
    id: "testimonials"
  }, /*#__PURE__*/_react.default.createElement(_Testimonials.default, null)), /*#__PURE__*/_react.default.createElement("section", {
    className: "contact-section",
    id: "contact"
  }, /*#__PURE__*/_react.default.createElement(_Contact.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "scroll-to-top",
    onClick: scrollToTop
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 15a1 1 0 0 1-.707-.293L12 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 15z",
    style: {
      fill: '#1c1b1e'
    }
  }))));
}
var _default = exports.default = Home;