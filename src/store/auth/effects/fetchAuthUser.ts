import api from '../../../services/api';
import { createEffect } from 'effector';

export const fetchAuthUser = createEffect(async (user_id: number) => {
    const response = await api.get(`/users/${user_id}/`);

    return response.data;
});
