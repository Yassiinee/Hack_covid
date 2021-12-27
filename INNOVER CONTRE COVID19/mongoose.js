const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:........@..............mongodb.net/INNOVER_CONTRE_COVID19?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
