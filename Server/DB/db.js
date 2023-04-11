const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/NotesOnCloud?directConnection=true";

const ConnectToMongo = () => {
  try {
    mongoose.connect(mongoURI);
    console.log("connected success");
  } catch (error) {
    console.log("Not Connected");
  }
};
module.exports = ConnectToMongo;
