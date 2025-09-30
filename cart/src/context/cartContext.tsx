import React, {createContext,useContext, useState} from 'react';

export type Product = {
    name: string,
    price: number,
    category: string,
    image:{
        thumbnail: string,
        mobile: string,
        tablet: string,
        desktop: string,
    }
}
type CartContextType = {
    cartItems:Product[],
    count: number;
    addToCart: (item: Product) => void;
    removeFromCart: (index: number) => void;
    addCount: () => void;
    removeCount: () => void;
    removeAllFromCart: (name: string) => void;
}


const CartContext=createContext<CartContextType | undefined>(undefined);

export const CartProvider : React.FC<{children: React.ReactNode}> = ({children}) => {
    const [count,setCount] = useState<number>(0)
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const addToCart = (item: Product) => setCartItems(prev => [...prev, item]);
    const removeFromCart = (index: number) => setCartItems(prev => prev.filter((_, i) => i !== index));
    const addCount = () => setCount(prev => prev + 1);
    const removeCount = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
    const removeAllFromCart = (name: string) => {
        setCartItems(prev => prev.filter(item => item.name !== name));
    };


    return(
        <CartContext.Provider value={{count,cartItems, addToCart, addCount, removeCount,removeFromCart,removeAllFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}