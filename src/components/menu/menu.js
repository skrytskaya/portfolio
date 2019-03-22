import React, { useContext } from 'react'
import './menu.scss'
import { MenuData } from '../../contexts/menuContext'
import { ThemeData } from '../../contexts/themeContext';

const Menu = ({children}) => {
  const menuData = useContext(MenuData)
  const themeData = useContext(ThemeData)

  return (
    <div className={` menu__container ${ themeData.menu.backgroundColor } ${ menuData.isOpen ? ' open' : '' } `}>
    {
      menuData.isOpen?
        <div className='menu__list'>
          {children}
        </div>:null
    }
  </div>
  )
}

export default Menu
