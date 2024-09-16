const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String },
  github: { type: String },
  tag: { type: String, required: true },
  logo: { type: [String], required: true },
  modal: {
    context: { type: String, required: true },
    learned: { type: String, required: true },
  },
});

module.exports = mongoose.model("Project", projectSchema);
