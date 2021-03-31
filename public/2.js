(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/UI/Spinner/Spinner.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/UI/Spinner/Spinner.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader {\r\n  font-size: 10px;\r\n  margin: 50px auto;\r\n  text-indent: -9999em;\r\n  width: 11em;\r\n  height: 11em;\r\n  border-radius: 50%;\r\n  background: #000000;\r\n  background: linear-gradient(to right, #000000 10%, rgba(0,0,0, 0) 42%);\r\n  position: relative;\r\n  -webkit-animation: load3 1.4s infinite linear;\r\n  animation: load3 1.4s infinite linear;\r\n  transform: translateZ(0);\r\n}\r\n.loader:before {\r\n  width: 50%;\r\n  height: 50%;\r\n  background: #000000;\r\n  border-radius: 100% 0 0 0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  content: '';\r\n}\r\n.loader:after {\r\n  background: #ffffff;\r\n  width: 75%;\r\n  height: 75%;\r\n  border-radius: 50%;\r\n  content: '';\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n@-webkit-keyframes load3 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes load3 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/SearchBar/SearchBar.js":
/*!********************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchBar.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");



var SearchBar = function SearchBar(_ref) {
  var change = _ref.change,
      searchInputValue = _ref.searchInputValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicEmail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Enter title",
    value: searchInputValue,
    onChange: change
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./resources/js/components/UI/Pagination/Pagination.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/UI/Pagination/Pagination.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");



var PaginationComponent = function PaginationComponent(_ref) {
  var pagesNumber = _ref.pagesNumber,
      click = _ref.click,
      currentPage = _ref.currentPage;
  var items = [];

  var _loop = function _loop(number) {
    items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Pagination"].Item, {
      key: number,
      active: number === currentPage,
      onClick: function onClick() {
        return click(number);
      }
    }, number));
  };

  for (var number = 1; number <= pagesNumber; number++) {
    _loop(number);
  }

  var paginationBasic = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    size: "lg",
    className: "justify-content-center"
  }, items));
  return paginationBasic;
};

/* harmony default export */ __webpack_exports__["default"] = (PaginationComponent);

/***/ }),

/***/ "./resources/js/components/UI/Spinner/Spinner.css":
/*!********************************************************!*\
  !*** ./resources/js/components/UI/Spinner/Spinner.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Spinner.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/UI/Spinner/Spinner.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/UI/Spinner/Spinner.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/UI/Spinner/Spinner.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.css */ "./resources/js/components/UI/Spinner/Spinner.css");
/* harmony import */ var _Spinner_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spinner_css__WEBPACK_IMPORTED_MODULE_1__);



var Spinner = function Spinner(_ref) {
  var fontSize = _ref.fontSize;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader",
    style: {
      fontSize: fontSize
    }
  }, "Loading...");
};

Spinner.defaultProps = {
  fontSize: 10
};
/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./resources/js/containers/Posts/Posts.js":
/*!************************************************!*\
  !*** ./resources/js/containers/Posts/Posts.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/UI/Spinner/Spinner */ "./resources/js/components/UI/Spinner/Spinner.js");
/* harmony import */ var _hooks_Posts_usePosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../hooks/Posts/usePosts */ "./resources/js/hooks/Posts/usePosts.js");
/* harmony import */ var _components_UI_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/UI/Pagination/Pagination */ "./resources/js/components/UI/Pagination/Pagination.js");
/* harmony import */ var _components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/SearchBar/SearchBar */ "./resources/js/components/SearchBar/SearchBar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");








