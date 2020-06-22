import React from "react"
import ReactDOM from "react-dom"
import CardHeader from './card-header'
import CardDescription from "./card-description"
import CardBtn from "./card-btn"

const Page = () =>{
    return (
        <>
            <CardHeader/>
            <CardDescription/>
            <CardBtn/>
        </>
    )
}
ReactDOM.render (
    <Page/>,
    document.querySelector("#root")
)