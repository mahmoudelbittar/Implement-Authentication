const express = require("express");
const router = express.Router();

// Render the login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Handle the login form submission
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Perform login logic here
  // Redirect to the profile page on successful login
  res.redirect("/profile");
});

// Render the signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Handle the signup form submission
router.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  // Perform signup logic here
  // Redirect to the profile page on successful signup
  res.redirect("/profile");
});

module.exports = router;
