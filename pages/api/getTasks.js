import connectDb from "../../lib/mongodb";
import TodoList from "../../models/TaskModel";

export default async function getTasks(req, res) {
  const { userEmail } = req.query;
  if (req.method === "GET") {
    try {
      await connectDb();

      //   const item = await Cart.find({ userEmail: email });
      // const cart = await db.collection("carts").findOne({ userEmail });
      const existingTodoList = await TodoList.findOne({ userEmail });
      if (existingTodoList) {
        const data = existingTodoList.items;

        res.status(200).json({ data });
      } else {
        const data = [{ message: "No Task Items", empty: true }];
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
