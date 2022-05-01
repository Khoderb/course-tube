import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import db from '../util/firebaseConfig';


const ItemDetailContainer = () => {

const [ item, setItem ] = useState({});
const { id } = useParams();

useEffect(() => {

    const fireFetch = async () => { 
        try {  
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) setItem({...docSnap.data(), id: docSnap.id});

        } catch (error) {
            console.log("Error getting document:", error);
        }
    }
    fireFetch();
}, [])

    return (
            < ItemDetail
                item={item} 
            />
    );
}

export default ItemDetailContainer ;