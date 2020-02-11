"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
exports.token = {
    generate: ({ username }, expiresIn) => {
        return jwt.sign({ username }, process.env.JWT_SECRET_KEY, { expiresIn });
    }
};
//# sourceMappingURL=token.js.map