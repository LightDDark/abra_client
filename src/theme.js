import * as React from 'react'
import { createTheme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props
  // Map href (MUI) -> to (react-router)
  return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#1565c0', // Dark blue
    },
    secondary: {
      main: '#ffffff', // White
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    button: {
      fontStyle: 'italic',
    },
  },
  spacing: 8,
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1565c0', // Dark blue app bar
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
          '&:hover': {
            cursor: 'pointer',
            opacity: 0.8,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: (theme) => theme.spacing(2),
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: (theme) => theme.spacing(3),
        },
      },
    },
  },
})

export default theme
