const { formSchema } = require("@whatsapp-clone-chakra-ui/common");

const validateForm = (req, res) => {
  const formData = req.body;
  formSchema
    .validate(formData)
    .catch((err) => {
      res.status(422).send();
      console.error(err.error);
    })
    .then((valid) => {
      if (valid) {
        console.log("form is good");
      }
    });
};

module.exports = validateForm;
