import { useEffect } from 'react';
import { getSessionToken, getUserData } from '../utils/storage/Auth';
import { useAuthActions } from '../store/auth/useAuthActions';

export const useTokenPersistence = () => {
    const { setSession } = useAuthActions();

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = getSessionToken();
                const user = await getUserData();

                if (token && user) {
                    setSession({
                        token,
                        user,
                    });
                }
            } catch (error) {
                console.error('Error checking token persistence:', error);
            } finally {
                setTimeout(async () => {}, 500);
            }
        };
        checkToken();
    }, []);
};
