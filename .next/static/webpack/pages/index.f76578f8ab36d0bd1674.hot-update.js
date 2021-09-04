webpackHotUpdate_N_E("pages/index",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dishes */ "./components/dishes.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\clean\\Desktop\\next-restaurant-05-master\\components\\restaurantList.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\tquery {\n\t\t\trestaurants {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function RestaurantList(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      restaurantID = _useState[0],
      setRestaurantID = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      cart = _useContext.cart;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(cart),
      state = _useState2[0],
      setState = _useState2[1];

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 22
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 20
    }
  }, "ERROR");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 20
    }
  }, "Not found");
  console.log("Query Data: ".concat(data.restaurants));
  var searchQuery = data.restaurants.filter(function (res) {
    return res.name.toLowerCase().includes(props.search);
  });
  var restId = searchQuery[0].id; // definet renderer for Dishes

  var renderDishes = function renderDishes(restaurantID) {
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      restId: restaurantID,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 10
      }
    }, " ");
  };

  if (searchQuery.length > 0) {
    var restList = searchQuery.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "6",
        sm: "4",
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 4
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
        top: true,
        style: {
          height: 200
        },
        src: "http://localhost:1337" + res.image.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 7
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "info",
        onClick: function onClick() {
          return setRestaurantID(res.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 7
        }
      }, res.name))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 4
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }
    }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 5
      }
    }, renderDishes(restaurantID)));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 10
      }
    }, " No Restaurants Found");
  }
}

_s(RestaurantList, "AG1Od7CGruCtgOneqAeKWk/inGw=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = RestaurantList;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantList);

var _c;

$RefreshReg$(_c, "RestaurantList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJyZXMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsInJlc3RJZCIsImlkIiwicmVuZGVyRGlzaGVzIiwibGVuZ3RoIiwicmVzdExpc3QiLCJtYXAiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVlBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsQ0FBRCxDQURsQjtBQUFBLE1BQ3ZCQyxZQUR1QjtBQUFBLE1BQ1RDLGVBRFM7O0FBQUEsb0JBRWJDLHdEQUFVLENBQUNDLGdEQUFELENBRkc7QUFBQSxNQUV0QkMsSUFGc0IsZUFFdEJBLElBRnNCOztBQUFBLG1CQUdKTCxzREFBUSxDQUFDSyxJQUFELENBSEo7QUFBQSxNQUd2QkMsS0FIdUI7QUFBQSxNQUdoQkMsUUFIZ0I7O0FBSTlCLE1BQU1DLGVBQWUsR0FBR0MsMERBQUgsbUJBQXJCOztBQUo4QixrQkFnQkdDLCtEQUFRLENBQUNGLGVBQUQsQ0FoQlg7QUFBQSxNQWdCdEJHLE9BaEJzQixhQWdCdEJBLE9BaEJz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QUFBO0FBQUE7QUFBQSxPQUFhRixZQUFZLENBQUN6QixZQUFELENBQXpCLENBSEQsQ0FERDtBQU9BLEdBOUJELE1BOEJPO0FBQ04sV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUFQO0FBQ0E7QUFDRDs7R0FqRVFILGM7VUFnQnlCWSx1RDs7O0tBaEJ6QlosYztBQWtFTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjc2NTc4ZjhhYjM2ZDBiZDE2NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcclxuaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Q2FyZCxcclxuXHRDYXJkQm9keSxcclxuXHRDYXJkSW1nLFxyXG5cdENhcmRUZXh0LFxyXG5cdENhcmRUaXRsZSxcclxuXHRDb250YWluZXIsXHJcblx0Um93LFxyXG5cdENvbCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpIHtcclxuXHRjb25zdCBbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XHJcblx0Y29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxyXG5cdFx0cXVlcnkge1xyXG5cdFx0XHRyZXN0YXVyYW50cyB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0ZGVzY3JpcHRpb25cclxuXHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHR1cmxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRgO1xyXG5cdGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUyk7XHJcblx0aWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuXHRpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUjwvcD47XHJcblx0aWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcclxuXHRjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApO1xyXG5cclxuXHRsZXQgc2VhcmNoUXVlcnkgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzKSA9PiB7XHJcblx0XHRyZXR1cm4gcmVzLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpO1xyXG5cdH0pO1xyXG5cclxuXHRsZXQgcmVzdElkID0gc2VhcmNoUXVlcnlbMF0uaWQ7XHJcblxyXG5cdC8vIGRlZmluZXQgcmVuZGVyZXIgZm9yIERpc2hlc1xyXG5cdGNvbnN0IHJlbmRlckRpc2hlcyA9IChyZXN0YXVyYW50SUQpID0+IHtcclxuXHRcdHJldHVybiA8RGlzaGVzIHJlc3RJZD17cmVzdGF1cmFudElEfT4gPC9EaXNoZXM+O1xyXG5cdH07XHJcblx0aWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDApIHtcclxuXHRcdGNvbnN0IHJlc3RMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcclxuXHRcdFx0PENvbCB4cz0nNicgc209JzQnIGtleT17cmVzLmlkfT5cclxuXHRcdFx0XHQ8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cclxuXHRcdFx0XHRcdDxDYXJkSW1nXHJcblx0XHRcdFx0XHRcdHRvcD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX1cclxuXHRcdFx0XHRcdFx0c3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3YCArIHJlcy5pbWFnZS51cmx9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PENhcmRCb2R5PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZFRleHQ+e3Jlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxyXG5cdFx0XHRcdFx0PC9DYXJkQm9keT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWZvb3Rlcic+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRjb2xvcj0naW5mbydcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRSZXN0YXVyYW50SUQocmVzLmlkKX0+XHJcblx0XHRcdFx0XHRcdFx0e3Jlcy5uYW1lfVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0PC9Db2w+XHJcblx0XHQpKTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdDxSb3cgeHM9JzMnPntyZXN0TGlzdH08L1Jvdz5cclxuXHJcblx0XHRcdFx0PFJvdyB4cz0nMyc+e3JlbmRlckRpc2hlcyhyZXN0YXVyYW50SUQpfTwvUm93PlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiA8aDE+IE5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT47XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9