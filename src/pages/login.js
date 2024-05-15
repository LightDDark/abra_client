import React, { useState } from 'react'
import fetchApi from '../fetchApi'
import { useAuth } from '../hooks/useAuth'
import {
  Button,
  TextField,
  Container,
  Typography,
  Paper,
  Link,
  CircularProgress,
} from '@mui/material'
import logo from '../static/bookStore-removebg-hd.png'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [credentials, setCred] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCred((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = await fetchApi('/Auth/Login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(data)
      await login({ user: credentials.email, token: data.token, isAuthenticated: true })
      navigate('/')
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }}
        />
        <Typography component="h1" variant="h5" align="center">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            label="Email"
            variant="outlined"
            style={{ marginTop: '1rem' }}
          />
          <TextField
            fullWidth
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            label="Password"
            variant="outlined"
            style={{ marginTop: '1rem' }}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
            disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </form>
        <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
          Don't have an account? <Link href="/register">Register</Link>
        </Typography>
      </Paper>
    </Container>
  )
}
