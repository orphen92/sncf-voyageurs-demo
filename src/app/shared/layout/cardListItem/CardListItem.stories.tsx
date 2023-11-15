import { Meta, StoryObj } from '@storybook/react';
import CardListItem, { ICardListItem } from './CardListItem';
import { mockCardListItemProps } from './CardListItem.mocks';

export default {
    title: 'templates/CardListItem',
    component: CardListItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof CardListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<ICardListItem>;

export const Base: Template = (args: ICardListItem) => (
    <CardListItem {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockCardListItemProps.base,
} as ICardListItem;
