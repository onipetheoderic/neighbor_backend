import { Express, Request, Response } from "express";

import { validateRequest } from "../middleware";

const API_ROUTE = "/api/deals";

export default function (app: Express) {
  app.get(`${API_ROUTE}/healthcheck`, (req: Request, res: Response) =>
    res.sendStatus(200)
  );
}
