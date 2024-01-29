import Koa from "koa";
import jwt from "./util/jwt.js";

const app = new Koa();

// Everything up until and including the health endpoint.

app.use(jwt);

// The postgres context and router follows here.
