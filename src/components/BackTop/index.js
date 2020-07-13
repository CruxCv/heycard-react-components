import React, { useState, useEffect } from 'react'
import { px2vw, animateToTop } from '../../utils'
import './index.less'

const BackTop = ({ refer, callback, bottom = 30, right = 30 }) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const referHeight = refer || window.screen.height
    const onScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop

      setIsShow(scrollTop > referHeight)
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const BackTop = () => {
    animateToTop()
    if (callback) callback()
  }

  return (
    <img
      onClick={BackTop}
      className={`back-to-top-container ${isShow ? '' : 'hide'}`}
      style={{ bottom: px2vw(bottom), right: px2vw(right) }}
      src="https://img.16pinpin.com/taoke/go-top.png"
    />
  )
}

export default BackTop
