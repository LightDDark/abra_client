import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Box, Tooltip } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import PetsIcon from '@mui/icons-material/Pets';

function MyAppBar() {
  const navigate = useNavigate()
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box
            flexGrow={1}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center">
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
              Yehezkel's Pet Refuge
            </Typography>
          </Box>
          <Tooltip title="Pet Catalogue">
            <IconButton color="inherit">
              <PetsIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}

export default MyAppBar
