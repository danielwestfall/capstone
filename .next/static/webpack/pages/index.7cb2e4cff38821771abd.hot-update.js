webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_restaurantList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/restaurantList */ "./components/restaurantList.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\clean\\Desktop\\next-restaurant-05-master\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Home() {
  _s();

  var API_URL = "http://localhost:1337" || false;
  console.log("URL: ".concat(API_URL));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      query = _useState[0],
      setQuery = _useState[1];

  var link = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
    uri: "".concat(API_URL, "/graphql")
  });
  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]();
  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
    link: link,
    cache: cache
  });
  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
    client: client,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, " Local Restaurants"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, " ", "Search", " "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    onChange: function onChange(e) {
      return setQuery(e.target.value.toLocaleLowerCase());
    },
    value: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  })), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, " "));
}

_s(Home, "HYX2QbDDdTtlu7GfoQbAPZOIM6k=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG9jYWxlTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDZixNQUFNQyxPQUFPLEdBQUdDLHVCQUFBLElBQW1DLEtBQW5EO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixnQkFBb0JILE9BQXBCOztBQUZlLGtCQUdXSSxzREFBUSxDQUFDLEVBQUQsQ0FIbkI7QUFBQSxNQUdSQyxLQUhRO0FBQUEsTUFHREMsUUFIQzs7QUFJZixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsdURBQUosQ0FBYTtBQUFFQyxPQUFHLFlBQUtULE9BQUw7QUFBTCxHQUFiLENBQWI7QUFDQSxNQUFNVSxLQUFLLEdBQUcsSUFBSUMsNERBQUosRUFBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUFFTixRQUFJLEVBQUpBLElBQUY7QUFBUUcsU0FBSyxFQUFMQTtBQUFSLEdBQWpCLENBQWY7QUFFQSxTQUNDLE1BQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERCxFQUVDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMERBQUQ7QUFBaUIsYUFBUyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxHQURGLFlBRVEsR0FGUixDQURELEVBS0MsTUFBQyxnREFBRDtBQUNDLFlBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGFBQ1RSLFFBQVEsQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsaUJBQWYsRUFBRCxDQURDO0FBQUEsS0FEWDtBQUlDLFNBQUssRUFBRVosS0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FGRCxFQWNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRCxDQURELEVBaUJDLE1BQUMsa0VBQUQ7QUFBZ0IsVUFBTSxFQUFFQSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJELEVBa0JDLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWxCRCxDQUREO0FBc0JBOztHQTlCUU4sSTs7S0FBQUEsSTtBQStCTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2NiMmU0Y2ZmMzg4MjE3NzFhYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJ0XCI7XHJcbmltcG9ydCB7XHJcblx0QXBvbGxvUHJvdmlkZXIsXHJcblx0QXBvbGxvQ2xpZW50LFxyXG5cdEh0dHBMaW5rLFxyXG5cdEluTWVtb3J5Q2FjaGUsXHJcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBSZXN0YXVyYW50TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdFwiO1xyXG5pbXBvcnQgeyBJbnB1dEdyb3VwLCBJbnB1dEdyb3VwQWRkb24sIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblx0Y29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcclxuXHRjb25zb2xlLmxvZyhgVVJMOiAke0FQSV9VUkx9YCk7XHJcblx0Y29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBsaW5rID0gbmV3IEh0dHBMaW5rKHsgdXJpOiBgJHtBUElfVVJMfS9ncmFwaHFsYCB9KTtcclxuXHRjb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKCk7XHJcblx0Y29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7IGxpbmssIGNhY2hlIH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XHJcblx0XHRcdFx0PGgyPiBMb2NhbCBSZXN0YXVyYW50czwvaDI+XHJcblx0XHRcdFx0PElucHV0R3JvdXA+XHJcblx0XHRcdFx0XHQ8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT0nYXBwZW5kJz5cclxuXHRcdFx0XHRcdFx0e1wiIFwifVxyXG5cdFx0XHRcdFx0XHRTZWFyY2h7XCIgXCJ9XHJcblx0XHRcdFx0XHQ8L0lucHV0R3JvdXBBZGRvbj5cclxuXHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+XHJcblx0XHRcdFx0XHRcdFx0c2V0UXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17cXVlcnl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvSW5wdXRHcm91cD5cclxuXHRcdFx0XHQ8YnI+PC9icj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxSZXN0YXVyYW50TGlzdCBzZWFyY2g9e3F1ZXJ5fSAvPlxyXG5cdFx0XHQ8Q2FydD4gPC9DYXJ0PlxyXG5cdFx0PC9BcG9sbG9Qcm92aWRlcj5cclxuXHQpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=