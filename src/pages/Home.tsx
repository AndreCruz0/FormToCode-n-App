import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">
          Bem-vindo!
        </h1>
        <p className="text-green-900 text-lg mb-6">
          Pronto para se cadastrar? Clique no botão abaixo e preencha seu cadastro!
        </p>
        <button
          onClick={() => navigate("/cadastrar")}
          className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-3 px-8 rounded-full hover:from-green-700 hover:to-green-900 transition text-lg shadow-md"
        >
          Ir para Cadastro
        </button>
      </div>
    </div>
  );
}
