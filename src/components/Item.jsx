import { Link } from "react-router-dom";
import { format } from "../util/helpers";


const Item = ({ title, src, descrip, price, id }) => {

const desc = descrip.substr(0,50);

    return (
        <>
            <div className=" item w-2/3 flex flex-col mx-auto my-10 h-6/7 rounded-lg shadow-lg bg-white max-w-sm ">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img  src={src} className="w-full h-48 rounded-t-lg" alt={`img product ${title}`} />
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <p className="text-gray-900 font-bold float-right m-2 block w-full text-right"> 
                       <strike className="ml-10 float-left">$200</strike>{format(price)}
                    </p> 

                    <p className=" text-left m-4">
                        {desc}...
                    </p>
                    <Link to={`/item/${id}`}>
                        <button className="mx-auto float-right p-2 border-indigo-300 border-2 hover:bg-sky-600 transition-colors rounded-lg ">Details</button>
                    </Link>
                </div>
            </div>
        </> 
    );
}

export default Item;
