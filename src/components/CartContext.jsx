import { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext();


const CartContextProvider = ({children})=>{
    
    const [cartList, setCartList] = useState([]);
    const[empty, setEmpty] = useState(true);

    const addItem = cartItem => {

    const existe = cartList.some(item => item.id===cartItem.id);
        if(existe){ 
            const cartListUpdated = cartList.map(item => {
                if(item.id === cartItem.id){
                    item.cantidad++
                    return item;
                }else{
                    return item;
                }
            });
            setCartList( [...cartListUpdated] );           
            
            } else {
                setCartList( [...cartList, cartItem] );           
            }
        setEmpty(false);
}


    const removeItem = (id) => {
        setCartList(cartList.filter( item => item.id !== id))
    }
    const clearCartList = () => {
        setCartList([])
    }

    return(

        <CartContext.Provider 
            value={{
                    cartList,
                    addItem, 
                    removeItem,
                    clearCartList,
                    setEmpty,
                    empty
                }}>

            {children}

        </CartContext.Provider>

    );
}

export{
    CartContext
}

export default CartContextProvider;