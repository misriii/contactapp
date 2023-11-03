import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleView from "./pages/SingleView";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/SingleView/:name" element={<SingleView></SingleView>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
