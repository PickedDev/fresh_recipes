import { createEffect } from 'effector';
import api from 'services/api';

export const fetchSingleFX = (path: string) =>
    createEffect(async (id: string) => {
        try {
            const response = await api.get(`/${path}${id}`);
            return response.data;
        } catch (e) {
            return e;
        }
    });
