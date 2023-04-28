import Button from "./Button"
import './Button.css'

// Props param is a way to pass data from parent component to child aka. prop-drilling
const ComponentStructure = (props) => { // 1. entry-point
  const { someProp } = props // 2. destructure data

  const variableId = 1

  someProp++;
  // 3. optional, compute or change prop data however you need it to be changed
  
  
  // 4. Use prop data on your jsx!
  return (
    <div 
      className="button-container" 
      id={variableId}>
      <Button someProp={someProp} />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  )
  
  
  // A React Component is a function that returns a jsx expression

  // 1. String
  // return 'Hello, World!'

  // 2. null
  // return null

  // 3. undefined
  // return undefined

  // 4. HTML tag
  // return <div>Hello, World!</div>

  // 5. Array of tags
  // return [
  //   <div>Hello, World 1!</div>,
  //   <div>Hello, World 2!</div>
  // ]

  // 6. Fragment
  // return (
  //   <>
  //     <div>Hello, World 1!</div>
  //     <div>Hello, World 2!</div>
  //   </> 
  // )

  // React must return jsx expression with only one parent!
  // return (
  //   <div>Hello, World 1!</div>
  //   <div>Hello, World 2!</div>
  // )
}

export default ComponentStructure
