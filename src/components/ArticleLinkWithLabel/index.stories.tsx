import type { Meta, StoryObj } from '@storybook/react';
import { ArticleLinkWithLabel } from './index.tsx';

const meta: Meta<typeof ArticleLinkWithLabel> = {
  title: 'components/layouts/ArticleLinkWithLabel',
  component: ArticleLinkWithLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ArticleLinkWithLabel>;

export const Default: Story = {
  args: {
    title: "Post title Post title Post title",
    date: "2021.01.01",
    categoryItem: {
      name: "news",
      slug: "#"
    },
    linkTo: "#"
  },
};  