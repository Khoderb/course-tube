import { useState } from "react"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext }  from "../context/CartContext";
import ItemCount from "./ItemCount"
import Spinner from "./Spinner";
import { format } from "../util/helpers";

const itemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const { addItem } = useContext(CartContext);
    
    const onAdd = count =>  {
        setItemCount(count)
        alert(`You have selected ${count} course: ${item.title}`)
        addItem(item,count)
    }
    

    return (
            <>
                {
                    item && item.title ? 
                    
                        <div className=" animate md:flex gap-x-10  w-full">
                            <div>
                                <h2 className="font-black text-left m-10 text-2xl">{item.title}</h2>
                                <img src={item.img} alt="img-curso" className=" w-4/3 h-72  m-10 rounded-lg" />
                            </div>

                            <div className="mt-20">
                                <p className=" text-md m-10 text-left">Description:{' '}<span className="font-bold">{item.descrip}</span></p>
                                <p className=" text-md m-10 text-left">Price:{' '}<span className="font-bold">{format(item.price)}</span></p>
                                <p className=" text-md m-10 text-left">Stock:{' '}<span className="font-bold">{item.stock} Units</span></p>
                                {
                                    itemCount <=0 
                                            ?   <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                                            :   <div className="md:flex items-center justify-evenly">
                                                   <Link to='/cart'><button className="comprar py-2 w-full">Checkout</button></Link>
                                                   <Link to='/'><button className="añadir">Continue shopping</button></Link>
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
