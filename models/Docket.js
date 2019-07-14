const mongoose = require('mongoose');

const Docket = mongoose.Schema({
  tagList: [{ type: String }],
  title: String,
  body: String,
});

module.exports = mongoose.model();
