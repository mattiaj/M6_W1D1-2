import { Router } from "express";
import blogPost from "../model/blogPost.model.js";

export const blogPostRouter = Router();

blogPostRouter.get("/", async (req, res, next) => {
    try {
        let posts = await blogPost.find();
        res.send(posts);
    } catch (err) {
        next(err);
    }
})

blogPostRouter.get("/:id", async (req, res, next) => {
    try {
        let post = await blogPost.findById(req.params.id);
        res.send(post);
    } catch (err) {
        next(err);
    }
})

blogPostRouter.post("/", async (req, res, next) => {
    try {
        let post = await blogPost.create(req.body);
        res.send(post);
    } catch (err) {
        next(err);
    }
})

blogPostRouter.put("/:id", async (req, res, next) => {
    try {
        let post = await blogPost.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.send(post);
    } catch (err) {
        next(err);
    }
})

blogPostRouter.delete("/:id", async (req, res, next) => {
    try {
        let post = await blogPost.deleteOne({_id: req.params.id});
        res.send("Il post è stato eliminato correttamente!").status(204);
    } catch (err) {
        next(err);
    }
})