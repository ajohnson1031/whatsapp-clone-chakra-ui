const router = require("express").Router();
const validateForm = require("../controllers/validateForm");

router.post("/login", (req, res) => {
  validateForm(req, res);
});

router.post("/register", (req, res) => {
  const { password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    validateForm(req, res);
  } else {
    res.status(422).send();
  }
});

module.exports = router;
