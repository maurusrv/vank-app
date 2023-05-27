import { useEffect } from "react"


const Dashboard = (props) => {
  const { accessToken, client, expiry, uid } = props

  useEffect(() => {
    async function getUsers () {
      const getUsersResponse = await fetch('http://206.189.91.54/api/v1/users', {
        method: 'GET',
        headers: {
          'access-token': accessToken,
          'client': client,
          'expiry': expiry,
          'uid': uid,
        } 
      })

      const body = await getUsersResponse.json()
      console.log(body)      
    }

    getUsers()
  }, [accessToken, client, expiry, uid])

  return (
    <div>You are in the dashboard!</div>
  )
}

export default Dashboard