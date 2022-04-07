

const Item = ({
    src,
    precio,
    valor,
    titulo,
    descripcion
            }) => {

const desc = descripcion.substr(0,50);
    return (
        <>
            <div className="item w-2/3 flex flex-col mx-auto my-10 h-6/7 rounded-lg shadow-lg bg-white max-w-sm ">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img  src={src} className="w-full h-48 rounded-t-lg" alt="img product" />
                </a>
                <div className="p-6">
                    <img alt="rate" src={valor} className=" mb-2 w-1/3"/>    
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{titulo}</h5>
                    <p className="text-gray-900 font-bold float-right m-2 block w-full text-right"> 
                       <strike className="ml-10 float-left">$200</strike>{precio.toLocaleString('en-EN',{
                           style: 'currency',
                           currency: 'USD',
                        })}
                    </p> 

                    <p className=" text-left m-4">
                        {desc}...
                    </p>
                    <button type="button"  className="mx-auto float-right p-2 border-indigo-300 border-2 hover:bg-sky-600 rounded-lg ">Detalles</button>
                </div>
            </div>
        </> 
    )
}

export default Item
