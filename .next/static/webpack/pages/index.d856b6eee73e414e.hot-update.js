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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/gr */ \"./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/admin/Desktop/fence-final/components/TopBar.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var title = _ref.title,\n      children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      mobileMenu = _useState[0],\n      setMobileMenu = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var route = router.pathname;\n  var isHomePage = router.pathname === \"/\";\n  var isAboutPage = router.pathname === \"/about\";\n  var isGalleryPage = router.pathname === \"/gallery\";\n  var isContactPage = router.pathname === \"/contact\";\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      if (window.innerWidth >= 1024 || mobileMenu) {\n        // Adjust the value to match the 'large' breakpoint in your Tailwind CSS config\n        setMobileMenu(false);\n      }\n    };\n\n    window.addEventListener(\"resize\", handleResize);\n    return function () {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    // Add or remove \"overflow-hidden\" class on body depending on mobileMenu state\n    if (mobileMenu) {\n      document.body.classList.add(\"overflow-hidden\");\n    } else {\n      document.body.classList.remove(\"overflow-hidden\");\n    }\n  }, [mobileMenu]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: title ? title + \" - Citadel Fencing\" : \"Citadel Fencing\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"header\", {\n      id: \"header\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"flex justify-between items-center px-4 py-2 bg-white\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"flex items-center gap-2\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n                src: \"/logo.jpg\",\n                alt: \"Citadel Fencing Logo\",\n                className: \"w-[45px] md:w-[60px] object-cover p-2\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n              onClick: function onClick() {\n                if (mobileMenu) {\n                  setMobileMenu(function (prev) {\n                    return !prev;\n                  });\n                }\n              },\n              className: \"text-xl md:text-2xl py-2\",\n              children: \"Citadel Fencing\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"hidden lg:flex\",\n          children: [{\n            label: \"Home\",\n            href: \"/\"\n          }, {\n            label: \"About\",\n            href: \"/about\"\n          }, {\n            label: \"Gallery\",\n            href: \"/gallery\"\n          }, {\n            label: \"Contact Us\",\n            href: \"/contact\"\n          }].map(function (link) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: link.href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n                className: \"p-2 px-4 text-base hover:underline underline-offset-4 \".concat(route === link.href ? \"underline underline-offset-4\" : \"\"),\n                children: link.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 17\n              }, _this)\n            }, link.href, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiMenu, {\n          className: \"lg:hidden\",\n          size: 30,\n          onClick: function onClick() {\n            setMobileMenu(function (prev) {\n              return !prev;\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__.GrClipboard, {\n          size: 0.00000001,\n          className: \"hidden lg:block lg:mr-16\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"fixed z-50 mt-[61px] h-full left-0 top-0 w-full overflow-y-auto overflow-x-hidden lg:hidden bg-white px-4 py-7 flex flex-col transition-all \".concat(mobileMenu ? \"duration-300 translate-x-0\" : \"duration-500 translate-x-full\"),\n          children: [{\n            label: \"Home\",\n            href: \"/\",\n            isActive: isHomePage\n          }, {\n            label: \"About\",\n            href: \"/about\",\n            isActive: isAboutPage\n          }, {\n            label: \"Gallery\",\n            href: \"/gallery\",\n            isActive: isGalleryPage\n          }, {\n            label: \"Contact Us\",\n            href: \"/contact\",\n            isActive: isContactPage\n          }].map(function (link) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: link.href,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n                className: \"flex justify-center p-8 py-6 text-base hover:underline underline-offset-4 \".concat(link.isActive),\n                onClick: function onClick() {\n                  if (link.isActive && mobileMenu) {\n                    setMobileMenu(false);\n                  }\n                },\n                children: link.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 129,\n                columnNumber: 17\n              }, _this)\n            }, link.href, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"mb-40\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"shadow-inner bg-gray-900\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"footer\", {\n        className: \"h-10 flex flex-col justify-center max-w-[1100px] m-auto px-2\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"flex justify-center text-xs text-gray-300 md:text-base px-2\",\n          children: \"Peter Motin \\xA9 2023\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Layout, \"v8/4Wlz3Svd36FTuxsPCYDX1htU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcEJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU1EsTUFBVCxPQUFxQztFQUFBOztFQUFBOztFQUFBLElBQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7RUFBQSxJQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0VBQ2xELGdCQUFvQ0wsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0VBQUEsSUFBT00sVUFBUDtFQUFBLElBQW1CQyxhQUFuQjs7RUFDQSxJQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCO0VBQ0EsSUFBTVksS0FBSyxHQUFHRCxNQUFNLENBQUNFLFFBQXJCO0VBQ0EsSUFBTUMsVUFBVSxHQUFHSCxNQUFNLENBQUNFLFFBQVAsS0FBb0IsR0FBdkM7RUFDQSxJQUFNRSxXQUFXLEdBQUdKLE1BQU0sQ0FBQ0UsUUFBUCxLQUFvQixRQUF4QztFQUNBLElBQU1HLGFBQWEsR0FBR0wsTUFBTSxDQUFDRSxRQUFQLEtBQW9CLFVBQTFDO0VBQ0EsSUFBTUksYUFBYSxHQUFHTixNQUFNLENBQUNFLFFBQVAsS0FBb0IsVUFBMUM7RUFFQVgsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTWdCLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07TUFDekIsSUFBSUMsTUFBTSxDQUFDQyxVQUFQLElBQXFCLElBQXJCLElBQTZCWCxVQUFqQyxFQUE2QztRQUMzQztRQUNBQyxhQUFhLENBQUMsS0FBRCxDQUFiO01BQ0Q7SUFDRixDQUxEOztJQU9BUyxNQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxZQUFsQztJQUVBLE9BQU8sWUFBTTtNQUNYQyxNQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSixZQUFyQztJQUNELENBRkQ7RUFHRCxDQWJRLEVBYU4sRUFiTSxDQUFUO0VBZUFoQixnREFBUyxDQUFDLFlBQU07SUFDZDtJQUNBLElBQUlPLFVBQUosRUFBZ0I7TUFDZGMsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLGlCQUE1QjtJQUNELENBRkQsTUFFTztNQUNMSCxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsTUFBeEIsQ0FBK0IsaUJBQS9CO0lBQ0Q7RUFDRixDQVBRLEVBT04sQ0FBQ2xCLFVBQUQsQ0FQTSxDQUFUO0VBU0Esb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUFBLHdCQUNFO1FBQUEsVUFDR0YsS0FBSyxHQUFHQSxLQUFLLEdBQUcsb0JBQVgsR0FBa0M7TUFEMUM7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBSUU7UUFBTSxJQUFJLEVBQUMsYUFBWDtRQUF5QixPQUFPLEVBQUM7TUFBakM7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUpGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBUUU7TUFBUSxFQUFFLEVBQUMsUUFBWDtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFDLHNEQUFmO1FBQUEsd0JBQ0U7VUFBSyxTQUFTLEVBQUMseUJBQWY7VUFBQSx3QkFDRSw4REFBQyxrREFBRDtZQUFNLElBQUksRUFBQyxHQUFYO1lBQUEsdUJBQ0U7Y0FBQSx1QkFDRTtnQkFDRSxHQUFHLEVBQUMsV0FETjtnQkFFRSxHQUFHLEVBQUMsc0JBRk47Z0JBR0UsU0FBUyxFQUFDO2NBSFo7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtZQURGO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERjtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBREYsZUFXRSw4REFBQyxrREFBRDtZQUFNLElBQUksRUFBQyxHQUFYO1lBQUEsdUJBQ0U7Y0FDRSxPQUFPLEVBQUUsbUJBQU07Z0JBQ2IsSUFBSUUsVUFBSixFQUFnQjtrQkFDZEMsYUFBYSxDQUFDLFVBQUNrQixJQUFEO29CQUFBLE9BQVUsQ0FBQ0EsSUFBWDtrQkFBQSxDQUFELENBQWI7Z0JBQ0Q7Y0FDRixDQUxIO2NBTUUsU0FBUyxFQUFDLDBCQU5aO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBREY7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQVhGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURGLGVBeUJFO1VBQUssU0FBUyxFQUFDLGdCQUFmO1VBQUEsVUFDRyxDQUNDO1lBQUVDLEtBQUssRUFBRSxNQUFUO1lBQWlCQyxJQUFJLEVBQUU7VUFBdkIsQ0FERCxFQUVDO1lBQUVELEtBQUssRUFBRSxPQUFUO1lBQWtCQyxJQUFJLEVBQUU7VUFBeEIsQ0FGRCxFQUdDO1lBQUVELEtBQUssRUFBRSxTQUFUO1lBQW9CQyxJQUFJLEVBQUU7VUFBMUIsQ0FIRCxFQUlDO1lBQUVELEtBQUssRUFBRSxZQUFUO1lBQXVCQyxJQUFJLEVBQUU7VUFBN0IsQ0FKRCxFQUtDQyxHQUxELENBS0ssVUFBQ0MsSUFBRDtZQUFBLG9CQUNKLDhEQUFDLGtEQUFEO2NBQXNCLElBQUksRUFBRUEsSUFBSSxDQUFDRixJQUFqQztjQUFBLHVCQUNFO2dCQUNFLFNBQVMsa0VBQ1BsQixLQUFLLEtBQUtvQixJQUFJLENBQUNGLElBQWYsR0FBc0IsOEJBQXRCLEdBQXVELEVBRGhELENBRFg7Z0JBQUEsVUFLR0UsSUFBSSxDQUFDSDtjQUxSO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUE7WUFERixHQUFXRyxJQUFJLENBQUNGLElBQWhCO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FESTtVQUFBLENBTEw7UUFESDtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBekJGLGVBMkNFLDhEQUFDLGtEQUFEO1VBQ0UsU0FBUyxFQUFDLFdBRFo7VUFFRSxJQUFJLEVBQUUsRUFGUjtVQUdFLE9BQU8sRUFBRSxtQkFBTTtZQUNicEIsYUFBYSxDQUFDLFVBQUNrQixJQUFEO2NBQUEsT0FBVSxDQUFDQSxJQUFYO1lBQUEsQ0FBRCxDQUFiO1VBQ0Q7UUFMSDtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBM0NGLGVBa0RFLDhEQUFDLHVEQUFEO1VBQWEsSUFBSSxFQUFFLFVBQW5CO1VBQStCLFNBQVMsRUFBQztRQUF6QztVQUFBO1VBQUE7VUFBQTtRQUFBLFFBbERGLGVBbURFO1VBQ0UsU0FBUyx3SkFDUG5CLFVBQVUsR0FDTiw0QkFETSxHQUVOLCtCQUhHLENBRFg7VUFBQSxVQU9HLENBQ0M7WUFBRW9CLEtBQUssRUFBRSxNQUFUO1lBQWlCQyxJQUFJLEVBQUUsR0FBdkI7WUFBNEJHLFFBQVEsRUFBRW5CO1VBQXRDLENBREQsRUFFQztZQUNFZSxLQUFLLEVBQUUsT0FEVDtZQUVFQyxJQUFJLEVBQUUsUUFGUjtZQUdFRyxRQUFRLEVBQUVsQjtVQUhaLENBRkQsRUFPQztZQUNFYyxLQUFLLEVBQUUsU0FEVDtZQUVFQyxJQUFJLEVBQUUsVUFGUjtZQUdFRyxRQUFRLEVBQUVqQjtVQUhaLENBUEQsRUFhQztZQUNFYSxLQUFLLEVBQUUsWUFEVDtZQUVFQyxJQUFJLEVBQUUsVUFGUjtZQUdFRyxRQUFRLEVBQUVoQjtVQUhaLENBYkQsRUFrQkNjLEdBbEJELENBa0JLLFVBQUNDLElBQUQ7WUFBQSxvQkFDSiw4REFBQyxrREFBRDtjQUFzQixJQUFJLEVBQUVBLElBQUksQ0FBQ0YsSUFBakM7Y0FBQSx1QkFDRTtnQkFDRSxTQUFTLHNGQUErRUUsSUFBSSxDQUFDQyxRQUFwRixDQURYO2dCQUVFLE9BQU8sRUFBRSxtQkFBTTtrQkFDYixJQUFJRCxJQUFJLENBQUNDLFFBQUwsSUFBaUJ4QixVQUFyQixFQUFpQztvQkFDL0JDLGFBQWEsQ0FBQyxLQUFELENBQWI7a0JBQ0Q7Z0JBQ0YsQ0FOSDtnQkFBQSxVQVFHc0IsSUFBSSxDQUFDSDtjQVJSO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUE7WUFERixHQUFXRyxJQUFJLENBQUNGLElBQWhCO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FESTtVQUFBLENBbEJMO1FBUEg7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQW5ERjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBUkYsZUFzR0U7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBQyxPQUFmO1FBQUEsVUFBd0J0QjtNQUF4QjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQXRHRixlQXlHRTtNQUFLLFNBQVMsRUFBQywwQkFBZjtNQUFBLHVCQUNFO1FBQVEsU0FBUyxFQUFDLDhEQUFsQjtRQUFBLHVCQUNFO1VBQUssU0FBUyxFQUFDLDZEQUFmO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUF6R0Y7RUFBQSxnQkFERjtBQW1IRDs7R0FwSnVCRjtVQUVQTjs7O0tBRk9NIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wQmFyLmpzeD9kN2UxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQmlNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCJcbmltcG9ydCB7IEdyQ2xpcGJvYXJkIH0gZnJvbSBcInJlYWN0LWljb25zL2dyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW21vYmlsZU1lbnUsIHNldE1vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHJvdXRlID0gcm91dGVyLnBhdGhuYW1lXG4gIGNvbnN0IGlzSG9tZVBhZ2UgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiXG4gIGNvbnN0IGlzQWJvdXRQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9hYm91dFwiXG4gIGNvbnN0IGlzR2FsbGVyeVBhZ2UgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2dhbGxlcnlcIlxuICBjb25zdCBpc0NvbnRhY3RQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9jb250YWN0XCJcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0IHx8IG1vYmlsZU1lbnUpIHtcbiAgICAgICAgLy8gQWRqdXN0IHRoZSB2YWx1ZSB0byBtYXRjaCB0aGUgJ2xhcmdlJyBicmVha3BvaW50IGluIHlvdXIgVGFpbHdpbmQgQ1NTIGNvbmZpZ1xuICAgICAgICBzZXRNb2JpbGVNZW51KGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEFkZCBvciByZW1vdmUgXCJvdmVyZmxvdy1oaWRkZW5cIiBjbGFzcyBvbiBib2R5IGRlcGVuZGluZyBvbiBtb2JpbGVNZW51IHN0YXRlXG4gICAgaWYgKG1vYmlsZU1lbnUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyZmxvdy1oaWRkZW5cIilcbiAgICB9XG4gIH0sIFttb2JpbGVNZW51XSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIHt0aXRsZSA/IHRpdGxlICsgXCIgLSBDaXRhZGVsIEZlbmNpbmdcIiA6IFwiQ2l0YWRlbCBGZW5jaW5nXCJ9XG4gICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWJzaXRlXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYmctd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5qcGdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiQ2l0YWRlbCBGZW5jaW5nIExvZ29cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNDVweF0gbWQ6dy1bNjBweF0gb2JqZWN0LWNvdmVyIHAtMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAobW9iaWxlTWVudSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2JpbGVNZW51KChwcmV2KSA9PiAhcHJldilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgcHktMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDaXRhZGVsIEZlbmNpbmdcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4XCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIkhvbWVcIiwgaHJlZjogXCIvXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCJBYm91dFwiLCBocmVmOiBcIi9hYm91dFwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwiR2FsbGVyeVwiLCBocmVmOiBcIi9nYWxsZXJ5XCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCJDb250YWN0IFVzXCIsIGhyZWY6IFwiL2NvbnRhY3RcIiB9LFxuICAgICAgICAgICAgXS5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtsaW5rLmhyZWZ9IGhyZWY9e2xpbmsuaHJlZn0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiBweC00IHRleHQtYmFzZSBob3Zlcjp1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC00ICR7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlID09PSBsaW5rLmhyZWYgPyBcInVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJpTWVudVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aGlkZGVuXCJcbiAgICAgICAgICAgIHNpemU9ezMwfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRNb2JpbGVNZW51KChwcmV2KSA9PiAhcHJldilcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R3JDbGlwYm9hcmQgc2l6ZT17MC4wMDAwMDAwMX0gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGxnOm1yLTE2XCIgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCB6LTUwIG10LVs2MXB4XSBoLWZ1bGwgbGVmdC0wIHRvcC0wIHctZnVsbCBvdmVyZmxvdy15LWF1dG8gb3ZlcmZsb3cteC1oaWRkZW4gbGc6aGlkZGVuIGJnLXdoaXRlIHB4LTQgcHktNyBmbGV4IGZsZXgtY29sIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgIG1vYmlsZU1lbnVcbiAgICAgICAgICAgICAgICA/IFwiZHVyYXRpb24tMzAwIHRyYW5zbGF0ZS14LTBcIlxuICAgICAgICAgICAgICAgIDogXCJkdXJhdGlvbi01MDAgdHJhbnNsYXRlLXgtZnVsbFwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIkhvbWVcIiwgaHJlZjogXCIvXCIsIGlzQWN0aXZlOiBpc0hvbWVQYWdlIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJBYm91dFwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL2Fib3V0XCIsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGlzQWJvdXRQYWdlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiR2FsbGVyeVwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL2dhbGxlcnlcIixcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogaXNHYWxsZXJ5UGFnZSxcbiAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiQ29udGFjdCBVc1wiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL2NvbnRhY3RcIixcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogaXNDb250YWN0UGFnZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0ubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17bGluay5ocmVmfSBocmVmPXtsaW5rLmhyZWZ9PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyIHAtOCBweS02IHRleHQtYmFzZSBob3Zlcjp1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC00ICR7bGluay5pc0FjdGl2ZX1gfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGluay5pc0FjdGl2ZSAmJiBtb2JpbGVNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlTWVudShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNDBcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1pbm5lciBiZy1ncmF5LTkwMFwiPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImgtMTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtYXgtdy1bMTEwMHB4XSBtLWF1dG8gcHgtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzIHRleHQtZ3JheS0zMDAgbWQ6dGV4dC1iYXNlIHB4LTJcIj5cbiAgICAgICAgICAgIFBldGVyIE1vdGluIMKpIDIwMjNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJpTWVudSIsIkdyQ2xpcGJvYXJkIiwiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsIm1vYmlsZU1lbnUiLCJzZXRNb2JpbGVNZW51Iiwicm91dGVyIiwicm91dGUiLCJwYXRobmFtZSIsImlzSG9tZVBhZ2UiLCJpc0Fib3V0UGFnZSIsImlzR2FsbGVyeVBhZ2UiLCJpc0NvbnRhY3RQYWdlIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicHJldiIsImxhYmVsIiwiaHJlZiIsIm1hcCIsImxpbmsiLCJpc0FjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopBar.jsx\n"));

/***/ })

});