import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()
  console.log('auth data ', useAuth())
  if (!user.isAuthenticated) {
    // user is not authenticated
    return <Navigate to="/login" />
  }
  return children
}
