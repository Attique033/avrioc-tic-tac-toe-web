import React, {useEffect} from 'react';
import {useAppSelector} from "../../store";
import {useNotificationActions} from "../../store/notification/useNotificationActions.ts";
import {RootState} from "../../store/types";
import {NotificationType} from "../../types";

const PROGRESS_DURATION = 3000;

const Notification: React.FC = () => {
    const {notification} = useAppSelector((state: RootState) => state.notification);
    const position = notification?.position || 'bottom-center';

    const {resetNotification} = useNotificationActions()

    useEffect(() => {
        const timer = setTimeout(() => {
            resetNotification();
        }, PROGRESS_DURATION);

        return () => clearTimeout(timer);
    }, [notification, resetNotification]);

    const dismiss = () => {
        resetNotification();
    };

    const getBackgroundColor = () => {
        switch (notification?.type) {
            case NotificationType.SUCCESS:
                return 'bg-green-500';
            case NotificationType.ERROR:
                return 'bg-red-500';
            default:
                return 'bg-blue-500';
        }
    };

    const getIcon = () => {
        switch (notification?.type) {
            case NotificationType.SUCCESS:
                return '✓';
            case NotificationType.ERROR:
                return '⚠';
            default:
                return 'ℹ';
        }
    };

    const getPositionClasses = () => {
        if (position === 'bottom-center') {
            return 'fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 sm:px-6 md:px-8';
        }
        return 'fixed top-4 left-4 sm:left-6 md:left-8 w-full max-w-sm';
    };

    if (!notification) {
        return null;
    }

    return (
        <div className={`${getPositionClasses()} z-50`}>
            <div
                className={`${getBackgroundColor()} rounded-lg overflow-hidden flex justify-between items-center shadow-lg animate-slide-in`}
            >
                <div className="flex p-3 max-w-[80%]">
                    <span className="text-2xl text-white mr-3">{getIcon()}</span>
                    <div className="flex-1">
                        {notification.title && (
                            <p className="text-white text-left font-medium m-0">{notification.title}</p>
                        )}
                        {notification.message && (
                            <p className="text-white/90 text-left text-sm mt-1 m-0">{notification.message}</p>
                        )}
                    </div>
                </div>
                <button
                    className="bg-transparent border-none text-white text-2xl cursor-pointer p-2 mr-2 flex items-center justify-center hover:opacity-80"
                    onClick={dismiss}
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Notification;
