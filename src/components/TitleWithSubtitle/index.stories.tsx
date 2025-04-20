import type { Meta, StoryObj } from '@storybook/react';
import { TitleWithSubtitle } from '.';

const meta: Meta<typeof TitleWithSubtitle> = {
  title: 'components/titles/TitleWithSubtitle',
  component: TitleWithSubtitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TitleWithSubtitle>;

export const Default: Story = {
  args: {
    title: "Title",
    subtitle: "Sub Title"
  },
};

export const hasUnderline: Story = {
  args: {
    title: "Title",
    subtitle: "Sub Title",
    hasUnderline: true
  },
};