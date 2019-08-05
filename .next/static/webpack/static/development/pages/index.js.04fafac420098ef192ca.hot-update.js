webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/luke.mackenzie/Documents/personal/nextjs/pages/index.js";





 // const PostLink = props => (
//   <li>
//     {/* here we are passing data via a query string parameter (i.e. 'title') */}
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//     {/* 'as' defines the URL to show */}
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title="Hello Next.js" />
//         <PostLink title="Learn Next.js is awesome" />
//         <PostLink title="Deploy apps with Zeit" />
//         <PostLink id="id: Hello Next.js" />
//         <PostLink id="id: Learn Next.js is awesome" />
//         <PostLink id="id: Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   );
// }
// export default withLayout(Blog);
// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href="/p/[id]" as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );
// Index.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();
//   // this will print on the SERVER console, not the browser console.
//   // That's because we render the page on the server. So, we already have the data and there is no reason to fetch it again in the client.
//   console.log(`Show data fetched. Count: ${data.length}`);
//   return {
//     shows: data.map(entry => entry.show)
//   };
// };
// export default Index;
// STYLING EXAMPLE

function getPosts() {
  return [{
    id: "hello-nextjs",
    title: "Hello Next.js"
  }, {
    id: "learn-nextjs",
    title: "Learn Next.js is awesome"
  }, {
    id: "deploy-nextjs",
    title: "Deploy apps with ZEIT"
  }];
}

function Blog() {
  var opacity = 0.6;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4013636451", [opacity]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4013636451", [opacity]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4013636451", [opacity]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(post.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4013636451", [opacity]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, post.title)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4013636451",
    dynamic: [opacity],
    __self: this
  }, "h1.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector{font-family:\"Arial\";}ul.__jsx-style-dynamic-selector{padding:0;}li.__jsx-style-dynamic-selector{list-style:none;margin:5px 0;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.__jsx-style-dynamic-selector:hover{opacity:".concat(opacity, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWtlLm1hY2tlbnppZS9Eb2N1bWVudHMvcGVyc29uYWwvbmV4dGpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGa0IsQUFJK0IsQUFJVixBQUlNLEFBS0ssQUFLZ0IsVUFidkMsTUFJZSxJQVJmLFNBU0EsUUFTQSxhQUxhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2x1a2UubWFja2VuemllL0RvY3VtZW50cy9wZXJzb25hbC9uZXh0anMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbi8vICAgPGxpPlxuLy8gICAgIHsvKiBoZXJlIHdlIGFyZSBwYXNzaW5nIGRhdGEgdmlhIGEgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAoaS5lLiAndGl0bGUnKSAqL31cbi8vICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbi8vICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4vLyAgICAgPC9MaW5rPlxuLy8gICAgIHsvKiAnYXMnIGRlZmluZXMgdGhlIFVSTCB0byBzaG93ICovfVxuLy8gICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Byb3BzLmlkfWB9PlxuLy8gICAgICAgPGE+e3Byb3BzLmlkfTwvYT5cbi8vICAgICA8L0xpbms+XG4vLyAgIDwvbGk+XG4vLyApO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8TGF5b3V0PlxuLy8gICAgICAgPGgxPk15IEJsb2c8L2gxPlxuLy8gICAgICAgPHVsPlxuLy8gICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaWQ6IEhlbGxvIE5leHQuanNcIiAvPlxuLy8gICAgICAgICA8UG9zdExpbmsgaWQ9XCJpZDogTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaWQ6IERlcGxveSBhcHBzIHdpdGggWmVpdFwiIC8+XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gICApO1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoTGF5b3V0KEJsb2cpO1xuXG4vLyBjb25zdCBJbmRleCA9IHByb3BzID0+IChcbi8vICAgPExheW91dD5cbi8vICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbi8vICAgICA8dWw+XG4vLyAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxuLy8gICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbi8vICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtzaG93LmlkfWB9PlxuLy8gICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XG4vLyAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICA8L2xpPlxuLy8gICAgICAgKSl9XG4vLyAgICAgPC91bD5cbi8vICAgPC9MYXlvdXQ+XG4vLyApO1xuXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hblwiKTtcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgLy8gdGhpcyB3aWxsIHByaW50IG9uIHRoZSBTRVJWRVIgY29uc29sZSwgbm90IHRoZSBicm93c2VyIGNvbnNvbGUuXG4vLyAgIC8vIFRoYXQncyBiZWNhdXNlIHdlIHJlbmRlciB0aGUgcGFnZSBvbiB0aGUgc2VydmVyLiBTbywgd2UgYWxyZWFkeSBoYXZlIHRoZSBkYXRhIGFuZCB0aGVyZSBpcyBubyByZWFzb24gdG8gZmV0Y2ggaXQgYWdhaW4gaW4gdGhlIGNsaWVudC5cbi8vICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuLy8gICB9O1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cbi8vIFNUWUxJTkcgRVhBTVBMRVxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogXCJoZWxsby1uZXh0anNcIiwgdGl0bGU6IFwiSGVsbG8gTmV4dC5qc1wiIH0sXG4gICAgeyBpZDogXCJsZWFybi1uZXh0anNcIiwgdGl0bGU6IFwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgfSxcbiAgICB7IGlkOiBcImRlcGxveS1uZXh0anNcIiwgdGl0bGU6IFwiRGVwbG95IGFwcHMgd2l0aCBaRUlUXCIgfVxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCBvcGFjaXR5ID0gMC42O1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogJHtvcGFjaXR5fTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/luke.mackenzie/Documents/personal/nextjs/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.04fafac420098ef192ca.hot-update.js.map