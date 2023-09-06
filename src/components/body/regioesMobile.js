import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";

const locations = [
  "Asa Norte", "Asa Sul", "Águas Claras", "Lago Sul", "Lago Norte",
  "Sudoeste", "N. Bandeirantes", "Guará", "Taguatinga", "Vicente Pires",
  "Ceilândia", "Samambaia", "Riacho Fundo", "Rec. das Emas", "Santa Maria",
  "Gama", "São Sebastião", "Paranoá", "Planaltina", "Sobradinho",
  "Brazlândia", "Candangolândia"
];

export default function RegioesMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-pink-500 text-white py-4 px-6 mt-32 rounded-3xl w-52 shadow-2xl cursor-pointer hover:bg-red-300 font-serif text-lg"
        onClick={toggleMenu}
      >
        Mostrar Regiões
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex justify-center bg-black bg-opacity-50 rounded-lg p-4 pt-28 w-full h-screen sm:w-80">
            <div className="flex flex-col space-y-2" style={{ maxHeight: "70vh", overflowY: "scroll" }}>
                <div className="flex justify-end absolute top-8 right-4">
                    <button className="bg-pink-800 btn fixed text-white text-lg hover:bg-red-600 text-white py-2 px-4 rounded-md"
                    onClick={closeMenu}
                                  >
                    <TfiClose />
                                  </button>
                </div>
              {locations.map((location, index) => (
                <Link
                  key={index}
                  to={`/destino/${location}`} // Substitua "/destino" pelo caminho desejado
                  className="btn bg-pink-400 block hover:no-underline py-2 px-4 hover:bg-gray-100 cursor-pointer text-white text-lg focus:text-black"
                  onClick={closeMenu} // Fechar o menu quando um link for clicado
                >
                  {location}
                </Link>
              ))}

            </div>
          </div>
        </div>
      )}
    </div>
  );  
}
