// import React from 'react'  how to import a module css
import xyz from "./Hello.module.css"

const Hello = () => {
  return (
    // How to use a module css className
    <div className={xyz.ah + " text-center"}><h1>Hello from Hello component</h1></div>
  )
}

export default Hello