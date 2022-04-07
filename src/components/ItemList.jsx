import Item from "./Item";

const ItemList = ({cursos}) => {
  return (
    <>
        <h2 className="font-black text-center text-2xl mt-16">Todos los cursos</h2>
        <div className="container grid md:grid-cols-3 sm:grid-cols-1 m-4 mt-6" >
           { cursos.map(curso => (
               <Item
                    key={curso.id}
                    src={curso.img}
                    precio={curso.precio}
                    titulo={curso.titulo}   
                    descripcion={curso.descrip}   
                />
              ))}
        </div>
    </>
  )
}

export default ItemList
