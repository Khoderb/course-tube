import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = (number) => {
        if (number===5){
            alert("You have selected " + number + " items.");
        }
    }


    return(
        <>
            {greeting}
            <ItemCount
                initial={0}
                stock={5}
                onAdd={onAdd}
            />
        </>
    );

}

export default ItemListContainer;