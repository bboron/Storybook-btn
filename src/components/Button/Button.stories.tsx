import type { Meta, StoryObj } from '@storybook/react'
import { ButtonComponent as Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Foundation/Button',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['btn-small', 'btn-normal', 'btn-large'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary ',
    radius: 10,
  },
}
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    radius: 10,
    secondary: true,
  },
}
