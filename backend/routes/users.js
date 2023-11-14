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
    res.status(201).json({ message: "User added! ", savedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ (GET) a specific user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE (PUT) a user by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
