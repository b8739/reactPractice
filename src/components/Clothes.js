import React, { useState } from 'react'

const Clothes = () => {
    const [clothes, setClothes] = useState(['맨투맨', '청바지', '반지'])
    const sold = () => {
        alert('sold')
    }
    return (
        <div>
            <div className="productList">
                {clothes.map((a) => {
                    return (
                        <div>
                            <h3> {a}</h3>
                            <p>1월 25일 발행</p>
                            <button onClick={sold}>판매 완료</button>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Clothes
