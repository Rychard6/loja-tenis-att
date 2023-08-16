import 'daisyui/dist/full.css';
import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import App from './App';
import './index.css';

//configurando o router
import {createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./components/pages/index"
import Anuncie from './components/pages/anuncie';
import Sobre from './components/pages/sobre';
import Detalhes from './components/pages/detalhes';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Home />,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/anuncie",
                element: <Anuncie />
            },
            {
                path: "/sobre",
                element: <Sobre />,
            },
            {
                path: "/acompanhante/:id",
                element: <Detalhes />,
            }
        ],

    },
    

])


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<RouterProvider router={router} />);
