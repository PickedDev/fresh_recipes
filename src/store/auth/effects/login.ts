import api from '../../../services/api';
import { AxiosResponse } from 'axios';
import { createEffect } from 'effector';
import jwtDecode from 'jwt-decode';
import { TOKEN_KEY } from '../../../constants';
import { LoginPayload } from '../interfaces';
import { fetchAuthUser } from './fetchAuthUser';

export const loginFx = createEffect(async (payload: LoginPayload) => {
    const authResponse: AxiosResponse = await api.post('/api/token/', payload);
    const { access: accessToken } = authResponse.data;
    localStorage.setItem(TOKEN_KEY, accessToken);

    // @ts-ignore
    const { user_id } = jwtDecode(accessToken);

    const response = await fetchAuthUser(user_id);

    return response;
});
