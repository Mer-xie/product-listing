import React from "react";
import {Product, useCart} from "../../context/cartContext";

type CartConfirmationProps = {
    items:{product: Product, quantity:number}[];
    total:number;
}

export function CartConfirmation({ items, total }: CartConfirmationProps)  {
    const { clearCart } = useCart();


    return (
        <div className='fixed inset-0 bg-black/60 z-50 flex items-center justify-center'>
        <div className='bg-(--rose50) rounded-lg shadow-2xl w-full max-w-xl max-h-[80vh] overflow-y-auto p-4 sm:p-8'>
                <img src={'../images/icon-order-confirmed.svg'} className='mb-2' alt='order' />
                <h1 className='text-(--primary) text-3xl font-[700]'>Order Confirmed</h1>
                <p className='text-(--primary) opacity-70 text-sm pt-0.5 pb-6 font-[400]'>we hope you enjoy your food!</p>

            <div className='bg-(--rose100) p-3 sm:p-5 rounded-lg mb-7'>
                {items.map(({product, quantity}, index) => (
                    <div key={index} className='mb-4'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-4 items-center'>
                                <img src={product.image.thumbnail} alt={product.name} className='w-12 h-12 object-cover' />
                                <div>
                                    <p className='font-semibold'>{product.name}</p>
                                    <p className='text-sm'>
                                        <span className='text-(--orange)'>{quantity}x</span>{' '}
                                        <span className='text-(--rose400) pl-3'>@ ${product.price.toFixed(2)}</span>
                                    </p>
                                </div>
                            </div>

                            <p className='font-bold'>${(product.price * quantity).toFixed(2)}</p>
                        </div>
                        <hr className="border-t border-(--rose300) opacity-30 my-5" />
                    </div>
                ))}
               <div className='flex justify-between items-center'>
                        <p className='text-(--rose400) text-sm font-[600]'>Order Total</p>
                        <p className='font-[700] text-xl'>${total}</p>
                    </div>
                </div>

                <button onClick={clearCart} className='bg-(--orange) w-full shadow border
                 text-(--rose50) py-3 px-6 rounded-full cursor-pointer text-sm'>
                    Start New Order!
                </button>
            </div>
        </div>
    )
}