import React from 'react'
import { Grid } from '@mui/material'
import Book from './book'

export default function BookList({ books, view }) {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid
          key={book.Id}
          item
          xs={12}
          sm={view === 'list' ? 12 : 6}
          md={view === 'list' ? 12 : 4}>
          <Book book={book} view={view} />
        </Grid>
      ))}
    </Grid>
  )
}
