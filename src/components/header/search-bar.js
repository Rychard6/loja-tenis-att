import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";

export default function Search() {
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative group">
      <input
        className={` w-80 py-2 border-hb rounded-md focus:ring focus:border-bh   ${
          isHovered || inputValue ? "opacity-100" : "opacity-0"
        } focus:text-black transition-opacity duration-300`}
        type="text"
        placeholder="Faça a sua pesquisa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onBlur={() => {
          if (!inputValue) {
            setIsHovered(false);
          }
        }}
      />
      <div
        className={"border-ligth:bg-slate-100 rounded-full w-10 h-10 absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer flex items-center justify-center"}
      >
        <TfiSearch className={`text-white font-weight-bold text-xl w-6 h-6 ${isHovered || inputValue ? 'text-red-500' : ''}`} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}
