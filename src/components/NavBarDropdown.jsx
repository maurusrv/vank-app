import NavBarItem from "./NavBarItem"

const NavBarDropdown = (props) => {
  const { firstName } = props

  console.log('firstName from NavBarDropdown', firstName)
  return (
    <div className="navbar-dropdown">
      <NavBarItem text="About" className="navbar-item"/>
      <NavBarItem text="Jobs" className="navbar-item"/>
      <NavBarItem text="Contact" className="navbar-item"/>
      <hr />
      <p className="navbar-divider"> </p>
      <hr />
      <NavBarItem text="Report an issue" className="navbar-item"/>
    </div>
  )
}

export default NavBarDropdown