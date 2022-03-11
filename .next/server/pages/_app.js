"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ButtonSignUp)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ButtonSignUp = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ButtonSignUp",
  componentId: "sc-10grqd8-0"
})(["background-color:#ffde00;padding:1em 2em;border-radius:5px;font-weight:500;border:none;cursor:pointer;text-align:center;&:hover{background-color:#ffea58;}"]);

/***/ }),

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

/***/ 8475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "Paragraph",
  componentId: "sc-1so4dx4-0"
})(["color:", ";;text-align:", ";font-weight:", ";margin:", ";font-size:", ";"], ({
  color = "black"
}) => color, ({
  textAlign
}) => textAlign, ({
  fontWeight = "400"
}) => fontWeight, ({
  margin = "0"
}) => margin, ({
  fontSize
}) => fontSize);

/***/ }),

/***/ 805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./contexts/HamburgerContext.js


const HamburgerContext = /*#__PURE__*/(0,external_react_.createContext)({
  activeMobileMenu: false,
  openMobileMenu: function () {},
  closeMobileMenu: function () {}
});
const HamburgerContextProvider = props => {
  const {
    0: activeMobileMenu,
    1: setActiveMobileMenu
  } = (0,external_react_.useState)(false);

  function openMobileMenu() {
    setActiveMobileMenu(true);
  }

  function closeMobileMenu() {
    setActiveMobileMenu(false);
  }

  const context = {
    activeMobileMenu,
    openMobileMenu,
    closeMobileMenu
  };
  return /*#__PURE__*/jsx_runtime_.jsx(HamburgerContext.Provider, {
    value: context,
    children: props.children
  });
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-spring"
const external_react_spring_namespaceObject = require("react-spring");
// EXTERNAL MODULE: ./components/atoms/Logo/Logo.js
var Logo = __webpack_require__(4617);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/atoms/Hamburger/Hamburger.styles.js

const HamburgerButton = external_styled_components_default().button.withConfig({
  displayName: "Hamburgerstyles__HamburgerButton",
  componentId: "sc-o3136u-0"
})(["padding:10px;display:inline-block;cursor:pointer;background-color:transparent;border:0;margin:0;"]);
const HamburgerBox = external_styled_components_default().span.withConfig({
  displayName: "Hamburgerstyles__HamburgerBox",
  componentId: "sc-o3136u-1"
})(["width:35px;height:24px;display:inline-block;position:relative;"]);
const HamburgerBoxSr = external_styled_components_default().span.withConfig({
  displayName: "Hamburgerstyles__HamburgerBoxSr",
  componentId: "sc-o3136u-2"
})(["border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]);
const HamburgerInner = external_styled_components_default().span.withConfig({
  displayName: "Hamburgerstyles__HamburgerInner",
  componentId: "sc-o3136u-3"
})(["width:100%;height:3px;background-color:black;position:absolute;left:0;top:50%;transform:translateY(-50%);transition:background-color .1s .2s ease-in-out;&.active{background-color:transparent;}&.active::before{transform:translateY(10px) rotate(45deg);}&.active::after{transform:translateY(-10px) rotate(-45deg);}::before{width:100%;height:3px;background-color:black;position:absolute;content:'';top:-10px;left:0;transition:transform .2s .2s ease-in-out;}::after{width:100%;height:3px;background-color:black;position:absolute;content:'';top:10px;left:0;transition:transform .2s .2s ease-in-out;}"]);
;// CONCATENATED MODULE: ./components/atoms/Hamburger/Hamburger.js








const Hamburger = () => {
  const context = (0,external_react_.useContext)(HamburgerContext);
  const activeMenuMobile = context.activeMobileMenu;
  const openMobileMenu = context.openMobileMenu;
  const closeMobileMenu = context.closeMobileMenu;
  const refHamburger = (0,external_react_.useRef)();
  const refInner = (0,external_react_.useRef)();

  const handleClick = () => {
    toggleHamburger();
    toggleMenu();
  };

  const toggleMenu = () => {
    activeMenuMobile ? closeMobileMenu() : openMobileMenu();
  };

  const toggleHamburger = () => {
    const hamburger = refHamburger.current;
    const hamburgerInner = refInner.current;

    if (activeMenuMobile) {
      hamburger.classList.add("active");
      hamburgerInner.classList.add("active");
    } else {
      hamburger.classList.remove("active");
      hamburgerInner.classList.remove("active");
    }
  };

  (0,external_react_.useEffect)(() => {
    toggleHamburger();
  }, [activeMenuMobile]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HamburgerButton, {
    "aria-expanded": "false",
    onClick: handleClick,
    children: [/*#__PURE__*/jsx_runtime_.jsx(HamburgerBoxSr, {
      children: "Open/Close menu"
    }), /*#__PURE__*/jsx_runtime_.jsx(HamburgerBox, {
      ref: refHamburger,
      children: /*#__PURE__*/jsx_runtime_.jsx(HamburgerInner, {
        ref: refInner
      })
    })]
  });
};
;// CONCATENATED MODULE: ./components/molecules/NavigationMobile/NavigationMobile.styles.js

const NavContainer = external_styled_components_default().nav.withConfig({
  displayName: "NavigationMobilestyles__NavContainer",
  componentId: "sc-1dd5hv0-0"
})(["display:none;width:100%;position:fixed;top:0;background-color:", ";z-index:10;padding:1em 0;@media (max-width:1000px){display:block;}"], ({
  theme
}) => theme.colors.secondaryColor);
const StyledLogo = external_styled_components_default().a.withConfig({
  displayName: "NavigationMobilestyles__StyledLogo",
  componentId: "sc-1dd5hv0-1"
})(["display:block;width:90px;margin-top:-5px;background-color:transparent;border:none;cursor:pointer;"]);
const ListWrapper = external_styled_components_default().ul.withConfig({
  displayName: "NavigationMobilestyles__ListWrapper",
  componentId: "sc-1dd5hv0-2"
})(["display:flex;justify-content:space-between;"]);
const ListItem = external_styled_components_default().li.withConfig({
  displayName: "NavigationMobilestyles__ListItem",
  componentId: "sc-1dd5hv0-3"
})(["margin:0 0.35em;list-style:none;color:black;"]);
// EXTERNAL MODULE: ./components/atoms/ButtonSignUp/ButtonSignUp.js
var ButtonSignUp = __webpack_require__(2400);
;// CONCATENATED MODULE: ./components/atoms/ButtonLogin/ButtonLogin.js

const ButtonLogin = external_styled_components_default().a.withConfig({
  displayName: "ButtonLogin",
  componentId: "sc-1se1d9r-0"
})(["background-color:white;font-weight:400;padding:1em 2em;border:none;cursor:pointer;&:hover{background-color:white;color:#ffde00;"]);
;// CONCATENATED MODULE: ./components/molecules/MenuMobile/ModalMenu.styles.js



const MenuNav = external_styled_components_default().nav.withConfig({
  displayName: "ModalMenustyles__MenuNav",
  componentId: "sc-1jm7emt-0"
})(["width:100%;height:100vh;position:fixed;top:0;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:white;pointer-events:all;opacity:0;transition:opacity .1s .1s ease-in-out;&.active{opacity:1;transition:opacity .1s .1s ease-in-out;z-index:9;}"]);
const ModalMenu_styles_ListItem = external_styled_components_default().li.withConfig({
  displayName: "ModalMenustyles__ListItem",
  componentId: "sc-1jm7emt-1"
})(["display:block;margin:0 10px;list-style:none;text-align:center;"]);
const StyledButton = external_styled_components_default().button.withConfig({
  displayName: "ModalMenustyles__StyledButton",
  componentId: "sc-1jm7emt-2"
})(["display:flex;justify-content:center;width:200px;padding:20px;font-size:20px;background-color:white;border:none;:hover{background-color:", ";border-radius:5px;}"], ({
  theme
}) => theme.colors.primaryColor);
const StyledButtonSignUp = external_styled_components_default()(ButtonSignUp/* ButtonSignUp */.O).withConfig({
  displayName: "ModalMenustyles__StyledButtonSignUp",
  componentId: "sc-1jm7emt-3"
})(["display:flex;justify-content:center;width:200px;padding:20px;font-size:20px;"]);
const StyledButtonLogin = external_styled_components_default()(ButtonLogin).withConfig({
  displayName: "ModalMenustyles__StyledButtonLogin",
  componentId: "sc-1jm7emt-4"
})(["display:flex;justify-content:center;width:200px;padding:20px;font-size:20px;"]);
;// CONCATENATED MODULE: ./components/molecules/MenuMobile/ModalMenu.js










const ModalMenu = () => {
  const nav = (0,external_react_.useRef)();
  const context = (0,external_react_.useContext)(HamburgerContext);
  const activeMenuMobile = context.activeMobileMenu;
  const closeMobileMenu = context.closeMobileMenu;
  (0,external_react_.useEffect)(() => {
    activeMenuMobile ? nav.current.classList.add("active") : nav.current.classList.remove("active");
  }, [activeMenuMobile]);
  return /*#__PURE__*/jsx_runtime_.jsx(MenuNav, {
    ref: nav,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ModalMenu_styles_ListItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          passHref: true,
          id: "link",
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton, {
            onClick: closeMobileMenu,
            children: "Home"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ModalMenu_styles_ListItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          passHref: true,
          id: "link",
          href: "/#how-it-works",
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton, {
            onClick: closeMobileMenu,
            children: "How it works"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ModalMenu_styles_ListItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          passHref: true,
          id: "link",
          href: "/#use-cases",
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton, {
            onClick: closeMobileMenu,
            children: "Use Cases"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ModalMenu_styles_ListItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          passHref: true,
          id: "link",
          href: "/#our-team",
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton, {
            onClick: closeMobileMenu,
            children: "Our Team"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ModalMenu_styles_ListItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          passHref: true,
          id: "link",
          href: "/#blog",
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton, {
            onClick: closeMobileMenu,
            children: "Blog"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ModalMenu_styles_ListItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          passHref: true,
          id: "link",
          href: "/#contact",
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton, {
            onClick: closeMobileMenu,
            children: "Contact"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ModalMenu_styles_ListItem, {
        style: {
          marginTop: "50px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          passHref: true,
          href: "/signup",
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledButtonSignUp, {
            onClick: closeMobileMenu,
            children: "Sign up free"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ModalMenu_styles_ListItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          passHref: true,
          href: "/login",
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledButtonLogin, {
            onClick: closeMobileMenu,
            children: "Login"
          })
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/molecules/NavigationMobile/NavigationMobile.js











const NavigationMobile = () => {
  const context = (0,external_react_.useContext)(HamburgerContext);
  const activeMenuMobile = context.activeMobileMenu;
  const closeMobileMenu = context.closeMobileMenu;
  const AnimatedMenuMobile = (0,external_react_spring_namespaceObject.animated)(ModalMenu);
  (0,external_react_.useEffect)(() => {
    if (!activeMenuMobile) return;

    function keyHandler(e) {
      e.key === "Escape" && closeMobileMenu();
    }

    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [activeMenuMobile]);
  const transition = (0,external_react_spring_namespaceObject.useTransition)(activeMenuMobile, {
    from: {
      opacity: "0",
      transitionDelay: 0
    },
    leave: {
      opacity: "1",
      transitionDelay: 0
    },
    config: {
      duration: 100
    }
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(NavContainer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            passHref: true,
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledLogo, {
              children: /*#__PURE__*/jsx_runtime_.jsx(Logo/* Logo */.T, {})
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ListItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Hamburger, {})
        })]
      })
    }), transition((style, activeMobileMenu) => activeMobileMenu && /*#__PURE__*/jsx_runtime_.jsx(AnimatedMenuMobile, {
      style: style
    }))]
  });
};
;// CONCATENATED MODULE: ./components/molecules/NavigationDesktop/Navigation.styles.js

const NavWrapper = external_styled_components_default().nav.withConfig({
  displayName: "Navigationstyles__NavWrapper",
  componentId: "sc-4ctvq7-0"
})(["width:80vw;height:15vh;margin:1em auto;display:flex;justify-content:space-between;@media (max-width:1000px){display:none;}"]);
;// CONCATENATED MODULE: ./components/molecules/MenuDesktop/MenuDesktop.styles.js

const MenuContainer = external_styled_components_default().ul.withConfig({
  displayName: "MenuDesktopstyles__MenuContainer",
  componentId: "sc-194a26o-0"
})(["display:flex;align-items:center;justify-content:flex-start;"]);
const MenuDesktop_styles_StyledLogo = external_styled_components_default().a.withConfig({
  displayName: "MenuDesktopstyles__StyledLogo",
  componentId: "sc-194a26o-1"
})(["display:block;cursor:pointer;width:150px;margin-top:-5px;"]);
const StyledLink = external_styled_components_default().a.withConfig({
  displayName: "MenuDesktopstyles__StyledLink",
  componentId: "sc-194a26o-2"
})(["padding:10px;"]);
const MenuDesktop_styles_ListItem = external_styled_components_default().li.withConfig({
  displayName: "MenuDesktopstyles__ListItem",
  componentId: "sc-194a26o-3"
})(["margin:0 0.25em;list-style:none;color:black;position:relative;:after{content:\"\";width:0;height:2px;position:absolute;top:120%;left:0;background-color:#ffde00;transition:width 0.5s;}:hover{transition:all 0.5s;}:hover:after{width:100%;}"]);
;// CONCATENATED MODULE: ./components/molecules/MenuDesktop/MenuDesktop.js





const MenuDesktop = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(MenuDesktop_styles_ListItem, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        passHref: true,
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx(MenuDesktop_styles_StyledLogo, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Logo/* Logo */.T, {})
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuDesktop_styles_ListItem, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        passHref: true,
        href: "/#how-it-works",
        children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink, {
          children: "How it works"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuDesktop_styles_ListItem, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        passHref: true,
        href: "/#use-cases",
        children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink, {
          children: "Use Cases"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuDesktop_styles_ListItem, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        passHref: true,
        href: "/#our-team",
        children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink, {
          children: "Our Team"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuDesktop_styles_ListItem, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        passHref: true,
        href: "/#blog",
        children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink, {
          children: "Blog"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuDesktop_styles_ListItem, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        passHref: true,
        href: "/#contact",
        children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink, {
          children: "Contact"
        })
      })
    })]
  });
};
;// CONCATENATED MODULE: ./components/molecules/SignPanelDesktop/SignPanelDesktop.js






const SignPanelWrapper = external_styled_components_default().ul.withConfig({
  displayName: "SignPanelDesktop__SignPanelWrapper",
  componentId: "sc-9f4lze-0"
})(["display:flex;align-items:center;justify-content:flex-start;"]);
const SignPanelDesktop = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SignPanelWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/login",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(ButtonLogin, {
          children: "Login"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/signup",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(ButtonSignUp/* ButtonSignUp */.O, {
          children: "Sing up"
        })
      })
    })]
  });
};
;// CONCATENATED MODULE: ./components/molecules/NavigationDesktop/NavigationDesktop.js





