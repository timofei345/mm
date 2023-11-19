import { useCallback } from "react";
import { useSelector } from 'react-redux';

export const useHttp = () => {
    const jwtToken = useSelector((state) => state.jwt.jwtToken);

    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json', "x-access-token": jwtToken }) => {

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch (e) {

            throw e;
        }
    }, []);

    return { request };
}