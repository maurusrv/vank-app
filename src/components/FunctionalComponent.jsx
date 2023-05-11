import { useEffect, useState } from 'react'

// function FunctionalComponent () {
const FunctionalComponent = (props) => {
  const { username } = props
  const [count, setCount] = useState(0)  


  // Hooks to demonstrate lifecycles can be combined because in functional, the focus is WHAT STATE should a side effect depend on?
  useEffect(() => {
    console.log('F: componentDidMount!')
  }, [])

  useEffect(() => {
    console.log('F: componentDidUpdate!')
  }, [count])

  useEffect(() => {
    return () => {
      console.log('componentWillUnmount!')
    }
  }, [])

  const onClick = () => setCount(count + 1)

  return (
    <div style={{ flex: 1, border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
      <h6>Hello, {username}!</h6>
      <h1>{count}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}

export default FunctionalComponent
