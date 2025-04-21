import type { Meta, StoryObj } from '@storybook/react';
import { TitleWithSubtitleWrapper } from './TitleWithSubtitleWrapper';

const meta: Meta<typeof TitleWithSubtitleWrapper> = {
  title: 'samples/TitleWithSubtitleWrapper',
  component: TitleWithSubtitleWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TitleWithSubtitleWrapper>;

export const Default: Story = {
  args: {
    subtitle: "Import Sample",
    title: "how to use pjClass prop to overwrite styles of an imported component",
    pjClass: "my-custom-class",
    hasUnderline: true
  },
};
