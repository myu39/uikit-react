import type { Meta, StoryObj } from '@storybook/react';
import { Picture } from '.';

const meta: Meta<typeof Picture> = {
  title: 'components/images/Picture',
  component: Picture,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Picture>;

export const Default: Story = {
  args: {
    srcSP: "src/assets/images/samples/750x750.png",
    srcSPWebp: "src/assets/images/samples/750x750.webp",
    srcPC: "src/assets/images/samples/1200x900.png",
    srcPCWebp: "src/assets/images/samples/1200x900.webp",
    altText: "Sample image for Picture component",
    isLazy: false,
    breakpoint: 520
  },
};  