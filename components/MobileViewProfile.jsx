import React from "react";
import { BiMenu } from "react-icons/bi";

const MobileViewProfile = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="">
      <button
        className="hover:bg-gray-200 rounded-full p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <BiMenu size="1.5rem" />
      </button>
    </div>
  );
};

export default MobileViewProfile;
