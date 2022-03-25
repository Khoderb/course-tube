import CartWidget from "./cartWidget"

const Navbar = () => {
    
    
    return(
        <div>
            <nav className="flex justify-between pt-2 bg-orange-300 h-24 shadow-md w-full">
                <div className="ml-3">
                    <h2 className ="pt-2 px-2 font-black text-xl text-white">Course{''}<span className="text-black">Tube</span></h2>
                    <p className = "px-4">Cursos online </p>
                </div>
                <div>
                    <input className="bg-black bg-opacity-5 placeholder-white text-white  outline-0 border-0  mt-5 w-3/4 px-3 h-10 rounded-lg" type="search" id="buscar-input" placeholder="¿Qué vas a aprender hoy?"/>
                    <input className="w-1/7 p-1 bg-transparent px-10 bg rounded-lg cursor-pointer" id = "buscar-submit" value="" type="submit"  />
                </div>
                <div className="px-5 mt-6 flex gap-x-5">
                    <a href="#" className=" hover:text-white">Categorías</a>
                    <a href="#" className=" hover:text-white">Conviértete en instructor</a>
                    <a href="#" className=" hover:text-white font-bold">Sign in</a>
                    <CartWidget/>
                </div>    
            </nav>
        </div>
    )
}

export default Navbar