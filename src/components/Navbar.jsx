import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    
    
    return(
        <div>
            <nav className="flex justify-between pt-2 h-24 shadow-md w-full">
                
                <div className="ml-3">
                  <Link to={"/"}>
                    <h2 className ="cursor-pointer pt-3  px-2 font-black text-xl text-white">Course{''}<span className="text-black">Tube</span></h2>
                    <p className = "px-4 font-bold">Cursos online </p>
                  </Link>  
                </div>
                
                <div>
                    <input className="inputSearch placeholder-white placeholder-opacity-50 text-white  outline-0 border-0  mt-5 w-3/4 px-3 h-10 rounded-lg" type="search" id="buscar-input" placeholder="¿Qué quieres aprender?"/>
                    <input className="w-1/7 p-1 bg-transparent px-10 bg rounded-lg cursor-pointer" id = "buscar-submit" value="" type="submit"  />
                </div>
                
                <div className="px-5 mt-6 flex gap-x-5">
                    <Link to="/category/10"><button className=" font-bold hover:text-white">Programación</button></Link>
                    <Link to="/category/20"><button className=" font-bold hover:text-white">Música</button></Link>
                    <Link to="/category/30"><button className=" font-bold hover:text-white">Mobile Apps</button></Link>
                    <Link to="/category/40"><button className=" font-bold hover:text-white">Electrónica</button></Link>
                </div>
                
                <div className="flex justify-end mt-6">
                    <a href="#" className=" font-black hover:text-white">Sign in</a>
                    <CartWidget/>
                </div>    
            </nav>
        </div>
    )
}

export default Navbar;