const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// READ (GET) all users
router.route("/").get(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //   User.find()
  //     .then((users) => res.json(users))
  //     .catch((err) => res.status(400).json({"Error":  err}));
});

// CREATE (POST) a new user
router.route("/").post(async (req, res) => {
  try {
    if (!req.body.username) {
      return res.status(400).json({ error: "Username is required" });
    }

    const username = req.body.username;
    const newUser = new User({ username });

    const savedUser = await newUser.save();
    res.status(201).json({ msg: "User added! ", savedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  //   const username = req.body.username;
  //   const newUser = new User({ username });
  //   newUser
  //     .save()
  //     .then(() => res.json({msg: "User added!", newUser}))
  //     .catch((err) => res.status(400).json({"Error":  err}));
});

module.exports = router;
