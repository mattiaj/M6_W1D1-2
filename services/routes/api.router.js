import { Router } from "express";
import User from "../model/user.model.js"

export const apiRoute = Router();

apiRoute.get("/", async (req, res) => {
    res.send("sei al route principale")
})

apiRoute.get("/:id", async (res, req) => {
    
})

apiRoute.post("/", async (res, req, next) => {
    try {
        let user = await User.create(req.body);
        res.send(user).status(400);
    } catch (error) {
        next(error)
    }
})