const NavigationDesktop = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(MenuDesktop, {}), /*#__PURE__*/jsx_runtime_.jsx(SignPanelDesktop, {})]
  });
};
;// CONCATENATED MODULE: ./components/organisms/Navigation/Navigation.js




const Navigation = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(NavigationDesktop, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationMobile, {})]
  });
};
;// CONCATENATED MODULE: ./components/templates/MainTemplate.style.js

const Content = external_styled_components_default().main.withConfig({
  displayName: "MainTemplatestyle__Content",
  componentId: "sc-thsl42-0"
})(["width:100%;margin:2em auto 0 auto;@media (max-width:1000px){margin-top:5em;}&.hidden{visibility:hidden;}"]);
// EXTERNAL MODULE: ./contexts/NotificationContext.js
var NotificationContext = __webpack_require__(4318);
;// CONCATENATED MODULE: ./components/organisms/Notification/Notification.styles.js

const NotificationContainer = external_styled_components_default().div.withConfig({
  displayName: "Notificationstyles__NotificationContainer",
  componentId: "sc-77m6eu-0"
})(["position:fixed;bottom:0;left:0;height:5rem;width:100%;font-size:1.3rem;background-color:", ";display:flex;justify-content:space-between;align-items:center;color:white;padding:0.5rem 10%;box-shadow:0 -3px 6px rgba(0,0,0,0.2);h2{color:black;}&.pending{background-color:", ";}&.success{background-color:", ";}&.error{background-color:#fb3939;}"], ({
  theme
}) => theme.colors.secondaryColor, ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.primaryColor);
// EXTERNAL MODULE: ./components/atoms/Paragraph/Paragraph.js
var Paragraph = __webpack_require__(8475);
;// CONCATENATED MODULE: ./components/organisms/Notification/Norification.js







