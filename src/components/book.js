import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Book({ book, view }) {
  const navigate = useNavigate()
  return (
    <Card>
      <CardActionArea onClick={() => navigate(book.Id)}>
        {view === 'gallery' ? (
          <CardMedia sx={{ height: 150 }} image={book.Image} title={book.Name} />
        ) : (
          ''
        )}
        <CardContent>
          <Typography variant="h5">{book.Name}</Typography>
          <Typography variant="subtitle1">{book.Category}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
