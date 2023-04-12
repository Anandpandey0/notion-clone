import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PageView = ({ selectedPage, onUpdatePageTitle, onUpdatePageContent }) => {
  const [newTitle, setNewTitle] = useState(selectedPage.title);
  const [newContent, setNewContent] = useState(selectedPage.content);
  const router = useRouter();
  useEffect(() => {
    setNewTitle(selectedPage.title);
    setNewContent(selectedPage.content);
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
  }, [selectedPage]);

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    // console.log(event.target.value);
    setNewContent(event.target.value);
  };
  const handleTitleBlur = () => {
    if (newTitle.trim().length > 0 && newTitle !== selectedPage.title) {
      const limitedTitle = newTitle.slice(0, 12);
      onUpdatePageTitle(selectedPage.id, limitedTitle);
    } else {
      onUpdatePageTitle(selectedPage.id, "Untitled");
      setNewTitle("");
    }
  };
  const handleContentBlur = () => {
    onUpdatePageContent(selectedPage.id, newContent);
  };

  return (
    <div className="cursor-pointer w-full h-full  overflow-y-auto ">
      <div className="pt-24  w-2/3 mx-auto h-full  ">
        <input
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          placeholder="Untitled"
          onBlur={handleTitleBlur}
          className=" w-full bg-gray-200 outline-none border-2 border-solid text-[60px] p-2"
        />
        <textarea
          value={newContent}
          onChange={handleContentChange}
          onBlur={handleContentBlur}
          className="w-full outline-none text-xl mt-4  h-full p-4 resize-none  line-clamp-8"
        />
      </div>
    </div>
  );
};

export default PageView;
