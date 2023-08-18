// File Name: index.ts
// Student Name: Chesta Patel
// Student ID: 200542446
// Date: 17th August 2023

import express from "express";
let router = express.Router();

/* Get the movie Controller */
import { DisplayMovieList, DisplayMovieByID, AddMovie, UpdateMovie, DeleteMovie } from "../Controllers/movie";

/* GET /api/list - display the movie list */
router.get("/list", (req, res, next) => {
    DisplayMovieList(req, res, next);
});

/* GET /api/find/:id - display a movie by id */
router.get("/find/:id", (req, res, next) => {
    DisplayMovieByID(req, res, next);
});

/* POST /api/add - add a new movie */
router.post("/add", (req, res, next) => {
    AddMovie(req, res, next);
});

/* PUT /api/update/:id - update a movie by id */
router.put("/update/:id", (req, res, next) => {
    UpdateMovie(req, res, next);
});

/* GET /api/delete/:id - delete a movie by id */
router.delete("/:id", (req, res, next) => {
    DeleteMovie(req, res, next);
});

export default router;
