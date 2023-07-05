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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst AvatarEscene = ()=>{\n    _s();\n    const { scene , camera , size  } = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree)();\n    const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n        const loadModel = async ()=>{\n            const gltf = await loader.loadAsync(\"./avatar.glb\");\n            const avatar = gltf.scene;\n            avatar.scale.set(5, 5, 5); // Adjust the scale to make the avatar larger\n            avatar.position.set(0, 0);\n            avatarRef.current = avatar;\n            scene.add(avatar);\n        };\n        loadModel();\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 1);\n        scene.add(ambientLight);\n        return ()=>{\n            if (avatarRef.current) {\n                scene.remove(avatarRef.current);\n            }\n            scene.remove(ambientLight);\n        };\n    }, [\n        scene\n    ]);\n    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame)(()=>{\n        if (avatarRef.current) {\n            const { x , y , z  } = avatarRef.current.position;\n            camera.position.set(x, y + 2, z + 10); // Adjust the camera's position to move closer to the avatar\n            camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(x, y, z)); // Adjust the camera's target to look at the avatar\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (size.width && size.height) {\n            const aspect = size.width / size.height;\n            camera.aspect = aspect;\n            camera.updateProjectionMatrix();\n        }\n    }, [\n        camera,\n        size\n    ]);\n    return null;\n};\n_s(AvatarEscene, \"NdOWTBiiaY80aUQSiioRISCP0i4=\", false, function() {\n    return [\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree,\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame\n    ];\n});\n_c = AvatarEscene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarEscene);\nvar _c;\n$RefreshReg$(_c, \"AvatarEscene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ1k7QUFDekI7QUFDSTtBQUU5QyxNQUFNTyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHViwyREFBUUE7SUFDeEMsTUFBTVcsWUFBWVAsNkNBQU1BO0lBRXhCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVMsU0FBUyxJQUFJViw2RUFBVUE7UUFFN0IsTUFBTVcsWUFBWSxVQUFZO1lBQzVCLE1BQU1DLE9BQU8sTUFBTUYsT0FBT0csU0FBUyxDQUFDO1lBQ3BDLE1BQU1DLFNBQVNGLEtBQUtOLEtBQUs7WUFDekJRLE9BQU9DLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLDZDQUE2QztZQUN4RUYsT0FBT0csUUFBUSxDQUFDRCxHQUFHLENBQUMsR0FBRztZQUN2QlAsVUFBVVMsT0FBTyxHQUFHSjtZQUNwQlIsTUFBTWEsR0FBRyxDQUFDTDtRQUNaO1FBRUFIO1FBRUEsTUFBTVMsZUFBZSxJQUFJakIsK0NBQVlBLENBQUMsVUFBVTtRQUNoREcsTUFBTWEsR0FBRyxDQUFDQztRQUVWLE9BQU8sSUFBTTtZQUNYLElBQUlYLFVBQVVTLE9BQU8sRUFBRTtnQkFDckJaLE1BQU1lLE1BQU0sQ0FBQ1osVUFBVVMsT0FBTztZQUNoQyxDQUFDO1lBQ0RaLE1BQU1lLE1BQU0sQ0FBQ0Q7UUFDZjtJQUNGLEdBQUc7UUFBQ2Q7S0FBTTtJQUVWUCwyREFBUUEsQ0FBQyxJQUFNO1FBQ2IsSUFBSVUsVUFBVVMsT0FBTyxFQUFFO1lBQ3JCLE1BQU0sRUFBRUksRUFBQyxFQUFFQyxFQUFDLEVBQUVDLEVBQUMsRUFBRSxHQUFHZixVQUFVUyxPQUFPLENBQUNELFFBQVE7WUFDOUNWLE9BQU9VLFFBQVEsQ0FBQ0QsR0FBRyxDQUFDTSxHQUFHQyxJQUFJLEdBQUdDLElBQUksS0FBSyw0REFBNEQ7WUFDbkdqQixPQUFPa0IsTUFBTSxDQUFDLElBQUlyQiwwQ0FBT0EsQ0FBQ2tCLEdBQUdDLEdBQUdDLEtBQU0sbURBQW1EO1FBQzNGLENBQUM7SUFDSDtJQUVBdkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlPLEtBQUtrQixLQUFLLElBQUlsQixLQUFLbUIsTUFBTSxFQUFFO1lBQzdCLE1BQU1DLFNBQVNwQixLQUFLa0IsS0FBSyxHQUFHbEIsS0FBS21CLE1BQU07WUFDdkNwQixPQUFPcUIsTUFBTSxHQUFHQTtZQUNoQnJCLE9BQU9zQixzQkFBc0I7UUFDL0IsQ0FBQztJQUNILEdBQUc7UUFBQ3RCO1FBQVFDO0tBQUs7SUFFakIsT0FBTyxJQUFJO0FBQ2I7R0E5Q01IOztRQUM0QlAsdURBQVFBO1FBNEJ4Q0MsdURBQVFBOzs7S0E3QkpNO0FBZ0ROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXZhdGFyRXNjZW5lLmpzP2ViOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhyZWUsIHVzZUZyYW1lIH0gZnJvbSBcInJlYWN0LXRocmVlLWZpYmVyXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbWJpZW50TGlnaHQsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IEF2YXRhckVzY2VuZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHNjZW5lLCBjYW1lcmEsIHNpemUgfSA9IHVzZVRocmVlKCk7XHJcbiAgY29uc3QgYXZhdGFyUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb2RlbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZ2x0ZiA9IGF3YWl0IGxvYWRlci5sb2FkQXN5bmMoXCIuL2F2YXRhci5nbGJcIik7XHJcbiAgICAgIGNvbnN0IGF2YXRhciA9IGdsdGYuc2NlbmU7XHJcbiAgICAgIGF2YXRhci5zY2FsZS5zZXQoNSwgNSwgNSk7IC8vIEFkanVzdCB0aGUgc2NhbGUgdG8gbWFrZSB0aGUgYXZhdGFyIGxhcmdlclxyXG4gICAgICBhdmF0YXIucG9zaXRpb24uc2V0KDAsIDAsICk7XHJcbiAgICAgIGF2YXRhclJlZi5jdXJyZW50ID0gYXZhdGFyO1xyXG4gICAgICBzY2VuZS5hZGQoYXZhdGFyKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZE1vZGVsKCk7XHJcblxyXG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMSk7XHJcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoYXZhdGFyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBzY2VuZS5yZW1vdmUoYXZhdGFyUmVmLmN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHNjZW5lLnJlbW92ZShhbWJpZW50TGlnaHQpO1xyXG4gICAgfTtcclxuICB9LCBbc2NlbmVdKTtcclxuXHJcbiAgdXNlRnJhbWUoKCkgPT4ge1xyXG4gICAgaWYgKGF2YXRhclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgeCwgeSwgeiB9ID0gYXZhdGFyUmVmLmN1cnJlbnQucG9zaXRpb247XHJcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoeCwgeSArIDIsIHogKyAxMCk7IC8vIEFkanVzdCB0aGUgY2FtZXJhJ3MgcG9zaXRpb24gdG8gbW92ZSBjbG9zZXIgdG8gdGhlIGF2YXRhclxyXG4gICAgICBjYW1lcmEubG9va0F0KG5ldyBWZWN0b3IzKHgsIHksIHogKSk7IC8vIEFkanVzdCB0aGUgY2FtZXJhJ3MgdGFyZ2V0IHRvIGxvb2sgYXQgdGhlIGF2YXRhclxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNpemUud2lkdGggJiYgc2l6ZS5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgYXNwZWN0ID0gc2l6ZS53aWR0aCAvIHNpemUuaGVpZ2h0O1xyXG4gICAgICBjYW1lcmEuYXNwZWN0ID0gYXNwZWN0O1xyXG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgfVxyXG4gIH0sIFtjYW1lcmEsIHNpemVdKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXJFc2NlbmU7Il0sIm5hbWVzIjpbInVzZVRocmVlIiwidXNlRnJhbWUiLCJHTFRGTG9hZGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQW1iaWVudExpZ2h0IiwiVmVjdG9yMyIsIkF2YXRhckVzY2VuZSIsInNjZW5lIiwiY2FtZXJhIiwic2l6ZSIsImF2YXRhclJlZiIsImxvYWRlciIsImxvYWRNb2RlbCIsImdsdGYiLCJsb2FkQXN5bmMiLCJhdmF0YXIiLCJzY2FsZSIsInNldCIsInBvc2l0aW9uIiwiY3VycmVudCIsImFkZCIsImFtYmllbnRMaWdodCIsInJlbW92ZSIsIngiLCJ5IiwieiIsImxvb2tBdCIsIndpZHRoIiwiaGVpZ2h0IiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AvatarEscene.js\n"));

/***/ })

});