import 'daisyui/dist/full.css';
import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import App from './App';
import './index.css';
import Context from './context/userContext';
import {GoogleOAuthProvider} from '@react-oauth/google'

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
                path: "/home/:type",
                element: <Home filterType="gender"/>,
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
                path: "/produto/:id",
                element: <Detalhes />,
            },
            {
                path: "/cidade/:cidade",
                element: <Home filterType="city" />,
            },
            
        ],

    },
    

])


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Encapsule toda a renderização dentro do ReactDOM.render()
root.render(
    <Context>
        <GoogleOAuthProvider clientId="751407083928-smbnqbpsa3fhbabr9c141jteeu2c8esf.apps.googleusercontent.com">
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </GoogleOAuthProvider>
    </Context>
);
