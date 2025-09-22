import React from 'react';
import {useCart} from "../../context/cartContext";
import {productsList} from "../../data";
import {CartConfirmation} from "./cartConfirmation"

export function FullCart(){
    const {count} = useCart();

    return(
        <div className='bg-(--rose50) shadow p-6 h-fit -mt-8 rounded-lg'>
            <h2 className='text-(--orange) text-2xl font-700 pb-12'>Your Cart ({count})</h2>
            {productsList.map((product,index)=>(
            <div key={index} className='py-1.5'>
                <h4>{product.name}</h4>
                <div className='flex justify-between py-2'>
                    <div className='flex justify-between pb-2 text-sm'>
                        <span className='text-(--orange)'>{count}x</span>
                        <p className='px-3 text-(--rose300) '>@ ${product.price}</p>
                        <span className='text-(--primary) opacity-65'>$(total)</span>
                    </div>
                   <button className='-mt-9.5 cursor-pointer'>
                        <img  src={"../assets/images/icon-remove-item.svg"} className='shadow border border-(--rose300) hover:border-black rounded-full p-0.5' alt={''}/>
                    </button>
                </div>
                <hr className='text-(--rose100) py-1'/>
            </div>
            ))}
            <div>
                <div className='flex justify-between py-1.5'>
                    <p>Order Total</p>
                    <p>total</p>
                </div>


                <p className='shadow bg-(--rose300) text-(--rose100) text-sm opacity-75 flex align-middle justify-center py-3.5 my-4.5 rounded'>
                    <span className=' font-600 px-1.5'><img src={'../assets/images/icon-carbon-neutral.svg'} alt={'carbon neutral icon'}/></span>
                    This is a <span className='px-1 text-(--primary)'> carbon-neutral </span> delivery
                </p>
                
                {/*this button will hold the cart confirmation toggle function*/}
                <button onClick={<CartConfirmation/>} className='w-full bg-(--orange) hover:bg-orange-800 text-(--rose50) shadow
                 py-3 px-7 rounded-full cursor-pointer'>
                    Confirm Order
                </button>
            </div>
        </div>
    )
}