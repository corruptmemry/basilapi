import express, { application, Application } from "express";
import { logger } from "../main";
import { rootRoute } from "../routes/rootRoute";
import rateLimit from "express-rate-limit";
import mongoose, { model } from "mongoose";
export const app: Application = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import passport from "passport";

/**
 * API Server class
 *
 * @export
 * @class Server
 */
export class Server {
  /**
   * Creates an instance of Server.
   * @memberof Server
   */
  constructor() {
    dotenv.config();
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    app.use(express.json());
    app.use(passport.initialize());
    app.use(passport.session());
    app.all("/api/", rootRoute);
    app.listen(5000, () => logger.info(`Running HTTP server on port 5000`));
  }
}
