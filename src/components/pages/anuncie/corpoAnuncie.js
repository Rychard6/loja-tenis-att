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

  // Função para redirecionar para o número de telefone com a mensagem
  const redirectToWhatsApp = () => {
    const phoneNumber = '5561982727934'; // Número de telefone
    const message = encodeURIComponent('Olá, gostaria de cadastrar meu produto');
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.location.href = whatsappLink;
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
            <h1 className="text-2xl font-bold text-center text-white">teste?</h1>
            <ul className="text-white">
              <li className="pt-4 text-center">
                1. Clique no botão <strong>Quero me cadastrar</strong> para ser redirecionado para o nosso
                WhatsApp e iniciar o processo de cadastro.  
              </li>
              <li className="pt-6 text-center">
                2. Responda o nosso formulário no nosso whatsApp com seus dados para continuar o
                cadastro.
              </li>
              <li className="pt-6 text-center">
                3. Clique no botão abaixo para ler nossos termos e
                condições antes de iniciar o cadastro.
                <br />
              </li>
              <li className="pt-6 text-center">
                4. Aproveite o primeiro mês grátis para conhecer todas as
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
            <button className="bg-pink-500 text-white border border-white py-1 px-2 rounded-md bg-transparent hover:bg-white hover:text-black transition ml-4"
            onClick={redirectToWhatsApp}
            >
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
            paddingTop: "30px",
          },
        }}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Termos e Condições"
      >
<h1 className="text-center text-2xl font-semibold mb-4">Termos de Uso</h1>
        <h2 className="text-lg mb-2">Requisitos para anunciar:</h2>
        <p>- <strong>Ser maior de idade;</strong></p>
        <p>- Efetuar o pagamento do anúncio após trinta dias do anúncio;</p>
        <p>- Fornecer os dados para cadastramento;</p>
        <h2 className="text-lg mb-2">Não acesse este site se:</h2>
        <p>- <strong>Você for menor de 18 anos;</strong></p>
        <p>- O conteúdo for proibido em sua cidade ou estado;</p>
        <p>- Você se sentir ofendido com o conteúdo;</p>
        <p className="text-center pt-6">O <em>Delícias do Prazer</em> não possui nenhum vínculo com as acompanhantes. Somos um portal que oferece uma plataforma para indivíduos interessados em fornecer serviços de maneira autônoma e independente. No entanto, é importante ressaltar que não assumimos responsabilidade pela contratação dos serviços anunciados, nem atuamos como intermediários nesse processo.</p>

        <div className="flex justify-center pt-8">
          <button className="btn  bg-red-600" onClick={closeModal}>Fechar</button>
        </div>
      </Modal>

    </>
  );
}
