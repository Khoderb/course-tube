import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const Navbar = () => {
    return(

             <nav className="grid md:grid-cols-4 grid-cols-1 xl:grid-cols-5 pt-2 h-28 shadow-md w-full">
                <div className="ml-3">
                  <Link to={"/"}>
                    <h2 className ="cursor-pointer pt-4 px-2 font-black text-3xl text-white">Course{''}
                    <span className="text-black logo">Tube</span></h2>
                    <p className = "px-4 text-xl font-bold">Cursos online</p>
                  </Link>  
                </div>
                
                <div>
                    <input className="inputSearch shadow-md w-1/2 placeholder-white placeholder-opacity-50 text-white outline-0 border-0 mt-6  px-3 h-10 rounded-lg" type="text" id="buscar-input" placeholder="¿Qué quieres aprender?"
                    />
                </div >
                <div className="mt-8 ml-3">
                    <button id="buscar-submit"><img src="../src/public/img/lupa.png"></img></button>
                </div>
                <div className=" flex justify-evenly items-start mt-5 gap-x-10 ">
                    <Link to="/category/10"><button className="link">Programación</button></Link>
                    <Link to="/category/20"><button className="link">Música</button></Link>
                    <Link to="/category/30"><button className="link">Mobile Apps</button></Link>
                    <Link to="/category/40"><button className="link">Electrónica</button></Link>
                    <button className="text-xl logo hover:text-white mt-2 font-black">Login</button>
                    <Link to="/cart"><CartWidget/></Link>
                </div>
            </nav>          
    )
}

export default Navbar