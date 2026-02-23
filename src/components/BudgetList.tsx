import React from "react";
import type { Data } from "../types/data";
import "./BudgetList.css";
import DailyList from "./DailyList";

type Props = {
  entries: Data[];
  handleDelete: (id: string) => void;
};
const BudgetList = ({ entries, handleDelete }: Props) => {
  const income = entries
    .filter((entry) => {
      return entry.type === "収入";
    })
    .reduce((sum, entry) => sum + entry.amount, 0);
  const expense = entries
    .filter((entry) => {
      return entry.type === "支出";
    })
    .reduce((sum, entry) => sum + entry.amount, 0);
  const balance = income - expense;

  return (
    <>
      <div className="homeTitle">
        <h1>家計簿</h1>
      </div>
      <div className="information">
        <div>
          <h2>収支</h2>
          <p>収入: ¥{income.toLocaleString()}</p>
          <p>支出: ¥{expense.toLocaleString()}</p>
          <p>残高: ¥{balance.toLocaleString()}</p>
        </div>
      </div>
      <DailyList entries={entries} handleDelete={handleDelete} />
    </>
  );
};

export default BudgetList;
