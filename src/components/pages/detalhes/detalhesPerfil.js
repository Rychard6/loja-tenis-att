export default function CorpoDetalhes(){
    return(
        <>
        <div className="block pt-40 pl-16 min-h-screen justify-center">

            <div className="w-72 whitespace-nowrap h-auto border-b-4 border-pink-700 rounded-tl-lg">
                <h1 className="text-white text-lg pt-6"><strong>Detalhes do Perfil</strong></h1>
            </div>

            <div className="flex justify-between w-full">
                <div className="w-2/4 ">
                    <div className=" w-full h-auto flex justify-center items-center border-none rounded-bl-lg rounded-r-lg">
                        <div className=" w-2/4 auto border-none rounded-bl-lg">
                            <div className="whitespace-nowrap pt-4 pl-4 text-white">
                                <h1>idade : </h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white border-none rounded-l-md">
                                <h1>Peso : </h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pl-4 text-white bg-">
                                <h1>Cel :</h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white rounded-l-md">
                                <h1>Mora só : </h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pl-4 text-white bg-">
                                <h1>Valor: </h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white rounded-l-md">
                                <h1>Oral sem : </h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pb-4 pl-4 text-white bg-">
                                <h1>Cartão : </h1>
                            </div>
                        </div>
                        <div className=" w-2/4 h-auto border-none rounded-r-lg">
                            <div className="whitespace-nowrap pt-4 pl-4 text-white bg-">
                                <h1>Cidade : </h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white rounded-r-md">
                                <h1>Altura : </h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pl-4 text-white bg-">
                                <h1>WhatsApp : </h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white rounded-r-md">
                                <h1>Atende : </h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pl-4 text-white bg-">
                                <h1>Horário :</h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white rounded-r-md">
                                <h1>Anal : </h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pb-4 pl-4 text-white bg-">
                                <h1>WhatsApp: </h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-72 whitespace-nowrap h-auto border-b-4 border-pink-700 rounded-tl-lg">
                        <h1 className="text-white text-lg pt-6"><strong>Descrição</strong></h1>
                    </div>
                    <div className=" w-full h-auto flex justify-center items-center border-none rounded-bl-lg rounded-r-lg">
                        <p className="text-white">testo base sem prevsadfg er eqre t4mjgeoir ertn3ut q3 3erj 3t 3e tqt 3q5rt q3t eqrt qery 4eqy 4ey 4e y4wy w4ry w4ry wry wr4y er wergj erioewrt 3et iern qewrj er mngqer er er qer  </p>
                    </div>
                </div>
            

                {/*imagens*/}
                <div className="flex justify-center items-center w-1/2 ">
                <div className="grid grid-cols-4 gap-4">
                    <div className="h-36 w-28 bg-white border-none rounded-lg overflow-hidden">
                        <img src="caminho/para/imagem1.jpg" alt="Imagem 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-36 w-28 bg-white border-none rounded-lg overflow-hidden">
                        <img src="caminho/para/imagem2.jpg" alt="Imagem 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-36 w-28 bg-white border-none rounded-lg overflow-hidden">
                        <img src="caminho/para/imagem3.jpg" alt="Imagem 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-36 w-28 bg-white border-none rounded-lg overflow-hidden">
                        <img src="caminho/para/imagem4.jpg" alt="Imagem 4" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-36 w-28 bg-white border-none rounded-lg overflow-hidden">
                        <img src="caminho/para/imagem5.jpg" alt="Imagem 5" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-36 w-28 bg-white border-none rounded-lg overflow-hidden">
                        <img src="caminho/para/imagem6.jpg" alt="Imagem 6" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-36 w-28 bg-white border-none rounded-lg overflow-hidden">
                        <img src="caminho/para/imagem7.jpg" alt="Imagem 7" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-36 w-28 bg-white border-none rounded-lg overflow-hidden">
                        <img src="caminho/para/imagem8.jpg" alt="Imagem 8" className="w-full h-full object-cover" />
                    </div>
                </div>

                </div>

            </div>
        </div>
        </>
    );
}