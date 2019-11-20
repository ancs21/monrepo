"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _index = require("./index");

(0, _react2.storiesOf)('Button', module).add('text', function () {
  return _react.default.createElement(_index.Button, {
    onClick: (0, _addonActions.action)('clicked')
  }, "Hello Button");
});