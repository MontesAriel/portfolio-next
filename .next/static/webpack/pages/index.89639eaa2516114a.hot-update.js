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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst AvatarEscene = ()=>{\n    _s();\n    const { scene , camera , size  } = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree)();\n    const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n        const loadModel = async ()=>{\n            const gltf = await loader.loadAsync(\"./avatar.glb\");\n            const avatar = gltf.scene;\n            avatarRef.current = avatar;\n            // Calcular el tamaño del avatar\n            const boundingBox = new three__WEBPACK_IMPORTED_MODULE_3__.Box3().setFromObject(avatar);\n            const avatarSize = boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3());\n            // Escalar el avatar para que quepa en el canvas\n            const canvasSize = Math.min(size.width, size.height);\n            const scaleFactor = canvasSize / three__WEBPACK_IMPORTED_MODULE_3__.MathUtils.max(...avatarSize.toArray());\n            avatar.scale.set(scaleFactor, scaleFactor, scaleFactor);\n            // Centrar el avatar en el canvas\n            avatar.position.set(0, 0, 0);\n            scene.add(avatar);\n        };\n        loadModel();\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 1);\n        scene.add(ambientLight);\n        return ()=>{\n            if (avatarRef.current) {\n                scene.remove(avatarRef.current);\n            }\n            scene.remove(ambientLight);\n        };\n    }, [\n        scene,\n        size\n    ]);\n    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame)(()=>{\n        if (avatarRef.current) {\n            const { x , y , z  } = avatarRef.current.position;\n            camera.position.set(x, y + 2, z + 10);\n            camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(x, y, z));\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (size.width && size.height) {\n            const aspect = size.width / size.height;\n            camera.aspect = aspect;\n            camera.updateProjectionMatrix();\n        }\n    }, [\n        camera,\n        size\n    ]);\n    return null;\n};\n_s(AvatarEscene, \"NdOWTBiiaY80aUQSiioRISCP0i4=\", false, function() {\n    return [\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree,\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame\n    ];\n});\n_c = AvatarEscene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarEscene);\nvar _c;\n$RefreshReg$(_c, \"AvatarEscene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ1k7QUFDekI7QUFDcUI7QUFFL0QsTUFBTVMsZUFBZSxJQUFNOztJQUN6QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR1osMkRBQVFBO0lBQ3hDLE1BQU1hLFlBQVlULDZDQUFNQTtJQUV4QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1XLFNBQVMsSUFBSVosNkVBQVVBO1FBRTdCLE1BQU1hLFlBQVksVUFBWTtZQUM1QixNQUFNQyxPQUFPLE1BQU1GLE9BQU9HLFNBQVMsQ0FBQztZQUNwQyxNQUFNQyxTQUFTRixLQUFLTixLQUFLO1lBQ3pCRyxVQUFVTSxPQUFPLEdBQUdEO1lBRXBCLGdDQUFnQztZQUNoQyxNQUFNRSxjQUFjLElBQUliLHVDQUFJQSxHQUFHYyxhQUFhLENBQUNIO1lBQzdDLE1BQU1JLGFBQWFGLFlBQVlHLE9BQU8sQ0FBQyxJQUFJakIsMENBQU9BO1lBRWxELGdEQUFnRDtZQUNoRCxNQUFNa0IsYUFBYUMsS0FBS0MsR0FBRyxDQUFDZCxLQUFLZSxLQUFLLEVBQUVmLEtBQUtnQixNQUFNO1lBQ25ELE1BQU1DLGNBQWNMLGFBQWFoQixnREFBYSxJQUFJYyxXQUFXUyxPQUFPO1lBQ3BFYixPQUFPYyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0osYUFBYUEsYUFBYUE7WUFFM0MsaUNBQWlDO1lBQ2pDWCxPQUFPZ0IsUUFBUSxDQUFDRCxHQUFHLENBQUMsR0FBRyxHQUFHO1lBRTFCdkIsTUFBTXlCLEdBQUcsQ0FBQ2pCO1FBQ1o7UUFFQUg7UUFFQSxNQUFNcUIsZUFBZSxJQUFJL0IsK0NBQVlBLENBQUMsVUFBVTtRQUNoREssTUFBTXlCLEdBQUcsQ0FBQ0M7UUFFVixPQUFPLElBQU07WUFDWCxJQUFJdkIsVUFBVU0sT0FBTyxFQUFFO2dCQUNyQlQsTUFBTTJCLE1BQU0sQ0FBQ3hCLFVBQVVNLE9BQU87WUFDaEMsQ0FBQztZQUNEVCxNQUFNMkIsTUFBTSxDQUFDRDtRQUNmO0lBQ0YsR0FBRztRQUFDMUI7UUFBT0U7S0FBSztJQUVoQlgsMkRBQVFBLENBQUMsSUFBTTtRQUNiLElBQUlZLFVBQVVNLE9BQU8sRUFBRTtZQUNyQixNQUFNLEVBQUVtQixFQUFDLEVBQUVDLEVBQUMsRUFBRUMsRUFBQyxFQUFFLEdBQUczQixVQUFVTSxPQUFPLENBQUNlLFFBQVE7WUFDOUN2QixPQUFPdUIsUUFBUSxDQUFDRCxHQUFHLENBQUNLLEdBQUdDLElBQUksR0FBR0MsSUFBSTtZQUNsQzdCLE9BQU84QixNQUFNLENBQUMsSUFBSW5DLDBDQUFPQSxDQUFDZ0MsR0FBR0MsR0FBR0M7UUFDbEMsQ0FBQztJQUNIO0lBRUFyQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVMsS0FBS2UsS0FBSyxJQUFJZixLQUFLZ0IsTUFBTSxFQUFFO1lBQzdCLE1BQU1jLFNBQVM5QixLQUFLZSxLQUFLLEdBQUdmLEtBQUtnQixNQUFNO1lBQ3ZDakIsT0FBTytCLE1BQU0sR0FBR0E7WUFDaEIvQixPQUFPZ0Msc0JBQXNCO1FBQy9CLENBQUM7SUFDSCxHQUFHO1FBQUNoQztRQUFRQztLQUFLO0lBRWpCLE9BQU8sSUFBSTtBQUNiO0dBekRNSDs7UUFDNEJULHVEQUFRQTtRQXVDeENDLHVEQUFRQTs7O0tBeENKUTtBQTJETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcz9lYjk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRocmVlLCB1c2VGcmFtZSB9IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQW1iaWVudExpZ2h0LCBWZWN0b3IzLCBCb3gzLCBNYXRoVXRpbHMgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IEF2YXRhckVzY2VuZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHNjZW5lLCBjYW1lcmEsIHNpemUgfSA9IHVzZVRocmVlKCk7XHJcbiAgY29uc3QgYXZhdGFyUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb2RlbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZ2x0ZiA9IGF3YWl0IGxvYWRlci5sb2FkQXN5bmMoXCIuL2F2YXRhci5nbGJcIik7XHJcbiAgICAgIGNvbnN0IGF2YXRhciA9IGdsdGYuc2NlbmU7XHJcbiAgICAgIGF2YXRhclJlZi5jdXJyZW50ID0gYXZhdGFyO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXIgZWwgdGFtYcOxbyBkZWwgYXZhdGFyXHJcbiAgICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gbmV3IEJveDMoKS5zZXRGcm9tT2JqZWN0KGF2YXRhcik7XHJcbiAgICAgIGNvbnN0IGF2YXRhclNpemUgPSBib3VuZGluZ0JveC5nZXRTaXplKG5ldyBWZWN0b3IzKCkpO1xyXG5cclxuICAgICAgLy8gRXNjYWxhciBlbCBhdmF0YXIgcGFyYSBxdWUgcXVlcGEgZW4gZWwgY2FudmFzXHJcbiAgICAgIGNvbnN0IGNhbnZhc1NpemUgPSBNYXRoLm1pbihzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gY2FudmFzU2l6ZSAvIE1hdGhVdGlscy5tYXgoLi4uYXZhdGFyU2l6ZS50b0FycmF5KCkpO1xyXG4gICAgICBhdmF0YXIuc2NhbGUuc2V0KHNjYWxlRmFjdG9yLCBzY2FsZUZhY3Rvciwgc2NhbGVGYWN0b3IpO1xyXG5cclxuICAgICAgLy8gQ2VudHJhciBlbCBhdmF0YXIgZW4gZWwgY2FudmFzXHJcbiAgICAgIGF2YXRhci5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XHJcblxyXG4gICAgICBzY2VuZS5hZGQoYXZhdGFyKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZE1vZGVsKCk7XHJcblxyXG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMSk7XHJcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoYXZhdGFyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBzY2VuZS5yZW1vdmUoYXZhdGFyUmVmLmN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHNjZW5lLnJlbW92ZShhbWJpZW50TGlnaHQpO1xyXG4gICAgfTtcclxuICB9LCBbc2NlbmUsIHNpemVdKTtcclxuXHJcbiAgdXNlRnJhbWUoKCkgPT4ge1xyXG4gICAgaWYgKGF2YXRhclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgeCwgeSwgeiB9ID0gYXZhdGFyUmVmLmN1cnJlbnQucG9zaXRpb247XHJcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoeCwgeSArIDIsIHogKyAxMCk7XHJcbiAgICAgIGNhbWVyYS5sb29rQXQobmV3IFZlY3RvcjMoeCwgeSwgeikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNpemUud2lkdGggJiYgc2l6ZS5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgYXNwZWN0ID0gc2l6ZS53aWR0aCAvIHNpemUuaGVpZ2h0O1xyXG4gICAgICBjYW1lcmEuYXNwZWN0ID0gYXNwZWN0O1xyXG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgfVxyXG4gIH0sIFtjYW1lcmEsIHNpemVdKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXJFc2NlbmU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VUaHJlZSIsInVzZUZyYW1lIiwiR0xURkxvYWRlciIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkFtYmllbnRMaWdodCIsIlZlY3RvcjMiLCJCb3gzIiwiTWF0aFV0aWxzIiwiQXZhdGFyRXNjZW5lIiwic2NlbmUiLCJjYW1lcmEiLCJzaXplIiwiYXZhdGFyUmVmIiwibG9hZGVyIiwibG9hZE1vZGVsIiwiZ2x0ZiIsImxvYWRBc3luYyIsImF2YXRhciIsImN1cnJlbnQiLCJib3VuZGluZ0JveCIsInNldEZyb21PYmplY3QiLCJhdmF0YXJTaXplIiwiZ2V0U2l6ZSIsImNhbnZhc1NpemUiLCJNYXRoIiwibWluIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZUZhY3RvciIsIm1heCIsInRvQXJyYXkiLCJzY2FsZSIsInNldCIsInBvc2l0aW9uIiwiYWRkIiwiYW1iaWVudExpZ2h0IiwicmVtb3ZlIiwieCIsInkiLCJ6IiwibG9va0F0IiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AvatarEscene.js\n"));

/***/ })

});