import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import {HomeView} from "./views/HomeView";
import {UsersView} from "./views/UsersView";
import {ProductView} from "./views/ProductView";
import {FourOhFour} from "./views/FourOhFour";

function App() {

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<HomeView/>}></Route>
        <Route path="/users" element={<UsersView/>}></Route>
        <Route path="/products" element={<ProductView/>}></Route>
        <Route path="*" element={<FourOhFour/>}/>
      </Route>
    </Routes>
  );
}

export default App;
