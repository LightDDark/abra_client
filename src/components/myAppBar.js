import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Box, Tooltip, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Outlet, useNavigate } from 'react-router-dom'
import MyDrawer from './myDrawer'
import MyMenu from './myMenu'
import logo from '../static/bookStore-removebg-preview.png'

function MyAppBar() {
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="Categories">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Tooltip>
          <Box
            flexGrow={1}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center">
            <img src={logo} alt="Logo" style={{ marginLeft: '10px', width: '5%' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Yehezkel's Wonder Shop
            </Typography>
          </Box>
          <Tooltip title="Cart">
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
          <MyMenu />
        </Toolbar>
      </AppBar>
      <MyDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Outlet />
    </>
  )
}

export default MyAppBar
