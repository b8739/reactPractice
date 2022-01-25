import React, { useState } from 'react'
import Clothes from 'components/Clothes.js'
import './App.css'

function App() {
    return (
        <div className="container">
            <div className="navBar">개발 blog</div>
            <Clothes></Clothes>
        </div>
    )
}

export default App
