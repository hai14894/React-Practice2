import React from "react"
import ReactDOM from "react-dom"
import CardHeader from './card-header'
import CardDescription from "./card-description"

const Page = () =>{
    return (
        <>
            <CardHeader/>
            <CardDescription/>
        </>
    )
}
ReactDOM.render (
    <Page/>,
    document.querySelector("#root")
)