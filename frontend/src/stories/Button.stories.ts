import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/common/Button';
import '../index.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    onClick: () => console.log('Button clicked!'),
    children: 'Click me',
  },
};

export const WithCustomClassName: Story = {
  args: {
    className: 'bg-green-500 hover:bg-green-700',
    children: 'Green Button',
  },
};

export const Disabled: Story = {
  args: {
    // No onClick for disabled state
    children: 'Disabled Button',
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a button with a longer text label',
  },
};
