import { FC } from 'react'
import styles from './Button.module.scss'
export type ButtonComponentPropsType = {
  children?: string
  bgColor?: string
  radius?: number
  secondary?: boolean
  size?: string
}

export const ButtonComponent: FC<ButtonComponentPropsType> = (props: ButtonComponentPropsType) => {
  const { children, bgColor, radius, secondary, size } = props

  return (
    <div className={styles.wrapper}>
      <button
        style={{
          backgroundColor: bgColor,
          borderRadius: radius,
        }}
        className={`${styles.button} ${secondary ? styles.secondary : ''} ${
          size ? styles[size] : ''
        }`}
      >
        {children}
      </button>
    </div>
  )
}
