"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TopBar.jsx":
/*!*******************************!*\
  !*** ./components/TopBar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/gr */ \"./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/admin/Desktop/fence-final/components/TopBar.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var title = _ref.title,\n      children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      mobileMenu = _useState[0],\n      setMobileMenu = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var route = router.pathname;\n  var isHomePage = router.pathname === \"/\";\n  var isBlackjackPage = router.pathname === \"/blackjack\";\n  var isOmega2Page = router.pathname === \"/omega2\";\n  var isContactPage = router.pathname === \"/contact\";\n  var isSpeechPage = router.pathname === \"/speech\";\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      if (window.innerWidth >= 1024 || mobileMenu) {\n        // Adjust the value to match the 'large' breakpoint in your Tailwind CSS config\n        setMobileMenu(false);\n      }\n    };\n\n    window.addEventListener(\"resize\", handleResize);\n    return function () {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    // Add or remove \"overflow-hidden\" class on body depending on mobileMenu state\n    if (mobileMenu) {\n      document.body.classList.add(\"overflow-hidden\");\n    } else {\n      document.body.classList.remove(\"overflow-hidden\");\n    }\n  }, [mobileMenu]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: title ? title + \" - Citadel Fencing\" : \"Citadel Fencing\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"header\", {\n      id: \"header\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"flex justify-between items-center px-4 py-2 bg-white\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"flex items-center gap-2\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n                src: \"/logo.jpg\",\n                alt: \"Citadel Fencing Logo\",\n                className: \"w-[60px] object-cover p-2\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n              onClick: function onClick() {\n                if (mobileMenu) {\n                  setMobileMenu(function (prev) {\n                    return !prev;\n                  });\n                }\n              },\n              className: \"text-2xl py-2\",\n              children: \"Citadel Fencing\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"hidden lg:flex\",\n          children: [{\n            label: \"Home\",\n            href: \"/\"\n          }, {\n            label: \"Blackjack\",\n            href: \"/blackjack\"\n          }, {\n            label: \"Omega2\",\n            href: \"/omega2\"\n          }, {\n            label: \"Speech to Text\",\n            href: \"/speech\"\n          }, {\n            label: \"Contact Us\",\n            href: \"/contact\"\n          }].map(function (link) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: link.href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n                className: \"p-2 px-4 text-base hover:underline underline-offset-4 \".concat(route === link.href ? \"underline underline-offset-4\" : \"\"),\n                children: link.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, _this)\n            }, link.href, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiMenu, {\n          className: \"lg:hidden text-white\",\n          size: 30,\n          onClick: function onClick() {\n            setMobileMenu(function (prev) {\n              return !prev;\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__.GrClipboard, {\n          size: 0.00000001,\n          className: \"hidden lg:block lg:mr-16\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"fixed z-50 mt-[64px] h-full text-white left-0 top-0 w-full overflow-y-auto overflow-x-hidden lg:hidden bg-black px-4 py-7 flex flex-col transition-all \".concat(mobileMenu ? \"duration-300 translate-x-0\" : \"duration-500 translate-x-full\"),\n          children: [{\n            label: \"Home\",\n            href: \"/\",\n            isActive: isHomePage\n          }, {\n            label: \"Blackjack\",\n            href: \"/blackjack\",\n            isActive: isBlackjackPage\n          }, {\n            label: \"Omega2\",\n            href: \"/omega2\",\n            isActive: isOmega2Page\n          }, {\n            label: \"Speech to Text\",\n            href: \"/speech\",\n            isActive: isSpeechPage\n          }, {\n            label: \"Contact Us\",\n            href: \"/contact\",\n            isActive: isContactPage\n          }].map(function (link) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: link.href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n                className: \"flex justify-center p-2 py-6 text-base hover:underline underline-offset-4 \".concat(link.isActive),\n                onClick: function onClick() {\n                  if (link.isActive && mobileMenu) {\n                    setMobileMenu(false);\n                  }\n                },\n                children: link.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 135,\n                columnNumber: 17\n              }, _this)\n            }, link.href, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"mb-40\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"shadow-inner bg-gray-900\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"footer\", {\n        className: \"h-10 flex flex-col justify-center max-w-[1100px] m-auto px-2\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"flex justify-center text-xs text-gray-300 md:text-base px-2\",\n          children: \"Peter Motin \\xA9 2023\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 155,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Layout, \"v8/4Wlz3Svd36FTuxsPCYDX1htU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDRixJQUFoQjtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBREk7VUFBQSxDQXRCTDtRQVBIO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFwREY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVJGLGVBMkdFO01BQUEsdUJBQ0U7UUFBSyxTQUFTLEVBQUMsT0FBZjtRQUFBLFVBQXdCdkI7TUFBeEI7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUEzR0YsZUE4R0U7TUFBSyxTQUFTLEVBQUMsMEJBQWY7TUFBQSx1QkFDRTtRQUFRLFNBQVMsRUFBQyw4REFBbEI7UUFBQSx1QkFDRTtVQUFLLFNBQVMsRUFBQyw2REFBZjtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBOUdGO0VBQUEsZ0JBREY7QUF3SEQ7O0dBMUp1QkY7VUFFUE47OztLQUZPTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcEJhci5qc3g/ZDdlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEJpTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiXG5pbXBvcnQgeyBHckNsaXBib2FyZCB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFttb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCByb3V0ZSA9IHJvdXRlci5wYXRobmFtZVxuICBjb25zdCBpc0hvbWVQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIlxuICBjb25zdCBpc0JsYWNramFja1BhZ2UgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2JsYWNramFja1wiXG4gIGNvbnN0IGlzT21lZ2EyUGFnZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvb21lZ2EyXCJcbiAgY29uc3QgaXNDb250YWN0UGFnZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvY29udGFjdFwiXG4gIGNvbnN0IGlzU3BlZWNoUGFnZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc3BlZWNoXCJcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0IHx8IG1vYmlsZU1lbnUpIHtcbiAgICAgICAgLy8gQWRqdXN0IHRoZSB2YWx1ZSB0byBtYXRjaCB0aGUgJ2xhcmdlJyBicmVha3BvaW50IGluIHlvdXIgVGFpbHdpbmQgQ1NTIGNvbmZpZ1xuICAgICAgICBzZXRNb2JpbGVNZW51KGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEFkZCBvciByZW1vdmUgXCJvdmVyZmxvdy1oaWRkZW5cIiBjbGFzcyBvbiBib2R5IGRlcGVuZGluZyBvbiBtb2JpbGVNZW51IHN0YXRlXG4gICAgaWYgKG1vYmlsZU1lbnUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyZmxvdy1oaWRkZW5cIilcbiAgICB9XG4gIH0sIFttb2JpbGVNZW51XSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIHt0aXRsZSA/IHRpdGxlICsgXCIgLSBDaXRhZGVsIEZlbmNpbmdcIiA6IFwiQ2l0YWRlbCBGZW5jaW5nXCJ9XG4gICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWJzaXRlXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYmctd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5qcGdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiQ2l0YWRlbCBGZW5jaW5nIExvZ29cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNjBweF0gb2JqZWN0LWNvdmVyIHAtMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAobW9iaWxlTWVudSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2JpbGVNZW51KChwcmV2KSA9PiAhcHJldilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIHB5LTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2l0YWRlbCBGZW5jaW5nXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleFwiPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCJIb21lXCIsIGhyZWY6IFwiL1wiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwiQmxhY2tqYWNrXCIsIGhyZWY6IFwiL2JsYWNramFja1wiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwiT21lZ2EyXCIsIGhyZWY6IFwiL29tZWdhMlwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwiU3BlZWNoIHRvIFRleHRcIiwgaHJlZjogXCIvc3BlZWNoXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCJDb250YWN0IFVzXCIsIGhyZWY6IFwiL2NvbnRhY3RcIiB9LFxuICAgICAgICAgICAgXS5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtsaW5rLmhyZWZ9IGhyZWY9e2xpbmsuaHJlZn0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiBweC00IHRleHQtYmFzZSBob3Zlcjp1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC00ICR7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlID09PSBsaW5rLmhyZWYgPyBcInVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJpTWVudVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aGlkZGVuIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgc2l6ZT17MzB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vYmlsZU1lbnUoKHByZXYpID0+ICFwcmV2KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxHckNsaXBib2FyZCBzaXplPXswLjAwMDAwMDAxfSBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgbGc6bXItMTZcIiAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIHotNTAgbXQtWzY0cHhdIGgtZnVsbCB0ZXh0LXdoaXRlIGxlZnQtMCB0b3AtMCB3LWZ1bGwgb3ZlcmZsb3cteS1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIGxnOmhpZGRlbiBiZy1ibGFjayBweC00IHB5LTcgZmxleCBmbGV4LWNvbCB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICBtb2JpbGVNZW51XG4gICAgICAgICAgICAgICAgPyBcImR1cmF0aW9uLTMwMCB0cmFuc2xhdGUteC0wXCJcbiAgICAgICAgICAgICAgICA6IFwiZHVyYXRpb24tNTAwIHRyYW5zbGF0ZS14LWZ1bGxcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCJIb21lXCIsIGhyZWY6IFwiL1wiLCBpc0FjdGl2ZTogaXNIb21lUGFnZSB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiQmxhY2tqYWNrXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvYmxhY2tqYWNrXCIsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGlzQmxhY2tqYWNrUGFnZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9tZWdhMlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL29tZWdhMlwiLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBpc09tZWdhMlBhZ2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTcGVlY2ggdG8gVGV4dFwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL3NwZWVjaFwiLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBpc1NwZWVjaFBhZ2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJDb250YWN0IFVzXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvY29udGFjdFwiLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBpc0NvbnRhY3RQYWdlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXS5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtsaW5rLmhyZWZ9IGhyZWY9e2xpbmsuaHJlZn0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1jZW50ZXIgcC0yIHB5LTYgdGV4dC1iYXNlIGhvdmVyOnVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTQgJHtsaW5rLmlzQWN0aXZlfWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rLmlzQWN0aXZlICYmIG1vYmlsZU1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRNb2JpbGVNZW51KGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00MFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWlubmVyIGJnLWdyYXktOTAwXCI+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiaC0xMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG1heC13LVsxMTAwcHhdIG0tYXV0byBweC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQteHMgdGV4dC1ncmF5LTMwMCBtZDp0ZXh0LWJhc2UgcHgtMlwiPlxuICAgICAgICAgICAgUGV0ZXIgTW90aW4gwqkgMjAyM1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmlNZW51IiwiR3JDbGlwYm9hcmQiLCJMYXlvdXQiLCJ0aXRsZSIsImNoaWxkcmVuIiwibW9iaWxlTWVudSIsInNldE1vYmlsZU1lbnUiLCJyb3V0ZXIiLCJyb3V0ZSIsInBhdGhuYW1lIiwiaXNIb21lUGFnZSIsImlzQmxhY2tqYWNrUGFnZSIsImlzT21lZ2EyUGFnZSIsImlzQ29udGFjdFBhZ2UiLCJpc1NwZWVjaFBhZ2UiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJwcmV2IiwibGFiZWwiLCJocmVmIiwibWFwIiwibGluayIsImlzQWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopBar.jsx\n"));

/***/ })

});