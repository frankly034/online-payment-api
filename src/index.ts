import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "hello world!",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
