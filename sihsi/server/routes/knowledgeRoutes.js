import express from "express";
import Knowledge from "../models/Knowledge.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const knowledge = await Knowledge.find();
    res.json(knowledge);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const newArticle = new Knowledge({ title, description, category });
    await newArticle.save();
    res.json(newArticle);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
