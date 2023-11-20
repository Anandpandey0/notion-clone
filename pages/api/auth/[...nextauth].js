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
    async signIn(user, account, profile) {
      let userObj = null;
      await connectDb();

      // Check if user already exists in the database
      try {
        // console.log(user.user.email);
        userObj = await User.findOne({ email: user.user.email }, null, {
          maxTimeMS: 50000,
        });
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
