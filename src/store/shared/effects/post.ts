import { createEffect } from 'effector';
import api from 'services/api';

export const postFX = (path: string) =>
    createEffect(async (values: any) => {
        try {
            const response = await api.post(`/${path}`, values);

            return response.data;
        } catch (e) {
            return e;
        }
    });
