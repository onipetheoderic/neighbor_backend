import { Express, Request, Response } from "express";
import { createUserHandler } from "../controller/user.controller";
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from "../controller/session.controller";
import { validateRequest, requiresUser } from "../middleware";
import {
  createUserSchema,
  createUserSessionSchema,
} from "../schema/user.schema";

const API_ROUTE = "/api/v1/users";

export default function (app: Express) {
  app.get(`${API_ROUTE}/healthcheck`, (req: Request, res: Response) =>
    res.sendStatus(200)
  );
  // Register user
  app.post(
    `${API_ROUTE}/register`,
    validateRequest(createUserSchema),
    createUserHandler
  );
  // Login
  app.post(
    `${API_ROUTE}/sessions`,
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  // Get the user's sessions
  app.get(`${API_ROUTE}/sessions`, requiresUser, getUserSessionsHandler);

  // Logout
  app.delete(
    `${API_ROUTE}/sessions`,
    requiresUser,
    invalidateUserSessionHandler
  );
}
