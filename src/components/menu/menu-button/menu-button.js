import React, { useContext } from 'react'
import './menu-button.scss'
import { MenuData, MenuDispatch } from '../../../contexts/menuContext'
import { ThemeData } from '../../../contexts/themeContext'

const MenuButton = () => {
    const menuData = useContext(MenuData)
    const menuDispatch = useContext(MenuDispatch)
    const themeData = useContext(ThemeData)
    const handleMenu = () => {
        menuData.buttonOpen ? 
        menuDispatch({ type: 'HIDE_MENU' }) :
        menuDispatch({ type: 'TOGGLE_MENU' })
    }
    return (
        <div className='menu-button__container' 
        onClick={handleMenu}>
        <div className={` ${themeData.menu.backgroundColor} menu-button__line menu-button__line--top ${ menuData.isOpen ? 'open' : '' }`} />
        <div className={` ${themeData.menu.backgroundColor} menu-button__line menu-button__line--middle ${ menuData.isOpen ? 'open' : '' }`} />
        <div className={` ${themeData.menu.backgroundColor} menu-button__line menu-button__line--bottom ${ menuData.isOpen ? 'open' : '' }`} />
        
      </div>
    )
}

export default MenuButton