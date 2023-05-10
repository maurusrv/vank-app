import { useState, useEffect } from 'react'

const FunctionalComponent = () => {

  console.log('FunctionalComponent is called.')

  // const [click, setClick] = useState(0)
  const [count, setCount] = useState(0)

  const [colorIndex, setColorIndex] = useState(0)
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

  // useEffect(() => {
  //   console.log('Hello, Hooks!')
  // })

  // Side-effect Trigger of State Change
  useEffect(() => { 
    setColorIndex(count % 7) 
  }, [count])

  // Event-Handler => Direct Trigger of State Change
  const onAddCount = () => {
    // setClick(click + 1)
    // setTimeout(() => { // this simulates expensive process
      // setCount(count + 1)
      setCount((prevCount) => prevCount + 1)
    // }, 5000)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      {/* <span>Clicks: {click}</span> */}
      <span>Count: {count}</span> 
      <button style={{ backgroundColor: colors[colorIndex] }} onClick={onAddCount}>Add count</button>
    </div>
  )
}

export default FunctionalComponent
