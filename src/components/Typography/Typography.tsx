import { ReactElement, ReactNode, useMemo, CSSProperties, createElement } from 'react'
import cn from 'classnames'

import { IntRange } from '../types'
import styles from './Typography.module.scss'

export enum TypographyTags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  span = 'span',
}

export enum TypographyVariants {
  bold = 'bold',
  semiBold = 'semi-bold',
  medium = 'medium',
  regular = 'regular',
}

export type TypographyPropsType = {
  tag: keyof typeof TypographyTags
  fontWeight?: keyof typeof TypographyVariants
  fontSize?: IntRange<10, 100>
  lineHeight?: IntRange<1, 100>
  className?: string
  onClick?: () => void
  style?: CSSProperties
  children: ReactNode
}

export const TypographyComponent = ({
  tag,
  fontWeight,
  fontSize,
  lineHeight,
  className,
  onClick,
  style,
  children,
}: TypographyPropsType): ReactElement => {
  const htmlTag = useMemo(
    () =>
      tag ? (TypographyTags[tag] ? TypographyTags[tag] : TypographyTags.span) : TypographyTags.span,
    [tag],
  )

  const componentClassName = useMemo(
    () =>
      cn(styles.typographyElement, tag && styles[tag], fontWeight && styles[fontWeight], className),
    [tag, fontWeight, className],
  )

  return createElement(
    htmlTag,
    {
      className: componentClassName,
      onClick,
      style: { ...style, fontSize, lineHeight: `${lineHeight}px` },
    },
    children,
  )
}
