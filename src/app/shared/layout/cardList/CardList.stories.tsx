import { Meta, StoryObj } from '@storybook/react';
import CardList, { ICardList } from './CardList';
import { mockCardListProps } from './CardList.mocks';

export default {
    title: 'templates/CardList',
    component: CardList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof CardList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<ICardList>;

export const Base: Template = (args: ICardList) => <CardList {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockCardListProps.base,
} as ICardList;
