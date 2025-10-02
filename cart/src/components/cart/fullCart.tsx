import React from 'react';
import {useCart} from "../../context/cartContext";
import {CartConfirmation} from "./cartConfirmation"
import {Product} from "../../context/cartContext";

export function FullCart(){
        const { cartItems, removeAllFromCart } = useCart();
        const [confirmation, setConfirmation] = React.useState<boolean>(false);

        const groupedItems = cartItems.reduce((acc: Record<string, { product: Product; quantity: number }>, item) => {
            if (acc[item.name]) {
                acc[item.name].quantity += 1;
            } else {
                acc[item.name] = { product: item, quantity: 1 };
            }
            return acc;
        }, {});

        const total = cartItems.reduce((acc, item) => acc + item.price, 0);

        function getGroupedValues<T>(obj: Record<string, T>): T[] {
            return Object.keys(obj).map(key => obj[key]);
        }

    console.log("Confirmation state:", confirmation);

    return(
        <div className='bg-(--rose50) shadow p-6 h-fit -mt-8 rounded-lg'>
            <h2 className='text-(--orange) text-2xl font-700 pb-12 font-[700]'>Your Cart ({cartItems.length})</h2>
            {getGroupedValues(groupedItems).map(({product,quantity},index)=>(
            <div key={index} className='py-1.5'>
                <h4 className='font-[600]'>{product.name}</h4>
                <div className='flex justify-between py-2'>
                    <div className='flex justify-between pb-2 text-sm'>
                        <span className='text-(--orange) font-[600]'>{quantity}x</span>
                        <p className='px-3 text-(--rose300) '>@ ${product.price.toFixed(2)}</p>
                        <span className='text-(--primary) opacity-65 font-[600]'>${(product.price * quantity).toFixed(2)}</span>
                    </div>
                   <button onClick={() => removeAllFromCart(product.name)} className='-mt-9.5 cursor-pointer'>
                        <img  src={"../assets/images/icon-remove-item.svg"} className='shadow border border-(--rose300) hover:border-black rounded-full p-0.5' alt={''}/>
                    </button>
                </div>
                <hr className='text-(--rose100) py-1'/>
            </div>
            ))}
            <div>
                <div className='flex justify-between py-1.5'>
                    <p>Order Total</p>
                    <p className='font-[700]' >${total.toFixed(2)}</p>
                </div>


                <p className='font-[400] shadow bg-(--rose300) text-(--rose100) text-sm flex align-middle justify-center py-3.5 my-4.5 rounded'>
                    <span className=' font-600 px-1.5'><img src={'../assets/images/icon-carbon-neutral.svg'} alt={'carbon neutral icon'}/></span>
                    This is a <span className='px-1 text-(--primary) font-[600]'> carbon-neutral </span> delivery
                </p>

                {/*this button will hold the cart confirmation toggle function*/}
                <button onClick={() => setConfirmation(true)}
                        className='w-full bg-(--orange) hover:bg-orange-800 text-(--rose50) shadow
                 py-3 px-7 rounded-full cursor-pointer'>
                    Confirm Order
                </button>
                {confirmation && (
                    <CartConfirmation
                        items={getGroupedValues(groupedItems)}
                        total={total.toFixed(2)}
                    />)}
            </div>

        </div>


    )
}
