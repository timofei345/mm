import { useState } from "react";
import InputField from "../../../inputField/InputField";

function CardForm() {
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");

    const handleExpirationDateChange = (e) => {
        const inputDate = e.target.value.replace(/\D/g, "");

        const formattedDate = inputDate
            .replace(/(\d{2})(\d{2})/, "$1/$2")
            .trim();

        setExpirationDate(formattedDate);
    };
    const handleCardNumberChange = (e) => {
        const inputNumber = e.target.value.replace(/[\D\s]/g, "");

        const formattedNumber = inputNumber
            .replace(/(\d{4})/g, "$1 ")
            .trim()
            .slice(0, 19);

        setCardNumber(formattedNumber);
    };

    return (
        <div className='card_form'>
            <InputField
                label='Cardholder Name'
                placeholder='Enter your name as written on card'
                type='text'
            />
            <InputField
                label='Card Number'
                placeholder='Enter card number'
                type='text'
                onChange={handleCardNumberChange}
                value={cardNumber}
            />
            <div className='card_form_block'>
                <InputField
                    label='Expiration Date'
                    placeholder='MM/YY'
                    type='text'
                    onChange={handleExpirationDateChange}
                    value={expirationDate}
                    maxLength={5}
                />
                <InputField
                    label='CVV'
                    placeholder='CVV'
                    type='text'
                    maxLength={3}
                />
            </div>
        </div>
    );
}
export default CardForm;
