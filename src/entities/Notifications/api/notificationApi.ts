import { rtkApi } from '@/shared/api/rtkApi';
import { INotifications } from '../model/types/notifications';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<INotifications[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotification = notificationApi.useGetNotificationsQuery;
