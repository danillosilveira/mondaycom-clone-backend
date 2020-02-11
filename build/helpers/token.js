"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const token = {
    generate: ({ username }, expiresIn) => {
        return jwt.sign({ username }, process.env.JWT_SECRET_KEY, { expiresIn });
    }
};
exports.default = token;
//# sourceMappingURL=token.js.map