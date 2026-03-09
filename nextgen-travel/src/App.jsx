import { useState } from 'react'
import Login from './Login'
import MainWebsite from './MainWebsite'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  return (
    <>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <MainWebsite />
      )}
    </>
  )
}

export default App
