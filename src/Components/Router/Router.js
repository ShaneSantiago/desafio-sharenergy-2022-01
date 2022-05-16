import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Details from "../Pages/Details/Details"
import Header from "../Pages/Header/Header"
import Home from "../Pages/Home/Home"

const Router = () => {
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exatc path="/" element={<Home />}>
            </Route>

            <Route exatc path="/details/:id" element={<Details />}>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Router