import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import TodoListItem from '../components/todos/TodoListItem';
import { withRouter } from 'storybook-addon-react-router-v6';


const meta = {
  title: 'Components/TodoListItem',
  component: TodoListItem,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TodoListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todo: {
      id: '1',
      title: 'Learn Storybook',
      description: 'Explore component-driven development and visual testing.',
    },
  },
};

export const Completed: Story = {
  args: {
    ...Default.args,
    todo: {
      ...Default.args.todo,
    },
  },
};

export const WithActions: Story = {
  args: {
    todo: {
      // ... todo data
      title: 'Learn Storybook',
      description: 'Explore component-driven development and visual testing.',
    },
    onView: () => console.log('View todo'),
    onEdit: () => console.log('Edit todo'),
    onDelete: () => console.log('Delete todo'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test interactions with buttons (replace with your actual testing logic)
    const viewButton = canvas.getByRole('button', { name: /View/i });
    await expect(viewButton).toBeInTheDocument();
    await userEvent.click(viewButton);
    // Simulate navigation logic

    // ... test other actions (edit, delete) similarly
  },
};
