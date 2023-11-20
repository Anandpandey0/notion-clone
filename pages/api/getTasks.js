import connectDb from "../../lib/mongodb";
import TodoList from "../../models/TaskModel";

export default async function getTasks(req, res) {
  const { userEmail } = req.query;
  console.log(userEmail);
  if (req.method === "GET") {
    try {
      await connectDb();
      const existingTodoList = await TodoList.findOne({ userEmail: userEmail });
      // console.log(existingTodoList);
      if (existingTodoList) {
        // console.log(existingTodoList);
        const data = await existingTodoList.items;
        return res.status(200).json(data);
      } else {
        return res
          .status(400)
          .json({ message: "No Task Items", empty: true, data: [] });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
