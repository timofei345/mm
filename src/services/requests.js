import { useHttp } from "../hooks/http.hook";

const useService = () => {
    const { request } = useHttp();

    const apiBase = 'http://49.13.31.246:9191/';
    const routes = {
        signin: 'signin',
        signup: 'signup',
        transactions: 'transaction',
        users: "users",
        me: "me"

    };

    //Регистрация
    const POST_REG_USER = async (data) => {
        const res = await request(
            `${apiBase}${routes.signup}`,
            'POST',
            JSON.stringify(data),
        );
        return res;
    };
    // Авторизация
    const POST_LOGIN_USER = async (data) => {
        const res = await request(
            `${apiBase}${routes.signin}`,
            'POST',
            JSON.stringify(data),
        );
        return res;
    };
    // transactions
    const POST_TRANSACTIONS = async (data) => {
        const res = await request(
            `${apiBase}${routes.transactions}`,
            'POST',
            JSON.stringify(data),
        );
        return res
    }

    const GET_ME = async (data) => {
        const res = await request(
            `${apiBase}${routes.me}`,
            'GET',
            JSON.stringify(data),
        );
        return res
    }
    const PUT_ME = async (data) => {
        const res = await request(
            `${apiBase}${routes.me}`,
            'PUT',
            JSON.stringify(data),
        );
        return res
    }

    const GET_USERS = async (data) => {
        const res = await request(
            `${apiBase}${routes.users}`,
            'GET',
            JSON.stringify(data),
        );
        return res
    }



    return { POST_REG_USER, POST_LOGIN_USER, POST_TRANSACTIONS, GET_USERS, GET_ME, PUT_ME };
}



export default useService;

