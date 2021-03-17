const { Schema, model } = require("mongoose");

const EconomySchema = Schema({
  userID: String,
  coins: String,
  lastCollected: Number,
});

module.exports = model("economy-datas", EconomySchema);
