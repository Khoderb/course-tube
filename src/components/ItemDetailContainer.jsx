import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import customFetch from "../util/customFetch";
import products from "../util/util" ;
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {



    const[item, setItem] = useState({});
    const { idNumber} = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === Number(idNumber)))
            .then(item => setItem(item))
            .catch(err => console.log(err));
    }, [])

    return (
            
            < ItemDetail
                item={item} 
            />
    );
}

export default ItemDetailContainer ;