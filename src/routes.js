import ErrorPage from './pages/errorPage'
import MyAppBar from './components/myAppBar'
import { Navigate } from 'react-router-dom'
import PetForm from './pages/petForm'
import PetsPage from './pages/petPage'

const PetsPageLoader = async () => {
  return fetch('/api/pets')
}

const routes = [
  {
    path: '/',
    element: <MyAppBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // <-- match on parent, i.e. "/"
        element: <Navigate to="/newPet" replace />, // <-- redirect
      },
      {
        path: '/newPet',
        element: <PetForm />,
      },
      {
        path: '/pets',
        element: <PetsPage />,
      }
    ],
  },
]

export default routes
