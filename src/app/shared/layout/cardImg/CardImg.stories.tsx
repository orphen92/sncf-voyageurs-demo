import { ICardImg } from '@app/models/frontend/cardImg';
import { Meta, StoryObj } from '@storybook/react';
import CardImg from './CardImg';
import { mockCardImgProps } from './CardImg.mocks';

export default {
    title: 'templates/CardImg',
    component: CardImg,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof CardImg>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<ICardImg>;

export const Base: Template = (args: ICardImg) => <CardImg {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockCardImgProps.base,
} as ICardImg;
