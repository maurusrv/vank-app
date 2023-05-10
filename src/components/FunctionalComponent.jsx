import { useState } from 'react'

const FunctionalComponent = (props) => {
  // const { name, onClick } = props

  console.log('FunctionalComponent is called.')

  const [count, setCount] = useState(0)

  const onAddCount = () => {
    setCount(count + 1)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <span>UI change is directly state variable - </span>
      <span>Count: {count}</span> 
      <span>UI change is derived from state variable - </span> 
      {count === 5 && (
        <span>Only show this message if count is 5</span>
      )}

      <button onClick={onAddCount}>Add count</button>
    </div>
  )
}

export default FunctionalComponent
