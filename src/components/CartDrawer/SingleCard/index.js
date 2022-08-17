import React from 'react'
import {GrFormClose} from 'react-icons/gr'

function SingleCard({image, name, price, quantity , onRemove, onIncrease , onDecrease}) {
  return (
    <div>
        <div className="flex gap-2 items-center my-2 bg-gray-50 p-4 rounded">
            <div className="w-2/6">
                <img src={image} alt="Cart" />
            </div>
            <div className="w-4/6">
                <div className="flex justify-between items-center pb-3">
                    <h3 className="text-base font-semibold">{name}</h3>
                    <GrFormClose onClick={onRemove} color="#ccc" size={22} className="cursor-pointer"/>
                </div>
                <div className="flex justify-between items-center">
                    <p>${price * quantity}</p>
                    <div >
                        <button onClick={onDecrease} className="bg-[#94634b] px-2 text-white rounded">-</button>
                        <span className="px-2">{quantity}</span>
                        <button onClick={onIncrease} className="bg-[#94634b] px-2 text-white rounded">+</button>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default SingleCard