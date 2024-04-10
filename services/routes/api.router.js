import { Router } from "express";
import User from "../model/user.model.js"

export const apiRoute = Router();

apiRoute.get("/authors", async (req, res) => {

})

apiRoute.get("/authors/:id", async (req, res) => {
    
})

apiRoute.post("/authors", async (req, res, next) => {
    try {
      let user = await User.create(req.body);
      res.send(user).status(400);
    } catch (err) {
      next(err);
    }
  });