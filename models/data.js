const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: String,
    message:{ type: Object}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
