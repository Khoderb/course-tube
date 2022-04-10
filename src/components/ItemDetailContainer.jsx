import { useState , useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { getItem} from '../util/customFetch'




const ItemDetailContainer = () => {

    const[item, setItem] = useState({});

    useEffect(() => { 
        getItem()
            .then(item => setItem(item))
            .catch(err=>console.log(err))
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