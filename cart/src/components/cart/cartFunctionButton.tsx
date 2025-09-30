import React from 'react';
import {useCart} from "../../context/cartContext";
import {Product} from "../../context/cartContext";

interface AddDeleteProps {
    product: Product[];
}
const AddDelete: React.FunctionComponent<AddDeleteProps>=({product}) => {
    const { cartItems, addToCart, removeFromCart, addCount, removeCount } = useCart();
    const quantity = cartItems.filter(item => item.name === product.name).length;
    const handleIncrement = () => {
        addToCart(product);
        addCount();
    };
    const handleDecrement = () => {
        const index = cartItems.findIndex(item => item.name === product.name);
        if (index !== -1) {
            removeFromCart(index);
            removeCount();
        }
    };

        return (
                <div className='flex justify text-sm w-fit bg-(--orange) text-(--rose50) shadow
                 py-[8px] px-7 rounded-full relative
                  bottom-5 left-1/2
            -translate-x-1/2 cursor-pointer'>
                        <button
                            onClick={handleDecrement}
                            className='cursor-pointer border rounded-full p-[5px] focus:bg-(--rose50)
                             focus:text-(--orange) '>
                            <img src={'../assets/images/icon-decrement-quantity.svg'} alt='increment icon'/>
                        </button>
                        <span className='px-6 text-sm font-[600]'>{quantity}</span>
                        <button
                            onClick={handleIncrement}
                            className='cursor-pointer border rounded-full p-[5px] focus:bg-(--rose50) focus:text-(--orange)'>
                            <img src={"../assets/images/icon-increment-quantity.svg"} alt='decrement icon'/>
                        </button>
                    </div>

        );
    }
export default AddDelete;