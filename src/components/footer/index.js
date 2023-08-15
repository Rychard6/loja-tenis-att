import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-b-2 top-0 w-full flex items-center h-20 justify-center p-0.5rem text-1.5rem bg-fundo">
      <ul className="flex items-center">
        <li className="mr-6">
          <FaWhatsapp className="text-green-500 text-2xl cursor-pointer" />
        </li>
        <li className="mr-6">
          <FaFacebook className="text-blue-500 text-2xl cursor-pointer" />
        </li>
        <li className="mr-6">
          <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
        </li>
        <li className="mr-6">
          <FaTwitter className="text-blue-500 text-2xl cursor-pointer" />
        </li>
      </ul>
    </footer>
  );
}
