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
            <h1 className='font-red text-(--primary) font-700 text-3xl ml-4 sm:ml-0 sm:text-4xl mb-6 font-[700]'>Desserts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-8 px-4 sm:px-0">
                <div className="sm:col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {productsList.map((product, index) => (
                        <div key= {index} className="w-full">
                            <img src={product.image.desktop} alt={product.name} className="rounded-lg w-full " />
                            <Cart product={product} />
                            <p className="text-(--rose300) text-sm font-[400]">{product.category}</p>
                            <h3 className="text-(--primary) py-1 text-[16px] font-[600]">{product.name}</h3>
                            <p className="text-(--orange) font-[600]">${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <div className="sm:col-span-2 w-full mt-5">
                    <div className="w-full">
                        {cartItems.length === 0 ? <EmptyCart /> : <FullCart />}
                    </div>
                </div>
            </div>
            <p className={'text-(--rose300) text-xs text-center pt-15'}>Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
               <span className={'font-[600]'}> Coded by Mercy.</span> </p>
            </>
    );
}
