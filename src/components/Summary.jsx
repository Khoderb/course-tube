import { useContext } from "react"
import { CartContext } from "./CartContext"
import { format } from "../util/helpers"

const Summary = () => {

    const { total } = useContext(CartContext)
    
    return (
        <div className=" someEfect p-2 summary flex w-1/4 gap-4 flex-col rounded-lg">
            <h1 className="font-black text-center text-xl letter-space">Resumen</h1>
            <p className="text-center">Total:{' '}<span className="font-bold">{format(total)}</span></p>
            <button className="comprar mx-auto">Finalizar Compra</button>
        </div>
    )
}

export default Summary
