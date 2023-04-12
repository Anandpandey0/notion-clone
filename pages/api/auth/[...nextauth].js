import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../models/UserModel";
import connectDb from "../../../lib/mongodb";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    //   async signIn(user, account, profile) {
    //     try {
    //       await client.connect();
    //       const db = client.db(dbName);
    //       const collection = db.collection("users");

    //       const result = await collection.findOneAndUpdate(
    //         { email: user.user.email },
    //         { $set: { email: user.user.email, name: user.user.name } },
    //         { upsert: true, returnOriginal: false }
    //       );
    //       // console.log(profile);
    //       if (!result.ok) {
    //         throw new Error("Failed to update user credentials");
    //       }
    //     } catch (error) {
    //       console.error(error);
    //       return false;
    //     }
    //     return true;
    //   },
    // },
    async signIn(user, account, profile) {
      let userObj = null;

      // Check if user already exists in the database
      try {
        userObj = await User.findOne({ email: user.user.email });
      } catch (error) {
        console.error("Error finding user:", error);
        return false;
      }

      // If user does not exist in the database, create a new document
      if (!userObj) {
        const newUser = new User({
          name: user.user.name,
          email: user.user.email,
          image: user.user.image,
        });

        try {
          await newUser.save();
          return true;
        } catch (error) {
          console.error("Error saving user:", error);
          return false;
        }
      }
      return true;
    },
  },
});
