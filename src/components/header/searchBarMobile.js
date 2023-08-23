import React, { useState } from "react";
import { TfiSearch, TfiClose } from "react-icons/tfi";

export default function SearchBarMobile() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="relative">
      {isSearchOpen ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-stretch z-50">
          <div className="bg-opacity-70 bg-gray-500 rounded-lg p-4 w-full sm:w-80">
            {/* Conteúdo da área de pesquisa */}
            <div className="flex items-center space-x-2">
              <input
                className="flex-1 border rounded-md py-2 px-3"
                type="text"
                placeholder="Faça a sua pesquisa"
              />
              <TfiClose
                className="text-2xl text-pink-500 cursor-pointer"
                onClick={toggleSearch}
              />
            </div>
          </div>
        </div>
      ) : (
        <TfiSearch
          className="text-2xl text-pink-500 cursor-pointer"
          onClick={toggleSearch}
        />
      )}
    </div>
  );
}
