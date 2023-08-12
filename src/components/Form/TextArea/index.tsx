import { TextareaHTMLAttributes } from "react";
import { TextAreaContainer } from "./styles";

export function TextArea({ ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    const maxLength = String(props.maxLength);
    const valueLength = String(props.value)?.length ?? 0;

    return (
        <TextAreaContainer>
            <textarea {...props} />
            {maxLength && (
                <span>
                    {valueLength}/{maxLength}
                </span>
            )}
        </TextAreaContainer>
    );
}