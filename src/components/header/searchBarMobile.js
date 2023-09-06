import React, { useState, useEffect, useMemo } from "react";
import { Link, Routes, useParams } from "react-router-dom";
import api from '../../API/api';
import { TfiSearch, TfiClose } from "react-icons/tfi";
import { MdLocationPin } from "react-icons/md";
import Detalhes from '../pages/detalhes';

export default function SearchBarMobile() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [busca, setBusca] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  

  const params = useParams()

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await api.getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [params.id]);

  const nomesFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    console.log(products)
    return products
      .filter((product) => product.nome.toLowerCase().includes(lowerBusca));
  }, [busca, products]);  

  return products.length? (
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
                value={busca}
                onChange={(ev) => setBusca(ev.target.value)}
              />
              <TfiClose
                className="text-2xl text-pink-500 cursor-pointer"
                onClick={toggleSearch}
              />
            </div>
            <div className="pt-8 pl-6 flex flex-col max-h-screen overflow-y-auto" onClick={toggleSearch}>
          <ul>
          {nomesFiltrados.map((product, index) => (
            <Link to={`/produto/${product.id}`} key={index} className="pt-4 flex items-center"
            >
              <img src={product.url[0]} alt={product.nome} className="w-32 h-32 mr-2 rounded-md" />
              <div>
                <span className="pl-4 text-pink-500 text-2xl font-mono font-semibold">{product.nome}</span>
                <br />
                <span className="text-white "><MdLocationPin className="text-pink-500 inline-block mr-1" />{product.cidade}</span>
              </div>
            </Link>
          ))}
          </ul>
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
  ): <p>carregando</p>
}
