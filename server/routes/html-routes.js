const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("/welcome")
  });

  app.get("/login", (req, res) => {
    if (req.user) { return res.redirect("/members") }
    res.render("/login");
  });

  app.get("/signup", (req, res) => {
    if (req.user) { return res.redirect("/members") }
    res.render("/signup");
  });

  app.post("/members", isAuthenticated, (req, res) => {
    res.redirect("/members");
  });

  app.get("/hauntedPlaces", isAuthenticated, (req, res) => {
    res.render("/hauntedPlaces");
  });

  app.get("/historicalPlaces", isAuthenticated, (req, res) => {
    res.render("/historicalPlaces");
  });

  app.get("/tvFilmPlaces", isAuthenticated, (req, res) => {
    res.render("/tvFilmPlaces");
  });

  app.get("/locationSelect", isAuthenticated, (req, res) => {
    res.render("/locationSelect");
  });

  app.get("/explore", isAuthenticated, (req, res) => {
    res.render("/explore");
  });
};