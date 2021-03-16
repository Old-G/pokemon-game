import { useState } from 'react'
import Menu from '../Menu'
import NavBar from '../NavBar'

function MenuHeader() {
  const [isActive, setActive] = useState(false)

  const handleClickMenu = () => {
    setActive((prev) => !prev)
  }

  return (
    <>
      <Menu isActiveMenu={isActive} />
      <NavBar isActiveNav={isActive} onClickNav={handleClickMenu} />
    </>
  )
}

export default MenuHeader
