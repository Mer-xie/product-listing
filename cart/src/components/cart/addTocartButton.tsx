import React, {useState} from 'react';
import AddDelete from "./cartFunctionButton";
import {useCart} from "../../context/cartContext";
import {Product} from "../../context/cartContext";


interface CartProps {
    products: Product[];
}
const Cart:React.FC<CartProps> = ({product})=> {
    const {addToCart, addCount} = useCart()
    const [buttonState, setButtonState] = useState(false)

    function handleButtonState(){
        addToCart(product);
        addCount();
        setButtonState(true)
    }

    const toggle = () => {
        setButtonState(false)
    }


return (
    <div onMouseLeave={toggle}>
        {
            buttonState ? <AddDelete product={product}/>
                :
                <div>
                <button onClick={handleButtonState} className='bg-(--rose50) shadow border
                 border-(--orange) py-2 px-6  rounded-full flex cursor-pointer relative
                  bottom-5 left-1/2
            -translate-x-1/2'>
                    <img src={'../images/icon-add-to-cart.svg'} alt={'add to cart icon'}/>
                    <p className='px-2 text-sm text-(--primary) font-red font-[400]'>Add to cart</p>
                </button>
                </div>
        }
    </div>
)
}

export default Cart;

