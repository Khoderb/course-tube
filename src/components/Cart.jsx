import { useContext ,useEffect} from 'react'
import{ useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'
import CartItem from './CartItem'
import Summary from './Summary'

const Cart = () => {

    //Hooks
    const {cartList, clearCartList, setEmpty, empty, resetQty} = useContext(CartContext)
    
    const navigate = useNavigate();
    
    useEffect(()=>{
        cartList.length > 0 ? setEmpty(false) : setEmpty(true)
    },[cartList])
    
    //Funciones
    const handleClear=()=> {
        clearCartList();
        resetQty();
        setEmpty(true);
    }

    
    

return (
        <>
            <h1 className =" text-3xl order-1 text-center mt-10 text-sky-700 letter-space ">Your cart</h1> 
                {
                    cartList.length > 0  
                            ? cartList.map( item => ( 
                                <CartItem
                                    key={item.id}
                                    item={item}
                                />
                                    
                            ))  :   <div className="flex justify-evenly mt-10">
                                        <h1 className ="text-xl text-left m-5">Your Cart Is Empty ^^</h1>
                                        <button className="animate bg-blue-500 text-white font-bold p-2 m-5 w-1/5 h-10 rounded hover:bg-indigo-700 transition-colors duration-200"
                                        onClick={()=>navigate("/")}>Home</button>
                                    </div> 
                }                           
                
                {   !empty && 
                    <>
                        <div className="flex justify-end">
                            <button className=" itemDetail bg-gray-400 text-white font-bold p-2 m-5 w-1/6 h-10 rounded hover:bg-gray-700 transition-colors duration-200"
                            onClick={handleClear}>Vaciar Carrito</button>

                            <button className=" itemDetail bg-blue-500 text-white font-bold p-2 m-5 w-1/5 h-10 rounded hover:bg-indigo-700 transition-colors duration-200"
                            onClick={()=>navigate("/")}>Seguir comprando</button>
                        </div>
                        <Summary/>
                    </>
                }
        </>
    )
}

export default Cart
