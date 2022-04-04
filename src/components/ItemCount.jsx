import { useState,useEffect } from 'react'

const ItemCount = ({ stock, initial, onAdd })=> {
    
    const [count, setCount] = useState(1)
    
    useEffect(() => {
        console.log("componente listo")
    }, [count])
       
    const increase = ()=>{ count < stock ? setCount(count + 1 ) : setCount(count)  }
    const decrease = ()=>{ (count <= stock && count > 1) ? setCount(count - 1 ) : setCount(count)  }

 
return(
    <div className="flex align-middle flex-col">
        <div className = " flex justify-between text-center p-2 w-1/5 mx-3 my-2 border-indigo-400 border-2 rounded-lg">
            <a  
                className="font-bold text-xl mt-1"
                onClick={decrease}
            > 
                <svg  xmlns="http://www.w3.org/2000/svg" className="p h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    < path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
            </a>
                <strong className="text-xl">{count}</strong>
            <a 
                className="font-bold text-xl mt-1"
                onClick={count < 5 ? increase: onAdd(count)}
            > 
                <svg xmlns="http://www.w3.org/2000/svg" className="p h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </a>
        </div>

        {
        count!==initial?
            (
                <a className=" w-1/5 text-center p-2 mx-3 rounded-lg font-bold border-indigo-400 border-2 cursor-pointer hover:bg-indigo-700 transition-colors">
                    Agregar al carrito

                </a>
            ):(
                <a className=" w-1/5 text-center cursor-not-allowed p-2 mx-3 rounded-lg font-bold border-indigo-400 border-2 hover:bg-indigo-200 transition-colors">
                    Agregar al carrito
                </a>
            )
        }
    
    </div>
);

}

export default ItemCount 