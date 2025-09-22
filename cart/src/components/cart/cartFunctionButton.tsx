import React, {useContext} from 'react';
import {useCart} from "../../context/cartContext";

export default function AddDelete() {
    const {count, addCount, removeCount} =useCart();

        return (
                <div className='flex justify text-sm w-fit bg-(--orange) text-(--rose50) shadow
                 py-[8px] px-7 rounded-full relative
                  bottom-5 left-1/2
            -translate-x-1/2 cursor-pointer'>
                        <button
                            onClick={removeCount}
                            className='cursor-pointer border rounded-full p-[5px] focus:bg-(--rose50)
                             focus:text-(--orange) '>
                            <img src={'../assets/images/icon-decrement-quantity.svg'}/>
                        </button>
                        <span className='px-6 text-sm'>{count}</span>
                        <button
                            onClick={addCount}
                            className='cursor-pointer border rounded-full p-[5px] focus:bg-(--rose50) focus:text-(--orange)'>
                            <img src={"../assets/images/icon-increment-quantity.svg"}/>
                        </button>
                    </div>

        );
    }
