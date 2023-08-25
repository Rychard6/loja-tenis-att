import React, { useState } from 'react';
import SearchBar from './search-bar'
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import '../../index.css'
import SearchBarMobile from './searchBarMobile';

export default function NavBar(){
    const [isDivVisible, setDivVisibility] = useState(false);

    const toggleDiv = () => {
      setDivVisibility(!isDivVisible);
    };



    const isMobile = useMediaQuery({ maxWidth: 767 }); // Define um breakpoint para telas menores
    
    return(
        <>
        <div className="fixed flex justify-between items-center w-full bg-nav text-neutral-content p-4 z-50">
            <div className="flex items-center  space-x-4">

                    {/* menuOpem */}  
                    <label className="swap swap-rotate p-2  w-10 h-10">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onClick={toggleDiv}/>
                        
                        {/* hamburger icon */}
                        <svg className="swap-off fill-current text-pink-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style={{ width: '30px', height: '30px' }}>
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                        </svg>

                        <svg className="swap-on fill-current text-pink-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style={{ width: '30px', height: '30px' }}>
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                        </svg>

                    </label>
    
            </div>

            {/* banner */}
            <div className='flex justify'>
                <h1 className='text-white md:pl-72'>site de produtos</h1>
            </div>

            {/* buscar e darkMode */}
            <div className="hidden sm:flex sm:items-center sm:space-x-4">

                <SearchBar />

            </div>
            {isDivVisible && (
                <div>
                    <nav className={`fixed top-20 left-0 z-40 w-full ${isMobile ? 'h-screen bg-gray-300 bg-opacity-50' : ''}`}>
                        <div className={`${isMobile ? 'flex items-center justify-center h-full' : 'flex items-center justify-center h-12'}`}>
                            <div className={`btn-group md:flex-row flex-col ${isMobile ? 'h-3/4 md:h-auto' : ''}`}>
                                <Link to='/home/all' className="bg-pink-400 md:bg-white text-black btn w-40 hover:bg-hb mb-2 md:mb-0 " onClick={toggleDiv}>Home</Link>
                                <Link to='/home/FEMININO' className="bg-pink-400 md:bg-white text-black btn w-40 hover:bg-hb mb-2 md:mb-0" onClick={toggleDiv}>FEMININO</Link>
                                <Link to='/home/MASCULINO' className="bg-pink-400 md:bg-white text-black btn w-40 hover:bg-hb mb-2 md:mb-0 " onClick={toggleDiv}>MASCULINO</Link> 
                                <Link to='/home/INFANTIL' className="bg-pink-400 md:bg-white text-black btn w-40 hover:bg-hb mb-2 md:mb-0 " onClick={toggleDiv}>INFANTIL</Link>
                                <Link to="/anuncie" className="bg-pink-400 md:bg-white text-black btn w-40 hover:bg-hb mb-2 md:mb-0 " onClick={toggleDiv}>Anuncie</Link>
                                <Link to='/home/NOVIDADES' className="bg-pink-400 md:bg-white text-black btn w-40 hover:bg-hb mb-2 md:mb-0 " onClick={toggleDiv}>NOVIDADES</Link>
                                <Link to="/sobre" className="bg-pink-400 md:bg-white text-black btn w-40 hover:bg-hb mb-2 md:mb-0 " onClick={toggleDiv}>Sobre</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                )}  
            {/*pesquisa em mobile */}
            <div className='sm:hidden'>
                <SearchBarMobile />
            </div>
        </div>
          
    </>
    );
}
