import { BsFillCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs'
import {Link} from "react-router-dom"

function ProductItem({ image, company, price, name, id, onClick, exists }) {

    return (
        <>
            <Link to={`/products/${id}`} className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 relative ">
                <div className="mx-4 mb-6 bg-[#faf6f4] rounded-lg overflow-hidden cursor-pointer">
                    <img className="w-full h-[220px] object-cover" src={image} alt="Item" />
                    <div className="p-3">
                        <p className="text-sm capitalize">{company}</p>
                        <h3 className="text-lg font-semibold capitalize">{name}</h3>
                        <div className="flex justify-between items-center mt-3">
                            <p className="text-gray-600 text-base">${price}</p>
                            {exists(id) ? (<button onClick={(e)=>{
                                e.preventDefault()
                                e.stopPropagation()
                                
                            }} className="bg-[#6b6b6b] text-white rounded-full w-10 h-10 flex justify-center items-center">
                                    <BsFillCartCheckFill size={18} />
                                    </button>
                            ) : (<button onClick={(e)=>{
                                e.preventDefault()
                                e.stopPropagation()
                                onClick()
                            }} className="bg-[#94634b] text-white rounded-full w-10 h-10 flex justify-center items-center">
                                <BsFillCartPlusFill size={18} />

                                </button>)}

                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductItem