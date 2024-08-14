import express, { json } from "express";
import usersDb from "./db/users.json";
import chartsDb from "./db/charts.json";
import indexRouter from "./routes";

const PORT = 8080;
export const app = express();

app.use(json());

indexRouter.get("/api", (request: any, response) => {
  console.log(usersDb, chartsDb);
  const userInfo = usersDb.info;
  const chartsInfo = chartsDb.info;
  const description = {
    userInfo,
    chartsInfo,
  };
  response.status(200).json(description);
});

app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log("Running server on port:", PORT);
});
