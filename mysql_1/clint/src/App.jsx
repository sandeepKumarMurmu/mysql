import { useState } from "react";
import "./App.css";
import { FormToCreate } from "./component/Form";
import { Table } from "./component/Table/Table";

function App() {
  
  return (
    <div className="container text-center userContainer">
      <div className="">
        <FormToCreate />
      </div>
      <div className="">
        <Table/>
      </div>
    </div>
  );
}

export default App;
