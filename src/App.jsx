import { useEffect, useState } from 'react'
import AuthForm from "./components/AuthForm"
import Dashboard from './components/Dashboard'

function App() {
  const [page, setPage] = useState('auth')
  const [user, setUser] = useState(null)
  const [headers, setHeaders] = useState({})

  useEffect(() => {
    console.log({
      page,
      user,
    })
  })

  return (
    <div>
      {page === 'auth' && <AuthForm setPage={setPage} setUser={setUser} setHeaders={setHeaders} />}
      {page === 'dash' && <Dashboard {...headers} />}
    </div>
  )
}

export default App
