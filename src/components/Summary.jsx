import { useContext } from "react"
import { CartContext } from "./CartContext"
import { format } from "../util/helpers"
import { serverTimestamp } from "firebase/firestore"
import { collection, doc, setDoc } from "firebase/firestore";
import db from '../util/firebaseConfig';


const Summary = () => {

const { total, cartList, clearCartList } = useContext(CartContext)
    
const handleOrder = async () => {
    const order = {
        buyer : {
            name: "Leo Messi",
            email: "leo@messi.com",
            phone: "123456789",
        },
        items : cartList.map(item=>({
            title: item.title,
            price: item.price,
            qty: item.quantity,
            id: item.id,
        })),
        date: serverTimestamp(),
        total: format(total)
    }  
    try {
        const newOrder = doc(collection(db, "orders"));
            await setDoc(newOrder, order);
            alert("Order created successfully \n apoint this ID: "+ newOrder.id);    
            clearCartList();
    }catch(err){
        console.log(' Order catch ',err) 
    }
} 

    
    return (
        <div className=" animate summary shadow-lg flex w-1/4 gap-4 flex-col items-start rounded-lg">
            <h1 className="mx-auto font-bold text-3xl letter-space">Summary</h1>
            <p className="mx-auto ">Subtotal:{' '}<span className="font-bold">{format(total)}</span></p>
            <p className="mx-auto ">Taxes:{' '}<span className="font-bold text-md">{format(total*0.18)}</span></p>
            <p className="mx-auto ">Discount:{' '}<span className="font-bold text-md">{format(total*0.18*-1)}</span></p>
            <p className="mx-auto text-2xl">Total:{' '}<span className="font-bold text-md">{format(total)}</span></p>
            <button className="comprar mx-auto" onClick={handleOrder}>Checkout now</button>
        </div>
    )
}

export default Summary
