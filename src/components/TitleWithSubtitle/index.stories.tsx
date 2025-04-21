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
    subtitle: "Sub Title - vstack"
  },
};

export const hasUnderline: Story = {
  args: {
    title: "Title",
    subtitle: "Sub Title - vstack",
    hasUnderline: true
  },
};

export const vstackReverse: Story = {
  args: {
    title: "Title",
    subtitle: "Sub Title - vstack-reverse",
    stackType: "vstack-reverse"
  },
};


export const hstack: Story = {
  args: {
    title: "Title",
    subtitle: "Sub Title - hstack",
    stackType: "hstack"
  },
};

export const hstackReverse: Story = {
  args: {
    title: "Title",
    subtitle: "Sub Title - hstack-reverse",
    stackType: "hstack-reverse"
  },
};

export const vwrite: Story = {
  args: {
    title: "Title",
    subtitle: "Sub Title - vwrite",
    writingMode: "vwrite",
  },
};

export const vwrite_hstack: Story = {
  args: {
    title: "Title",
    subtitle: "Sub Title - vwrite",
    writingMode: "vwrite",
    stackType: "hstack"
  },
};