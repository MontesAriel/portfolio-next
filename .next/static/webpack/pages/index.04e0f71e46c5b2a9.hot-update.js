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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst AvatarEscene = ()=>{\n    _s();\n    const { scene , camera  } = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree)();\n    const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n        const loadModel = async ()=>{\n            const gltf = await loader.loadAsync(\"./avatar.glb\");\n            const avatar = gltf.scene;\n            avatar.scale.set(5, 5, 5); // Adjust the scale to make the avatar larger\n            avatarRef.current = avatar;\n            scene.add(avatar);\n        };\n        loadModel();\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 1);\n        scene.add(ambientLight);\n        return ()=>{\n            if (avatarRef.current) {\n                scene.remove(avatarRef.current);\n            }\n            scene.remove(ambientLight);\n        };\n    }, [\n        scene\n    ]);\n    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame)(()=>{\n        if (avatarRef.current) {\n            const { x , y , z  } = avatarRef.current.position;\n            camera.position.set(x, y + 11, z + 1); // Adjust the camera's position to move closer to the avatar\n            camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(x, y, z)); // Adjust the camera's target to look at the avatar\n        }\n    });\n    return null;\n};\n_s(AvatarEscene, \"RyFcifPFjN7rDWcGlhcJG/uNMwU=\", false, function() {\n    return [\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree,\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame\n    ];\n});\n_c = AvatarEscene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarEscene);\nvar _c;\n$RefreshReg$(_c, \"AvatarEscene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ1k7QUFDekI7QUFDSTtBQUU5QyxNQUFNTyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUUsR0FBR1QsMkRBQVFBO0lBQ2xDLE1BQU1VLFlBQVlOLDZDQUFNQTtJQUV4QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1RLFNBQVMsSUFBSVQsNkVBQVVBO1FBRTdCLE1BQU1VLFlBQVksVUFBWTtZQUM1QixNQUFNQyxPQUFPLE1BQU1GLE9BQU9HLFNBQVMsQ0FBQztZQUNwQyxNQUFNQyxTQUFTRixLQUFLTCxLQUFLO1lBQ3pCTyxPQUFPQyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSw2Q0FBNkM7WUFDeEVQLFVBQVVRLE9BQU8sR0FBR0g7WUFDcEJQLE1BQU1XLEdBQUcsQ0FBQ0o7UUFDWjtRQUVBSDtRQUVBLE1BQU1RLGVBQWUsSUFBSWYsK0NBQVlBLENBQUMsVUFBVTtRQUNoREcsTUFBTVcsR0FBRyxDQUFDQztRQUVWLE9BQU8sSUFBTTtZQUNYLElBQUlWLFVBQVVRLE9BQU8sRUFBRTtnQkFDckJWLE1BQU1hLE1BQU0sQ0FBQ1gsVUFBVVEsT0FBTztZQUNoQyxDQUFDO1lBQ0RWLE1BQU1hLE1BQU0sQ0FBQ0Q7UUFDZjtJQUNGLEdBQUc7UUFBQ1o7S0FBTTtJQUVWUCwyREFBUUEsQ0FBQyxJQUFNO1FBQ2IsSUFBSVMsVUFBVVEsT0FBTyxFQUFFO1lBQ3JCLE1BQU0sRUFBRUksRUFBQyxFQUFFQyxFQUFDLEVBQUVDLEVBQUMsRUFBRSxHQUFHZCxVQUFVUSxPQUFPLENBQUNPLFFBQVE7WUFDOUNoQixPQUFPZ0IsUUFBUSxDQUFDUixHQUFHLENBQUNLLEdBQUdDLElBQUksSUFBSUMsSUFBSSxJQUFJLDREQUE0RDtZQUNuR2YsT0FBT2lCLE1BQU0sQ0FBQyxJQUFJcEIsMENBQU9BLENBQUNnQixHQUFHQyxHQUFHQyxLQUFNLG1EQUFtRDtRQUMzRixDQUFDO0lBQ0g7SUFFQSxPQUFPLElBQUk7QUFDYjtHQXJDTWpCOztRQUNzQlAsdURBQVFBO1FBMkJsQ0MsdURBQVFBOzs7S0E1QkpNO0FBdUNOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXZhdGFyRXNjZW5lLmpzP2ViOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhyZWUsIHVzZUZyYW1lIH0gZnJvbSBcInJlYWN0LXRocmVlLWZpYmVyXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbWJpZW50TGlnaHQsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IEF2YXRhckVzY2VuZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHNjZW5lLCBjYW1lcmEgfSA9IHVzZVRocmVlKCk7XHJcbiAgY29uc3QgYXZhdGFyUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb2RlbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZ2x0ZiA9IGF3YWl0IGxvYWRlci5sb2FkQXN5bmMoXCIuL2F2YXRhci5nbGJcIik7XHJcbiAgICAgIGNvbnN0IGF2YXRhciA9IGdsdGYuc2NlbmU7XHJcbiAgICAgIGF2YXRhci5zY2FsZS5zZXQoNSwgNSwgNSk7IC8vIEFkanVzdCB0aGUgc2NhbGUgdG8gbWFrZSB0aGUgYXZhdGFyIGxhcmdlclxyXG4gICAgICBhdmF0YXJSZWYuY3VycmVudCA9IGF2YXRhcjtcclxuICAgICAgc2NlbmUuYWRkKGF2YXRhcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRNb2RlbCgpO1xyXG5cclxuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBBbWJpZW50TGlnaHQoMHhmZmZmZmYsIDEpO1xyXG4gICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGF2YXRhclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgc2NlbmUucmVtb3ZlKGF2YXRhclJlZi5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgICBzY2VuZS5yZW1vdmUoYW1iaWVudExpZ2h0KTtcclxuICAgIH07XHJcbiAgfSwgW3NjZW5lXSk7XHJcblxyXG4gIHVzZUZyYW1lKCgpID0+IHtcclxuICAgIGlmIChhdmF0YXJSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCB7IHgsIHksIHogfSA9IGF2YXRhclJlZi5jdXJyZW50LnBvc2l0aW9uO1xyXG4gICAgICBjYW1lcmEucG9zaXRpb24uc2V0KHgsIHkgKyAxMSwgeiArIDEpOyAvLyBBZGp1c3QgdGhlIGNhbWVyYSdzIHBvc2l0aW9uIHRvIG1vdmUgY2xvc2VyIHRvIHRoZSBhdmF0YXJcclxuICAgICAgY2FtZXJhLmxvb2tBdChuZXcgVmVjdG9yMyh4LCB5LCB6ICkpOyAvLyBBZGp1c3QgdGhlIGNhbWVyYSdzIHRhcmdldCB0byBsb29rIGF0IHRoZSBhdmF0YXJcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXJFc2NlbmU7Il0sIm5hbWVzIjpbInVzZVRocmVlIiwidXNlRnJhbWUiLCJHTFRGTG9hZGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQW1iaWVudExpZ2h0IiwiVmVjdG9yMyIsIkF2YXRhckVzY2VuZSIsInNjZW5lIiwiY2FtZXJhIiwiYXZhdGFyUmVmIiwibG9hZGVyIiwibG9hZE1vZGVsIiwiZ2x0ZiIsImxvYWRBc3luYyIsImF2YXRhciIsInNjYWxlIiwic2V0IiwiY3VycmVudCIsImFkZCIsImFtYmllbnRMaWdodCIsInJlbW92ZSIsIngiLCJ5IiwieiIsInBvc2l0aW9uIiwibG9va0F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AvatarEscene.js\n"));

/***/ })

});