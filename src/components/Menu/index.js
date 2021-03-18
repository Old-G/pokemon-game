import s from './style.module.css'
import cn from 'classnames'

import React from 'react'
import { Link } from 'react-router-dom'

const MENU = [
  {
    title: 'HOME',
    to: '/',
  },
  {
    title: 'GAME',
    to: 'game',
  },
  {
    title: 'ABOUT',
    to: 'about',
  },
  {
    title: 'CONTACT',
    to: 'contact',
  },
]

function Menu({ isActiveMenu, onClickNav }) {
  const onClickLink = () => {
    onClickNav && onClickNav(!isActiveMenu)
  }

  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isActiveMenu === true,
        [s.deactive]: isActiveMenu === false,
      })}
    >
      <div className={cn(s.overlay)} />
      <div className={cn(s.menuItems)}>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to} onClick={onClickLink}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu
