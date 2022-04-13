import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import customFetch from "../util/customFetch";
import products from "../util/util" ;


const ItemListContainer = () => {


    const[cursos,setCursos] = useState([]);
    const{ idCategory } = useParams();
  
    useEffect(()=>{
        idCategory === undefined ? (
            customFetch(2000,products)
                .then(data =>setCursos(data))
                .catch(err => console.log(err))    
            ):(
             customFetch(2000, products.filter(product => product.categoryId === Number(idCategory)))
                 .then(data => setCursos(data))
                 .catch(err => console.log(err))
            )
           
    },[idCategory])
    
    return(
        <>
            <ItemList
                cursos={cursos}
            />
            
        </>
    );
}

export default ItemListContainer;