import express from "express";
import { app } from "../modules/server";

/**
 * Root route handler
 *
 * @export
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export function rootRoute(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const routesList: any[] = [];
  app._router.stack.forEach(function (r: any) {
    if (r.route && r.route.path) {
      routesList.push(r.route.path);
    }
  });

  res.json({
    status: "OK",
    version: "1.0",
    routes: routesList,
  });
}
