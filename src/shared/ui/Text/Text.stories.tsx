import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'TITLE AFG1',
    text: 'aaq1414c',
};
export const Error = Template.bind({});
Error.args = {
    title: 'TITLE AFG1',
    text: 'aaq1414c',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'TITLE AFG1',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'aaq1414c',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'TITLE AFG1',
    text: 'aaq1414c',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'TITLE AFG1',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTexDark = Template.bind({});
onlyTexDark.args = {
    text: 'aaq1414c',
};
onlyTexDark.decorators = [ThemeDecorator(Theme.DARK)];
