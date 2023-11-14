import { Meta, StoryObj } from '@storybook/react';
import SubMenu, { ISubMenu } from './SubMenu';
import { mockSubMenuProps } from './SubMenu.mocks';

export default {
    title: 'templates/SubMenu',
    component: SubMenu,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof SubMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<ISubMenu>;

export const Base: Template = (args: ISubMenu) => <SubMenu {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockSubMenuProps.base,
} as ISubMenu;
