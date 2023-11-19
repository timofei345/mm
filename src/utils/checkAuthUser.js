import { useSelector } from 'react-redux';


export const CheckAuthUser = () => {
    const jwtToken = useSelector((state) => state.jwt.jwtToken);
    if (!jwtToken) {
        return false;
    }
}
