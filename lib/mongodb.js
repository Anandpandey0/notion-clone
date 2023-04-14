import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://anandpandey1052:davsharma@notion-clone.tebz7ho.mongodb.net/?retryWrites=true&w=majority"
  );
  // console.log("Connected to database");
};

export default connectDb;
