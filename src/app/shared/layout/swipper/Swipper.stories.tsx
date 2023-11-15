import { Meta, StoryObj } from '@storybook/react';
import Swipper, { ISwipper } from './Swipper';
import { mockSwipperProps } from './Swipper.mocks';

export default {
    title: 'templates/Swipper',
    component: Swipper,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof Swipper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<ISwipper>;

export const Base: Template = (args: ISwipper) => <Swipper {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockSwipperProps.base,
} as ISwipper;
