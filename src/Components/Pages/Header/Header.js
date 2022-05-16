import React from "react"
import { Typography, AppBar, Box, Toolbar, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  const goToArticle = () => {
    navigate("/")
  }
    return(
        <div>
        <Box >
        <AppBar>
        <Toolbar>
        <Button color={"secondary"} variant={"container"} onClick={goToArticle}>
          Inicio
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}
export default Header