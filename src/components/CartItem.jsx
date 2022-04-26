import { useContext } from "react"
import { format } from "../util/helpers";
import { CartContext } from "./CartContext";

const CartItem = ({item}) => {

    const {id, titulo, precio, cantidad, img} = item;
    const { removeItem } = useContext(CartContext);

    return (
            <div className="flex itemDetail">
                <div className="md:flex mb-5 justify-between container w-full" >
                    <div className="m-10">
                        <img src={img} alt={`img-curso ${item.titulo}`} className=" fix h-40  m-5 rounded-lg" />
                    </div>
                    <p className=" my-2 mt-32 ">Curso:{' '}
                        <span className="font-bold">{titulo}</span>
                    </p>
                    <div className="mt-20 mx-auto">
                        <p className=" my-2 text-2xl ">Cantidad:{' '}<span className="font-bold">{cantidad}</span></p>
                        <p className=" my-2 text-2xl ">Precio:{' '}<span className="font-bold">{format(precio*cantidad)}</span></p>
                    </div>
                </div>
                <button type="button" className="animate bg-red-400 text-white font-bold p-2 h-10 w-1/6 m-5 relative top-24 rounded hover:bg-red-700 transition-colors duration-200"
                onClick={()=>removeItem(id)}>Eliminar</button>
            </div>  
    )
}

export default CartItem
