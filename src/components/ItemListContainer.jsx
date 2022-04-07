import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import {getData} from "../util/util" ;

const ItemListContainer = () => {


    const[cursos,setCursos] = useState([]);

    const onAdd = (number) => {
        if (number===5){
            alert("You have selected " + number + " items.");
        }
    }
    //que cada vez que renderize muestre los items
    useEffect(()=>{
      obtenerDatos()
        function obtenerDatos(){
            getData().then((data) =>{
                setCursos(data);    
            });
        }
    },[])

    return(
        <>
            <ItemList
                cursos={cursos}
            />
            <ItemCount
                initial={0}
                stock={5}
                onAdd={onAdd}
            />
        </>
    );

}

export default ItemListContainer;