import s from './style.module.css'
import cn from 'classnames'

import React from 'react'

const MENU = [
  {
    title: 'HOME',
    to: '#welcome',
  },
  {
    title: 'GAME',
    to: '#game',
  },
  {
    title: 'ABOUT',
    to: '#about',
  },
  {
    title: 'CONTACT',
    to: '#contact',
  },
]

function Menu({ isActiveMenu }) {
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
              <a href={to}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu
