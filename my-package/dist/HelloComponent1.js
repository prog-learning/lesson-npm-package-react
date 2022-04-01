"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloComponent1 = void 0;
const react_1 = __importDefault(require("react"));
const HelloComponent1 = ({ color = 'red' }) => {
    return (react_1.default.createElement("div", { style: {
            color: color,
        } }, "Hello1"));
};
exports.HelloComponent1 = HelloComponent1;
