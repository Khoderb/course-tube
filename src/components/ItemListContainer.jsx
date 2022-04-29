import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import db from "../util/firebaseConfig";

const ItemListContainer = () => {

const[products,setProducts] = useState([]);
const{ idCategory } = useParams();

useEffect( ()=>{
    const fireFetch = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dbProducts = querySnapshot.docs.map( doc => ({
                id: doc.id,
                ...doc.data()
            }));
                idCategory === undefined ? setProducts(dbProducts.sort())
                : setProducts(dbProducts.filter(product => product.categoryId === Number(idCategory)))
        }catch (err) {
            console.log(err);
        }
    }
        fireFetch()
},[idCategory])

//return
    return <ItemList products={products} />
}

export default ItemListContainer;