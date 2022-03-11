"use strict";
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 4617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _ImageComponent_ImageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(364);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const propsLogo = {
  src: 'assets/logo-trail.svg',
  alt: 'logo',
  preLoading: true
};
const Logo = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_ImageComponent_ImageComponent__WEBPACK_IMPORTED_MODULE_0__/* .ImageComponent */ .c, {
    props: propsLogo,
    children: " "
  });
};

/***/ }),

/***/ 1970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ps": () => (/* binding */ StyledLogo),
/* harmony export */   "Yb": () => (/* binding */ FormContainer),
/* harmony export */   "Me": () => (/* binding */ StyledParagraph),
/* harmony export */   "Fy": () => (/* binding */ StyledInput),
/* harmony export */   "OL": () => (/* binding */ FormButton),
/* harmony export */   "jj": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "Formstyles__StyledLogo",
  componentId: "sc-14zlsqd-0"
})(["width:150px;"]);
const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "Formstyles__FormContainer",
  componentId: "sc-14zlsqd-1"
})(["max-width:600px;margin:9em auto 0 auto;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:3em 6em;box-shadow:0 0 2em 0 #dadada;@media (max-width:700px){padding:1em;margin:9em 1em;}"]);
const StyledParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "Formstyles__StyledParagraph",
  componentId: "sc-14zlsqd-2"
})(["margin:1.5em 0 0.3em 0;font-size:1.3rem;font-weight:", ";"], ({
  theme
}) => theme.font.thin);
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "Formstyles__StyledInput",
  componentId: "sc-14zlsqd-3"
})(["width:100%;height:3em;border:none;border-bottom:1px solid #e3e3e3;margin:0.2em 0;padding-left:0.2em;"]);
const FormButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Formstyles__FormButton",
  componentId: "sc-14zlsqd-4"
})(["margin:1em 0;background-color:#ffde00;padding:1em 2em;border-radius:0.2em;font-weight:500;border:none;cursor:pointer;&:hover{background-color:#ffea58;}"]);
const Error = styled_components__WEBPACK_IMPORTED_MODULE_0___default().small.withConfig({
  displayName: "Formstyles__Error",
  componentId: "sc-14zlsqd-5"
})(["margin-top:0.1em;color:red;"]);

/***/ }),

/***/ 5244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qq": () => (/* binding */ Validate)
/* harmony export */ });
/* unused harmony exports validationPassword, validationEmail */
const validationPassword = str => {
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return re.test(str);
};
const validationEmail = str => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(str);
};
const Validate = values => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email cannot be empty";
  } else if (!validationEmail(values.email)) {
    errors.email = "Email is incorrect";
  }

  if (!values.password) {
    errors.password = "Password cannot be empty";
  } else if (!validationPassword(values.password)) {
    errors.password = "Password is incorrect. Password should contain at least one number. One lowercase, one uppercase letter and also at least six characters.";
  }

  return errors;
};

/***/ })

};
;