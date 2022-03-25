import cart from "./img/cart.png"
const CartWidget = (props)=>{
    
    return(
       <div>
           <img src={cart} className="w-6 h-6 bg-transparent" ></img>
       </div>

    );

}

export default CartWidget;