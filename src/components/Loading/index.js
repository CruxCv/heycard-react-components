import React from 'react'
import classNamesBind from 'classnames/bind'
import styles from './index.module.less'

const cx = classNamesBind.bind(styles)

export default function Loading({ show = false }) {
  return (
    <div className={cx('mask', { show })}>
      <div className={cx('container')}>
        <img
          className={cx('gif')}
          src="https://img.16pinpin.com/loading_transparent.gif"
        />
      </div>
    </div>
  )
}
