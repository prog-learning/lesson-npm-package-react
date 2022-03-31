"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloComponent1 = void 0;
var react_1 = __importDefault(require("react"));
var HelloComponent1 = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'red' : _b;
    return (react_1.default.createElement("div", { style: {
            color: color,
        } }, "Hello1"));
};
exports.HelloComponent1 = HelloComponent1;
