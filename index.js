const express = require("express");
const app = express();
const port = 3000;
const { create } = require("express-handlebars");
const hbs = create({});
const viewsRouter = require("./views/routes");
const apiRouter = require("./api");

app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.json());
app.use(express.static("public"));

app.use("/", viewsRouter);
app.use("/api", apiRouter);

app.listen(port, () => console.log(`App listening to port ${port}`));
