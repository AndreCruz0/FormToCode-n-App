type Props = {
  register: any;
  errors: any;
};

export default function NameInput({ register, errors }: Props) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1 text-green-700">Nome</label>
      <input
        {...register("nome")}
        className={`w-full border ${errors.nome ? "border-red-500" : "border-green-400"} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
        placeholder="Seu nome completo"
      />
      <p className="text-red-500 text-sm mt-1">{errors.nome?.message}</p>
    </div>
  );
}
