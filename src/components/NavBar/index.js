import s from './style.module.css'
import cn from 'classnames'

function NavBar({ isActiveNav, bgActive = false, onClickNav }) {
  const onClick = () => {
    onClickNav && onClickNav()
  }

  return (
    <nav className={cn(s.root, { [s.bgActive]: bgActive })}>
      <div className={cn(s.navWrapper)}>
        <p className={cn(s.brand)}>LOGO</p>
        <div
          onClick={onClick}
          className={cn(s.menuButton, { [s.active]: isActiveNav })}
        >
          <span />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
