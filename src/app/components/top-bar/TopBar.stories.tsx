import { Meta, StoryObj } from '@storybook/react';
import TopBar, { ITopBar } from './TopBar';
import { mockTopBarProps } from './TopBar.mocks';

export default {
    title: 'templates/TopBar',
    component: TopBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof TopBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<ITopBar>;

export const Base: Template = (args: ITopBar) => <TopBar {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockTopBarProps.base,
} as ITopBar;
