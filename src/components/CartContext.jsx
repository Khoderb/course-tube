import { createContext } from 'react';
import { useState, useEffect } from 'react';

const CartContext = createContext();


const CartContextProvider = ({children})=>{
    // Hooks
    const [cartList, setCartList] = useState([]);
    const [empty, setEmpty] = useState(true);
    const [total, setTotal] = useState(0);
    const [badge,setBadge] = useState(0)
    const [search,setSearch] = useState('')
    
    useEffect(()=>{
        const badge = cartList.reduce((total, item) => total + item.cantidad, 0);
        setBadge(badge);
    },[cartList])

    useEffect( ()=> {
        const nuevoTotal = cartList.reduce((total, item) => total + item.precio * item.cantidad, 0);
        setTotal(nuevoTotal);
    },[cartList])    

    //Funciones para el Context 
    const addItem = (cartItem, itemQty) => {
        if( cartList.some(item => item.id === cartItem.id) ){ 
            const newCartList = cartList.map(item => {
                if( item.id === cartItem.id ) item.cantidad += itemQty;
                return item;    
            })
            setCartList(newCartList);
        }else{
            setCartList([...cartList, {...cartItem, cantidad: itemQty}])
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

    //al eliminar/vaciar del cartList resetea la cantidad de c/ item que no está en el cartlist.
    const resetQty = ()=>{
        cartList.map(item => item.cantidad !== 1 ? item.cantidad = item.cantidad: item.cantidad = 1);
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
                    total,
                }}>

            {children}

        </CartContext.Provider>

    );
}

export{
    CartContext
}

export default CartContextProvider;