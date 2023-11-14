import { Meta, StoryObj } from '@storybook/react';
import LangSwitcher, { ILangSwitcher } from './LangSwitcher';
import { mockLangSwitcherProps } from './LangSwitcher.mocks';

export default {
    title: 'templates/LangSwitcher',
    component: LangSwitcher,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof LangSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<ILangSwitcher>;

export const Base: Template = (args: ILangSwitcher) => (
    <LangSwitcher {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockLangSwitcherProps.base,
} as ILangSwitcher;
