import type { Meta, StoryObj } from '@storybook/react';
import { GoogleMapEmbed } from '.';

const meta: Meta<typeof GoogleMapEmbed> = {
  title: 'components/embeds/GoogleMapEmbed',
  component: GoogleMapEmbed,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta;

type Story = StoryObj<typeof GoogleMapEmbed>

const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.6281932634374!2d172.63383917676575!3d-43.53094552110831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a3cabb0b489%3A0xa0f1ff0b5ab2c388!2z44Kv44Op44Kk44K544OI44OB44Oj44O844OB5aSn6IGW5aCC!5e0!3m2!1sja!2sjp!4v1745134798577!5m2!1sja!2sjp"

export const Default: Story = {
  args: {
    src: mapURL,
    id: "mygooglemap",
    title: "My Google Map"
  }
}