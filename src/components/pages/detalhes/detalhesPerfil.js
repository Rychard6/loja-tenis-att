import React, { useState, useEffect } from 'react';
import api from '../../../API/api';
import Modal from 'react-responsive-modal';
import { useParams } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { IoCallOutline, IoLogoWhatsapp } from "react-icons/io5";
import Comentarios from './comentarios';

export default function CorpoDetalhes() {


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
    }, [params.id]);

    //whatsapp redirecionamento
    console.log(product.telefone)
    const openWhatsApp = () => {
        const phoneNumber = product.telefone;
        const message = encodeURIComponent('Olá, estou vindo do seu anuncio no Lojinha Top');
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.open(whatsappLink, '_blank');
      };


    return product.url ? (
        <>
            <div className='md:hidden'>
                <img src={product.url[0]} className='pt-20 h-96 w-full'>

                </img>
                <div className='w-full h-auto flex justify-center items-center pt-4 pr-12'>
                    <button className="w-34 text-white bg-pink-600 border border-white py-1 px-2 rounded-md bg-transparent hover:bg-white hover:text-black transition ml-8 opacity-50">
                        <IoCallOutline className=' text-center text-3xl ml-10 text-blue-400 opacity-75' />
                        Me ligue agora
                    </button>
                    <button className="w-34 text-white  bg-green-700 border border-white py-1 px-2 rounded-md bg-transparent hover:bg-white hover:text-black transition ml-4 opacity-50">
                        <IoLogoWhatsapp className='text-3xl ml-10 text-green-600' />
                        Comprar agora
                    </button>
                </div>
            </div>

            <div className='pt-8 md:pt-32 pl-2 md:pl-16'>
                <div className="w-full pl-2 md:w-72 md:whitespace-nowrap h-auto border-b-4 border-pink-700 rounded-tl-lg">
                    <h1 className="text-white text-lg pt-6"><strong>Produtoooo</strong></h1>
                </div>
                <div className="w-full pl-2 pt-4 md:pl-4 text-white">
                    <h1 className='text-3xl font-roboto font-medium'>{product.nome}, <span className='font-sans text-pink-600 '>{product.valor}</span> Reais</h1>
                </div>
            </div>
            <div className=" md:block pt-8 md:pl-16 md:min-h-screen justify-center">

                <div className="w-full pl-2 md:w-72 md:whitespace-nowrap h-auto border-b-4 border-pink-700 rounded-tl-lg">
                    <h1 className="text-white text-lg md:pt-6"><strong>Detalhes do Produto</strong></h1>
                </div>

                <div className="flex pt-8 md:justify-between w-full">
                    <div className="w-full md:w-2/4 ">
                        <div className=" w-full h-auto flex justify-center items-center border-none rounded-bl-lg rounded-r-lg">
                            <div className=" w-2/4 auto border-none rounded-bl-lg">
                                <div style={{ backgroundColor: "#1e293b" }} className="whitespace-nowrap pt-4 pl-2 text-white">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 font-roboto">nome: </span>{product.nome}
                                    </h1>
                                </div>
                                <div className="whitespace-nowrap pt-4 pl-2 text-white border-none rounded-l-md">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 ">peso: </span>{product.peso}
                                    </h1>
                                </div>
                                <div style={{ backgroundColor: "#1e293b" }} className="whitespace-nowrap pt-4 pl-2 text-white bg-">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 ">cel: </span>{product.telefone}
                                    </h1>
                                </div>
                                <div className="whitespace-nowrap pt-4 pl-2 text-white rounded-l-md">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 ">estoque: </span>{product.estoque}
                                    </h1>
                                </div>
                                <div style={{ backgroundColor: "#1e293b" }} className="whitespace-nowrap pt-4 pl-2 text-white bg-">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 ">Vendador: </span>{product.vendedor}
                                    </h1>
                                </div>
                                <div className="whitespace-nowrap pt-4 pl-2 text-white rounded-l-md">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 ">tamanho: </span>{product.tamanho}
                                    </h1>
                                </div>
                            </div>
                            <div className=" w-2/4 h-auto border-none rounded-r-lg">
                                <div style={{ backgroundColor: "#1e293b" }} className="whitespace-nowrap pt-4 md:pl-4 text-white rounded-r-md">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 ">Valor2: </span>{product.valor}
                                    </h1>
                                </div>
                                <div className="whitespace-nowrap pt-4 md:pl-4 text-white bg-">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 ">Marca: </span>{product.marca}
                                    </h1>
                                </div>
                                <div style={{ backgroundColor: "#1e293b" }} className="whitespace-nowrap pt-4 md:pl-4 text-white rounded-r-md">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 ">Cidade: </span>{product.cidade}
                                    </h1>
                                </div>
                                <div className="whitespace-nowrap pt-4 md:pl-4 text-white bg-">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 ">estoque: </span>{product.estoque}
                                    </h1>
                                </div>
                                <div style={{ backgroundColor: "#1e293b" }} className="whitespace-nowrap pt-4 md:pl-4 text-white rounded-r-md">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-400 ">material: </span>{product.material}
                                    </h1>
                                </div>
                                <div className="whitespace-nowrap pt-4 md:pl-4 text-white bg-">
                                    <h1 className="md:text-lg font-mono">
                                        <span className="text-pink-500 ">Cartão: </span><span>{product.cartao}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-72 md:whitespace-nowrap h-auto border-b-4 border-pink-700 rounded-tl-lg">
                            <h1 className="pl-8 md:pl-0 text-white md:text-lg pt-6"><strong>Descrição</strong></h1>
                        </div>
                        <div className="p-4 w-full h-auto flex justify-center items-center border-none rounded-bl-lg rounded-r-lg">
                            <p className=" text-center text-white md:pr-96 pt-4 text-lg font-mono">{product.descricao}</p>
                        </div>
                    </div>


                    {/*imagens*/}
                    <div className="hidden md:flex md:justify-center md:w-1/2 md:pt-8">
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

            </div>
            {/**Area comentarios */}
            <div className='hidden md:flex md:justify-center md:items-center md:mt-10 mb-28'>
                <div className='w-auto h-auto'>
                        <button className="w-34 text-white bg-pink-600 border border-white py-1 px-2 rounded-md bg-transparent hover:bg-white hover:text-black transition ml-4"
                        onClick={() => window.location.href = `tel:${product.telefone}`}>
                            <IoCallOutline className='text-center text-3xl ml-10' />
                            Me ligue agora
                        </button>
                        <button className="w-34 text-white bg-green-700 border border-white py-1 px-2 rounded-md bg-transparent hover:bg-white hover:text-black transition ml-4"
                        onClick={openWhatsApp}>
                            <IoLogoWhatsapp className='text-3xl ml-10' />
                            Comprar agora
                        </button>
                </div>

            </div>
            <div className="md:hidden">
                <div className="w-full pl-2 md:w-72 md:whitespace-nowrap h-auto border-b-4 border-pink-700 rounded-tl-lg">
                    <h1 className="text-white text-lg pl-4 pt-6 md:pt-6"><strong>fotos</strong></h1>
                </div>
                <div className="grid grid-cols-1 gap-6 m-8">
                    {product.url.map((imagem, index) => (
                        <div
                            key={index}
                            className="h-60 w-full bg-white border-none rounded-lg overflow-hidden"
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
            <Comentarios productId={params.id} initialComments={product.reviews} />
        </>
    ) : <p>carregandoo</p>
}