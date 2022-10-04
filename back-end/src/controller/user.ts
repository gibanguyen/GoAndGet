import User from "../model/user";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userController = {
  // REGISTER
  registerUser: async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    try {
      const newUser = await new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        password,
      });
    } catch (e) {}
  },
};
