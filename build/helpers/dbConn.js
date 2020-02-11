"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.default = ({ db }) => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    };
    mongoose
        .connect(db, options)
        .then(() => {
        return console.info(`Successfully connected to database`);
    })
        .catch(error => {
        console.error("Error connecting to database", error);
        return process.exit(1);
    });
};
//# sourceMappingURL=dbConn.js.map