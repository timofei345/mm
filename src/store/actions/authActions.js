export const setJwtToken = (token) => {
    return {
        type: 'SET_JWT_TOKEN',
        payload: token,
    };
};

export const removeJwtToken = () => {
    return {
        type: 'CLEAR_JWT_TOKEN',
        payload: "",
    };
};
