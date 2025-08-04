import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMaskInput } from "react-imask";
import { useEffect, useState } from "react";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  confirmarSenha: string;
};

const schema = yup.object({
  nome: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: yup
    .string()
    .email("Email inválido")
    .required("Email é obrigatório"),
  telefone: yup
    .string()
    .matches(/^\d{11}$/, "Telefone deve conter 11 dígitos (somente números)")
    .required("Telefone é obrigatório"),
  senha: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("senha")], "Senhas não coincidem")
    .required("Confirmação de senha é obrigatória"),
});

export default function FormularioUsuario() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isValid },
    reset,
    control,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange", // valida em tempo real
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = (data: FormData) => {
    alert("Usuário cadastrado com sucesso!");
    reset();
    setShowSuccess(true);
  };

  // Esconde mensagem de sucesso se o usuário editar qualquer campo
  const watchAllFields = watch();
  useEffect(() => {
    if (showSuccess) {
      setShowSuccess(false);
    }
  }, [watchAllFields]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-green-400 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
          Cadastro de Usuário
        </h2>

        {/* Nome */}
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-green-700">Nome</label>
          <input
            {...register("nome")}
            className={`w-full border ${
              errors.nome ? "border-red-500" : "border-green-400"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="Seu nome completo"
          />
          <p className="text-red-500 text-sm mt-1">{errors.nome?.message}</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-green-700">Email</label>
          <input
            type="email"
            {...register("email")}
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-green-400"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="email@exemplo.com"
          />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>

        {/* Telefone */}
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-green-700">Telefone</label>
          <Controller
            name="telefone"
            control={control}
            render={({ field }) => (
              <IMaskInput
                {...field}
                mask="(00) 00000-0000"
                unmask={true}
                onAccept={(value: string) => field.onChange(value)}
                className={`w-full border ${
                  errors.telefone ? "border-red-500" : "border-green-400"
                } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                placeholder="(99) 99999-9999"
              />
            )}
          />
          <p className="text-red-500 text-sm mt-1">{errors.telefone?.message}</p>
        </div>

        {/* Senha */}
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-green-700">Senha</label>
          <input
            type="password"
            {...register("senha")}
            className={`w-full border ${
              errors.senha ? "border-red-500" : "border-green-400"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="******"
          />
          <p className="text-red-500 text-sm mt-1">{errors.senha?.message}</p>
        </div>

        {/* Confirmar senha */}
        <div className="mb-6">
          <label className="block font-semibold mb-1 text-green-700">
            Confirmar senha
          </label>
          <input
            type="password"
            {...register("confirmarSenha")}
            className={`w-full border ${
              errors.confirmarSenha ? "border-red-500" : "border-green-400"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="******"
          />
          <p className="text-red-500 text-sm mt-1">{errors.confirmarSenha?.message}</p>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-3 rounded hover:from-green-700 hover:to-green-900 transition"
        >
          Cadastrar
        </button>

        {/* Mensagem de sucesso */}
        {showSuccess && (
          <p className="mt-4 text-green-800 font-semibold text-center">
            Usuário cadastrado com sucesso!
          </p>
        )}
      </form>
    </div>
  );
}
