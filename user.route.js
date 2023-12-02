//import express from "express";
import { userSignin } from "../controllers/user.controller.js";

const express=require("express");

export const userRouter = express.Router();

userRouter.post('/signin', userSignin);
