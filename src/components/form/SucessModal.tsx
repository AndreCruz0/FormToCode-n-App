type Props = {
  onClose: () => void;
};

export default function SuccessModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm w-full text-center">
        <h3 className="text-xl font-bold text-green-700 mb-4">Cadastro realizado com sucesso!</h3>
        <button
          onClick={onClose}
          className="mt-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
