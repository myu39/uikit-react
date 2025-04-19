import type { Meta, StoryObj } from '@storybook/react';
import { SimpleTitle } from '.';

const meta: Meta<typeof SimpleTitle> = {
  title: 'components/titles/SimpleTitle',
  component: SimpleTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SimpleTitle>;

export const h2: Story = {
  args: {
    title: "タイトル",
    tagType: "h2"
  },
};

export const h3: Story = {
  args: {
    title: "タイトル",
    tagType: "h3"
  },
};

export const h4: Story = {
  args: {
    title: "タイトル",
    tagType: "h4"
  },
};

export const h5: Story = {
  args: {
    title: "タイトル",
    tagType: "h5"
  },
};

export const h6: Story = {
  args: {
    title: "タイトル",
    tagType: "h6"
  },
};