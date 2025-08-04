import { IMaskInput } from "react-imask";

type Props = {
  errors: any;
  setValue: any;
  trigger: any;
  watch: any;
};

export default function TelephoneInput({  errors, setValue, trigger, watch }: Props) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1 text-green-700">Telefone</label>
      <IMaskInput
        mask="(00) 00000-0000"
        unmask={true}
        onAccept={(value: string) => setValue("telefone", value, { shouldValidate: true })}
        onBlur={() => trigger("telefone")}
        value={watch("telefone") || ""}
        className={`w-full border ${errors.telefone ? "border-red-500" : "border-green-400"} rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
        placeholder="(99) 99999-9999"
      />
      <p className="text-red-500 text-sm mt-1">{errors.telefone?.message}</p>
    </div>
  );
}
