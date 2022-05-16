import React, { useState, useEffect } from "react"
import useForm from "../../Hooks/useForm"
import ArticleCard from "./ArticleCard"
import Filter from "./Filter"
import PaginationComponent from "../../Pagination/Pagination"
import { listArticles } from "../../Services/articlesRequest"
import { ContainerPagination } from "./styled"

const Home = () => {
    const [articles, SetArticles] = useState([])
    const [itensPerPage, SetItensPerPage] = useState(2)
    const [currentPage, SetCurrentPage] = useState(0)
    const [form, onChange, clear] = useForm({
        title: "",
        sorting: "order",
        order: "1"
    })

    const pages = (articles.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = articles.slice(startIndex, endIndex)


    useEffect(() => {
        listArticles(SetArticles)
    }, [])

    useEffect(() =>{
        SetCurrentPage(0)
    }, [itensPerPage])


    return(
        <div>  
            <Filter form={form} onChange={onChange} itensPerPage={itensPerPage} SetItensPerPage={SetItensPerPage}/>
            {currentItens.filter(article => {
                return article.title.toLowerCase().includes(form.title.toLowerCase())
            })
            .sort((a, b) => {
                switch (form.sorting) {
                    case "order":
                        return form.order * a.updatedAt.localeCompare(b.updatedAt)
                    default:
                        return a.updatedAt.localeCompare(b.updatedAt)
                }
                
            })
            
            .map((article) => {
                return <div key={article.id}>
                    <ArticleCard article={article}/>
                    </div>
            })}
            <ContainerPagination>
            <PaginationComponent pages={pages} SetCurrentPage={SetCurrentPage}/>
            </ContainerPagination>
        </div>

    )
}
export default Home