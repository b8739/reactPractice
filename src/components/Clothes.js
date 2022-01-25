import React, { useState } from 'react'

const Clothes = () => {
    const [clothes, setClothes] = useState('옷')
    const sold = () => {
        alert('sold')
    }
    return (
        <div className="productList">
            <h3> {clothes}</h3>
            <p>1월 25일 발행</p>
            <button onClick={sold}>판매 완료</button>
            <hr />
        </div>
    )
}

export default Clothes
