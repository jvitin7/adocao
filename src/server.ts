import express, { response } from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/routes";

dotenv.config();

const server = express();

server.listen(process.env.PORT, () =>
  console.log("🔥 Server started at http://localhost:5500 🔥")
);

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

// Routes
server.use(mainRoutes);
server.use((request, response) => {
  response.send("Cannot get this page");
});
