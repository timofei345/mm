import "./inputField.scss";

function InputField({
    label,
    type,
    placeholder,
    onChange,
    className,
    value,
    maxLength,
}) {
    return (
        <div className={`input_block ${className}`}>
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                maxLength={maxLength}
            />
        </div>
    );
}
export default InputField;
