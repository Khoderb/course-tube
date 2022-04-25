import Item from "./Item";
import Spinner from "./Spinner";

const ItemList = ({cursos}) => {
  return (
            <>
              <h2 className="font-black text-center text-3xl mt-16">{ cursos.length === 9 ? "Todos los cursos":""}</h2>
                <div className="animate grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1 m-4 mt-6" >
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
                          <Spinner
                          />
                        </div>
                  }
                </div>
            </>
  )
}

export default ItemList
