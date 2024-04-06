import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    user = new User({
      email,
      password,
    });
    await user.save();
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    user.accessToken = accessToken;
    await user.save();
    res.status(201).json({
      message: 'User created successfully',
      accessToken,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({
      message: 'User logged in successfully',
      accessToken,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

const getAuthenticatedContent = async (req, res) => {
  res.json({ message: 'This is authenticated content.' });
};

export { register, login, getAuthenticatedContent };
