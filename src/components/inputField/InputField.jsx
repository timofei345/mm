import cn from "classnames";
import "./inputField.scss";
import { useState } from "react";

function InputField({
    label,
    type,
    placeholder,
    onChange,
    className,
    value,
    maxLength,
    icon,
}) {
    const [inputType, setInputType] = useState(type);
    return (
        <div className={cn("input_block", className)}>
            <label>{label}</label>
            <input
                type={inputType}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                maxLength={maxLength}
            />
            {icon && (
                <img
                    src={icon}
                    alt='icon'
                    onClick={() => {
                        setInputType((prevType) =>
                            prevType === "text" ? "password" : "text"
                        );
                    }}
                />
            )}
        </div>
    );
}
export default InputField;
