import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Modal from "react-modal";

export default function CorpoAnuncie() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  

    return (
      <>
        <div className="flex justify-center pt-40">
          <div className="w-full h-52 relative sm:w-2/4 sm:h-60 border rounded-md bg-white">
            <img
              src="caminho/para/sua/imagem.jpg"
              alt="Imagem"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center pt-12 sm:pt-32 pb-40">
          <div
            style={{ backgroundColor: "rgba(115,53,76,0.35)" }}
            className="relative w-3/4 h-auto border rounded-md p-4"
          >
            <h1 className="text-2xl font-bold text-center text-white">Como Anunciar</h1>
            <ul className="text-white">
              <li className="pt-4 text-center">
                1. Clique no botão <strong>Quero me cadastrar</strong> para ser redirecionado para o nosso
                WhatsApp e iniciar o processo de cadastro.  
              </li>
              <li className="pt-6 text-center">
                2. Responda o nosso formulário no nosso whatsApp com seus dados para continuar a compra.
              </li>
              <li className="pt-6 text-center">
                3. Clique no botão abaixo para ler nossos termos e
                condições antes de iniciar o cadastro.
                <br />
              </li>
              <li className="pt-6 text-center">
                4. Aproveite para conhecer todas as
                nossas funcionalidades e benefícios!
              </li>
            </ul>
            <div className="flex justify-center pt-6"> {/* Adicione esta div */}
                <button
                onClick={openModal}
                className="bg-pink-500 text-white border border-white py-1 px-2 rounded-md bg-transparent hover:bg-white hover:text-black transition"
                >
                    Termos e Condições
                </button>
                <button className="bg-pink-500 text-white border border-white py-1 px-2 rounded-md bg-transparent hover:bg-white hover:text-black transition ml-4">
                    Quero me cadastrar
                </button>
            </div>

          </div>
        </div>

              {/* Modal */}
      <Modal
      style={{
        content: {
          maxWidth: "60%",
          maxHeight: "80%",
          margin: "auto",
          backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
          padding: "20px",
          paddingTop:"30px",
        },
      }}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Termos e Condições"
      >
        <h1 className="text-center text-2xl font-semibold mb-4">Termos de Uso</h1>
        <h2 className="text-lg mb-2">Requisitos para anunciar:</h2>
        <p>- <strong>bla bla bla bla;</strong></p>
        <p>- bla bla bla bla;</p>
        <p>- bla bla bla bla;</p>
        <h2 className="text-lg mb-2">bla bla bla bla:</h2>
        <p>- <strong>bla bla bla bla;</strong></p>
        <p>- bla bla bla bla;</p>
        <p>- bla bla bla bla;</p>
        <p className="text-center pt-6">bla bla bla bla <em>bla bla bla bla</em> bla bla bla bla.</p>

        <div className="flex justify-center pt-8">
        <button className="btn  bg-red-600" onClick={closeModal}>Fechar</button>
        </div>
      </Modal>
        
    </>
    );
  }
  