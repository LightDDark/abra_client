import React, { useState } from 'react'
import {
  Button,
  TextField,
  Container,
  Typography,
  Paper,
  CircularProgress,
  Box,
  MenuItem,
  Select,
  InputAdornment
} from '@mui/material'
import { MuiColorInput } from 'mui-color-input'
import logo from '../static/logo.jpg'

export default function PetForm() {
    const [petDetails, setPetDetails] = useState({ name: '', color: '', age: 0, type: 0 })
    const [petError, setPetError] = useState({ name: true, color: true, age: true, type: true })
    const [loading, setLoading] = useState(false)


    const handleNameChange = e => {
      setPetDetails((prevState) => ({
        ...prevState,
        'name': e.target.value,
      }))
      if (e.target.value.length < 0) {
        setPetError((prevState) => ({
          ...prevState,
          'name': "Name must be at least 0 characters long",
        }))
      } else if (e.target.value.length > 25) {
        setPetError((prevState) => ({
          ...prevState,
          'name': "Name must be less than 26 characters long",
        }))
      } else {
        setPetError((prevState) => ({
          ...prevState,
          'name': false,
        }))
      }
    };

    const handleAgeChange = e => {
      setPetDetails((prevState) => ({
        ...prevState,
        'age': e.target.value,
      }))
      if (e.target.value < 0) {
        setPetError((prevState) => ({
          ...prevState,
          'age': "Age must be a positive number",
        }))
      } else if (e.target.value > 20) {
        setPetError((prevState) => ({
          ...prevState,
          'age': "Age must be less than 20",
        }))
      } else {
        setPetError((prevState) => ({
          ...prevState,
          'age': false,
        }))
      }
    };

    const handleColorChange = value => {
      setPetDetails((prevState) => ({
        ...prevState,
        'color': value,
      }))
      if (!/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value)) {
        setPetError((prevState) => ({
          ...prevState,
          'color': "Color must be a valid color Hexa",
        }))
      }else {
        setPetError((prevState) => ({
          ...prevState,
          'color': false,
        }))
      }
    };

    const handleTypeChange = e => {
      setPetDetails((prevState) => ({
        ...prevState,
        'type': e.target.value,
      }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!(petError.age || petError.color || petError.name || petError.type)) {
          setLoading(true)
        try {
          const data = await fetch('/api/pet', {
            method: 'POST',
            body: JSON.stringify(petDetails),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          console.log(data)
        } catch (error) {
          console.error('submit failed:', error)
        } finally {
          setLoading(false)
        }
        }
    }
    return(
        <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }}
        />
        <Typography component="h1" variant="h5" align="center">
          Submit Pet
        </Typography>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
          <TextField
            fullWidth
            required
            type="text"
            name="name"
            value={petDetails.name}
            onChange={handleNameChange}
            label="Name"
            variant="outlined"
            error={petError.name}
            helperText={petError.name}
            style={{ marginTop: '1rem' }}
          />
          <TextField
            fullWidth
            required
            type="number"
            name="age"
            value={petDetails.age}
            onChange={handleAgeChange}
            label="Age"
            min="0"
            max="20"
            variant="outlined"
            style={{ marginTop: '1rem' }}
            error={petError.age}
            helperText={petError.age}
          />
          <MuiColorInput
            required
            label="Color"
            name="color"
            style={{ marginTop: '1rem' }}
            format="hex"
            value={petDetails.color}
            error={petError.color}
            helperText={petError.color}
            onChange={handleColorChange} />
          <Select
          required
          label="Type"
          name='type'
          style={{ marginTop: '1rem' }}
          value={petDetails.type}
          onChange={handleTypeChange}
        >
          <MenuItem value={0}>Dog</MenuItem>
          <MenuItem value={1}>Cat</MenuItem>
          <MenuItem value={2}>Horse</MenuItem>
          <MenuItem value={3}>Other</MenuItem>
        </Select>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
            disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
          </Box>
      </Paper>
    </Container>
    )
}