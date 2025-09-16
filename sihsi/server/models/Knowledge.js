import mongoose from "mongoose";

const KnowledgeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Knowledge = mongoose.model("Knowledge", KnowledgeSchema);

export default Knowledge;
