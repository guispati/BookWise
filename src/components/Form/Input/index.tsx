import { MagnifyingGlass } from "phosphor-react";
import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <InputContainer>
            <input {...props} />
            <MagnifyingGlass width={20} height={20} />
        </InputContainer>
    );
}