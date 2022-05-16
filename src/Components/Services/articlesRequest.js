import axios from "axios"
import { BASE_URL } from "./url"

export const listArticles = (SetArticles) => {
        
    axios.get(`${BASE_URL}/articles`)
    .then((res) => {
        SetArticles(res.data)

    })
    .catch((error) => {
        console.log(error)
    })
}