import React from 'react';
import NavBar from './components/header/navBar';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';

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
