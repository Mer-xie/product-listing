import React, {useState} from 'react';
import AddDelete from "./cartFunctionButton";

export default function Cart(){
    const [buttonState, setButtonState] = useState(false)

    function handleButtonState(){
        setButtonState(true)
    }

    const toggle = () => {
        setButtonState(false)
    }


return (
    <div onMouseLeave={toggle}>
        {
            buttonState ? <AddDelete/> 
                :
                <div onMouseDown={handleButtonState}>
                <button className='bg-(--rose50) shadow border
                 border-(--orange) py-2 px-6  rounded-full flex cursor-pointer relative
                  bottom-5 left-1/2
            -translate-x-1/2'>
                    <img src={'../assets/images/icon-add-to-cart.svg'}/>
                    <p className='px-2 text-sm text-(--primary)'>Add to cart</p>
                </button>
                </div>
        }
    </div>
)
}


