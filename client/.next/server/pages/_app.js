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

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n// initial state\nconst intialState = {\n    user: null\n};\n// create context\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// root reducer\nconst rootReducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\n// context provider\nconst Provider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, intialState);\n    // router\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: \"LOGIN\",\n            payload: JSON.parse(window.localStorage.getItem(\"user\"))\n        });\n    }, []);\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].interceptors.response.use(function(response) {\n        // any status code that lie within the range of 2XX cause this function\n        // to trigger\n        return response;\n    }, function(error) {\n        // any status codes that falls outside the range of 2xx cause this function\n        // to trigger\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            return new Promise((resolve, reject)=>{\n                axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/logout\").then((data)=>{\n                    console.log(\"/401 error > logout\");\n                    dispatch({\n                        type: \"LOGOUT\"\n                    });\n                    window.localStorage.removeItem(\"user\");\n                    router.push(\"/login\");\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"You are not authorized. Please login!\");\n                }).catch((err)=>{\n                    console.log(\"AXIOS INTERCEPTORS ERR\", err);\n                    reject(error);\n                });\n            });\n        }\n        return Promise.reject(error);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Robert\\\\Desktop\\\\Proiect-UBD\\\\client\\\\context\\\\index.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUTtRQUFDNkIsS0FBSyxFQUFFO1lBQUVqQyxLQUFLO1lBQUVNLFFBQVE7U0FBRTtrQkFBR0QsUUFBUTs7Ozs7aUJBQW9CLENBQzNFO0FBQ0osQ0FBQztBQUU0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlclJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuLy8gaW5pdGlhbCBzdGF0ZVxuY29uc3QgaW50aWFsU3RhdGUgPSB7XG4gIHVzZXI6IG51bGwsXG59O1xuXG4vLyBjcmVhdGUgY29udGV4dFxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuLy8gcm9vdCByZWR1Y2VyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiTE9HSU5cIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgXCJMT0dPVVRcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBudWxsIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gY29udGV4dCBwcm92aWRlclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyb290UmVkdWNlciwgaW50aWFsU3RhdGUpO1xuXG4gIC8vIHJvdXRlclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiTE9HSU5cIixcbiAgICAgIHBheWxvYWQ6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSksXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgLy8gYW55IHN0YXR1cyBjb2RlIHRoYXQgbGllIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMlhYIGNhdXNlIHRoaXMgZnVuY3Rpb25cbiAgICAgIC8vIHRvIHRyaWdnZXJcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgLy8gYW55IHN0YXR1cyBjb2RlcyB0aGF0IGZhbGxzIG91dHNpZGUgdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZSB0aGlzIGZ1bmN0aW9uXG4gICAgICAvLyB0byB0cmlnZ2VyXG4gICAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1JldHJ5UmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KFwiL2FwaS9sb2dvdXRcIilcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLzQwMSBlcnJvciA+IGxvZ291dFwiKTtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR09VVFwiIH0pO1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgICAgICAgICAgdG9hc3QoXCJZb3UgYXJlIG5vdCBhdXRob3JpemVkLiBQbGVhc2UgbG9naW4hXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVhJT1MgSU5URVJDRVBUT1JTIEVSUlwiLCBlcnIpO1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICk7XG5cblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgQ29udGV4dCwgUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJ1c2VSZWR1Y2VyIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwidXNlclJvdXRlciIsInRvYXN0IiwiaW50aWFsU3RhdGUiLCJ1c2VyIiwiQ29udGV4dCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInJvdXRlciIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwic3RhdHVzIiwiY29uZmlnIiwiX19pc1JldHJ5UmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlSXRlbSIsInB1c2giLCJjYXRjaCIsImVyciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__]);\n([_context__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {\n                position: \"top-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Robert\\\\Desktop\\\\Proiect-UBD\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Robert\\\\Desktop\\\\Proiect-UBD\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Robert\\\\Desktop\\\\Proiect-UBD\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNhO0FBQ2xCO0FBQ0s7QUFDYztBQUNUO0FBQ1U7QUFFaEQsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQ3ZDO0lBQ0kscUJBQ0ksOERBQUNKLDhDQUFROzswQkFDTCw4REFBQ0MsMERBQWM7Z0JBQUNJLFFBQVEsRUFBQyxZQUFZOzs7OztvQkFBRzswQkFDeEMsOERBQUNGLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7OztZQUNyQixDQUNiO0FBQ04sQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSlcbntcbiAgICByZXR1cm4oXG4gICAgICAgIDxQcm92aWRlcj5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj0ndG9wLWNlbnRlcicgLz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJUb2FzdENvbnRhaW5lciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();