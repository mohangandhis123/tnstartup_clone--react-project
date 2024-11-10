const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
});

const FormData = mongoose.model("FormData", formDataSchema);
module.exports = FormData;
