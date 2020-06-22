import React from "react"
import ReactDOM from "react-dom"
import MetaData from './metadata'

const Page = () =>{
    return (
        <>
            <MetaData/>
        </>
    )
}
ReactDOM.render (
    <Page/>,
    document.querySelector("#root")
)