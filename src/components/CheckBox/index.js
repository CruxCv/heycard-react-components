import React from 'react'
import classNamesBind from 'classnames/bind'
import styles from './index.module.less'

const cx = classNamesBind.bind(styles)

const CheckBox = ({ isShow = false, checked = false, onCheck }) => {
  return (
    <div className={cx('selectedWrap', { active: isShow })} onClick={() => onCheck && onCheck(!checked)}>
      <img
        className={cx('selectIcon', { active: true })}
        src="https://img.16pinpin.com/zyr/item_unselected_icon.png"
      />
      <img
        className={cx('selectIcon', { active: checked })}
        src="https://img.16pinpin.com/zyr/item_selected_icon.png"
      />
    </div>
  )
}

export default CheckBox
