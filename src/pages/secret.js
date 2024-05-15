import { useAuth } from '../hooks/useAuth'

export default function Secret() {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <h1>This is a Secret page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
