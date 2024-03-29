"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloComponent2 = void 0;
const react_1 = __importDefault(require("react"));
const HelloComponent2 = ({ color = 'red' }) => {
    return (react_1.default.createElement("div", { style: {
            color: color,
        } }, "Hello2"));
};
exports.HelloComponent2 = HelloComponent2;
