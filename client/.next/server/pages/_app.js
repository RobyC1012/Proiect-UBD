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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// initial state\nconst intialState = {\n    user: null\n};\n// create context\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// root reducer\nconst rootReducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\n// context provider\nconst Provider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, intialState);\n    // router\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: \"LOGIN\",\n            payload: JSON.parse(window.localStorage.getItem(\"user\"))\n        });\n    }, []);\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].interceptors.response.use(function(response) {\n        // any status code that lie within the range of 2XX cause this function\n        // to trigger\n        return response;\n    }, function(error) {\n        // any status codes that falls outside the range of 2xx cause this function\n        // to trigger\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            return new Promise((resolve, reject)=>{\n                axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/logout\").then((data)=>{\n                    console.log(\"/401 error > logout\");\n                    dispatch({\n                        type: \"LOGOUT\"\n                    });\n                    window.localStorage.removeItem(\"user\");\n                    router.push(\"/login\");\n                }).catch((err)=>{\n                    console.log(\"AXIOS INTERCEPTORS ERR\", err);\n                    reject(error);\n                });\n            });\n        }\n        return Promise.reject(error);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCsrfToken = async ()=>{\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/csrf-token\");\n            // console.log(\"CSRF\", data);\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers[\"X-CSRF-Token\"] = data.getCsrfToken;\n        };\n        getCsrfToken();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Robert\\\\Desktop\\\\Proiect UBD\\\\client\\\\context\\\\index.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsR0FBRyxNQUFNakMsaURBQVMsQ0FBQyxpQkFBaUIsQ0FBQztZQUNuRCw2QkFBNkI7WUFDN0JBLDhFQUFzQyxHQUFHaUMsSUFBSSxDQUFDTyxZQUFZLENBQUM7UUFDN0QsQ0FBQztRQUNEQSxZQUFZLEVBQUUsQ0FBQztJQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ25DLE9BQU8sQ0FBQ00sUUFBUTtRQUFDZ0MsS0FBSyxFQUFFO1lBQUVwQyxLQUFLO1lBQUVNLFFBQVE7U0FBRTtrQkFBR0QsUUFBUTs7Ozs7aUJBQW9CLENBQzNFO0FBQ0osQ0FBQztBQUU0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlclJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyBpbml0aWFsIHN0YXRlXG5jb25zdCBpbnRpYWxTdGF0ZSA9IHtcbiAgdXNlcjogbnVsbCxcbn07XG5cbi8vIGNyZWF0ZSBjb250ZXh0XG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG4vLyByb290IHJlZHVjZXJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJMT0dJTlwiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSBcIkxPR09VVFwiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG4vLyBjb250ZXh0IHByb3ZpZGVyXG5jb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBpbnRpYWxTdGF0ZSk7XG5cbiAgLy8gcm91dGVyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJMT0dJTlwiLFxuICAgICAgcGF5bG9hZDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSxcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAvLyBhbnkgc3RhdHVzIGNvZGUgdGhhdCBsaWUgd2l0aGluIHRoZSByYW5nZSBvZiAyWFggY2F1c2UgdGhpcyBmdW5jdGlvblxuICAgICAgLy8gdG8gdHJpZ2dlclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0sXG4gICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAvLyBhbnkgc3RhdHVzIGNvZGVzIHRoYXQgZmFsbHMgb3V0c2lkZSB0aGUgcmFuZ2Ugb2YgMnh4IGNhdXNlIHRoaXMgZnVuY3Rpb25cbiAgICAgIC8vIHRvIHRyaWdnZXJcbiAgICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZTtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEgJiYgcmVzLmNvbmZpZyAmJiAhcmVzLmNvbmZpZy5fX2lzUmV0cnlSZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5nZXQoXCIvYXBpL2xvZ291dFwiKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIvNDAxIGVycm9yID4gbG9nb3V0XCIpO1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HT1VUXCIgfSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVhJT1MgSU5URVJDRVBUT1JTIEVSUlwiLCBlcnIpO1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRDc3JmVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvY3NyZi10b2tlblwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ1NSRlwiLCBkYXRhKTtcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnNbXCJYLUNTUkYtVG9rZW5cIl0gPSBkYXRhLmdldENzcmZUb2tlbjtcbiAgICB9O1xuICAgIGdldENzcmZUb2tlbigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IENvbnRleHQsIFByb3ZpZGVyIH07XG4iXSwibmFtZXMiOlsidXNlUmVkdWNlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsInVzZXJSb3V0ZXIiLCJpbnRpYWxTdGF0ZSIsInVzZXIiLCJDb250ZXh0Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwicm91dGVyIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJyZXMiLCJzdGF0dXMiLCJjb25maWciLCJfX2lzUmV0cnlSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVJdGVtIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiZ2V0Q3NyZlRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_5__]);\n_context__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Robert\\\\Desktop\\\\Proiect UBD\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Robert\\\\Desktop\\\\Proiect UBD\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ2E7QUFDbEI7QUFDSztBQUNjO0FBQ1Q7QUFFdEMsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQ3ZDO0lBQ0kscUJBQ0ksOERBQUNILDhDQUFRO2tCQUNMLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ3JCLENBQ2I7QUFDTixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3B1YmxpYy9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9wdWJsaWMvY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSlcclxue1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQcm92aWRlcj5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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