import { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher, { IThemeSwitcher } from './ThemeSwitcher';
import { mockThemeSwitcherProps } from './ThemeSwitcher.mocks';

export default {
    title: 'templates/ThemeSwitcher',
    component: ThemeSwitcher,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof ThemeSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<IThemeSwitcher>;

export const Base: Template = (args: IThemeSwitcher) => (
    <ThemeSwitcher {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockThemeSwitcherProps.base,
} as IThemeSwitcher;
