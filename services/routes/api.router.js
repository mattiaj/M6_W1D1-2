import { Router } from "express";
import User from "../model/user.model.js"

export const apiRoute = Router();

apiRoute.get("/", async (req, res, next) => {
    try {
      let users = await User.find();
      res.send(users);
    } catch (err) {
      next(err);
    }
})

apiRoute.get("/:id", async (req, res, next) => {
    try {
      let user = await User.findById(req.params.id);
      res.send(user);
    } catch (err) {
      next(err)
    }
})

apiRoute.post("/", async (req, res, next) => {
    try {
      let user = await User.create(req.body);
      res.send(user).status(400);
    } catch (err) {
      next(err);
    }
  });

  apiRoute.put("/:id", async (req, res, next) => {
    try {
      let user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      res.send(user);
    } catch (err) {
      next(err);
    }
  });

  apiRoute.delete("/:id", async (req, res, next) => {
    try {let user = await User.deleteOne({_id: req.params.id});
    res.send("l'utente è stato eliminato correttamente").status(204);
      
    } catch (err) {
      next(err);
    }
  })