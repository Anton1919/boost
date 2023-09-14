import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Переход открывает страницу пользователя', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Переход открывает несуществующий маршрут', () => {
            cy.visit('/fsffag4446678');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        it('Переход открывает страницу профиля', () => {
            cy.login('admin', '123');
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
    });
});
