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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst AvatarEscene = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const { scene , camera , size , setDefaultCamera  } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree)();\n    const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(_s1(()=>{\n        _s1();\n        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n        const { setDefaultCamera  } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree)();\n        const loadModel = async ()=>{\n            const gltf = await loader.loadAsync(\"./avatar.glb\");\n            const avatar = gltf.scene;\n            avatar.scale.set(10, 10, 10); // Ajusta la escala para hacer el avatar más grande\n            avatarRef.current = avatar;\n            scene.add(avatar);\n        };\n        loadModel();\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 0.5);\n        scene.add(ambientLight);\n        setDefaultCamera(camera); // Establece la cámara como cámara predeterminada para el escenario\n        return ()=>{\n            if (avatarRef.current) {\n                scene.remove(avatarRef.current);\n            }\n            scene.remove(ambientLight);\n        };\n    }, \"rlyHDmQLoAy8cNEH7aJiCsX+o2I=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree\n        ];\n    }), [\n        scene,\n        setDefaultCamera\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame)(()=>{\n        if (avatarRef.current) {\n            const { x , y , z  } = avatarRef.current.position;\n            camera.position.set(x, y + 2, z + 10); // Ajusta la posición de la cámara para que esté centrada y a cierta altura del avatar\n            camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(x, y, z)); // Ajusta el objetivo de la cámara para mirar al avatar\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (size.width && size.height) {\n            const aspect = size.width / size.height;\n            camera.aspect = aspect;\n            camera.updateProjectionMatrix();\n        }\n    }, [\n        camera,\n        size\n    ]);\n    return null;\n};\n_s(AvatarEscene, \"dqHQ7cwFI09DwonoeeIcgbV5LcQ=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useFrame\n    ];\n});\n_c = AvatarEscene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarEscene);\nvar _c;\n$RefreshReg$(_c, \"AvatarEscene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhckVzY2VuZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1FO0FBQ0E7QUFDekI7QUFDSTtBQUU5QyxNQUFNUSxlQUFlLElBQU07OztJQUN6QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLGlCQUFnQixFQUFFLEdBQUdaLDREQUFRQTtJQUMxRCxNQUFNYSxZQUFZUiw2Q0FBTUE7SUFFeEJELGdEQUFTQSxLQUFDLElBQU07O1FBQ2QsTUFBTVUsU0FBUyxJQUFJWCw2RUFBVUE7UUFDN0IsTUFBTSxFQUFDUyxpQkFBZ0IsRUFBQyxHQUFHWiw0REFBUUE7UUFDbkMsTUFBTWUsWUFBWSxVQUFZO1lBQzVCLE1BQU1DLE9BQU8sTUFBTUYsT0FBT0csU0FBUyxDQUFDO1lBQ3BDLE1BQU1DLFNBQVNGLEtBQUtQLEtBQUs7WUFDekJTLE9BQU9DLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLElBQUksSUFBSSxLQUFLLG1EQUFtRDtZQUNqRlAsVUFBVVEsT0FBTyxHQUFHSDtZQUNwQlQsTUFBTWEsR0FBRyxDQUFDSjtRQUNaO1FBRUFIO1FBRUEsTUFBTVEsZUFBZSxJQUFJakIsK0NBQVlBLENBQUMsVUFBVTtRQUNoREcsTUFBTWEsR0FBRyxDQUFDQztRQUVWWCxpQkFBaUJGLFNBQVMsbUVBQW1FO1FBRTdGLE9BQU8sSUFBTTtZQUNYLElBQUlHLFVBQVVRLE9BQU8sRUFBRTtnQkFDckJaLE1BQU1lLE1BQU0sQ0FBQ1gsVUFBVVEsT0FBTztZQUNoQyxDQUFDO1lBQ0RaLE1BQU1lLE1BQU0sQ0FBQ0Q7UUFDZjtJQUNGOztZQXRCNkJ2Qix3REFBUUE7O1FBc0JsQztRQUFDUztRQUFPRztLQUFpQjtJQUU1QlgsNERBQVFBLENBQUMsSUFBTTtRQUNiLElBQUlZLFVBQVVRLE9BQU8sRUFBRTtZQUNyQixNQUFNLEVBQUVJLEVBQUMsRUFBRUMsRUFBQyxFQUFFQyxFQUFDLEVBQUUsR0FBR2QsVUFBVVEsT0FBTyxDQUFDTyxRQUFRO1lBQzlDbEIsT0FBT2tCLFFBQVEsQ0FBQ1IsR0FBRyxDQUFDSyxHQUFHQyxJQUFJLEdBQUdDLElBQUksS0FBSyxzRkFBc0Y7WUFDN0hqQixPQUFPbUIsTUFBTSxDQUFDLElBQUl0QiwwQ0FBT0EsQ0FBQ2tCLEdBQUdDLEdBQUdDLEtBQUssdURBQXVEO1FBQzlGLENBQUM7SUFDSDtJQUVBdkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlPLEtBQUttQixLQUFLLElBQUluQixLQUFLb0IsTUFBTSxFQUFFO1lBQzdCLE1BQU1DLFNBQVNyQixLQUFLbUIsS0FBSyxHQUFHbkIsS0FBS29CLE1BQU07WUFDdkNyQixPQUFPc0IsTUFBTSxHQUFHQTtZQUNoQnRCLE9BQU91QixzQkFBc0I7UUFDL0IsQ0FBQztJQUNILEdBQUc7UUFBQ3ZCO1FBQVFDO0tBQUs7SUFFakIsT0FBTyxJQUFJO0FBQ2I7R0EvQ01IOztRQUM4Q1Isd0RBQVFBO1FBNkIxREMsd0RBQVFBOzs7S0E5QkpPO0FBaUROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXZhdGFyRXNjZW5lLmpzP2ViOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhyZWUsIHVzZUZyYW1lLCB1c2VMb2FkZXIgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbWJpZW50TGlnaHQsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IEF2YXRhckVzY2VuZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHNjZW5lLCBjYW1lcmEsIHNpemUsIHNldERlZmF1bHRDYW1lcmEgfSA9IHVzZVRocmVlKCk7XHJcbiAgY29uc3QgYXZhdGFyUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xyXG4gICAgY29uc3Qge3NldERlZmF1bHRDYW1lcmF9ID0gdXNlVGhyZWUoKVxyXG4gICAgY29uc3QgbG9hZE1vZGVsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBnbHRmID0gYXdhaXQgbG9hZGVyLmxvYWRBc3luYyhcIi4vYXZhdGFyLmdsYlwiKTtcclxuICAgICAgY29uc3QgYXZhdGFyID0gZ2x0Zi5zY2VuZTtcclxuICAgICAgYXZhdGFyLnNjYWxlLnNldCgxMCwgMTAsIDEwKTsgLy8gQWp1c3RhIGxhIGVzY2FsYSBwYXJhIGhhY2VyIGVsIGF2YXRhciBtw6FzIGdyYW5kZVxyXG4gICAgICBhdmF0YXJSZWYuY3VycmVudCA9IGF2YXRhcjtcclxuICAgICAgc2NlbmUuYWRkKGF2YXRhcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRNb2RlbCgpO1xyXG5cclxuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBBbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuNSk7XHJcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcclxuXHJcbiAgICBzZXREZWZhdWx0Q2FtZXJhKGNhbWVyYSk7IC8vIEVzdGFibGVjZSBsYSBjw6FtYXJhIGNvbW8gY8OhbWFyYSBwcmVkZXRlcm1pbmFkYSBwYXJhIGVsIGVzY2VuYXJpb1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChhdmF0YXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHNjZW5lLnJlbW92ZShhdmF0YXJSZWYuY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgICAgc2NlbmUucmVtb3ZlKGFtYmllbnRMaWdodCk7XHJcbiAgICB9O1xyXG4gIH0sIFtzY2VuZSwgc2V0RGVmYXVsdENhbWVyYV0pO1xyXG5cclxuICB1c2VGcmFtZSgoKSA9PiB7XHJcbiAgICBpZiAoYXZhdGFyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgeyB4LCB5LCB6IH0gPSBhdmF0YXJSZWYuY3VycmVudC5wb3NpdGlvbjtcclxuICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldCh4LCB5ICsgMiwgeiArIDEwKTsgLy8gQWp1c3RhIGxhIHBvc2ljacOzbiBkZSBsYSBjw6FtYXJhIHBhcmEgcXVlIGVzdMOpIGNlbnRyYWRhIHkgYSBjaWVydGEgYWx0dXJhIGRlbCBhdmF0YXJcclxuICAgICAgY2FtZXJhLmxvb2tBdChuZXcgVmVjdG9yMyh4LCB5LCB6KSk7IC8vIEFqdXN0YSBlbCBvYmpldGl2byBkZSBsYSBjw6FtYXJhIHBhcmEgbWlyYXIgYWwgYXZhdGFyXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2l6ZS53aWR0aCAmJiBzaXplLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBhc3BlY3QgPSBzaXplLndpZHRoIC8gc2l6ZS5oZWlnaHQ7XHJcbiAgICAgIGNhbWVyYS5hc3BlY3QgPSBhc3BlY3Q7XHJcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICB9XHJcbiAgfSwgW2NhbWVyYSwgc2l6ZV0pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhckVzY2VuZTtcclxuIl0sIm5hbWVzIjpbInVzZVRocmVlIiwidXNlRnJhbWUiLCJ1c2VMb2FkZXIiLCJHTFRGTG9hZGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQW1iaWVudExpZ2h0IiwiVmVjdG9yMyIsIkF2YXRhckVzY2VuZSIsInNjZW5lIiwiY2FtZXJhIiwic2l6ZSIsInNldERlZmF1bHRDYW1lcmEiLCJhdmF0YXJSZWYiLCJsb2FkZXIiLCJsb2FkTW9kZWwiLCJnbHRmIiwibG9hZEFzeW5jIiwiYXZhdGFyIiwic2NhbGUiLCJzZXQiLCJjdXJyZW50IiwiYWRkIiwiYW1iaWVudExpZ2h0IiwicmVtb3ZlIiwieCIsInkiLCJ6IiwicG9zaXRpb24iLCJsb29rQXQiLCJ3aWR0aCIsImhlaWdodCIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AvatarEscene.js\n"));

/***/ })

});