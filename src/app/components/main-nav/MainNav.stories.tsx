import { Meta, StoryObj } from '@storybook/react';
import MainNav, { IMainNav } from './MainNav';
import { mockMainNavProps } from './MainNav.mocks';

export default {
    title: 'templates/MainNav',
    component: MainNav,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof MainNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<IMainNav>;

export const Base: Template = (args: IMainNav) => <MainNav {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockMainNavProps.base,
} as IMainNav;
