import { setCookie, deleteCookie, getCookie } from '../../services/storage';
import { StorageKeys } from './types';

export const saveGameSessionId = (value: string) => {
  setCookie(StorageKeys.TOKEN, value);
};

export const getGameSessionId = () => {
  return getCookie(StorageKeys.GAME_SESSION_ID);
};

export const clearGameSessionId =  () => {
  deleteCookie(StorageKeys.GAME_SESSION_ID);
};
