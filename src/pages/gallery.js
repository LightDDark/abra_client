import React, { useState } from 'react'
import { TextField, IconButton, Divider, Select, MenuItem } from '@mui/material'
import BookList from '../components/bookList'
import ViewListIcon from '@mui/icons-material/ViewList'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import { useLoaderData } from 'react-router-dom'

export default function Gallery() {
  const [search, setSearch] = useState('')
  const [view, setView] = useState('list')
  const [category, setCategory] = useState('All')
  const data = useLoaderData()
  console.log(data)
  const [books, setBooks] = useState(data)

  const filteredBooks = books.filter(
    (book) =>
      book.Name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || book.Category === category),
  )

  const categories = books
    .map((element) => {
      return element.Category
    })
    .filter((value, index, array) => {
      return array.indexOf(value) === index
    })
    .sort()
    .map((element) => {
      return <MenuItem value={element}>{element}</MenuItem>
    })
  console.log(categories)
  return (
    <div style={{ textAlign: 'center' }}>
      <TextField
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ margin: '20px 0' }}
      />
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ margin: '20px 0' }}>
        <MenuItem value="All">All</MenuItem>
        {categories}
      </Select>
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
