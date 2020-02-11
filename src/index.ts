import * as express from "express";

const app: express.Application = express();

app.listen(process.env.PORT || 8080, () => console.log("started"));
