import React, { useContext } from 'react'
import './menu-item.scss'
import { MenuDispatch } from '../../../contexts/menuContext';
import { ThemeData } from '../../../contexts/themeContext';

const MenuItem = ({children}) => {
  const themeData = useContext(ThemeData)
  const menuDispatch = useContext(MenuDispatch)
  const handleItem = () => {
    menuDispatch({ type: 'HIDE_MENU' })
}
  return (
    <div className='menu-item__container'>
      <div
        className={` ${ themeData.menu.textColor } menu-item__content`}
        onClick={handleItem}
      >
        {children}
      </div>
      <div className={` ${ themeData.menu.backgroundColor} menu-item__line`} />
    </div>
  )
}

export default MenuItem
