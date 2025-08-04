type Props = {
  register: any;
  errors: any;
};

export default function PasswordInput({ register, errors }: Props) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1 text-green-700">Senha</label>
      <input
        type="password"
        {...register("senha")}
        className={`w-full border ${errors.senha ? "border-red-500" : "border-green-400"} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
        placeholder="******"
      />
      <p className="text-red-500 text-sm mt-1">{errors.senha?.message}</p>
    </div>
  );
}
