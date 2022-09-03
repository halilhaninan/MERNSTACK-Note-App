import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

// import { useSelector, useDispatch } from "react-redux";
// import { girisYap, topla, cikar } from "./actions";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Counter from "./features/counter/counter";
import "./App.css";

function App() {
  // return (
  //   <div>
  //     <Counter />
  //   </div>
  // );
  return (
    <>
      <Router>
        <div className="container">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
  //
  //
  //
  // const giris = useSelector((state) => state.giris);
  // const hesapla = useSelector((state) => state.hesapla);
  // const dispatch = useDispatch();
  // return (
  //   <div className="app">
  //     {giris ? (
  //       <>
  //         {hesapla}
  //         <button onClick={() => dispatch(topla())}>+</button>
  //         <button onClick={() => dispatch(cikar())}>-</button>
  //       </>
  //     ) : (
  //       <>
  //         <h3>please sign in</h3>
  //         <button onClick={() => dispatch(girisYap())}>sign in</button>
  //       </>
  //     )}
  //   </div>
  // );
}

export default App;
