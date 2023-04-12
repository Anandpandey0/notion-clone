import User from "../../models/UserModel";
import connectDb from "../../lib/mongodb";

// connectDb.catch((error) => console.error(error));

export default async function RegisterUser(req, res) {
  const { name, email, image } = req.body;

  await connectDb();
  //   console.log("reguster");

  try {
    const user = new User({
      name,
      email,
      image,
    });
    await user.save();
    res.status(201).json({
      name: user.name,
      email: user.email,
      image: user.image,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
