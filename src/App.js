import "./App.css";
import Item from "./component/Item";
import ValueCart from "./component/ValueCart";

function App() {
  return (
    <div className="App">
      <Item name="Macbook Air M1" price={999900} />
      <Item name="Apple Pencil" price={5000} />
      <Item name="Iphone" price={40000} />
      <ValueCart />
    </div>
  );
}

export default App;
