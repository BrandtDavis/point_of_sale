"use strict";
exports.__esModule = true;
var logo_svg_1 = require("./logo.svg");
require("./App.css");
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
exports["default"] = App;
