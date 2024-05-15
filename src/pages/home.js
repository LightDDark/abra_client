import React from 'react'
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import fantasyImg from '../static/bookCategories/fantasy-israel.jpg'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const StyledCardMedia = styled(CardMedia)({
  height: 400,
})

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaper>
            <Typography variant="h5" component="h2">
              Welcome to Yehezkel's Wonder Shop!
            </Typography>
            <Typography component="p">Your one-stop shop for all kinds of books.</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea>
              <StyledCardMedia image={fantasyImg} title="Fantasy" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fantasy
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Swords, Might and Magic !
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Add more Grid items as needed to display your products */}
      </Grid>
    </Container>
  )
}
