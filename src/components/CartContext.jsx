import { createContext } from 'react';
import { useState, useEffect } from 'react';

const CartContext = createContext();


const CartContextProvider = ({children})=>{
    // Hooks
    const [cartList, setCartList] = useState([]);
    const [empty, setEmpty] = useState(true);
    const [total, setTotal] = useState(0);

    useEffect( ()=> {
        const newTotal = cartList.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotal(newTotal);
    },[cartList])    

    //Functions for the Context 
    const addItem = (cartItem, qty) => {
        if( cartList.some(item => item.id === cartItem.id) ){ 
            const newCartList = cartList.map(item => {
                if( item.id === cartItem.id ) item.quantity += qty;
                    return item;  //retorna   
            })
            setCartList(newCartList);
        }else{
            setCartList([...cartList, {...cartItem, quantity: qty}])
        }
    setEmpty(false);
    }

    const removeItem = id => {
        setCartList(cartList.filter( item => item.id !== id))
        resetQty();
    }
    const clearCartList = () => {
        setCartList([]);
    }
    //reset qty of items deleteded form Cart
    const resetQty = () => {
        cartList.map(item => item.quantity !== 1 ? 
            item.quantity = item.quantity : item.quantity = 1);
    }

    return(
        <CartContext.Provider 
            value={{
                    cartList,
                    addItem, 
                    removeItem,
                    clearCartList,
                    setEmpty,
                    empty,
                    resetQty,
                    total                    
                }}>

            {children}

        </CartContext.Provider>

    );
}

export{
    CartContext
}

export default CartContextProvider;