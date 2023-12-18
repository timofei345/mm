const initialState = {
    jwtToken: localStorage.getItem("jwt") || "",
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_JWT_TOKEN':
            localStorage.setItem("jwt", action.payload);
            return {
                ...state,
                jwtToken: action.payload,
            };
        case 'CLEAR_JWT_TOKEN':
            localStorage.removeItem("jwt");
            return {
                ...state,
                jwtToken: "",
            };
        default:
            return state;
    }
};

export default authReducer;



