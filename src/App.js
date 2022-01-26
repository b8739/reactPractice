import React, { useState } from 'react'
import Clothes from 'components/Clothes.js'
import './App.css'

function App() {
    const [modalStatus, changeModalStatus] = useState(false)
    const [modalValue, changeModalValue] = useState('')

    return (
        <div className="container">
            <div className="navBar">개발 blog</div>
            <Clothes
                changeModalValue={changeModalValue}
                changeModalStatus={changeModalStatus}
            ></Clothes>
            <button
                onClick={() => {
                    changeModalStatus(!modalStatus)
                }}
            >
                모달 보여주기
            </button>

            {modalStatus === true ? <Modal modalValue={modalValue} /> : null}
        </div>
    )
}
function Modal(props) {
    return (
        <div className="modal">
            <h1>Modal</h1>

            <h2>{props.modalValue}</h2>
        </div>
    )
}
export default App
