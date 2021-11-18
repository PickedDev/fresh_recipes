import { createEffect } from 'effector';
import api from '../../../services/api';
import { RegisterFields } from '../../../types/loginTypes';

export const registerFX = createEffect(async (payload: RegisterFields) => {
    const response = await api.post(`/users/`, payload);

    return response.data;
});
