import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { TOKEN_KEY } from '../../constants/index';
import history from '../history/history';

const USER_NOT_AUTHED_CODE = 401;

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Accept: `application/json, text/plain, */*`,
        'Content-type': `application/json;charset=utf-8`,
    },
    timeout: 30000,
});
api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = localStorage.getItem(TOKEN_KEY);
    const authHeader = token ? `Bearer ${token}` : '';

    console.log('config', config);

    return {
        ...config,
        // headers: {
        //   ...config.headers,
        //   ...(authHeader && { Authorization: authHeader }),
        // },
    };
});

api.interceptors.response.use(
    data => data,
    (error: AxiosError) => {
        if (error.response?.status === USER_NOT_AUTHED_CODE) {
            history.replace('/login');
        }

        return Promise.reject(error.response);
    }
);

export default api;
