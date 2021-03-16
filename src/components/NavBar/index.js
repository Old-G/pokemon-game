import s from './style.module.css'
import cn from 'classnames'

function NavBar({ isActiveNav, onClickNav }) {
  const onClick = () => {
    onClickNav && onClickNav()
  }

  return (
    <nav className={cn(s.root)}>
      <div className={cn(s.navWrapper)}>
        <p className={cn(s.brand)}>LOGO</p>
        <a
          href='/#'
          onClick={onClick}
          className={cn(s.menuButton, { [s.active]: isActiveNav })}
        >
          <span />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
