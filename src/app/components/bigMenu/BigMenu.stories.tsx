import { Meta, StoryObj } from '@storybook/react';
import BigMenu, { IBigMenu } from './BigMenu';
import { mockBigMenuProps } from './BigMenu.mocks';

export default {
    title: 'templates/BigMenu',
    component: BigMenu,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof BigMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<IBigMenu>;

export const Base: Template = (args: IBigMenu) => <BigMenu {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockBigMenuProps.base,
} as IBigMenu;
