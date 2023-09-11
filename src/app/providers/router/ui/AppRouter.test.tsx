import { screen } from '@testing-library/react';
import { componentRender } from '../../../../shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteProfile } from '@/shared/const/router';

describe('app/roter/Approuter', () => {
    test('Страница должна отрендериться', async () => {
        componentRender(<AppRouter />, { route: getRouteAbout() });
        const page = await screen.findByTestId('About Page');
        expect(page).toBeInTheDocument();
    });

    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, { route: '/adsdrt15fg35' });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытой страницы для авторизованного пользователя', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {},
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });
});
