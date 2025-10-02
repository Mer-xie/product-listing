import React from 'react';
import { productsList } from '../data';
import {EmptyCart} from "./cart/cartUi";
import {FullCart} from "./cart/fullCart";
import Cart from "./cart/addTocartButton";
import {useCart} from "../context/cartContext";

export default function Products() {
    const {cartItems} = useCart();

    return (
        <>
            <h1 className='font-red text-(--primary) font-700 text-4xl mb-6 font-[700]'>Desserts</h1>
        <div className='grid grid-cols-1 sm:grid-cols-6 gap-8'>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-rows-1 col-span-4 gap-6'>
            {productsList.map((product, index) => (
                <div className='' key={index}>
                    <img src={product.image.desktop} alt={product.name} className=' rounded-lg'/>
                    <Cart product={product}/>
                    <p className='text-(--rose300) text-sm font-[400]'>{product.category}</p>
                    <h3 className='text-(--primary) py-1 text-[16px] font-[600]'>{product.name}</h3>
                    <p className='text-(--orange) font-[600]'>${product.price.toFixed(2)}</p>
                </div>
            ))}
            </div>
            <div className="sm:col-span-2 w-full flex justify-center">
                <div className="w-full max-w-[600px] sm:max-w-none">
                    {cartItems.length === 0 ? <EmptyCart /> : <FullCart />}
                </div>
            </div>

        </div>
            </>
    );
}
