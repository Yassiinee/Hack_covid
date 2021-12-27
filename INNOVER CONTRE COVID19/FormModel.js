const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    ville: {
      type: String,
      required: true,
    },
    titreProjet: {
      type: String,
      required: true,
    },

    typeParticipation: {
      type: String,
      required: true,
    },
    condidature: {
      type: String,
      required: true,
    },
    lien: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
