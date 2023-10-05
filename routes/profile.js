const express = require("express");
const router = express.Router();

// Render the profile page
router.get("/", (req, res) => {
  // Retrieve user information from session or database
  const user = {
    username: "JohnDoe",
    email: "johndoe@example.com",
  };
  res.render("profile", { user });
});

module.exports = router;
