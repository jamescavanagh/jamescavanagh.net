/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/AppContext.js":
/*!***********************************!*\
  !*** ./src/context/AppContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AppProvider = ({ children  })=>{\n    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClose = ()=>setShow(false)\n    ;\n    const handleShow = ()=>setShow(true)\n    ;\n    // show sidebar\n    const { 0: showSidebar , 1: setShowSidebar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const value = {\n        show,\n        handleClose,\n        handleShow,\n        showSidebar,\n        setShowSidebar\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/jentlejames/Projects/web/jamescavanagh.net/src/context/AppContext.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BcHBDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQWdEO0FBRXpDLE1BQU1FLFVBQVUsaUJBQUdGLG9EQUFhLEVBQUUsQ0FBQztBQUUxQyxNQUFNRyxXQUFXLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUNwQyxNQUFNLEVBTFIsR0FLU0MsSUFBSSxHQUxiLEdBS2VDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDdkMsTUFBTU0sV0FBVyxHQUFHLElBQU1ELE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFBQztJQUN6QyxNQUFNRSxVQUFVLEdBQUcsSUFBTUYsT0FBTyxDQUFDLElBQUksQ0FBQztJQUFDO0lBQ3ZDLGVBQWU7SUFDZixNQUFNLEVBVFIsR0FTU0csV0FBVyxHQVRwQixHQVNzQkMsY0FBYyxNQUFJVCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUVyRCxNQUFNVSxLQUFLLEdBQUc7UUFDWk4sSUFBSTtRQUNKRSxXQUFXO1FBQ1hDLFVBQVU7UUFDVkMsV0FBVztRQUNYQyxjQUFjO0tBQ2Y7SUFDRCxxQkFDRSw4REFBQ1IsVUFBVSxDQUFDVSxRQUFRO1FBQUNELEtBQUssRUFBRUEsS0FBSztrQkFDOUJQLFFBQVE7Ozs7O2lCQUNXLENBQ3ZCO0NBQ0Y7QUFFRCxpRUFBZUQsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVyb3gvLi9zcmMvY29udGV4dC9BcHBDb250ZXh0LmpzPzc2OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQXBwUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XHJcbiAgLy8gc2hvdyBzaWRlYmFyXHJcbiAgY29uc3QgW3Nob3dTaWRlYmFyLCBzZXRTaG93U2lkZWJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgc2hvdyxcclxuICAgIGhhbmRsZUNsb3NlLFxyXG4gICAgaGFuZGxlU2hvdyxcclxuICAgIHNob3dTaWRlYmFyLFxyXG4gICAgc2V0U2hvd1NpZGViYXIsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwUHJvdmlkZXI7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkFwcENvbnRleHQiLCJBcHBQcm92aWRlciIsImNoaWxkcmVuIiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJzaG93U2lkZWJhciIsInNldFNob3dTaWRlYmFyIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/AppContext.js\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ \"./src/context/AppContext.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nif (false) {}\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        defaultTheme: \"light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/jentlejames/Projects/web/jamescavanagh.net/src/pages/_app.jsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/jentlejames/Projects/web/jamescavanagh.net/src/pages/_app.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jentlejames/Projects/web/jamescavanagh.net/src/pages/_app.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNJO0FBQ3pCO0FBQ3ZCLElBQUksS0FBNkIsRUFBRSxFQUVsQztBQUVELFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDTCxzREFBYTtRQUFDTSxZQUFZLEVBQUMsT0FBTztrQkFDakMsNEVBQUNMLDJEQUFXO3NCQUNWLDRFQUFDRyxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDaEI7Ozs7O1lBQ0EsQ0FDakI7Q0FDRjtBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVyb3gvLi9zcmMvcGFnZXMvX2FwcC5qc3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xyXG5pbXBvcnQgQXBwUHJvdmlkZXIgZnJvbSAnLi4vY29udGV4dC9BcHBDb250ZXh0JztcclxuaW1wb3J0ICcuLi9pbmRleC5zY3NzJztcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgZGVmYXVsdFRoZW1lPSdsaWdodCc+XHJcbiAgICAgIDxBcHBQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQXBwUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIkFwcFByb3ZpZGVyIiwicmVxdWlyZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGVmYXVsdFRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();