var Posts = function Posts() {
  var _usePosts = Object(_hooks_Posts_usePosts__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      loading = _usePosts.loading,
      posts = _usePosts.posts,
      currentPosts = _usePosts.currentPosts,
      currentPage = _usePosts.currentPage,
      pagesNumber = _usePosts.pagesNumber,
      searchInput = _usePosts.searchInput,
      postDeletionLoading = _usePosts.postDeletionLoading,
      handlePostDelete = _usePosts.handlePostDelete,
      handlePostPagination = _usePosts.handlePostPagination,
      handleSearchInputChange = _usePosts.handleSearchInputChange;

  var render = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], null);

  if (!loading && posts.data.length > 0) {
    var postsToRender = currentPosts;
    render = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      change: handleSearchInputChange,
      searchInputValue: searchInput
    }), postsToRender.map(function (post) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        key: post.id,
        style: {
          width: "18rem",
          cursor: "pointer",
          margin: "2rem auto"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/posts/".concat(post.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "primary"
      }, "Show Content")), postDeletionLoading === post.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fontSize: 5
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "danger",
        onClick: function onClick() {
          return handlePostDelete(post.id);
        }
      }, "Delete")));
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, render, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pagesNumber: pagesNumber,
    currentPage: currentPage,
    click: handlePostPagination
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./resources/js/hooks/Posts/usePosts.js":
/*!**********************************************!*\
  !*** ./resources/js/hooks/Posts/usePosts.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var usePosts = function usePosts() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    data: [],
    searched: [],
    error: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState6 = _slicedToArray(_useState5, 2),
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(2),
      _useState8 = _slicedToArray(_useState7, 2),
      postsPerPage = _useState8[0],
      setPostsPerPage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1),
      _useState10 = _slicedToArray(_useState9, 2),
      postDeletionLoading = _useState10[0],
      setPostDeletionLoading = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState12 = _slicedToArray(_useState11, 2),
      searchInput = _useState12[0],
      setSearchInput = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchPosts = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("http://localhost:8000/api/posts", {
                  headers: {
                    "X-Authorization": "mCCpGMLjUKF11hPuwDsLIPgdyVxWVwF7PZ5nq8aM67KZi1yPOGwnsGkoYkoS8GBG"
                  }
                });

              case 2:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data.data;
                setPosts(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    data: data,
                    error: false
                  });
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchPosts() {
        return _ref.apply(this, arguments);
      };
    }();

    try {
      fetchPosts();
    } catch (_ref2) {
      var message = _ref2.message;
      console.log(message);
      setPosts(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          error: message
        });
      });
    } finally {
      setLoading(false);
    }
  }, []);
  var lastPostIndex = currentPage * postsPerPage;
  var firstPostIndex = lastPostIndex - postsPerPage;
  var currentPosts = posts.searched.length > 0 ? posts.searched.slice(firstPostIndex, lastPostIndex) : posts.data.slice(firstPostIndex, lastPostIndex);
  var pagesNumber = posts.searched.length > 0 ? Math.ceil(posts.searched.length / postsPerPage) : Math.ceil(posts.data.length / postsPerPage);

  var handlePostDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      var newPosts, message;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newPosts = posts.data.filter(function (post) {
                return post.id.toString() !== id.toString();
              });
              setPostDeletionLoading(id);
              _context2.prev = 2;
              _context2.next = 5;
              return axios["delete"]("http://localhost:8000/api/posts/".concat(id), {
                headers: {
                  "X-Authorization": "mCCpGMLjUKF11hPuwDsLIPgdyVxWVwF7PZ5nq8aM67KZi1yPOGwnsGkoYkoS8GBG"
                }
              });

            case 5:
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](2);
              message = _context2.t0.message;
              console.log(message);

            case 11:
              _context2.prev = 11;
              setPostDeletionLoading(-1);
              return _context2.finish(11);

            case 14:
              setPosts(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  data: newPosts
                });
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 7, 11, 14]]);
    }));

    return function handlePostDelete(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handlePostPagination = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(number) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setCurrentPage(number);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handlePostPagination(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleSearchInputChange = function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
    var searchedPosts = [];
    posts.data.forEach(function (post) {
      return post.title.toString().startsWith(e.target.value.toString()) && searchedPosts.push(post);
    });
    setPosts(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        searched: searchedPosts
      });
    });
  };

  return {
    loading: loading,
    posts: posts,
    currentPage: currentPage,
    currentPosts: currentPosts,
    pagesNumber: pagesNumber,
    searchInput: searchInput,
    postDeletionLoading: postDeletionLoading,
    handleSearchInputChange: handleSearchInputChange,
    handlePostDelete: handlePostDelete,
    handlePostPagination: handlePostPagination
  };
};

/* harmony default export */ __webpack_exports__["default"] = (usePosts);

/***/ })

}]);