import { Card, CardContent, Typography, CardActionArea } from '@mui/material'
export default function Book({ book, view }) {
  return (
    <Card>
      <CardActionArea onClick={() => window.alert(`You clicked on ${book.title}`)}>
        <CardContent>
          <Typography variant="h5">{book.title}</Typography>
          <Typography variant="subtitle1">{book.category}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
