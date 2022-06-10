import NavContainer from './nav-menu-container-component'
import './nav-menu-styles/nav-menu.css'

const NavMenu = () => {
  return (
    <div className="nav-menu">
        <div className="menu-button">X</div>
        <NavContainer/>
    </div>
  )
}

export default NavMenu