import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Corrected to Schema
    fullName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 20,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
      select: false,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
