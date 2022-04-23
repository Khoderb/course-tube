import { useState } from "react"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext }  from "./CartContext";
import ItemCount from "./ItemCount"
import Spinner from "./Spinner";

const itemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    
    const { addItem } = useContext(CartContext);

    const onAdd = (count)=>{
        alert(`Seleccionaste ${count} curso: ${item.titulo}`)
        setItemCount(count)
        addItem(item)
    }

    return (
            <>
                {item && item.titulo ? 
                    
                    <div className="md:flex gap-x-10 container w-full">
                        <div>
                            <h2 className="font-black text-left m-10 text-2xl">{item.titulo}</h2>
                            <img src={item.img} alt="img-curso" className=" w-4/3 h-72  m-10 rounded-lg" />
                        </div>
                        
                        <div className="mt-20">
                            <p className=" text-md m-10 text-left">Descripción:{' '}<span className="font-bold">{item.descrip}</span></p>
                            <p className=" text-md m-10 text-left">Precio:{' '}<span className="font-bold">${item.precio}</span></p>
                            <p className=" text-md m-10 text-left">Stock:{' '}<span className="font-bold">{item.stock} unidad</span></p>
                            {
                                itemCount!==item.stock
                                        ?   <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                        :   <div className="md:flex justify-evenly">
                                               <Link to='/cart'><button className="comprar m-2">Checkout</button></Link>
                                               <Link to='/'><button className="añadir">Seguir comprando</button></Link>
                                            </div>
                                        
                            }
                        </div>
                    </div>
                        
                    : <div><Spinner/></div>
                            
                }

            </>    
            )
}


export default itemDetail
