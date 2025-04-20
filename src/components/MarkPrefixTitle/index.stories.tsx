import type { Meta, StoryObj } from '@storybook/react';
import { MarkPrefixTitle } from '.';

const meta: Meta<typeof MarkPrefixTitle> = {
  title: 'components/titles/MarkPrefixTitle',
  component: MarkPrefixTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof MarkPrefixTitle>;

export const h3_with_hypen: Story = {
  args: {
    title: "タイトル",
    tagType: "h3",
    markType: "hyphen"
  },
};