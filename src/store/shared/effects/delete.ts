import { createEffect } from 'effector';
import api from '../../../services/api/index';

export const deleteFX = (path: string, id: number) =>
    createEffect(async () => {
        try {
            const response = await api.delete(`/${path}${id}/`);
            return response.data;
        } catch (e) {
            return e;
        }
    });
