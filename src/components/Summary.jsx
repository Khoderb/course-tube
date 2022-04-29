import { useContext, useState, useEffect } from "react"
import { CartContext } from "./CartContext"
import { format } from "../util/helpers"
import { collection, doc, setDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import db from '../util/firebaseConfig';


const Summary = () => {
//Hooks
const { cartList, clearCartList } = useContext(CartContext)

const [total, setTotal] = useState(0);

useEffect( ()=> {
    const newTotal = cartList.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotal(newTotal);
},[cartList])    

//Functions 
const updateStock = arrayOrder  => {
    
    arrayOrder.forEach( item => {
       
        cartList.forEach(async itemCL => {
            
            if(itemCL.id === item.id ){
                const itemRef = doc(db, "products", itemCL.id);
                await updateDoc(itemRef, {
                  stock: (itemCL.stock-itemCL.quantity) 
                });
            }
        });
    });
}

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
            alert("Order created successfully\nApoint this ID: "+ newOrder.id);    
            updateStock(order.items);
            clearCartList();
    }catch(err){
        console.log(' Order catch ',err) 
    }
} 

    
    return (
        <div className=" animate summary shadow-md flex w-1/5 items-center gap-4 flex-col rounded-lg">
           <h1 className="font-bold text-3xl letter-space">Summary</h1>
            <p>Subtotal:{' '}<span className="font-bold">{format(total)}</span></p>
            <p>Taxes:{' '}<span className="font-bold">{format(total*0.11)}</span></p>
            <p>Discount:{' '}<span className="font-bold">{format(total*0.11*-1)}</span></p>
            <p className="text-2xl font-black  ">Total:{' '}<span className="font-bold text-md">{format(total)}</span></p>
            <button className=" bg-emerald-400 hover:bg-emerald-500 font-bold mb-2 w-full p-2 shadow rounded-lg" 
                    onClick={handleOrder}>Checkout now</button>
        </div>
    )
}

export default Summary
