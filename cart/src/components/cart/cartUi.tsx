import React from 'react';

export function EmptyCart(){
    return(
        <div className='bg-(--rose50) shadow p-6 h-fit -mt-8 sm:-mt-0 rounded-lg'>
            <h2 className='text-(--orange) text-2xl font-700 pb-15 font-[700]'>Your Cart (0)</h2>

            <div className='place-items-center'>
                <img src={"../assets/images/illustration-empty-cart.svg"} alt='cart-illustration' />
                <p className='text-sm text-(--rose500) opacity-75 font-[400]'>Your added items will appear here</p>
            </div>

        </div>
    )
}