function Notification(props) {
  const notificationCtx = (0,external_react_.useContext)(NotificationContext/* default */.Z);
  const {
    title,
    message,
    status
  } = props;
  let statusClasses = "";

  if (status === "success") {
    statusClasses = "success";
  }

  if (status === "error") {
    statusClasses = "error";
  }

  if (status === "pending") {
    statusClasses = "pending";
  }

  const activeClasses = `${statusClasses}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NotificationContainer, {
    className: activeClasses,
    onClick: notificationCtx.hideNotification,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx(Paragraph/* Paragraph */.n, {
      children: message
    })]
  });
}

/* harmony default export */ const Norification = (Notification);
;// CONCATENATED MODULE: ./components/templates/MainTemplate.js









const MainTemplate = ({
  children
}) => {
  const context = (0,external_react_.useContext)(HamburgerContext);
  const notificationContext = (0,external_react_.useContext)(NotificationContext/* default */.Z);
  const activeNotification = notificationContext.notification;
  const menuMobileActive = context.activeMobileMenu;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Navigation, {}), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      className: menuMobileActive && "hidden",
      children: children
    }), activeNotification && /*#__PURE__*/jsx_runtime_.jsx(Norification, {
      title: activeNotification.title,
      message: activeNotification.message,
      status: activeNotification.status
    })]
  });
};
;// CONCATENATED MODULE: ./styles/theme.js
const theme = {
  colors: {
    primaryColor: "rgba(255, 222, 0, 1)",
    secondaryColor: "rgba(255, 255, 255, 1)",
    tertiaryColor: "rgba(243, 243, 243, 1)",
    hoverColor: "rgba(255, 234, 88, 1)",
    textColor: "rgba(0, 0, 0, 1)",
    accentColor: "rgba(0, 66, 100, 1)"
  },
  font: {
    thin: 400,
    regular: 500,
    bold: 600
  }
};
;// CONCATENATED MODULE: ./contexts/ThemeContext.js



function ThemeContext(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
    theme: theme,
    children: props.children
  });
}
;// CONCATENATED MODULE: ./contexts/MultipleContexts.js




function AppContexts(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(ThemeContext, {
    children: /*#__PURE__*/jsx_runtime_.jsx(NotificationContext/* NotificationContextProvider */.l, {
      children: /*#__PURE__*/jsx_runtime_.jsx(HamburgerContextProvider, {
        children: props.children
      })
    })
  });
}
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppContexts, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Trail - User Activity Analytics Tool"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Know your customers and boost your sales with Trail"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/assets/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(MainTemplate, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,61,364,318], () => (__webpack_exec__(805)));
module.exports = __webpack_exports__;

})();