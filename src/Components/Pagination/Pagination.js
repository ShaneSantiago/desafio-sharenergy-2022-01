import { Button } from "@mui/material"
import React from "react"
import { PaginationContainer } from "./Styled"


const PaginationComponent = (props) => {
    return(
        <PaginationContainer> 
                {Array.from(Array(props.pages), (article, index) => {
                    return <Button color={"primary"} value={index} onClick={(e) => props.SetCurrentPage(Number(e.target.value))}>{index + 1}</Button>
                })}
        </PaginationContainer>
    )
}
export default PaginationComponent