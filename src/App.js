import logo from "./logo.svg";
import "./App.css";
import Car from "./Componenets/Car";
import Garage from "./Componenets/Garage";
import Header from "./Componenets/Header";
import FavoriteColor from "./Componenets/FavoriteColor";
import Favnum from "./Componenets/favnum";
import Scooter from "./Componenets/Scooter";
import List from "./Componenets/List";
import Timer from "./Componenets/Timer";
import MyForm from "./Componenets/MyForm";
function App() {
  const info = { carBrand: "BMW", bikeBrand: "KTM" };
  // const carBrand="BMW";
  return (
    <div className="App">
      {/* <Garage bikeBrand ="KTM" carBrand={carBrand} /> */}
      {/* <Garage info={info} /> */}
      {/* <Header/> */}
      {/* <FavoriteColor></FavoriteColor> */}
      {/* <Favnum/> */}
      {/* <Scooter/> */}
      {/* <List /> */}
      {/* <Timer /> */}
      <MyForm />
    </div>
  );
}

export default App;
