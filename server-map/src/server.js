require("dotenv/config");
import express from "express";
import cors from "cors";
import routes from "./routes";

require("./database");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use(routes);

// app.get("/v1/", (req, res) => {
//   res.send("Hello World Termômetro");
// });

app.listen(PORT, HOST);
