import React, { useContext } from 'react'
import Icon from '../icon'
import { ICONS } from '../../utils/const'
import './footer.scss'
import { ThemeData } from '../../contexts/themeContext'

const Footer = () => {
  const themeData = useContext(ThemeData)
  const currentTime = new Date()
  return (
    <div className={`footer ${ themeData.footer.backgroundColor }`}>
      <div className="footer-container wrapper">
        <ul className="footer-links">
          <li>
            <a href="https://www.linkedin.com/in/viktoryia-skrytskaya" target="_blank">
              <Icon icon={ICONS.LINKEDIN2}/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/v_skrytskaya" target="_blank">
              <Icon icon={ICONS.TWITTER}/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/viktoryia.skrytskaya" target="_blank">
              <Icon icon={ICONS.FACEBOOK}/>
            </a>
          </li>
        </ul>
        <div className={`footer-text ${ themeData.footer.textColor }`}>Viktoryia Skrytskaya ©{ currentTime.getFullYear() }</div>
      </div>
    </div>
  )
}

export default Footer
