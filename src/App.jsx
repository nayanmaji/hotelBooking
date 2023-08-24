import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext, useEffect} from "react";
import RoomContext from "./context/RoomContext";
import NavBar from './Component/NavBar'
import Home from './Component/Home';
import Login from './Component/Login'
import SignUp from './Component/Signup';
import Hotels from './Component/Hotels';
import Details from './Component/Details';
import Support from './Component/Support'
function App() {
  const context = useContext(RoomContext);
  const { rooms,getallRoom} = context;
  useEffect(() => {
      getallRoom();
    // eslint-disable-next-line   
  }, []);
// console.log(rooms._id)
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Hotels" element={<Hotels key={rooms._id} rooms={rooms}/>} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route exact path=":_id" element={<Details key={rooms._id} rooms={rooms}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
