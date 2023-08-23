import React, { useState, useEffect } from 'react';
import api from '../../../API/api';
import Modal from 'react-responsive-modal';
import { useParams } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { IoCallOutline, IoLogoWhatsapp } from "react-icons/io5";

export default function CorpoDetalhes(){

    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
  
    const openModal = (image) => {
      setModalImage(image);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalImage('');
      setModalOpen(false);
    };


    const [product, setProduct] = useState({});

    const params = useParams() 

    useEffect(() => {
        async function fetchProduct() {
            try {
                const fetchedProduct = await api.getProduct(params.id);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProduct();
    }, []);


    return product.url?(
        <>
        <div className='pt-40 pl-16'>
            <div className="w-72 whitespace-nowrap h-auto border-b-4 border-pink-700 rounded-tl-lg">
                <h1 className="text-white text-lg pt-6"><strong>Acompanhante</strong></h1>
            </div>
            <div className="whitespace-nowrap pt-4 pl-4 text-white">
                <h1  className='text-3xl font-serif italic font-medium uppercase'>{product.nome}, {product.idade} Anos</h1>
                
            </div>
        </div>
        <div className="block pt-8 pl-16 min-h-screen justify-center">

            <div className="w-72 whitespace-nowrap h-auto border-b-4 border-pink-700 rounded-tl-lg">
                <h1 className="text-white text-lg pt-6"><strong>Detalhes do Perfil</strong></h1>
            </div>
            
            <div className="flex justify-between w-full">
                <div className="w-2/4 ">
                    <div className=" w-full h-auto flex justify-center items-center border-none rounded-bl-lg rounded-r-lg">
                        <div className=" w-2/4 auto border-none rounded-bl-lg">
                            <div className="whitespace-nowrap pt-4 pl-4 text-white">
                                <h1  className='text-lg font-mono'>idade : {product.idade}</h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white border-none rounded-l-md">
                                <h1 className='text-lg font-mono'>Peso : {product.peso}</h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pl-4 text-white bg-">
                                <h1 className='text-lg font-mono'>Cel : {product.telefone}</h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white rounded-l-md">
                                <h1 className='text-lg font-mono'>Mora só : {product.MoraSo}</h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pl-4 text-white bg-">
                                <h1 className='text-lg font-mono'>Valor : {product.valor}</h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white rounded-l-md">
                                <h1 className='text-lg font-mono'>Oral sem : {product.oral}</h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pb-4 pl-4 text-white bg-">
                                <h1 className='text-lg font-mono'>Cartão : {product.cartao}</h1>
                            </div>
                        </div>
                        <div className=" w-2/4 h-auto border-none rounded-r-lg">
                            <div className="whitespace-nowrap pt-4 pl-4 text-white bg-">
                                <h1 className='text-lg font-mono'>Cidade : {product.cidade}</h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white rounded-r-md">
                                <h1 className='text-lg font-mono'>Altura : {product.altura}</h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pl-4 text-white bg-">
                                <h1 className='text-lg font-mono'>WhatsApp : {product.whatsapp}</h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white rounded-r-md">
                                <h1 className='text-lg font-mono'>Atende : {product.atende}</h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pl-4 text-white bg-">
                                <h1 className='text-lg font-mono'>Horário : {product.horario}</h1>
                            </div>
                            <div style={{backgroundColor:"#1e293b"}} className="whitespace-nowrap pt-4 pl-4 text-white rounded-r-md">
                                <h1 className='text-lg font-mono'>Anal : {product.anal}</h1>
                            </div>
                            <div className="whitespace-nowrap pt-4 pb-4 pl-4 text-white bg-">
                                <h1 className='text-lg font-mono'>Beija : {product.beija}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-72 whitespace-nowrap h-auto border-b-4 border-pink-700 rounded-tl-lg">
                        <h1 className="text-white text-lg pt-6"><strong>Descrição</strong></h1>
                    </div>
                    <div className=" w-full h-auto flex justify-center items-center border-none rounded-bl-lg rounded-r-lg">
                        <p className="text-white pr-96 pt-4 text-lg font-mono">{product.descricao}</p>
                    </div>
                </div>
            

                {/*imagens*/}
                <div className="flex justify-center w-1/2 pt-8">
                <div className="grid grid-cols-4 gap-4">
                {product.url.map((imagem, index) => (
                <div
                    key={index}
                    className="h-36 w-28 bg-white border-none rounded-lg overflow-hidden"
                    onClick={() => openModal(imagem)}
                >
                    <img src={imagem} alt={`Imagem ${index}`} className="w-full h-full object-cover cursor-pointer" />
                </div>
                ))}
                </div>
                <Modal open={modalOpen} onClose={closeModal} center>
                    <img src={modalImage} alt="Imagem Ampliada" className="max-h-screen mx-auto" />
                </Modal>
                </div>
              

            </div>

        {/**Area comentarios */}
            <div className='flex justify-center items-center mt-40 mb-40'>
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
    ):<p>carregandoo</p>
}