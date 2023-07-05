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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst AvatarEscene = ()=>{\n    _s();\n    const { scene , camera , size  } = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree)();\n    const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n        const loadModel = async ()=>{\n            const gltf = await loader.loadAsync(\"./avatar.glb\");\n            const avatar = gltf.scene;\n            avatarRef.current = avatar;\n            // Calcular el tamaño del avatar\n            const boundingBox = new three__WEBPACK_IMPORTED_MODULE_3__.Box3().setFromObject(avatar);\n            const avatarSize = boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3());\n            // Obtener la dimensión máxima del avatar\n            const maxDimension = Math.max(avatarSize.x, avatarSize.y, avatarSize.z);\n            // Calcular el escalamiento para que el avatar quepa dentro del canvas\n            const maxCanvasSize = Math.max(size.width, size.height);\n            const scaleFactor = maxCanvasSize * 0.02 / maxDimension; // Ajusta el 80% del tamaño del canvas\n            // Escalar el avatar\n            avatar.scale.set(scaleFactor, scaleFactor, scaleFactor);\n            // Calcular la posición del avatar para centrarlo en el canvas\n            const canvasCenter = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(size.width / 2, size.height / 2, 0);\n            const avatarCenter = boundingBox.getCenter(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3()).multiplyScalar(scaleFactor);\n            const positionOffset = canvasCenter.sub(avatarCenter);\n            avatar.position.add(positionOffset);\n            scene.add(avatar);\n        };\n        loadModel();\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 1);\n        scene.add(ambientLight);\n        return ()=>{\n            if (avatarRef.current) {\n                scene.remove(avatarRef.current);\n            }\n            scene.remove(ambientLight);\n        };\n    }, [\n        scene,\n        size\n    ]);\n    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame)(()=>{\n        if (avatarRef.current) {\n            const { x , y , z  } = avatarRef.current.position;\n            camera.position.set(x, y + 2, z + 10);\n            camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(x, y, z));\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (size.width && size.height) {\n            const aspect = size.width / size.height;\n            camera.aspect = aspect;\n            camera.updateProjectionMatrix();\n        }\n    }, [\n        camera,\n        size\n    ]);\n    return null;\n};\n_s(AvatarEscene, \"NdOWTBiiaY80aUQSiioRISCP0i4=\", false, function() {\n    return [\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree,\n        react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame\n    ];\n});\n_c = AvatarEscene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarEscene);\nvar _c;\n$RefreshReg$(_c, \"AvatarEscene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcz9lYjk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRocmVlLCB1c2VGcmFtZSB9IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQW1iaWVudExpZ2h0LCBWZWN0b3IzLCBCb3gzIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBBdmF0YXJFc2NlbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzY2VuZSwgY2FtZXJhLCBzaXplIH0gPSB1c2VUaHJlZSgpO1xyXG4gIGNvbnN0IGF2YXRhclJlZiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9kZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdsdGYgPSBhd2FpdCBsb2FkZXIubG9hZEFzeW5jKFwiLi9hdmF0YXIuZ2xiXCIpO1xyXG4gICAgICBjb25zdCBhdmF0YXIgPSBnbHRmLnNjZW5lO1xyXG4gICAgICBhdmF0YXJSZWYuY3VycmVudCA9IGF2YXRhcjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGFyIGVsIHRhbWHDsW8gZGVsIGF2YXRhclxyXG4gICAgICBjb25zdCBib3VuZGluZ0JveCA9IG5ldyBCb3gzKCkuc2V0RnJvbU9iamVjdChhdmF0YXIpO1xyXG4gICAgICBjb25zdCBhdmF0YXJTaXplID0gYm91bmRpbmdCb3guZ2V0U2l6ZShuZXcgVmVjdG9yMygpKTtcclxuXHJcbiAgICAgIC8vIE9idGVuZXIgbGEgZGltZW5zacOzbiBtw6F4aW1hIGRlbCBhdmF0YXJcclxuICAgICAgY29uc3QgbWF4RGltZW5zaW9uID0gTWF0aC5tYXgoYXZhdGFyU2l6ZS54LCBhdmF0YXJTaXplLnksIGF2YXRhclNpemUueik7XHJcblxyXG4gICAgICAvLyBDYWxjdWxhciBlbCBlc2NhbGFtaWVudG8gcGFyYSBxdWUgZWwgYXZhdGFyIHF1ZXBhIGRlbnRybyBkZWwgY2FudmFzXHJcbiAgICAgIGNvbnN0IG1heENhbnZhc1NpemUgPSBNYXRoLm1heChzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gKG1heENhbnZhc1NpemUgKiAwLjAyKSAvIG1heERpbWVuc2lvbjsgLy8gQWp1c3RhIGVsIDgwJSBkZWwgdGFtYcOxbyBkZWwgY2FudmFzXHJcblxyXG4gICAgICAvLyBFc2NhbGFyIGVsIGF2YXRhclxyXG4gICAgICBhdmF0YXIuc2NhbGUuc2V0KHNjYWxlRmFjdG9yLCBzY2FsZUZhY3Rvciwgc2NhbGVGYWN0b3IpO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXIgbGEgcG9zaWNpw7NuIGRlbCBhdmF0YXIgcGFyYSBjZW50cmFybG8gZW4gZWwgY2FudmFzXHJcbiAgICAgIGNvbnN0IGNhbnZhc0NlbnRlciA9IG5ldyBWZWN0b3IzKHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCAvIDIsIDApO1xyXG4gICAgICBjb25zdCBhdmF0YXJDZW50ZXIgPSBib3VuZGluZ0JveC5nZXRDZW50ZXIobmV3IFZlY3RvcjMoKSkubXVsdGlwbHlTY2FsYXIoc2NhbGVGYWN0b3IpO1xyXG4gICAgICBjb25zdCBwb3NpdGlvbk9mZnNldCA9IGNhbnZhc0NlbnRlci5zdWIoYXZhdGFyQ2VudGVyKTtcclxuICAgICAgYXZhdGFyLnBvc2l0aW9uLmFkZChwb3NpdGlvbk9mZnNldCk7XHJcblxyXG4gICAgICBzY2VuZS5hZGQoYXZhdGFyKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZE1vZGVsKCk7XHJcblxyXG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMSk7XHJcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoYXZhdGFyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBzY2VuZS5yZW1vdmUoYXZhdGFyUmVmLmN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHNjZW5lLnJlbW92ZShhbWJpZW50TGlnaHQpO1xyXG4gICAgfTtcclxuICB9LCBbc2NlbmUsIHNpemVdKTtcclxuXHJcbiAgdXNlRnJhbWUoKCkgPT4ge1xyXG4gICAgaWYgKGF2YXRhclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgeCwgeSwgeiB9ID0gYXZhdGFyUmVmLmN1cnJlbnQucG9zaXRpb247XHJcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoeCwgeSArIDIsIHogKyAxMCk7XHJcbiAgICAgIGNhbWVyYS5sb29rQXQobmV3IFZlY3RvcjMoeCwgeSwgeikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNpemUud2lkdGggJiYgc2l6ZS5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgYXNwZWN0ID0gc2l6ZS53aWR0aCAvIHNpemUuaGVpZ2h0O1xyXG4gICAgICBjYW1lcmEuYXNwZWN0ID0gYXNwZWN0O1xyXG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgfVxyXG4gIH0sIFtjYW1lcmEsIHNpemVdKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXJFc2NlbmU7Il0sIm5hbWVzIjpbInVzZVRocmVlIiwidXNlRnJhbWUiLCJHTFRGTG9hZGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQW1iaWVudExpZ2h0IiwiVmVjdG9yMyIsIkJveDMiLCJBdmF0YXJFc2NlbmUiLCJzY2VuZSIsImNhbWVyYSIsInNpemUiLCJhdmF0YXJSZWYiLCJsb2FkZXIiLCJsb2FkTW9kZWwiLCJnbHRmIiwibG9hZEFzeW5jIiwiYXZhdGFyIiwiY3VycmVudCIsImJvdW5kaW5nQm94Iiwic2V0RnJvbU9iamVjdCIsImF2YXRhclNpemUiLCJnZXRTaXplIiwibWF4RGltZW5zaW9uIiwiTWF0aCIsIm1heCIsIngiLCJ5IiwieiIsIm1heENhbnZhc1NpemUiLCJ3aWR0aCIsImhlaWdodCIsInNjYWxlRmFjdG9yIiwic2NhbGUiLCJzZXQiLCJjYW52YXNDZW50ZXIiLCJhdmF0YXJDZW50ZXIiLCJnZXRDZW50ZXIiLCJtdWx0aXBseVNjYWxhciIsInBvc2l0aW9uT2Zmc2V0Iiwic3ViIiwicG9zaXRpb24iLCJhZGQiLCJhbWJpZW50TGlnaHQiLCJyZW1vdmUiLCJsb29rQXQiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AvatarEscene.js\n"));

/***/ })

});