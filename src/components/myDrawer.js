import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import { styled } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

export default function MyDrawer({ drawerOpen, handleDrawerToggle }) {
  const bookCategories = [
    'Fantasy',
    'Literature',
    'Science Fiction',
    'Mystery',
    'Thriller',
    'Biography',
  ] // replace this with your actual book categories
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }))
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {bookCategories.map((category, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
