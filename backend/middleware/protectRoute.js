import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Access denied. No token provided." });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({
        error: "unauthorized - invalid Token provided",
      });
    }
    const user = await User.findById(decode.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "unauthorized - User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
