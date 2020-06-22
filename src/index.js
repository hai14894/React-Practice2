import React from "react"
import ReactDOM from "react-dom"
import CardHeader from './card-header'

const Page = () =>{
    return (
        <>
            <CardHeader/>
        </>
    )
}
ReactDOM.render (
    <Page/>,
    document.querySelector("#root")
)