function Button (props) {
  const { type, label, onClick } = props
  return (
    <button onClick={onClick} type={type}>{label}</button>
  )
}

export default Button