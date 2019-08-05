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

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3950785544",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3950785544",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, post.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3950785544",
    __self: this
  }, "li.jsx-3950785544{list-style:none;margin:5px 0;}a.jsx-3950785544{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:\"Arial\";}a.jsx-3950785544:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWtlLm1hY2tlbnppZS9Eb2N1bWVudHMvcGVyc29uYWwvbmV4dGpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFZ0IsQUFHeUIsQUFLSyxBQU1ULFlBQ2QsSUFYZSxhQUNmLHFCQUlhLFdBQ1Msb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9sdWtlLm1hY2tlbnppZS9Eb2N1bWVudHMvcGVyc29uYWwvbmV4dGpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuLy8gY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4vLyAgIDxsaT5cbi8vICAgICB7LyogaGVyZSB3ZSBhcmUgcGFzc2luZyBkYXRhIHZpYSBhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXIgKGkuZS4gJ3RpdGxlJykgKi99XG4vLyAgICAgPExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG4vLyAgICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxuLy8gICAgIDwvTGluaz5cbi8vICAgICB7LyogJ2FzJyBkZWZpbmVzIHRoZSBVUkwgdG8gc2hvdyAqL31cbi8vICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwcm9wcy5pZH1gfT5cbi8vICAgICAgIDxhPntwcm9wcy5pZH08L2E+XG4vLyAgICAgPC9MaW5rPlxuLy8gICA8L2xpPlxuLy8gKTtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPExheW91dD5cbi8vICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiIC8+XG4vLyAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiIC8+XG4vLyAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiIC8+XG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImlkOiBIZWxsbyBOZXh0LmpzXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaWQ6IExlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiIC8+XG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImlkOiBEZXBsb3kgYXBwcyB3aXRoIFplaXRcIiAvPlxuLy8gICAgICAgPC91bD5cbi8vICAgICA8L0xheW91dD5cbi8vICAgKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aExheW91dChCbG9nKTtcblxuLy8gY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4vLyAgIDxMYXlvdXQ+XG4vLyAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4vLyAgICAgPHVsPlxuLy8gICAgICAge3Byb3BzLnNob3dzLm1hcChzaG93ID0+IChcbi8vICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4vLyAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cbi8vICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuLy8gICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgPC9saT5cbi8vICAgICAgICkpfVxuLy8gICAgIDwvdWw+XG4vLyAgIDwvTGF5b3V0PlxuLy8gKTtcblxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW5cIik7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4vLyAgIC8vIHRoaXMgd2lsbCBwcmludCBvbiB0aGUgU0VSVkVSIGNvbnNvbGUsIG5vdCB0aGUgYnJvd3NlciBjb25zb2xlLlxuLy8gICAvLyBUaGF0J3MgYmVjYXVzZSB3ZSByZW5kZXIgdGhlIHBhZ2Ugb24gdGhlIHNlcnZlci4gU28sIHdlIGFscmVhZHkgaGF2ZSB0aGUgZGF0YSBhbmQgdGhlcmUgaXMgbm8gcmVhc29uIHRvIGZldGNoIGl0IGFnYWluIGluIHRoZSBjbGllbnQuXG4vLyAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcbi8vICAgfTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG4vLyBTVFlMSU5HIEVYQU1QTEVcbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6IFwiaGVsbG8tbmV4dGpzXCIsIHRpdGxlOiBcIkhlbGxvIE5leHQuanNcIiB9LFxuICAgIHsgaWQ6IFwibGVhcm4tbmV4dGpzXCIsIHRpdGxlOiBcIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiIH0sXG4gICAgeyBpZDogXCJkZXBsb3ktbmV4dGpzXCIsIHRpdGxlOiBcIkRlcGxveSBhcHBzIHdpdGggWkVJVFwiIH1cbiAgXTtcbn1cblxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPGxpPlxuICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XG4gICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgY29uc3Qgb3BhY2l0eSA9IDAuNjtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPk15IEJsb2c8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSxcbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6ICR7b3BhY2l0eX07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/luke.mackenzie/Documents/personal/nextjs/pages/index.js */"));
};

