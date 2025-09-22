import React from 'react';
import {useCart} from "../../context/cartContext";

export function EmptyCart(){
    const {count} = useCart();

    return(
        <div className='bg-(--rose50) shadow p-6 h-fit -mt-8 rounded-lg'>
            <h2 className='text-(--orange) text-2xl font-700 pb-15'>Your Cart ({count})</h2>

            <div className='place-items-center'>
                <img src={"../assets/images/illustration-empty-cart.svg"} />
                <p className='text-sm text-(--rose500) opacity-75'>Your added items will appear here</p>
            </div>

        </div>
    )
}