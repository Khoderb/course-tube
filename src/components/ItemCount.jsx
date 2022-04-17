import { useState } from 'react'

const ItemCount = ({ stock, initial,onAdd }) => {

    const [count, setCount] = useState(0)
    const increase = () => { initial < stock ? setCount(initial + 1) : null }
    const decrease = () => { count > 0 ? setCount(count-1)  : null }

    return (
    
        <div className="flex w-3/4 ml-6 ">
            <div className="flex justify-between text-center p-2 w-full mx-3 my-2 border-indigo-400 border-2 rounded-lg">
                <button  className="font-bold text-xl" onClick={decrease}>-</button>
                <strong className="text-xl">{count}</strong>
                <button className="font-bold text-xl " onClick={increase}>+</button>
            </div>
            
            {
                count === initial
                    ? <button className="disabled">Añadir al carrito</button>
                    : <button onClick={()=>onAdd(count)} className="añadir shadow-md">Añadir al carrito</button>
            }
        </div>
    );
}

export default ItemCount 