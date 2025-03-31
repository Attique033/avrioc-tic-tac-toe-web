import { StorageKeys } from '../utils/storage/types';

export const setCookie = (name: StorageKeys, value: string, days = 1) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; Secure; SameSite=Lax`;
};

export const getCookie = (name: StorageKeys) => {
    return document.cookie
        .split('; ')
        .find((row) => row.startsWith(name + '='))
        ?.split('=')[1];
};

export const deleteCookie = (name: StorageKeys) => {
    document.cookie = `${name}=; Max-Age=0; path=/;`;
};
