"use strict";
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ NotificationContextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const NotificationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  notification: null,
  showNotification: function (notificationData) {},
  hideNotification: function () {}
});
function NotificationContextProvider(props) {
  const {
    0: activeNotification,
    1: setActiveNotification
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (activeNotification && (activeNotification.status === "success" || activeNotification.status === "error")) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(NotificationContext.Provider, {
    value: context,
    children: props.children
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationContext);

/***/ })

};
;