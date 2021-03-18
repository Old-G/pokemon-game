import { useState } from 'react'
import Menu from '../Menu'
import NavBar from '../NavBar'

function MenuHeader({ bgActive }) {
  const [isActive, setActive] = useState(false)

  const handleClickMenu = () => {
    setActive((prev) => !prev)
  }

  return (
    <>
      <Menu isActiveMenu={isActive} onClickNav={handleClickMenu} />
      <NavBar
        isActiveNav={isActive}
        onClickNav={handleClickMenu}
        bgActive={bgActive}
      />
    </>
  )
}

export default MenuHeader
