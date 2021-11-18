import { createEffect } from 'effector';
import api from 'services/api';

export const patchFX = (path: string, id: number) =>
    createEffect(async (values: any) => {
        try {
            const response = await api.patch(`/${path}${id}/`, values);

            return response.data;
        } catch (e) {
            return e;
        }
    });
