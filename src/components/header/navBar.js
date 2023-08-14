import React, { useState } from 'react';
import SearchBar from './search-bar'
import banner from "../imagens/banner.png";
import Menu from './menu';
import '../../index.css'

export default function NavBar(){
    const [isDivVisible, setDivVisibility] = useState(false);

    const toggleDiv = () => {
      setDivVisibility(!isDivVisible);
    };
    
    return(
        <>
        <div className="fixed top-0 left-0 w-full bg-nav text-neutral-content flex justify-between items-center p-4">
            <div className="fixed flex items-center space-x-4">
                <div className="dropdown">

                    {/* menuOpem */}  
                    <label className="swap swap-rotate p-2  w-10 h-10 rounded-full border border-white">

                {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onClick={toggleDiv}/>
                        
                        {/* hamburger icon */}
                        <svg className="swap-off fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        
                        {/* close icon */}
                        <svg className="swap-on fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>


    
                </div>
    
            </div>

            {/* banner */}
            <img className="btn btn-ghost normal-case text-xl ml-80 h-12 w-120 pl-64" src={banner} alt="Banner" />

            {/* buscar e darkMode */}
            <div className="flex items-center space-x-4">

                <SearchBar />

            </div>
        </div>
    {isDivVisible && (
        <div>
            <Menu/>
        </div>
    )}        
    </>
    );
}
