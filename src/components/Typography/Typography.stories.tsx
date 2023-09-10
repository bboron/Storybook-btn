import type { Meta, StoryObj } from '@storybook/react'
import { TypographyComponent as Typography, TypographyTags, TypographyVariants } from './Typography'
const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  tags: ['autodocs'],
}

export default meta

const VARIANTS = Object.values(TypographyVariants)
const TAGS = Object.values(TypographyTags)

const TypographyStoryTemplate: StoryObj<typeof Typography> = {
  name: 'Typography',
  render: (args) => <Typography {...args}>{args.children}</Typography>,
}
const TypographyStoryTemplateAll: StoryObj<typeof Typography> = {
  name: 'Typography All',
  render: (args) => (
    <>
      {TAGS.map((tag, idxT) => {
        return (
          <>
            <span>{tag.toUpperCase()}</span>
            <br />
            {VARIANTS.map((variant, idxV) => (
              <>
                <br />
                <Typography
                  key={`${idxT}-${idxV}`}
                  tag={tag}
                  fontWeight={variant as keyof typeof TypographyVariants}
                >
                  {args.children}
                </Typography>
                <br />
              </>
            ))}
            <br />
            <br />
          </>
        )
      })}
    </>
  ),
}
export const Default = {
  ...TypographyStoryTemplate,
  args: {
    tag: 'h1',
    fontWeight: 'medium',
    lineHeight: 35,
    children: 'Typography',
    style: {
      background: 'black',
      color: 'white',
    },
  },
}

export const AllTagsAndWeights = {
  ...TypographyStoryTemplateAll,
  args: {
    children: 'Typography',
  },
}
