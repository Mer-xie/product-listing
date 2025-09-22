import React, {createContext,useContext, useState} from 'react';

const CartContext= createContext();

export const CartProvider = ({children}) => {
    const [count,setCount] = useState(0)
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item){
        setCartItems((prevItems) =>[...prevItems, item]);
    }

    function addCount(){
        setCount(count + 1);
    }

    function removeCount(){
        if(count > 0){
            setCount(count - 1);
        }
    }

    return(
        <CartContext.Provider value={{count,cartItems, addToCart, addCount, removeCount}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}