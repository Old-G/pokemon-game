import Menu from '../Menu'
import NavBar from '../NavBar'

function MenuHeader() {
  const handleClickMenu = () => {}

  return (
    <>
      <Menu onClickMenu={handleClickMenu}/>
      <NavBar />
    </>
  )
}

export default MenuHeader
