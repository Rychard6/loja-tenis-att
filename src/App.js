import React from 'react';
import NavBar from './components/header/navBar';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import CorpoDetalhes from "./components/pages/detalhes/corpoDetalhes"

function App() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;
