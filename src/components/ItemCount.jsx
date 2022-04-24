import { useState } from 'react'

const ItemCount = ({initial,onAdd }) => {

    const [count, setCount] = useState(0)

    return (
    
        <div className="flex w-3/4 ml-6 ">
            <div className="flex justify-between text-center p-2 w-full mx-3 my-2 border-indigo-400 border rounded-lg">
                <button type="button" 
                        className="font-bold text-xl" 
                        onClick={()=>{
                          if (count <= 0) return;
                          setCount(count-1);
                }}>-</button>
                <p className="text-xl">{count}</p>
                <button className="font-bold text-xl " 
                        onClick={()=>{
                          if (count>=5) return
                          setCount(count+1)
                }}>+</button>
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