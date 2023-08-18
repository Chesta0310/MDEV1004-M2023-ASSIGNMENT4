// File Name: user.ts
// Student Name: Chesta Patel
// Student ID: 200542446
// Date: 17th August 2023

import { Request, Response, NextFunction } from "express";
import passport from "passport";
import mongoose from "mongoose";

import User from "../Models/user";

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void {
    // instantiate a new user object
    let newUser = new User({
        username: req.body.username,
        emailAddress: req.body.EmailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName,
    });

    User.register(newUser, req.body.password, (err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            console.error("All Fields Are Required");
            return res.json({
                success: false,
                msg: "ERROR: User Not Registered. All Fields Are Required",
            });
        }
        if (err) {
            console.error("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                console.error("Error: User Already Exists");
            }
            return res.json({
                success: false,
                msg: "User not Registered Successfully!",
            });
        }

        // automatically login the user
        return passport.authenticate("local")(req, res, () => {
            return res.json({
                success: true,
                msg: "User Logged in Successfully!",
                user: newUser,
            });
        });
    });
}

export function ProcessLogin(req: Request, res: Response, next: NextFunction): void {
    passport.authenticate("local", (err: any, user: any, info: any) => {
        // are there server errors?
        if (err) {
            console.error(err);
            return next(err);
        }
        // are the login errors?
        if (!user) {
            return res.json({
                success: false,
                msg: "User Not Logged in Successfully!",
                user: user,
            });
        }
        req.login(user, (err) => {
            // are there DB errors?
            if (err) {
                console.error(err);
                return next(err);
            }
            // if we had a front-end (like Angular or React or Mobile UI)...
            return res.json({
                success: true,
                msg: "User Logged in Successfully!",
                user: user,
            });
        });
    })(req, res, next);
}

export function ProcessLogout(req: Request, res: Response, next: NextFunction): void {
    req.logout(() => {
        console.log("User Logged Out");
        res.json({ success: true, msg: "User Logged out Successfully!" });
    });
    // if we had a front-end (Angular, React or Mobile UI)...
}
