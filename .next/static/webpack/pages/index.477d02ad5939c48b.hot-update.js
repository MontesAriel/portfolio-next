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

/***/ "./components/TypingText.js":
/*!**********************************!*\
  !*** ./components/TypingText.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_typing_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typing-effect */ \"./node_modules/react-typing-effect/dist/index.js\");\n/* harmony import */ var react_typing_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typing_effect__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst TypingText = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_typing_effect__WEBPACK_IMPORTED_MODULE_2___default()), {\n            text: [\n                \"Desarrollador Full Stack.\",\n                \"MERN\"\n            ],\n            cursorRenderer: (cursor)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: cursor\n                }, void 0, false, void 0, void 0),\n            displayTextRenderer: (text, i)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: text.split(\"\").map((char, i)=>{\n                        const key = \"\".concat(i);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: i % 2 === 0 ? {\n                                color: \"magenta\"\n                            } : {},\n                            children: char\n                        }, key, false, void 0, void 0);\n                    })\n                }, void 0, false, void 0, void 0);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\Programacion\\\\Next Portfolio\\\\components\\\\TypingText.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = TypingText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypingText);\nvar _c;\n$RefreshReg$(_c, \"TypingText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1R5cGluZ1RleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDMEI7QUFFcEQsTUFBTUUsYUFBYSxJQUFNO0lBQ3ZCLHFCQUNFO2tCQUVFLDRFQUFDRCw0REFBaUJBO1lBQ2hCRSxNQUFNO2dCQUFDO2dCQUE2QjthQUFPO1lBQzNDQyxnQkFBZ0JDLENBQUFBLHVCQUFVLDhEQUFDQzs4QkFBSUQ7O1lBQy9CRSxxQkFBcUIsQ0FBQ0osTUFBTUssSUFBTTtnQkFDaEMscUJBQ0UsOERBQUNGOzhCQUNFSCxLQUFLTSxLQUFLLENBQUMsSUFBSUMsR0FBRyxDQUFDLENBQUNDLE1BQU1ILElBQU07d0JBQy9CLE1BQU1JLE1BQU0sR0FBSyxPQUFGSjt3QkFDZixxQkFDRSw4REFBQ0s7NEJBRUNDLE9BQU9OLElBQUUsTUFBTSxJQUFJO2dDQUFFTyxPQUFPOzRCQUFTLElBQUksQ0FBQyxDQUFDO3NDQUMzQ0o7MkJBRktDO29CQUlYOztZQUdOOzs7Ozs7O0FBSVI7S0F6Qk1WO0FBMkJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHlwaW5nVGV4dC5qcz9iNDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdFR5cGluZ0VmZmVjdCBmcm9tICdyZWFjdC10eXBpbmctZWZmZWN0JztcclxuXHJcbmNvbnN0IFR5cGluZ1RleHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8UmVhY3RUeXBpbmdFZmZlY3RcclxuICAgICAgICB0ZXh0PXtbXCJEZXNhcnJvbGxhZG9yIEZ1bGwgU3RhY2suXCIsIFwiTUVSTlwiXX1cclxuICAgICAgICBjdXJzb3JSZW5kZXJlcj17Y3Vyc29yID0+IDxoMT57Y3Vyc29yfTwvaDE+fVxyXG4gICAgICAgIGRpc3BsYXlUZXh0UmVuZGVyZXI9eyh0ZXh0LCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAge3RleHQuc3BsaXQoJycpLm1hcCgoY2hhciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYCR7aX1gO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17aSUyID09PSAwID8geyBjb2xvcjogJ21hZ2VudGEnfSA6IHt9fVxyXG4gICAgICAgICAgICAgICAgICA+e2NoYXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX0gICAgICAgIFxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR5cGluZ1RleHQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RUeXBpbmdFZmZlY3QiLCJUeXBpbmdUZXh0IiwidGV4dCIsImN1cnNvclJlbmRlcmVyIiwiY3Vyc29yIiwiaDEiLCJkaXNwbGF5VGV4dFJlbmRlcmVyIiwiaSIsInNwbGl0IiwibWFwIiwiY2hhciIsImtleSIsInNwYW4iLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TypingText.js\n"));

/***/ })

});