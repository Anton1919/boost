import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
        </>
    ),
    direction: 'column',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    gap: '16',
    children: (
        <>
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
        </>
    ),
    direction: 'column',
};
