


export const SendTransactions = ({ amount, username, avatar, type }) => {

    const currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const year = currentDate.getFullYear();

    const hours = ("0" + currentDate.getHours()).slice(-2);
    const minutes = ("0" +currentDate.getMinutes()).slice(-2);

    const formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes};`;

    const formData = {
        amount: amount,
        userName: username,
        userAvatar: avatar,
        trDate: formattedDateTime,
        trType: type,
    };

    return formData;
};