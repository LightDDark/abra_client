import React, { useState } from 'react'
import { TextField, IconButton, Divider } from '@mui/material'
import BookList from '../components/bookList'
import ViewListIcon from '@mui/icons-material/ViewList'
import ViewModuleIcon from '@mui/icons-material/ViewModule'

export default function Gallery() {
  const [search, setSearch] = useState('')
  const [view, setView] = useState('list')
  const [books, setBooks] = useState([
    { title: 'Book 1', category: 'Category 1' },
    { title: 'Book 2', category: 'Category 2' },
    // Add more books here
  ])

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div style={{ textAlign: 'center' }}>
      <TextField
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ margin: '20px 0' }}
      />
      <br />
      <Divider style={{ margin: '20px 0' }} />
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <IconButton onClick={() => setView('list')}>
          <ViewListIcon color={view === 'list' ? 'primary' : 'default'} />
        </IconButton>
        <IconButton onClick={() => setView('gallery')}>
          <ViewModuleIcon color={view === 'gallery' ? 'primary' : 'default'} />
        </IconButton>
      </div>
      <BookList books={filteredBooks} view={view} />
    </div>
  )
}
