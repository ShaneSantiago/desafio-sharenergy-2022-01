import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container } from "./styled"
import { convertDate } from "../../Utils/convertDate"
import { useNavigate } from "react-router-dom";

const ArticleCard = (props) => {

  const navigate = useNavigate()

    const onClickDetails = (id) => {
        navigate(`/details/${id}`)
    }
    return(
        <Container>
            <Card sx={{ width: 500 }}>
      <CardActionArea>
        <CardMedia onClick={() => onClickDetails(props.article.id)}
          component="img"
          height="140"
          image={props.article.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.article.title}
          </Typography>
        </CardContent>
        <Typography margin={"10px"}>
            Data de publicação: {convertDate(props.article.updatedAt)}
        </Typography>
      </CardActionArea>
    </Card>
        </Container>
    )
}
export default ArticleCard