import type { Meta, StoryObj } from '@storybook/react';
import { ArticleLink } from './index.tsx';

const meta: Meta<typeof ArticleLink> = {
  title: 'components/layouts/ArticleLink',
  component: ArticleLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ArticleLink>;

export const Default: Story = {
  args: {
    title: "Post title Post title Post title",
    date: "2021.01.01",
    linkTo: "#",
    pjClass: "my-project-class"
  },
};  

export const hasNoDate: Story = {
  args: {
    title: "Post title Post title Post title",
    linkTo: "#",
    pjClass: "my-project-class"
  },
};  