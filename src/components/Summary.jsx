import { useContext } from "react"
import { CartContext } from "./CartContext"
import { format } from "../util/helpers"

const Summary = () => {

    const { total } = useContext(CartContext)
    
    return (
        <div className=" animate summary shadow-lg flex w-1/4 gap-4 flex-col items-start rounded-lg">
            <h1 className="mx-auto font-bold   text-3xl letter-space">Resumen</h1>
            <p className="mx-auto">Subtotal:{' '}<span className="font-bold">{format(total)}</span></p>
            <p className="mx-auto">Impuestos:{' '}<span className="font-bold text-md">{format(total*0.18)}</span></p>
            <p className="mx-auto">Bonus:{' '}<span className="font-bold text-md">{format(total*0.18*-1)}</span></p>
            <p className="mx-auto text-2xl">Total:{' '}<span className="font-bold text-md">{format(total)}</span></p>
            <button className="comprar mx-auto">Finalizar Compra</button>
        </div>
    )
}

export default Summary
