"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var i1 = new _impuestos["default"](1000000, 180000);
var c1 = new _cliente["default"]("Luis", i1);
console.log(c1.calcularImpuesto());