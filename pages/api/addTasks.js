import connectDb from "../../lib/mongodb";
import TodoList from "../../models/TaskModel";
// connectDb.catch((error) => console.error(error));

export default async function AddTodos(req, res) {
  const { userEmail, items } = req.body;
  await connectDb();

  try {
    // Try to find an existing todo list with the given userEmail
    const existingTodoList = await TodoList.findOne({ userEmail });

    if (existingTodoList) {
      // If an existing todo list was found, update its items
      existingTodoList.items = items;
      const updatedTodoList = await existingTodoList.save();
      res.status(200).json({ success: true, todoList: updatedTodoList });
    } else {
      // If no existing todo list was found, create a new one
      const todoList = new TodoList({
        userEmail,
        items,
      });
      const updatedTodoList = await todoList.save();
      res.status(201).json({ success: true, updatedTodoList: todoList });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error saving todo items" });
  }
}
