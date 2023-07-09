import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import { Landing } from './pages'
import './App.css'
import Nav from './components/Nav'
import { CheckSession } from './services/Auth'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const CheckToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      CheckToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
