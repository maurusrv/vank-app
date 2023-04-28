

const NavBarItem = (props) => {
  const { className, text } = props

  return (
    <a className={className}>{text}</a>
  )
}

export default NavBarItem
