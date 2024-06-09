"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Image = _interopRequireDefault(require("../gallery_pictures/Image1.JPG"));
var _Image2 = _interopRequireDefault(require("../gallery_pictures/Image2.JPG"));
var _Image3 = _interopRequireDefault(require("../gallery_pictures/Image3.JPG"));
require("../gallery.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Gallery.js

function Gallery() {
  const galleryImages = [_Image.default, _Image2.default, _Image3.default];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "gallery-container"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Gallery"), /*#__PURE__*/_react.default.createElement("div", {
    className: "image-gallery"
  }, galleryImages.map((image, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "gallery-item"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: "Gallery Item ".concat(index + 1)
  })))));
}
var _default = exports.default = Gallery;