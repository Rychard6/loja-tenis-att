import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { IoCallOutline, IoLogoWhatsapp } from "react-icons/io5";

export default function CorpoDetalhes(){

    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const images = [
      './tenis.jpg',
      'caminho/para/imagem2.jpg',
      'caminho/para/imagem3.jpg',
      'caminho/para/imagem4.jpg',
      'caminho/para/imagem5.jpg',
      'caminho/para/imagem6.jpg',
      'caminho/para/imagem7.jpg',
      'caminho/para/imagem8.jpg'
    ];
  
    const openModal = (image) => {
      setModalImage(image);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalImage('');
      setModalOpen(false);
    };
  

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
                {images.map((image, index) => (
                <div
                    key={index}
                    className="h-36 w-28 bg-white border-none rounded-lg overflow-hidden"
                    onClick={() => openModal(image)}
                >
                    <img src={image} alt={`Imagem ${index}`} className="w-full h-full object-cover cursor-pointer" />
                </div>
                ))}
                </div>
                <Modal open={modalOpen} onClose={closeModal} center>
                    <img src={modalImage} alt="Imagem Ampliada" className="max-h-screen mx-auto" />
                </Modal>
                </div>

            </div>

        {/**Area comentarios */}
            <div className='flex justify-center items-center mt-16 mb-40'>
                <div className='w-auto h-auto'>
                    <button className="w-34 text-white bg-pink-600 border border-white py-1 px-2 rounded-md bg-transparent hover:bg-white hover:text-black transition ml-4">
                        <IoCallOutline className='text-center text-3xl ml-10'/>
                        Me ligue agora
                    </button>
                    <button className="w-34 text-white  bg-green-700 border border-white py-1 px-2 rounded-md bg-transparent hover:bg-white hover:text-black transition ml-4">
                        <IoLogoWhatsapp className='text-3xl ml-10' />
                        Conversar agora
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}