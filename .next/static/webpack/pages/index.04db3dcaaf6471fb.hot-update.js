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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AvatarEscene = ()=>{\n    _s();\n    const { scene , camera , size  } = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)();\n    const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader();\n        const loadModel = async ()=>{\n            const gltf = await loader.loadAsync(\"./avatar.glb\");\n            const avatar = gltf.scene;\n            avatar.scale.set(5, 5, 5); // Adjust the scale to make the avatar larger\n            avatarRef.current = avatar;\n            scene.add(avatar);\n        };\n        loadModel();\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xffffff, 0.5);\n        scene.add(ambientLight);\n        return ()=>{\n            if (avatarRef.current) {\n                scene.remove(avatarRef.current);\n            }\n            scene.remove(ambientLight);\n        };\n    }, [\n        scene\n    ]);\n    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(()=>{\n        if (avatarRef.current) {\n            const { x , y , z  } = avatarRef.current.position;\n            camera.position.set(x, y, z); // Set the camera's position to align with the avatar's position\n            camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(x, y, z)); // Adjust the camera's target to look at the avatar\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                style: {\n                    height: \"500px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\Programacion\\\\Next Portfolio\\\\components\\\\AvatarEscene.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"scene\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\Programacion\\\\Next Portfolio\\\\components\\\\AvatarEscene.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AvatarEscene, \"kNRCAgIpSJISWxhWblcQ95Q6n78=\", false, function() {\n    return [\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree,\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = AvatarEscene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarEscene);\nvar _c;\n$RefreshReg$(_c, \"AvatarEscene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBQ1k7QUFDekI7QUFDSTtBQUU5QyxNQUFNTyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHViwyREFBUUE7SUFDeEMsTUFBTVcsWUFBWVAsNkNBQU1BO0lBRXhCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVMsU0FBUyxJQUFJViw2RUFBVUE7UUFFN0IsTUFBTVcsWUFBWSxVQUFZO1lBQzVCLE1BQU1DLE9BQU8sTUFBTUYsT0FBT0csU0FBUyxDQUFDO1lBQ3BDLE1BQU1DLFNBQVNGLEtBQUtOLEtBQUs7WUFDekJRLE9BQU9DLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLDZDQUE2QztZQUN4RVAsVUFBVVEsT0FBTyxHQUFHSDtZQUNwQlIsTUFBTVksR0FBRyxDQUFDSjtRQUNaO1FBRUFIO1FBRUEsTUFBTVEsZUFBZSxJQUFJaEIsK0NBQVlBLENBQUMsVUFBVTtRQUNoREcsTUFBTVksR0FBRyxDQUFDQztRQUVWLE9BQU8sSUFBTTtZQUNYLElBQUlWLFVBQVVRLE9BQU8sRUFBRTtnQkFDckJYLE1BQU1jLE1BQU0sQ0FBQ1gsVUFBVVEsT0FBTztZQUNoQyxDQUFDO1lBQ0RYLE1BQU1jLE1BQU0sQ0FBQ0Q7UUFDZjtJQUNGLEdBQUc7UUFBQ2I7S0FBTTtJQUVWUCwyREFBUUEsQ0FBQyxJQUFNO1FBQ2IsSUFBSVUsVUFBVVEsT0FBTyxFQUFFO1lBQ3JCLE1BQU0sRUFBRUksRUFBQyxFQUFFQyxFQUFDLEVBQUVDLEVBQUMsRUFBRSxHQUFHZCxVQUFVUSxPQUFPLENBQUNPLFFBQVE7WUFDOUNqQixPQUFPaUIsUUFBUSxDQUFDUixHQUFHLENBQUNLLEdBQUdDLEdBQUdDLElBQUksZ0VBQWdFO1lBQzlGaEIsT0FBT2tCLE1BQU0sQ0FBQyxJQUFJckIsMENBQU9BLENBQUNpQixHQUFHQyxHQUFHQyxLQUFLLG1EQUFtRDtRQUMxRixDQUFDO0lBQ0g7SUFFQSxxQkFDRTs7MEJBRUUsOERBQUNHO2dCQUFPQyxPQUFPO29CQUFFQyxRQUFRO2dCQUFROzs7Ozs7MEJBR2pDLDhEQUFDdEI7Ozs7Ozs7QUFHUDtHQTdDTUQ7O1FBQzRCUCx1REFBUUE7UUEyQnhDQyx1REFBUUE7OztLQTVCSk07QUErQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmF0YXJFc2NlbmUuanM/ZWI5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUaHJlZSwgdXNlRnJhbWUgfSBmcm9tIFwicmVhY3QtdGhyZWUtZmliZXJcIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFtYmllbnRMaWdodCwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgQXZhdGFyRXNjZW5lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2NlbmUsIGNhbWVyYSwgc2l6ZSB9ID0gdXNlVGhyZWUoKTtcclxuICBjb25zdCBhdmF0YXJSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XHJcblxyXG4gICAgY29uc3QgbG9hZE1vZGVsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBnbHRmID0gYXdhaXQgbG9hZGVyLmxvYWRBc3luYyhcIi4vYXZhdGFyLmdsYlwiKTtcclxuICAgICAgY29uc3QgYXZhdGFyID0gZ2x0Zi5zY2VuZTtcclxuICAgICAgYXZhdGFyLnNjYWxlLnNldCg1LCA1LCA1KTsgLy8gQWRqdXN0IHRoZSBzY2FsZSB0byBtYWtlIHRoZSBhdmF0YXIgbGFyZ2VyXHJcbiAgICAgIGF2YXRhclJlZi5jdXJyZW50ID0gYXZhdGFyO1xyXG4gICAgICBzY2VuZS5hZGQoYXZhdGFyKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZE1vZGVsKCk7XHJcblxyXG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMC41KTtcclxuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChhdmF0YXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHNjZW5lLnJlbW92ZShhdmF0YXJSZWYuY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgICAgc2NlbmUucmVtb3ZlKGFtYmllbnRMaWdodCk7XHJcbiAgICB9O1xyXG4gIH0sIFtzY2VuZV0pO1xyXG5cclxuICB1c2VGcmFtZSgoKSA9PiB7XHJcbiAgICBpZiAoYXZhdGFyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgeyB4LCB5LCB6IH0gPSBhdmF0YXJSZWYuY3VycmVudC5wb3NpdGlvbjtcclxuICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldCh4LCB5LCB6KTsgLy8gU2V0IHRoZSBjYW1lcmEncyBwb3NpdGlvbiB0byBhbGlnbiB3aXRoIHRoZSBhdmF0YXIncyBwb3NpdGlvblxyXG4gICAgICBjYW1lcmEubG9va0F0KG5ldyBWZWN0b3IzKHgsIHksIHopKTsgLy8gQWRqdXN0IHRoZSBjYW1lcmEncyB0YXJnZXQgdG8gbG9vayBhdCB0aGUgYXZhdGFyXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogU2V0IHRoZSBjYW52YXMgaGVpZ2h0IHRvIDUwMHB4ICovfVxyXG4gICAgICA8Y2FudmFzIHN0eWxlPXt7IGhlaWdodDogXCI1MDBweFwiIH19IC8+XHJcblxyXG4gICAgICB7LyogUmVuZGVyIHRoZSBzY2VuZSAqL31cclxuICAgICAgPHNjZW5lIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyRXNjZW5lO1xyXG4iXSwibmFtZXMiOlsidXNlVGhyZWUiLCJ1c2VGcmFtZSIsIkdMVEZMb2FkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJBbWJpZW50TGlnaHQiLCJWZWN0b3IzIiwiQXZhdGFyRXNjZW5lIiwic2NlbmUiLCJjYW1lcmEiLCJzaXplIiwiYXZhdGFyUmVmIiwibG9hZGVyIiwibG9hZE1vZGVsIiwiZ2x0ZiIsImxvYWRBc3luYyIsImF2YXRhciIsInNjYWxlIiwic2V0IiwiY3VycmVudCIsImFkZCIsImFtYmllbnRMaWdodCIsInJlbW92ZSIsIngiLCJ5IiwieiIsInBvc2l0aW9uIiwibG9va0F0IiwiY2FudmFzIiwic3R5bGUiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AvatarEscene.js\n"));

/***/ })

});