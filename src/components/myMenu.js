import { Tooltip, ListItemIcon, MenuItem, Menu, IconButton } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useState } from 'react'
import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function MyMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    if (!user.isAuthenticated) {
      navigate('/login')
    } else {
      setAnchorEl(event.currentTarget)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          color="inherit"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}>
          <AccountCircleIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
