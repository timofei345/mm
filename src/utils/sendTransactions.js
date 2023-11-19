


export const SendTransactions = ({ amount, username, avatar, type }) => {

    const currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const year = currentDate.getFullYear();
    const formattedDate = day + "." + month + "." + year;
    const formData = {
        amount: amount,
        userName: username,
        userAvatar: avatar,
        trDate: formattedDate,
        trType: type,
    };

    return formData;
};