import React, { useState } from "react";
import Menu from "./components/Menu";
import Customers from "./components/Customers";
import data from "./data.json";

const App = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <>
      <header>
        <Menu activeItem={activeItem} setActiveItem={setActiveItem} />
      </header>
      <main>
        <h1>Привіт {data.user}</h1>
        {activeItem === "Customers" && <Customers customers={data.customers} />}
      </main>
    </>
  );
};

export default App;
