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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst AvatarEscene = ()=>{\n    _s();\n    const { scene , camera  } = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree)();\n    const gltfModel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n        const loadModel = async ()=>{\n            const gltf = await loader.loadAsync(\"./avatar.glb\");\n            gltfModel.current = gltf.scene;\n            gltfModel.current.position.set(0, 0, 0);\n            gltfModel.current.scale.set(2, 2, 2);\n            scene.add(gltfModel.current);\n        };\n        loadModel();\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 0.5);\n        scene.add(ambientLight);\n        return ()=>{\n            if (gltfModel.current) {\n                scene.remove(gltfModel.current);\n            }\n            scene.remove(ambientLight);\n        };\n    }, [\n        scene\n    ]);\n    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame)(()=>{\n        if (gltfModel.current) {\n            const { x , y , z  } = gltfModel.current.position;\n            const avatarY = y + 1;\n            camera.position.set(x, avatarY, z + 3);\n            camera.lookAt(x, avatarY, z);\n        }\n    });\n    return null;\n};\n_s(AvatarEscene, \"gRzMGc+YevopE84T/6pfLLGwUr8=\", false, function() {\n    return [\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree,\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame\n    ];\n});\n_c = AvatarEscene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarEscene);\nvar _c;\n$RefreshReg$(_c, \"AvatarEscene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ1k7QUFDekI7QUFDTDtBQUVyQyxNQUFNTSxlQUFlLElBQU07O0lBQ3pCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUUsR0FBR1IsMkRBQVFBO0lBQ2xDLE1BQU1TLFlBQVlMLDZDQUFNQSxDQUFDLElBQUk7SUFFN0JELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTyxTQUFTLElBQUlSLDZFQUFVQTtRQUU3QixNQUFNUyxZQUFZLFVBQVk7WUFDNUIsTUFBTUMsT0FBTyxNQUFNRixPQUFPRyxTQUFTLENBQUM7WUFDcENKLFVBQVVLLE9BQU8sR0FBR0YsS0FBS0wsS0FBSztZQUM5QkUsVUFBVUssT0FBTyxDQUFDQyxRQUFRLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEdBQUc7WUFDckNQLFVBQVVLLE9BQU8sQ0FBQ0csS0FBSyxDQUFDRCxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQ2xDVCxNQUFNVyxHQUFHLENBQUNULFVBQVVLLE9BQU87UUFDN0I7UUFFQUg7UUFFQSxNQUFNUSxlQUFlLElBQUlkLCtDQUFZQSxDQUFDLFVBQVU7UUFDaERFLE1BQU1XLEdBQUcsQ0FBQ0M7UUFFVixPQUFPLElBQU07WUFDWCxJQUFJVixVQUFVSyxPQUFPLEVBQUU7Z0JBQ3JCUCxNQUFNYSxNQUFNLENBQUNYLFVBQVVLLE9BQU87WUFDaEMsQ0FBQztZQUNEUCxNQUFNYSxNQUFNLENBQUNEO1FBQ2Y7SUFDRixHQUFHO1FBQUNaO0tBQU07SUFFVk4sMkRBQVFBLENBQUMsSUFBTTtRQUNiLElBQUlRLFVBQVVLLE9BQU8sRUFBRTtZQUNyQixNQUFNLEVBQUVPLEVBQUMsRUFBRUMsRUFBQyxFQUFFQyxFQUFDLEVBQUUsR0FBR2QsVUFBVUssT0FBTyxDQUFDQyxRQUFRO1lBQzlDLE1BQU1TLFVBQVVGLElBQUk7WUFDcEJkLE9BQU9PLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDSyxHQUFHRyxTQUFTRCxJQUFJO1lBQ3BDZixPQUFPaUIsTUFBTSxDQUFDSixHQUFHRyxTQUFTRDtRQUM1QixDQUFDO0lBQ0g7SUFFQSxPQUFPLElBQUk7QUFDYjtHQXRDTWpCOztRQUNzQk4sdURBQVFBO1FBMkJsQ0MsdURBQVFBOzs7S0E1QkpLO0FBd0NOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXZhdGFyRXNjZW5lLmpzP2ViOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhyZWUsIHVzZUZyYW1lIH0gZnJvbSBcInJlYWN0LXRocmVlLWZpYmVyXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbWJpZW50TGlnaHQgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IEF2YXRhckVzY2VuZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHNjZW5lLCBjYW1lcmEgfSA9IHVzZVRocmVlKCk7XHJcbiAgY29uc3QgZ2x0Zk1vZGVsID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9kZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdsdGYgPSBhd2FpdCBsb2FkZXIubG9hZEFzeW5jKFwiLi9hdmF0YXIuZ2xiXCIpO1xyXG4gICAgICBnbHRmTW9kZWwuY3VycmVudCA9IGdsdGYuc2NlbmU7XHJcbiAgICAgIGdsdGZNb2RlbC5jdXJyZW50LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcclxuICAgICAgZ2x0Zk1vZGVsLmN1cnJlbnQuc2NhbGUuc2V0KDIsIDIsIDIpO1xyXG4gICAgICBzY2VuZS5hZGQoZ2x0Zk1vZGVsLmN1cnJlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkTW9kZWwoKTtcclxuXHJcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjUpO1xyXG4gICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGdsdGZNb2RlbC5jdXJyZW50KSB7XHJcbiAgICAgICAgc2NlbmUucmVtb3ZlKGdsdGZNb2RlbC5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgICBzY2VuZS5yZW1vdmUoYW1iaWVudExpZ2h0KTtcclxuICAgIH07XHJcbiAgfSwgW3NjZW5lXSk7XHJcblxyXG4gIHVzZUZyYW1lKCgpID0+IHtcclxuICAgIGlmIChnbHRmTW9kZWwuY3VycmVudCkge1xyXG4gICAgICBjb25zdCB7IHgsIHksIHogfSA9IGdsdGZNb2RlbC5jdXJyZW50LnBvc2l0aW9uO1xyXG4gICAgICBjb25zdCBhdmF0YXJZID0geSArIDE7XHJcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoeCwgYXZhdGFyWSwgeiArIDMpO1xyXG4gICAgICBjYW1lcmEubG9va0F0KHgsIGF2YXRhclksIHopO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhckVzY2VuZTtcclxuIl0sIm5hbWVzIjpbInVzZVRocmVlIiwidXNlRnJhbWUiLCJHTFRGTG9hZGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQW1iaWVudExpZ2h0IiwiQXZhdGFyRXNjZW5lIiwic2NlbmUiLCJjYW1lcmEiLCJnbHRmTW9kZWwiLCJsb2FkZXIiLCJsb2FkTW9kZWwiLCJnbHRmIiwibG9hZEFzeW5jIiwiY3VycmVudCIsInBvc2l0aW9uIiwic2V0Iiwic2NhbGUiLCJhZGQiLCJhbWJpZW50TGlnaHQiLCJyZW1vdmUiLCJ4IiwieSIsInoiLCJhdmF0YXJZIiwibG9va0F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AvatarEscene.js\n"));

/***/ })

});