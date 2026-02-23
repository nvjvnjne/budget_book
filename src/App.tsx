import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import type { Data, entry } from "./types/data";
import Navbar from "./components/Navbar";
import BudgetList from "./components/BudgetList";
import InputForm from "./components/InputForm";

function App() {
  const [entries, setEntries] = useState<Data[]>([]);

  const onclickAdd = (data: Data) => {
    setEntries((prev) => [...prev, data]);
  };

  const handleDelete = (id: string) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BudgetList entries={entries} handleDelete={handleDelete} />}></Route>
          <Route path="/form" element={<InputForm add={onclickAdd} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
