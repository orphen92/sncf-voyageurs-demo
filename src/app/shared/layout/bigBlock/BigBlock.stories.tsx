import { Meta, StoryObj } from '@storybook/react';
import BigBlock, { IBigBlock } from './BigBlock';
import { mockBigBlockProps } from './BigBlock.mocks';

export default {
    title: 'templates/BigBlock',
    component: BigBlock,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof BigBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<IBigBlock>;

export const Base: Template = (args: IBigBlock) => <BigBlock {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockBigBlockProps.base,
} as IBigBlock;
