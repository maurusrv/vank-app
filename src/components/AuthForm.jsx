
import { useEffect } from 'react'
import { useState } from 'react'

const AuthForm = (props) => {
  const { setPage, setUser, setHeaders } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    console.log({ email, password })
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    
    console.log('Submitting...')

    const response = await fetch('http://206.189.91.54/api/v1/auth/sign_in', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      })
    })

    const body = await response.json()

    if (response.status === 401) {
      setErrorMessage(body.errors[0])
    }

    console.log(body)

    if (response.status === 200) {
      setUser(body.data)
      console.log(response.headers)
      setHeaders({
        accessToken: response.headers.get('access-token'),
        client: response.headers.get('client'),
        expiry: response.headers.get('expiry'),
        uid: response.headers.get('uid')
      })

      setPage('dash')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        Email:
        <input type="text" value={email} onChange={(e) => {
          setEmail(e.target.value)
        }} />
      </div>
      <div>
        Password:
        <input type="password" value={password} onChange={(e) => {
          setPassword(e.target.value)
        }}/>
      </div>
      <button type="submit">Login</button>
      <div>{errorMessage}</div>
    </form>
  )
}

export default AuthForm
