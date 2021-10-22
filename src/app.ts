import express from "express";
import config from "config";
import log from "./logger";
import connect from "./db/connect";
import { users, deals } from "./routes";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

//Setup Cross origin
app.use(require("cors")());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/users", users);
// app.use("/deals", deals);

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);

  connect();
  users(app);
  deals(app);
});
