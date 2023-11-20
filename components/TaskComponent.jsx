import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { useSession, signOut } from "next-auth/react";
import saveTodoItems from "../utils/AddTasks";

import { AiOutlinePlus } from "react-icons/ai";
import TodoItem from "./TodoItem";
import getTasksByEmail from "../utils/GetTasks";

const TaskComponent = () => {
  const [todoItems, setTodoItems] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      console.log("Fetching");

      (async () => {
        const data = await getTasksByEmail(session.user.email);
        if (data.length > 0) {
          setTodoItems(data);
        }
      })();
    }
  }, []);

  const saveTodo = () => {
    // console.log("Saving");
  };

  const handleAddTodo = async () => {
    const newTodo = { id: todoItems.length + 1, title: "Untitled" };
    // console.log(newTodo);
    const updatedTodoItems = [...todoItems, newTodo];
    setTodoItems(updatedTodoItems);
    saveTodo(updatedTodoItems);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodoItems = todoItems.filter((todo) => todo._id !== id);
    setTodoItems(updatedTodoItems);
    saveTodo(updatedTodoItems);
  };
  const handleUpdateTitle = (id, title) => {
    // console.log("id ", id);
    const updatedTodoItems = todoItems.map((todo) =>
      todo._id === id ? { ...todo, title } : todo
    );

    // console.log(updatedTodoItems);
    setTodoItems(updatedTodoItems);
    saveTodo(updatedTodoItems); // Save the updated todo items
  };
  return (
    <>
      {/* {console.log(todoItems)} */}
      <div className=" h-screen overflow-y-auto w-full lg:ml-auto">
        <h1 className="flex items-center  p-2">
          <TiTick />
          Task List
        </h1>
        <div className="lg:mt-24 lg:ml-24  h-screen w-[2/3] lg:w-[40vw] p-2">
          <h1 className="font-bold text-4xl flex items-center">
            {" "}
            <TiTick />
            <span>Task List</span>
          </h1>
          <p className="text-sm">
            Use this template to track your personal tasks.
          </p>
          <p className="text-sm">
            Click <span>+ New</span> to create a new task directly on this
            board.
          </p>
          <p className="text-sm">
            Click an existing task to add additional context or subtasks.
          </p>
          <div className="flex items-center gap-2 font-semibold hover:bg-gray-100 w-fit p-1 cursor-pointer border-b-2 border-solid border-black mt-6">
            <BsLayoutThreeColumns />
            Board view
          </div>
          <div className=" ">
            <div>
              <div className="flex items-center p-2">
                <h1 className="bg-pink-300 px-2">To Do</h1>
                <p className="ml-2">{todoItems.length}</p>
                <button
                  className="ml-auto hover:bg-gray-100 p-1"
                  onClick={handleAddTodo}
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <div className="p-2 flex flex-col gap-y-2 ">
                {todoItems &&
                  todoItems.map((todo) => (
                    <TodoItem
                      key={todo._id}
                      id={todo._id}
                      title={todo.title}
                      onDelete={handleDeleteTodo}
                      onUpdateTitle={handleUpdateTitle}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskComponent;
