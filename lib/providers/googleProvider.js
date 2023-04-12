import { connectDb } from "../mongodb";
import User from "../../models/UserModel";
import GoogleProvider from "next-auth/providers/google";

const googleProvider = new GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});

export default googleProvider;

export async function signInCallback(user, account, metadata) {
  const { email } = user;
  const { db } = await connectDb();
  let existingUser = await User.findOne({ email });
  if (!existingUser) {
    existingUser = await User.create({
      email,
      name: user.name,
      image: user.image,
    });
  }
  return existingUser;
}
