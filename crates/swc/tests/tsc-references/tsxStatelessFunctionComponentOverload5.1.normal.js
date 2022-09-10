//// [file.tsx]
define([
    "require",
    "exports",
    "@swc/helpers/src/_extends.mjs",
    "react"
], function(require, exports, _extends, _react) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "MainButton", {
        enumerable: true,
        get: function() {
            return MainButton;
        }
    });
    _extends = _extends.default;
    var obj0 = {
        to: "world"
    };
    var obj1 = {
        children: "hi",
        to: "boo"
    };
    var obj2 = {
        onClick: function() {}
    };
    var obj3;
    function MainButton(props) {
        var linkProps = props;
        if (linkProps.to) {
            return this._buildMainLink(props);
        }
        return this._buildMainButton(props);
    }
    // Error
    var b0 = /*#__PURE__*/ _react.createElement(MainButton, {
        to: "/some/path",
        onClick: function(e) {}
    }, "GO"); // extra property;
    var b1 = /*#__PURE__*/ _react.createElement(MainButton, _extends({
        onClick: function(e) {}
    }, obj0), "Hello world"); // extra property;
    var b2 = /*#__PURE__*/ _react.createElement(MainButton, _extends({}, {
        to: "10000"
    }, obj2)); // extra property
    var b3 = /*#__PURE__*/ _react.createElement(MainButton, _extends({}, {
        to: "10000"
    }, {
        onClick: function(k) {}
    })); // extra property
    var b4 = /*#__PURE__*/ _react.createElement(MainButton, _extends({}, obj3, {
        to: true
    })); // Should error because Incorrect type; but attributes are any so everything is allowed
    var b5 = /*#__PURE__*/ _react.createElement(MainButton, _extends({}, {
        onClick: function onClick(e) {}
    }, obj0)); // Spread retain method declaration (see GitHub #13365), so now there is an extra attributes
    var b6 = /*#__PURE__*/ _react.createElement(MainButton, _extends({}, {
        onClick: function onClick(e) {}
    }, {
        children: 10
    })); // incorrect type for optional attribute
    var b7 = /*#__PURE__*/ _react.createElement(MainButton, _extends({}, {
        onClick: function onClick(e) {}
    }, {
        children: "hello",
        className: true
    })); // incorrect type for optional attribute
    var b8 = /*#__PURE__*/ _react.createElement(MainButton, {
        "data-format": true
    }); // incorrect type for specified hyphanated name
});