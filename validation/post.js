const Validator = require("validator");
const isEmpty = require("./is-empty");
// import isEmpty from "./is-empty";

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (Validator.isEmpty(data.text)) {
    errors.text = "text field is required";
  }

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post length must be between 10 and 300 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
