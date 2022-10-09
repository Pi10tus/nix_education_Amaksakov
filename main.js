import * as http from "http";
import { readFile } from "node:fs";

const host = "localhost";
const port = 8000;

let indexFile;

const user = [
  {
    id: 1,
    username: "pilotus",
    firstname: "Artem",
    lastname: "Maksakov",
    email: "example@gmail.com",
    password: "123",
    phone: "555-42-42",
  },
];

const requestListener = function (req, res) {
  try {
    switch (req.url) {
      case "/user":
        userController(req, res);
        break;
      case "/":
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(indexFile);
        break;
      default:
        if (req.url.split("/")[1] === "user") {
          userControllerSegmentII(req, res);
        } else {
          res.setHeader("Content-Type", "application/json");
          res.writeHead(404);
          res.end(`{code: 404, message: "Resource not found"}`);
        }
    }
  } catch (e) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(500);
    res.end(JSON.stringify(e));
  }
};
let body;
function readData(req, func) {
  body = [];
  req
    .on("error", (err) => {
      console.error(err);
    })
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      // At this point, we have the headers, method, url and body, and can now
      // do whatever we need to in order to respond to this request.

      func(body);
    });
}
function userController(req, res) {
  switch (req.method) {
    case "GET":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(user));
      break;
    case "POST":
      readData(req, (body) => {
        user.push(JSON.parse(body));
      });
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(`{message: "saved"}`);
      break;
    default:
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.end(`{code: 404, message: "Resource not found"}`);
  }
}
function userControllerSegmentII(req, res) {
  switch (req.method) {
    case "GET":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      let found = user.find(
        (element) => element.username === req.url.split("/")[2]
      );
      res.end(JSON.stringify(found));
      break;
    case "POST":
      if (req.url.split("/")[2] === "createWithArray") {
        readData(req, (body) => {
          user.push(JSON.parse(body));
        });
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(`{message: "saved"}`);
        break;
      }
    case "DELETE":
      readData(req, () => {
        let indexUsers = -1;
        indexUsers = user.findIndex(
          (element) => element.username === req.url.split("/")[2]
        );
        if (indexUsers > 0) {
          user.splice(indexUsers, 1);
        }
      });
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(`{Deleted succesfuly}`);
      break;
    case "PUT":
      readData(req, (body) => {
        var indexUsers = -1;
        indexUsers = user.findIndex(
          (element) => element.username === req.url.split("/")[2]
        );
        if (indexUsers > 0) user[indexUsers] = JSON.parse(body);
      });
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(`{message: "saved"}`);
      break;
    default:
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.end(`{code: 404, message: "Resource not found"}`);
  }
}
const server = http.createServer(requestListener);

readFile(process.cwd() + "/resources/index.html", "utf8", (err, data) => {
  if (err) {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
    return;
  }
  indexFile = data;
  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
});
