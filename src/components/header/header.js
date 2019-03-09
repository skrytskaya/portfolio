import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useEffect, useContext } from 'react'
import './header.scss'
import { ThemeData, ThemeDispatch } from '../../contexts/themeContext'

import Icon from '../icon'
import { ICONS } from '../../utils/const'

const Header = React.forwardRef(({ siteTitle }, ref) => {
  const themeData = useContext(ThemeData)
  const themeDispatch = useContext(ThemeDispatch)

  const switchThemeToDark = () => {
    themeDispatch({
      type: 'SET_THEME',
      payload: {
        header: {
          backgroundColor: 'dark',
          textColor: 'dark'
        },
        footer: {
          backgroundColor: 'dark',
          // backgroundColor: themeData.header.backgroundColor === 'dark' ? 'light' : 'dark',
          textColor: 'dark'
        }
      }
    })
  }
  const switchThemeToLight = () => {
    themeDispatch({
      type: 'SET_THEME',
      payload: {
        header: {
          backgroundColor: 'light',
          textColor: 'dark'
        },
        footer: {
          backgroundColor: 'light',
          // backgroundColor: themeData.header.backgroundColor === 'dark' ? 'light' : 'dark',
          textColor: 'dark'
        }
      }
    })
  }

  return (
    <header
      style={{
      }}
      id='header'
      ref={ref}
      className={themeData ? themeData.header.backgroundColor : ''}
    >
      <nav className='header wrapper'>
        <div className="switch-buttons">
          <a onClick={() => { switchThemeToDark() }}><Icon icon={ICONS.MOON} size={2.8}/></a>
          <a onClick={() => { switchThemeToLight() }}><Icon icon={ICONS.SUN} icon2={ICONS.SUN2}/></a>
        </div>
        <div className="nav">
          <Link to="/"
            state={{ themeData }}
            className="nav-item"
            activeClassName="selected"
          >
            Home
          </Link>
          <Link to="/about/"
            state={{ themeData }}
            className="nav-item"
            activeClassName="selected"
          >
            About
          </Link>
          <Link to="/work/"
            state={{ themeData }}
            className="nav-item"
            activeClassName="selected"
          >
            Work
          </Link>
          <Link to="/contact/"
            state={{ themeData }}
            className="nav-item"
            activeClassName="selected"
          >
            Contact
          </Link>
        </div>       
      </nav>
    </header>
  )
})

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
