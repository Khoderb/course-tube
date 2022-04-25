import { useContext ,useEffect} from 'react'
import{ useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'
import Summary from './Summary'

const Cart = () => {

    //Hooks
    const {cartList, removeItem, clearCartList, setEmpty, empty, resetQty} = useContext(CartContext)
    
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

    const handleDelete = id => {
        removeItem(id);
        resetQty();    
    }
    
    

return (
        <>
            <h1 className =" text-3xl order-1 text-center mt-10 text-sky-700 letter-space ">Your Cart</h1> 
                {
                    cartList.length > 0  
                            ? cartList.map( item => ( 
                                <div className="flex itemDetail" key={ item.id}>
                                    <div className="md:flex mb-5 justify-between container w-full" >
                                        <div className="m-10">
                                            <img src={item.img} alt={`img-curso ${item.titulo}`} className=" fix h-40  m-5 rounded-lg" />
                                        </div>
                                        <p className=" my-2 mt-32 ">Curso:{' '}
                                            <span className="font-bold">{item.titulo}</span>
                                        </p>
                                        <div className="mt-20 mx-auto">
                                            <p className=" my-2 text-2xl ">Cantidad:{' '}<span className="font-bold">{item.cantidad}</span></p>
                                            <p className=" my-2 text-2xl ">Precio:{' '}<span className="font-bold">${item.precio*item.cantidad}</span></p>
                                        </div>
                                    </div>
                                    <button className="animate bg-red-400 text-white font-bold p-2 h-10 w-1/6 m-5 relative top-24 rounded hover:bg-red-700 transition-colors duration-200"
                                        onClick={()=>handleDelete(item.id)}>Eliminar</button>
                                </div>  
                           
                            ))  :   <>
                                        <h1 className ="text-xl text-left m-5">Your Cart is Empty ^^</h1>
                                        <button className="animate bg-blue-500 text-white font-bold p-2 m-5 w-1/5 h-10 rounded hover:bg-indigo-700 transition-colors duration-200"
                                        onClick={()=>navigate("/")}>Ir a inicio</button>
                                    </> 
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
