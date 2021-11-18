import { createStore } from 'effector';
import { TOKEN_KEY } from '../../constants';
import { fetchAuthUser } from './effects/fetchAuthUser';
import { registerFX } from './effects/register';
import { logoutEvent } from './events/logout';
import { AuthState } from './interfaces';
// import toast from 'cogo-toast';
// import { resetPasswordFx } from './effects/resetPassword';

export const $authStore = createStore<AuthState | null>(null);

$authStore.on(fetchAuthUser.doneData, (_, v) => v);

$authStore.on(registerFX.doneData, (_, v) => v);

$authStore.on(logoutEvent, () => {
    localStorage.removeItem(TOKEN_KEY);
    return null;
});
