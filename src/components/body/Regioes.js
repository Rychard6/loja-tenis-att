import React from 'react';

export default function Regioes() {
    const locations = [
        "Asa Norte", "Asa Sul", "Águas Claras", "Lago Sul", "Lago Norte",
        "Sudoeste", "N. Bandeirantes", "Guará", "Taguatinga", "Vicente Pires",
        "Ceilândia", "Samambaia", "Riacho Fundo", "Rec. das Emas", "Santa Maria",
        "Gama", "São Sebastião", "Paranoá", "Planaltina", "Sobradinho",
        "Brazlândia", "Candangolândia"
    ];

    const buttons = locations.map((location, index) => (
        <button key={index} className="btn w-40 h-12 m-1 border border-white bg-black text-white hover:text-black">
            {location}
        </button>
    ));

    return (
      <div className="flex flex-wrap mt-20 mx-auto text-center rounded-md shadow bg-black justify-center " style={{ width: '75%' }}>
          {buttons}
      </div>
    );
}
