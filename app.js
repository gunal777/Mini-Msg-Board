const express = require("express");
const path = require("node:path");
const msgRoutes = require("./routes/msgRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/", msgRoutes);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
});