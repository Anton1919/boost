import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    data: {
        username: 'Anton',
        age: 27,
        city: 'Krasnodar',
        lastname: 'Anton',
        first: 'Anton',
        country: Country.Russia,
    },
};

export const withError = Template.bind({});

withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
