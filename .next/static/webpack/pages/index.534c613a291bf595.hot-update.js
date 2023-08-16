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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/gr */ \"./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/admin/Desktop/fence-final/components/TopBar.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var title = _ref.title,\n      children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      mobileMenu = _useState[0],\n      setMobileMenu = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var route = router.pathname;\n  var isHomePage = router.pathname === \"/\";\n  var isAboutPage = router.pathname === \"/about\";\n  var isGalleryPage = router.pathname === \"/gallery\";\n  var isContactPage = router.pathname === \"/contact\";\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      if (window.innerWidth >= 1024 || mobileMenu) {\n        setMobileMenu(false);\n      }\n    };\n\n    window.addEventListener(\"resize\", handleResize);\n    return function () {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (mobileMenu) {\n      document.body.classList.add(\"overflow-hidden\");\n    } else {\n      document.body.classList.remove(\"overflow-hidden\");\n    }\n  }, [mobileMenu]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: title ? title + \" - Citadel Fencing\" : \"Citadel Fencing\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"header\", {\n      id: \"header\",\n      className: \"fixed top-0 w-full z-10\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"flex justify-between items-center px-4 py-2 bg-white\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"flex items-center gap-2\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n                src: \"/logo.jpg\",\n                alt: \"Citadel Fencing Logo\",\n                className: \"w-[45px] md:w-[60px] object-cover p-2\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n              onClick: function onClick() {\n                if (mobileMenu) {\n                  setMobileMenu(function (prev) {\n                    return !prev;\n                  });\n                }\n              },\n              className: \"text-xl md:text-2xl mt-1\",\n              children: \"Citadel Fencing\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"hidden lg:flex\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n              className: \"p-2 px-6 text-base hover:underline underline-offset-4 \".concat(isHomePage ? \"text-white\" : \"\"),\n              children: \"Home\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, this), [{\n            label: \"About\",\n            href: \"/about\"\n          }, {\n            label: \"Gallery\",\n            href: \"/gallery\"\n          }, {\n            label: \"Contact Us\",\n            href: \"/contact\"\n          }].map(function (link) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: link.href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n                className: \"p-2 px-12 text-base hover:underline underline-offset-4 \".concat(route === link.href ? \"underline underline-offset-4\" : \"\"),\n                children: link.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 17\n              }, _this)\n            }, link.href, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiMenu, {\n          className: \"lg:hidden\",\n          size: 30,\n          onClick: function onClick() {\n            setMobileMenu(function (prev) {\n              return !prev;\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__.GrClipboard, {\n          size: 0.00000001,\n          className: \"hidden lg:block lg:mr-16\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"fixed z-50 mt-[61px] h-full left-0 top-0 w-full overflow-y-auto overflow-x-hidden lg:hidden bg-white px-4 py-7 flex flex-col transition-all \".concat(mobileMenu ? \"duration-300 translate-x-0\" : \"duration-500 translate-x-full\"),\n          children: [{\n            label: \"Home\",\n            href: \"/\",\n            isActive: isHomePage\n          }, {\n            label: \"About\",\n            href: \"/about\",\n            isActive: isAboutPage\n          }, {\n            label: \"Gallery\",\n            href: \"/gallery\",\n            isActive: isGalleryPage\n          }, {\n            label: \"Contact Us\",\n            href: \"/contact\",\n            isActive: isContactPage\n          }].map(function (link) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: link.href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n                className: \"flex justify-center p-2 py-6 text-base hover:underline underline-offset-4 \".concat(link.isActive),\n                onClick: function onClick() {\n                  if (link.isActive && mobileMenu) {\n                    setMobileMenu(false);\n                  }\n                },\n                children: link.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 133,\n                columnNumber: 17\n              }, _this)\n            }, link.href, false, {\n              fileName: _jsxFileName,\n              lineNumber: 132,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"py-18\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Layout, \"v8/4Wlz3Svd36FTuxsPCYDX1htU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQUE7VUFBQTtRQUFBLFFBMURGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFSRixlQTRHRTtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFDLE9BQWY7UUFBQSxVQUF3QnRCO01BQXhCO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBNUdGO0VBQUEsZ0JBREY7QUFrSEQ7O0dBakp1QkY7VUFFUE47OztLQUZPTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcEJhci5qc3g/ZDdlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEJpTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiXG5pbXBvcnQgeyBHckNsaXBib2FyZCB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFttb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCByb3V0ZSA9IHJvdXRlci5wYXRobmFtZVxuICBjb25zdCBpc0hvbWVQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIlxuICBjb25zdCBpc0Fib3V0UGFnZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWJvdXRcIlxuICBjb25zdCBpc0dhbGxlcnlQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9nYWxsZXJ5XCJcbiAgY29uc3QgaXNDb250YWN0UGFnZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvY29udGFjdFwiXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCB8fCBtb2JpbGVNZW51KSB7XG4gICAgICAgIHNldE1vYmlsZU1lbnUoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vYmlsZU1lbnUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyZmxvdy1oaWRkZW5cIilcbiAgICB9XG4gIH0sIFttb2JpbGVNZW51XSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIHt0aXRsZSA/IHRpdGxlICsgXCIgLSBDaXRhZGVsIEZlbmNpbmdcIiA6IFwiQ2l0YWRlbCBGZW5jaW5nXCJ9XG4gICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWJzaXRlXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIHctZnVsbCB6LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB4LTQgcHktMiBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJDaXRhZGVsIEZlbmNpbmcgTG9nb1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs0NXB4XSBtZDp3LVs2MHB4XSBvYmplY3QtY292ZXIgcC0yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAobW9iaWxlTWVudSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2JpbGVNZW51KChwcmV2KSA9PiAhcHJldilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgbXQtMVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDaXRhZGVsIEZlbmNpbmdcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiBweC02IHRleHQtYmFzZSBob3Zlcjp1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC00ICR7XG4gICAgICAgICAgICAgICAgICBpc0hvbWVQYWdlID8gXCJ0ZXh0LXdoaXRlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwiQWJvdXRcIiwgaHJlZjogXCIvYWJvdXRcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIkdhbGxlcnlcIiwgaHJlZjogXCIvZ2FsbGVyeVwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwiQ29udGFjdCBVc1wiLCBocmVmOiBcIi9jb250YWN0XCIgfSxcbiAgICAgICAgICAgIF0ubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17bGluay5ocmVmfSBocmVmPXtsaW5rLmhyZWZ9PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcHgtMTIgdGV4dC1iYXNlIGhvdmVyOnVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTQgJHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgPT09IGxpbmsuaHJlZiA/IFwidW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtNFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QmlNZW51XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpoaWRkZW5cIlxuICAgICAgICAgICAgc2l6ZT17MzB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vYmlsZU1lbnUoKHByZXYpID0+ICFwcmV2KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxHckNsaXBib2FyZCBzaXplPXswLjAwMDAwMDAxfSBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgbGc6bXItMTZcIiAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIHotNTAgbXQtWzYxcHhdIGgtZnVsbCBsZWZ0LTAgdG9wLTAgdy1mdWxsIG92ZXJmbG93LXktYXV0byBvdmVyZmxvdy14LWhpZGRlbiBsZzpoaWRkZW4gYmctd2hpdGUgcHgtNCBweS03IGZsZXggZmxleC1jb2wgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgbW9iaWxlTWVudVxuICAgICAgICAgICAgICAgID8gXCJkdXJhdGlvbi0zMDAgdHJhbnNsYXRlLXgtMFwiXG4gICAgICAgICAgICAgICAgOiBcImR1cmF0aW9uLTUwMCB0cmFuc2xhdGUteC1mdWxsXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwiSG9tZVwiLCBocmVmOiBcIi9cIiwgaXNBY3RpdmU6IGlzSG9tZVBhZ2UgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFib3V0XCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvYWJvdXRcIixcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogaXNBYm91dFBhZ2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJHYWxsZXJ5XCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvZ2FsbGVyeVwiLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBpc0dhbGxlcnlQYWdlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiQ29udGFjdCBVc1wiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL2NvbnRhY3RcIixcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogaXNDb250YWN0UGFnZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0ubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17bGluay5ocmVmfSBocmVmPXtsaW5rLmhyZWZ9PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyIHAtMiBweS02IHRleHQtYmFzZSBob3Zlcjp1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC00ICR7bGluay5pc0FjdGl2ZX1gfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGluay5pc0FjdGl2ZSAmJiBtb2JpbGVNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlTWVudShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMThcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCaU1lbnUiLCJHckNsaXBib2FyZCIsIkxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJtb2JpbGVNZW51Iiwic2V0TW9iaWxlTWVudSIsInJvdXRlciIsInJvdXRlIiwicGF0aG5hbWUiLCJpc0hvbWVQYWdlIiwiaXNBYm91dFBhZ2UiLCJpc0dhbGxlcnlQYWdlIiwiaXNDb250YWN0UGFnZSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInByZXYiLCJsYWJlbCIsImhyZWYiLCJtYXAiLCJsaW5rIiwiaXNBY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopBar.jsx\n"));

/***/ })

});