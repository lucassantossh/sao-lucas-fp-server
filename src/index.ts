import express, { Request, Response } from "express";
const server = express();

server.use(express.json());

server.get("/", async function (request: Request, response: Response) {
  response.status(200).json({ message: "Hello word!" });
});

server.listen(4004, function () {
  console.log("servidor rodando na porta: " + 4004);
});
