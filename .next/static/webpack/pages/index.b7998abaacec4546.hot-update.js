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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst AvatarEscene = ()=>{\n    _s();\n    const { scene , camera , size  } = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree)();\n    const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n        const loadModel = async ()=>{\n            const gltf = await loader.loadAsync(\"./avatar.glb\");\n            const avatar = gltf.scene;\n            avatar.scale.set(5, 5, 5); // Adjust the scale to make the avatar larger\n            avatar.position.set(1, 0, 0);\n            avatarRef.current = avatar;\n            scene.add(avatar);\n        };\n        loadModel();\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 1);\n        scene.add(ambientLight);\n        return ()=>{\n            if (avatarRef.current) {\n                scene.remove(avatarRef.current);\n            }\n            scene.remove(ambientLight);\n        };\n    }, [\n        scene\n    ]);\n    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame)(()=>{\n        if (avatarRef.current) {\n            const { x , y , z  } = avatarRef.current.position;\n            camera.position.set(x, y + 2, z + 10); // Adjust the camera's position to move closer to the avatar\n            camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(x, y, z)); // Adjust the camera's target to look at the avatar\n        }\n    });\n    return null;\n};\n_s(AvatarEscene, \"kNRCAgIpSJISWxhWblcQ95Q6n78=\", false, function() {\n    return [\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree,\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame\n    ];\n});\n_c = AvatarEscene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarEscene);\nvar _c;\n$RefreshReg$(_c, \"AvatarEscene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ1k7QUFDekI7QUFDSTtBQUU5QyxNQUFNTyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHViwyREFBUUE7SUFDeEMsTUFBTVcsWUFBWVAsNkNBQU1BO0lBRXhCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVMsU0FBUyxJQUFJViw2RUFBVUE7UUFFN0IsTUFBTVcsWUFBWSxVQUFZO1lBQzVCLE1BQU1DLE9BQU8sTUFBTUYsT0FBT0csU0FBUyxDQUFDO1lBQ3BDLE1BQU1DLFNBQVNGLEtBQUtOLEtBQUs7WUFDekJRLE9BQU9DLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLDZDQUE2QztZQUN4RUYsT0FBT0csUUFBUSxDQUFDRCxHQUFHLENBQUMsR0FBRyxHQUFHO1lBRTFCUCxVQUFVUyxPQUFPLEdBQUdKO1lBQ3BCUixNQUFNYSxHQUFHLENBQUNMO1FBQ1o7UUFFQUg7UUFFQSxNQUFNUyxlQUFlLElBQUlqQiwrQ0FBWUEsQ0FBQyxVQUFVO1FBQ2hERyxNQUFNYSxHQUFHLENBQUNDO1FBRVYsT0FBTyxJQUFNO1lBQ1gsSUFBSVgsVUFBVVMsT0FBTyxFQUFFO2dCQUNyQlosTUFBTWUsTUFBTSxDQUFDWixVQUFVUyxPQUFPO1lBQ2hDLENBQUM7WUFDRFosTUFBTWUsTUFBTSxDQUFDRDtRQUNmO0lBQ0YsR0FBRztRQUFDZDtLQUFNO0lBRVZQLDJEQUFRQSxDQUFDLElBQU07UUFDYixJQUFJVSxVQUFVUyxPQUFPLEVBQUU7WUFDckIsTUFBTSxFQUFFSSxFQUFDLEVBQUVDLEVBQUMsRUFBRUMsRUFBQyxFQUFFLEdBQUdmLFVBQVVTLE9BQU8sQ0FBQ0QsUUFBUTtZQUM5Q1YsT0FBT1UsUUFBUSxDQUFDRCxHQUFHLENBQUNNLEdBQUdDLElBQUksR0FBR0MsSUFBSSxLQUFLLDREQUE0RDtZQUNuR2pCLE9BQU9rQixNQUFNLENBQUMsSUFBSXJCLDBDQUFPQSxDQUFDa0IsR0FBR0MsR0FBR0MsS0FBTSxtREFBbUQ7UUFDM0YsQ0FBQztJQUNIO0lBSUEsT0FBTyxJQUFJO0FBQ2I7R0F6Q01uQjs7UUFDNEJQLHVEQUFRQTtRQTZCeENDLHVEQUFRQTs7O0tBOUJKTTtBQTJDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcz9lYjk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRocmVlLCB1c2VGcmFtZSB9IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQW1iaWVudExpZ2h0LCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBBdmF0YXJFc2NlbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzY2VuZSwgY2FtZXJhLCBzaXplIH0gPSB1c2VUaHJlZSgpO1xyXG4gIGNvbnN0IGF2YXRhclJlZiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9kZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdsdGYgPSBhd2FpdCBsb2FkZXIubG9hZEFzeW5jKFwiLi9hdmF0YXIuZ2xiXCIpO1xyXG4gICAgICBjb25zdCBhdmF0YXIgPSBnbHRmLnNjZW5lO1xyXG4gICAgICBhdmF0YXIuc2NhbGUuc2V0KDUsIDUsIDUpOyAvLyBBZGp1c3QgdGhlIHNjYWxlIHRvIG1ha2UgdGhlIGF2YXRhciBsYXJnZXJcclxuICAgICAgYXZhdGFyLnBvc2l0aW9uLnNldCgxLCAwLCAwKTtcclxuXHJcbiAgICAgIGF2YXRhclJlZi5jdXJyZW50ID0gYXZhdGFyO1xyXG4gICAgICBzY2VuZS5hZGQoYXZhdGFyKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZE1vZGVsKCk7XHJcblxyXG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMSk7XHJcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoYXZhdGFyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBzY2VuZS5yZW1vdmUoYXZhdGFyUmVmLmN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHNjZW5lLnJlbW92ZShhbWJpZW50TGlnaHQpO1xyXG4gICAgfTtcclxuICB9LCBbc2NlbmVdKTtcclxuXHJcbiAgdXNlRnJhbWUoKCkgPT4ge1xyXG4gICAgaWYgKGF2YXRhclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgeCwgeSwgeiB9ID0gYXZhdGFyUmVmLmN1cnJlbnQucG9zaXRpb247XHJcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoeCwgeSArIDIsIHogKyAxMCk7IC8vIEFkanVzdCB0aGUgY2FtZXJhJ3MgcG9zaXRpb24gdG8gbW92ZSBjbG9zZXIgdG8gdGhlIGF2YXRhclxyXG4gICAgICBjYW1lcmEubG9va0F0KG5ldyBWZWN0b3IzKHgsIHksIHogKSk7IC8vIEFkanVzdCB0aGUgY2FtZXJhJ3MgdGFyZ2V0IHRvIGxvb2sgYXQgdGhlIGF2YXRhclxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyRXNjZW5lOyJdLCJuYW1lcyI6WyJ1c2VUaHJlZSIsInVzZUZyYW1lIiwiR0xURkxvYWRlciIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkFtYmllbnRMaWdodCIsIlZlY3RvcjMiLCJBdmF0YXJFc2NlbmUiLCJzY2VuZSIsImNhbWVyYSIsInNpemUiLCJhdmF0YXJSZWYiLCJsb2FkZXIiLCJsb2FkTW9kZWwiLCJnbHRmIiwibG9hZEFzeW5jIiwiYXZhdGFyIiwic2NhbGUiLCJzZXQiLCJwb3NpdGlvbiIsImN1cnJlbnQiLCJhZGQiLCJhbWJpZW50TGlnaHQiLCJyZW1vdmUiLCJ4IiwieSIsInoiLCJsb29rQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AvatarEscene.js\n"));

/***/ })

});