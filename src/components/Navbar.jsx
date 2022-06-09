import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {

    return(
            <nav className="custom grid md:grid-cols-3 grid-cols-1 xl:grid-cols-5 pt-2 sm:h-auto pb-3 shadow-md w-full">
                <div className="ml-3 logo ">
                  <Link to={"/"}>
                    <h2 className ="cursor-pointer pt-4 px-2 font-black text-3xl text-white">Course{''}
                    <span className="text-black logo">Tube</span></h2>
                    <p className ="px-4 text-xl font-bold">Online Learning</p>
                  </Link>  
                </div>
                
                <div className="xl:w-full w-1/2">
                    <input className="inputSearch shadow-md placeholder-white placeholder-opacity-50 text-white outline-0 border-0      mt-6  px-3 h-10 rounded-lg" type="text" placeholder="¿What do you wont to learn?"
                    />
                </div >
                <div className="mt-8 ml-3 ">
                    <button className="searchBtn">
                        <svg className="p w-7 h-7"
                            id="buscar-submit" 
                            fill="none" stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">  
                        <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
                <div className="responsive flex justify-evenly items-start mt-5">
                    <Link to="/category/10"><button className="link" >Programing</button></Link>
                    <Link to="/category/20"><button className="link" >Music</button></Link>
                    <Link to="/category/30"><button className="link" >MobileApps</button></Link>
                    <Link to="/category/40"><button className="link" >Electronic</button></Link>
                    <button className="text-xl m-3 login hover:text-white mt-2 font-black">Login</button>
                    <Link to="/cart"><CartWidget/></Link>
                </div>
            </nav>          
    )
}

export default Navbar