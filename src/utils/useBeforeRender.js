import { useEffect, useState } from "react";
import useService from "../services/requests";
import { useDispatch } from "react-redux";
import { removeJwtToken } from "../store/actions/authActions";

export const useBeforeRender = (setDate) => {
    const { GET_ME } = useService();
    const dispatch = useDispatch();

    useEffect(() => {
        GET_ME()
            .then((res) => {
                setDate(res);
            })
            .catch(() => {
                dispatch(removeJwtToken());
            });
    }, setDate);
};