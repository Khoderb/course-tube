import Item from "./Item";
import Spinner from "./Spinner";

const ItemList = ({products}) => {
  return (
            <>
              <h2 className="font-black text-center text-3xl mt-16">{ products.length === 9 && "Learn Something New"}</h2>
                <div className="animate grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1 m-4 mt-6" >
                  { 
                    products.length > 0 ? 
                      products.map(course => (
                        <Item
                            key={course.id}
                            src={course.img}
                            price={course.price}
                            title={course.title}   
                            descrip={course.descrip}   
                            id={course.id}
                            quantity={course.quantity}
                        />
                      ))
                      : <div className="position">
                          <Spinner
                          />
                        </div>
                  }
                </div>
            </>
  )
}

export default ItemList
