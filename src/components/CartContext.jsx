import { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext();


const CartContextProvider = ({children})=>{
    
    const [cartList, setCartList] = useState([]);
    const[empty, setEmpty] = useState(true);

    //Funciones para el Context 
    const addItem = (cartItem,itemQty) => {
        const existe = cartList.some(item => item.id === cartItem.id);
            if(existe){ 
                const cartListUpdated = cartList.map(item => {
                    if(item.id === cartItem.id){
                        item.cantidad+=itemQty;
                        return item;
                    } else {
                        return item;
                    }
            });
            setCartList( [...cartListUpdated] );           
            
            } else {
                setCartList( [...cartList, {...cartItem, cantidad:itemQty}] );
            }
        setEmpty(false);
    }


    const removeItem = id => {
        setCartList(cartList.filter( item => item.id !== id));
    }
    const clearCartList = () => {
        setCartList([]);
    }
    //calcula la cantidad de items en cartList
    const badge = () => {
        return cartList.reduce((total, item) => total + item.cantidad, 0);
    }

    //al eliminar del cartList se resetea la cantidad de items
    const resetQty = ()=>{
        cartList.map(item => item.cantidad = 1)
    }

    const calcTotal = ()=>{
        return cartList.reduce((total, item) => total + item.precio * item.cantidad, 0);
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
                    badge,
                    resetQty,
                    calcTotal
                }}>

            {children}

        </CartContext.Provider>

    );
}

export{
    CartContext
}

export default CartContextProvider;