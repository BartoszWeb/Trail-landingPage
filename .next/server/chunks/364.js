"use strict";
exports.id = 364;
exports.ids = [364];
exports.modules = {

/***/ 364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ ImageComponent)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/atoms/ImageComponent/ImageComponent.styles.js

const Container = external_styled_components_default().div.withConfig({
  displayName: "ImageComponentstyles__Container",
  componentId: "sc-kiqiim-0"
})(["width:100%;div,span{position:unset !important;}.image{object-fit:contain;width:100% !important;position:relative !important;height:unset !important;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/atoms/ImageComponent/ImageComponent.js



const ImageComponent = ({
  props
}) => {
  const {
    preLoading = false,
    src,
    alt
  } = props;

  if (preLoading) {
    return /*#__PURE__*/jsx_runtime_.jsx(Container, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        priority: preLoading,
        loading: "eager",
        src: `/` + src,
        layout: "fill",
        className: "image",
        alt: alt
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
      src: `/` + src,
      layout: "fill",
      className: "image",
      alt: alt
    })
  });
};

/***/ })

};
;