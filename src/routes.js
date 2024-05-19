// const routes = [
//   {
//     path: '/',
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: 'team',
//         element: <Team />,
//         loader: teamLoader,
//       },
//     ],
//   },
// ]
import MyComponent from './myComponent'
import Secret from './pages/secret'
import Login from './pages/login'
import Register from './pages/register'
import ProtectedRoute from './components/protectedRoute'
import ErrorPage from './pages/errorPage'
import MyAppBar from './components/myAppBar'
import Gallery from './pages/gallery'
import { Navigate } from 'react-router-dom'
import Home from './pages/home'
import BookPage from './pages/bookPage'

const GalleryLoader = async () => {
  return fetch('/api/Books')
}

const BookPageLoader = async ({ params }) => {
  return fetch(`/api/Books/${params.Id}`)
}

const routes = [
  {
    path: '/',
    element: <MyAppBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // <-- match on parent, i.e. "/"
        element: <Navigate to="/home" replace />, // <-- redirect
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
        loader: GalleryLoader,
      },
      {
        path: '/gallery/:Id',
        element: <BookPage />,
        loader: BookPageLoader,
      },
      {
        path: 'only',
        element: (
          <ProtectedRoute>
            <Secret />
          </ProtectedRoute>
        ),
      },
    ],
  },
  //   {
  //     path: '/',
  //     element: <MyComponent />,
  //     loader: MyComponentLoader,
  //     errorElement: <ErrorPage />,
  //   },
]

export default routes
