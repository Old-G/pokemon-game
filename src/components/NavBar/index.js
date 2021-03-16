import { useState } from 'react'
import s from './style.module.css'
import cn from 'classnames'

function NavBar() {
  const [isActive, setActive] = useState(false)

  const onClick = () => {
    setActive(!isActive)
  }

  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          href='#'
          onClick={onClick}
          className={cn(s.menuButton, { [s.active]: isActive })}
        >
          <span />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
