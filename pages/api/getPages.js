import connectDb from "../../lib/mongodb";
import PageList from "../../models/PageModel";

export default async function getPages(req, res) {
  const { userEmail } = req.query;
  if (req.method === "GET") {
    try {
      await connectDb();

      //   const item = await Cart.find({ userEmail: email });
      // const cart = await db.collection("carts").findOne({ userEmail });
      const existingPageList = await PageList.findOne({ userEmail });
      if (existingPageList) {
        const data = existingPageList.items;
        console.log(data);
        res.status(200).json({ data });
      } else {
        const data = [{ message: "No Pages Items", empty: true }];
        res.status(400).json({ data });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
