import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Menu from './components/Menu';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div >
      <Menu />
      <ItemListContainer greeting="Hola Mundo!"/>
    </div>
  );
}

export default App;
