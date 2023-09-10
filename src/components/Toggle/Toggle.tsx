import { ChangeEventHandler, FC } from 'react'
import cn from 'classnames'
import styles from './Toggle.module.scss'
type ToggleComponentPropsType = {
  isChecked: boolean
  name?: string
  id?: string
  labelText?: string
  isDisabled?: boolean
  thumbColor?: string
  trackColor?: string
  handleToggle?: ChangeEventHandler<HTMLInputElement>
}

export const ToggleComponent: FC<ToggleComponentPropsType> = (props: ToggleComponentPropsType) => {
  const {
    isChecked,
    isDisabled = false,
    id,
    name,
    thumbColor,
    trackColor,
    labelText,
    handleToggle,
    ...toggleProps
  } = props
  /**
   * TODO implementation for space key
   */
  return (
    <div className={styles.wrapper}>
      <input
        disabled={isDisabled}
        checked={isChecked}
        name={name}
        onChange={handleToggle && handleToggle}
        className={styles.input}
        id={id ? id : 'toggle-element'}
        type='checkbox'
        data-state={isChecked}
        data-disabled={isDisabled ? '' : undefined}
        tabIndex={0}
        {...toggleProps}
      />
      <label
        className={cn(styles.label)}
        htmlFor={id ? id : 'toggle-element'}
        style={{ backgroundColor: trackColor && trackColor }}
      >
        <span
          className={styles.toggleButton}
          style={{ backgroundColor: thumbColor && thumbColor }}
        />
      </label>
      {labelText && (
        <label className={styles.labelText} htmlFor={id ? id : 'toggle-element'}>
          {labelText}
        </label>
      )}
    </div>
  )
}
