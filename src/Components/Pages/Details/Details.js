import React from "react"
import { useParams } from "react-router-dom"
import useRequestData from "../../Hooks/useRequestData"
import { BASE_URL } from "../../Services/url"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container } from "./Styled"
import { convertDate } from "../../Utils/convertDate"


const Details = () => {
    const params = useParams()
    const article = useRequestData([], `${BASE_URL}/articles/${params.id}`)
  

    return(
        <div>
            <Container>
            <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={article.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.summary}
          </Typography>
        </CardContent>
        <Typography margin={"10px"}>
            Data de publicação: {article.updatedAt}
        </Typography>
        
      </CardActionArea>
      <Button variant="text" margin={"10px"} href={article.url}>
        Fonte e site do artigo
      </Button>
    </Card>
        </Container>
        </div>
    )
}
export default Details