type Props = {
  register: any;
  errors: any;
};

export default function ConfirmPasswordInput({ register, errors }: Props) {
  return (
    <div className="mb-6">
      <label className="block font-semibold mb-1 text-green-700">Confirmar senha</label>
      <input
        type="password"
        {...register("confirmarSenha")}
        className={`w-full border ${errors.confirmarSenha ? "border-red-500" : "border-green-400"} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
        placeholder="******"
      />
      <p className="text-red-500 text-sm mt-1">{errors.confirmarSenha?.message}</p>
    </div>
  );
}
