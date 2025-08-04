// src/pages/FormPage.tsx
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import NameInput from "../components/form/NameInput";
import EmailInput from "../components/form/EmailInput";
import TelephoneInput from "../components/form/TelephoneInput";
import PasswordInput from "../components/form/PasswordInput";
import ConfirmPasswordInput from "../components/form/ConfirmPasswordInput";
import SuccessModal from "../components/form/SucessModal";


const schema = yup.object({
  nome: yup.string().required("Nome é obrigatório").min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email inválido")
    .test("email-domain-check", "Email com domínio inválido", (value) => {
      if (!value) return false;
      const domain = value.split("@")[1]?.toLowerCase();
      const bannedDomains = ["gmai2l.com", "gmial.com", "gmail.con", "hotmial.com"];
      return !bannedDomains.includes(domain);
    }),
  telefone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^\d{11}$/, "Telefone deve conter 11 dígitos (somente números)"),
  senha: yup.string().required("Senha é obrigatória").min(6, "Senha deve ter no mínimo 6 caracteres"),
  confirmarSenha: yup
    .string()
    .required("Confirmação de senha é obrigatória")
    .oneOf([yup.ref("senha")], "Senhas não coincidem"),
});

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = () => {
    setShowSuccess(true);
    reset();
  };




  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-green-400 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
          Cadastro de Usuário
        </h2>

        <NameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <TelephoneInput  errors={errors} setValue={setValue} trigger={trigger} watch={watch} />
        <PasswordInput register={register} errors={errors} />
        <ConfirmPasswordInput register={register} errors={errors} />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-3 rounded hover:from-green-700 hover:to-green-900 transition"
        >
          Cadastrar
        </button>
      </form>
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </div>
  );
}
