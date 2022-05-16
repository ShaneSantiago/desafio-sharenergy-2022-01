import React from "react"
import { InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { ContainerFilter} from "./styled"

const Filter = (props) => {

    return(
        <ContainerFilter>
            <Box component="form">
                <InputLabel shrink htmlFor="select-multiple-native">
                    Pesquisar por título
                </InputLabel>
                <TextField
                type={"name"}
                name={"title"}
                value={props.form.title}
                onChange={props.onChange}
                placeholder={"Search"}
                />

            </Box>
            
            <div>
               <InputLabel shrink htmlFor="select-multiple-native">
                    Filtrar por data
                </InputLabel>

               <Select name="order" value={props.form.order} onChange={props.onChange}>
                   
                   <MenuItem value={1}>Mais recentes</MenuItem>
                   <MenuItem value={-1}>Menos recentes</MenuItem>
               </Select>
               </div>

            <div>
            <InputLabel shrink htmlFor="select-multiple-native">
                    Números de itens
                </InputLabel>
                <Select value={props.itensPerPage} onChange={(e) => props.SetItensPerPage(Number(e.target.value))}>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
            </div>
        </ContainerFilter>
    )
}
export default Filter