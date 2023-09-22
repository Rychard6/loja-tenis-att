import React from 'react';
import { Link } from 'react-router-dom';
import { conversorCidade } from './conversorCidade';

export default function Regioes() {
    const locations = [
        "Asa Norte", "Asa Sul", "Águas Claras", "Lago Sul", "Lago Norte",
        "Sudoeste", "N. Bandeirantes", "Guará", "Taguatinga", "Vicente Pires",
        "Ceilândia", "Samambaia", "Riacho Fundo", "Rec. das Emas", "Santa Maria",
        "Gama", "São Sebastião", "Paranoá", "Planaltina", "Sobradinho",
        "Brazlândia", "Candangolândia"
    ];


    const buttons = locations.map((location, index) => (
        <Link to={`/cidade/${conversorCidade[location]}`}>
            <button key={index} className="btn w-40 h-12 m-1 border-white bg-black text-white hover:text-black hover:border-pink-500 hover: border-3 ">
                {location}
            </button>
        </Link>
    ));

    return (
        <div className="flex flex-wrap pt-36 mx-auto text-center rounded-md shadow  justify-center " style={{ width: '75%' }}>
            {buttons}
        </div>
    );
}
