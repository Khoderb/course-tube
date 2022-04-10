import { useState , useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {customFetch} from '../util/customFetch'




const ItemDetailContainer = () => {

    const[item, setItem] = useState({});

    useEffect(() => { 
        customFetch()
            .then((item) => setItem(item))
    }, [])


    return (
        <div>
            < ItemDetail 
                item={item}
            />
        </div>
    )
}

export default ItemDetailContainer 