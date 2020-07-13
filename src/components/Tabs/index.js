import React, { useState, Fragment } from 'react'
import classNamesBind from 'classnames/bind'
import styles from './index.module.less'

const cx = classNamesBind.bind(styles)

const Tabs = ({
  tabs,
  className,
  defaultValue,
  onChange,
  showCount = false
}) => {
  const [check, setCheck] = useState(defaultValue || tabs[0].value)
  const onCheck = val => {
    setCheck(val)
    if (onChange) onChange(val)
  }

  return (
    <Fragment>
      <div className={cx('fixedContainer')}>
        <div className={cx('tabsWrap', className || '')}>
          {tabs.map(({ label, value, count = 0 }) => (
            <div
              className={cx('tabItem', { active: check === value })}
              key={value}
              onClick={() => onCheck(value)}
            >
              <div className={cx('tabItemContainer')}>
                {label}
                {showCount && !!count ? `(${count})` : ''}
                <div className={cx('tabBottom', { active: check === value })} />
              </div>
            </div>
          ))}
        </div>
        <div className={cx('borderBottom')} />
      </div>
      <div className={cx('placeholder')} />
    </Fragment>
  )
}

export default Tabs
