import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";

const TodoItem = ({ id, title, onDelete, onUpdateTitle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleTitleBlur = () => {
    if (newTitle.trim().length > 0 && newTitle !== title) {
      onUpdateTitle(id, newTitle);
    } else {
      setNewTitle(title);
    }
    setIsEditing(false);
  };
  return (
    <div className="flex border-2 border-solid border-gray-200 p-2 items-center gap-x-2 h-full">
      {isEditing ? (
        <div className="flex items-center gap-2">
          <HiOutlineDocumentText />
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            className=" w-full bg-gray-200 outline-none "
          />
        </div>
      ) : (
        <span>{title}</span>
      )}
      <div className="flex justiif-end items-center ml-auto">
        <button
          onClick={handleEdit}
          className="hover:bg-gray-200  h-full py-1 px-2"
        >
          <BsPencilSquare />
        </button>
        <button
          onClick={handleDelete}
          className="hover:bg-gray-200  h-full py-1 px-2"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
