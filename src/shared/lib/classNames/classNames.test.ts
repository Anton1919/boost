import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('some class')).toBe('some class');
    });

    test('with additional class', () => {
        const expected = 'some class class1';
        expect(classNames('some class', {}, ['class1'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'some class class1 hovered scrollable';
        expect(classNames(
            'some class',
            { hovered: true, scrollable: true },
            ['class1'],
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'some class class1 hovered';
        expect(classNames(
            'some class',
            { hovered: true, scrollable: false },
            ['class1'],
        )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'some class class1 hovered';
        expect(classNames(
            'some class',
            { hovered: true, scrollable: undefined },
            ['class1'],
        )).toBe(expected);
    });
});
