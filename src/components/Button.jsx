

const Button = () => {
  const buttonLabel = 'click me!'  
  return (
  <button onClick={() => console.log('hello')}>{buttonLabel}</button>
  )
}

export default Button
