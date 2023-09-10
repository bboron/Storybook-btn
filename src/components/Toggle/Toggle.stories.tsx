import type { Meta, StoryObj } from '@storybook/react'
import { ToggleComponent as Toggle, ToggleComponent } from './Toggle'
import { useCallback, useState } from 'react'

const meta: Meta<typeof Toggle> = {
  title: 'Foundation/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    handleToggle: { action: 'onChange' },
    isDisabled: {
      control: 'boolean',
    },
    isChecked: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => {
      const [isChecked, setIsChecked] = useState(false)

      const handleToggle = useCallback(() => {
        setIsChecked((prev) => !prev)
      }, [])
      return (
        <div style={{ width: '100px', margin: '10px' }}>
          <Story handleToggle={handleToggle} isChecked={isChecked} />
        </div>
      )
    },
  ],
}

export default meta

const VARIANTS = [
  {
    state: 'Active',
  },
  {
    state: 'Disabled',
    isDisabled: true,
  },
]

const AllToggleVariationsStory: StoryObj<typeof ToggleComponent> = {
  render: (args) => {
    return (
      <>
        <h1>Without Label</h1>
        {VARIANTS.map((el, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'space-between',
              margin: '10px',
            }}
          >
            <p>{el.state}: </p>
            <ToggleComponent {...args} {...el} id={`toggle-${idx}`} />
          </div>
        ))}
        <br />
        <h1>With Label</h1>
        {VARIANTS.map((el, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'space-between',
              margin: '10px',
            }}
          >
            <p>{el.state}: </p>
            <ToggleComponent {...args} {...el} id={`toggle-labeled-${idx}`} labelText='Title' />
          </div>
        ))}
      </>
    )
  },
}
const ToggleStoryTemplate: StoryObj<typeof ToggleComponent> = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <ToggleComponent {...args} id={`toggle-${args.id}`} />
        <br />
        <ToggleComponent {...args} id={`toggle-labeled-${args.id}`} labelText='Title' />
      </div>
    )
  },
}
export const AllVariations = {
  ...AllToggleVariationsStory,
}
export const Active = {
  ...ToggleStoryTemplate,
  args: {
    isDisabled: false,
    id: 0,
  },
}
export const Disabled = {
  ...ToggleStoryTemplate,
  args: {
    isDisabled: true,
  },
}
