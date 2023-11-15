import { Meta, StoryObj } from '@storybook/react';
import Media, { IMedia } from './Media';
import { mockMediaProps } from './Media.mocks';

export default {
    title: 'templates/Media',
    component: Media,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof Media>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<IMedia>;

export const Base: Template = (args: IMedia) => <Media {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockMediaProps.base,
} as IMedia;
