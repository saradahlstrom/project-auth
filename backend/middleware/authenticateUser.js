import { UserModel } from "../models/userModel.js";

export const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization"); 
  try {
    const user = await UserModel.findOne({ accessToken: accessToken });
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ success: false, message: "Please log in" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
