import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import db from "../util/firebaseConfig";

const ItemListContainer = () => {

const[cursos,setCursos] = useState([]);
const{ idCategory } = useParams();

useEffect( ()=>{
    const fb_fetch = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dbProducts = querySnapshot.docs.map( doc => ({
                id: doc.id,
                ...doc.data()
            }));
                idCategory === undefined ? setCursos(dbProducts.sort())
                : setCursos(dbProducts.filter(curso => curso.categoryId === Number(idCategory)))
        }catch (err) {
            console.log(err);
        }
    }
        fb_fetch()

},[idCategory])

//return
    return <ItemList cursos={cursos} />
}

export default ItemListContainer;