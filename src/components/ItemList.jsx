import Item from "./Item";
import Spinner from "./Spinner";

const ItemList = ({cursos}) => {
  return (
            <div className="overflow-x-hidden">
                <h2 className="font-black text-center text-3xl mt-16">{ cursos.length === 9 ? "Todos los cursos":null}</h2>
                <div className="container grid md:grid-cols-3 sm:grid-cols-1 m-4 mt-6" >
                  { 
                    cursos.length > 0 ? 
                      cursos.map(curso => (
                        <Item
                            key={curso.id}
                            src={curso.img}
                            precio={curso.precio}
                            titulo={curso.titulo}   
                            descripcion={curso.descrip}   
                            id={curso.id}
                            stock={curso.stock}
                            cantidad={curso.cantidad}
                        />
                      ))
                      : <div className="position">
                          <Spinner/>
                        </div>
                  }
                </div>
            </div>
  )
}

export default ItemList
