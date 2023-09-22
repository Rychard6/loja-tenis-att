import React from "react";
import { useMediaQuery } from "react-responsive";
import Regioes from "./Regioes";
import Corpo from "./corpo";
import RegioesMobile from "./regioesMobile";

export default function Body({filterType}) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isMobile ? ( // Renderizar RegioesMobile apenas quando for mobile
        <div className="">
          <RegioesMobile />
        </div>
      ) : ( // Renderizar Regioes apenas quando não for mobile
        <div className="">
          <Regioes />
        </div>
      )}
      <Corpo filterType={filterType} />
    </>
  );
}
