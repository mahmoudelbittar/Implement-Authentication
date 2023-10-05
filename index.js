const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");

// Set up EJS as the template engine
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Routes
app.use("/auth", authRouter);
app.use("/profile", profileRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
