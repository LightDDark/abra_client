import React, { useState } from 'react'
import fetchApi from '../fetchApi'
import { useNavigate } from 'react-router-dom'
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

export default function Register() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetchApi('/Auth/Register', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // redirect to login page
      navigate('/login')
    } catch (error) {
      console.error('Register failed:', error)
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
          Register
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
            {loading ? <CircularProgress size={24} /> : 'Register'}
          </Button>
        </form>
        <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </Paper>
    </Container>
  )
}