function Blog() {
  var opacity = 0.6;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4013636451", [opacity]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4013636451", [opacity]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4013636451",
    dynamic: [opacity],
    __self: this
  }, "h1.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector{font-family:\"Arial\";}ul.__jsx-style-dynamic-selector{padding:0;}li.__jsx-style-dynamic-selector{list-style:none;margin:5px 0;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.__jsx-style-dynamic-selector:hover{opacity:".concat(opacity, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWtlLm1hY2tlbnppZS9Eb2N1bWVudHMvcGVyc29uYWwvbmV4dGpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHa0IsQUFJK0IsQUFJVixBQUlNLEFBS0ssQUFLZ0IsVUFidkMsTUFJZSxJQVJmLFNBU0EsUUFTQSxhQUxhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2x1a2UubWFja2VuemllL0RvY3VtZW50cy9wZXJzb25hbC9uZXh0anMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbi8vICAgPGxpPlxuLy8gICAgIHsvKiBoZXJlIHdlIGFyZSBwYXNzaW5nIGRhdGEgdmlhIGEgcXVlcnkgc3RyaW5nIHBhcmFtZXRlciAoaS5lLiAndGl0bGUnKSAqL31cbi8vICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbi8vICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4vLyAgICAgPC9MaW5rPlxuLy8gICAgIHsvKiAnYXMnIGRlZmluZXMgdGhlIFVSTCB0byBzaG93ICovfVxuLy8gICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Byb3BzLmlkfWB9PlxuLy8gICAgICAgPGE+e3Byb3BzLmlkfTwvYT5cbi8vICAgICA8L0xpbms+XG4vLyAgIDwvbGk+XG4vLyApO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8TGF5b3V0PlxuLy8gICAgICAgPGgxPk15IEJsb2c8L2gxPlxuLy8gICAgICAgPHVsPlxuLy8gICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaWQ6IEhlbGxvIE5leHQuanNcIiAvPlxuLy8gICAgICAgICA8UG9zdExpbmsgaWQ9XCJpZDogTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaWQ6IERlcGxveSBhcHBzIHdpdGggWmVpdFwiIC8+XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gICApO1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoTGF5b3V0KEJsb2cpO1xuXG4vLyBjb25zdCBJbmRleCA9IHByb3BzID0+IChcbi8vICAgPExheW91dD5cbi8vICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbi8vICAgICA8dWw+XG4vLyAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxuLy8gICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbi8vICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtzaG93LmlkfWB9PlxuLy8gICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XG4vLyAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICA8L2xpPlxuLy8gICAgICAgKSl9XG4vLyAgICAgPC91bD5cbi8vICAgPC9MYXlvdXQ+XG4vLyApO1xuXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hblwiKTtcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgLy8gdGhpcyB3aWxsIHByaW50IG9uIHRoZSBTRVJWRVIgY29uc29sZSwgbm90IHRoZSBicm93c2VyIGNvbnNvbGUuXG4vLyAgIC8vIFRoYXQncyBiZWNhdXNlIHdlIHJlbmRlciB0aGUgcGFnZSBvbiB0aGUgc2VydmVyLiBTbywgd2UgYWxyZWFkeSBoYXZlIHRoZSBkYXRhIGFuZCB0aGVyZSBpcyBubyByZWFzb24gdG8gZmV0Y2ggaXQgYWdhaW4gaW4gdGhlIGNsaWVudC5cbi8vICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuLy8gICB9O1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cbi8vIFNUWUxJTkcgRVhBTVBMRVxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogXCJoZWxsby1uZXh0anNcIiwgdGl0bGU6IFwiSGVsbG8gTmV4dC5qc1wiIH0sXG4gICAgeyBpZDogXCJsZWFybi1uZXh0anNcIiwgdGl0bGU6IFwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgfSxcbiAgICB7IGlkOiBcImRlcGxveS1uZXh0anNcIiwgdGl0bGU6IFwiRGVwbG95IGFwcHMgd2l0aCBaRUlUXCIgfVxuICBdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCBvcGFjaXR5ID0gMC42O1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogJHtvcGFjaXR5fTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/luke.mackenzie/Documents/personal/nextjs/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.a23679c79a46f4995057.hot-update.js.map