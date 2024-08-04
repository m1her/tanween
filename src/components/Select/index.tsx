import { ChangeEvent } from "react";

interface DropDownTypes {
  id?: string;
  name?: string;
  label?: string;
  labelStyle?: string;
  selectBoxStyle?: string;
  options: { value: string; label: string }[];
  value?: string;
  defaultValue?: string;
  error?: boolean | string;
  errorMsg?: string;
  onChange?: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  disabled?: boolean;
}

export const Select = ({
  id,
  name = "dropdown",
  options,
  value,
  onChange = () => {},
  disabled = false,
  error,
}: DropDownTypes) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          className={`w-full z-50 outline-none px-6 py-3 text-lg rounded-[15px] bg-[#D9D9D9] ${
            error ? "outline outline-[#ED2025]" : "outline-none"
          } ${value == "" ? "text-gray-400" : ""}`}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="" disabled hidden>
            الخدمة المطلوبة...
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
