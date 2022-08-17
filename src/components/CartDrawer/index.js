import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {FiShoppingCart} from 'react-icons/fi'
import SingleCard from './SingleCard/'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem , selectTotalCartItems , selectTotalPrice, selectItems, increaseItemQuantity ,decreaseItemQuantity } from '../../redux/slices/basketSlice'

const CartDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const cartItems = useSelector(selectItems);
    const totalPrice = useSelector(selectTotalPrice);
    const totalCartItems = useSelector(selectTotalCartItems);

    const dispatch = useDispatch();
    const increaseQuantity = (id) => {
        dispatch(increaseItemQuantity(id))
    }
    const decreaseQuantity = (id) => {
        dispatch(decreaseItemQuantity(id))
    }
    return (
        <div>
            <button className="fixed bottom-8 right-8 bg-[#dfc4af] p-5 rounded z-50" onClick={toggleDrawer}>
                 <span>
                    <span className="flex items-center justify-center absolute text-xs top-0 right-0 p-1 bg-white font-bold w-6 h-6 rounded-full">{totalCartItems}</span>
                 </span>
                 <span><FiShoppingCart size="18"/></span>
                 </button>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                size={300}
            >
                <div className=' flex flex-col h-full'>
                    <h1 className=' bg-slate-200 text-lg text-center py-3 font-semibold'>Cart Item ({totalCartItems})</h1>
                    <div className='flex-grow overflow-auto'>
                        {totalCartItems === 0 && (
                            <p className='text-center pt-3 text-lg font-semibold text-slate-600'>No Items in Cart</p>
                        )}
                        {cartItems.map(item => (
                            <SingleCard
                             key={item.id} 
                             {...item} 
                             
                            onRemove={() => dispatch(removeItem(item.id))}
                            onIncrease={() => increaseQuantity(item.id)}
                            onDecrease={() => decreaseQuantity(item.id)}
                            />
                        ))}
                    </div>
                    <div className='px-3 border-t mb-3'>
                        <h1 className='pb-3 text-lg text-center font-semibold'>Total Price: ${totalPrice}</h1>
                        <button className='w-full py-2 text-white bg-black text-lg'>Checkout</button>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default CartDrawer ;