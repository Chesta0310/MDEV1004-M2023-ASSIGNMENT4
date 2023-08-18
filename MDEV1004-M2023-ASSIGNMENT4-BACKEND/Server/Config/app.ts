// File Name: app.ts
// Student Name: Chesta Patel
// Student ID: 200542446
// Date: 17th August 2023

// modules for express server
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

// Database modules
import mongoose from "mongoose";
import db from "./db";

mongoose.connect(db.remoteURI);

// DB Connection Events
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB`);
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

import indexRouter from "../Routes/index";

let app = express();

// middleware modules
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/", indexRouter);

export default app;
