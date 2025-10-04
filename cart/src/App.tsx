import React from 'react';
import {CartProvider} from "./context/cartContext";
import Products from "./components/products";

function App() {
    return (
            <div className='p-4 sm:p-15 bg-(--rose50) font-red'>
                <div>
                    <CartProvider>
                        <Products />
                    </CartProvider>
                </div>
            </div>
    );
}

export default App;
