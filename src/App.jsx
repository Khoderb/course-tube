import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
        <Navbar/>
        <ItemListContainer
          greeting="Hola desde greeting prop"
        />
    </div>
  );
}

export default App;


