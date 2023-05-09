
import { useState } from 'react'
import Button from './Button'
import Input from './Input'

function Form () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onUsernameChange = (value) => { setUsername(value) }
  const onPasswordChange = (value) => { setPassword(value) }

  const onFormSubmit = (e) => {
    e.preventDefault()

    if (!username) {
      console.log('Username is empty!')   
    }

    if (!password) {
      console.log('Password is empty!')
    }

    console.log('Submitting...', {
      username,
      password
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      Login
      <Input type="text" label="Username" input={username} onChange={onUsernameChange} />
      <Input type="password" label="Password" input={password} onChange={onPasswordChange} />
      <Button type="submit" label="Login" />
    </form>
  )
}

export default Form