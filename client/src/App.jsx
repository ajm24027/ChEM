import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import { Landing, Lobby, Register, Session, SignIn } from './pages'
import { RenderSessions, deleteSession } from '../src/services/SessionServices'
import { SummonGhosts } from './services/GhostServices'
import './App.css'
import Nav from './components/Nav'
import { CheckSession } from './services/Auth'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  const [user, setUser] = useState(null)
  const [ghosts, setGhosts] = useState([])
  const [userSessions, setUserSessions] = useState([])
  const [currentSession, setCurrentSession] = useState(null)
  const [dataFetched, setDataFetched] = useState(false)

  const handleLogOut = () => {
    setGhosts([])
    setUserSessions([])
    setUser(null)
    localStorage.clear()
    console.log('Logged Out')
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

  useEffect(() => {
    const fetchData = async () => {
      const anchorGhosts = async () => {
        const data = await SummonGhosts()
        console.log('Ghosts have been anchored to the digital plane!')
        console.log(data)
        setGhosts(data)
      }

      const arrangeSessions = async () => {
        const data = await RenderSessions(user.id)
        console.log('Your sessions are awaiting you in the lobby!')
        console.log(data)
        setUserSessions(data)
      }

      anchorGhosts()
      arrangeSessions()
      setDataFetched(true)
    }

    if (user && !dataFetched) {
      fetchData()
    }
  }, [user, dataFetched])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Nav user={user} handleLogOut={handleLogOut} />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/lobby"
              element={
                <Lobby
                  user={user}
                  ghosts={ghosts}
                  sessions={userSessions}
                  setUserSessions={setUserSessions}
                  setCurrentSession={setCurrentSession}
                  currentSession={currentSession}
                  dataFetched={dataFetched}
                  setDataFetched={setDataFetched}
                />
              }
            />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/session"
              element={<Session currentSession={currentSession} />}
            />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
