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

/***/ "./components/AvatarEscene.js":
/*!************************************!*\
  !*** ./components/AvatarEscene.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\nvar _s = $RefreshSig$();\n\n\nconst AvatarEscene = ()=>{\n    _s();\n    const { scene  } = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_0__.useThree)();\n    useEffect(()=>{\n        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();\n        loader.load(\"/path/to/avatar.glb\", (gltf1)=>{\n            scene.add(gltf1.scene);\n        });\n        return ()=>{\n            scene.remove(gltf.scene);\n        };\n    }, [\n        scene\n    ]);\n    return null;\n};\n_s(AvatarEscene, \"UhCC8wDD2cMyItT8qLKLhYRbhzM=\", false, function() {\n    return [\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_0__.useThree\n    ];\n});\n_c = AvatarEscene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarEscene);\nvar _c;\n$RefreshReg$(_c, \"AvatarEscene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQTZDO0FBQ3NCO0FBQ25FLE1BQU1FLGVBQWUsSUFBTTs7SUFDdkIsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsMkRBQVFBO0lBRTFCSSxVQUFVLElBQU07UUFDWixNQUFNQyxTQUFTLElBQUlKLDZFQUFVQTtRQUM3QkksT0FBT0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDQyxRQUFTO1lBQzNDSixNQUFNSyxHQUFHLENBQUNELE1BQUtKLEtBQUs7UUFDdEI7UUFFQSxPQUFPLElBQU07WUFDWEEsTUFBTU0sTUFBTSxDQUFDRixLQUFLSixLQUFLO1FBQ3pCO0lBQ0YsR0FBRztRQUFDQTtLQUFNO0lBRVYsT0FBTyxJQUFJO0FBQ2Y7R0FmSUQ7O1FBQ2dCRix1REFBUUE7OztLQUR4QkU7QUFpQkosK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmF0YXJFc2NlbmUuanM/ZWI5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUaHJlZSB9IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIjtcclxuY29uc3QgQXZhdGFyRXNjZW5lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzY2VuZSB9ID0gdXNlVGhyZWUoKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuICAgICAgICBsb2FkZXIubG9hZCgnL3BhdGgvdG8vYXZhdGFyLmdsYicsIChnbHRmKSA9PiB7XHJcbiAgICAgICAgICBzY2VuZS5hZGQoZ2x0Zi5zY2VuZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgc2NlbmUucmVtb3ZlKGdsdGYuc2NlbmUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0sIFtzY2VuZV0pO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEF2YXRhckVzY2VuZTsiXSwibmFtZXMiOlsidXNlVGhyZWUiLCJHTFRGTG9hZGVyIiwiQXZhdGFyRXNjZW5lIiwic2NlbmUiLCJ1c2VFZmZlY3QiLCJsb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AvatarEscene.js\n"));

/***/ })

});