webpackHotUpdate_N_E("pages/index",{

/***/ "./components/dishes.js":
/*!******************************!*\
  !*** ./components/dishes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var _jsxFileName = "C:\\Users\\clean\\Desktop\\next-restaurant-05-master\\components\\dishes.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\tquery ($id: ID!) {\n\t\t\trestaurant(id: $id) {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdishes {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tdescription\n\t\t\t\t\tprice\n\t\t\t\t\timage {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function Dishes(_ref) {
  _s();

  var _this = this;

  var restId = _ref.restId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      restaurantID = _useState[0],
      setRestaurantID = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      addItem = _useContext.addItem;

  var GET_RESTAURANT_DISHES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_RESTAURANT_DISHES, {
    variables: {
      id: restId
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 22
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 20
    }
  }, "ERROR here");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 20
    }
  }, "Not found");
  var restaurant = data.restaurant;

  if (restId > 0) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, restaurant.dishes.map(function (res) {
      var _jsx;

      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "6",
        sm: "4",
        style: {
          padding: 0
        },
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: {
          height: 150,
          width: 150
        },
        src: "http://localhost:1337".concat(res.image.url),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 8
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 8
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 8
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], (_jsx = {
        color: "info",
        outline: true
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "color", "primary"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onClick", function onClick() {
        return addItem(res);
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }), _jsx), "+ Add To Cart"))));
    }));
  } else {
    return __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 10
      }
    }, " Select a restaurant to see their menu!");
  }
}

_s(Dishes, "en1oChIBvPo9BEyUmlI7ItVhHWA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c = Dishes;
/* harmony default export */ __webpack_exports__["default"] = (Dishes);

var _c;

$RefreshReg$(_c, "Dishes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanMiXSwibmFtZXMiOlsiRGlzaGVzIiwicmVzdElkIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImFkZEl0ZW0iLCJHRVRfUkVTVEFVUkFOVF9ESVNIRVMiLCJncWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInJlc3RhdXJhbnQiLCJkaXNoZXMiLCJtYXAiLCJyZXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbWFnZSIsInVybCIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxTQUFTQSxNQUFULE9BQTRCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNhQyxzREFBUSxFQURyQjtBQUFBLE1BQ3BCQyxZQURvQjtBQUFBLE1BQ05DLGVBRE07O0FBQUEsb0JBRVBDLHdEQUFVLENBQUNDLGdEQUFELENBRkg7QUFBQSxNQUVuQkMsT0FGbUIsZUFFbkJBLE9BRm1COztBQUkzQixNQUFNQyxxQkFBcUIsR0FBR0MsMERBQUgsbUJBQTNCO0FBa0JBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBdEIyQixrQkF3Qk1DLCtEQUFRLENBQUNKLHFCQUFELEVBQXdCO0FBQ2hFSyxhQUFTLEVBQUU7QUFBRUMsUUFBRSxFQUFFYjtBQUFOO0FBRHFELEdBQXhCLENBeEJkO0FBQUEsTUF3Qm5CYyxPQXhCbUIsYUF3Qm5CQSxPQXhCbUI7QUFBQSxNQXdCVkMsS0F4QlUsYUF3QlZBLEtBeEJVO0FBQUEsTUF3QkhDLElBeEJHLGFBd0JIQSxJQXhCRzs7QUE0QjNCLE1BQUlGLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ1gsTUFBSSxDQUFDQyxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBRVgsTUFBSUMsVUFBVSxHQUFHRCxJQUFJLENBQUNDLFVBQXRCOztBQUVBLE1BQUlqQixNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNmLFdBQ0MsbUVBQ0VpQixVQUFVLENBQUNDLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLEdBQUQ7QUFBQTs7QUFBQSxhQUN0QixNQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDLEdBQVI7QUFBWSxVQUFFLEVBQUMsR0FBZjtBQUFtQixhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQTFCO0FBQTBDLFdBQUcsRUFBRUQsR0FBRyxDQUFDUCxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQywrQ0FBRDtBQUFNLGFBQUssRUFBRTtBQUFFUyxnQkFBTSxFQUFFO0FBQVYsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyxrREFBRDtBQUNDLFdBQUcsRUFBRSxJQUROO0FBRUMsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUUsR0FBVjtBQUFlQyxlQUFLLEVBQUU7QUFBdEIsU0FGUjtBQUdDLFdBQUcsaUNBQTBCSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsR0FBcEMsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsRUFNQyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWU4sR0FBRyxDQUFDTyxJQUFoQixDQURELEVBRUMsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVdQLEdBQUcsQ0FBQ1EsV0FBZixDQUZELENBTkQsRUFVQztBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyxpREFBRDtBQUNDLGFBQUssRUFBQyxNQURQO0FBRUMsZUFBTztBQUZSLGtIQUdPLFNBSFAsOEdBSVU7QUFBQSxlQUFNdEIsT0FBTyxDQUFDYyxHQUFELENBQWI7QUFBQSxPQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREQsQ0FWRCxDQURELENBRHNCO0FBQUEsS0FBdEIsQ0FERixDQUREO0FBNEJBLEdBN0JELE1BNkJPO0FBQ04sV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQUFQO0FBQ0E7QUFDRDs7R0FsRVFyQixNO1VBc0JPVyxxRCxFQUVrQkMsdUQ7OztLQXhCekJaLE07QUFtRU1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFjM2I3NjgxOGM4MWNmMDYxYzI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENhcmQsXHJcblx0Q2FyZEJvZHksXHJcblx0Q2FyZEltZyxcclxuXHRDYXJkVGV4dCxcclxuXHRDYXJkVGl0bGUsXHJcblx0Um93LFxyXG5cdENvbCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5mdW5jdGlvbiBEaXNoZXMoeyByZXN0SWQgfSkge1xyXG5cdGNvbnN0IFtyZXN0YXVyYW50SUQsIHNldFJlc3RhdXJhbnRJRF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcblx0Y29uc3QgR0VUX1JFU1RBVVJBTlRfRElTSEVTID0gZ3FsYFxyXG5cdFx0cXVlcnkgKCRpZDogSUQhKSB7XHJcblx0XHRcdHJlc3RhdXJhbnQoaWQ6ICRpZCkge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdFx0bmFtZVxyXG5cdFx0XHRcdGRpc2hlcyB7XHJcblx0XHRcdFx0XHRpZFxyXG5cdFx0XHRcdFx0bmFtZVxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb25cclxuXHRcdFx0XHRcdHByaWNlXHJcblx0XHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHRcdHVybFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdGA7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVF9ESVNIRVMsIHtcclxuXHRcdHZhcmlhYmxlczogeyBpZDogcmVzdElkIH0sXHJcblx0fSk7XHJcblxyXG5cdGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcblx0aWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1IgaGVyZTwvcD47XHJcblx0aWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcclxuXHJcblx0bGV0IHJlc3RhdXJhbnQgPSBkYXRhLnJlc3RhdXJhbnQ7XHJcblxyXG5cdGlmIChyZXN0SWQgPiAwKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdHtyZXN0YXVyYW50LmRpc2hlcy5tYXAoKHJlcykgPT4gKFxyXG5cdFx0XHRcdFx0PENvbCB4cz0nNicgc209JzQnIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0ga2V5PXtyZXMuaWR9PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAxMHB4XCIgfX0+XHJcblx0XHRcdFx0XHRcdFx0PENhcmRJbWdcclxuXHRcdFx0XHRcdFx0XHRcdHRvcD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGhlaWdodDogMTUwLCB3aWR0aDogMTUwIH19XHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3Jlcy5pbWFnZS51cmx9YH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkVGl0bGU+e3Jlcy5uYW1lfTwvQ2FyZFRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmRCb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWZvb3Rlcic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdpbmZvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvdXRsaW5lXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHJlcyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQrIEFkZCBUbyBDYXJ0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIDxoMz4gU2VsZWN0IGEgcmVzdGF1cmFudCB0byBzZWUgdGhlaXIgbWVudSE8L2gzPjtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGlzaGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9