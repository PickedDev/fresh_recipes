import { createEffect } from 'effector';
import api from 'services/api';
import { RequestParams } from 'utils/mapParams';

export const fetchFX = (path: string) =>
    createEffect(async (params: RequestParams = {}) => {
        try {
            const response = await api.get(`/${path}`, {
                params,
            });
            const { count, results } = response.data;

            return { list: results, total: count };
        } catch (e) {
            return e;
        }
    });
