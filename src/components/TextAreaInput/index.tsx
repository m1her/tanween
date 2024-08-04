import { ChangeEvent } from "react";

interface TextAreaInputTypes {
  id?: string;
  name?: string;
  label?: string;
  labelStyle?: string;
  inputBoxStyle?: string;
  placeholder?: string;
  value?: string | number | readonly string[];
  defaultValue?: string;
  error?: boolean | string;
  errorMsg?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  maxLength?: number;
}

export const TextAreaInput = ({
  id,
  name = "textInput",
  value = "",
  placeholder,
  onChange = () => {},
  autoFocus,
  disabled = false,
  defaultValue,
  maxLength,
  error,
}: TextAreaInputTypes) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <textarea
          autoFocus={autoFocus}
          autoComplete="off"
          id={id}
          name={name}
          value={value}
          className={`w-full outline-none px-6 py-2 text-lg rounded-[15px] bg-[#D9D9D9] ${
            error ? "outline outline-[#ED2025]" : "outline-none"
          }`}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          defaultValue={defaultValue}
          maxLength={maxLength}
          rows={5}
        />
      </div>
    </div>
  );
};
