

const itemDetail = ({ item }) => {
    return (
            <>
                {item && item.titulo ? 

                    
                    <div className="container grid grid-cols-2">
                        <h2 className="font-black text-center mt-3 relative right-20  text-2xl">{item.titulo}</h2>
                        <img src={item.img} alt="img-curso" className=" w-3/4 h-72 order-1 relative bottom-36 mx-10 rounded-lg" />
                        <div className="flex flex-col relative top-24 right-32 ">
                            <p className=" text-md m-4 text-left">Descripción:{' '}<span className="font-bold">{item.descrip}</span></p>
                            <p className=" text-md m-4 text-left">Instructor:{' '} <span className="font-bold">{item.instructor}</span></p>
                            <p className=" text-md m-4 text-left">Precio:{' '}<span className="font-bold">${item.precio}</span></p>
                            <div className="flex gap-x-10 justify-evenly">
                                <button className="añadir relative top-20 w-1/3">Añadir al Carrito</button>
                                <button className="comprar relative top-20 w-1/3">Comprar</button>
                            </div>
                        </div>
                    </div>
                        
                                : <h4 className=" someEfect m-3 font-bold text-xl ">cargando..</h4>
                        

                            
                }
            </>    
            )
}


export default itemDetail
