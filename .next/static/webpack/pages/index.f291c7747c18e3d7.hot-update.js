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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TypingText = ()=>{\n    _s();\n    const text = \"Desarrollador full stack MERN\";\n    const [typingText, setTypingText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    let index = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setInterval(()=>{\n            if (index < text.length) {\n                setTypingText((prevText)=>prevText + text.charAt(index));\n                index++;\n            } else {\n                clearInterval(timer);\n            }\n        }, 100); // Ajusta el tiempo entre cada carácter agregado\n        return ()=>{\n            clearInterval(timer);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: typingText\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\Programacion\\\\Next Portfolio\\\\components\\\\TypingText.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined);\n};\n_s(TypingText, \"Pq9CKT5V6U4pNrtq8i/8iUvCdRY=\");\n_c = TypingText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypingText);\nvar _c;\n$RefreshReg$(_c, \"TypingText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1R5cGluZ1RleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtRDtBQUVuRCxNQUFNRyxhQUFhLElBQU07O0lBQ3ZCLE1BQU1DLE9BQU87SUFDYixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFDN0MsSUFBSU0sUUFBUTtJQUVaTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTU0sUUFBUUMsWUFBWSxJQUFNO1lBQzlCLElBQUlGLFFBQVFILEtBQUtNLE1BQU0sRUFBRTtnQkFDdkJKLGNBQWNLLENBQUFBLFdBQVlBLFdBQVdQLEtBQUtRLE1BQU0sQ0FBQ0w7Z0JBQ2pEQTtZQUNGLE9BQU87Z0JBQ0xNLGNBQWNMO1lBQ2hCLENBQUM7UUFDSCxHQUFHLE1BQU0sZ0RBQWdEO1FBRXpELE9BQU8sSUFBTTtZQUNYSyxjQUFjTDtRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDTTtrQkFBSVQ7Ozs7OztBQUNkO0dBckJNRjtLQUFBQTtBQXVCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1R5cGluZ1RleHQuanM/YjQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFR5cGluZ1RleHQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGV4dCA9IFwiRGVzYXJyb2xsYWRvciBmdWxsIHN0YWNrIE1FUk5cIjtcclxuICBjb25zdCBbdHlwaW5nVGV4dCwgc2V0VHlwaW5nVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHNldFR5cGluZ1RleHQocHJldlRleHQgPT4gcHJldlRleHQgKyB0ZXh0LmNoYXJBdChpbmRleCkpO1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMCk7IC8vIEFqdXN0YSBlbCB0aWVtcG8gZW50cmUgY2FkYSBjYXLDoWN0ZXIgYWdyZWdhZG9cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPGgzPnt0eXBpbmdUZXh0fTwvaDM+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwaW5nVGV4dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlR5cGluZ1RleHQiLCJ0ZXh0IiwidHlwaW5nVGV4dCIsInNldFR5cGluZ1RleHQiLCJpbmRleCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJwcmV2VGV4dCIsImNoYXJBdCIsImNsZWFySW50ZXJ2YWwiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TypingText.js\n"));

/***/ })

});