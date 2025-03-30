import { setCookie, getCookie, deleteCookie } from '../../services/storage';
import { StorageKeys } from './types';
import { UserSession } from '../../types';

export const saveSessionToken = (value: string) => {
  setCookie(StorageKeys.TOKEN, value);
};

export const saveUserData = async (session: UserSession) => {
  setCookie(StorageKeys.USER_DETAILS, JSON.stringify(session.user));
  saveSessionToken(session.token);
};

export const getUserData = () => {
  const user = getCookie(StorageKeys.USER_DETAILS);
  return user ? JSON.parse(user) : null;
};

export const getUserId = () => {
  const user = getUserData();
  return user ? user.id : null;
};

export const getSessionToken = () => {
  return getCookie(StorageKeys.TOKEN);
};

export const clearSessionToken = () => {
  deleteCookie(StorageKeys.TOKEN);
  deleteCookie(StorageKeys.USER_DETAILS);
};
