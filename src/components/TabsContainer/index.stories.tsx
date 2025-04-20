import type { Meta, StoryObj } from '@storybook/react';
import { TabsContainer } from '.';

const meta: Meta<typeof TabsContainer> = {
  title: 'components/layouts/TabsContainer',
  component: TabsContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TabsContainer>;

export const Default: Story = {
  args: {
    tabContents: [
      {
        index: "A",
        content: <p>Tab Content A</p>
      },
      {
        index: "B",
        content: <p>Tab Content B</p>
      },
    ],
  },
};
