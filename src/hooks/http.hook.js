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


export const useImgBBUpload = () => {

    const uploadImage = useCallback(async (image) => {

        const formData = new FormData();
        formData.append('key', "5b6820e63f1e06d385d3b9c831efcee6");
        formData.append('image', image);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Could not upload image, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch (error) {
            throw error;
        }
    }, []);

    return { uploadImage };
};
