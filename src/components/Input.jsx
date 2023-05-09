import { useState, useRef } from 'react'
import Button from './Button'

function Input (props) {
  const { type, label, input, onChange } = props

  // const [input, setInput] = useState('')
  // const inputRef = useRef()

  // const onTestClick = () => {
  //   console.log(input)
  //   console.log(inputRef)
  //   console.log(inputRef.current.value)
  // }

  return (
    <div>
      <label>{label}</label>{' '}
{/* 
      <br />
      Uncontrolled <input 
        type={type} 
        name={label.toLowerCase()}
        ref={inputRef}
        
      />
    <br />
      Controlled */}
      <input type={type} value={input} onChange={(e) => onChange(e.target.value)} />
      {/* <br />
      <Button type="button" label="Test" onClick={onTestClick} /> */}
    </div>
  )
}

export default Input