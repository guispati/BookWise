import { MagnifyingGlass } from "phosphor-react";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { InputContainer } from "./styles";

interface InputProps {
    inputName: "query";
    register: UseFormRegister<{ query: string; }>;
}

export function Input({ inputName, register, ...props }: InputProps & InputHTMLAttributes<HTMLInputElement>) {

    return (
        <InputContainer>
            <input {...register(inputName)} {...props} />
            <MagnifyingGlass width={20} height={20} />
        </InputContainer>
    );
}