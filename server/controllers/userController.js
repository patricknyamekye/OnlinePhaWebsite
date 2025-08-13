const User = require("./../models/userModel"); // Assuming you have a User model defined
const bcrypt = require("bcrypt");

const userController = {
  // Signup
  signup: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },

  // Login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      console.log(req.body);

      // Check if user exists
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: "User does not exist" });
      }

      // Check if password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      // If user and password are valid, generate a token (you can use JWT or any other authentication method)
      // const token = generateToken(user._id); // Implement your token generation logic

      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },

  // Get user by ID
  getUserById: async (req, res) => {
    try {
      const _id = req.params.userId;
      const user = await User.findById({ _id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },

  // Delete user
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.userId;

      // Delete user by ID
      await User.findByIdAndDelete(userId);

      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },
  // Edit user
  editUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const { username, email, password } = req.body;

      // Find user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update user details
      user.username = username || user.username;
      user.email = email || user.email;
      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }

      // Save updated user to the database
      await user.save();

      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = userController;
